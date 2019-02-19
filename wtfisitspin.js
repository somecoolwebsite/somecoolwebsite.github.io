var target;
document.addEventListener('click', function(e) {
    e = e || window.event;
    target = e.target || e.srcElement
}, false);
var s = document.createElement("style");
s.type='text/css';
s.appendChild(document.createTextNode('@keyframes theepic {from {transform:rotate(0deg);}to {transform:rotate(360deg);}'));
target.style.animation = "theepic 1s infinite";
