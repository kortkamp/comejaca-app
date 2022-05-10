const express = require('express');
const api = express.Router();

api.route('/').get(async (_req, res) => {
    res.status(200).send('Oi Eu sou o goku')
})

module.exports = api