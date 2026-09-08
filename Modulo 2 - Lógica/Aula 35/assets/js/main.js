const elementos = [
    {tag: 'p', texto: 'Nautico'},
    {tag: 'div', texto: 'Santa'},
    {tag: 'section', texto: 'Salgueiro'},
    {tag: 'footer', texto: 'Sport'},
];


const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i<elementos.length; i++) {
   let {tag, texto} = elementos[i];
   let tagCriada = document.createElement(tag);
   tagCriada.innerText = texto;
   div.appendChild(tagCriada);
}

container.appendChild(div);