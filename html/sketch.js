let brian = new NeuralNetwork(2, 10, 2);
let input = [2,1];
let iterations = 0;
let s;

function setup() {
  s = createSlider(0, 100, 100);
  createCanvas(400, 400);
}

function draw() {
  background(0);
  iterations = s.value();
  for(var i=0;i<iterations;i++){
    brian.train([2,1],[2,1]);
  }
  fill('white');
  text(iterations+" itertions", 10, 10);
}
