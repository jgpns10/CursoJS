// function criaPessoa (nome, sobrenome, idade) {
//    return{nome,sobrenome,idade};
// }

// const pessoa1 = criaPessoa('João', 'Nogueira', 19)
// const pessoa2 = criaPessoa('Duda', 'Albuquerque', 17)
// const pessoa3 = criaPessoa('Juliana', 'Pinto', 48)
// const pessoa4 = criaPessoa('Romildo', 'Junior', 50)
// const pessoa5 = criaPessoa('Pedro', 'Azevedo', 29)

// console.log(pessoa1.nome, pessoa2.sobrenome);

const pessoa1 = {
    nome: 'João',
    sobrenome: 'Pinto',
    idade: 19,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
