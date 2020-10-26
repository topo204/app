const express = require('express');
const router = express.Router();

const controller = require('../controllers/bomb.controller');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.bomber_inserir);

router.get('/listar', itemcontroller.bomber_listar);

router.get('/buscar/:id', itemcontroller.bomber_buscar);

router.put('/atualizar/:id', itemcontroller.bomber_atualizar);

router.delete('/remover/:id', itemcontroller.bomber_remover);

module.exports = router;