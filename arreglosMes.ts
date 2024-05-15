//Modifique el código del Ejercicio Identificación//


import * as rls from "readline-sync";
let arregloMes : string [] = ["enero", "febrero", "marzo", "abril","mayo","junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let nroMes : number = rls.questionInt ("indique el numero de mes que le interesa: ");
let indice: number = nroMes -1;
console.log("el mes ", arregloMes[indice])
