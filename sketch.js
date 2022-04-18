
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	Engine = Engine.create();
	World = Engine.world;

    var ball_options={
      isStatic:false,
      restitution:1.2,
      friction:0,
      density:1.2
  }

	//Create the Bodies Here.
    ball = Bodies.circle(100,200,20,20,ball_options)
    World.add(World,ball);

    groundObj=new ground(width/2,670,width,20);
    leftside=new ground(1100,600,20,120);
    rightside=new ground(100,600.20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  groundObj.display();
  leftside.display();
  rightside.display();
 
}

function keyPressed(){

if (keyCode === UP_ARROW) {
  
  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
        }

}
