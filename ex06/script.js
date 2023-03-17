let robo = document.querySelector('.robo');

const robotronColors = [
    'img/robotron.png',
    'img/robotron-vermelho.png',
    'img/robotron-rosa.png',
    'img/robotron-preto.png',
    'img/robotron-branco.png',
    'img/robotron-amarelo.png'
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

increaseValue = (valueCounter) =>{
    if(valueCounter.value < 1000){
        valueCounter.value += 10;
    }
}

decreaseValue = (valueCounter) =>{
    if(valueCounter.value > 0){
        valueCounter.value -= 10;
    }
}

const increaseValueButtonArray = document.getElementsByClassName('controle-ajuste-aumentar')
const decreaseValueButtonArray = document.getElementsByClassName('controle-ajuste-diminuir')
const valueCounter = [
    document.querySelector('.controle-contador-0'),
    document.querySelector('.controle-contador-1'),
    document.querySelector('.controle-contador-2'),
    document.querySelector('.controle-contador-3'),
    document.querySelector('.controle-contador-4')
] 
const increaseArray = [
    increaseValueButtonArray[0].addEventListener('click', function(){
        increaseValue(parseInt(valueCounter[0]))
    }),
    increaseValueButtonArray[1].addEventListener('click', function(){
        increaseValue(valueCounter[1])
    }),
    increaseValueButtonArray[2].addEventListener('click', function(){
        increaseValue(valueCounter[2])
    }),
    increaseValueButtonArray[3].addEventListener('click', function(){
        increaseValue(valueCounter[3])
    }),
    increaseValueButtonArray[4].addEventListener('click', function(){
        increaseValue(valueCounter[4])
    }),
]
const decreaseArray = [
    decreaseValueButtonArray[0].addEventListener('click', function(){
        decreaseValue(valueCounter[0])
    }),
    decreaseValueButtonArray[1].addEventListener('click', function(){
        decreaseValue(valueCounter[1])
    }),
    decreaseValueButtonArray[2].addEventListener('click', function(){
        decreaseValue(valueCounter[2])
    }),
    decreaseValueButtonArray[3].addEventListener('click', function(){
        decreaseValue(valueCounter[3])
    }),
    decreaseValueButtonArray[4].addEventListener('click', function(){
        decreaseValue(valueCounter[4])
    }),

]
