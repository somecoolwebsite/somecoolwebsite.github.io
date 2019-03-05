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
g.style.position = "absolute";
g.style.top = 8 + "px";
g.style.right = 16 + "px";
g.style.zIndex = 2;
g.id='gmaerrrrrrrrrr';
g.innerHTML="<p>click</p><p id=\"clicks\"></p>"
s.type='text/css';

document.head.appendChild(s);
document.body.appendChild(g);
document.addEventListener('click', function(e) {
  var currentTop = Math.floor(Math.random() * documentHeight) + 1;
  var currentLeft = Math.floor(Math.random() * documentWidth) + 1;
  epic.push(document.createElement("div"));
  epic[epic.length-1].style.position = "absolute";
  epic[epic.length-1].style.top = currentTop + "px";
  epic[epic.length-1].style.left = currentLeft + "px";
  epic[epic.length-1].innerHTML = "<p>hell on earth</p>";
  document.body.appendChild(epic[epic.length-1]);
  c++;
  document.getElementById("clicks").innerHTML = c;
}, false);
