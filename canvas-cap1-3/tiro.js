function Tiro(context){
    this.context = context;
    this.x = 0;
    this.y = 0;
    this.velocidadeX = 0;
    this.velocidadeY = 0;

    this.cor = 'black';
    this.raio = 10;
}

Tiro.prototype = {
    atualizar: function(){   
        this.x += this.velocidadeX;
        this.y += this.velocidadeY
    },

    desenhar: function(){
        const ctx = this.context;
        ctx.save();
        ctx.fillStyle = this.cor;
        ctx.beginPath();
        ctx.arc(
            this.x,
            this.y,
            this.raio,
            0,
            2 * Math.PI
        );
        ctx.fill();
        ctx.restore()
    }
}