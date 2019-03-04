var sl = document.createElement('input'):
var cps = 0;
sl.id = 'lll';
sl.type = 'range';
sl.min = 1;
sl.max = 100;
sl.oninput = function() {
  cps = this.value;
}
while (true){
  for(i = 0; i<cps; i++){
    document.body.click();
  }
}
