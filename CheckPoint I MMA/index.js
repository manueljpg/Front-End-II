let destino = document.querySelector("#destino")
let nomePessoa = document.querySelector("#nomePessoa")
let data = document.querySelector("#dataViagem")
let imagem = document.querySelector("#vurl")
let comentarios = document.querySelector("#coments")
let telaFormulario= document.getElementsByClassName("telaFormulario")
let bnt=document.querySelector("#botaoSubmit")



bnt.addEventListener("click",(event)=> {

    var card = document.createElement("div")
    card.classList.add("cards")
    document.body.appendChild(card)
  
    card.innerHTML = `
    <div class="card mb-3">
  <img src="${imagem.value}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${destino.value}</h5>
    <h6 class="car-title">Viagem de ${nomePessoa.value}</h6>
    <p class="card-text">${comentarios.value}</p>
    <p class="card-text"><small class="text-muted">Data da Viagem: ${data.value}</small></p>
  </div>
</div><br>`

  
    event.preventDefault()
});
