var bullet, wall; 
var speed,weight,thickness,damage;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,331);
  weight=random(30,52);
  thickness=random(22,83);
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);


  wall=createSprite(1500, 200, thickness, height/2);
  wall.shapeColor=rgb(80,80,80);

  bullet=createSprite(200,200,40,10);
  bullet.shapeColor="white";}

function draw() {
  background("black");  
 
  bullet.velocityX=speed;
  
  if(isTouching(bullet,wall)){
    bullet.velocityX=0;
    if(damage<10){
      bullet.shapeColor="green";
    }
    if(damage>10){
      bullet.shapeColor="red";
    }  
  }
 
  drawSprites();}


  function isTouching(o1,o2){
    if(o2.x-o1.x<o2.width/2+o1.width/2){
      return true
    }
    else {return false}

  }