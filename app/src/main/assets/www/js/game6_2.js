var mode=0;
let selected_id = -1;
let _x100;
let _y100;
let _x,_y;
let sensivility=10;
let eventFunction;

let imgList1 = ["img/game/transport/transpotation_learn_1(비행기).png","img/game/transport/transpotation_learn_1(트럭).png","img/game/transport/transpotation_learn_1(지하철).png","img/game/transport/transpotation_learn_1(오토바이).png","img/game/transport/transpotation_learn_1(택시).png"];
let imgList2 = ['img/game/transport/transpotation_2_play(헬리콥터).png',"img/game/transport/transpotation_2_play(자전거).png",'img/game/transport/transpotation_2_play(구급차).png','img/game/transport/transpotation_2_play(소방차).png','img/game/transport/transpotation_2_play(배).png'];

let eventList_none=[function(){},function(){},function(){},function(){},function(){}];
let eventList = [
    ["ひこうき   airplane","トラック   truck","ちかてつ 　subway ", "オートバイ motocycle", "タクシー   taxi"],
    ["ヘリコプター     helicopter","きゅうきゅうしゃ ambulance", "ふね             ship","しょうぼうしゃ   fire truck  ","じてんしゃ       bicycle  "]
];


let textOrder=[[3,2,1,4,0],[0,1,4,2,3]];
let setLocation=[[[18,18],[50,18],[82,19],[35,65],[66,64]],[[18,18],[50,18],[80,18],[33,63],[66,63]]];

window.addEventListener('load',function(){
    nextpage(0);
    eventFunction=new Add_exp(eventList);
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
            eventFunction.addExp(mode,selected_id);
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
        document.getElementById("background").setAttribute("src","img/game/transport2/transpotation_play_1.png");
        document.getElementById("background").classList.add('opacity');
        new Add_img("container5",imgList1,"fadeIn",eventList_none).apply();
    }else{
        document.getElementById("background").setAttribute("src","img/game/transport2/transpotation_play_2.png");
        document.getElementById("background").classList.add('opacity');
        new Add_img("container5",imgList2,"fadeIn",eventList_none).apply();
    }
}

