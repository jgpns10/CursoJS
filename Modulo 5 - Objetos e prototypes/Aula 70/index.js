/*
const pessoa = {
    nome: 'João',
    sobrenome: 'Gabriel'
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
*/

/*
const pessoa1 = new Object();
pessoa1.nome = 'João';
pessoa1.sobrenome = 'Gabriel';

console.log(pessoa1.nome);
*/

/*
const pessoa1 = new Object();
pessoa1.nome = 'João';
pessoa1.sobrenome = 'Gabriel';

delete pessoa1.nome;
console.log(pessoa1);
*/

/*
const pessoa1 = new Object();
pessoa1.nome = 'João';
pessoa1.sobrenome = 'Gabriel';
pessoa1.idade = 20;
pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`)
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

for (let chave in pessoa1) {
    console.log(chave);
}
*/

function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// "New" cria um obj vazio {} <- "this" é atrelado ao objeto
const p1 = new Pessoa('João', 'Gabriel');
const p2 = new Pessoa('Maria', 'Eduarda');