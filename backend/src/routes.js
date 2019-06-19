const express = require('express')
const routes = express.Router()
const CipherController = require('./controllers/cipherController')

routes.get('/ciphers', CipherController.index)

module.exports = routes