const express = require('express')
const router = express.Router()

router.get('/home/usuario/:nome/:senha', (req, res) => {
    res.send('voce esta logado')
})

router.post('/home/usuario/create/:nome/:senha', (req, res) => {
    res.send('voce tem certeza dos dados para a criação da sua conta?')
})


router.delete('/home/usuario/del', (req, res) => {
    res.send('voce tem certeza que quer deletar sua conta?')
})

module.exports = router