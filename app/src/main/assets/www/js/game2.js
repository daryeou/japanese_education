var mode = 0;
let selected_id = 0;
window.showtext=1;

let imgList1 = ["img/game/fruit/strawberry.png", "img/game/fruit/watermelon.png"];

let eventList1 = [
    function () {
        music(this.src.slice(0, -4) + ".mp3");
        this.src = this.src.slice(0, -5) + "_.png";
        document.getElementById("content").innerHTML = "strawberry イチゴ";
    },
    function () {
        music(this.src.slice(0, -4) + ".mp3");
        this.src = this.src.slice(0, -5) + "_.png";
        document.getElementById("content").innerHTML = "watermelon すいか";
    }
];

let imgList2 = ["img/game/fruit/banana.png", "img/game/fruit/graph.png", "img/game/fruit/persimmon.png"];

let eventList2 = [
    function () {
        music(this.src.slice(0, -4) + ".mp3");
        this.src = this.src.slice(0, -5) + "_.png";
        document.getElementById("content").innerHTML = "banana バナナ";
    },
    function () {
        music(this.src.slice(0, -4) + ".mp3");
        this.src = this.src.slice(0, -5) + "_.png";
        document.getElementById("content").innerHTML = "graph ぶどう";
    },
    function () {
        music(this.src.slice(0, -4) + ".mp3");
        this.src = this.src.slice(0, -5) + "_.png";
        document.getElementById("content").innerHTML = "persimmon かぎ";
    }
];


let imgList1_ = ["img/game/fruit/apple.png", "img/game/fruit/orange.png"];

let eventList1_ = [
    function () {
        music(this.src.slice(0, -4) + ".mp3");
        this.src = this.src.slice(0, -5) + "_.png";
        document.getElementById("content").innerHTML = "apple りんご";
    },
    function () {
        music(this.src.slice(0, -4) + ".mp3");
        this.src = this.src.slice(0, -5) + "_.png";
        document.getElementById("content").innerHTML = "orange オリンジ";
    }
];

let imgList2_ = ["img/game/fruit/peach.png", "img/game/fruit/pear.png", "img/game/fruit/pineapple.png"];

let eventList2_ = [
    function () {
        music(this.src.slice(0, -4) + ".mp3");
        this.src = this.src.slice(0, -5) + "_.png";
        document.getElementById("content").innerHTML = "peach もも";
    },
    function () {
        music(this.src.slice(0, -4) + ".mp3");
        this.src = this.src.slice(0, -5) + "_.png";
        document.getElementById("content").innerHTML = "pear なし";
    },
    function () {
        music(this.src.slice(0, -4) + ".mp3");
        this.src = this.src.slice(0, -5) + "_.png";
        document.getElementById("content").innerHTML = "pineapple パイナップル";
    }
];


window.addEventListener('load', function () {
    nextpage(0);
});

function nextpage(change) {
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
    }
    if (mode == 0) {
        new Add_img("container2", imgList1, "opacity", eventList1).apply();
        new Add_img("container3", imgList2, "opacity", eventList2).apply();
    } else {
        new Add_img("container2", imgList1_, "opacity", eventList1).apply();
        new Add_img("container3", imgList2_, "opacity", eventList2).apply();
    }
}
