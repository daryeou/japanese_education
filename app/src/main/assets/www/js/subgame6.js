
var mode=0;
let selected_id = -1;
let _x100;
let _y100;
let _x,_y;
let timer;
let sensivility=10;
let total_page=8;
let eventFunctions;
window.showtext=1;
let imgList = [
    [
        '',"img/game/draw/1/1.png",'',
        "img/game/draw/1/2.png",'',
        "img/game/draw/1/3.png",'',
        "img/game/draw/1/4.png",'',
        "img/game/draw/1/5.png"
    ],[
        '',"img/game/draw/2/1.png",'',
        "img/game/draw/2/2.png",'',
        "img/game/draw/2/3.png",'',
        "img/game/draw/2/4.png",'',
        "img/game/draw/2/5.png"
    ],[
        '',"img/game/draw/3/1.png",'',
        "img/game/draw/3/2.png",'',
        "img/game/draw/3/3.png",'',
        "img/game/draw/3/4.png",'',
        "img/game/draw/3/5.png"
    ],[
        '',"img/game/draw/4/1.png",'',
        "img/game/draw/4/5.png",'',
        "img/game/draw/4/2.png",'',
        "img/game/draw/4/3.png",'',
        "img/game/draw/4/4.png"
    ],[
        '',"img/game/draw/5/1.png",'',
        "img/game/draw/5/2.png",'',
        "img/game/draw/5/3.png",'',
        "img/game/draw/5/4.png",'',
        "img/game/draw/5/5.png"
    ],[
        '',"img/game/draw/6/1.png",'',
        "img/game/draw/6/2.png",'',
        "img/game/draw/6/3.png",'',
        "img/game/draw/6/4.png",'',
        "img/game/draw/6/5.png"
    ],[
        '',"img/game/draw/7/1.png",'',
        "img/game/draw/7/2.png",'',
        "img/game/draw/7/3.png",'',
        "img/game/draw/7/4.png",'',
        "img/game/draw/7/5.png"
    ],[
        '',"img/game/draw/8/1.png",'',
        "img/game/draw/8/2.png",'',
        "img/game/draw/8/3.png",'',
        "img/game/draw/8/4.png",'',
        "img/game/draw/8/5.png"
    ]
];
let imgList1=['img/game/draw/1.png','img/game/draw/2.png','img/game/draw/3.png','img/game/draw/4.png','img/game/draw/5.png','img/game/draw/6.png','img/game/draw/7.png','img/game/draw/8.png'];

let subAnim=["img/game/draw/인사말손가락애니_1.png","img/game/draw/인사말손가락애니_2.png","img/game/draw/인사말손가락애니_3.png"];

let names = [
    [
        '',
        'おはよう',
        '',
        'こんにちは',
        '',
        'こんばんは',
        '',
        'さようなら',
        '',
        'じゃ、また'
    ],
    [
        '',
        'はじめまして',
        '',
        'かんこく',
        '',
        '日本',
        '',
        'はい',
        '',
        'ちゅうごく'
    ],
    [
        '',
        'いってきます',
        '',
        'ただいま',
        '',
        'おかえりなさい',
        '',
        'おじゃまします',
        '',
        'ありがとうございます'
    ],
    [
        '',
        'きょう',
        '',
        'たんじょうび',
        '',
        'おめでとう',
        '',
        'いただきます',
        '',
        'どうして'
    ],
    [
        '',
        'だめだ',
        '',
        'はやく',
        '',
        'すみません',
        '',
        'じゅぎょう',
        '',
        'ごぜん'
    ],
    [
        '',
        'ちいさい',
        '',
        'じょうずだ',
        '',
        'まだまだ',
        '',
        'はじまります',
        '',
        'いいえ'
    ],
    [
        '',
        'りょうり',
        '',
        'できる',
        '',
        'もちろん',
        '',
        'いっしょに',
        '',
        'あした'
    ],
    [
        '',
        'やきゅう',
        '',
        'おねがい',
        '',
        'じつは',
        '',
        'しゃしん',
        '',
        'いきたい'
    ]
];


let eventList = [function(){},function(){},function(){},function(){}];
let eventList1 = [function(){mode=0; nextpage(0);},function(){mode=1; nextpage(0);},function(){mode=2; nextpage(0);},function(){mode=3; nextpage(0);},function(){mode=4; nextpage(0);},function(){mode=5; nextpage(0);},function(){mode=6; nextpage(0);},function(){mode=7; nextpage(0);}];

window.addEventListener('load',function(){
    nextpage(0);
    eventFunctions=new Add_exp(names);
});

function start(){
    let i=0;
    timer = setInterval(function(){
        document.getElementById('').src=`${subAnim[i]}`;
        i= (i+1)>=3?clearTimeout(timer):i+1;
    },300);
}

function addTouchEvent(id){
    let elements = document.getElementById(id).children;
    console.log(elements[0].offsetWidth);
    for(let element of elements){
        element.addEventListener("touchend",handleEnd,false);
    }
}


function handleEnd(event){
    selected_id = this.dataset.num;
    this.children[0].setAttribute('style',`position: fixed; right:27%; bottom:19%; width:${this.offsetWidth+'px'}`);
    console.log('selected_id: ', selected_id);
    document.querySelector('#tongs').classList.add('movetongs');
    this.children[0].classList.add('moveball');
    music("img/game/draw/인형뽑기소리.mp3");
    /* 이벤트 종료 후 */
    setTimeout(function(){
        eventFunctions.addExp(mode,selected_id);
        music("img/game/draw/"+(mode+1)+"/"+(Math.floor(selected_id/2)+1)+".m4a");
    },12000);
}

function nextpage(num){
    addTouchEvent("container10");
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
    document.getElementById("background").classList.add('opacity');
    new Add_img("container10",imgList[mode],"no",eventList).apply();
    new Add_img("container8",imgList1,"no",eventList1).apply();
    let elements = document.getElementsByClassName("item");
    for(let element of elements){
        console.log(element);
        element.children[0].addEventListener("animationend",function(){
            this.classList.add("none");
            this.classList.remove("opacityAlternate");
        },false);
    }
    document.getElementById('tongs').addEventListener('animationend',function(){this.classList.remove("movetongs");});
}

