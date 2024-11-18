var setaDireita = window.document.getElementById("SetaDireita")
var leo = window.document.getElementById("leo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("SetaEsquerda")

function RolarParaDireita() {
    Leo.style ="display:none"
    Bruna.style ="display:flex"
    SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex; margin-top:55px"
    
}
function RolarParaEsquerda() {
    Leo.style ="display:flex"
    Bruna.style ="display:none"
    SetaDireita.style ="display:flex"
    SetaEsquerda.style ="display:none; margin-top:55px"
}
    