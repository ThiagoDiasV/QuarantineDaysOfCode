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

function avaliaJogada(jogadaUsuario, jogadaComputador) {
  let vencedor;
  switch (jogadaUsuario + jogadaComputador) {
    case 'PedraTesoura':
    case 'PapelPedra':
    case 'TesouraPapel':
      jogadorVence(jogadaUsuario, jogadaComputador);
      vencedor = 'Jogador';
      break;
    case 'PedraPapel':
    case 'PapelTesoura':
    case 'TesouraPedra':
      computadorVence(jogadaUsuario, jogadaComputador);
      vencedor = 'Computador';
      break;
    case 'PedraPedra':
    case 'PapelPapel':
    case 'TesouraTesoura':
      empate(jogadaUsuario, jogadaComputador);
      vencedor = 'Empate';
      break;
  }
  return vencedor;
}

function pintaBorda(vencedorJogada, jogadaUsuario) {
  let opcaoJogada;
  if (jogadaUsuario === 'Pedra') {
    opcaoJogada = pedraJogada;
  } else if (jogadaUsuario === 'Papel') {
    opcaoJogada = papelJogada;
  } else {
    opcaoJogada = tesouraJogada;
  }

  switch (vencedorJogada) {
    case 'Jogador':
      opcaoJogada.classList.add('borda-vitoria');
      setTimeout(() => {
        opcaoJogada.classList.remove('borda-vitoria');
      }, 500);
      break;
    case 'Computador':
      opcaoJogada.classList.add('borda-derrota');
      setTimeout(() => {
        opcaoJogada.classList.remove('borda-derrota');
      }, 500);
      break;
    case 'Empate':
      opcaoJogada.classList.add('borda-empate');
      setTimeout(() => {
        opcaoJogada.classList.remove('borda-empate');
      }, 500);
      break;
  }
}

function main() {
  pedraJogada.addEventListener('click', function () {
    let jogadaUsuario = 'Pedra';
    let jogadaComputador = computadorFazJogada();
    let vencedorJogada = avaliaJogada(jogadaUsuario, jogadaComputador);
    pintaBorda(vencedorJogada, jogadaUsuario);
  });

  papelJogada.addEventListener('click', function () {
    let jogadaUsuario = 'Papel';
    let jogadaComputador = computadorFazJogada();
    let vencedorJogada = avaliaJogada(jogadaUsuario, jogadaComputador);
    pintaBorda(vencedorJogada, jogadaUsuario);
  });

  tesouraJogada.addEventListener('click', function () {
    let jogadaUsuario = 'Tesoura';
    let jogadaComputador = computadorFazJogada();
    let vencedorJogada = avaliaJogada(jogadaUsuario, jogadaComputador);
    pintaBorda(vencedorJogada, jogadaUsuario);
  });
}

main();
