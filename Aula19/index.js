/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por teferência
*/

/* 
let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);                         <==== Array Mutável
console.log(a, b);

b.pop();
console.log(a, b);

a.push('João');
console.log(a, c);
*/

/* 
const a = {
    nome: 'Luiz',
    sobrenome: 'Felipe'
};
const b = {...a};

b.nome = 'João';
console.log(a);
console.log(b);
*/
