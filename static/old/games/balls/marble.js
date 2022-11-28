class Marble {
  constructor(x,y,r){
    this.options = {
      restitution:0,
      friction:0
    };
    this.c = random(0,360);
    this.r = r;
    this.body = Bodies.circle(x,y,r/2, this.options);
    World.add(world,this.body);
  }
  show(){
    const angle = this.body.angle;
    const pos = this.body.position;
    push();
    fill(this.c,255,255);
    translate(pos.x,pos.y);
    rotate(angle);
    circle(0,0,this.r);
    pop();
  }
}
