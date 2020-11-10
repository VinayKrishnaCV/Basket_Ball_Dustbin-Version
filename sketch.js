
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var rect1,rect2,rect3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper =new Paper(20,660,15);
	ground = new Ground(400,670,800,20);
	rect1=new Rectangle(width/2+200,650,200,20);
	rect2=new Rectangle(width/2+200-90,590,20,100);
	rect3=new Rectangle(width/2+200+90,590,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper.display();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x: 38,
		y: -38
	  });
	}
  }
  