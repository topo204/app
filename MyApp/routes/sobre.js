const express = require('express')
const router = express.Router()

router.get('/sobre', (req, res) => {
    res.send('voce esta na pagina sobre o grupo')
})

module.exports = router