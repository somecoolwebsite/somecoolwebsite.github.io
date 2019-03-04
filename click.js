/*_            _                          _  __     
 | |          | |                        | |/ /     
 | | ___   ___| | ___ __   ___  ___ ___  | ' / ___  
 | |/ _ \ / __| |/ / '_ \ / _ \/ __/ __| |  < / _ \ 
 | | (_) | (__|   <| | | |  __/\__ \__ \ | . \ (_) |
 |_|\___/ \___|_|\_\_| |_|\___||___/___/ |_|\_\___/ */
 
//A click gmae
 
var epic = [];
var documentHeight = document.documentElement.clientHeight;
var documentWidth = document.documentElement.clientWidth;
var c = 0;
var s = document.createElement("style");
var g = document.createElement("div");
g.id='gmaerrrrrrrrrr';
g.innerHTML="<p>click</p><p id=\"clicks\"></p>"
s.type='text/css';

document.head.appendChild(s);
document.body.appendChild(g);
document.addEventListener('click', function(e) {
  var currentTop = Math.floor(Math.random() * documentHeight) + 1;
  var currentLeft = Math.floor(Math.random() * documentWidth) + 1;
  epic.push(document.createElement("div"));
  epic[epic.length].style.top = currentTop + "px";
  epic[epic.length].style.left = currentLeft + "px";
  c++;
  document.getElementById("clicks").innerHTML = c;
}, false);
