let URLSearch;
window.onload = function () {
    /* var img = document.getElementById("background");
    document.body.style.width = img.width.toString() + "px"
    document.body.style.height = img.height.toString() + "px" */
    URLSearch = new URLSearchParams(location.search);
    let btList=document.getElementsByClassName("bt");
    Array.from(btList).forEach(function (elem) {
        elem.addEventListener("click", function () {
            Array.from(document.getElementsByClassName("bt")).forEach(function(t){console.log(t);t.classList.contains("hidden") ? t.classList.remove("hidden") : t.classList.add("hidden");});
        });
    });
    Array.from(document.getElementsByClassName("bt")).forEach(function(e){
        console.log(e);
        e.addEventListener('touchend',function(){console.log("효과음"); music(defaultSound[0]);});
    })/*기본 사운드*/
    Array.from(document.getElementsByClassName("bt_")).forEach(function(e){
        console.log(e);
        e.addEventListener('touchend',function(){console.log("효과음"); music(defaultSound[0]);});
    })/*기본 사운드*/
    try{
        /*텍스트 출력 삭제*/
        if(window.showtext==undefined){
            document.getElementById("content_box").classList.add("none");
        }
    }catch(e){
        
    }
}
/*document.body.style.width=window.innerWidth.toString()+"px"
document.body.style.height=window.innerHeight.toString()+"px"*/

function searchParam(key) {
    return URLSearch.get(key);
}

function css(elem, prop, val) {
    if (!(isElement(elem) && isString(prop) && isString(val))) {
        throw new TypeError('css 파라미터 타입 에러');
    }
    elem.style[prop] = val;
}

function Add_action(id, action) {
    let elements = document.getElementById(id).children;
    for (let i of elements) {
        i.addEventListener('click', action, false);
    }
}

class Add_img {
    #_id;
    #_img_list; // private
    #_anim;
    #_event;
    constructor(id, img_list, anim, event) {
        if (isString(id) && isString(anim) && isArray(img_list) && isArray(event)) {
            this._id = id;
            this._img_list = img_list;
            this._anim = anim;
            this._event = event;
        } else {
            throw new Error("apply_img 파라미터 타입 에러");
        }
    }
    apply() {
        let elements = document.getElementById(this._id).children;
        for (let num = 0; num < elements.length; num++) {
            let element = elements[num];
            element.removeAttribute('style'); // test
            element.innerHTML = ""; // test
            element.setAttribute("data-num", num);
            let newElem = document.createElement('img');
            newElem.addEventListener('click', this._event[num], false);
            newElem.src = this._img_list[num];
            this._anim == "" ? "" : newElem.classList.add(this._anim);
            console.log(num);
            element.appendChild(newElem);
        }
        console.log("apply img");
    }
}

class Add_text {
    #_id;
    #_img_list; // private
    #_anim;
    #_event;
    constructor(id, text_list) {
        if (isString(id) && isArray(text_list)) {
            this._id = id;
            this._text_list = text_list;
        } else {
            throw new Error("apply_text 파라미터 타입 에러");
        }
    }
    apply() {
        let elements = document.getElementById(this._id).children;
        for (let num = 0; num < elements.length; num++) {
            let element = elements[num];
            element.setAttribute("data-num", num);
            let newElem = document.createElement('p');
            newElem.innerHTML = "</br>" + this._text_list[num];
            console.log(num);
            element.appendChild(newElem);
        }
        console.log("apply text");
    }
}

class Add_color {
    constructor(id, color) {
        if (!isArrayLike(color)) {
            console.log("is not array");
        }
        this._id = id;
        this._color = color;
    }
    apply(addclass) {
        let elements = document.getElementById(this._id).children;
        for (let num in this._color) {
            let element = elements[num];
            element.style.background = this._color[num];
            if (addclass !== undefined) 
                element.classList.add(addclass);
            
        }
    }
}

class Add_exp {
    constructor(functionList) {
        this.functions = functionList;
    }
    addExp(mode, num) {
        document.getElementById("content").innerHTML = this.functions[mode][num];
    }
    addExp_(num) {
        document.getElementById("content").innerHTML = this.functions[num];
    }
}

function music(src,volume){
    console.log(src);
    var audio = new Audio();
    audio.src = src;
    if(isNumber(volume)) audio.volume=volume; else audio.volume=1;
    audio.play();
}

let defaultSound=["img/game/btsound.wav"];

function go_page(link){
    setTimeout(() => {
        location.href=link;
    }, 500);
}