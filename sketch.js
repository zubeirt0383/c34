
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player,floor,floor2,floor3,floor4;
var x = 200,y =200,d,score = 0,delay =0;

function setup() {
  createCanvas(400,400);

  var ball_options = {
    restitution: 1,
    frictionAir:0
  }
  
   
   var ground_options ={
     isStatic: true
   };
  engine = Engine.create();
  world = engine.world;
  floor = Bodies.rectangle(200, 401,1000, 1,ground_options);
  floor2 = Bodies.rectangle(-1, 200,1, 1000,ground_options);
  floor3 = Bodies.rectangle(200, -1,1000, 1,ground_options);
  floor4 = Bodies.rectangle(401, 200,1, 1000,ground_options);
  
  player = Bodies.circle(200,200,20,ball_options);
  World.add(world, player);
  World.add(world, floor);
  World.add(world, floor2);
  World.add(world, floor3);
  World.add(world, floor4);

  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill(255);
  ellipse(player.position.x,player.position.y,20,20);

  d = dist(x,y,player.position.x,player.position.y);
          if(d<=20)
            {
              x = random(0,player.position.y); 
              y = random(0,400);
              score++ 
            }
            ellipse(x,y,10,10);
            text(score,200,20);
            if(keyDown("RIGHT_ARROW")){
              player.position.x+=1;
              console.log("right");
            }
            if(keyDown("LEFT_ARROW")){
             player.position.x-=1;
             console.log("left");
            }
            
}
