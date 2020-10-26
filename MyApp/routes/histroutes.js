const express = require('express');
const router = express.Router();

const controller = require('../controllers/histcontroller');
const itemcontroller = new controller();


router.post('/inserir', itemcontroller.historia_inserir);

router.get('/listar', itemcontroller.historia_listar);

router.get('/buscar/:id', itemcontroller.historia_buscar);

router.put('/atualizar/:id', itemcontroller.historia_atualizar);

router.delete('/remover/:id', itemcontroller.historia_remover);

module.exports = router;