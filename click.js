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
  document.getElementById("clicks").innerHTML = c;
  popp();
}, false);

function popp(){
 for (i=0; i<10; i++){
 var rndom_left = Math.round(Math.random() 500) % 500;
 var rndom_top = Math.round(Math.random() 200) % 200;
 document.write("<div id='coverup' class='cover' style='z-index:"+i+";position:relative;visibility:visible;left:"+rndom_left+"px;top:"+rndom_top+"px;width:50px;height:50px;color:red;'>what the actual backflip</div>");}
}
