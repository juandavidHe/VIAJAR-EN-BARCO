var sea,seaIMG
var barco,barcoIMG
function preload() {
  seaIMG = loadImage("sea.png")
  barcoIMG = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup() {
  createCanvas(400,400);
  background("blue");
  sea = createSprite(200,200)
  sea.addImage(seaIMG)
  

barco = createSprite(200,270,50,50)
barco.addAnimation("barco move",barcoIMG)
barco.scale = 0.3
}

function draw() {
  drawSprites();

 
}