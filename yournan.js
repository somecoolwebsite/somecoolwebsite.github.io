document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    target.innerHTML = "your nan";
}, false);
