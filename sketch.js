var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var cannon;
var ground;
var engine;
var world;
var ob1;

function setup() {
  createCanvas(windowWidth, 500);
  engine = Engine.create();
  world = engine.world;

  cannon = new CannonMain(250, 0, 10);
  ground = new Ground(width / 2, height, width, 30);
  ob1 = new Ob(450, 50, 10);

  Engine.run(engine);
}

function draw() {
  background(51);
  rectMode(CENTER);

  cannon.show();
  cannon.move();
  ground.show();
  ob1.show();
}
