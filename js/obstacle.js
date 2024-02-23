class Obstacle {
    constructor(gameScreen, width, height, left, top, image, className) {
        // this.obstacles.push(new Obstacle(this.gameScreen, 50, 1000, 700, top, "./images/pipes(2).jpg", 'obstacle'))
        this.gameScreen = gameScreen
        this.width = width
        this.height = height
        this.left = left 
        this.top = top
        this.image = image
        this.element = document.createElement("img")
        this.element.src = image
        this.element.style.position = "absolute"
        this.element.style.top = this.top + "px"
        this.element.style.left = this.left + "px"
        this.element.style.width = this.width + "px"
        this.element.style.height = this.height + "px"
        this.element.style.zIndex = '100'
        this.element.setAttribute('class', `${className}`)

        this.gameScreen.appendChild(this.element)

    }

    move(){
        this.left -= 4
        this.updatePosition()
    }
    updatePosition(){
        this.element.style.top = this.top + "px"
        this.element.style.left = this.left + "px"
    }

    getBottom() {
        return this.top + this.height;
      }
}