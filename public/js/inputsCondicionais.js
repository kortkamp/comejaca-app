let comissao = document.querySelector('#comissao');
let camisa = document.querySelector('#camisa')
let numeroComejacas = document.querySelector('#numeroComejacas')
let temAlergia = document.querySelector('#temAlergia')
let temDoencaCronica = document.querySelector('#temDoencaCronica')
let usaMedicacao = document.querySelector('#usaMedicacao')
let usoVegetariano = document.querySelector('#usoVegetariano')
let temPlanoSaude = document.querySelector('#temPlanoSaude')
function removerDisabledComissao(event) {
    console.log(event)
    if (event != 'Trabalhador') {
        comissao.disabled = true
    } else {
        console.log(event)
       /*  comissao.setAttribute('disabled','' ) */
       comissao.disabled = false
    }
}

function removerDisabledCamisa(event) {
    if (event != 'S') {
        camisa.disabled = true
    } else {
        console.log(event)

       camisa.disabled = false
    }
}

function removerDisabledQuantasComejacas(event) {
    if (event != 'S') {
        numeroComejacas.disabled = true
    } else {
        console.log(event)

        numeroComejacas.disabled = false
    }
}


function removerDisabledTemAlergia(event) {
    if (event != 'S') {
        temAlergia.disabled = true
    } else {
        console.log(event)

        temAlergia.disabled = false
    }
}

function removerDisabledTemDoencaCronica(event) {
    if (event != 'S') {
        temDoencaCronica.disabled = true
    } else {
        console.log(event)

        temDoencaCronica.disabled = false
    }
}

function removerDisabledFazUsoMedicacao(event) {
    if (event != 'S') {
        usaMedicacao.disabled = true
    } else {
        console.log(event)

        usaMedicacao.disabled = false
    }
}

function removerDisabledFazUsoVegetariano(event) {
    if (event != 'S') {
        usoVegetariano.disabled = true
    } else {
        console.log(event)

        usoVegetariano.disabled = false
    }
}

function removerDisabledTemPlanoSaude(event) {
    if (event != 'S') {
        temPlanoSaude.disabled = true
    } else {
        console.log(event)

        temPlanoSaude.disabled = false
    }
}




