var mode=0;
let selected_id = 0;
let eventFunction;
let eventList = [
    ['','','','','','','','','',''],
    ['','','','','','','','','','']
];
let soundList = [
    ['눈(메)','머리(아타마)','코(하나)','귀(미미)','입(구찌)','','','','',''],
    ['눈(메)','머리(아타마)','코(하나)','귀(미미)','입(구찌)','어깨(카타)','배(오나카)','손(테)','무릎(히자)','발가락(즈마사키)']
];
let textList=[];

window.addEventListener('load',function(){
    nextpage(0);
    eventFunction=new Add_exp(eventList);
});

function addTouchEvent(id){
    let elements = document.getElementById(id).children;
    for(let i=0; i<elements.length; i++){
        elements[i].addEventListener("touchend",()=>{
            eventFunction.addExp(mode,i);
            music("img/game/body/"+soundList[mode][i]+".mp3");
        },false);
    }
}


function nextpage(change){
    if(change>0) {
        mode = mode == 0? 1:0;
    }
    let elem = document.getElementsByClassName("item");
    for(let i of elem){
        i.innerHTML="";
    }
    addTouchEvent("container10");
    if(mode == 0){
        document.getElementById("background").setAttribute("src","img/game/body/body_part1(background) (1).png");
        //new Add_img("container3",imgList1,"fadeIn",eventList1).apply();
    }else{
        document.getElementById("background").setAttribute("src","img/game/body/body_part1(background) (2).png");
        //new Add_img("container3",imgList2,"fadeIn",eventList2).apply();
    }
}

window.addEventListener('load',function(){
    let elements = document.getElementsByClassName("man_img");
    let count=1;
    /* for(let element of elements){
        element.addEventListener("animationend",function(){
            element.classList.add("none");
            element.classList.remove("opacityAlternate");
        },false);
    } */
    setInterval(function(){
        elements[count].classList.remove("none");
        count = (count+1)%elements.length;
        elements[count].classList.add("none");
        console.log(count);
    },3200);
});