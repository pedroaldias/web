function getCategoriaSelecionada() {
    var value = categoria.options[categoria.selectedIndex].value;
    return value;
}

function adicionar() {
    //Criano uma nova linha e novas células para categoria, data e valor
    let novaLinha = extrato.insertRow(-1);
    let celulaCategoria = novaLinha.insertCell(0);
    let celulaData = novaLinha.insertCell(1);
    let celulaValor = novaLinha.insertCell(2);

    // Atribuindo valor para a célula de categoria
    switch(categoria.value){
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
    let valorNovo = valor.value;
    let novoDadoValor = document.createTextNode(valorNovo);
    celulaValor.appendChild(novoDadoValor);
}

function calcular(){
    // Pegando todas as linhas da tabela
    let linhas = extrato.getElementsByTagName('tr');
    console.log(linhas)

    // Criando variável para armazenar o total
    let valorTotal = 0;

    // Percorrendo todas as linhas da tabela
    for(let i = 1; i < linhas.length; i++){
        // Pegando o valor da célula de valor
        let valorLinha = linhas[i].getElementsByTagName('td')[2].innerHTML;
        // Convertendo o valor para float
        let valorFloat = parseFloat(valorLinha);
        // Somando o valor da célula ao total
        valorTotal += valorFloat;
    }
    resumo(valorTotal);
}

function resumo(valorTotal){
    window.location.href = 'resumo.html'
    const total = document.getElementById('total');
    total.innerHTML = `Valor total: R$ ${valorTotal}`
}


const extrato = document.querySelector('.extrato');
const categoria = document.getElementById('categoria');
const valor = document.getElementById('valor');
const data = document.getElementById('data');
