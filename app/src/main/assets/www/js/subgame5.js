var mode=0;
let selected_id = -1;
let _x100;
let _y100;
let _x,_y;
let timer;
let sensivility=10;
let total_page=10;
let is_correct=0;
let eventFunctions;
let imgList = [
    [
        "img/game/treasure/1/1.png",
        "img/game/treasure/1/2.png",
        "img/game/treasure/1/3.png",
        "img/game/treasure/1/4.png"
    ],[
        "img/game/treasure/2/1.png",
        "img/game/treasure/2/2.png",
        "img/game/treasure/2/3.png",
        "img/game/treasure/2/4.png"
    ],[
        "img/game/treasure/3/1.png",
        "img/game/treasure/3/2.png",
        "img/game/treasure/3/3.png",
        "img/game/treasure/3/4.png"
    ],[
        "img/game/treasure/4/1.png",
        "img/game/treasure/4/2.png",
        "img/game/treasure/4/3.png",
        "img/game/treasure/4/4.png"
    ],[
        "img/game/treasure/5/1.png",
        "img/game/treasure/5/2.png",
        "img/game/treasure/5/3.png",
        "img/game/treasure/5/4.png"
    ],[
        "img/game/treasure/6/1.png",
        "img/game/treasure/6/2.png",
        "img/game/treasure/6/3.png",
        "img/game/treasure/6/4.png"
    ],[
        "img/game/treasure/7/1.png",
        "img/game/treasure/7/2.png",
        "img/game/treasure/7/3.png",
        "img/game/treasure/7/4.png"
    ],[
        "img/game/treasure/8/1.png",
        "img/game/treasure/8/2.png",
        "img/game/treasure/8/3.png",
        "img/game/treasure/8/4.png"
    ],[
        "img/game/treasure/9/1.png",
        "img/game/treasure/9/2.png",
        "img/game/treasure/9/3.png",
        "img/game/treasure/9/4.png"
    ],[
        "img/game/treasure/10/1.png",
        "img/game/treasure/10/2.png",
        "img/game/treasure/10/3.png",
        "img/game/treasure/10/4.png"
    ]
];
let background_img = [
    'img/game/treasure/보물찾기_1(뒷배경).png',
    'img/game/treasure/보물찾기_2(뒷배경).png',
    'img/game/treasure/보물찾기_3(뒷배경).png',
    'img/game/treasure/보물찾기_4(뒷배경).png',
    'img/game/treasure/보물찾기_5(뒷배경).png',
    'img/game/treasure/보물찾기_6(뒷배경).png',
    'img/game/treasure/보물찾기_7(뒷배경).png',
    'img/game/treasure/보물찾기_8(뒷배경).png',
    'img/game/treasure/보물찾기_9(뒷배경).png',
    'img/game/treasure/보물찾기_10(뒷배경).png'
];
let mainAnim=["img/game/treasure/인사말손가락애니_1.png","img/game/treasure/인사말손가락애니_2.png","img/game/treasure/인사말손가락애니_3.png"];
let soundList=["4_　おはよう(아침인사)","1_　ただいま(다녀왔어요)","3_　じゃ、また(그럼,또)","10_　いってきます(다녀오겠습니다.)","3_　こんにちは","2_　いただきます","8_　また、あした","10_　おめでとうございます","8_　はじめまして。(처음뵙겠습니다.)","7_　おやすみ(잘 자)"];
let names=['정답!','훌륭해요!','','','','','','','','']

let eventList = [function(){},function(){},function(){},function(){}];
let correctNum=[2,0,3,0,1,3,0,1,0,3];
let setLocation=[[57.5,41],[42.5,41],[57.5,41],[60,41],[72,40],[92,41],[57,41],[30,44],[19,41],[57,41]];

window.addEventListener('load',function(){
    nextpage(0);
    eventFunctions=new Add_exp(names);
    let i=1;
    timer = setInterval(function(){
        document.getElementById('temp_2').src=`${mainAnim[i]}`;
        i= (i+1)%3;
    },700);
});

