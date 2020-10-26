const mongoose = require('../database');
const Schema = mongoose.Schema;

let transporteSchema = new Schema({
    texto: {type:String},
    fonte: {type:String},
    Name: {type:String},
    data: {type:Date},
    especificacoes: {type:String},
    id: {type:Number}

})

module.exports = mongoose.model('transporte', transporteSchema, 'transporte');