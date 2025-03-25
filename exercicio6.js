/*6 – Faça um programa que pergunte qual tabuada deseja exibir, e mostre essa tabuada (tente
    usar laço de repetição)
    Aluno: Pedro Elias/
*/
var teclado = require("prompt-sync")();
var numero = (teclado('Qual tabuada você deseja exibir? (Digite um número)'));
if (numero && numero > 0) {
    console.log("Tabuada do ".concat(numero, ":"));
}
for (var i = 1; i <= 10; i++) {
    console.log("".concat(numero, " x ").concat(i, " = ").concat(numero * i));
}
