let listaNumeroSorteados =[];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
console.log(numeroSecreto);
exibirMensagemInicial()
// document.getElementById('reiniciar').setAttribute('disabled', true);

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function verificarChute() {
  let chute = document.querySelector('input').value;
  let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
  let mensagemTentativa = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}!`

  
  if (chute == numeroSecreto){
   // document.getElementById('reiniciar').setAttribute('disabled', false);
   exibirTextoNaTela('h1', 'Acertou!!');
   exibirTextoNaTela('p', mensagemTentativa);
   } else {
     if (chute > numeroSecreto) {
       exibirTextoNaTela('p', 'O número secreto é menor.');
       } else {
         exibirTextoNaTela('p', 'O número secreto é maior.');
         
       }
   }
   tentativas++
   limparCampos()
   
}

function gerarNumeroAleatorio() {
let numeroSorteado = parseInt(Math.random() * 1000 + 1);
if (listaNumeroSorteados.includes(numeroSorteado)){
  return gerarNumeroAleatorio()
} else{
  listaNumeroSorteados.push(numeroSorteado);
  return numeroSorteado
  console.log(listaNumeroSorteados);
}
}
function limparCampos(){
  document.querySelector('input').value = ''
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  console.log(numeroSecreto)
  tentativas = 1;
  limparCampos()
  exibirMensagemInicial()

}

function exibirMensagemInicial(){
exibirTextoNaTela('h1','Jogo do número secreto!');
exibirTextoNaTela('p','Escolha um numero de 1 a 1000!');
}