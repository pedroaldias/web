imc = (nome, peso, altura) => {
    const imc = peso / altura ** 2;
    window.alert(`Olá, ${nome}! Seu IMC é de ${imc.toFixed(2)}`);
}

let nome = prompt("Informe seu nome: ");
let peso = parseFloat(prompt("Informe seu peso (kg): "));
let altura = parseFloat(prompt("Informe seu altura (m): "));

imc(nome, peso, altura);