var mode=0;
let selected_id = -1;
let _x100;
let _y100;
let _x,_y;

let imgList1 = ["img/game/fruit/strawberry.png", 
"img/game/fruit/watermelon.png",
"img/game/fruit/banana.png", 
"img/game/fruit/graph.png", 
"img/game/fruit/persimmon.png"];
let imgList2 = ["img/game/fruit/apple.png", 
"img/game/fruit/orange.png",
"img/game/fruit/peach.png", 
"img/game/fruit/pear.png", 
"img/game/fruit/pineapple.png"];
let eventList = [function(){},function(){},function(){},function(){},function(){}];
let imgList_ = ["img/game/fruit/play_1_basket.png",
"img/game/fruit/play_1_basket.png", 
"img/game/fruit/play_1_basket.png", 
"img/game/fruit/play_1_basket.png", 
"img/game/fruit/play_1_basket.png"];
let eventList_ = [function(){},function(){},function(){},function(){},function(){}];
let textList=[["かぎ<br/>persimmon","すいか<br/>watermelon","バナナ<br/>banana","イチゴ<br/>strawberry","ぶどう<br/>grape"],["りんご<br/>apple","オリンジ<br/>orange","パイナップル<br/>pineapple","もも<br/>peach","なし<br/>pear"]];
let textOrder=[[3,1,2,4,0],[0,1,3,4,2]];
let actionLocation = [[[23,11],[31,23]],[[49,11],[58,23]],[[70,11],[82,23]],[[36,33],[44,46]],[[61,33],[71,46]],];

window.addEventListener('load',function(){
    nextpage(0);
    addTouchEvent("container5");
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
    let elements = document.getElementById("container5_").children;
    for(let i=0; i<elements.length; i++){
        actionLocation[i][0][0]=elements[i].getBoundingClientRect().left+20;
        actionLocation[i][0][1]=elements[i].getBoundingClientRect().top+20;
        actionLocation[i][1][0]=elements[i].getBoundingClientRect().right;
        actionLocation[i][1][1]=elements[i].getBoundingClientRect().bottom;
        console.log(actionLocation)
    }
}
function handleMove(event){
    _x = event.changedTouches[0].pageX, _y = event.changedTouches[0].pageY;
    this.style.left=_x- parseInt(this.offsetWidth/2)+"px";
    this.style.top=_y-parseInt(this.offsetHeight/2)+"px";
    /* _x100=_x/document.body.offsetWidth*100;
    _y100=_y/document.body.offsetHeight*100; */
    let elemnum=textOrder[mode][selected_id];
    console.log(elemnum+" "+_x+" "+_y);
    console.log(actionLocation[elemnum][0]+" "+actionLocation[elemnum][1])
    if(actionLocation[elemnum][0][0]<=_x && actionLocation[elemnum][1][0]>=_x){
        if(actionLocation[elemnum][0][1]<=_y && actionLocation[elemnum][1][1]>=_y){
            this.classList.add("rotateRight");
            this.removeEventListener("touchmove",handleMove,false);
            this.style.left=actionLocation[elemnum][0][0]+"px";
            this.style.top=actionLocation[elemnum][0][1]-parseInt(40)+"px";
            music(this.children[0].src.slice(0, -4) + ".mp3");
        }
    } 
}
function handleEnd(event){
    this.classList.remove("rotateRight");
    selected_id = -1;
}

function nextpage(change){
    if(change>0) {
        mode = mode == 0? 1:0;
        /* let elements = document.getElementsByClassName("color");
        for(let element of elements){
            element.classList.add("hidden");
        } */
        addTouchEvent("container5");
    }
    let elem = document.getElementsByClassName("item");
    for(let i of elem){
        i.removeAttribute('style');
        i.innerHTML="";
    }
    if(mode == 0){
        document.getElementById("background").src="img/game/fruit/과일_Play1.png";
        new Add_img("container5",imgList1,"fadeIn",eventList).apply();
        new Add_img("container5_",imgList_,"fadeIn",eventList_ ).apply();
        //new Add_text("container5_",textList[0]).apply();
    }else{
        document.getElementById("background").src="img/game/fruit/과일_Play2.png";
        new Add_img("container5",imgList2,"fadeIn",eventList).apply();
        new Add_img("container5_",imgList_,"fadeIn",eventList_ ).apply();
        //new Add_text("container5_",textList[1]).apply();
    }
}

