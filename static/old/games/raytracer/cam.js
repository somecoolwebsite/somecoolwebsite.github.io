function Camera(x,y,fov) {
  this.x = x;
  this.y = y;
  this.fov = fov;
  this.ang = 0;
  this.min = 0;
  this.max = 10;
  this.dists = [];
  this.render = function(scene){
    stroke(147,255,255);
    strokeWeight(7);
    point(this.x,this.y);
    this.dists = [];
    orx = 400;
    for(var i=0;i<this.fov;i++){
      this.dists.push(this.march(scene, i));
    }
    for(var j=0;j<this.dists.length;j++){
      noStroke();
      push();
      fill(this.dists[j],255,255);
      rect(orx+(j*((width-orx)/this.fov)),height/2,((width-orx)/this.fov),this.dists[j]);
      pop();
    }
  }
  this.march = function(scene,a){
    var o = 0;
    var ds = scene.reduce(function(prev, current) {
      return (dist(prev.x,prev.y,this.x,this.y) > dist(current.x,current.y,this.x,this.y)) ? prev : current
    });
    console.log(ds);
    o = dist(ds.x,ds.y,this.x,this.y);
    return o;
  }
  this.tick = function() {
    if(keyIsDown(65)){
      this.ang--;
    }
    if(keyIsDown(68)){
      this.ang++;
    }
    if(keyIsDown(87)){
      this.x++;
    }
    if(keyIsDown(83)){
      this.x--;
    }
  }
}
