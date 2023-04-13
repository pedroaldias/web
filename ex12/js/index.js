const extrato = document.querySelector('.extrato');
const categoria = document.getElementById('categoria');
const valor = document.getElementById('valor');
const data = document.getElementById('data');
const valorErro = document.getElementById('valor-erro');

let valorMercado = 0;
let valorTransporte = 0;
let valorTotal = 0;
let mesesValor = {};
let mesesAnos = [];

function adicionar() {
    const novaLinha = extrato.insertRow(-1);
    const celulaCategoria = novaLinha.insertCell(0);
    const celulaData = novaLinha.insertCell(1);
    const celulaValor = novaLinha.insertCell(2);
  
    let categoriaNova = '';
    switch (categoria.value) {
      case 'mercado':
        categoriaNova = 'Mercado';
        break;
      case 'transporte':
        categoriaNova = 'Transporte';
        break;
    }
  
    celulaCategoria.appendChild(document.createTextNode(categoriaNova));
    celulaValor.appendChild(document.createTextNode(parseFloat(valor.value)));
  
    if (getCategoriaSelecionada() === 'transporte') {
      valorTransporte += parseFloat(valor.value);
    } else if (getCategoriaSelecionada() === 'mercado') {
      valorMercado += parseFloat(valor.value);
    }
  
    const dataNova = new Date(data.value);
    const dataFormatada = new Date(Date.parse(dataNova));
    dataFormatada.setDate(dataFormatada.getDate() + 1); 
    let dataFormatadaTratada = dataFormatada.toLocaleDateString('pt-BR');
    // let novaData = {
    //   dia: dataFormatada.getDate(),
    //   mes: dataFormatada.getMonth() + 1,
    //   ano: dataFormatada.getFullYear()
    // }
    celulaData.appendChild(document.createTextNode(dataFormatadaTratada));

    
    const mes = dataFormatada.getMonth() + 1;
    const ano = dataFormatada.getFullYear();
    const chave = `${ano}/${mes}`;
    
    if (mesesValor[chave]) {
      mesesValor[chave] += parseFloat(valor.value);
      mesesAnos.push([ano, mes])
    } else {
      mesesValor[chave] = parseFloat(valor.value);
      mesesAnos.push([ano, mes])
    }

    categoria.value = '';
    valor.value = '';
    data.value = '';
}
  

function calcular() {
  const linhas = extrato.getElementsByTagName('tr');

  for (let i = 1; i < linhas.length; i++) {
    const valorCelulaValor = parseFloat(linhas[i].getElementsByTagName('td')[2].innerHTML);
    valorTotal += valorCelulaValor;
  }

  localStorage.setItem('mesesAnos', JSON.stringify(mesesAnos));
  localStorage.setItem('mesesValor', JSON.stringify(mesesValor));
  localStorage.setItem('total', valorTotal);
  localStorage.setItem('valorMercado', valorMercado);
  localStorage.setItem('valorTransporte', valorTransporte);
  window.location.href = 'resumo.html';
}

function getCategoriaSelecionada() {
  return categoria.options[categoria.selectedIndex].value;
}

function verificarValor() {
    valorErro.innerHTML = '';
    let valorConvertido = parseFloat(valor.value);
    if (isNaN(valorConvertido) || valorConvertido < 0) {
        valorErro.style.color = 'red';
        valorErro.innerHTML = 'Valor deve ser maior ou igual a 0';
    }
}

