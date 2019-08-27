var curryBirds = [];
var pipes = [];
var scores = [];
var pipesamt = 1;
var birdsamt = 10 + 1; // have to do +1 for player controlled
var currbirds = birdsamt;
var g = 0.2;
var tNoise = 20;
var gen = 0;
var best = 0;
var bestthisgen = 0;
var prevscores = [];

function pipe() {
  this.x = 500;
  this.h = random(100, 400);
  this.gap = 50;
  this.tick = function() {
    if (this.x <= 0) {
      this.x = 500;
      this.h = random(100, 400);
    }
    this.x -= 4;
  }
  this.render = function() {
    fill(0, 255, 0);
    rect(this.x, 0, 40, this.h - this.gap);
    rect(this.x, this.h + this.gap, 40, 400);
  }
}

function bird(pc) {
  this.pc = pc;
  this.dead = false;
  this.score = 0;
  this.x = 250 + random(-10, 10);
  this.y = 250;
  this.vel = 0;
  this.distfnpipe = 0;
  this.ph = 0;
  this.brain = new BirdBrain();
  this.train = function() {
    if (!this.pc) {
      if (this.y < this.ph - 50 + random(-tNoise, tNoise)) {
        this.brain.train(this.input, -1); //-1 MEANS DON'T JUMP !!!!!
      } else if (this.y > this.ph + 50 + random(-tNoise, tNoise)) {
        this.brain.train(this.input, 1); //1 MEANS JUMP !!!!!
      } else {
        this.brain.train(this.input, -1);
      }
      if (this.disfnpipe < 50 + random(-tNoise, tNoise)) {
        this.brain.train(this.input, -1);
      }
    } else {
      if (keyIsDown(32)) {
        this.brain.train(this.input, 1);
      } else {
        this.brain.train(this.input, -1);
      }
    }
  }
  this.tick = function() {
    this.vel += g;
    this.y += this.vel;
    var thisx = this.x;
    var thisy = this.y;
    var thisscore = this.score;
    var d = this.dead;
    var ph = this.ph;
    var dfnp = this.distfnpipe;

    this.input = [map(this.distfnpipe, -250, 250, 0, 1), map(this.ph + 50, 0, 500, 0, 1), map(this.ph - 50, 0, 500, 0, 1)];
    this.train();
    if (!this.pc) {
      //console.log(this.brain.weights);
      if (this.brain.out(this.input) === 1) {
        this.jump()
      }
    }
    pipes.forEach(function(pipe, i) {
      dfnp = pipe.x - thisx;
      ph = pipe.h;
      if (!d) {
        if (((thisx > pipe.x && thisx < (pipe.x + 40)) && ((thisy <= pipe.h - pipe.gap) || (thisy >= pipe.h + pipe.gap))) || thisy >= 500) {
          d = true;
          currbirds--;
        }
      }
      if (thisx > pipe.x && thisx < (pipe.x + 40)) {
        thisscore++;
      }
    });
    this.dead = d;
    if (this.dead) {
      this.score = this.score
    } else {
      this.score = thisscore;
    }
    this.ph = ph;
    this.distfnpipe = dfnp;
  }
  this.render = function() {
    if (this.dead) return;
    fill(255, 255, 0);
    if (this.pc) {
      fill(255, 0, 0)
    }
    circle(this.x, this.y, 30);
    fill(255);
    if (this.pc) {
      fill(255, 0, 0)
    }
    ellipse(this.x - 8, this.y + 3, 20, 10);
    ellipse(this.x + 8, this.y - 3, 10, 10);
    fill(255, 0, 0);
    ellipse(this.x + 12, this.y + 6, 20, 10);
    fill(0);
    text(this.score, this.x - 8, this.y - 3);
  }
  this.jump = function() {
    this.vel = -5;
  }
}

function keyReleased() {
  if (key === ' ') {
    curryBirds[0].jump();
  }
}

function dnainit(length) {
  var result = '';
  var characters = 'unnnnnnnnnnnnnnnnnnnnnnnnnnnn';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function initarrays(weights) {
  curryBirds = [];
  pipes = [];

  curryBirds.push(new bird(true));
  for (var i = 0; i < birdsamt - 1; i++) {
    curryBirds.push(new bird(false));
    if (weights != []) {
      curryBirds[i].brain.setWeights(weights);
    }
  }
  for (var j = 0; j < pipesamt; j++) {
    pipes.push(new pipe());
  }
}

function drawLines(data, color) {
  stroke(0);
  // draw lines
  let px = 0;
  let py = data[0];
  for (let i = 0; i < data.length; i++) {
    let x = i * (width / (data.length - 1));
    let y = data[i] / 10;
    stroke(color[0], color[1], color[2]);
    line(px, py, x, y);
    stroke(0, 0, 0)
    //store the last position
    px = x;
    py = y;
  }
}

function setup() {
  createCanvas(500, 500);
  initarrays([]);
}

function draw() {
  background(140, 216, 237);
  fill(255);
  rect(0, 350, 50, 200);
  rect(50, 410, 50, 200);
  rect(100, 380, 50, 200);
  rect(150, 410, 50, 200);
  rect(200, 400, 50, 200);
  rect(250, 390, 50, 200);
  rect(300, 400, 50, 200);
  rect(350, 370, 50, 200);
  rect(400, 410, 50, 200);
  rect(450, 400, 50, 200);
  stroke(0);
  strokeWeight(0.8);
  textSize(50);
  fill(0);
  text("Flappy Bird AI", 100, 250);
  textSize(15);
  scores = [];
  curryBirds.forEach(function(bird, i) {
    // if(mouseIsPressed){
    //   bird.jump();
    // }
    bird.tick();
    bird.render();
    scores.push(bird.score);
  });
  if(keyIsDown(82)){
    currbirds=0;
  }
  var genmax = curryBirds.reduce(function(prev, current) {
    return (prev.score > current.score) ? prev : current
  });
  bestthisgen=genmax.score;
  if (currbirds <= 0) {
    var max = curryBirds.reduce(function(prev, current) {
      return (prev.score > current.score) ? prev : current
    });
    initarrays(max.brain.weights);
    currbirds = birdsamt;
    gen++;
    if (best < max.score) {
      best = max.score;
    }
    prevscores.push(max.score);
  }
  pipes.forEach(function(pipe, i) {
    pipe.tick();
    pipe.render();
  });
  fill(0);
  text(scores, 20, 20);
  text("Generation: " + gen, 300, 20);
  text("Best: " + best, 300, 40);
  text("Best This Generation: "+bestthisgen, 300, 60);
  drawLines(prevscores,[0,0,0]);
}
