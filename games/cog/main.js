var gru;
var mat;
var cov;
var x = 0;
var y = 160;
var z = 0;
var rx = 0;
var ry = 0;
var rz = 0;
var sx = 0;
var sz = 0;
var srx = 0;
var sry = 0;
var srz = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  
  gru = loadModel('./gru.obj');
  mat = loadImage('./mat.jpg');
  cov = loadImage('./images%20(17).jpeg');
}

function tick(){
  if(!keyIsDown(32)){
    sry=ry;
  }
  if(keyIsDown(37)){ry+=0.05}
  if(keyIsDown(39)){ry-=0.05}
  if(keyIsDown(38)){
    x -= 2 * Math.cos(ry-(90*Math.PI/180));
    z += 2 * Math.sin(ry-(90*Math.PI/180));
  }
  if(keyIsDown(40)){
    x += 2 * Math.cos(ry-(90*Math.PI/180));
    z -= 2 * Math.sin(ry-(90*Math.PI/180));
  }
  if(keyIsDown(32)){
    sx -= 10 * Math.cos(sry-(90*Math.PI/180));
    sz += 10 * Math.sin(sry-(90*Math.PI/180));
  }
  else{sx=0;sz=0;}
}

function render(){
  push();
  translate(x,y,z);
  normalMaterial();
  rotateX(rx);
  rotateY(ry+(180*Math.PI/180));
  rotateZ(rz);
  rotateX(rx+(90*Math.PI/180));
  model(gru);
  pop();
  push();
  translate(x+sx,y-40,z+sz);
  normalMaterial();
  rotateX(srx);
  rotateY(sry);
  rotateZ(srz);
  texture(mat);
  box(20);
  pop();
  push();
  normalMaterial();
  texture(cov);
  rotateY(frameCount*0.001);
  box(1500);
  pop();
}

function draw() {
  background(220);
  tick();
  render();
}