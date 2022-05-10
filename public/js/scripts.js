
'use strict';

const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}


const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {
    limparFormulario();

    const cep = document.getElementById('cep').value.replace("-", "");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {
        document.getElementById('cep').value = cep.substring(0, 5)
            + "-"
            + cep.substring(5);

        //fill the fields with "..." while query webservice.
        document.getElementById('endereco').value = "...";
        document.getElementById('bairro').value = "...";
        document.getElementById('cidade').value = "...";
        document.getElementById('estado').value = "...";




        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'CEP não encontrado!';
        } else {
            preencherFormulario(endereco);
        }
    } else {
        document.getElementById('endereco').value = 'CEP incorreto!';
    }

}

document.getElementById('cep')
    .addEventListener('focusout', pesquisarCep);

function mask(o, f) {
    setTimeout(function () {
        var v = telephone(o.value);
        if (v != o.value) {
            o.value = v;
        }
    }, 1);
}
function telephone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
}

const centros = [
    {
        "id": 0,
        "nome": "Recanto Espirita Sol de Assis",
        "endereco": "",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "id": 1,
        "nome": "Casa Espirita Euripedes Barsanulfo",
        "endereco": "Rua Gazeta da Tarde, 235",
        "bairro": "Taquara",
        "cep": "22715-100",
        "telefone": ""
    },
    {
        "id": 2,
        "nome": "Educandário Social Lar de Frei Luiz",
        "endereco": "Estrada da Boiuna, 1367",
        "bairro": "Taquara",
        "cep": "22723-021",
        "telefone": ""
    },
    {
        "id": 3,
        "nome": "Centro Espirita de Jacarepagua",
        "endereco": "Av. Geremario Dantas, 655",
        "bairro": "Pechincha",
        "cep": "22740-011",
        "telefone": ""
    },
    {
        "id": 4,
        "nome": "Grupo de Estudos Espirita Oficina de Carita",
        "endereco": "Rua nossa senhora de Fatima, 3B",
        "bairro": "Jacarepagua/Colônia",
        "cep": "22713-570",
        "telefone": "(21) 980143833"
    },

    {
        "id": 5,
        "nome": "Associação Espírita Francisco de Assis",
        "endereco": "R. Cap. Bragança, 82",
        "bairro": "Higienópolis",
        "cep": "21050-030",
        "telefone": ""
    },

    {
        "id": 6,
        "nome": "Casa Espirita Crista Maria de Nazarerh",
        "endereco": "R. Cap. Bragança, 82",
        "bairro": "Higienópolis",
        "cep": "21050-030",
        "telefone": ""
    },

    {
        "id": 7,
        "nome": "Casa Espírita Sentimento",
        "endereco": "Estr. Ver. Alcel de Carvalho, 2-222",
        "bairro": "Vargem Grande",
        "cep": "22785-620",
        "telefone": ""
    },

    {
        "id": 8,
        "nome": "Casa Maria de Nazaré /Grupo Rita de Cássia de Estudos Espíritas",
        "endereco": "",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "id": 9,
        "nome": "Centro de Educação e Orientação Espírita Jésus Gonçalves",
        "endereco": "Rua Almirante Guilhem, 265",
        "bairro": "Leblon",
        "cep": "22440-000",
        "telefone": ""
    },

    {
        "id": 10,
        "nome": "Centro Espírita a Caminho da Luz",
        "endereco": "R. Juruce, 164",
        "bairro": "Colégio",
        "cep": "21545-170",
        "telefone": ""
    },

    {
        "id": 11,
        "nome": "Centro Espírita Amor e Caridade Maria Madalena",
        "endereco": "R. Cap. Pires, 24",
        "bairro": "Bento Ribeiro",
        "cep": "21340-120",
        "telefone": ""
    },

    {
        "id": 12,
        "nome": "Centro Espírita Arautos de Uma Nova Era",
        "endereco": "Estr. do Portela, 347",
        "bairro": "Madureira",
        "cep": "21351-050",
        "telefone": ""
    },

    {
        "id": 13,
        "nome": "Centro Espirita Caminhemos Com humildade",
        "endereco": "R. Comendador Rodrigues Alves, 1544",
        "bairro": "Nilópolis",
        "cep": "26540-010",
        "telefone": ""
    },

    {
        "nome": "Centro Espirita Caridade Aymoré",
        "endereco": "R. Marambaia, 83",
        "bairro": "Irajá",
        "cep": "21361-290",
        "telefone": ""
    },

    {
        "nome": "Centro Espírita Casa do Caminho",
        "endereco": "",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Centro Espírita Discípulos de Jesus",
        "endereco": "",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Centro Espírita Filhos de Deus",
        "endereco": "",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Centro Espírita Francisco de Assis",
        "endereco": "",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Grupo Espírita Amor e Luz de  Maria Madalena",
        "endereco": "",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Grupo Espírita de Evangelização",
        "endereco": "",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Grupo Espírita Estrela dos Navegantes",
        "endereco": "",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "GRUPO ESPÍRITA IRMÃOS SAMARITANOS",
        "endereco": "",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "GRUPO ESPÍRITA PRINCIPIANTES DE BOA VONTADE",
        "endereco": "",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Núcleo de Estudos Espíritas Chico Xavier",
        "endereco": "",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Núcleo Espírita Pedro e Paulo",
        "endereco": "",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "União Espírita José O Carpinteiro",
        "endereco": "",
        "bairro": "",
        "cep": "",
        "telefone": ""
    }]



const ele = document.getElementById('sel');
const centro_selecionado = document.getElementById('instituicao_espirita');
const endereco_centro = document.getElementById("endereco_espirita")
/*     const estado_centro = document.getElementById("estado_espirita")
    const bairro_centro = document.getElementById("bairro_espirita")
    const cidade_centro = document.getElementById("cidade_espirita") */

for (let i = 0; i < centros.length; i++) {
    // Popular SELECT com JSON.
    ele.innerHTML = ele.innerHTML +
        '<option value="' + centros[i]['nome'] + '">' + centros[i]['nome'] + '</option>';
}

const birthday = document.querySelector('input[name="data_nascimento"]');

birthday.addEventListener("change", (event) => {
    const ageDate = new Date(Date.now() - new Date(event.target.value));
    const year = Math.abs(ageDate.getUTCFullYear() - 1970);
    document.querySelector(`input[name="idade"]`).value = year;
});



function salvarInscricao() {
    let id
}

let inscrito = []

function adicionarInscrito(event) {
    let novoInscrito = {

        nome_completo: nome_completo,
        nome_cracha: nome_cracha,
        email: email,
        data_nascimento: data_nascimento,
        idade: idade,
        sexo: sexo,
        genero: genero,
        telefone: telefone,
        cep: cep,
        logradoutro: logradoutro,
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        numero: numero
    }
    adicionarInscrito.push(novoInscrito);
}


document.querySelector('#save').addEventListener('click', salvarInscrito)


function saveInscrito() {
    let nome_completo = document.getElementsByTagName('name')[1].value,
        nome_cracha = document.getElementsByTagName('name')[2].value,
        email = document.getElementsByTagName('name')[3].value
    return nome_completo, nome_cracha, email
}

saveInscrito()