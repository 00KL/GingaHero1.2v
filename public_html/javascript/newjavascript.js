/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function tecla() {
	var cor, tecla, caixa;
 
	switch (event.keyCode ) {
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
			tecla = "6";
                        document.getElementById("som5").play();
			break
	}	

	caixa = document.getElementById(tecla);
	caixa.style.backgroundColor = "black";
	setTimeout(function () {caixa.style.backgroundColor = cor;},100);
}

document.body.onkeypress = tecla;  
