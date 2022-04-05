const lista = document.querySelector('ul')

function createNode(element) {

    return document.createElement(element);

}  


function append(parent, el) {
    return parent.appendChild(el);
} 


// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
fetch('https://randomuser.me/api/')
    .then((response) => {
        return response.json()
    })

    .then(function(data) {
        //manipulamos a resposta
        console.log(data);
        let users= data.results
        return users.map(function(user) {
        let li = createNode('li'); 
        let img = createNode('img');
        let span = createNode('span');
        img.src = user.picture.medium;
        span.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last}`

            append(lista, li);
            append(li, img);
            append(li, span);

    })
    .catch(function () {
        console.log(error);
    })});

    
    


    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.

// Funcao para criar os novos elementos 


// criar os nodos onde serão inseridos cada um  dos elementos



/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado