document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    setInterval(function(){target.click(); }, 10);
}, false);
