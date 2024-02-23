class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.directionX = 0;
    this.directionY = 0;
    this.gameScreen = gameScreen;
    this.element = document.createElement("img");
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
    this.gravity = 1;
    this.jumpStrength = 6;
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.gameScreen.appendChild(this.element);
  }


  move() {
    this.gravity += .1

   
    this.top += this.gravity

    
   // this.left += this.directionX;



//    console.log(this.top)
//    console.log(this.left)
//     this.top += this.directionY;

//     if (this.left <= 10) {
//         this.directionX *= -0.5;
//         this.left += this.directionX;
//     }

//     if (this.top <= 10) {
//       this.top = 10;
//       this.directionY *= -0.5;
//     }

//     if (this.left >= this.gameScreen.offsetWidth - this.width - 10) {
//       this.left = this.gameScreen.offsetWidth - this.width - 10;
//       this.directionX *= -0.5;
//     }

//     if (this.top >= this.gameScreen.offsetHeight - this.height - 10) {
//       this.top = this.gameScreen.offsetHeight - this.height - 10;
//       this.directionY *= -0.5;
//     }

    this.updatePosition();
  }

  jump() {
    this.gravity -= this.jumpStrength;
  }

  updatePosition() {
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
      ) {
        console.log("Colliding");
        return true;
      } else {
        return false;
      }
  }

}
    
console.log("Player class:", Player);



/* move(e) {
  if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
    velocityY = -6;
  }


updatePosition() {
  velocityY += gravity;
  // bird.y += velocityY;
  bird.y = Math.max(bird.y + velocityY, 0); //apply gravity to current bird.y, limit the bird.y to top of the canvas
  context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
*/
