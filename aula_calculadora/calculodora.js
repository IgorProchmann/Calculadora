var primeiro;
var segundo;
var sinal;

function getSete(){
    document.getElementById("visor").value += "7"
}
function getOito(){
    document.getElementById("visor").value += "8"
}
function getNove(){
    document.getElementById("visor").value += "9"
}
function getQuatro(){
    document.getElementById("visor").value += "4"
}
function getCinco(){
    document.getElementById("visor").value += "5"
}
function getSeis(){
    document.getElementById("visor").value += "6"
}
function getUm(){
    document.getElementById("visor").value += "1"
}
function getDois(){
    document.getElementById("visor").value += "2"
}
function getTres(){
    document.getElementById("visor").value += "3"
}
function getZero(){
    document.getElementById("visor").value += "0"
}
function getPonto(){
    document.getElementById('visor').value += "."
}
function atualizaVisor(){
    primeiro = document.getElementById('visor').value
    document.getElementById('visor').value = ''
}

function adicao(){
    atualizaVisor()
    sinal = '+'
}
function subtracao(){
    atualizaVisor()
    sinal = '-'
}
function divisao(){
    atualizaVisor()
    sinal = '/'
}
function multiplicacao(){
    atualizaVisor()
    sinal = '*'
}

function resultado(){
    segundo = document.getElementById('visor').value
    let result;
    if(sinal == '+'){
        result = parseInt(primeiro) + parseInt(segundo)
    }
    if(sinal == '-'){
        result = parseInt(primeiro) - parseInt(segundo)
    }
    if(sinal == '/'){
        result = parseInt(primeiro) / parseInt(segundo)
    }
    if(sinal == '*'){
        result = parseInt(primeiro) * parseInt(segundo)
    }
document.getElementById('visor').value = result
}