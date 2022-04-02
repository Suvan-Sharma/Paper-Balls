
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground 
var leftWall
var rightWall
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    var ball_options={
		isStatic : false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690.,800,20)
    leftWall = new Ground(500,640,20,80)
	rightWall = new Ground(650,640,20,80)
	ball = Bodies.circle(200,100,40,ball_options)
	World.add(world, ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display()
 leftWall.display()
 rightWall.display()
 ellipse(ball.position.x,ball.position.y,40,40)
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


