function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2))
console.log(triplica(50000))
console.log(quadruplica(7893186391));