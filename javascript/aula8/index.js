const nome = 'Luiz Guilherme';
const sobrenome = 'Caetano';
const altura = 1.77;

let idade = 51;
let peso = 71;
let imc;
let anoNascimento;

imc = peso / (altura*altura);
anoNascimento = 2026 - idade;

// template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura}m de altura e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
