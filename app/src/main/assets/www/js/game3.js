var mode=0;
let selected_id=0;

window.addEventListener('load',function(){
    nextpage(0);
    addTouchEvent("container6");
});
let soundList=["img/game/family/누나(오네상).mp3","img/game/family/아버지(오토상).mp3","img/game/family/남동생(오토토상).mp3","img/game/family/여동생(이모토상).mp3","img/game/family/어머니(오카상).mp3","img/game/family/오빠(오니상).mp3"];
function addTouchEvent(id){
    console.log("test success");
    let elements = document.getElementById(id).children;
    console.log(elements);
    for(let i=0; i<elements.length; i++){
        console.log("dataset",elements[i].dataset.num);
        elements[i].addEventListener("touchstart",function(){
            music("img/game/등장.mp3",0.5);
            selected_id = this.dataset.num;
            /* document.getElementById("content").innerHTML=textList[mode][i];
            document.getElementsByClassName("item")[selected_id].classList.remove("hidden"); */
            this.children[0].classList.add('moveright2');
            this.children[0].classList.remove("hidden");
            music(soundList[this.dataset.num]);
        },false);
    }
}
let eventList=[];
let imgList=["","","","","",""];

function nextpage(change){
    if(change>0) {
        mode = mode == 0? 1:0;
    }
    //new Add_img("container6",imgList,"fadeIn",eventList).apply();
    /* let elem = document.getElementsByClassName("item");
    for(let i of elem){
        i.removeAttribute('style');
        i.innerHTML="";
    } */
    if(mode == 0){
        
    }else{
        document.getElementById("background").src="img/game/family/family1.png";
        document.getElementById("background").classList.add('opacity');
    }
}

