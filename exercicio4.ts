/*4 - Faça um programa que pergunte em que turno você estuda. 
Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!",
"Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
Nome; Pablo Isaac Sponchiado
*/

const teclado = require(`prompt-sync`)();

let M : string = (`M`)
let m : string = (`m`)
let V : string = (`V`)
let v : string = (`v`)
let N : string = (`N`)
let n : string = (`n`)

console.log(`=================================================================`);
console.log(`Diga qual turno você esta matriculado com os seguintes requisitos`)
console.log(`\nTurno matutino = M`)
console.log(`\nTurno vespertino = V`)
console.log(`\nTurno noturno = N`)
console.log(`=================================================================`)

let turno: string = teclado(`\nQual turno você estuda?  `);

if(turno == M || turno == m){
    console.log(`Bom dia!`)
}
else if (turno == V || turno == v){
    console.log(`Boa Tarde!`)
}
else if (turno == N || turno == n){
    console.log(`Boa Noite!`)
}
else{
    console.log(`Valor Inválido!`)
}