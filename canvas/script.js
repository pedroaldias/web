var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

//context.fillStyle = 'red'; // cor do preenchimento do objeto
//context.strokeStyle = 'blue'; //cor da linha do objeto
//context.lineWidth = 5 //espessura da linha do objeto (px)
//context.strokeRect(50, 50, 100, 100); //cria um contorno de retângulo nas coordenadas e propriedades (x, y, width, height)

//context.beginPath(); //começa um path, apaga desenhos anteriores
//context.moveTo(75, 250);
//context.lineTo(150, 50);
//context.lineTo(225, 250);
//context.lineTo(50, 120);
//context.lineTo(250, 120);
//context.lineTo(75, 250);
//context.lineWidth = 2;    
//context.strokeStyle = 'blue';
//context.stroke(); // traça as linhas

context.fillStyle = 'gray';
context.strokeStyle = 'black';
context.lineWidth = 2;

context.beginPath();    
context.arc(
    50,
    50,
    40,
    90*Math.PI/180,
    270*Math.PI/180,
    false
);
context.fill();
context.stroke();

context.beginPath();
context.arc(
    150,
    50,
    40,
    0,
    2*Math.PI,  
);
context.fill();
context.stroke();