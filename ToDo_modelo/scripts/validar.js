function validar(){

    const nome = document.querySelector("#nome").value.split(' ');
    const apelido = document.querySelector("#apelido").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    const confirmar = document.querySelector("#confirmarSenha").value;
    var numberPattern = /\d+/g;

nome.forEach(elemento=> {
    if (numberPattern.test(elemento)){
        alert ("Por favor escreva se nome sem numeros")
    }

})



}
