//Grupo 09

// Integrantes
// Lucas Rosa
// Sankler Bergman
// Daniel Martins
// João Francisco Amigo
// Erick Pereira

// let maoUsuario = parseInt(prompt("Pedra - 1 | Papel - 2 | Tesoura - 3"))

// let random = parseInt(Math.random() * 3 + 1 )

// let maoMaquina = random;

let escolha = ['Pedra', 'Papel', 'Tesoura'];

//let rodadas = [1,2,3]

let vitorias = 0;

// console.log(maoUsuario);
// console.log(maoMaquina);

let resultado = "Sem calculo";


for (var index = 0; index < 3; index ++) {

    let maoUsuario = parseInt(prompt("Pedra - 1 | Papel - 2 | Tesoura - 3"))

    let random = parseInt(Math.random() * 3 + 0.99 )
    
    let maoMaquina = random;

    if (maoUsuario == 1){
        // if (maoMaquina == 1){
        //     resultado = 'empate'
        // }
        // if (maoMaquina == 2){
        //     resultado = 'derrota'
        // }
        // if (maoMaquina == 3){
        //     resultado = 'vitoria'
        // }
        switch (maoMaquina){
            case 1:
                resultado = 'empate';
                break;
            case 2:
                resultado = 'derrota';
                break;
            case 3:
                resultado = 'vitoria';
                vitorias++
                break;
        }
    }
    if (maoUsuario == 2){
        // if (maoMaquina == 1){
        //     resultado = 'vitoria'
        // }
        // if (maoMaquina == 2){
        //     resultado = 'empate'
        // }
        // if (maoMaquina == 3){
        //     resultado = 'derrota'
        // }
        switch (maoMaquina){
            case 1:
                resultado = 'vitoria';
                vitorias++
                break;
            case 2:
                resultado = 'empate';
                break;
            case 3:
                resultado = 'derrota';
                break;
        }
    }
    if (maoUsuario == 3){
        // if (maoMaquina == 1){
        //     resultado = 'derrota'
        // }
        // if (maoMaquina == 2){
        //     resultado = 'vitoria'
        // }
        // if (maoMaquina == 3){
        //     resultado = 'empate'
        // }
        switch (maoMaquina){
            case 1:
                resultado = 'derrota';
                break;
            case 2:
                resultado = 'vitoria';
                vitorias++
                break;
            case 3:
                resultado = 'empate';
                break;
        }
    }
    alert('Escolhido: '+escolha[maoUsuario-1]+'| Maquina: '+escolha[maoMaquina-1] +'| Resultado: ' +resultado)
}
alert('Resultado Final :'+vitorias);