var mode = 0;
let selected_id = 0;
let _x100;
let _y100;
let _x,
    _y;
var is_correct=0;

let colorname = [
    [
        'おれんじ',
        'みどり',
        'あか',
        'あお',
        'ももいろ'
    ],
    [
        'きいろ',
        'むらさき',
        'くろ',
        'しろ',
        'ちゃいろ'
    ]
];

let imgList1 = [
    "img/game/color2/orange.png",
    "img/game/color2/green.png",
    "img/game/color2/red.png",
    "img/game/color2/blue.png",
    "img/game/color2/pink.png"
];

let eventList1 = [
    function () {},
    function () {},
    function () {},
    function () {},
    function () {}
];

let imgList2 = [
    "img/game/color2/yellow.png",
    "img/game/color2/purple.png",
    "img/game/color2/black.png",
    "img/game/color2/white.png",
    "img/game/color2/brown.png"
];

let eventList2 = [
    function () {},
    function () {},
    function () {},
    function () {},
    function () {}
];

let colorlist1 = ["orange", "green", "red"];
let colorlist1_ = ["blue", "pink"];
let colorlist2 = ["yellow", "purple", "black"];
let colorlist2_ = ["white", "brown"];

let soundList = [
    "img/game/color/orange.mp3",
    "img/game/color/green.mp3",
    "img/game/color/red.mp3",
    "img/game/color/blue.mp3",
    "img/game/color/pink.mp3",
    "img/game/color/yellow.mp3",
    "img/game/color/purple.mp3",
    "img/game/color/black.mp3",
    "img/game/color/white.mp3",
    "img/game/color/brown.mp3"
];

let actionLocation = [
    [
        [
            23, 11
        ],
        [
            31, 23
        ]
    ],
    [
        [
            49, 11
        ],
        [
            58, 23
        ]
    ],
    [
        [
            70, 11
        ],
        [
            82, 23
        ]
    ],
    [
        [
            36, 33
        ],
        [
            44, 46
        ]
    ],
    [
        [
            61, 33
        ],
        [
            71, 46
        ]
    ],
];

window.addEventListener('load', function () {
    nextpage(0);
});

function addTouchEvent(id) {
    let elements = document.getElementById(id).children;
    console.log(elements[0].offsetWidth);
    for (let element of elements) {
        element.addEventListener("touchstart", handleStart, false);
        element.addEventListener("touchmove", handleMove, false);
        element.addEventListener("touchend", handleEnd, false);
    }
}

function handleStart(event) {
    this.style.width = this.offsetWidth + "px";
    this.style.height = this.offsetHeight + "px";
    this.style.position = "fixed";
    selected_id = this.dataset.num;
    console.log('selected_id: ', selected_id);
}
function handleMove(event) {
    _x = event.changedTouches[0].pageX,
    _y = event.changedTouches[0].pageY;
    this.style.left = _x - parseInt(this.offsetWidth / 2) + "px";
    this.style.top = _y - parseInt(this.offsetHeight / 2) + "px";
    /*console.log(Math.floor(_x/document.body.offsetWidth*100)+" "+Math.floor(_y/document.body.offsetHeight*100));*/
    _x100 = _x / document.body.offsetWidth * 100;
    _y100 = _y / document.body.offsetHeight * 100;
    if (actionLocation[selected_id][0][0] <= _x100 && actionLocation[selected_id][1][0] >= _x100) {
        if (actionLocation[selected_id][0][1] <= _y100 && actionLocation[selected_id][1][1] >= _y100) {
            this.classList.add("rotateRight");
            document.getElementById("content").innerHTML = colorname[mode][selected_id];
            document.getElementsByClassName("item")[selected_id].classList.remove("hidden");
            let selected_id2 = mode == 1 ? parseInt(selected_id) + 5 : parseInt(selected_id);
            this.style.left=(actionLocation[selected_id][0][0]+9)/100*document.body.offsetWidth- parseInt(this.offsetWidth/2)+"px";
            this.style.top=(actionLocation[selected_id][0][1]+9)/100*document.body.offsetHeight-parseInt(this.offsetHeight/2)+"px";
            console.log('selected_id2: ', selected_id2);
            music(soundList[selected_id2]);
            this.removeEventListener("touchmove",arguments.callee);
            is_correct=1;
            //music("img/game/correct.mp3",0.2);
        }
    }
}
function handleEnd(event) {
    /* is_correct==0? music("img/game/wrong.wav"):null;
    is_correct=0; */
    this.classList.remove("rotateRight");
    this.style = "";
    nextpage(0);
}

function nextpage(change) {
    if (change > 0) {
        mode = mode == 0 ? 1 : 0;
        let elements = document.getElementsByClassName("color");
        for (let element of elements) {
            element.classList.add("hidden");
        }
    }
    addTouchEvent("container5");
    let elem = document.getElementsByClassName("item");
    for (let i of elem) {
        i.innerHTML = "";
    }
    if (mode == 0) {
        document.getElementById("background").setAttribute("src", "img/game/color2/color_play1.png");
        new Add_img("container5", imgList1, "fadeIn", eventList1).apply();
        new Add_color("container3", colorlist1).apply();
        new Add_color("container2", colorlist1_).apply();
    } else {
        document.getElementById("background").setAttribute("src", "img/game/color2/color_play2.png");
        new Add_img("container5", imgList2, "fadeIn", eventList2).apply();
        new Add_color("container3", colorlist2).apply();
        new Add_color("container2", colorlist2_).apply();
    }
}

