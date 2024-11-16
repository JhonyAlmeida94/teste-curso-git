var Leonardo = window.document.getElementById("cardleonardo")
var Samantha = window.document.getElementById("cardsamantha")
var Bruna = window.document.getElementById("cardbruna")
var SetaEsquerda = window.document.getElementById("setaesquerda")
var SetaDireita = window.document.getElementById("setadireita")

function rolarparadireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex"
}

function rolarparaesquerda () {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"
}