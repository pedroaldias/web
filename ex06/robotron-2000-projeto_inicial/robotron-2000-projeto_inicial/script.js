var robo = document.querySelector('.robo')

var robotronColors = [
    'http://127.0.0.1:5500/ex06/robotron-2000-projeto_inicial/robotron-2000-projeto_inicial/img/robotron.png',
    'http://127.0.0.1:5500/ex06/robotron-2000-projeto_inicial/robotron-2000-projeto_inicial/img/robotron-vermelho.png',
    'http://127.0.0.1:5500/ex06/robotron-2000-projeto_inicial/robotron-2000-projeto_inicial/img/robotron-rosa.png',
    'http://127.0.0.1:5500/ex06/robotron-2000-projeto_inicial/robotron-2000-projeto_inicial/img/robotron-preto.png',
    'http://127.0.0.1:5500/ex06/robotron-2000-projeto_inicial/robotron-2000-projeto_inicial/img/robotron-branco.png',
    'http://127.0.0.1:5500/ex06/robotron-2000-projeto_inicial/robotron-2000-projeto_inicial/img/robotron-amarelo.png'
];

getIndex = () => robotronColors.indexOf(robo.src);

colorLeft = () => {
    if(getIndex() != 0){
        robo.src = robotronColors[getIndex() - 1];
    } else {
        robo.src = robotronColors[5];
    }
}

colorRight = () => {
    if(getIndex() != 5){
        robo.src = robotronColors[getIndex() + 1];
    } else {
        robo.src = robotronColors[0];
    }
}



