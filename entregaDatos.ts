
import * as rls from 'readline-sync';

let arreglo: number[] = [4,7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16] ;

let maximo = arreglo[0];
for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > maximo) {
        maximo = arreglo[i];
    }
}

let paridad: string;
if (maximo % 2 === 0) {
    paridad = 'par';
} else {
    paridad = 'impar';
}

console.log('El número más grande en el arreglo es:', maximo);
console.log(`El número más grande (${maximo}) es ${paridad}.`);
