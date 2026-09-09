function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Joao')
const funcao2 = retornaFuncao('Duda');
console.log(funcao2)
console.log(funcao)

console.log(funcao(), funcao2())