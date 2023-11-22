// SLIDER
var bullet = document.querySelector('.m-btn');
var count = 1

document.getElementById('bullet1').checked = true

setInterval(() => {
    next()
}, 7000)

function next() {
    count++

    if (count > 3) {
        count = 1
    }

    document.getElementById('bullet' + count).checked = true
}

function back() {
    count--;

    if (count < 1) {
        count = 3;
    }

    document.getElementById('bullet' + count).checked = true;
}