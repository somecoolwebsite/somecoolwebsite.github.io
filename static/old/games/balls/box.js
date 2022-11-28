class Box {
  constructor(x,y,w,h,a){
    this.options = {
      angle: a
    };
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x,y,w,h,this.options);
    World.add(world,this.body);
  }
  show(){
    const angle = this.body.angle;
    const pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
  }
}
