window.showtext=undefined;
let imgList = [
"img/mainmenu/메인화면_3(아이콘)_4.png",
"img/mainmenu/메인화면_3(아이콘)_5.png",
"img/mainmenu/메인화면_3(아이콘)_6.png",
"img/mainmenu/메인화면_3(아이콘)_1.png",
"img/mainmenu/메인화면_3(아이콘)_2.png",
"img/mainmenu/메인화면_3(아이콘)_3.png"
]

var movepage = function(page){
    new Promise(function(resolve,reject){
        resolve("");
    }).then(function(result){
        document.getElementById("frame").setAttribute("src",page+result+".html");
        document.getElementById("frame").style.zIndex=500;
        document.getElementById("index").innerHTML="";
    });
    document.getElementById("go_home").onclick="";
    document.getElementById("go_home").addEventListener("touchstart",function(){go_page('main3.html')});
}

let eventList = [
function(){movepage("subgame4")},
function(){movepage("subgame5")},
function(){movepage("subgame6")},
function(){movepage("subgame1")},
function(){movepage("subgame2")},
function(){movepage("subgame3")},
]

window.addEventListener('load',function(){
    let img_run = new Add_img("container",imgList,"fadeIn",eventList);
    img_run.apply();
    var img = document.getElementById("background");
    document.body.style.width = img.width.toString() + "px"
    document.body.style.height = img.height.toString() + "px"
});
