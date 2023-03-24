const direcaoEsquerda = 1;
const direcaoDireita = 2;
const direcaoCima = -1;
const direcaoBaixo = -2;

function Heroi(context, teclado, animacao){
    this.context = context;
    this.teclado = teclado;
    this.animacao = animacao;
    this.x = 0;
    this.y = 0;
    this.direcao = direcaoDireita;
}

Heroi.prototype = {
    atualizar: function(){
        if (this.teclado.pressionada(setaEsquerda) && this.x > 0){
            this.x -= 10;
            this.direcao = direcaoEsquerda;
        }
        else if (this.teclado.pressionada(setaDireita) && this.x < this.context.canvas.width - 20){
            this.x += 10;
            this.direcao = direcaoDireita;
        }
        else if (this.teclado.pressionada(setaCima) && this.y > 0){
            this.y -= 10;
            this.direcao = direcaoCima;
        }
        else if (this.teclado.pressionada(setaBaixo) && this.y < this.context.canvas.height - 50){
            this.y += 10;
            this.direcao = direcaoBaixo;
        }
    },

    desenhar: function(){
        this.context.fillRect(this.x, this.y, 20, 50);
    },

    atirar: function(){
        var tiro = new Tiro(this.context);
        tiro.x = this.x + 10;
        tiro.y = this.y + 10;
        tiro.raio = 2;
        tiro.cor = 'red';

        if (this.direcao == direcaoEsquerda){
            tiro.velocidadeX = -20;
        } 
        else if (this.direcao == direcaoDireita){
            tiro.velocidadeX = 20;  
        }
        else if (this.direcao == direcaoCima){
            tiro.velocidadeY = -20
        }
        else if (this.direcao == direcaoBaixo){
            tiro.velocidadeY = 20
        }
        this.animacao.novoSprite(tiro);
    }
}