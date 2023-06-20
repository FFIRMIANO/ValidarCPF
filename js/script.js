function validaCPF(){
    const cpf=document.getElementById('cpf').value;

    if(cpf.length !== 11){
        alert('o cpf informado deve conter 11 digitos', 'red')
        return false;
    }

    if(verificarDigitosRepetidos (cpf)) {
        mostraResultado('cpf não pode conter repetição de digitos','red')
        return false
    }
      const digito01 = calcularDigitosVerificador(cpf, 1)
      const digito2 = calcularDigitosVerificador(cpf, 2)

      if(digito01 && digito2) {
        mostraResultado(`CPF Válído - ${cpf}`, 'green')
      }else {
        mostraResultado(`CPF Inválido - ${cpf}`,'red')
      }
    
}
  function mostraResultado(text, color) {
    const span=document.getElementById('result')

    span.innerHTML = text
    span.style.color = color
    
}
function verificarDigitosRepetidos(cpf) {
    return cpf.split ('').every((d) => d === cpf[0])
    
}

function calcularDigitosVerificador(cpf, posicao) {
    const sequencia = cpf.slice(0,8 + posicao).split('')

    let soma=0
    let multiplicador = 9 + posicao

    for (const numero of sequencia)  {
        soma += multiplicador * Number(numero)
        multiplicador--
    }
     const restoDivisao = (soma * 10) % 11;
     const digito = cpf.slice(8 + posicao, 9 + posicao)

     return restoDivisao == digito
     
}