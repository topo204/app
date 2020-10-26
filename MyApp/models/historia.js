const mongoose = require('../database');
const Schema = mongoose.Schema;

let historiaSchema = new Schema({
    titulo:{type:String},
    texto:{type:String},
    data:{type:Date, default: Date.now},
    id:{type:Number}
})

module.exports = mongoose.model('historia', historiaSchema, 'historia')