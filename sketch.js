const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var engine,world
var object,ground,ball
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  var object_options={
    isStatic: true,
  }
  var circle_options={
    restitution: 1,
  }
  ground=Bodies.rectangle(200,400,50,50,object_options)
  ball=Bodies.circle(200,200,20,circle_options)
  
  World.add(world,ground) 
  World.add(world,ball) 
  console.log(ground.position.x)
}

function draw() {
  background(0); 
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50) 
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}