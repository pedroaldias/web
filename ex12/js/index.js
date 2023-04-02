
function getCategoriaSelecionada() {
    var value = categoria.options[categoria.selectedIndex].value;
    return value;
}

function getMes(data){
    return new Date(data).getMonth() + 1
}

function verificarValor() {
    valorErro.innerHTML = ''
    if (parseInt(valor.value) < 0) {
        valorErro.style.color = 'red';
        valorErro.innerHTML = 'Valor deve ser maior ou igual a 0';
    }
}

function adicionar() {
    //Criando uma nova linha e novas células para categoria, data e valor
    let novaLinha = extrato.insertRow(-1);
    let celulaCategoria = novaLinha.insertCell(0);
    let celulaData = novaLinha.insertCell(1);
    let celulaValor = novaLinha.insertCell(2);
    

    // Atribuindo valor para a célula de categoria
    switch (categoria.value) {
        case 'mercado':
            var categoriaNova = 'Mercado';
            break;
        case 'transporte':
            var categoriaNova = 'Transporte';
            break;
    }
    let novoDadoCategoria = document.createTextNode(categoriaNova);
    celulaCategoria.appendChild(novoDadoCategoria);

    // Atribuindo valor para a célula de data
    let dataNova = data.value;
    let novoDadoData = document.createTextNode(dataNova);
    celulaData.appendChild(novoDadoData);

    // Atribuindo valor para a célula de valor
    if (valor.value > 0) {
        var valorNovo = valor.value;
        let novoDadoValor = document.createTextNode(valorNovo);
        celulaValor.appendChild(novoDadoValor);
    }
    if(getCategoriaSelecionada() == 'transporte'){
        valorTransporte += parseInt(valorNovo);
    } else if(getCategoriaSelecionada() == 'mercado'){
        valorMercado += parseInt(valorNovo);
    }

    categoria.value = '';
    valor.value = '';
    data.value = '';    
}

function calcular() {
    // Pegando todas as linhas da tabela
    var linhas = extrato.getElementsByTagName('tr');
    let mesesValor = {};
    let valorTotal = 0;


    for (let i = 1; i < linhas.length; i++) {
        // Pegando o valor da célula de valor e atribuindo à variável de valor total / variável de soma por categoria
        let valorCelulaValor = parseFloat(linhas[i].getElementsByTagName('td')[2].innerHTML);
        valorTotal += valorCelulaValor;


        //Pegando o mês da célula de data
        let valorCelulaData = linhas[i].getElementsByTagName('td')[1].innerHTML;
        let mes = parseInt(getMes(valorCelulaData))
        let valor = parseFloat(linhas[i].getElementsByTagName('td')[2].innerHTML);
        if(mesesValor[mes] !== undefined) {
            mesesValor[mes] += valor;
        } else {
            mesesValor[mes] = valor;
        }
    }
    localStorage.setItem('mesesValor', JSON.stringify(mesesValor))
    localStorage.setItem('total', valorTotal);
    localStorage.setItem('valorMercado', valorMercado);
    localStorage.setItem('valorTransporte', valorTransporte);
    window.location.href = 'resumo.html';
}


const extrato = document.querySelector('.extrato');
const categoria = document.getElementById('categoria');
const valor = document.getElementById('valor');
const data = document.getElementById('data');
const valorErro = document.getElementById('valor-erro');
var valorMercado = 0;
var valorTransporte = 0;



