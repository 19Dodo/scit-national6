console.log("OOP Game");

class GameObject{
    constructor(){
        this.width = 50;
        this.height= 50;
        this.x=0;
        this.y=0;
        this.generateRef();
       // this.move(50, 225);
        
    }   
}

class Player{
    constructor(){
        this.width = 50;
        this.height= 50;
        this.x=0;
        this.y=0;
        this.generateRef();
        this.move(50, 225);
        
    }   
    generateRef(){
        this.ref=document.createElement("div");
        this.ref.style.width = `${this.width}px`;
        this.ref.style.width = `${this.height}px`;
        this.ref.style.background = "red" ;
        this.ref.style.position ="absolute";
        this.ref.style.top = 0;
        this.ref.style.left = 0;

        document.getElementById("game-scene").appendChild(this.ref);
    }

    move(x, y){
        this.x = x;
        this.y = y;
        this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    moveUp(){
        this.move(this.x +25 , this.y);
    }

    moveDown(){
        this.move(this.x , this.y +25);
    }
}
const player=new Player ();

let keyUpPress = false;
let keyDownPress = false;

document.addEventListener("keydown", (event)=>{
    if(event.key === "ArrowUp"){
        keyUpPress = true;
    }
    if(event.key=== "ArrowDowun"){
        keyUpPress = true;
    }
})

document.addEventListener("keyup", (event) =>{
    if(event.key === "ArrowUp"){
        keyDownPress = false;
    }
    if(event.key=== "ArrowDown"){
        keyDownPress = false;
    }
})



setInterval(()=>{
    console.log(keyUpPress);

    if(keyUpPress) player.moveUp();
    if(keyDownPress) player.moveDown();
},500);