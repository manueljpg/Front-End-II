const baseDeDados = {
  resultado: [
    {
      genero: "masculino",
      nome: {
        titulo: "Sr.",
        primeiro: "David",
        ultimo: "Fernando",
      },
      localizacao: {
        rua: " Augusta , 238",
        cidade: "São Paulo",
        Estado: "São Paulo",
        postcode: "01305000",
        coordenadas: {
          latitude: "-23.5569581",
          longitude: "-46.6589677",
        },
        timezone: {
          offset: "-3:00",
          descricao: "Brasil",
        },
      },
      email: "david.fernando@exemplo.com",
      login: {
        uuid: "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
        usuario: "silverswan131",
        senha: "firewall",
        salt: "TQA1Gz7x",
        md5: "dc523cb313b63dfe5be2140b0c05b3bc",
        sha1: "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
        sha256:
          "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480",
      },
      dob: {
        data: "1993-07-20T09:44:18.674Z",
        idade: 26,
      },
      registro: {
        data: "2002-05-21T10:59:49.966Z",
        idade: 17,
      },
      fone: "011-4039-8745",
      celular: "011-99874-5621",
      id: {
        nome: "PPS",
        valor: "0390511T",
      },
      imagem: {
        grande: "https://randomuser.me/api/portraits/men/75.jpg",
        media: "https://randomuser.me/api/portraits/med/men/75.jpg",
        miniatura: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      },
      nat: "IE",
    },
  ],
  info: {
    seed: "fea8be3e64777240",
    resultado: 1,
    pagina: 1,
    versao: "1.3",
  },
};

const consultandoBaseDeDados = new Promise((resolve, reject) => {
  // Aqui temos uma solicitação simulada para um banco de dados, com um atraso de 2 segundos.
  //A lógica interna estará  no servidor e nós apenas esperaríamos por uma resposta.
  setTimeout(function () {
    if (baseDeDados != null) {
      resolve(baseDeDados);
    } else {
      reject({
        "mensagem": "Base de dados inexistente.",
      });
    }
  }, 2000);
});
console.log(consultandoBaseDeDados)
// Aqui realizamos uma consulta da promessa, aguardando sua resposta assíncrona

consultandoBaseDeDados.then(({ resultado }) => {
    renderizarDadosUsuario(resultado);
  })
  .catch((err) => {
    console.error();
  });

 const renderizarDadosUsuario = (data) => {
  console.log("objeto", data)

  const card = document.querySelector('ul');

  card.innerHTML = `
  <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="${data[0].imagem.media}"></div>
        <div class="card_content">
          <h2 class="card_title">Nome Completo: ${data[0].nome.titulo} ${data[0].nome.primeiro} ${data[0].nome.ultimo}</h2>
          <p class="card_text">E-mail: ${data[0].email}</p>
          <button class="btn card_btn">Entrar em contato</button>
        </div>
      </div>
    </li>
  `
//   `<div class="cards">
// <img src= "${data[0].imagem.grande}" alt="" id="image">
//    <p id="nome"> Nome Completo: ${data[0].nome.titulo} ${data[0].nome.primeiro} ${data[0].nome.ultimo}</p>
//    <p id="email">E-mail: ${data[0].email}</p>
//   </div>`
};

/* -------------------------------- TAREFAS -------------------------------- */
// Aqui  devem desenvolver uma função que é exibida na tela:
// a foto, o nome completo do usuário e seu e-mail.
//  Isso deve ser baseado nas informações que chegam até nós e  são inseridas no HTML.
//  Dica: você pode manipular o CSS e estruturar o card ao seu gosto
