 //creating object

      /*const score={
        wins:0,
        loss=0;
        tie:0
      };*/

      let score=JSON.parse(localStorage.getItem('score')) || {
        wins:0,
        loss:0,
        tie:0
      };

      updateScoreElement();
 
      //when we remove item,the score becomes null.so we use if here

      /*if(score===null){    //if(!score)
        wins=0;
        loss=0;
        tie=0;
      }*/


      //creating Function

      let isAutoPlaying=false;

      let intervalId;

      function autoplay() {
        if (!isAutoPlaying) {
          intervalId = setInterval(function () {
            const playerMove = pickcomputerMove();
            playGame(playerMove);
          }, 1000);
          isAutoPlaying = true;
        } else {
          clearInterval(intervalId);
          isAutoPlaying = false;
        }
      }

      document.querySelector('.js-rock-button')
        .addEventListener('click',()=>{
          playGame('rock');
        });

      document.querySelector('.js-paper-button')
        .addEventListener('click',()=>{
          playGame('paper');
        });

      document.querySelector('.js-scissor-button')
        .addEventListener('click',()=>{
          playGame('scissors');
        })

      document.body.addEventListener('keydown',(event)=>{
        if(event.key==='r'){
          playGame('rock');
        }
        else if(event.key==='p'){
          playGame('paper');
        }
        else if(event.key==='s'){
          playGame('scissors');
        }
      });

      function playGame(playerMove){
        const computerMove=pickcomputerMove();
      
      let result = '';

      if(playerMove==='scissors'){

        if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }
      }

      else if(playerMove==='paper'){

        if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      }

      else if(playerMove==='rock'){
        if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
      }

      //update the score

      if(result==='You win.'){
        score.wins++;
      }
      else if(result==='You lose.'){
        score.loss++;
      }
      else if(result==='Tie.'){
        score.tie++;
      }

      //setting local Storage

      localStorage.setItem('score',JSON.stringify(score));//local storage only supports strings.so we use json stringify.

      updateScoreElement();

      document.querySelector('.js-result').
        innerHTML=result;

        document.querySelector('.js-moves').innerHTML = `You
        <img src="${playerMove}-emoji.png" class="move-icon">
        <img src="${computerMove}-emoji.png" class="move-icon">
        Computer`;
        }

       function updateScoreElement(){
        document.querySelector('.js-score').
          innerHTML=`Wins :${score.wins}, losses :${score.loss}, tie    
          :${score.tie}`;
       }

      let computerMove = '';

      //creating Function

      function pickcomputerMove(){
          const randomNumber = Math.random();

          if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerMove = 'rock';
            }
          else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'paper';
            } 
          else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'scissors';
            }
            return computerMove;
      }
