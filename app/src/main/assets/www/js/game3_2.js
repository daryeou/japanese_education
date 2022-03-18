var mode=0;
let selected_id = -1;
let _x100;
let _y100;
let _x,_y;
let sensivility=10;
let eventFunctions;

let imgList = ["img/game/family/family_play_olderbrother.png", 
"img/game/family/family_play_eldersister.png", 
"img/game/family/family_play_father.png", 
"img/game/family/family_play_mother.png", 
"img/game/family/family_play_youngerbrother.png",
"img/game/family/family_play_youngersister.png"];
let names=['older brother','elder sister','father','mother','younger brother','younger sister'];

let eventList = [function(){},function(){},function(){},function(){},function(){},function(){}];
let textOrder=[4,2,1,0,5,3];
let setLocation=[[8,18],[25,31],[41,19],[58,29],[75,40],[91,30]];

window.addEventListener('load',function(){
    nextpage(0);
    //eventFunctions.addExp_(selected_id);
});

function addTouchEvent(id){
    let elements = document.getElementById(id).children;
    console.log(elements[0].offsetWidth);
    for(let element of elements){
        console.log(element.children[0]);
        element.children[0].addEventListener("touchstart",handleStart,false);
        element.children[0].addEventListener("touchmove",handleMove,false);
        element.children[0].addEventListener("touchend",handleEnd,false);
    }
}

function handleStart(event){
    this.style.width=this.offsetWidth+"px";
    this.style.height=this.offsetHeight+"px";
    this.style.position="fixed";
    selected_id = this.parentNode.dataset.num;
    console.log('selected_id: ', selected_id);
}
function handleMove(event){
    _x = event.changedTouches[0].pageX, _y = event.changedTouches[0].pageY;
    this.style.left=_x- parseInt(this.offsetWidth/2)+"px";
    this.style.top=_y-parseInt(this.offsetHeight/2)+"px";
    _x100=_x/document.body.offsetWidth*100;
    _y100=_y/document.body.offsetHeight*100;
    let elemnum=textOrder[selected_id];
    console.log(_x100+" "+_y100);
    /* console.log(actionLocation[elemnum][0]+" "+actionLocation[elemnum][1]) */
    if(setLocation[elemnum][0]-sensivility<=_x100 && setLocation[elemnum][0]+sensivility>=_x100){
        if(setLocation[elemnum][1]-sensivility<=_y100 && setLocation[elemnum][1]+sensivility>=_y100){
            this.classList.add("rotateBoth");
            this.style.left=setLocation[elemnum][0]/100*document.body.offsetWidth- parseInt(this.offsetWidth/2)+"px";
            this.style.top=setLocation[elemnum][1]/100*document.body.offsetHeight-parseInt(this.offsetHeight/2)+"px";
            music("img/game/correct.mp3");
            this.removeEventListener("touchmove",arguments.callee);
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
    if(mode == 0){
        
    }else{
        new Add_img("container6",imgList,"no",eventList).apply();
        addTouchEvent("container6");
    }
}

