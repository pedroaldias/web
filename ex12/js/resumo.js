window.onload = () => {
    let total = localStorage.getItem('total');
    let mesesAnosString = localStorage.getItem('mesesAnos');
    let mesesValorString = localStorage.getItem('mesesValor');
    let valorMercado = localStorage.getItem('valorMercado');
    let valorTransporte = localStorage.getItem('valorTransporte');

    let mesesValor = JSON.parse(mesesValorString);
    let mesesAnos = JSON.parse(mesesAnosString);
    let tabela = document.querySelector('.tabela-resultado');
    
    let resultadoTotal = document.getElementById('resultado-total');
    let resultadoTotalValor = document.getElementById('resultado-total-valor');

    let resultadoMercado = document.getElementById('resultado-mercado');
    let resultadoMercadoValor = document.getElementById('resultado-mercado-valor');

    let resultadoTransporte = document.getElementById('resultado-transporte')
    let resultadoTransporteValor = document.getElementById('resultado-transporte-valor');

    resultadoTotal.innerHTML = `Valor total`;
    resultadoTotalValor.innerHTML = `R$` + parseFloat(total).toFixed(2);

    resultadoMercado.innerHTML = `Total de gastos com mercado`
    resultadoMercadoValor.innerHTML = `R$` + parseFloat(valorMercado).toFixed(2);

    resultadoTransporte.innerHTML = `Total de gastos com transporte`
    resultadoTransporteValor.innerHTML = `R$` + parseFloat(valorTransporte).toFixed(2);


    let c = 0;
    let chavesContidas = [];

    for(chave in mesesValor){
        for (const mesAno of mesesAnos){
                if(!chavesContidas.includes(chave)){
                    let novaLinha = tabela.insertRow(-1);
                    let celulaMesAno = novaLinha.insertCell(0);
                    var celulaValor = novaLinha.insertCell(1);
                    let mesNome;
                    switch (mesesAnos[c][1]) {
                        case 1:
                            mesNome = ' Janeiro'
                            break;
                        case 2:
                            mesNome = ' Fevereiro'
                            break;
                        case 3:
                            mesNome = ' Março'
                            break;
                        case 4:
                            mesNome = ' Abril'
                            break;
                        case 5:
                            mesNome = ' Maio'
                            break;
                        case 6:
                            mesNome = ' Junho'
                            break;
                        case 7:
                            mesNome = ' Julho'
                            break;
                        case 8:
                            mesNome = ' Agosto'
                            break;
                        case 9:
                            mesNome = ' Setembro'
                            break;
                        case 10:
                            mesNome = ' Outubro'
                            break;
                        case 11:
                            mesNome = ' Novembro'
                            break;
                        case 12:
                            mesNome = ' Dezembro'
                            break; 
                    
                    }
                    celulaMesAno.textContent = `Total no mês de ${mesNome} de ${mesesAnos[c][0]}`;
                    let valor = mesesValor[chave];
                    celulaValor.textContent = `R$${parseFloat(valor).toFixed(2)}`;
                    chavesContidas.push(chave)
                    c += 1; 
                }
            
        }
    }
    localStorage.clear();
}


