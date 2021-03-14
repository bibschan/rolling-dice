class Dice {
    faceValue;
    constructor(){
      this.faceValue = this.getRandomInt(1, 6);
    }
    
    getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
    getFaceValue(){
      return this.faceValue;
    }
  }

class Game {
    totalCount
    constructor(){
        this.totalCount = 0;
    }

    totalScore(){
        return this.totalCount;
    }

    addUp(dice1,dice2,dice3){
        this.totalCount += dice1 + dice2 + dice3;
    }

    playDices(){
        let dice1 = new Dice();
        let dice2 = new Dice();
        let dice3 = new Dice();

        document.getElementById('dice1').innerHTML = dice1.getFaceValue();
        document.getElementById('dice2').innerHTML = dice2.getFaceValue();
        document.getElementById('dice3').innerHTML = dice3.getFaceValue();

        document.getElementById('totalscore').innerHTML = this.totalScore();

        this.addUp(dice1.getFaceValue(), dice2.getFaceValue(), dice3.getFaceValue());
    }
}

let game = new Game();

function play(){    
    game.playDices();
}

let button = document.getElementById('play-game');
button.addEventListener('click', () => play())