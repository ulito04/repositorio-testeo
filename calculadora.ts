import * as rls from "readline-sync"

let i : number, linea : string;
let numero1: Number = rls.questionInt("ingrese numero: ");
let numero2: Number = rls.questionInt("ingrese numero: ");
let opcionMenu: number = rls.questionInt("ingrese 1 para sumar, 2 para restar, cualqeuir otra tecla para salir");

let resultado = calcularResultado (numero1, numero2, opcionMenu);
dibujarGuionesN (50);
console.log("el resultado es: ", resultado);
dibujarGuionesN (50);

function calcularResultado (numero1:Number, numero2:Number, opcionMenu:Number): Number { 
let resultado: Number = 0;
if (opcionMenu === 1){
    resultado = numero1 + numero2;
}else if (opcionMenu === 2) {
    resultado = numero1 - numero2;
}
return resultado;
}

calcularResultado( numero1,numero2,opcionMenu);
function dibujarGuionesN (n: number){
    let i: number;
    let linea : string = "";
    for (i = 0; i<= numeroDeGuiones; i++) {
                linea = linea + "-";
    }
  
}     
    

