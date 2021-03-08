const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var slingshot;
var block8, block9, block10, block11, block12, block13, block14, block15, block16, block17;
var ground1;
var polygon;
var ball;
var launcher;


function preload(){
  

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    block8 = new Box(630,200,40,40)
    block9 = new Box(630,200,40,40)
    block10 = new Box(670,200,40,40)
    block11 = new Box(670,200,40,40)
    block12 = new Box(630,200,40,40)
    block13 = new Box(670,200,40,40)
    block14 = new Box(630,200,40,40)
    block15 = new Box(670,200,40,40)
   block16 = new Box(630,200,40,40)
   block17 = new Box(670,200,40,40)
   ball = new stone(470,300,40)

    ground = new Ground(600,height,1200,20);
    launcher = new Slingshot(ball.body,{x:470,y:100})
   
   
   // slingshot= new Slingshot(this.polygon,{x:100,y:200});
   
    
    
    
}
function draw(){
    Engine.update(engine);
    background("white")
    ground.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    ball.display();
    launcher.display();
   
    //slingshot.display();
    //imageMode(CENTER)
   // image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
 function mouseReleased(){
  // slingshot.fly();
 }
