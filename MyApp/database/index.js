var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://joao_henrique:Me5hCicuM4K7VAxV@clustertrabalho.qjgft.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    promiseLibrary: global.Promise
});

module.exports = mongoose;