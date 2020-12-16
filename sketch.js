
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var ground, paper1, trashbin1;
function preload()
{

}

function setup() {
	var canvas = createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(600, height, 1200, 20);
	paper1 = new Paper(200, 870, 30);
	trashbin1 = new Trashbin(760, 820, 20, 100);
	trashbin2 = new Trashbin(850, 880, 200,20);
	trashbin3 = new Trashbin(940, 820, 20, 100);
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  ground.display();
  paper1.display();
  trashbin1.display();
  trashbin2.display();
  trashbin3.display();
  console.log(paper1.body.position);
  
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		
		Matter.Body.applyForce(paper1.body,paper1.body.position, {x:85, y: -85});
		
		
	}
   

}
