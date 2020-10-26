var express = require('express');
var app = express();

app.use('/', require('./routes/home.routes'));
app.use('/', require('./routes/hist.routes.C'));
app.use('/', require('./routes/mods.routes.C'));
app.use('/', require('./routes/contato'));
app.use('/', require('./routes/sobre'));
app.use('/', require('./routes/usuario'));
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

