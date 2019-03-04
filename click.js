/*  _            _                          _  __     
 | |          | |                        | |/ /     
 | | ___   ___| | ___ __   ___  ___ ___  | ' / ___  
 | |/ _ \ / __| |/ / '_ \ / _ \/ __/ __| |  < / _ \ 
 | | (_) | (__|   <| | | |  __/\__ \__ \ | . \ (_) |
 |_|\___/ \___|_|\_\_| |_|\___||___/___/ |_|\_\___/ */
 
//A click gmae
 
var c = 0;
var s = document.createElement("style");
var g = document.createElement("div");
g.id='gmaerrrrrrrrrr';
g.innerHTML="<p>click</p><p id=\"clicks\"></p>"
s.type='text/css';

document.head.appendChild(s);
document.body.appendChild(g);
document.addEventListener('click', function(e) {
  c++;
  document.getElementById("clicks").value = c;
}, false);
