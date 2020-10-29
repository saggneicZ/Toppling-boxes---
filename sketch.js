const Engine=Matter.Engine;// engine is like universe 
const World=Matter.World; // world is like earth
const Bodies=Matter.Bodies;// bodies are the objects on earth

var engine1,world1,ground; //creating variables for engine,world,ground,ball

var box1,box2;





function setup() {
  createCanvas(800,400);
  engine1=Engine.create(); //creating engine1 (universe)
  world1=engine1.world; // creating world1 inside engine1 (earth inside universe)
  box1=new Box(200,300,50,50);
  box2=new Box (240,100,50,100);
  ground= new Ground(200,400,400,20);


}

function draw() {
  background(255,255,255);  
  Engine.update(engine1);

  box1.display();
  box2.display();
  ground.display();

  
  drawSprites();


}