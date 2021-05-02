var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(100,200);
  weight=random(30,52);

  bullet=createSprite(50, 200, 60, 10);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(230,230,230);
  
  bullet.velocityX = speed;
  bullet.shapeColor=color(255);
}

function draw() {
  background(0);
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>10){
    wall.shapeColor=color(255,0,0);
  }
  
  if(deformation<10){
    wall.shapeColor=color(0,255,0);
  }
  }  


  drawSprites();
}

function hasCollided (lbullet,lwall){
bulletRightEdge=lbullet+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>wallLeftEdge){
  return true
}
return false;
} 