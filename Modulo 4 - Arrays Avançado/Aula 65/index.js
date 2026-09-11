// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos


// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados)

/*
const numerosFiltrados = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10
});
*/

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com A
const pessoas = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 62 },
    { nome: 'Junior', idade: 55 },
    { nome: 'Eduarda', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const pessoaComNomeGrande = pessoas.filter(valor => valor.nome.length >= 7)

const idadePessoas = pessoas.filter(valor => valor.idade >= 40)

const letraA = pessoas.filter(valor => {
    return valor.nome.toLowerCase().endsWith('a');
});