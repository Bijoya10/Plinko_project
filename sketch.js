const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinko=[];
var divisions=[];
var ball=[];

var engine,world,ground;

function setup() {
  var canvas =  createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,595,400,10);

  for(var i =0;i<=400;i=i+50){
    divisions.push(new Division(i,500,10,200));
  }

  for(var i =20;i<=600;i=i+60){
    plinko.push(new Plinko(i,200));
    plinko.push(new Plinko(i+30,300));
    plinko.push(new Plinko(i,100));
  }
}


function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  for(var i=0;i<divisions.length;i=i+1){
    divisions[i].display();
  }

  for(var i=0;i<plinko.length;i=i+1){
    plinko[i].display();
  }

  if(frameCount% 60===0){
    var r = Math.round(random(50,350));
    ball.push(new Ball(r,0));
  }
  for(var i=0;i<ball.length;i=i+1){
      ball[i].display();
  } 
}

