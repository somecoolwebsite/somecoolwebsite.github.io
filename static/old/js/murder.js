//make a murder on the elements
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    target.style.color = "red";
}, false);
