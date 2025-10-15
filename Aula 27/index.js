// (condicao) ? 'valor para verdadeiro' : 'valor para falso';
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";


const corUsuario = null;
const corPadrao = corUsuario || "Preto";

console.log(nivelUsuario, corPadrao);

// Mesma coisa que:
// if (pontuacaoUsuario >= 1000) {
//  console.log("Usuário VIP");
// } else {
//  console.log("Usuário normal");
// }