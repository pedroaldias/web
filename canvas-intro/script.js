// var canvas = document.getElementById("canvas");
// var context = canvas.getContext('2d');

//* INTRO *//

// context.strokeStyle = 'red';    
// context.strokeRect(50, 50, 100, 100)        
// context.fillRect(50, 50, 100, 100)

// context.beginPath();
// context.moveTo(75, 250);
// context.lineTo(150, 50);
// context.lineTo(225, 250);
// context.lineTo(50, 120);
// context.lineTo(250, 120);
// context.lineTo(75, 250);

// context.lineWidth = 2;
// context.strokeStyle = 'red';
// context.fillStyle = 'blue';  
// context.stroke();
// context.fill();

//* PATHS *//

// context.beginPath();
// context.arc(50, 50, 40, 90 * Math.PI / 180, 270 * Math.PI / 180);
// context.fillStyle = 'gray'
// context.fill();
// context.stroke();

// context.beginPath();
// context.arc(150, 50, 40, 90 * Math.PI / 180, 270 * Math.PI / 180, true);
// context.fill();
// context.stroke();

// context.beginPath();
// context.arc(250, 50, 40, 0, 2*Math.PI)
// context.fill()
// context.stroke()

//* IMAGENS *//

// var imagem = new Image();
// imagem.src = 'img/ovni.png';
// imagem.onload = () => {
//   var x = 20;
//   for(var i = 1; i <= 5; i++){
//     context.drawImage(imagem, x, 20, 64, 32);
//     x+=70
//   }
// }

// var imagem = new Image();
// imagem.src = 'img/explosao.png';
// imagem.onload = function() {
//   context.drawImage(
//     imagem,
//     80, 10, 60, 65,
//     20, 20, 60, 65
//   );
// }

//* SAVE AND RESTORE *//

// context.fillStyle = 'green';
// context.fillRect(50, 50, 25, 25);
// context.save();

// context.fillStyle = 'purple';
// context.fillRect(100, 50, 25, 25);

// context.restore();
// context.fillRect(150, 50, 25, 25);;

// var x = 20;
// var y = 100;
// var raio = 5;

//* REQUEST ANIMATION FRAME *//

// var anterior = new Date().getTime();
// requestAnimationFrame(mexerBola);

// function mexerBola() {
//   var agora  = new Date().getTime();
//   var decorrido = agora - anterior;

//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.beginPath();
//   context.arc(x, y, raio, 0, Math.PI*2);
//   context.fill();

//   var velocidade = 20;
//   x += velocidade * decorrido / 1000
//   anterior = agora;
//   requestAnimationFrame(mexerBola)
// }

//* OO *//

// class Carro {
//    constructor(cor, velocMaxima) {
//      this.cor = cor;
//      this.velocMaxima = velocMaxima;
//      this.velocAtual = 0;
//      this.acelerar = () => {
//        this.velocAtual += 10;
//      };
//    }
//  }

//  var meuCarro = new Carro('vermelho', 250);
//  var oponente = new Carro('azul', 300);
//  meuCarro.acelerar();
//  document.write(meuCarro.cor + ': ' + meuCarro.velocAtual);
//  document.write('<br>');
//  document.write(oponente.cor + ': ' + oponente.velocAtual);


// var meuCarro = {
//   cor: 'azul',
//   velocidade: 0,
//   acelerar: function(){
//     this.velocidade += 10;
//   }
// }
// meuCarro.acelerar()
// document.write(meuCarro.cor + ': ' + meuCarro.velocidade);

// function Carro(cor, velocMaxima){
//   this.cor = cor;
//   this.velocMaxima = velocMaxima;
//   this.velocAtual = 0;
// }

// Carro.prototype = {
//   acelerar: () => {
//       this.velocAtual += 10;
//   }
// }

// var carro = new Carro('preto', 250);
// carro.acelerar();
// document.write(carro.cor + ': ' + carro.velocAtual)