const express = require('express');
const router = express.Router();

const controller = require('../controllers/trans.controller');
const itemcontroller = new controller();


router.post('/inserir', itemcontroller.transporte_inserir);

router.get('/listar', itemcontroller.transporte_listar);

router.get('/buscar/:id', itemcontroller.transporte_buscar);

router.put('/atualizar/:id', itemcontroller.transporte_atualizar);

router.delete('/remover/:id', itemcontroller.transporte_remover);

module.exports = router;