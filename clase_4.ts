import * as rls from "readline-sync";
let llegadaColectivo: string;

console.log("esperando el colectivo");

llegadaColectivo = rls.question("llego el colectivo? (S/N): ");

while (llegadaColectivo=="N");{
    console.log("todavia no llego");
    llegadaColectivo = rls.question("llego el colectivo? (S/N)");
}
console.log("llego el colectivo")

