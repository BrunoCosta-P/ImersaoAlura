function adicionarFilme() {
    var capmpoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = capmpoFilmeFavorito.value
    if (filmeFavorito.endsWith('.jpg')) {
        listaFilmesNaTela(filmeFavorito)
    } else {
        alert ("Imagem invalida")
    }
    capmpoFilmeFavorito.value = ""
}

function listaFilmesNaTela (filme) {
    var listaFilme = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + ">"
    listaFilme.innerHTML = listaFilme.innerHTML + elementoFilme
}