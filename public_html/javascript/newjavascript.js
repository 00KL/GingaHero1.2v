/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var pontos = 1;
var n = 1;
window.onload = function () {
    document.getElementById('10').innerHTML = '<h1 style="margin-left: -6%; margin-top: -31%; color: white">' + 'A' + '</h1>';
    document.getElementById('9').innerHTML = '<h1 style="margin-left: -6%; margin-top: -31%; color: white">' + (pontos - 1) + '</h1>';
}

function letra() {
    
    mudaN();
    switch (n) {
        case 1:
            document.getElementById('10').innerHTML = '<h1 style="margin-left: -6%; margin-top: -31%; color: white">' + 'A' + '</h1>';

            break
        case 2:
            document.getElementById('10').innerHTML = '<h1 style="margin-left: -6%; margin-top: -31%; color: white">' + 'S' + '</h1>';

            break
        case 3:
            document.getElementById('10').innerHTML = '<h1 style="margin-left: -6%; margin-top: -31%; color: white">' + 'D' + '</h1>';

            break
        case 4:
            document.getElementById('10').innerHTML = '<h1 style="margin-left: -6%; margin-top: -31%; color: white">' + 'F' + '</h1>';

            break
        case 5:
            document.getElementById('10').innerHTML = '<h1 style="margin-left: -6%; margin-top: -31%; color: white">' + 'G' + '</h1>';

            break

            n = Math.floor(Math.random() * 5 + 1);
    }
}


function pontuacao() {
    if (pontos > 9) {
        document.getElementById('9').innerHTML = '<h1 style="margin-left: -28%; margin-top: -31%; color: white">' + (pontos++) + '</h1>';

    } else if (pontos > 99) {
        document.getElementById('9').innerHTML = '<h1 style="margin-left: -50%; margin-top: -31%; color: white">' + (pontos++) + '</h1>';
    } else {
        document.getElementById('9').innerHTML = '<h1 style="margin-left: -6%; margin-top: -31%; color: white">' + (pontos++) + '</h1>';

    }
}

function tecla() {

    var cor, tecla, caixa;
    switch (event.keyCode) {
        case 97:
            cor = "green";
            tecla = "1";
            document.getElementById("som1").play();
            break
        case 115:
            cor = "red";
            tecla = "2";
            document.getElementById("som2").play();
            break
        case 100:
            cor = "yellow";
            tecla = "3";
            document.getElementById("som3").play();
            break
        case 102:
            cor = "blue";
            tecla = "4";
            document.getElementById("som4").play();
            break
        case 103:
            cor = "#FF6600";
            tecla = "5";
            document.getElementById("som5").play();
            break
    }
    if (tecla == n) {
        pontuacao();
    }
    
    letra();
    
    caixa = document.getElementById(tecla);
    caixa.style.backgroundColor = "black";
    setTimeout(function () {
        caixa.style.backgroundColor = cor;
    }, 100);

}

function mudaN() {
    n = Math.floor(Math.random() * 5 + 1);
}

document.body.onkeypress = tecla;