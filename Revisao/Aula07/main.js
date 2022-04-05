//cria arr vazio
const urlImagem = [];

const imagens = document.querySelectorAll("img");
const link = document.querySelectorAll(".link");
const conteudo = document.querySelector(".conteudo");

for (let i = 0; i < 3; i++) {
  const url = prompt(`Adicione o URL para a imagem ${i + 1}`);
  urlImagem.push(url);
}

urlImagem.forEach((url) => {
  conteudo.innerHTML += `
  <div class="cartao">

    <a class="link" href="${url}" target="__blank">

        <img class="imagem" id="imagem-1" alt="imagem-1" src="${url}">

    </a>

  </div>`
;
});

/* ETAPA 3
   - Nó pai: <div class="conteudo"> 
   - Nó filho repetitivo: <div class="cartao">
   - Explicação:

   

*/
