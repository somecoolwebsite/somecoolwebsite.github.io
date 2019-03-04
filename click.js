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
g.innerHTML="<div id="gmaerrrrrrrrrr"><p>click</p><p id="clicks"></p><div>"
s.type='text/css';
s.appendChild(document.createTextNode('#gmaerrrrrrrrrr{position:"fixed";bottom:"10px";left:"10px;}#gmaerrrrrrrrrr:not(:hover){visibility: hidden;} #gmaerrrrrrrrrr:hover{visibility: visible;}'));
document.head.appendChild(s);
document.addEventListener('click', function(e) {
  c++;
  g.getElementById("clicks").value = c;
}, false);
