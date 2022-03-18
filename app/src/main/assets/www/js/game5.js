var mode=0;
let selected_id = 0;

let textList=[['','','','','',''],['','','','','','']];
let imgList1 = ["img/game/drink/コーヒー.png", 
"img/game/drink/ホットチョコレート.png",
"img/game/drink/ぎゅうにゅう.png",
"img/game/drink/とうにゅう.png",
"", 
"img/game/drink/おちゃ.png"];
let imgList2 = ["img/game/drink/りんごジュス.png",
"img/game/drink/レモネード.png",
"img/game/drink/アイスティー.png",
"img/game/drink/みず.png",
"",
"img/game/drink/オレンジジュース.png"];

window.addEventListener('load',function(){
    nextpage(0);
});
let eventList1 = [
    function () {
        document.getElementById("content").innerHTML = "コーヒー           coffee  ";
        music("img/game/drink/배우기1_1코히(커피).mp3");
    },function () {
        document.getElementById("content").innerHTML = "ホットチョコレート hot chocolate";
        music("img/game/drink/배우기1_2홋토초코레토(핫초코).mp3");
    },function () {
        document.getElementById("content").innerHTML = "ぎゅうにゅう       milk";
        music("img/game/drink/배우기1_3규뉴(우유).mp3");
    },function () {
        document.getElementById("content").innerHTML = "とうにゅう         soybean milk";
        music("img/game/drink/배우기1_4토뉴(베지밀).mp3");
    },function () {
        document.getElementById("content").innerHTML = "";
    },function () {
        document.getElementById("content").innerHTML = "おちゃ             tea";
        music("img/game/drink/배우기1_5오챠(녹차).mp3");
    }
];
let eventList2 = [
    function () {
        document.getElementById("content").innerHTML = "りんごジュス       apple juice";
        music("img/game/drink/배우기2_1링고쥬스(사과주스).mp3");
    },function () {
        document.getElementById("content").innerHTML = "レモネード         lemonade";
        music("img/game/drink/배우기2_2레모네도(레모네이드).mp3");
    },function () {
        document.getElementById("content").innerHTML = "アイスティー       icetea";
        music("img/game/drink/배우기2_3아이스티.mp3");
    },function () {
        document.getElementById("content").innerHTML = "みず               water";
        music("img/game/drink/배우기2_4미즈(물).mp3");
    },function () {
        document.getElementById("content").innerHTML = "";
    },function () {
        document.getElementById("content").innerHTML = "オレンジジュース   orangejuice";
        music("img/game/drink/배우기2_5오렌지쥬스.mp3");
    },
];

function addTouchEvent(id,num){
    let elements = document.getElementById(id).children;
    for(let i=0; i<elements.length; i++){
        elements[i].addEventListener("touchstart",function(){
            selected_id = parseInt(this.dataset.num)+parseInt(num);
            document.getElementById("content").innerHTML=textList[mode][i];
            document.getElementsByClassName("item")[selected_id].classList.remove("hidden");
        },false);
    }
}

function nextpage(change){
    if(change>0) {
        mode = mode == 0? 1:0;
        let elements = document.getElementsByClassName("item");
        for(let element of elements){
            element.classList.add("hidden");
        }
    }
    let elem = document.getElementsByClassName("item");
    for(let i of elem){
        i.innerHTML="";
    }
    addTouchEvent("container6",0);
    addTouchEvent("container6_",3);
    if(mode == 0){
        document.getElementById("background").setAttribute("src","img/game/drink/drinks_learn_1(background).png");
        //document.getElementById("bt").setAttribute("src","img/game/clothing/bt.png")
        new Add_img("container6",imgList1.slice(0,3),"fadeIn",eventList1.slice(0,3)).apply();
        new Add_img("container6_",imgList1.slice(3,6),"fadeIn",eventList1.slice(3,6)).apply();

    }else{
        document.getElementById("background").setAttribute("src","img/game/drink/drinks_learn_2(background).png");
        //document.getElementById("bt").setAttribute("src","img/game/clothing/bt2.png")
        new Add_img("container6",imgList2.slice(0,3),"fadeIn",eventList2.slice(0,3)).apply();
        new Add_img("container6_",imgList2.slice(3,6),"fadeIn",eventList2.slice(3,6)).apply();
    }
}

