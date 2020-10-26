const mongoose = require('../database');
const Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
    email: { type: String, required: [true, 'email obrigatório'], unique: true },
    nome: { type: String, required: true },
    celular: { type: String, required: true },
    liberado: { type: Boolean, default: true },
    data_criacao: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Usuario', UsuarioSchema, 'usuario');
