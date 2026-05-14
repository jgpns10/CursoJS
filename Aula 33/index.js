const pessoa = {
    nome: 'João',
    sobrenome: 'Gabriel',
    idade: 19,
    endereco: {
        rua: 'Rua Maria Amália',
        numero: '436'
    }
};

// Atribuição por desestruturação
const { nome, sobrenome, endereco: { rua, numero } } = pessoa;
console.log(nome, sobrenome, rua);