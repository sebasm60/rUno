'use strict';

function arbolito() {

    let content = document.getElementById('arbolito');
    let showArbol = "";
    let controlador = 6;
    let controladorDos = -13;
    let controladorTres = -1;



    content.innerHTML += `<i class="material-icons" style="font-size:60px;color:blue; margin-left: 50px;">start</i>`;

    for (let a = 2; a >= 0; a--) {
        for (let i = 6; i >= 1; i--) {
            content.innerHTML += "<br>";
            for (let j = controladorDos; j <= controlador; j++) {
                if (i >= j - controladorTres) {
                    content.innerHTML += "&nbsp";
                } else {
                    content.innerHTML += "0";
                }
            }
        }
        controlador += 6;
        controladorDos += 6;
        controladorTres += 4;
    }

    for (let a = 1; a >= 0; a--) {
        for (let i = 0; i >= 0; i--) {
            content.innerHTML += "<br>";
            for (let j = -13; j <= 6; j++) {
                if (i >= j) {
                    content.innerHTML += "&nbsp";
                } else {
                    content.innerHTML += "0";
                }
            }
        }
    }
}
arbolito();