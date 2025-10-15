// const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milissegundos
// const umDia = 60 * 60 * 24 * 1000; // 24 horas em milissegundos
// const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp Unix ou epoca Unix

// const data = new Date(2019, 3); // Mês começa do 0 (Janeiro = 0, Fevereiro = 1, Março = 2...)
/* 
const data = new Date('2019-04-20 20:20:59.100'); // Formato ISO 8601 (Recomendado)
console.log('Dia', data.getDate()); 
console.log('Mês', data.getMonth() + 1); // Mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milissegundos', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now()); // Quantidade de milissegundos desde 01/01/1970
*/

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda (data.getDate());
    const mes = zeroAEsquerda (data.getMonth() + 1);
    const ano = zeroAEsquerda (data.getFullYear());
    const hora = zeroAEsquerda (data.getHours());
    const minutos = zeroAEsquerda (data.getMinutes());
    const segundos = zeroAEsquerda (data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);