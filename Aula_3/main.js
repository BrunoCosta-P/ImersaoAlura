var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3




while (tentativas > 0) {

    var chute = parseInt(prompt("Digite um numero entre 0 e 10"))


    if (chute == numeroSecreto){
        alert ("Arcertou")
        break
    } else if (chute > numeroSecreto){
        alert("O numero secreto é menor")
        tentativas = tentativas - 1
    } else if (chute < numeroSecreto){
        alert("O numero secreto é maior")
        tentativas = tentativas - 1
    }

}

if (chute != numeroSecreto) {
    alert("Suas tentativas acabaram!!! o numero secreto era "+numeroSecreto)
}