function start(){
    clearTimeout(timer);
    document.getElementById('temp_main').removeChild(document.getElementById('temp_1'));
    document.getElementById('temp_main').removeChild(document.getElementById('temp_2'));
    document.getElementById('temp_main').parentNode.removeChild(document.getElementById('temp_main'));
}

function addTouchEvent(id){
    let elements = document.getElementById(id).children;
    console.log(elements[0].offsetWidth);
    for(let element of elements){
        element.addEventListener("touchstart",handleStart,false);
        element.addEventListener("touchmove",handleMove,false);
        element.addEventListener("touchend",handleEnd,false);
    }
}

function handleStart(event){
    this.style.width=this.offsetWidth+"px";
    this.style.height=this.offsetHeight+"px";
    this.style.position="fixed";
    selected_id = this.dataset.num;
    console.log('selected_id: ', selected_id);
}
function handleMove(event){
    _x = event.changedTouches[0].pageX, _y = event.changedTouches[0].pageY;
    this.style.left=_x- parseInt(this.offsetWidth/2)+"px";
    this.style.top=_y-parseInt(this.offsetHeight/2)+"px";
    _x100=_x/document.body.offsetWidth*100;
    _y100=_y/document.body.offsetHeight*100;
    console.log(_x100+" "+_y100);
    if(selected_id==correctNum[mode]){
        if(setLocation[mode][0]-sensivility<=_x100 && setLocation[mode][0]+sensivility>=_x100){
            if(setLocation[mode][1]-sensivility<=_y100 && setLocation[mode][1]+sensivility>=_y100){
                this.classList.add("rotateBoth");
                this.removeEventListener("touchmove",handleMove,false);
                this.style.left=setLocation[mode][0]/100*document.body.offsetWidth- parseInt(this.offsetWidth/2)+"px";
                console.log('setLocation[mode][0]: ', setLocation[mode][0]);
                this.style.top=setLocation[mode][1]/100*document.body.offsetHeight-parseInt(this.offsetHeight/2)+"px";
                console.log('setLocation[mode][1]: ', setLocation[mode][1]);
                eventFunctions.addExp_(mode);
                is_correct=1;
                music("img/game/correct.mp3",0.2);
                music("img/game/balloon/sound/"+soundList[mode]+".m4a");
            }
        } 
    }else{
        
    }
}
function handleEnd(event){
    this.classList.remove("rotateBoth");
    selected_id = -1;
    is_correct==0? nextpage(0):null;
    is_correct==0? music("img/game/wrong.wav"):null;
    is_correct=0;
}
function playsound(){
    music("img/game/balloon/sound/"+soundList[mode]+".m4a");
}

function nextpage(num){
    addTouchEvent("container4");
    document.getElementById("background").classList.remove('opacity');
    if(num == 0){
    }else{
        event.preventDefault();
        let elem = document.getElementsByClassName("item");
        for(let i of elem){
            i.innerHTML="";
        }
        if(num == 1){
            mode= (mode+1)%total_page;
            mode==total_page-1?document.getElementsByClassName('bt_noAction')[0].classList.add('none'):null;
            document.getElementsByClassName('bt_noAction')[1].classList.remove('none');
        }else{
            mode= Math.abs((mode-1)%total_page);
            mode==0?document.getElementsByClassName('bt_noAction')[1].classList.add('none'):null;
            document.getElementsByClassName('bt_noAction')[0].classList.remove('none');
        }
    }
    console.log(mode);
    document.getElementById("background").setAttribute("src",background_img[mode]);
    document.getElementById("background").classList.add('opacity');
    new Add_img("container4",imgList[mode],"fadeIn",eventList).apply();
    /*temp 사이즈 적용*/
    if(mode==7){
        document.getElementById('container4').classList.add('temp_size');
    }else{
        document.getElementById('container4').classList.remove('temp_size');
    }
}

