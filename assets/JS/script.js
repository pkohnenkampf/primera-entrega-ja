document.querySelector('#sumar').addEventListener("click",sumaruno);
document.querySelector('#restar').addEventListener("click",restaruno);
let contador=0;
const valorUnitario=35000

function sumaruno(){
    contador=contador+1;
    document.querySelector("#resumenContador").innerHTML=contador;
    multiplicadorv1=valorUnitario*contador;
    document.querySelector("#pUnitario").innerHTML=multiplicadorv1;
}

function restaruno(){
    contador=contador-1;
    multiplicadorv1=valorUnitario*contador;
    if (contador <0){   
        document.querySelector("#resumenContador").innerHTML=contador;
        document.querySelector("#pUnitario").innerHTML="Valor negativo";
    }else {
    document.querySelector("#resumenContador").innerHTML=contador;
    document.querySelector("#pUnitario").innerHTML=multiplicadorv1;
    }
}

