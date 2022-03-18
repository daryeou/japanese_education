package kr.dreamfox.japanese;

import org.junit.Before;
import org.junit.Test;

import java.lang.annotation.Documented;

import static org.junit.Assert.*;

import java.lang.annotation.*;
import java.lang.reflect.Field;

enum Planet {
    MERCURY(3.302e+23, 2.439e6),
    VENUS (4.869e+24, 6.052e6),
    EARTH (5.975e+24, 6.378e6),
    MARS (6.419e+23, 3.393e6),
    JUPITER(1.899e+27, 7.149e7),
    SATURN (5.685e+26, 6.027e7),
    URANUS (8.683e+25, 2.556e7),
    NEPTUNE(1.024e+26, 2.477e7);

    private final double mass;              // 질량(단위: kg)
    private final double radius;            // 반지름(단위: m)
    private final double surfaceGravity;    // 표면중력(단위: m / s^2)

    // 중력상수(단위: m^3 / kg s^2)
    private static final double G = 6.67300E-11;

    // Constructor
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
        surfaceGravity = G * mass / (radius * radius);
    }

    public double mass() { return mass; }
    public double radius() { return radius; }
    public double surfaceGravity() { return surfaceGravity; }
    /* 해당 행성에서의 무게를 구한다 */
    public double surfaceWeight(double mass) {
        return mass * surfaceGravity; // F = ma
    }
}

@Inherited
@Documented
//@Retention(RetentionPolicy.RUNTIME) // 컴파일 이후에도 JVM에 의해서 참조가 가능합니다.
//@Retention(RetentionPolicy.CLASS) // 컴파일러가 클래스를 참조할 때까지 유효합니다.
@Retention(RetentionPolicy.SOURCE) // 어노테이션 정보는 컴파일 이후 없어집니다.
@Target({
        ElementType.PACKAGE, // 패키지 선언시
        ElementType.TYPE, // 타입 선언시
        ElementType.CONSTRUCTOR, // 생성자 선언시
        ElementType.FIELD, // 멤버 변수 선언시
        ElementType.METHOD, // 메소드 선언시
        ElementType.ANNOTATION_TYPE, // 어노테이션 타입 선언시
        ElementType.LOCAL_VARIABLE, // 지역 변수 선언시
        ElementType.PARAMETER, // 매개 변수 선언시
        ElementType.TYPE_PARAMETER, // 매개 변수 타입 선언시
        ElementType.TYPE_USE // 타입 사용시
})
@interface MyAnnotation {
    /* enum 타입을 선언할 수 있습니다. */
    public enum Quality {BAD, GOOD, VERYGOOD}

    /* String은 기본 자료형은 아니지만 사용 가능합니다. */
    String value();

    /* 배열 형태로도 사용할 수 있습니다. */
    int[] values();

    /* enum 형태를 사용하는 방법입니다. */
    Quality quality() default Quality.GOOD;

    int num() default 1;
}


@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@interface StringInjector {
    String value() default "this is StringInjection";
}
class MyObject {
    @StringInjector("Hello world")
    private String name;

    @StringInjector
    private String defaultValue;

    @StringInjector
    protected String testValue;

    public String getName() {
        return name;
    }

    public String getDefaultValue() {
        return defaultValue;
    }

    public String getTestValue() {
        return testValue;
    }
}
class MyContextContainer {

    public MyContextContainer(){}

    private <T> T invokeAnnotations(T instance) throws IllegalAccessException{
        Field[] fields = instance.getClass().getDeclaredFields();
        for(Field field : fields){
            StringInjector annotation = field.getAnnotation(StringInjector.class);
            if(annotation != null && field.getType()==String.class){
                field.setAccessible(true);
                field.set(instance, annotation.value());
            }
        }
        return instance;
    }
    public <T> T get(Class clazz) throws IllegalAccessException, InstantiationException{
        T instance = (T) clazz.newInstance();
        instance = invokeAnnotations(instance);
        return instance;
    }
}

public class Calculatortest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    @Test
    public void addTests() {
        int result = calculator.add(15, 10);
        assertEquals(25, result);
    }

    @Test
    public void subtractTest() {
        int result = calculator.subtract(15, 10);
        assertEquals(5, result);
    }

    @Test
    public void AnnotationDemo(){
        MyContextContainer demo = new MyContextContainer();
        MyObject obj = null;
        try {
            obj = demo.get(MyObject.class);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        }
        System.out.println(obj.getName());
        System.out.println(obj.getDefaultValue());
        System.out.println(obj.getTestValue());
    }

}
