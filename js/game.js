class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameEnd = document.getElementById("game-end");
    this.player = new Player(
      this.gameScreen,
      100,
      290,
      65,
      45,
      "./images/flappy-bird.png"
    );
    this.height = 1000;
    this.width = 900;
    this.obstacles = [];
    this.timeLeft = 30;
    this.score = 0;
    this.lives = 1;
    this.gravity = .2;
    this.velocityY = 0;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.frames = 0;
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.stats = document.getElementById("stats-container");
    this.clockContainer = document.getElementById("clock-container");
    this.clock = document.getElementById("clock");
    this.endMessage = document.getElementById("end-message");
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    // this.gameScreen.style.display = "blocl" 
    let container = document.getElementById('game-container')
    container.style.display = 'flex'
    container.style.height = '90vh'

    this.startScreen.style.display = "none";

    this.gameScreen.style.display = "block";
    // this.gameScreen.style.width = "47.4%";
    this.stats.style.display = "block";
    this.clockContainer.style.display = "flex";

    this.gameIntervalId = setInterval(() => {
     this.frames++

     let top = this.height/2 + (Math.random() * this.height/2)
     
     if (top >= this.height) {
      top = this.height - 20
     }

     
     let secondTop = top - 1200 - (Math.random() * this.height/2)
     
     if (secondTop <= -1000) {
      secondTop = -980
     }

     

  

     if(this.frames % 120 === 0){
      // console.log(this.frames);top
      this.obstacles.push(new Obstacle(this.gameScreen, 50, 1000, this.width, top, "./images/pipes(2).jpg", 'obstacle'))
      this.obstacles.push(new Obstacle(this.gameScreen, 50, 1000, this.width, secondTop, "./images/pipes(2).jpg", 'top-obstacle'))
      // this.obstacles.push(new Obstacle(this.gameScreen, 50, 1000, 700, secondTop, "../images/pipes(3).jpg"))
      // this.obstacles.push(new)
     }
      this.gameLoop();
    }, this.gameLoopFrequency);

    document.addEventListener("keydown", ( e) => {
      
      if(e.key === " "){
       this.player.jump()
      }
    })

   
  }

applyGravity() {
  this.player.top += this.gravity
  this.player.element.style.top = `${this.player.top}px`
}

  gameLoop() {
    this.obstacles.forEach((obstacle) => {
      obstacle.move()
    })
    this.applyGravity()
    this.update();
    this.player.move()
    if(this.player.top <= 10){
      this.player.top = 10
    }
    if(this.player.top > 1000){
      
      this.gameOver = true
  
  
    }
    if (this.lives <= 0) {
      console.log("Lives====>", this.lives);
      this.gameOver = true;
    }

    if (this.frames % 60 === 0) {
      this.timeLeft--;
      this.clock.innerHTML = this.timeLeft;
    }

    if (this.timeLeft <= 0) {
      this.gameOver = true;
    }

    if (this.gameOver) {
      clearInterval(this.gameIntervalId);
      this.gameOverScreen();
    }
  } 

  update() {
    // this.player.move();
    this.velocityY += this.gravity;
    // this.player = Math.max(this.player + this.velocityY, 0); 
    
    this.obstacles.forEach((obstacle, i) => {
      obstacle.move();
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives -= 1;
      }

      if (obstacle.left < 20) {
        obstacle.element.remove();
       this.obstacles.splice(i, 1);
        this.score += .5; 
      
      }

    });
    this.scoreElement.innerHTML = this.score;
    this.livesElement.innerHTML = this.lives;
  }

  gameOverScreen() {
    console.log("Game over", this);
    
    this.player.element.remove();
    this.player = null;
    this.obstacles.forEach((obstacle) => {
      obstacle.element.remove();
    });
    let container = document.getElementById('game-container')
    container.style.display = 'none'
    container.style.height = '0'
    this.gameScreen.style.height = `${0}px`;
    this.gameScreen.style.width = `${0}px`;
    this.gameScreen.style.display = "none";
    console.log("Game end screen", this.stats);
    this.stats.style.display = "none";
    this.clockContainer.style.display = "none";
    this.gameEnd.style.display = "inherit";
    this.obstacles = [];
    if (this.timeLeft <= 0) {
      this.endMessage.innerText = `Congratulations!! 
      You won! 
      You finished with a score of ${
        this.score}`;
    } else {
      this.endMessage.innerText = `You lose!!!! 
      
      You finished with a score of 
      
      
      ${this.score}`;
    }
  }
}

console.log("Game class:", Game);

 