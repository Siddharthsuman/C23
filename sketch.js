const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,myWorld,ground,ball,box1,box2;


function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  myWorld=engine.world;
  /*var ground_options={
    isStatic:true
  } */
  
 // ground=Bodies.rectangle(200,390,200,20,ground_options);
  
  //World.add(myWorld,ground);
  /*var ball_options={
    restitution:2.0
  }

  ball=Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);
}*/

box1=new Box(200,300,50,50);
box2=new Box(240,100,50,100);

ground=new Ground(200,390,400,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

/*rectMode (CENTER);
rect (ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);*/
box1.display();
box2.display();
ground.display();
//drawSprites();
}