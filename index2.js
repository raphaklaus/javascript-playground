function geraNumeroAleatorio(){
  return Math.floor(Math.random() * 10 + 1);
}

function verificaAcerto(numeroAleatorio, numero){
  return (numeroAleatorio === numero);
}

var numeroAleatorio = geraNumeroAleatorio();
var numero = 0;
var pontuacao = 100;
var ganhou = false;

while(pontuacao > 0 && ganhou === false){
  numero = geraNumeroAleatorio();

  if (verificaAcerto(numeroAleatorio, numero)) {
    console.log('Voce acertou, sua pontuação é ', pontuacao);
    ganhou = true;    
  } else{
    console.log('Voce errou, tente novamente');
    pontuacao = pontuacao - 10;
  }
}