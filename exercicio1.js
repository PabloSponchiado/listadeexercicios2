/*1 - Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é equilátero,
isósceles ou escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.
Nome:Pablo Isaac Sponchiado da Silva
*/
var teclado = require('prompt-sync')();
console.log("\nDigite os valores dos ângulos do triângulo: ");
var anguloUm = parseInt(teclado("Digite o primeiro ângulo: "));
var anguloDois = parseInt(teclado("Digite o segundo ângulo: "));
var anguloTres = parseInt(teclado("Digite o terceiro ângulo: "));
var somaAngulos = anguloUm + anguloDois + anguloTres;
if (somaAngulos == 180) {
    if (anguloUm == anguloDois && anguloUm == anguloTres && anguloDois == anguloTres) {
        console.log("Triângulo Equilátero");
    }
    else if (anguloUm == anguloDois && anguloUm == anguloTres && anguloDois == anguloTres) {
        console.log("Triângulo Isósceles");
    }
    else {
        console.log("Triângulo Escaleno");
    }
}
else
    console.log("Os ângulos informados não formam um triângulo.");
