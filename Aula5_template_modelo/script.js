let bg = document.querySelector ('h1');
let background = document.querySelector('body');

let dados = document.querySelectorAll('.dados');

bg.style.color = 'red';
background.style.backgroundColor = 'white'
 
dados.forEach(elemento => { elemento.classList.add ('dadosAlterados')});