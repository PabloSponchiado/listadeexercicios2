/*5 – O IMC (índice de massa corpórea) indica o grau de obesidade de uma pessoa.
Este índice é obtido pelo peso (em Kg) dividido pelo quadrado da altura (em metros).
A tabela a seguir apresenta as faixas deste índice:
IMC
Avaliação:
Menor que 18,5:Baixopeso
De 18,5 a 24,99:Normal
De 25 a 29,99: Sobrepeso
Maior que 30: Obesidade
Nome:Pablo Isaac Sponchiado da Silva
*/
var teclado = require("prompt-sync")();
console.log("=======================================");
console.log("==CALCULO DE INDICE DE MASSA CORP\u00D3REA==");
console.log("=======================================");
var peso = teclado("\nQual seu peso: ");
var altura = teclado("\nQual sua altura em centimetros: ");
var imc = peso / ((altura * 2) / 100);
console.log(imc);
console.log("".concat(imc));
if (imc < 18.5) {
    console.log("Baixopeso");
}
else if (imc > 18.5 && 24.99) {
    console.log("Normal");
}
else if (imc > 25 && 29.99) {
    console.log("Sobrepeso");
}
else if (imc > 30) {
    console.log("obesidade");
}
