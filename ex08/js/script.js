validarCampoVazio = (campo) => {
    if (campo.trim() === '') {
        return false;
    }
    return true;
}

validarNomeAluno = () => {
    if(validarCampoVazio(nomeAluno.value)){
        nomeAluno.style.borderColor = 'green';
        erroNomeAluno.innerHTML = ''
        return true
    } else if(!validarCampoVazio(nomeAluno.value)){
        nomeAluno.style.borderColor = 'red';
        erroNomeAluno.innerHTML = '* Campo obrigatório';
        return false
    }
}

validarNomeMae = () => {
    if(validarCampoVazio(nomeMae.value)){
        nomeMae.style.borderColor = 'green';
        erroNomeMae.innerHTML = ''
        return true
    } else if(!validarCampoVazio(nomeMae.value)){
        nomeMae.style.borderColor = 'red';
        erroNomeMae.innerHTML = '* Campo obrigatório';
        return false
    }
}

validarNomePai = () => {
    if(validarCampoVazio(nomePai.value)){
        nomePai.style.borderColor = 'green';
        erroNomePai.innerHTML = ''
        return true
    } else if(!validarCampoVazio(nomePai.value)){
        nomePai.style.borderColor = 'red';
        erroNomePai.innerHTML = '* Campo obrigatório';
        return false
    }
}

validarData = () => {
    const dataHoje = Date.now();
    const dataEscolhida = Date.parse(dataNascimento.value);
    if (dataEscolhida <= dataHoje && dataEscolhida != ''){
        dataNascimento.style.borderColor = 'green';
        erroDataNascimento.innerHTML = ''
        return true;
    } else {
        dataNascimento.style.borderColor = 'red';
        erroDataNascimento.innerHTML = '* Data inválida';
        return false
    }
}

mudarPadraoTelefone = () => {
    telefone.value = telefone.value.replace(/\D/g,"")                
    telefone.value = telefone.value.replace(/^(\d\d)(\d)/g,"($1) $2")
    telefone.value = telefone.value.replace(/(\d{5})(\d)/,"$1-$2")
    return telefone.value
}

validarTelefone = () => {
    let telefoneArray = telefone.value.split('');
    let ddd = telefoneArray[1] + telefoneArray[2];
    let dddsValidos = [
        '11', '12', '13', '14', '15', '16', '17', '18', '19', // SP
        '21', '22', '24', // RJ
        '27', '28', // ES
        '31', '32', '33', '34', '35', '37', '38', // MG
        '41', '42', '43', '44', '45', '46', // PR
        '47', '48', '49', // SC
        '51', '53', '54', '55', // RS
        '61', // DF e GO
        '62', '64', // GO
        '63', // TO
        '65', '66', // MT
        '67', // MS
        '68', // AC
        '69', // RO
        '71', '73', '74', '75', '77', // BA
        '79', // SE
        '81', '87', // PE
        '82', // AL
        '83', // PB
        '84', // RN
        '85', '88', // CE
        '86', '89', // PI
        '91', '93', '94', // PA
        '92', '97', // AM
        '95', // RR
        '96', // AP
    ];
    if (dddsValidos.includes(ddd) && telefone.value.length == 15) {
        telefone.style.borderColor = 'green';
        erroTelefone.innerHTML = ''
        return true
    } 
    else {
        if(!dddsValidos.includes(ddd)){
            telefone.style.borderColor = 'red';
            erroTelefone.innerHTML = '* DDD inválido'
            return false; 
        } else {
            telefone.style.borderColor = 'red';
            erroTelefone.innerHTML = '* Número de telefone inválido ';
            return false;
        }
    }
}

validarEmail = () => {
    if(emailRegex.test(email.value)){
        email.style.borderColor = 'green';
        erroEmail.innerHTML = '';
        return true;
    } else {
        email.style.borderColor = 'red';
        erroEmail.innerHTML = '* Email inválido';
        return false;
    }
}

validarEscolaridade = () => {
    if(escolaridade.value != null){
        return true
    } else {
        return false
    }
}

validarTurno = () => {
    if(turnoManha.checked || turnoTarde.checked){
        erroTurno.innerHTML = '';
        return true;
    } else {
        erroTurno.innerHTML = '* Campo obrigatório';
        return false;
    } 
}

validarAtividades = () => {
    c = 0;
    for (var i = 0; i < qtdAtividades.length; i++) {
        if (qtdAtividades[i].checked == true){
            c++;
        }
    }
    if (c <= 3) {

        erroCheckbox.innerHTML = ''
        return true;
    } else {
        erroCheckbox.innerHTML = 'Máximo: 3 atividades'
        return false;
    }
}

alertaErro = () => {
    Swal.fire({
        icon: 'error',
        title: 'Não foi possível enviar o formulário'
    })
}

alertaSucesso = () => {
    Swal.fire({
        icon: 'success',
        title: 'Formulário enviado com sucesso',
        showConfirmButton: false,
        timer: 1500
      })
}
resetarBordas = () => {
    nomeAluno.style.borderColor = '#cccccce1';
    dataNascimento.style.borderColor = '#cccccce1';
    nomeMae.style.borderColor = '#cccccce1';
    nomePai.style.borderColor = '#cccccce1';
    telefone.style.borderColor = '#cccccce1';
    email.style.borderColor = '#cccccce1';
}

validarFormulario = () => {
    var resultado = true;
    if(!validarNomeAluno()){
        alertaErro()
        resultado = false
        return false
    }

    if(!validarNomeMae()){
        alertaErro()
        resultado = false
        return false
    }

    if(!validarNomePai()){
        alertaErro()
        resultado = false
        return false
    }

    if(!validarData()){
        alertaErro()
        resultado = false
        return false
    }

    if(!validarTelefone()){
        alertaErro()
        resultado = false
        return false
    }

    if(!validarEmail()){
        alertaErro()
        resultado = false
        return false
    }

    if(!validarEscolaridade()){
        alertaErro()
        resultado = false
        return false
    }

    if(!validarTurno()){
        alertaErro()
        resultado = false
        return false
    } 

    if(!validarAtividades()){
        alertaErro()
        resultado = false
        return false
    }
    if(resultado){  
        alertaSucesso()
        resetarBordas()
        formulario.reset()
    }
}   

const nomeAluno = document.getElementById('nome-aluno')
const nomeMae = document.getElementById('nome-mae')
const nomePai = document.getElementById('nome-pai')

const telefone = document.getElementById('telefone')

const dataNascimento = document.getElementById('data-nascimento')

const email = document.getElementById('email');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;

const escolaridade = document.getElementById('serie')

const turnoManha = document.getElementById('manha')
const turnoTarde = document.getElementById('tarde')

const qtdAtividades = document.querySelectorAll('.checkbox-items')

const erroNomeAluno = document.getElementById('erro-nome-aluno')
const erroNomeMae = document.getElementById('erro-nome-mae')
const erroNomePai = document.getElementById('erro-nome-pai')
const erroDataNascimento = document.getElementById('erro-data-nascimento')
const erroTelefone = document.getElementById('erro-telefone')
const erroEmail = document.getElementById('erro-email')
const erroCheckbox = document.getElementById('erro-checkbox')
const erroTurno = document.getElementById('erro-turno')

const formulario = document.getElementById('formulario')
