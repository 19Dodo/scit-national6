console.log("SpaceShip Generator");

/*document.getElementById("generate-spaceship").addEventListener("click",()=>{
    var img = ["1.png", "2.png", "3.png"];
function imgRandom(imgArr) {
   return imgArr[Math.floor(Math.random() * imgArr.length)];
}
console.log(imgRandom(img));
}); */

class Ship{
    constructor(){
        this.position= 0;
        this.generateHtmlRef();
    }

    generateHtmlRef() {
        this.ref = document.createElement("img");
        this.ref.src = "1.png";
        this.ref.classList.add("ship");
        document.body.appendChild(this.ref);
    }

    move(x,y){
        this.x = x;
        this.y = y;
        this.ref.style.transform = `translate(${this.x}px , ${this.y}px)`;
    }
    setShip() {
        document.addEventListener("keydown", (event) => {
          console.log(event);
        this.moveCar(event.key);
          
        });
      }
    
      moveShip(direction) {
        if (direction === "ArrowRight") {
          this.position += 5;
          this.ref.style.marginLeft = `${this.position}px`;
        } else if (direction === "ArrowLeft") {
          this.position -= 5;
          this.ref.style.marginLeft = `${this.position}px`;
        }
        
}
