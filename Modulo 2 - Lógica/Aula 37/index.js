// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o indice ou chave (objetos, array ou strings)
// For of - Retorna o valor em si (iteráveis, array ou strings)


const nome = ['João', 'Duda']

// for (let i = 0; i < nome.length; i++) {
//  console.log(nome[i])
// }

// for (let i in nome) {
//    console.log(nome[i]);
// }

for (let valor of nome) {
    console.log(valor);
}

nome.forEach(function (valor, indice) {
    console.log(valor, indice)
});