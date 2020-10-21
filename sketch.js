var movingRect, fixedRect;

function setup() {

  createCanvas(1200,800);

  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.velocityX=-2;
  
  fixedRect= createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";
  
}

function draw() {

  background(0,0,0); 
  
  
if (
 movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
 &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2) {
  
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  movingRect.velocityY=(-1)*movingRect.velocityY;
  fixedRect.velocityY=(-1)*fixedRect.velocityY;
}
else {
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}

if(movingRect.x- fixedRect.x < movingRect.width/2+ fixedRect.width/2
  && fixedRect.x - movingRect.x < movingRect.width/2+ fixedRect.width/2){
    fixedRect.velocityX=(-1)*fixedRect.velocityX;
    movingRect.velocityX=(-1)*movingRect.velocityX;
  }
  console.log(movingRect.x- fixedRect.x);
  
  drawSprites();
  
}