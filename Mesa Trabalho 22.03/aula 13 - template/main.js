//  Setando o form
    let formulario = document.querySelector('form');
    const regexNum = '[0-9]';
    
  formulario.addEventListener('submit',function(e){
    // P
    e.preventDefault();

    let nome = document.querySelector('#nome').value;
    let arrayNomeCompleto = nome.split(' ');
    console.log(arrayNomeCompleto)

    // - Deve conter pelo menos duas palavras.
    if (arrayNomeCompleto.length >= 2){
    
    // - Cada nome ou sobrenome deve ter mais de 1 letra.
        arrayNomeCompleto.forEach((element) => {
            if(element.length > 1) {

    // - O campo não pode exceder 150 caracteres.
    // - Não deve conter números
                if ((nome.length <= 150) && (regexNum.test(nome))) {              
                    console.log('passou');
            
                } else {
                    alert ("Você escreveu mais de 150 char. ou tem nro no texto")
                }
            
            }
            else {
                alert ('Seu nome ou sobrenome deve ter mais de uma letra')
            }
        })
    }
  else {
      alert('Insira seu nome e sobrenome')
  }

  if (!checkedHobbies()) {
    alert('Tem mais do que 4 hobbies marcados.')
  }


  });

function checkedHobbies() {
    let countHobbies = 0
    document.getElementsByName('hobbies').forEach(element => {
        if(element.checked) {
          countHobbies++
        }
    })
    return countHobbies <= 4
}
  
  // Nome completo
  
  
  