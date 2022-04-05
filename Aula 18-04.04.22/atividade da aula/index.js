


function entrar() {


    email = document.querySelector("#inputEmail").value;

    const emailNormalizado = email.toLowerCase();


    senha = document.querySelector("#inputPassword").value;


    if (senha.length >= 8 && senha.length < 12 && /.com$/.test(email)) {

        localStorage.setItem("login", emailNormalizado)

        alert("Login efetuado com sucesso")

        window.location.href = "tarefas.html"
    }



}
