function BirdBrain(){
  this.inputs = [0,0,0];
  this.weights = [random(-10,10),random(-10,10),random(-10,10)];
  this.output = 0;
  this.bias=-1; //this bias is for optimal output
  this.learnrate=random(0.01,1); // optimal learning rate is 0.1
  this.active = function(num) {
    if(num>0){return 1}else{return -1}
  }
  this.setWeights = function(weights) {
    this.weights = weights;
  }
  this.train = function(input,target){
    this.error = target-this.out(input); //error = target-prediction
    for(var i=0;i<this.weights.length;i++){
      this.weights[i]+=this.error*input[i]*this.learnrate;
    }
    //new weight = weight + error * input * learning weight
   
  }
  this.out = function(input){
    this.inputs = input;
    this.output = this.active((this.inputs[0]+this.weights[0])+(this.inputs[1]+this.weights[1])+this.bias);
    return this.output;
  }
}  
