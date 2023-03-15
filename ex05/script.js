function bmi(){
    let print = document.getElementById("output");  
    let bmi = weight.value / height.value ** 2;
    let classification;

    if (bmi < 18.5){
        classification = "Abaixo do peso"; 
    } 
    else if (bmi >= 18.5 && bmi < 25){
        classification = "Peso normal";
    } 
    else if (bmi >= 25 && bmi < 30){
        classification = "Sobrepeso";
    }
    else if (bmi >= 30 && bmi < 35){
        classification = "Obesidade grau I";
    }
    else if (bmi >= 35 && bmi < 40){
        classification = "Obesidade grau II";
    }
    else {
        classification = "Obesidade grau III";  
    }

    print.value = `Olá, ${nome.value.trim()}!\n O seu IMC é de ${bmi.toFixed(2)}.\nClassificação: ${classification}.`;
}

let name = document.getElementById("nome");
let height = document.getElementById("altura");
let weight = document.getElementById("peso");

