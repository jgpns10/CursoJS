
const nome = 'João Gabriel';
const sobrenome = 'Nogueira';
const idade = 19;
const peso = 65;
const altura = 1.73;
let resultadoImc = peso / (altura * altura)
let anoNascimento = 2025 - idade

console.log(`${nome} ${sobrenome} tem ${idade}, pesa ${peso} kg`)
console.log(`tem ${altura} de altura e seu IMC é de ${resultadoImc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)