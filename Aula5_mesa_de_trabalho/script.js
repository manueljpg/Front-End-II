let corpo = document.querySelector('body');
let titulo = document.querySelector('h1');
let elementos = document.querySelector('item');

document.getElementById("switch").onchange = function() {darkMode() };

function darkMode() {
    corpo.classList.toggle('dark');
    titulo.classList.toggle('dark');
    elementos.classList.toggle('dark')
    }