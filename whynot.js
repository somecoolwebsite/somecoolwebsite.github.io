function Vector(x,y,z){
  this.x = x;
  this.y = y;
  this.z = z;
}

var px,py,pz,dis,dir,xrot,yrot,zrot;

var c=document.getElementById("canvas");
c.width  = window.innerWidth;
c.height = window.innerHeight;
var ctx=c.getContext("2d");

function pointto(x,y) {
  dir = Math.atan2(x,y);
  dis = Math.sqrt(x*x+y*y);
}

function gotoxyz(x,y,z){
  this.x1 = x-px;
  this.y1 = -(y-py);
  this.z1 = (z+500)-pz;
  pointto(x1,z1); // Y rotation
  this.x1 = dis*Math.sin(dir + (yrot)*Math.PI/180);
  this.z1 = dis*Math.cos(dir + (yrot)*Math.PI/180);
  pointto(y1,z1); // X Rotation
  this.y1 = dis*Math.sin(dir + (xrot)*Math.PI/180);
  this.z1 = dis*Math.cos(dir + (xrot)*Math.PI/180);
  pointto(x1,y1); // Z rotation
  this.x1 = dis*Math.sin(dir + (zrot)*Math.PI/180);
  this.y1 = dis*Math.cos(dir + (zrot)*Math.PI/180);
}

ctx.lineTo(gotoxyz(100,100,100).x1,gotoxyz(100,100,100).y1);
