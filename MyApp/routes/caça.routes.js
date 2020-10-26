const express = require('express');
const router = express.Router();

const controller = require('../controllers/caça.controller');
const itemcontroller = new controller();


router.post('/inserir', itemcontroller.caça_inserir);

router.get('/listar', itemcontroller.caça_listar);

router.get('/buscar/:id', itemcontroller.caça_buscar);

router.put('/atualizar/:id', itemcontroller.caça_atualizar);

router.delete('/remover/:id', itemcontroller.caça_remover);

module.exports = router;