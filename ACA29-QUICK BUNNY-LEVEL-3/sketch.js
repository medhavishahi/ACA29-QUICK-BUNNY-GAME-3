var snakeGroup;
var bg,bgImage
function preload() {
  bgImage=loadImage("images/bg.jpg");
 playerImage=loadImage("images/bunny.png");
 targetImage=loadImage("images/carrot.png");
 snakeImage=loadImage("images/snake.png");
}


function setup() {
  createCanvas(600,600);
  bg=createSprite(300,300);
  bg.addImage(bgImage);
  bg.scale=1.5
  player= createSprite(40,500,30,30);
  player.addImage(playerImage);
  player.scale=0.2;
  snakeGroup=new Group();
  edges= createEdgeSprites()
  target=createSprite(560,40,30,30);
  target.addImage(targetImage);
  target.scale=0.3;
  obs1=createSprite(300,120,100,20);
  obs1.velocityX=5
  obs2=createSprite(300,190,100,20);
  obs2.velocityX=-5
  
}

function draw() {
  
   
  if(keyDown("up")){
    player.y=player.y-5;
  }
  if(keyDown("down")){
    player.y=player.y+5;
  }
  if(keyDown("right")){
    player.x=player.x+5;
  }
  if(keyDown("left")){
    player.x=player.x-5;
  }

  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
 
  
  
  background("black");
  if (player.isTouching(obs1)){
    
    player.x=40;
    player.y=500;
    text("YOU LOSE",200,200);
   
  }
  if (player.isTouching(obs2)){
    player.x=40;
    player.y=500;
    text("YOU LOSE",200,200); 
  }
  
   
  
  
  if (player.isTouching(target)){
    obs1.velocityX=0;
    obs2.velocityX=0;
    text("YOU WIN",200,200);
   
  }
  target.shapeColor="blue";
  obs1.shapeColor="blue";
  obs2.shapeColor="blue"; 
  
  
   
generateSnakes();
  for(var i=0; i<(snakeGroup).length;i++){
    var temp=(snakeGroup).get(i);
    if(player.isTouching(temp)){
      player.x=40
      player.y=500;
    }
    
  } 

  
 
  drawSprites();
}
function generateSnakes(){
  if(frameCount %30===0){
    var snake= createSprite(600,random(70,520),random(30,120),5);
    snake.addImage(snakeImage);
    snake.scale=random(0.1,0.2)
    snake.shapeColor="green";
    snake.velocityX=random(-4,4);
    snake.velocityY=random(-4,4);
    snakeGroup.add(snake);
  }
  if(player.isTouching(target)){
    temp.velocityX=0;
  }
}