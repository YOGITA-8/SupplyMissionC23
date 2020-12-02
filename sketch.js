//define global variables - helicopter, package, ground
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

//define constants - Engine, World, Bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//define variables of class Box-box1,box2,box3
var box1,box2,box3;



function preload(){

	//load helicopterIMG image
	helicopterIMG=loadImage("helicopter.png");

	//load packageIMG image
	packageIMG=loadImage("package.png");

}



function setup() {

	createCanvas(800, 700);
	
	rectMode(CENTER);
	
	//creating packageSprite 
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	//creating helicopterSprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	//define and color the ground sprite
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	//create engine and add the world to the engine
	engine = Engine.create();
	world = engine.world;

	//define packageBody and add it to the world
	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	
	//Creating a Ground
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//create the 3 boxes
	box1 = new Box(400,650,200,20);
	box2 = new Box(300,650,20,100);
	box3 = new Box(500,650,20,100);

	//update "Engine" with the "engine" and run it 
	Engine.run(engine);
  
}



function draw() {
	
  background(0);

  rectMode(CENTER);

  //make position of package sprite to match the package body
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

   //display boxes
   box1.display();
   box2.display();
   box3.display();

   console.log(box1.position)
  keyPressed();

  drawSprites();
 
}



//package will fall 
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
      Matter.Body.setStatic(packageBody,false);

    
  }

}

