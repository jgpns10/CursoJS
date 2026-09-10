// Função Constrtora -> objetos
// Função fabrica -> objetos
// factory -> criaPessoa
// Construtora ->     Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function () {
        
    };

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': Sou um método')
    };
}

const p1 = new Pessoa('João', 'Gabriel');
const p2 = new Pessoa('Maria', "Eduarda");
p2.metodo();

console.log(p2.nome)