var mode = 0;
let selected_id = 0;

let imgList = ['','','',"img/game/transport/transpotation_learn_1(비행기).png",'',"img/game/transport/transpotation_learn_1(트럭).png",'','',"img/game/transport/transpotation_learn_1(지하철).png",'','',"img/game/transport/transpotation_learn_1(오토바이).png","img/game/transport/transpotation_learn_1(택시).png",'',''];
let imgList_ = ['','','','img/game/transport/transpotation_2_play(헬리콥터).png','',"img/game/transport/transpotation_2_play(자전거).png",'','img/game/transport/transpotation_2_play(구급차).png',"",'img/game/transport/transpotation_2_play(소방차).png','img/game/transport/transpotation_2_play(배).png',"","",'',''];

let eventList = [
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "ひこうき   airplane";
        music("img/game/transport/비행기.wav",0.2);
        music("img/game/transport/sound/히코키(비행기).mp3");
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "トラック   truck";
        music("img/game/transport/트럭.wav",0.2);
        music("img/game/transport/sound/토락쿠(트럭).mp3");
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "ちかてつ 　subway ";
        music("img/game/transport/지하철.wav",0.2);
        music("img/game/transport/sound/치카테츠(지하철).mp3");
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "オートバイ motocycle";
        music("img/game/transport/오토바이.wav",0.2);
        music("img/game/transport/sound/오토바이.mp3");
    },
    function () {
        document.getElementById("content").innerHTML = "タクシー   taxi";
        music("img/game/transport/택시.wav",0.2);
        music("img/game/transport/sound/타쿠시(택시).mp3");
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "";
    }
];
let eventList_ = [
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "ヘリコプター     helicopter";
        music("img/game/transport/헬리콥터.wav",0.2);
        music("img/game/transport/sound/헤리콥타(헬리콥터).mp3");
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "じてんしゃ       bicycle  ";
        music("img/game/transport/자전거.mp3",0.2);
        music("img/game/transport/sound/지텐샤(자전거).mp3");
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "きゅうきゅうしゃ ambulance";
        music("img/game/transport/엠뷸런스.mp3",0.2);
        music("img/game/transport/큐큐샤(구급차).mp3");
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "しょうぼうしゃ   fire truck  ";
        music("img/game/transport/소방차.mp3",0.2);
        music("img/game/transport/sound/쇼보샤(소방차).mp3");
    },
    function () {
        document.getElementById("content").innerHTML = "ふね             ship";
        music("img/game/transport/배.wav",0.2);
        music("img/game/transport/sound/후네(배).mp3");
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "";
    },
    function () {
        document.getElementById("content").innerHTML = "";
    }
];

window.addEventListener('load', function () {
    nextpage(0);
});

function addTouchEvent(id){
    let elements = document.getElementById(id).children;
    for(let element of elements){
        element.addEventListener("touchstart",handleStart,false);
        element.addEventListener("touchmove",handleMove,false);
        element.addEventListener("touchend",handleEnd,false);
    }
}
function handleStart(event){
    selected_id = this.dataset.num;
}
function handleMove(event){
    
}
function handleEnd(event){
    selected_id = -1;
}

function nextpage(change) {
    if (change > 0) {
        mode = mode == 0 ? 1 : 0;
        /* let elements = document.getElementsByClassName("color");
        for(let element of elements){
            element.classList.add("hidden");
        } */
    }
    addTouchEvent("container5");
    let elem = document.getElementsByClassName("item");
    for (let i of elem) {
        i.innerHTML = "";
    }
    if (mode == 0) {
        document.getElementById("background").setAttribute("src","img/game/transport/transpotation_learn_1(background).png");
        new Add_img("container5", imgList, "opacity", eventList).apply();
    } else {
        document.getElementById("background").setAttribute("src","img/game/transport/transpotation_learn_2(background).png");
        new Add_img("container5", imgList_, "opacity", eventList_).apply();
    }
}
