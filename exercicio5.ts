/*4 – O IMC (índice de massa corpórea) indica o grau de obesidade de uma pessoa.
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

let teclado = require(`prompt-sync`)();

console.log(`=======================================`);
console.log(`==CALCULO DE INDICE DE MASSA CORPÓREA==`);
console.log(`=======================================`);

let peso: number = teclado(`\nQual seu peso: `);
let altura: number = teclado(`\nQual sua altura em centimetros: `);

let imc: number = peso / ((altura * 2)/100) ;

console.log(imc);

console.log(`${imc}`)
if (imc < 18.5) {
    console.log(`Baixopeso`)
}
else if (imc > 18.5 && 24.99) {
    console.log(`Normal`)
}
else if (imc > 25 && 29.99) {
    console.log(`Sobrepeso`)
}
else if (imc > 30) {
    console.log(`obesidade`)
}
