document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    target.outerHTML = "your nan";
}, false);
