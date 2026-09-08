const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

// let nome = 'Luiz'; // criando
// var nome2 = 'Luiz'; // criando


// if (verdadeira) {
   // let nome = 'Otávio'; // criando no bloco
   // var nome = 'Rogério'; // redeclarando 
    // console.log(nome, nome2);

   // if (verdadeira) {
     //   var nome2 = 'Otávio' // redeclarado
       // let nome = 'Outra coisa';
   // }
//}

// console.log(nome, nome2);

var sobrenome = 'Miranda';

function falaOi() {
    console.log(sobrenome);
}

falaOi();