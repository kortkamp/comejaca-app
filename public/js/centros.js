'use strict';

const centros = [
    {
        "id": 0,
        "nome": "Recanto Espirita Sol de Assis",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "id": 1,
        "nome": "Casa Espirita Euripedes Barsanulfo",
        "endereco": "Rua Gazeta da Tarde, 235",
        "cidade": "Rio de Janeiro",
        "bairro": "Taquara",
        "cep": "22715-100",
        "telefone": ""
    },
    {
        "id": 2,
        "nome": "Educandário Social Lar de Frei Luiz",
        "endereco": "Estrada da Boiuna, 1367",
        "cidade": "Rio de Janeiro",
        "bairro": "Taquara",
        "cep": "22723-021",
        "telefone": ""
    },
    {
        "id": 3,
        "nome": "Centro Espirita de Jacarepagua",
        "endereco": "Av. Geremario Dantas, 655",
        "cidade": "Rio de Janeiro",
        "bairro": "Pechincha",
        "cep": "22740-011",
        "telefone": ""
    },
    {
        "id": 4,
        "nome": "Grupo de Estudos Espirita Oficina de Carita",
        "endereco": "Rua nossa senhora de Fatima, 3B",
        "cidade": "Rio de Janeiro",
        "bairro": "Jacarepagua/Colônia",
        "cep": "22713-570",
        "telefone": "(21) 980143833"
    },

    {
        "id": 5,
        "nome": "Associação Espírita Francisco de Assis",
        "endereco": "R. Cap. Bragança, 82",
        "cidade": "Rio de Janeiro",
        "bairro": "Higienópolis",
        "cep": "21050-030",
        "telefone": ""
    },

    {
        "id": 6,
        "nome": "Casa Espirita Crista Maria de Nazarerh",
        "endereco": "R. Cap. Bragança, 82",
        "cidade": "Rio de Janeiro",
        "bairro": "Higienópolis",
        "cep": "21050-030",
        "telefone": ""
    },

    {
        "id": 7,
        "nome": "Casa Espírita Sentimento",
        "endereco": "Estr. Ver. Alcel de Carvalho, 2-222",
        "cidade": "Rio de Janeiro",
        "bairro": "Vargem Grande",
        "cep": "22785-620",
        "telefone": ""
    },

    {
        "id": 8,
        "nome": "Casa Maria de Nazaré /Grupo Rita de Cássia de Estudos Espíritas",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "id": 9,
        "nome": "Centro de Educação e Orientação Espírita Jésus Gonçalves",
        "endereco": "Rua Almirante Guilhem, 265",
        "cidade": "Rio de Janeiro",
        "bairro": "Leblon",
        "cep": "22440-000",
        "telefone": ""
    },

    {
        "id": 10,
        "nome": "Centro Espírita a Caminho da Luz",
        "endereco": "R. Juruce, 164",
        "cidade": "Rio de Janeiro",
        "bairro": "Colégio",
        "cep": "21545-170",
        "telefone": ""
    },

    {
        "id": 11,
        "nome": "Centro Espírita Amor e Caridade Maria Madalena",
        "endereco": "R. Cap. Pires, 24",
        "cidade": "Rio de Janeiro",
        "bairro": "Bento Ribeiro",
        "cep": "21340-120",
        "telefone": ""
    },

    {
        "id": 12,
        "nome": "Centro Espírita Arautos de Uma Nova Era",
        "endereco": "Estr. do Portela, 347",
        "cidade": "Rio de Janeiro",
        "bairro": "Madureira",
        "cep": "21351-050",
        "telefone": ""
    },

    {
        "id": 13,
        "nome": "Centro Espirita Caminhemos Com humildade",
        "endereco": "R. Comendador Rodrigues Alves, 1544",
        "cidade": "Rio de Janeiro",
        "bairro": "Nilópolis",
        "cep": "26540-010",
        "telefone": ""
    },

    {
        "nome": "Centro Espirita Caridade Aymoré",
        "endereco": "R. Marambaia, 83",
        "cidade": "Rio de Janeiro",
        "bairro": "Irajá",
        "cep": "21361-290",
        "telefone": ""
    },

    {
        "nome": "Centro Espírita Casa do Caminho",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Centro Espírita Discípulos de Jesus",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Centro Espírita Filhos de Deus",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Centro Espírita Francisco de Assis",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Grupo Espírita Amor e Luz de  Maria Madalena",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Grupo Espírita de Evangelização",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Grupo Espírita Estrela dos Navegantes",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "GRUPO ESPÍRITA IRMÃOS SAMARITANOS",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "GRUPO ESPÍRITA PRINCIPIANTES DE BOA VONTADE",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Núcleo de Estudos Espíritas Chico Xavier",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Núcleo Espírita Pedro e Paulo",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "União Espírita José O Carpinteiro",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    }
]


const datalist = document.getElementById('datalist');

centros.forEach(centro => {
    const tag = document.createElement('option')
    tag.appendChild(document.createTextNode(centro.nome))
    tag.setAttribute('value', centro.nome)
    datalist.appendChild(tag)
})

document.getElementById('instituicao_espirita').addEventListener('change', (event) => {
    const centroSelecionado = event.target.value
    const centro = centros.filter(centro => centro.nome === centroSelecionado)[0]

    if(centro) {
        document.getElementById('endereco_espirita').value = centro.endereco
        document.getElementById('bairro_espirita').value = centro.bairro
        document.getElementById('cidade_espirita').value = centro.cidade
        document.getElementById('CEP_espirita').value = centro.cep 
    }
})


/* 
for (let i = 0; i < centros.length; i++) {
    // Popular SELECT com JSON.
    datalist.innerHTML = datalist.innerHTML +
    '<option value="' + centros[i]['nome'] + '">' + centros[i]['nome'] + '</option>';
} */

