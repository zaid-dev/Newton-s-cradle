
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	var ballImage;

	function preload()
	{
		ballImage = loadImage("crumpled image.png");
	}
	var engine,world;
	var paperObject;

	var ground;
	var ball;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;



	paperObject = new Ball(100,100);
	
	ground = new Ground(400,650);

	dustbin1 = new Dustbin(680,650);

	//Create the Bodies Here.
	Engine.run(engine);

}


function draw() {
background(0);

  paperObject.display();
 
  dustbin1.show();
 // dustbin2.show();
 // dustbin3.show();
  ground.display();
  drawSprites();
	
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
 }
}