const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(300,500,600,10);
    
    box1 = new Box(200,250,50,50);

    box2 = new Box(240,300,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
       // rect(ground.position.x,ground.position.y,400,20);

    box1.display();
    box2.display();
    ground.display();
}