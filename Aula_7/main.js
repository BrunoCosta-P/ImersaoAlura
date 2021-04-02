var cartaPaulo = {nome:"Seiya de pegaso", atributos:{ataque: 80, defesa: 60, magia: 90}}
var cartaRafa = {nome:"Bulbasauro", atributos:{ataque: 70, defesa: 65, magia: 85}}
var cartaGui = {nome:"Lord Darth Vader", atributos:{ataque: 88, defesa: 62, magia: 90}}


var cartaMaquina
var cartaJogador
var cartas = [cartaGui, cartaPaulo, cartaRafa]

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random()*3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random()*3)
    while(numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random()*3)
    }
    cartaJogador=cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirOpcoes()
    
}

function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto=""
    for (var atributo in cartaJogador.atributos){
        opcoesTexto +="<input type='radio' name='atributo' value='"+ atributo +"'>" + atributo
    }
    opcoes.innerHTML=opcoesTexto
    
}

function obtemAtributoSelecionado(){
    var radiosAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radiosAtributo.length; i++){
        if (radiosAtributo[i].checked){
            return radiosAtributo[i].value
        }
    }
}

function jogar(){
   var atributoSelecionado = obtemAtributoSelecionado()
   console.log(atributoSelecionado)

   if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    alert('venceu')
   } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    alert('perdeu')
   } else {
    alert('empatou')
   }
   console.log(cartaMaquina)
}