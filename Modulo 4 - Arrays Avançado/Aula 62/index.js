// Valor por referência

/*
const nomes = ['João', 'Gabriel', 'Duda'];
const novo = [...nomes];

novo.pop();
console.log(nomes);
console.log(novo);
*/

/*
const nomes = ['João', 'Gabriel', 'Duda'];
console.log(nomes.length)
*/

/*
const nomes = ['João', 'Gabriel', 'Duda']
const removidoComeco = nomes.shift();
const removidoFim = nomes.pop();
console.log(nomes, removidoComeco, removidoFim);
*/

/*
const nomes = ['João', 'Gabriel', 'Duda'];
const addComeco = nomes.unshift('Pinto')
const addFim = nomes.push('Eduarda');
console.log(nomes, addComeco, addFim);
*/

/*
const nomes = ['João', 'Gabriel', 'Duda', 'Juliana', 'Mariana']
const novo = nomes.slice(0, 2);
console.log(novo)
*/

/*
const nome = 'João Gabriel Pinto';
const nomes = nome.split(' ');
console.log(nomes)
*/

const nomes = [ 'João', 'Gabriel', 'Pinto' ];
const nome = nomes.join(' ')
console.log(nome);