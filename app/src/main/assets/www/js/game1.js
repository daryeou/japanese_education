var mode=0;
let selected_id=-1;
let colorname=[['あか','みどり','あお','おれんじ','むらさき'],['きいろ','ももいろ','しろ','くろ','ちゃいろ']];
let imgList = ["img/game/color/red.png",
"img/game/color/green.png",
"img/game/color/blue.png",
"img/game/color/orange.png",
"img/game/color/purple.png"];

let eventList = [function(){play_anim(this,"balloon")},function(){play_anim(this,"balloon")},function(){play_anim(this,"balloon")},function(){play_anim(this,"balloon")},function(){play_anim(this,"balloon")},
];

let imgList_balloon = ["img/game/color/redb.png",
"img/game/color/greenb.png",
"img/game/color/blueb.png",
"img/game/color/orangeb.png",
"img/game/color/purpleb.png"];

let eventList_balloon = [function(){},function(){},function(){},function(){},function(){}];

let imgList2 = ["img/game/color/yellow.png",
"img/game/color/pink.png",
"img/game/color/white.png",
"img/game/color/black.png",
"img/game/color/brown.png"];

let eventList2 = [function(){play_anim(this,"balloon")},function(){play_anim(this,"balloon")},function(){play_anim(this,"balloon")},function(){play_anim(this,"balloon")},function(){play_anim(this,"balloon")},
];

let imgList_balloon2 = ["img/game/color/yellowb.png",
"img/game/color/pinkb.png",
"img/game/color/whiteb.png",
"img/game/color/blackb.png",
"img/game/color/brownb.png"
];

let soundList = ["img/game/color/red.mp3",
"img/game/color/green.mp3",
"img/game/color/blue.mp3",
"img/game/color/orange.mp3",
"img/game/color/purple.mp3",
"img/game/color/yellow.mp3",
"img/game/color/pink.mp3",
"img/game/color/white.mp3",
"img/game/color/black.mp3",
"img/game/color/brown.mp3"];

let eventList_balloon2 = [function(){},function(){},function(){},function(){},function(){}];

window.addEventListener('load',function(){
    nextpage(0);
});

function play_anim(elem,name) {
    selected_id = elem.parentNode.dataset.num;
    document.getElementById("content").innerHTML=colorname[mode][selected_id];
    let element= document.getElementById(name).getElementsByTagName("div")[selected_id];
    element.classList.remove("none");
    console.log('selected_id: ', selected_id);
    let _x = Math.floor(Math.random() * document.getElementById("background").width) + "px";
    element.style.left = _x;
    element.classList.add("moveUp");
    element.addEventListener('animationend', onTransitionEnd, false);
    let selected_id2= mode==1?parseInt(selected_id)+5:parseInt(selected_id);
    console.log('selected_id2: ', selected_id2);
    music(soundList[selected_id2]);
    function onTransitionEnd() {
        element.classList.add("none");
        element.classList.remove("moveUp");
    }
}

function nextpage(num){
    let elem = document.getElementsByClassName("item");
    for(let i of elem){
        i.innerHTML="";
    }
    if(num == 0){
        document.getElementById("background").setAttribute("src","img/game/color/color_learn1_backgrond.png");
        let img_run = new Add_img("container5",imgList,"fadeIn",eventList);
        img_run.apply();
        img_run = new Add_img("balloon",imgList_balloon,"",eventList_balloon);
        img_run.apply();
        mode=0;
    }else{
        document.getElementById("background").setAttribute("src","img/game/color/color_learn2_backgrond.png");
        let img_run = new Add_img("container5",imgList2,"fadeIn",eventList2);
        img_run.apply();
        img_run = new Add_img("balloon",imgList_balloon2,"",eventList_balloon2);
        img_run.apply();
        mode=1;
    }
}

