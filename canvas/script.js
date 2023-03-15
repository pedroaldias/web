var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

//context.fillStyle = 'red'; // cor do preenchimento do objeto
//context.strokeStyle = 'blue'; //cor da linha do objeto
//context.lineWidth = 5 //espessura da linha do objeto (px)
//context.strokeRect(50, 50, 100, 100); //cria um contorno de retângulo nas coordenadas (x, y, width, height)

//context.beginPath(); //apaga desenhos anteriores
//context.moveTo(75, 250);
//context.lineTo(150, 50);
//context.lineTo(225, 250);
//context.lineTo(50, 120);
//context.lineTo(250, 120);
//context.lineTo(75, 250);
//context.lineWidth = 2;  
//context.strokeStyle = 'blue';
//context.stroke(); // traça as linhas

context.fillStyle = 'blue';
context.lineWidth = 2;
context.arc(
    50,
    50,
    40,
    90*Math.PI/180,
    270*Math.PI/180,
    false
);
