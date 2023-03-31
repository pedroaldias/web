function getCategoriaSelecionada() {
    var value = categoria.options[categoria.selectedIndex].value;
    return value;
}

function adicionar() {
    let novaLinha = extrato.insertRow(-1);
    let celulaCategoria = novaLinha.insertCell(0);
    // let celulaValor = novaLinha.insertCell(1);
    let celulaData = novaLinha.insertCell(1);

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

    console.log(typeof data.value)
    // let novoDadoData = document.createTextNode(dataNova);
    // celulaData.appendChild(novoDadoData);
}

const extrato = document.querySelector('.extrato');
const categoria = document.getElementById('categoria');
const valor = document.getElementById('valor');
const data = document.getElementById('data');
