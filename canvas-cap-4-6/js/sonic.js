let sonicDireita = 1;
let sonicEsquerda = 2;

function Sonic(ctx, teclado, img){
    this.ctx = ctx;
    this.teclado = teclado;
    this.x = 0;
    this.y = 0;

    this.sheet = new Spritesheet(ctx, img, 3, 8);
    this.sheet.intervalo = 60;

    this.andando = false;
    this.direcao = sonicDireita;
    this.velocidade = 10;
}

Sonic.prototype = {
    atualizar: function(){
        if (this.teclado.pressionada(setaDireita)){
            if(!this.andando || this.direcao != sonicDireita){
                this.sheet.linha = 1;
                this.sheet.coluna = 0;
            }
            this.andando = true;
            this.direcao = sonicDireita;
            this.sheet.proximoQuadro();
            this.x += this.velocidade;
        }
        else if (this.teclado.pressionada(setaEsquerda)){
            if(!this.andando || this.direcao != sonicEsquerda){
                this.sheet.linha = 2;
                this.sheet.coluna = 0;
            }
            this.andando = true;
            this.direcao = sonicEsquerda;
            this.sheet.proximoQuadro();
            this.x -= this.velocidade;
        }
        else {
            if(this.direcao == sonicDireita){
                this.sheet.coluna = 0;
            }
            else if (this.direcao == sonicEsquerda){
                this.sheet.coluna = 1;
            }
            this.sheet.linha = 0;
            this.andando = false;
        }
    },
    desenhar: function(){
        this.sheet.desenhar(this.x, this.y)
    }
}