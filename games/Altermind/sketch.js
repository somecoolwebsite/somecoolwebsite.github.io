var ships = [];
var shipp = new ship(200, 200, 90, true)
var socket = io.connect('https://altermind--locknessko.repl.co/');

function bullet(x, y, ang) {
  this.x = x;
  this.y = y;
  this.ang = ang;
  this.speed = 11;
  this.tick = function() {

    this.x += this.speed * sin(this.ang);
    this.y -= this.speed * cos(this.ang);
  }
  this.render = function() {
    push();
    line(this.x, this.y, this.x, this.y - 10);
    pop();
  }
}

function ship(x, y, ang, pc) {
  this.x = x;
  this.y = y;
  this.ang = ang;
  this.bullets = [];
  this.pc = pc;
  this.speed = 6;
  this.ls = 4;
  this.hs = 8;
  this.health = 100;
  this.tick = function() {

    for (var i = this.bullets.length - 1; i > 0; i--) {
      if (dist(this.x, this.y, this.bullets[i].x, this.bullets[i].y) < 10) {
        this.health--;
      }
      this.bullets[i].tick();
      if (dist(windowWidth / 2, windowHeight / 2, this.bullets[i].x, this.bullets[i].y) > 1000) {
        this.bullets.splice(i, 1);
      }

    }
    if (this.pc) {
      if (mouseIsPressed) {
        this.bullets.push(new bullet(this.x + (this.speed * 4) * sin(this.ang), this.y - (this.speed * 4) * cos(this.ang), this.ang));
        this.speed = this.ls;
      } else {
        this.speed = this.hs;
      }
      var objpos = createVector(this.x, this.y);
      var localPos = createVector(mouseX, mouseY);
      var offset = createVector(objpos.x - localPos.x, objpos.y - localPos.y);

      this.ang = atan2(offset.y, offset.x) - 90;
      if (keyIsDown(32)) {
        this.x += this.speed * sin(this.ang);
        this.y -= this.speed * cos(this.ang);
      }
    }
  }
  this.render = function() {

    push();
    fill(map(this.health, 0, 100, 255, 0), map(this.health, 0, 100, 0, 255), 0);
    translate(this.x, this.y);
    rotate(this.ang);
    triangle(0, -6.5, -5, 6.5, 5, 6.5);
    pop();
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].render();
    }
  }
}

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  socket.emit('shipnew', shipp);
}

socket.on('shipnew', function(data) {
  console.log(data);
  ships.push(new ship(data.x,data.y,data.ang,false));
});

function draw() {
  background(220);
  text(round(frameRate()), 20, 20);
  shipp.tick();
  shipp.render();
  socket.emit('shipnew', shipp); 
  ships.forEach(function(ship, index) {
    ship.tick();
    ship.render();
  });
  ships = [];
}
