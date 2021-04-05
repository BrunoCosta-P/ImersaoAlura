var operacao = prompt("qual operação você deseja realizar agora? 1=soma 2=subtração 3=divisão 4=multiplicação")
var primeiroValor = parseFloat( prompt("Dgigite o primeiro valor: "))
var segundoValor = parseFloat(prompt('Digite o segundo valor:'))


if (operacao == 1){
    var resultado = primeiroValor+segundoValor
    document.write("<h2>"+ primeiroValor + " + " + segundoValor+" = "+resultado+ "</h2>")
}

if (operacao == 2){
    var resultado = primeiroValor-segundoValor
    document.write("<h2>"+ primeiroValor + " - " + segundoValor+" = "+resultado+ "</h2>")
}

if (operacao == 3){
    var resultado = primeiroValor/segundoValor
    document.write("<h2>"+ primeiroValor + " / " + segundoValor+" = "+resultado+ "</h2>")
}

if (operacao == 4){
    var resultado = primeiroValor*segundoValor
    document.write("<h2>"+ primeiroValor + " X " + segundoValor+" = "+resultado+ "</h2>")
}else {
    document.write("<h2>opção invalida</h2>")
}


