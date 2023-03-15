pularLinha = () => '<br>';

const anoAtual = 2023;
const minhaIdade = 18;
const idadePessoaEsquerda = 17;
const idadePessoaDireita = 16;
const media = (minhaIdade + idadePessoaEsquerda + idadePessoaDireita) / 3; 

document.write(`Eu nasci em ${anoAtual - minhaIdade}`, pularLinha());
document.write(`A pessoa à minha esquerda nasceu em ${anoAtual - idadePessoaEsquerda}`, pularLinha());
document.write(`A pessoa à minha direita nasceu em ${anoAtual - idadePessoaDireita}`, pularLinha());
document.write(`A nossa média de idade é ${media}`);
