const pedraJogada = document.getElementById('pedra');
const papelJogada = document.getElementById('papel');
const tesouraJogada = document.getElementById('tesoura');
const pontuacaoJogador = document.getElementById('pontuacao-jogador');
const pontuacaoComputador = document.getElementById('pontuacao-computador');
const mensagemResultado = document.getElementById('mensagem-resultado');

let pontosJogador = parseInt(pontuacaoJogador.innerText);
let pontosComputador = parseInt(pontuacaoComputador.innerText);

function computadorFazJogada() {
  const possibilidades = ['Pedra', 'Papel', 'Tesoura'];
  let posicaoJogadaComputador = Math.floor(
    Math.random() * possibilidades.length
  );
  let jogadaComputador = possibilidades[posicaoJogadaComputador];
  return jogadaComputador;
}

function jogadorVence(jogadaUsuario, jogadaComputador) {
  pontosJogador += 1;
  pontuacaoJogador.innerText = pontosJogador;
  let resultadoMensagem = `${jogadaUsuario} ganha de ${jogadaComputador}! Você venceu!`;
  mensagemResultado.innerText = resultadoMensagem;
}

function computadorVence(jogadaUsuario, jogadaComputador) {
  pontosComputador += 1;
  pontuacaoComputador.innerText = pontosComputador;
  let resultadoMensagem = `${jogadaComputador} ganha de ${jogadaUsuario}! O computador venceu!`;
  mensagemResultado.innerText = resultadoMensagem;
}

function empate(jogadaUsuario, jogadaComputador) {
  let resultadoMensagem = `${jogadaUsuario} é igual a ${jogadaComputador}. Deu empate!`;
  mensagemResultado.innerText = resultadoMensagem;
}
