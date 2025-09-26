// Capturou o evento submit
const form = document.querySelector('#formulario');

//Adicionou o evento de Submit
form.addEventListener('submit', function (e) {
    e.preventDefault(); //Previniu o default, não deixou o formulario ser enviado
    const inputPeso = e.target.querySelector('#peso');      //Captura de dados do Input
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);       //Converteu pra number

    if (!peso) {
        setResultado('Peso inválido', false);       //em erro como NaN
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);       //Função para calculo do IMC
    const nivelImc = getNivelImc(imc);      // Função de nivel do IMC

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;  // Mensagem do IMC

    setResultado(msg, true);    //Resultado
});

function getNivelImc(imc) {     // Criei um array para armazenar os niveis
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    }
    
    if (imc >= 34.9) {
        return nivel[4];
    }
    
    if (imc >= 29.9) {
        return nivel[3];                // Condições para o calculo do IMC
    }
    
    if (imc >= 24.9) {
        return nivel[2];
    }
    
    if (imc >= 18.5) {
        return nivel[1];
    }
    
    if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;     // Função para o calculo
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');      // Função para criar um paragrafo
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');     // Função que seta o resultado
    resultado.innerHTML = '';

    
    const p = criaP();      // Criação do p

    if (isValid) {      // Verdadeira ou False
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg       // eSetar o InnerHTML com a mensagem
    resultado.appendChild(p)    // Adicionou no parágrafo
}