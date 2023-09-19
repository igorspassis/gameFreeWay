//variáveis das imagens 
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//variáveis dos sons do jogo
let somTrilha;
let somColisao;
let somPonto;

//função de carregamento da imgs e sons
function preload() {
  imagemDaEstrada = loadImage('imagens/estrada.png');
  imagemDoAtor = loadImage('imagens/ator-1.png');
  imagemCarro1 = loadImage('imagens/carro-1.png');
  imagemCarro2 = loadImage('imagens/carro-2.png');
  imagemCarro3 = loadImage('imagens/carro-3.png');
  
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro1, imagemCarro3]
  
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}