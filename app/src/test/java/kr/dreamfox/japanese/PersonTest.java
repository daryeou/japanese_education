package kr.dreamfox.japanese;

import org.junit.Test;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class PersonTest {

    @Test
    public void test() {
        Person p = mock(Person.class);
        assertTrue(p != null);

        when(p.getName()).thenReturn("BlackJin");
        when(p.getAge()).thenReturn(27);

        assertTrue("BlackJin".equals(p.getName()));
        assertTrue(27 == p.getAge());
    }
}