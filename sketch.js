var startImg,start
  
var road,roadImage;
 var player1,player2;
 var player1Img,player2Img;
 
 function preload(){
  startImg = loadImage("startflag.jpg")
  roadImage = loadImage("road.jpg");
  player1Img = loadImage("player1.png");
  player2Img = loadImage("player2.png");
  
 }

 function setup(){
  createCanvas(800,1000)
  start = createSprite(400,300,400,400);
  start.addImage(startImg);
  start.scale = 2;
  road = createSprite(400,300,800,600);
  road.addImage(roadImage);
  road.scale = 1;
  player1 = createSprite(350,525,50,200);
  player2 = createSprite(450,525,50,200);
  player1.addImage(player1Img);
  player1.scale = 0.2;
  player2.addImage(player2Img);
  player2.scale = 0.2;
 }

 function draw(){
  background(startImg);
  road.velocityY=5
  console.log(road.y)
  if(road.y>400){
    road.y = road.height/2;
  }
  if(keyDown("UP_ARROW")){player1.y-=3}
  drawSprites();
 }