window.onload = () => {

    

    let total = localStorage.getItem('total');
    let mesesValorString = localStorage.getItem('mesesValor')
    let valorMercado = localStorage.getItem('valorMercado');
    let valorTransporte = localStorage.getItem('valorTransporte');
    let tabela = document.querySelector('.tabela-resultado')
    let mesesValor = JSON.parse(mesesValorString);
    console.log(Object.keys(mesesValor))

    let resultadoTotal = document.getElementById('resultado-total');
    let resultadoTotalValor = document.getElementById('resultado-total-valor');

    let resultadoMercado = document.getElementById('resultado-mercado');
    let resultadoMercadoValor = document.getElementById('resultado-mercado-valor');
    
    let resultadoTransporte = document.getElementById('resultado-transporte')
    let resultadoTransporteValor = document.getElementById('resultado-transporte-valor');
    
    resultadoTotal.innerHTML = `Valor total`;
    resultadoTotalValor.innerHTML = `R$ ` + parseFloat(total).toFixed(2);

    for(let mes in mesesValor){
        let novaLinha = tabela.insertRow(-1);
        let celulaMes = novaLinha.insertCell(0);
        let celulaValor = novaLinha.insertCell(1);
        let valor = mesesValor[mes];
        const mesNumero = parseInt(mes.substr(4));
        const nomeMes = new Date(2021, mesNumero - 1, 1).toLocaleString('pt-BR', { month: 'long' });
        const ano = mes.substr(0, 4);
        celulaMes.textContent = `Total no mês de ${charAt(nomeMes)} de ${ano}`;
        celulaValor.textContent = `R$` + parseFloat(valor).toFixed(2);
    }

    resultadoMercado.innerHTML = `Total de gastos com mercado`
    resultadoMercadoValor.innerHTML = `R$` + parseFloat(valorMercado).toFixed(2);

    resultadoTransporte.innerHTML = `Total de gastos com transporte`
    resultadoTransporteValor.innerHTML = `R$` + parseFloat(valorTransporte).toFixed(2);



    localStorage.removeItem('total');
    localStorage.removeItem('mesesValor');
    localStorage.removeItem('valorMercado');
    localStorage.removeItem('valorTransporte');
}