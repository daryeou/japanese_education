let imgList = ["img/mainmenu/1.color_eicon.png",
"img/mainmenu/2.fruit_eicon.png",
"img/mainmenu/3.family_eicon.png",
"img/mainmenu/4.clothing_eicon.png",
"img/mainmenu/5.drinks_eicon.png",
"img/mainmenu/6.transpotation_eicon.png",
"img/mainmenu/7.food_eicon.png",
"img/mainmenu/8.body_parts_eicon.png"]

var movepage = function(page){
    document.getElementById("choice").style.display="block";
    document.getElementById("finger1").classList.add("rotateRight2");
    document.getElementById("finger2").classList.add("rotateLeft2");
    new Promise(function(resolve,reject){
        document.getElementById("choice").classList.add("fadeIn");
        document.getElementById("choice").addEventListener("touchend",function(e){
            e.preventDefault();
            console.log("touch");
            document.body.removeChild(document.getElementById("go_action"));
            document.getElementById("go_home").classList.remove("none");
            if(e.changedTouches[0].pageX < document.getElementById("background").width/2){
                resolve("");
            }else{
                resolve("_2");
            }
        })
    }).then(function(result){
        document.getElementById("frame").setAttribute("src",page+result+".html");
        document.getElementById("frame").style.zIndex=500;
        document.getElementById("index").innerHTML="";
    });
}

let eventList = [function(){movepage("game1")},
function(){movepage("game2")},
function(){movepage("game3")},
function(){movepage("game4")},
function(){movepage("game5")},
function(){movepage("game6")},
function(){movepage("game7")},
function(){movepage("game8")}]

window.addEventListener('load',function(){
    let img_run = new Add_img("container",imgList,"fadeIn",eventList);
    img_run.apply();
    var img = document.getElementById("background");
    document.body.style.width = img.width.toString() + "px"
    document.body.style.height = img.height.toString() + "px"
    document.getElementById("exit").addEventListener("touchend",function reload(e){
        e.preventDefault();
        e.stopPropagation();
        location.reload();
    })    
});
