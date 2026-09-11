// Map
// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor * 2);


const pessoas = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 62 },
    { nome: 'Junior', idade: 55 },
    { nome: 'Eduarda', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const nomes = pessoas.map((obj) => obj.nome);
const idades = pessoas.map((obj) => ({ idade: obj.idade }));

const comIds = pessoas.map((obj, index) => {
    const newObj = { ...obj};
    newObj.id = index;
    return newObj;
});

console.log(pessoas);
console.log(comIds);