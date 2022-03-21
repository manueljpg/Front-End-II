let destino = document.querySelector("#destino")
let nomePessoa = document.querySelector("#nomePessoa")
let data = document.querySelector("#dataViagem")
let imagem = document.querySelector("#vurl")
let comentarios = document.querySelector("#coments")
let telaFormulario= document.getElementsByClassName("telaFormulario")
let bnt=document.querySelector("#botaoSubmit")


bnt.addEventListener("click",(event)=> {

    var card = document.createElement("div")
    card.classList.add("card")
    document.telaFormulario.appendChild(card)
  
    card.innerHTML = 
    `<div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card h-100">
        <img src="${imagem}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${destino}</h5>
          <h6>${nomePessoa}</h6>
          <p class="card-text"> ${comentarios}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Viagem para o dia ${data}</small>
        </div>
      </div>
    </div>
    `
    event.preventDefault()
});
