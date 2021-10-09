let brian = new NeuralNetwork(2, 10, 2);
let input = [2,1];

function setup() {
  createCanvas(400, 400);
  brian.train([2,1],[2,1]);
  console.log(brian.predict([3,3]));
  console.log("brian has made a robot");
}

function draw() {
  background(220);
  
}
