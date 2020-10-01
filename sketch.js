
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1;
var mango2;
var mango3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	var mango1 = new mango(200,40,15,15);
	var mango2 = new mango(200,60,15,15);
	var mango3 = new mango(200,80,15,15);
	var mango4 = new mango(200,100,15,15);
	var mango5 = new mango(200,120,15,15);



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);	

	




	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
  
  drawSprites();
 
}



