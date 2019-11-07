const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = () =>{
      const playBtn = document.querySelector(".intro button");
      const introscreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
      
      
      playBtn.addEventListener("click", () => {
          introscreen.classList.add("fadeOut");
          match.classList.add("fadeIn");
      });
    };
//Play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //Computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];  
// Here is where we call compare hands
            });
        });
    };



    const compareHands = (playerChoice, computerChoice) =>{
        //Update text
        const winner = document.querySelector(".winner")
        //checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }
        //Check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins'
                return;
            }else{
                winner.textContent = 'Computer Wins'
                return;
            }
        }
        //Check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins'
                return;
            }else{
                winner.textContent = 'Player Wins'
                return;
            }
        }

    }
    //IS call all the inner function
    startGame();
    playMatch();
    };


    //start the game funtion
    game();