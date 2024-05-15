import * as rls from "readline-sync";

let base: number = rls.questionInt("Ingrese la base: ");
let exponente: number = rls.questionInt("Ingrese el exponente: ");
let resultado: number = calcularPotencia(base, exponente);
console.log ("el resultado es:", resultado)

function calcularPotencia(base: number, exponente: number): number {
    if (exponente < 0) {
        ;
    }

    let resultado = 1;

    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }

    return resultado;
}




