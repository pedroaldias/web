const setaEsquerda = 37;
const setaCima = 38;
const setaDireita = 39;
const setaBaixo = 40;
const espaco = 32;

function Teclado (elemento){
    this.elemento = elemento;
    this.pressionadas = [];
    this.disparadas = [];
    this.funcoesDisparo = [];
    const teclado = this;

    elemento.addEventListener('keydown', function(evento){
        let tecla = evento.keyCode;

        teclado.pressionadas[tecla] = true;

        if (teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla]){
            teclado.disparadas[tecla] = true;
            teclado.funcoesDisparo[tecla]();
        }
    });
    
    elemento.addEventListener('keyup', function(evento){
        let tecla = evento.keyCode;

        teclado.pressionadas[tecla] = false;
        teclado.disparadas[tecla] = false;
    });
}

Teclado.prototype = {
    pressionada: function(tecla){
        return this.pressionadas[tecla]
    },
    
    disparou: function(tecla, callback){
        this.funcoesDisparo[tecla] = callback;
    }
}