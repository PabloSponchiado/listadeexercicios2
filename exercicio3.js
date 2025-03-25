/*3 -Faça um programa que receba 5 números e retorne o número maior e o número menor.
Nome:Pablo Isaac Sponchiado da Silva
*/
var teclado = require('prompt-sync')();
var n1 = parseInt(teclado("Digite o primeiro numero: "));
var n2 = parseInt(teclado("Digite o segundo  numero: "));
var n3 = parseInt(teclado("Digite o terceiro numero: "));
var n4 = parseInt(teclado("Digite o quarto numero: "));
var n5 = parseInt(teclado("Digite o quinto numero: "));
var maior = n1;
var menor = n1;
if (n2 > maior) {
    maior = n2;
}
else if (n2 < menor) {
    menor = n2;
}
if (n3 > maior) {
    maior = n3;
}
else if (n3 < menor) {
    menor = n3;
}
if (n4 > maior) {
    maior = n4;
}
else if (n4 < menor) {
    menor = n4;
}
if (n5 > maior) {
    maior = n5;
}
else if (n5 < menor) {
    menor = n5;
}
console.log("O maior n\u00FAmero \u00E9: ".concat(maior));
console.log("O menor n\u00FAmero \u00E9: ".concat(menor));
