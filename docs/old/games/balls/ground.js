class Ground extends Box {
  constructor(x,y,w,h,a){
    super(x,y,w,h,a);
    this.body.isStatic = true;
  }
}
