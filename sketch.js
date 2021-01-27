var car,wall;
var speed;
var df,weight;
function setup() {
  createCanvas(1600,400);
 wall=createSprite(1400,200,20,400);
 wall.shapeColor="grey";
 car=createSprite(100,200,50,15);
 car.shapeColor="brown";

 speed=random(55,90);
 weight=random(400,1500);
 car.velocityX=speed;
 df=0.5*speed*speed*weight/22500;
}

function draw() {
  background("black");
  if(car.isTouching(wall)){
    car.velocityX = 0;
  }
  if(df > 180 ){
    car.shapeColor = "red";
}
else if(df>80 && df <=180){
  car.shapeColor = "yellow";
}
else {
  car.shapeColor = "green";
}
  drawSprites();
}