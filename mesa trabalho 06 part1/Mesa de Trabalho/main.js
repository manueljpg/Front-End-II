// criar um array vazio
const urlImagens = []; 
// a criação desse array serve para capturar no nosso código HTML todos os links das imagens que queremos inserir, neste caso (3), agora não faz muito sentido

const imagens = document.querySelectorAll("img"); 
// essa segunda declaraçao de variavel é utilizada para capturar a quantidade de elementos com a classe "img" no nosso HTML, nesse caso são (3);

const link = document.querySelectorAll('.link-imagem');

imagens.forEach((_, index) => {

  // +1 para mudar a posição
  const url = prompt(`Adicione o url para a imagem ${index + 1}`);
  // envia um dado para o array (push)
  urlImagens.push(url);

  link[index].setAttribute("href", url);
  link[index].setAttribute("target", "_blank");
  imagens[index].setAttribute("src", url);
});

/* ETAPA 3

   - Nó pai: Div. Conteudo
   - Nó filho repetitivo: Div .cartão
   - Explicação:
1. Deixar o conteudo vazio ->   <div class="conteudo">
2. Criar template string da estrutura do HTML do cartão
3. Modificar o HTML com o innerHTML, no elemento pai (.conteudo), acrescentando cada cartão.
*/

// (mudando o texto do conteudo)

