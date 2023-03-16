var robo = document.querySelector('.robo');

var robotronColors = [
    'file:///C:/Users/2021327623.IFAL-MACEIO/web/ex06/robotron-2000-projeto_inicial/robotron-2000-projeto_inicial/img/robotron.png',
    'file:///C:/Users/2021327623.IFAL-MACEIO/web/ex06/robotron-2000-projeto_inicial/robotron-2000-projeto_inicial/img/robotron-vermelho.png',
    'file:///C:/Users/2021327623.IFAL-MACEIO/web/ex06/robotron-2000-projeto_inicial/robotron-2000-projeto_inicial/img/robotron-rosa.png',
    'file:///C:/Users/2021327623.IFAL-MACEIO/web/ex06/robotron-2000-projeto_inicial/robotron-2000-projeto_inicial/img/robotron-preto.png',
    'file:///C:/Users/2021327623.IFAL-MACEIO/web/ex06/robotron-2000-projeto_inicial/robotron-2000-projeto_inicial/img/robotron-branco.png',
    'file:///C:/Users/2021327623.IFAL-MACEIO/web/ex06/robotron-2000-projeto_inicial/robotron-2000-projeto_inicial/img/robotron-amarelo.png'
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



