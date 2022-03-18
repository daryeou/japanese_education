var mode=0;
var arrowCount=0;
let selected_id=-1;
var total_page=5;
var arrow_location;
var balloon_size;
let eventFunctions;
let score=0;
let balloon_delay=3//애니메이션 딜레이로 인한 좌표오차. 값을 늘릴 수로 풍선저격 좌표가 오른쪽으로.

let namelist=[['こんばんは(저녁인사)','いただきます(잘 먹겠습니다.)','こんにちは(점심인사)','おかえりなさい(어서오세요.)','どうぞ(하세요.)','かわいい(귀엽다.)','やすい(쉽다.)','また、あした(내일보자)','はじめまして(처음뵙겠습니다.)','おめでとうございます(생일 축하합니다.)'],['ただいま(다녀왔어요)','からい(맵다)','じゃ、また(그럼,또)','おはよう(아침인사)','さようなら(안녕히계세요.)','むずかしい(어렵다)','おやすみ(잘 자)','はじめまして。(처음뵙겠습니다.)','ごめんね(미안해)','いってきます(다녀오겠습니다.)'],['ねる(자다)','おきる(일어나다)','あう(만나다)','たべる(먹다)','のむ(마시다)','のる(타다)','いく(가다)','べんきょうする(공부하다)','およぐ(수영하다)','くる(오다)'],['みる(보다)','あそぶ(놀다)','うたをうたう(노래하다)','まつ(기다리다)','かえる(되돌아가다)','きく(듣다)','かく(쓰다)','およぐ(수영하다)','あつい(덥다)','さむい(춥다)'],['たかい(비싸다)','やすい(싸다)','あたらしい(새롭다)','ふるい(오래되다)','おおい(많다)','すくない(적다)','わるい(나쁘다)','いい(좋다)','ちかい(가깝다)','とおい(멀다)']];
var names=[];
let colorname=[['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']];
var balloon_location=[];
let imgList = [
    [
        "img/game/balloon/풍선1/보물찾기1-풍선1(저녁인사).png",
        "img/game/balloon/풍선1/보물찾기1-풍선2(잘 먹겠습니다.).png",
        "img/game/balloon/풍선1/보물찾기1-풍선3(점심인사).png",
        "img/game/balloon/풍선1/보물찾기1-풍선4(어서오세요).png",
        "img/game/balloon/풍선1/보물찾기1-풍선5(하세요).png",
        "img/game/balloon/풍선1/보물찾기1-풍선6(귀엽다).png",
        "img/game/balloon/풍선1/보물찾기1-풍선7(쉽다).png",
        "img/game/balloon/풍선1/보물찾기1-풍선8(내일보자).png",
        "img/game/balloon/풍선1/보물찾기1-풍선9(처음뵙겠습니다.).png",
        "img/game/balloon/풍선1/보물찾기1-풍선10(생일축하합니다.).png"
    ],
    [
        "img/game/balloon/풍선2/보물찾기_풍선2_1.png",
        "img/game/balloon/풍선2/보물찾기_풍선2_2.png",
        "img/game/balloon/풍선2/보물찾기_풍선2_3.png",
        "img/game/balloon/풍선2/보물찾기_풍선2_4.png",
        "img/game/balloon/풍선2/보물찾기_풍선2_5.png",
        "img/game/balloon/풍선2/보물찾기_풍선2_6.png",
        "img/game/balloon/풍선2/보물찾기_풍선2_7.png",
        "img/game/balloon/풍선2/보물찾기_풍선2_8.png",
        "img/game/balloon/풍선2/보물찾기_풍선2_9.png",
        "img/game/balloon/풍선2/보물찾기_풍선2_10.png"
    ],
    [
        "img/game/balloon/풍선3/3_1.png",
        "img/game/balloon/풍선3/3_2.png",
        "img/game/balloon/풍선3/3_3.png",
        "img/game/balloon/풍선3/3_4.png",
        "img/game/balloon/풍선3/3_5.png",
        "img/game/balloon/풍선3/3_6.png",
        "img/game/balloon/풍선3/3_7.png",
        "img/game/balloon/풍선3/3_8.png",
        "img/game/balloon/풍선3/3_9.png",
        "img/game/balloon/풍선3/3_10.png"
    ],
    [
        "img/game/balloon/풍선4/4_1.png",
        "img/game/balloon/풍선4/4_2.png",
        "img/game/balloon/풍선4/4_3.png",
        "img/game/balloon/풍선4/4_4.png",
        "img/game/balloon/풍선4/4_5.png",
        "img/game/balloon/풍선4/4_6.png",
        "img/game/balloon/풍선4/4_7.png",
        "img/game/balloon/풍선4/4_8.png",
        "img/game/balloon/풍선4/4_9.png",
        "img/game/balloon/풍선4/4_10.png"
    ],
    [
        "img/game/balloon/풍선5/5_1.png",
        "img/game/balloon/풍선5/5_2.png",
        "img/game/balloon/풍선5/5_3.png",
        "img/game/balloon/풍선5/5_4.png",
        "img/game/balloon/풍선5/5_5.png",
        "img/game/balloon/풍선5/5_6.png",
        "img/game/balloon/풍선5/5_7.png",
        "img/game/balloon/풍선5/5_8.png",
        "img/game/balloon/풍선5/5_9.png",
        "img/game/balloon/풍선5/5_10.png"
    ]
];

