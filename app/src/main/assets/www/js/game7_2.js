var mode=0;
let selected_id = -1;
let _x100;
let _y100;
let _x,_y;
let sensivility=10;
let eventFunction;

let imgList1 = ['img/game/food/(라면).png','img/game/food/(김밥).png','img/game/food/(우동).png','img/game/food/(초밥).png','img/game/food/(튀김).png'];
let imgList2 = ['img/game/food/(핫도그).png','img/game/food/(도너츠).png','img/game/food/(샌드위치).png','img/game/food/(아이스크림).png','img/game/food/(포테이토).png'];

let eventList_none=[function(){},function(){},function(){},function(){},function(){}];
let eventList = [
    ["ramen","gimbap","udong ", "sushi", "denpura"],
    ["hotdog","donuts", "sandwich","ice-cream","potatoes"]
];


let textOrder=[[2,0,1,4,3],[4,3,1,2,0]];
let setLocation=[[[17,25],[50,24],[84,24],[33,58],[68,58]],[[18,24],[50,23],[83,23],[34,57],[67,57]]];

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
        document.getElementById("background").setAttribute("src","img/game/food/food_play_1.png");
        document.getElementById("background").classList.add('opacity');
        new Add_img("container5",imgList1,"fadeIn",eventList_none).apply();
    }else{
        document.getElementById("background").setAttribute("src","img/game/food/food_play_2.png");
        document.getElementById("background").classList.add('opacity');
        new Add_img("container5",imgList2,"fadeIn",eventList_none).apply();
    }
}

