var mode=0;
let selected_id = 0;
window.showtext=1;
let textList=[[['','',''],['ズボン pants','うわぎ coat','ツャツ shirt'],['ズボン pants','うわぎ coat','スカート skirt'],['','','']],[['','','ぼうし hat'],['ズボン pants','うわぎ coat','ツャツ shirt'],['ズボン pants','うわぎ coat','スカート skirt'],['てぶくろ gloves','くつした socks','くつ shoes']]];
let soundList=[[['','',''],['img/game/clothing/즈봉(바지).mp3','img/game/clothing/우와기(외투).mp3','img/game/clothing/샤츠(셔츠).mp3'],['img/game/clothing/즈봉(바지).mp3','img/game/clothing/우와기(외투).mp3','img/game/clothing/스카토(스커트).mp3'],['','','']],[['','','img/game/clothing/보시(모자).mp3'],['img/game/clothing/즈봉(바지).mp3','img/game/clothing/우와기(외투).mp3','img/game/clothing/스카토(스커트).mp3'],['img/game/clothing/즈봉(바지).mp3','img/game/clothing/우와기(외투).mp3','img/game/clothing/스카토(스커트).mp3'],['img/game/clothing/테부크로(장갑).mp3','img/game/clothing/구츠시타(양말).mp3','img/game/clothing/구츠(신발).mp3']]];

window.addEventListener('load',function(){
    nextpage(0);
});

function addTouchEvent(id,num,list){
    let elements = document.getElementById(id).children;
    for(let i=0; i<elements.length; i++){
        elements[i].addEventListener("touchend",()=>{
            document.getElementById("content").innerHTML=textList[mode][num][i];
            music(soundList[mode][num][i]);
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
    addTouchEvent("container3_0",0,textList);
    addTouchEvent("container3_1",1,textList);
    addTouchEvent("container3_2",2,textList);
    addTouchEvent("container3_3",3,textList);
    if(mode == 0){
        document.getElementById("background").setAttribute("src","img/game/clothing/clothing.png");
        document.getElementById("bt").setAttribute("src","img/game/clothing/bt.png")
        //new Add_img("container3",imgList1,"fadeIn",eventList1).apply();
    }else{
        document.getElementById("background").setAttribute("src","img/game/clothing/clothing2.png");
        document.getElementById("bt").setAttribute("src","img/game/clothing/bt2.png")
        //new Add_img("container3",imgList2,"fadeIn",eventList2).apply();
    }
}

