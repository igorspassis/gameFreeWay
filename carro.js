//variáveis dos Carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 95, 150, 210, 270, 318];
let velocidadeCarros = [2, 3.1, 4, 6, 3.3, 5.5];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i] ,xCarros[i] ,yCarros[i] , comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
    xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < - 50;
}