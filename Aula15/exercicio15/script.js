const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const baixo = document.getElementById('baixo');
const cima = document.getElementById('cima');
const decimal = document.getElementById('decimal');

let raiz = (numero ** 0.5)
let int = (Number.isInteger(numero));
let na = (Number.isNaN(numero));
let bai = (Math.floor(numero));
let cim = (Math.ceil(numero));
let deci = numero.toFixed(2);

numeroTitulo.innerHTML = numero;
texto.innerHTML = (`<p>Raiz quadrada: ${raiz}.</p>`);
inteiro.innerHTML = (`<p>${numero} é inteiro: ${int} </p>`);
nan.innerHTML = (`<p>É NaN: ${na}</p>`);
baixo.innerHTML = (`<p>Arredondado para baixo: ${bai}</p>`);
cima.innerHTML = (`<p>Arredondado para cima: ${cim}</p>`);
decimal.innerHTML = (`<p>Com duas casas decimais: ${deci}</p>`);