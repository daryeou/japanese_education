var mode=0;
let selected_id = -1;
let _x100;
let _y100;
let _x,_y;
let sensivility=10;

let imgList1 = ["img/game/drink/ホットチョコレート.png",
"img/game/drink/コーヒー.png",
"img/game/drink/ぎゅうにゅう.png",
"img/game/drink/とうにゅう.png",
"img/game/drink/おちゃ.png"];
let imgList2 = ["img/game/drink/レモネード.png",
"img/game/drink/アイスティー.png",
"img/game/drink/オレンジジュース.png",
"img/game/drink/りんごジュス.png",
"img/game/drink/みず.png"];

let eventList_none = [function(){},function(){},function(){},function(){},function(){}];
let textOrder=[[3,4,0,1,2],[0,3,1,2,4]];
let setLocation=[[[18,29],[51,29],[82,29],[33,64],[73,63]],[[18,29],[51,29],[82,29],[33,64],[73,63]]];
let eventList = [
    [
        function () {
            document.getElementById("content").innerHTML = "ホットチョコレート hot chocolate";
        },
        function () {
            document.getElementById("content").innerHTML = "コーヒー           coffee";
        },
        function () {
            document.getElementById("content").innerHTML = "ぎゅうにゅう       milk";
        },
        function () {
            document.getElementById("content").innerHTML = "とうにゅう         soybean milk";
        },
        function () {
            document.getElementById("content").innerHTML = "おちゃ             tea";
        }
    ],
    [
        function () {
            document.getElementById("content").innerHTML = "レモネード         lemonade";
        },
        function () {
            document.getElementById("content").innerHTML = "アイスティー       icetea";
        },
        function () {
            document.getElementById("content").innerHTML = "オレンジジュース   orangejuice";
        },
        function () {
            document.getElementById("content").innerHTML = "りんごジュス       apple juice";
        },
        function () {
            document.getElementById("content").innerHTML = "みず               water";
        }
    ]
];

window.addEventListener('load',function(){
    nextpage(0);
});

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
    let elemnum=textOrder[mode][selected_id];
    console.log(_x100+" "+_y100);
    console.log(setLocation[mode][elemnum][0]+" "+setLocation[mode][elemnum][1]);
    if(setLocation[mode][elemnum][0]-sensivility<=_x100 && setLocation[mode][elemnum][0]+sensivility>=_x100){
        if(setLocation[mode][elemnum][1]-sensivility<=_y100 && setLocation[mode][elemnum][1]+sensivility>=_y100){
            this.classList.add("rotateBoth");
            this.removeEventListener("touchmove",handleMove,false);
            this.style.left=setLocation[mode][elemnum][0]/100*document.body.offsetWidth- parseInt(this.offsetWidth/2)+"px";
            this.style.top=setLocation[mode][elemnum][1]/100*document.body.offsetHeight-parseInt(this.offsetHeight/2)+"px";
            eventList[mode][selected_id]();
            music("img/game/correct.mp3");
        }
    } 
}
function handleEnd(event){
    this.classList.remove("rotateBoth");
    selected_id = -1;
}

function nextpage(change){
    if(change>0) {
        mode = mode == 0? 1:0;
    }
    let elem = document.getElementsByClassName("item");
    for(let i of elem){
        i.removeAttribute('style');
        i.innerHTML="";
    }
    addTouchEvent("container5");
    if(mode == 0){
        document.getElementById("background").setAttribute("src","img/game/drink/drinks_play_1(background).png");
        document.getElementById("background").classList.add('opacity');
        new Add_img("container5",imgList1,"fadeIn",eventList_none).apply();
    }else{
        document.getElementById("background").setAttribute("src","img/game/drink/drinks_play_2(background).png");
        document.getElementById("background").classList.add('opacity');
        new Add_img("container5",imgList2,"fadeIn",eventList_none).apply();
    }
}

