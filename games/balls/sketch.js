var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
var engine,world;

var da = 0;
var spx = 0;
var spy = 0;
var m = [];
// var b;
var g;
var sx = 0;
var sy = 0;
var absx,absy;
var plats = [];

function setup() {
  colorMode(HSB);
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  g = new Ground(width/2,height-10,width,10,frameCount*0.1);
}

function draw() {
  background(220);
  if(frameCount % 20===0){
    m.push(new Marble(spx,spy,random(20,40)));
  }
  // m.push(new Marble(mouseX,mouseY,random(20,40)));
  g.show();
  // b.show();
  for(var i=0;i<m.length;i++){
    m[i].show();
  }
  for(var j=0;j<plats.length;j++){
    plats[j].show();
  }
  Engine.update(engine);
  absx = abs(sx-mouseX);
  absy = abs(sy-mouseY);
  if(mouseIsPressed){
    push();
    translate(sx,sy);
    rotate(da);
    rect(0,0,absx*2,absy*2);
    pop();
  }
  if(keyIsDown(LEFT_ARROW)||keyIsDown(65)){
    da-=1*PI/180;
  }
  if(keyIsDown(RIGHT_ARROW)||keyIsDown(68)){
    da+=1*PI/180;
  }
  if(keyIsDown(32)){
    spx = mouseX;
    spy = mouseY; 
  }
}

function mousePressed() {
  sx = mouseX;
  sy = mouseY;
}

function mouseReleased() {
  f = function(x){return (x/2)}
  
  plats.push(new Ground(sx,sy,absx*2,absy*2,da));
}
