const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(75,370,10,360);
    box2 = new Box(100,370,30,260);
    box3 = new Box(140,370,50,220);
    box4 = new Box(201,370,70,190);
    box5 = new Box(262,370,50,220);
    box6 = new Box(300,370,30,260);
    box7 = new Box(325,370,10,360);
    
    ground = new Ground(200,380,350,50);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box1.color="brown"
    box2.display();
    box2.color="brown" 
    box3.display();
    box3.color="brown"
    box4.display();
    box4.color="brown"
    box5.display();
    box5.color="brown"
    box6.display();
    box6.color="brown"
    box7.display();
    box7.color="brown"

   ground.display();
   triangle(28,60,50,193,209,114);
   triangle(173,100,111,60,220,90);
   triangle(300,86,340,144,260,190);
}