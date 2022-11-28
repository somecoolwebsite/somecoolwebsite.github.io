document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    setInterval(function(){document.elementFromPoint(e.pageX, e.pageY).click(); }, 10);
}, false);
