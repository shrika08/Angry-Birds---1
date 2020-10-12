var Engine = Matter.Engine
var World = Matter.World
var Bodies = Matter.Bodies
var e,world
var g1,b1,b2,b3,b4,b5,l1,l2,l3,l4,p1,p2,B1;

function setup() {
  createCanvas(1200,400);
  

  e = Engine.create()
  world = e.world

  g1 = new Ground(600,380,1200,10)
  b1 = new Box(700,330,50,50)
  b2 = new Box(900,330,50,50)
  l1 = new Log(800,300,250,PI/2)

  b3 = new Box(700,230,50,50)
  b4 = new Box(900,230,50,50)
  l2 = new Log(800,150,250,PI/2)
  
  b5 = new Box(800,120,50,50)
  l3 = new Log(750,120,100,PI/7)
  l4 = new Log(850,120,100,-PI/7)

  p1 = new Pig(800,330,40,40)
  p2 = new Pig(800,230,40,40)

  B1 = new Bird(200,100,50,50) 
}

function draw() {
  background(0); 
  Engine.update(e)
  
  g1.show()
  b1.show()
  b2.show()
  l1.show()

  b3.show()
  b4.show()
  l2.show()

  b5.show()
  l3.show()
  l4.show()

  p1.show()
  p2.show()

  B1.show()
}