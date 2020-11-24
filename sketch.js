
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofOb;
var bobOB1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofOb=new Ground(400, 50, 700, 40);
	bobOB1=new Bob(70, 480, 35);
	bobOB2=new Bob(140, 480, 35);
	bobOB3=new Bob(210, 480, 35);
	bobOB4=new Bob(280, 480, 35);
	bobOB5=new Bob(350, 480, 35);
	rope1=new Rope(bobOB1.body, roofOb.body, -200)
	rope2=new Rope(bobOB2.body, roofOb.body, -125)
	rope3=new Rope(bobOB3.body, roofOb.body, -50)
	rope4=new Rope(bobOB4.body, roofOb.body, 20)
	rope5=new Rope(bobOB5.body, roofOb.body, 90)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
	roofOb.display();
	bobOB1.display();
	bobOB2.display();
	bobOB3.display();
	bobOB4.display();
	bobOB5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bobOB1.body, bobOB1.body.position, {x:-25, y:-20})
	}
}


