var ships = []
var socket = io.connect('https://altermind--locknessko.repl.co/');
var shipp = new ship(200, 200, 90, true, socket.id, []);

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

function ship(x, y, ang, pc, id, b) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.ang = ang;
  this.bullets = b;
  this.pc = pc;
  this.speed = 6;
  this.ls = 4;
  this.hs = 8;
  this.health = 100;
  this.tick = function() {
    for (var j = 0; j < ships.length; j++) {
      for (var i = ships[j].bullets.length - 1; i > 0; i--) {
        if (dist(this.x, this.y, ships[j].bullets[i].x, ships[j].bullets[i].y) < 10) {
          this.health--;
        }
      }
    }
    for (var k = this.bullets.length - 1; k > 0; k--) {
      this.bullets[k].tick();
      if (dist(windowWidth / 2, windowHeight / 2, this.bullets[k].x, this.bullets[k].y) > 1000) {
        this.bullets.splice(k, 1);
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
      this.x += this.speed * sin(this.ang);
      this.y -= this.speed * cos(this.ang);
    }
    if(this.health<=0){
      shipp = new ship(-100,100,0,false,'dead', []);
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
  createCanvas(windowWidth - 15, windowHeight - 20);
  socket.emit('shipnew', shipp);
}

socket.on('connection', function(data) {
  socket.emit('shipnew', shipp);
  console.log('connection new!');
});
socket.on('disconnected', function(data) {
  console.log('connection dead: ' + data);
});
socket.on('shipnew', function(data) {
  if (ships.indexOf(data) === -1) {
    ships.push(new ship(data.x, data.y, data.ang, false, data.id, []));
  }
});
socket.on('shipupdate', function(data) {
  var bullarr = [];
  for (var i = 0; i < data.bullets.length; i++) {
    bullarr.push(new bullet(data.bullets[i].x, data.bullets[i].y, data.bullets[i].ang));
  }
  var ind = ships.find(o => o.id === data.id);
  ships[ships.indexOf(ind)] = new ship(data.x, data.y, data.ang, false, data.id, bullarr);
});

function draw() {
  background(220);
  text(round(frameRate()), 20, 20);
  shipp.tick();
  shipp.render();
  socket.emit('shipupdate', shipp);
  ships.forEach(function(ship, index) {
    ship.tick();
    ship.render();
  });
}
