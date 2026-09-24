// Não podemos criar variáveis com palavras reservadas
// Não podem conter espaços ou traços
// utilizamos camelCase
// Não podemos redeclarar const

const primeiroNumero = 2;
const segundoNumero = 5;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

// typeof para verificar o tipo do valor
console.log(typeof primeiroNumero);