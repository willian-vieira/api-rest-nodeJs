const express = require('express');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');

//ROTAS
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

//REALIZA O MONITORAMENTO DAS EXECUÇÕES DA APLICAÇÃO
app.use(morgan('dev'));

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//TRATATIVA DE ERRO PARA ROTAS
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            messagem: error.message 
        }
    });
});


/*app.use((req, res, next) => {
    res.status(200).send({mensagem: 'OK, Deu certo'});
});*/

module.exports = app;