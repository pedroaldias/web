skipLine = () => '<br>';
operations = (x, y) => {
    document.write(`${x} + ${y} = ${x + y}`, skipLine());
    document.write(`${x} - ${y} = ${x - y}`, skipLine());
    document.write(`${x} * ${y} = ${x * y}`, skipLine());
    document.write(`${x} / ${y} = ${x / y}`, skipLine());
}

let x = parseFloat(prompt("Input a number: "));
let y = parseFloat(prompt("Input another number: "));
operations(x, y);