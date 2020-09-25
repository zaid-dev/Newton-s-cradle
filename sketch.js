
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

var ball1,ball2,ball3,ball4,roofObject;
var rope1,rope2,rope3,rope4;
var bobDiameter;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	roofObject = new Ground(200,200);


	var bobDiameter=40; 
	var startBobPositionX=width/2; 
	var startBobPositionY=height/4+500; 
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter); 
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
 
  bobObject2.display();
 
  bobObject3.display();
  
  bobObject4.display();

  roofObject.display();

  rope1.display();


  drawSprites();
 
}



