const express = require('express')
const router = express.Router()

router.get('/contato', (req, res) => {
    res.send('voce esta na aba de contato')
}) 

router.post('/contato/mensagem/:nome/:email/:assunto', (req, res) => {
    res.send('voce tem certeza dos dados?')
})

module.exports = router
