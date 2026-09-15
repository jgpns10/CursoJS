// Construtora -> Molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'Original' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// instância
const pessoa1 = new Pessoa('João', 'G.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'E.') // <- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);