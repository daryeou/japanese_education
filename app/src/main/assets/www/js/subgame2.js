

var mode = 0;
let selected_id = 0;
let total=0;
let count=0;
let fruit_num=0;
let eventFunction;
let eventList = [''];
let numList=["img/game/refrigerator/num/1.png","img/game/refrigerator/num/2.png","img/game/refrigerator/num/3.png","img/game/refrigerator/num/4.png","img/game/refrigerator/num/5.png","img/game/refrigerator/num/6.png","img/game/refrigerator/num/7.png","img/game/refrigerator/num/8.png","img/game/refrigerator/num/9.png","img/game/refrigerator/num/10.png"];
let imgList=["img/game/refrigerator/1.png","img/game/refrigerator/2.png","img/game/refrigerator/3.png","img/game/refrigerator/4.png","img/game/refrigerator/5.png","img/game/refrigerator/6.png","img/game/refrigerator/7.png","img/game/refrigerator/8.png","img/game/refrigerator/9.png","img/game/refrigerator/10.png","img/game/refrigerator/11.png","img/game/refrigerator/12.png"];
let setLocation=[46,46];
let sensivility=10;
window.addEventListener('load', function () {
    eventFunction=new Add_exp(eventList);
    nextpage(0);
    document.getElementById("anim").addEventListener("animationend",function(){
        document.getElementById("anim").classList.remove("opacityAlternate2");
    })
});
let soundList=['1.mp3','2.mp3','3.mp3','4.mp3','5.mp3','6.mp3','7.mp3','8.mp3','9.mp3','10.mp3'];

function nextpage(change) {
    addTouchEvent('container10');
    count=0;
    document.getElementById("content").innerHTML="";
    document.getElementById('opendoor').classList.add('none');
    document.getElementById("container10_").classList.add("none");
    document.getElementById('container10').classList.remove('none');

    total=Math.floor(Math.random()*10)+1;
    let random_num=Math.floor(Math.random()*10);
    console.log('total: ', total);
    
    if (change > 0) {
        mode = mode == 0 ? 1 : 0;
        /* let elements = document.getElementsByClassName("color");
        for(let element of elements){
            element.classList.add("hidden");
        } */
    }
    let elem = document.getElementsByClassName("item");
    for (let i of elem) {
        i.innerHTML = "";
        i.classList.remove("none");
    }
    if (mode == 0) {
    } else {
    }
    for(let i=0; i<total; i++){
        document.getElementsByClassName('item')[(random_num+i)%10].style.backgroundImage="url("+imgList[fruit_num]+")";
    }
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
        if(setLocation[0]-sensivility<=_x100 && setLocation[0]+sensivility>=_x100){
            if(setLocation[1]-sensivility<=_y100 && setLocation[1]+sensivility>=_y100){
                this.classList.add("rotateBoth");
                this.removeEventListener("touchmove",handleMove,false);
                this.style.left=setLocation[0]/100*document.body.offsetWidth- parseInt(this.offsetWidth/2)+"px";
                console.log('setLocation[0]: ', setLocation[0]);
                this.style.top=setLocation[1]/100*document.body.offsetHeight-parseInt(this.offsetHeight/2)+"px";
                console.log('setLocation[1]: ', setLocation[1]);
                eventFunction.addExp_(mode);
                console.log(selected_id);
                this.classList.add("none");
                document.getElementById("anim").classList.add("opacityAlternate2");
                count++;
                music('img/game/refrigerator/button-28.mp3');
            }
        } 
}
function handleEnd(event){
    this.classList.remove("rotateBoth");
    selected_id = -1;
    if(count>=total){
        document.getElementById("content").innerHTML="과일은 총 몇 개였나요?";
        playgame();
    }
}

function playgame(){
    document.getElementById('menu').classList.remove('none');
    document.getElementById('container10').classList.add('none');
    let correct=total-1;
    let num1=Math.floor(Math.random()*10);
    let num2=Math.floor(Math.random()*10);
    while(true){
        if(num1!=correct && num2!=correct && num1 != num2) break;
        num1=Math.floor(Math.random()*10);
        num2=Math.floor(Math.random()*10);
    }
    let correct_location=Math.floor(Math.random()*3);
    let location1=Math.floor(Math.random()*3);
    let location2=Math.floor(Math.random()*3);
    while(true){
        if(location1!=correct_location && location2!=correct_location && location1 != location2) break;
        location1=Math.floor(Math.random()*3);
        location2=Math.floor(Math.random()*3);
    }
    document.getElementsByClassName("button")[location1].style.backgroundImage=`url('${numList[num1]}')`;
    document.getElementsByClassName("button")[location2].style.backgroundImage=`url('${numList[num2]}')`;
    document.getElementsByClassName("button")[correct_location].style.backgroundImage=`url('${numList[correct]}')`;
    console.log('run');
    document.getElementsByClassName("button")[correct_location].addEventListener('touchstart',function(){
        music('img/game/correct.mp3');
        document.getElementById('menu').classList.add('none');
        document.getElementById('opendoor').classList.remove('none');
        this.removeEventListener('touchstart',arguments.callee);
        document.getElementById("container10_").classList.remove("none");
        for(let i=0; i<total; i++){
            document.getElementsByClassName('item2')[i].style.backgroundImage="url("+imgList[fruit_num]+")";
        }
        document.getElementsByClassName('item2')[10].style.backgroundImage="url("+numList[correct]+")";
        music("img/game/number/"+soundList[total-1]);
        setTimeout(() => {
            location.reload(true);
        }, 2000);
    });
}