/*4 - Faça um programa que pergunte em que turno você estuda.
Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!",
"Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
Nome; Pablo Isaac Sponchiado
*/
var teclado = require("prompt-sync")();
var M = ("M");
var m = ("m");
var V = ("V");
var v = ("v");
var N = ("N");
var n = ("n");
console.log("=================================================================");
console.log("Diga qual turno voc\u00EA esta matriculado com os seguintes requisitos");
console.log("\nTurno matutino = M");
console.log("\nTurno vespertino = V");
console.log("\nTurno noturno = N");
console.log("=================================================================");
var turno = teclado("\nQual turno voc\u00EA estuda?  ");
if (turno == M || turno == m) {
    console.log("Bom dia!");
}
else if (turno == V || turno == v) {
    console.log("Boa Tarde!");
}
else if (turno == N || turno == n) {
    console.log("Boa Noite!");
}
else {
    console.log("Valor Inv\u00E1lido!");
}
