// Reduce
// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) {
        acumulador += valor
    }                      
    return acumulador;                                                      // Reduce
}, 0);


const pares = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;                                                      // Filter       ---> Não usar reduce pra fazer oq o filter e map faria facilmente

}, []);

const dobro = numeros.reduce(function (acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;                                 
}, []);


const pessoas = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 62 },
    { nome: 'Junior', idade: 55 },
    { nome: 'Eduarda', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);