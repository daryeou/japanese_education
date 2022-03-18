var mode=0;
let selected_id = 0;
let eventFunction;

let textList=[['','','','','',''],['','','','','','']];

let imgList1 = ['img/game/food/(김밥).png','','img/game/food/(라면).png','','img/game/food/(우동).png','','img/game/food/(초밥).png','','img/game/food/(튀김).png',''];
let imgList2 = ['img/game/food/(핫도그).png','','img/game/food/(도너츠).png','','img/game/food/(샌드위치).png','','img/game/food/(아이스크림).png','','img/game/food/(포테이토).png',''];

let eventList1=[function(){music("img/game/food/킴밥(김밥).mp3");},function(){},function(){music("img/game/food/라멘(라면).mp3");},function(){},function(){music("img/game/food/우동.mp3");},function(){},function(){music("img/game/food/스시(초밥).mp3");},function(){},function(){music("img/game/food/덴뿌라(튀김).mp3");},function(){}];
let eventList2=[function(){music("img/game/food/홋토도크(핫도그).mp3");},function(){},function(){music("img/game/food/도나츠.mp3");},function(){},function(){music("img/game/food/산도이치(샌드위치).mp3");},function(){},function(){music("img/game/food/아이스크리므(아이스크림).mp3");},function(){},function(){music("img/game/food/포테토(감자).mp3");},function(){}];

let eventList = [
    ["ラーメン  ramen",'',"キンパプ　gimbap",'',"うどん    udong ",'' ,"すし      sushi",'', "てんぷら  denpura",''],
    ["ホットドック   hotdog",'',"ドーナツ       donuts",'',"サンドイッチ   sandwich",'',"アイスクリーム ice-cream",'',"ポテイト       potatoes",'']
];

window.addEventListener('load',function(){
    nextpage(0);
    eventFunction=new Add_exp(eventList);
});

function addTouchEvent(id){
    let elements = document.getElementById(id).children;
    for(let i=0; i<elements.length; i++){
        elements[i].addEventListener("touchstart",function(){
            selected_id = this.dataset.num;
            eventFunction.addExp(mode,selected_id);
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
    addTouchEvent("container10",0,textList);
    if(mode == 0){
        document.getElementById("background").setAttribute("src","img/game/food/food_learn1_(뒷배경).png");
        //document.getElementById("bt").setAttribute("src","img/game/clothing/bt.png")
        new Add_img("container10",imgList1,"fadeIn",eventList1).apply();
    }else{
        document.getElementById("background").setAttribute("src","img/game/food/food_learn2_(뒷배경).png");
        //document.getElementById("bt").setAttribute("src","img/game/clothing/bt2.png")
        new Add_img("container10",imgList2,"fadeIn",eventList2).apply();
    }
}

