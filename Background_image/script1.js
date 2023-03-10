/*................................................creatiing parallax effect.................................................................*/

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 10;

let backgroundLayer = [];
for(let i = 0;i<5;i++)
{
   a = new Image();
   backgroundLayer.push(a);
   backgroundLayer[i].src = `../Assets/background_Layer/layer-${i+1}.png`;
}

//layer for images 
class Layer{
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    //for changing horizontal position
    update(){
        this.speed = gameSpeed * this.speedModifier;
        if(this.x <= -this.width){
            this.x = this.width + this.x2 - this.speed;
        }
        if(this.x2 <= -this.width){
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }
    //for drawImage on canvas
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}


const layer1 = new Layer(backgroundLayer[0], 0.2);
const layer2 = new Layer(backgroundLayer[1], 0.4);
const layer3 = new Layer(backgroundLayer[2], 0.6);
const layer4 = new Layer(backgroundLayer[3], 0.8);
const layer5 = new Layer(backgroundLayer[4], 1);

const gameObjects = [layer1,layer2,layer3,layer4,layer5];

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    gameObjects.forEach(layer =>{
        layer.update();
        layer.draw();
    });
    requestAnimationFrame(animate);
}
// animate();

