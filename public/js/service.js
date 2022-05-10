'use strict'

function submitForm(event) {
    event.preventDefault()
    const form = event.target

    function getValue(tag) {
        try {
            return form.querySelector(`input[name=${tag}]`).value
        } catch (error) {
            try {
                return form.querySelector(`select[name=${tag}]`).value
            } catch (error) {
                console.log('elemento nao encontrado, tagname = ', tag)
            }
        }

    }

    const dados_pessoais = {
        nome_completo: getValue('nomecompleto'),
        nome_cracha: getValue('nome_cracha'),
        email: getValue('email'),
        data_nascimento: getValue('data_nascimento'),
        idade: getValue('idade'),
        sexo: getValue('sexo'),
        genero: getValue('genero'),
        telefone: getValue('telefone'),
        endereco: {
            cep: getValue('CEP'),
            endereco: getValue('endereco'),
            estado: getValue('estado'),
            cidade: getValue('cidade'),
            bairro: getValue('bairro'),
            numero: getValue('numero')
        }
    }

    const questionario = [
        {
            nome: "Já participou de outras comejacas ?",
            resposta: getValue('comejacas'),
            quantas: getValue('quantas')
        },
        {
            nome: "Possui algum tipo de alergia ?",
            resposta: getValue('alergia'),
            quais: getValue('quais_alergia')
        },
        {
            nome: "Possui alguma doença cronica? ",
            resposta: getValue('doenca'),
            quais: getValue('quais_doenca')
        },
        {
            nome: "Faz um rotineiro de medicação ?",
            resposta: getValue('medicacao'),
            quais: getValue('quais_medicacao')
        },
        {
            nome: "Faz uso de alimentação vegetarian ?",
            resposta: getValue('vegetariano'),
            quais: getValue('quais_vegetariano')
        },
        {
            nome: "Possui plano de saúde ?",
            resposta: getValue('plano_de_saude'),
            telefone_convenio: getValue('telefone_plano')
        }
    ]

    const instituicao = {
        tempo_instituicao: getValue('tempo_instituicao'),
        nome: getValue('instituicao_espirita'),
        endereco: {
            cep: getValue('cep_centro'),
            endereco: getValue('endereco_c'),
            cidade: getValue('cidade_c'),
            bairro: getValue('bairro_c'),
        }
    }

    const payload = {
        dados_pessoais,
        questionario,
        instituicao,
        tipo: getValue('tipo_participacao'),
        comissao: getValue('comissao'),
        incluir_camisa: getValue('camisa'),
        tamanho_camisa: getValue('tamanho_camisa'),
    }

    fetch('https://comejaca-app.vercel.app/', {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(payload)
    }).then(res => {
        window.location.pathname = 'confirmacao.html'
    })
}




