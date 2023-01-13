var ops, blink = document.getElementById('blink');
ops = 1
setInterval(function () {
    ops = (ops < 1) ? 1 : 0;
    blink.style.opacity = ops;
}, 500);