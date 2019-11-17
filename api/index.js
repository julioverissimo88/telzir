/**Constantes de inicialização */
const express = require('express');
const app = express();
const port = 8080;
var cors = require('cors');

/** Configurando Middlewares default  */
app.use(express.json());
app.use(cors());

/**Middleware padrão para informações da requisição */
app.use(function (req, res, next) {
    console.time('Tempo de execução');
    console.log('Requisição:', req.originalUrl);
    console.log('Body:', req.body);
    next();
    console.timeEnd('Tempo de execução');
});

/** Import da rota padrão de calculo */
require('./routes/telzir.route')(app);

/** Executa servidor Express na porta configurada */
app.listen(port, () => { console.log('listen in port: ', port) });