let eventList = [
    [
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {}
    ],
    [
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {}
    ],
    [
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {}
    ],
    [
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {}
    ],
    [
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {},
        function () {}
    ]
];
let soundList=[["1_　こんばんは","2_　いただきます","3_　こんにちは","4_　おかえりなさい","5_　どうぞ","6_    かわいい","7_　やすい","8_　また、あした","9_　はじめまして","10_　おめでとうございます"],
["1_　ただいま(다녀왔어요)","2_　からい(맵다)","3_　じゃ、また(그럼,또)","4_　おはよう(아침인사)","5_　さようなら(안녕히계세요.)","6_　むずかしい(어렵다)","7_　おやすみ(잘 자)","8_　はじめまして。(처음뵙겠습니다.)","9_　ごめんね(미안해)","10_　いってきます(다녀오겠습니다.)"],
["___1　ねる(자다)","___2　おきる(일어나다)","___3　あう(만나다)","___4　たべる(먹다)","___5　のむ(마시다)","___6　のる(타다)","___7　いく(가다)","___8　べんきょうする(공부하다)","___9　およぐ(수영하다)","___10　くる(오다)"],
["1_　みる(보다)","2_　あそぶ(놀다)","3_　うたをうたう(노래하다)","4_　まつ(기다리다)","5_　かえる(되돌아가다)","6_　きく(듣다)","7_　かく(쓰다)","8_   およぐ(수영하다)","9_　あつい(덥다)","10_さむい(춥다)"],
["____1　たかい(비싸다)","____2　やすい(싸다)","____3　あたらしい(새롭다)","____4　ふるい(오래되다)","____5　おおい(많다)","____6　すくない(적다)","____7　わるい(나쁘다)","____8　いい(좋다)","____9　ちかい(가깝다)","____10　とおい(멀다)"]];
var heatAnim=["img/game/balloon/사본 -풍선터짐애니_1.png","img/game/balloon/사본 -풍선터짐애니_2.png","img/game/balloon/사본 -풍선터짐애니_3.png","img/game/balloon/사본 -풍선터짐애니_4.png","img/game/balloon/사본 -풍선터짐애니_5.png","img/game/balloon/사본 -풍선터짐애니_6.png","img/game/balloon/사본 -풍선터짐애니_7.png","img/game/balloon/사본 -풍선터짐애니_8.png",""];
function heatAnimation(balloon){
    balloon.children[0].classList.add('fadeOut');
    let i=0;
    balloon.style.backgroundSize="100%";
    balloon.style.backgroundRepeat="no-repeat";
    let timer = setInterval(function(){
        balloon.style.backgroundImage=`url("${heatAnim[i]}")`;
        i++;
        if(i>=heatAnim.length) clearTimeout(timer);
    },150);
}

window.addEventListener('load',function(){
    nextpage(undefined,0);
    let arrow=document.getElementById("arrow");
    document.getElementById("index").addEventListener('touchstart',function(){
        document.getElementById("content").innerHTML = '손을 눌렀다 때면 화살이 나갑니다.';

    });
    document.getElementById('index').addEventListener("touchend",function(){
        music("img/game/balloon/활당기는소리.wav");
        document.getElementById("content").innerHTML = '실패! 다시 시도해 보세요.';
        //document.getElementById('arrow_div').style.animationPlayState="paused";
        balloon_location=[];
        arrow.classList.add("arrow_anim");
        arrow_location=arrow.getBoundingClientRect().left+(arrow.offsetWidth/2);
        Array.prototype.forEach.call(document.getElementsByClassName('item'),function(ball){
            balloon_location.push(ball.getBoundingClientRect().left+(ball.offsetWidth/balloon_delay));
        });
        balloon_location.forEach(function(value,index){
            if(arrow_location<(value+balloon_size) && arrow_location>(value) ){
                let balloon = document.getElementsByClassName('item')[index];
                heatAnimation(balloon);
                eventFunctions.addExp_(index); //성공했을때
                score= score+10;
                balloon_location.splice(index,1,-1000);
                music("img/game/balloon/sound/"+soundList[mode][balloon.dataset.num2]+".m4a");
            }
        });
        arrowCount++;
        if(arrowCount>=10){
            document.getElementById("result").classList.remove("none");
            if(score !=0){
                document.getElementById("score").src=`img/game/balloon/${score}.png`;
                document.getElementById("star").src=`img/game/balloon/별(${score}점).png`;
            }else{
                document.getElementById("content").innerHTML="0점 다음 기회에!"
            }
        }
    },true);
    arrow.addEventListener("animationend",function(){
        arrow.classList.remove("arrow_anim");
        //document.getElementById('arrow_div').style.animationPlayState="running";
    },true);
});



function nextpage(event,num){ 
    score=0;
    arrowCount=0;
    document.getElementById("result").classList.add("none");
    new Promise(function(resolve,reject){
        if(num == 0){
            mode = 0;
        }else{
            event.stopPropagation();
            let elem = document.getElementsByClassName("item");
            for(let i of elem){
                i.innerHTML="";
            }
            if(num == 1){
                mode= (mode+1)%total_page;
            }else{
                mode= Math.abs((mode-1)%total_page);
            }
        }
        /* let random_num=Math.floor(Math.random()*6);
        let img_run = new Add_img("container5",imgList[mode].slice(random_num,random_num+5),"no",eventList[mode].slice(random_num,random_num+5)); */
        let img_run = new Add_img("container5",imgList[mode].slice(0,5),"no",eventList[mode].slice(0,5));
        img_run.apply();
        let img_run2 = new Add_img("container5_",imgList[mode].slice(5,10),"no",eventList[mode].slice(5,10));
        img_run2.apply();
        balloon_location=[];
        /* names=[];
        names=namelist[mode].slice(random_num,random_num+5); */
        eventFunctions=new Add_exp(names);
        resolve();
    }).then(function(resolve){
        balloon_size=document.getElementsByClassName('item')[0].offsetWidth;
    });
}

