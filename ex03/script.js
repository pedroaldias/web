operation = (fahrenheitValue) => {
    const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
    document.write(`${fahrenheitValue} Fahrenheit = ${celsiusValue.toFixed(2)} Celsius.`);
} 

let fahrenheitValue = parseFloat(prompt("Digite uma temperatura em ºF para transformá-la em ºC"));
operation(fahrenheitValue);