// defineProperty(define uma propriedade) - defineProperties(define várias propriedades)

/*
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar se for true, não altera em false
        configurable: true // configurável
    });
}

const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 10
delete p1.estoque;
*/


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar se for true, não altera em false
        configurable: true // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true 
        }
    })
}

const p1 = new Produto('Camisa', 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}
