//this makes ants or something 🐜

//this is a very annoy for your compute

var documentHeight = document.documentElement.clientHeight;
var documentWidth = document.documentElement.clientWidth;
var nest = document.createElement('div');
var ants = [];
nest.id = "nest";
nest.innerHTML = "<img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzT_5FXEOPLi654Di8TNxpd5UAtHzb9QfeW6WzdSVdsQblO6X5\"></img>";
nest.style.position = "absolute";
var currentTop = Math.floor(Math.random() * documentHeight) + 1;
var currentLeft = Math.floor(Math.random() * documentWidth) + 1;
nest.style.top = currentTop + "px";
nest.style.left = currentLeft + "px";
nest.style.zIndex = 2;
document.body.appendChild(nest);
document.addEventListener("click", function(){
  ants.push(document.createElement('p'));
  ants[ants.length-1].outerHTML = "<p>🐜</p>";
  document.body.appendChild(ants[ants.length-1]);
});
