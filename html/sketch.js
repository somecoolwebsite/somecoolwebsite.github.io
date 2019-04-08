let brian = new NeuralNetwork(8, 10, 7);
let iterations = 0;
let ops = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let s;

let training_data = [{
  //there is 30 possible cardsss
    inputs: [0,0,0,0,0,0,0],
    outputs: [0]
  },
  {
    inputs: [0,0,0,0,0,0,0],
    outputs: [1]
  },
  {
    inputs: [0,0,0,0,0,0,0],
    outputs: [2]
  },
  {
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },
                     {
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },
                     {
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },
                     {
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },
                     {
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },{
    inputs: [0,0,0,0,0,0,0],
    outputs: [3]
  },
];

function setup() {
  s = createSlider(0, 100, 0);
  createCanvas(400, 400);
}

function draw() {
  background(0);
  iterations = s.value();
  for(var i=0;i<iterations;i++){
    let data = random(training_data);
    brian.train([data.inputs,data.outputs]);
  }
  fill('white');
  text(iterations+" itertions", 10, 10);
}
