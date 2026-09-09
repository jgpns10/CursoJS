/*
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento
    }

    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);
*/

/*
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c)
}
funcao(2, 10, 20);
*/

/*
function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);                    // Desestruturação de Obj
}
funcao({nome: 'João', sobrenome: 'Gabriel', idade: 20});
*/

/*
function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}

funcao(['João', 'Gabriel', 20])
*/

const conta = function conta(operador, acumulador, ...numeros) {      // ... = rest operator
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;

    }

    console.log(acumulador)
};
conta('+', 1, 20, 30, 40, 50);

// arguments não existem em arrow functions 

