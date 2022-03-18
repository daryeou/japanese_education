var mode = 0;
let selected_id = 0;
let count=0;
let player=0;
let score=[0,0];
window.showtext=1;


window.addEventListener('load', function () {
   document.getElementById('dice1').addEventListener("touchstart",run_dice,false);
   document.getElementById('dice2').addEventListener("touchstart",run_dice,false);
   //new Add_exp();
});

function run_dice(event){
    player = this.dataset.num;
    rollDiceWithoutValues1();

    //alert(expList[0].kor);
}

function response(res) {
    // returns an array of the values from the dice
    score[player]+=parseInt(res);
    console.log(score[player]);
    document.getElementById('dice1').classList.add("none");
    document.getElementById('dice2').classList.add("none");
    setTimeout(()=>{
        try{
            document.getElementById("player_state").innerHTML=`1P:${score[0]}&nbsp;&nbsp;&nbsp;2P:${score[1]}`;
            document.getElementById("dice-box1").style.backgroundImage=`url("img/game/boardgame/${score[player]}.png")`; 
            document.getElementsByClassName("dice-outer")[0].removeChild(document.getElementsByClassName("dice")[0]);
            document.getElementById("content").innerHTML=`${expList[score[player]-1].kor} : ${expList[score[player]-1].jap}`;
            music(`img/game/boardgame/${score[player]}.m4a`,1.0);
        }catch(e){

        }
    },1000);
    setTimeout(()=>{
        document.getElementById("dice-box1").style.backgroundImage=`url("")`
        switch (score[player]){
            case 10:
                score[player]=4;
                document.getElementById("player_state").innerHTML="4번으로 이동합니다!";
                break;
            case 12:
                score[player]=17;
                document.getElementById("player_state").innerHTML="17번으로 이동합니다!";

                break;
            case 18:
                score[player]=15;
                document.getElementById("player_state").innerHTML="15번으로 이동합니다!";
                break;
            default:
                break;
        }
        if(score[player]>18){
            document.getElementById("content").innerHTML=`게임 종료 ${parseInt(player)+parseInt(1)}P 승리`;
        }else{
            document.getElementById('dice1').classList.remove("none");
            document.getElementById('dice2').classList.remove("none");
        }
    },3000);
  }

function rollDiceWithoutValues1() {
      const element = document.getElementById('dice-box1');
      const numberOfDice = 1;
      const options = {
        element, // element to display the animated dice in.
        numberOfDice, // number of dice to use
        callback: response
      }
      rollADie(options);
  }

  function rollDiceWithoutValues2() {
        player = 1;
        const element = document.getElementById('dice-box1');
        const numberOfDice = 1;
        const options = {
          element, // element to display the animated dice in.
          numberOfDice, // number of dice to use
          callback: response
        }
        rollADie(options);
    }