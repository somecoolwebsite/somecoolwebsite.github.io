var blocks = [];
var player;
var blks = 0;
var stage = 1;
//bruh
function block(x, y, p) {
  this.x = x;
  this.y = y;
  this.acc = 0;
  this.r = 30;
  this.p = p;
  this.speed = 2;
  this.jump = function() {
    this.acc = -5;
  }
  this.u = function() {
    if (this.p === 1) {
      fill(255, 0, 0);
      this.acc += 0.3;
      var thisx = this.x;
      var thisy = this.y;
      this.target = blocks.reduce(function(prev, current) {
        return (dist(thisx, thisy, prev.x, prev.y) < dist(thisx, thisy, current.x, current.y)) ? prev : current
      });
      var offset = createVector(this.target.x - this.x, this.target.y - this.y);
      this.tdir = atan2(offset.y, offset.x);
      if (dist(this.target.x, this.target.y, this.x, this.y) <= 30) {
        if(this.acc>=1){
          this.acc = 0;
        }
        // this.y -= 1;
        this.y += this.speed * sin(this.tdir);
        this.x -= this.speed * cos(this.tdir);
      }

      this.y += this.acc;
    } else {
      fill(255);
    }
    circle(this.x, this.y, this.r);
    if (this.y >= height) {
      circleredo();
    }
  }
}

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);
  blks = (windowWidth + windowHeight) / 5;
  player = new block(random(0, 400), 0, 1);
  for (var i = 0; i < blks; i++) {
    blocks.push(new block(random(0, width), random(0, height), 0));
  }
}

function circleredo() {
  stage++;
  blocks = [];
  player = new block(random(0, width), 0, 1);
  for (var i = 0; i < blks; i++) {
    blocks.push(new block(random(0, width), random(0, height), 0));
  }
}

function draw() {
  background(220);
  fill(0, 255, 0);
  rect(0, height - 20, width, 20);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(70);
  text("Stage: " + stage, width / 2, height / 2);
  blocks.forEach(function(b) {
    b.u();
  });
  player.u();
  if (keyIsDown(65)) {
    player.x -= 3
  }
  if (keyIsDown(68)) {
    player.x += 3
  }

}

function keyPressed() {
  if (key === ' ') {
    player.jump();
  }
}
