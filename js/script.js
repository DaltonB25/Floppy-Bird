window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const gameEndScreen = document.querySelector("#game-end")
  let game;
  startButton.addEventListener("click", function () {
    startNewGame();
  });
  restartButton.addEventListener("click", function () {
    if(game.gameOver){

      startNewGame();
    }
  });

  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        game.player.directionX = -1;
        break;
      case "ArrowRight":
        game.player.directionX = 1;
        break;
    }
  });

  document.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowRight":
        game.player.directionX = 0;
        break;
    }
  });
 
    
    function startNewGame() {
      game = new Game();
      
      game.start();
      gameEndScreen.style.display = "none"
      console.log(game);
    }

}; 
    
    
    
   
   
   
   
   
   
   
    /*document.addEventListener("keydown", (e) => {
      if (e.key === "Spacebar") {
        if (game.player.directionY > -6) {
          game.player.directionX += -1;
        }
      }
  
      if (e.key === "ArrowLeft") {
        if (game.player.directionX > -4) {
          game.player.directionX += -1;
        }
      }
      if (e.key === "ArrowRight") {
        if (game.player.directionX < 4) {
          game.player.directionX += 1;
        }
      }
    }); */