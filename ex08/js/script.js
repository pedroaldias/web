validarCampoVazio = (campo) => {
    if (campo.trim() === '') {
        return false;
    }
    return true;
}

validarNomeAluno = () => {
    if(validarCampoVazio(nomeAluno.value)){
        erroNomeAluno.innerHTML = ''
        return true
    } else if(!validarCampoVazio(nomeAluno.value)){
        erroNomeAluno.innerHTML = "* Campo obrigatório";
        return false
    }
}

validarNomeMae = () => {
    if(validarCampoVazio(nomeMae.value)){
        erroNomeMae.innerHTML = ''
        return true
    } else if(!validarCampoVazio(nomeMae.value)){
        erroNomeMae.innerHTML = "* Campo obrigatório";
        return false
    }
}

validarNomePai = () => {
    if(validarCampoVazio(nomePai.value)){
        erroNomePai.innerHTML = ''
        return true
    } else if(!validarCampoVazio(nomePai.value)){
        erroNomePai.innerHTML = "* Campo obrigatório";
        return false
    }
}

validarData = () => {
    if(validarCampoVazio(dataNascimento.value)){
        erroDataNascimento.innerHTML = "";
        return true
    } else if(!validarCampoVazio(dataNascimento.value)){
        erroDataNascimento.innerHTML = "* Campo obrigatório";
        return false
    }
}

validarTelefone = () => {
    if(telefone.value.length != 11){
        erroTelefone.innerHTML = "* Número de telefone inválido";
        return false
    } else if(telefone.value.length == 11){
        erroTelefone.innerHTML = "";
        return true;
    }
    var telefoneArray = telefone.value.split('');
    var ddd = telefoneArray[0] + telefoneArray[1];
    var dddsValidos = [
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
    if(dddsValidos.includes(ddd)){
        erroTelefone.innerHTML = ''
        return true
    } else {
        erroTelefone.innerHTML = '* DDD inválido'
        return false
    }   
}

validarEmail = () => {
    if(emailRegex.test(email.value)){
        erroEmail.innerHTML = ''
        return true;
    } else if(!emailRegex.test(email.value)){
        erroEmail.innerHTML = "* Email inválido";
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
        erroTurno.innerHTML = "";
        return true;
    } else {
        erroTurno.innerHTML = "* Campo obrigatório";
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
        erroCheckbox.innerHTML = 'Só podem ser selecionadas 3 atividades extracurriculares.'
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


validar = () => {
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




