
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


var tree;
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6;
var launcher;
var stone;

function preload()
{
	boyImg=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1000, 800);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree= new Tree(750,770);
	ground=new Ground(500,780,1000,20);
	mango1=new Mango(700,250,40);
	mango2=new Mango(750,260,40);
	mango3=new Mango(650,250,30);
	mango4=new Mango(800,300,30);
	mango5=new Mango(820,350,40);
	mango6=new Mango(650,200,40);
	stone=new Stone(235,420,30);
  launcher= new Launcher(stone.body,{x:235,y:630});
  
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image(boyImg,200,550,200,300);
  
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stone.display();
  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  
  
  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}


function detectCollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }