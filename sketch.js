var ground;
var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;

  foodGroup = createGroup();
  obstacleGroup = createGroup();
  

}


function draw() {
  background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  score=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ score, 100,50);
 
  
  ground.x = ground.width / 2;
  if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  if (monkey.isTouching(ground)) {
    monkey.collide(ground);
  }

  //spawnObstacles();
  spawnBananas();
  spawnObstacles();
  drawSprites();
}

function spawnBananas() {
  if (World.frameCount % 80 === 0) {
    banana = createSprite(380, 310, 50, 50);
    banana.velocityX = -5;
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 100;
    foodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(World.frameCount%300===0){
    obstacle=createSprite(350,315,50,50);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2
    obstacle.velocityX=-5;
    obstacle.lifetime=100;
  }
}
