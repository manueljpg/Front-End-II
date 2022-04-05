function entrar() {



    const email = document.querySelector("#inputEmail").value;

    const emailNormalizado = email.toLowerCase();

    email.innerHTML = emailNormalizado;

    const senha = document.querySelector("#inputPassword").value;

    if (senha.length >= 8 && senha.length < 12 && /.com$/.test(email)) {

        localStorage.setItem("login", email)



        alert("Login efetuado com sucesso!")

        window.location.href = "tarefas.html"
    }else{
        alert("login nÃ£o efetuado.")
    }


}


