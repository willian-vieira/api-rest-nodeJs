const express = require('express');
const router = express.Router();

//GET RETORNA TODO PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({mensagem: 'Retorna todos os pedidos'});
});

//POST INSERE UM NOVO PEDIDO
router.post('/', (req, res, next) => {
    res.status(201).send({mensagem: 'O pedido foi criado'});
});

//GET FINDBYID RETORNA ID DE UM UNICO PEDIDO
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({menssagem: 'Detalhe do pedido', id_pedido: id});
});

//UPDATE ALTERA UM PEDIDO
router.patch('/', (req, res, next) => {
    res.status(201).send({mensagem: 'Usando o PATCH dentro da rota de produtos'});
});

//DELETE APAGA UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({mensagem: 'Pedido excluído'});
});

module.exports = router;