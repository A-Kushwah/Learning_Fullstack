const increasebtn = document.getElementById('increasebtn');
const decreasebtn = document.getElementById('decreasebtn');
const resetbtn = document.getElementById('resetbtn');
const countlabel = document.getElementById('countlabel');

let counter = 0

document.getElementById('increasebtn').onclick = function() {
    counter++
    document.getElementById('countlabel').textContent = counter
}

document.getElementById('decreasebtn').onclick = function() {
    counter--
    document.getElementById('countlabel').textContent = counter
}

document.getElementById('resetbtn').onclick = function() {
    counter = 0
    document.getElementById('countlabel').textContent = counter
}


