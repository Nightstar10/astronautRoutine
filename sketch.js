var astronaut,bg,bgImg,sleep,brush,gym,eat,bath,move;

function preload() {
  bgImg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  bath = loadAnimation("bath1.png","bath2.png");
  move = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(800, 400, 50, 50);
  bg.addImage(bgImg);

  edges = createEdgeSprites();

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;

}

function draw() {
  background(255,255,255);  

  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 200;
    astronaut.velocityX = -1;
    astronaut.velocityY = -1;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym", gym);
    astronaut.changeAnimation("gym");
    astronaut.y = 300;
    astronaut.x = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 200;
    astronaut.x = 600;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 200;
    astronaut.x = 450;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("SPACE")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 200;
    astronaut.x = 400;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  drawSprites();

  textSize(20);
  fill(255);
  text("Instructions:",10,60);
  textSize(15);
  text("Up Arrow = Brushing",10,75);
  text("Down Arrow = Gym",10,89);
  text("Left Arrow = Eating",10,103);
  text("Right Arrow = Bathing",10,117);
  text("Space key = Moving",10,132);
}