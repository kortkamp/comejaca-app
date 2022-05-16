const express = require('express');
const inscricoesRoutes = express.Router();
const dbo = require('../database/conn');
const sendConfirmation = require('../smtp/index');
const mongodb = require('mongodb');
const app = require('express');
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

// const uuid = require('uuid')

/* inscricoesRoutes.route('/api/').get(async (_req, res) => {
    res.status(200).send('Oi Eu sou o goku')

}) */

inscricoesRoutes.route('/api/inscricoes/:id').get(async (_req, res) => {

    // res.sendFile(__dirname + 'cadastro')
    try {
        const dbConnect = dbo.getDb();
        const id = new mongodb.ObjectId(_req.params.id)
        const user = await dbConnect.collection('inscricoes').findOne({ _id: id })
        if (!user) throw new Error()
        return res.status(200).json(user)
    } catch (error) {
        return res.status(404).send('Usuario nao encontrado')
    } 

})

inscricoesRoutes.route('/api/inscricoes/print/:id').get(async (_req, res) => {
    try {
        const dbConnect = dbo.getDb();
        const id = new mongodb.ObjectId(_req.params.id)
        const user = await dbConnect.collection('inscricoes').findOne({ _id: id })  
        if (!user) throw new Error()


        const templateFile = path.resolve(
            __dirname,
            '..',
            'views',
            'ficha.hbs',
        );

        const templateFileContent = await fs.promises.readFile(templateFile, {
            encoding: 'utf-8',
        });

        
    
        const parseTemplate = handlebars.compile(templateFileContent);
    
        const ficha = parseTemplate(user);

        

        return res.status(200).send(ficha)
    } catch (error) {
        console.log(error)
        return res.status(404).send('Usuario nao encontrado')
    }

})



/* inscricoesRoutes.route('/api/inscricoes').get(async (_req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('inscricoes')
        .find({})
        .limit(50)
        .toArray(function (err, result) {
            if (err) {
                res.status(400).send('Error fetching listings!');
            } else {
                res.json(result);
            }
        });
}); */

inscricoesRoutes.route('/api/inscricoes').post(async (_req, res) => {


    const dbConnect = dbo.getDb();

    const inscricao = {

        dados_pessoais: {

            nome_completo: _req.body.dados_pessoais.nome_completo,
            nome_cracha: _req.body.dados_pessoais.nome_cracha,
            email: _req.body.dados_pessoais.email,
            data_nascimento: _req.body.dados_pessoais.data_nascimento,
            idade: _req.body.dados_pessoais.idade,
            sexo: _req.body.dados_pessoais.sexo,
            genero: _req.body.dados_pessoais.genero,
            telefone: _req.body.dados_pessoais.telefone,
            endereco: {
                cep: _req.body.dados_pessoais.endereco.cep,
                endereco: _req.body.dados_pessoais.endereco.endereco,
                estado: _req.body.dados_pessoais.endereco.estado,
                cidade: _req.body.dados_pessoais.endereco.cidade,
                bairro: _req.body.dados_pessoais.endereco.bairro,
                numero: _req.body.dados_pessoais.endereco.numero,
                complemento: _req.body.dados_pessoais.endereco.complemento
            }
        },
        questionario: [
            {
                nome: _req.body.questionario[0].nome,
                resposta: _req.body.questionario[0].resposta,
                quantas: _req.body.questionario[0].quantas,
            },
            {
                nome: _req.body.questionario[1].nome,
                resposta: _req.body.questionario[1].resposta,
                quais: _req.body.questionario[1].quais,
            },
            {
                nome: _req.body.questionario[2].nome,
                resposta: _req.body.questionario[2].resposta,
                quais: _req.body.questionario[2].quais,
            },
            {
                nome: _req.body.questionario[3].nome,
                resposta: _req.body.questionario[3].resposta,
                quais: _req.body.questionario[3].quais,
            },
            {
                nome: _req.body.questionario[4].nome,
                resposta: _req.body.questionario[4].resposta,
                quais: _req.body.questionario[4].quais,
            },
            {
                nome: _req.body.questionario[5].nome,
                resposta: _req.body.questionario[5].resposta,
                telefone_convenio: _req.body.questionario[5].telefone_convenio,
            }
        ],
        instituicao: {
            tempo_instituicao: _req.body.instituicao.tempo_instituicao,
            nome: _req.body.instituicao.nome,
            endereco: {
                cep: _req.body.instituicao.endereco.cep,
                endereco: _req.body.instituicao.endereco.endereco,
                estado: _req.body.instituicao.endereco.estado,
                cidade: _req.body.instituicao.endereco.cidade,
                bairro: _req.body.instituicao.endereco.bairro,
                numero: _req.body.instituicao.endereco.numero
            }
        },
        tipo: _req.body.tipo,
        comissao: _req.body.comissao,
        incluir_camisa: _req.body.incluir_camisa,
        tamanho_camisa: _req.body.tamanho_camisa,
        created_at: new Date(),

    }

    dbConnect
        .collection('inscricoes')
        .insertOne(inscricao, function (err, result) {
            if (err) {
                res.status(400).send('Error inserting matches!');
            } else {
                console.log(`Nova inscricao realizada com ID ${result.insertedId}`);
                sendConfirmation({ id: result.insertedId, nome: inscricao.dados_pessoais.nome_completo, email: inscricao.dados_pessoais.email })
                res.status(204).send();
            }
        });
});



inscricoesRoutes.route('/api/inscricoes/test').post(async (_req, res) => {
    console.log(_req.body)
    res.status(204).send("teste");
});




module.exports = inscricoesRoutes;

