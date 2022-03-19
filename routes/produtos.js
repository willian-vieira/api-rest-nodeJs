const express = require('express');
const router = express.Router();

//GET RETORNA TODO OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({mensagem: 'Retorna todos os produtos'});
});

//POST INSERE UM NOVO PRODUTO
router.post('/', (req, res, next) => {
    res.status(201).send({mensagem: 'O produto foi criado'});
});

//GET FINDBYID RETORNA ID DE UM UNICO PRODUTO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({menssagem: 'Você descobriu o ID especial', id: id});
    } else {
        res.status(200).send({menssagem: 'Você passou um ID'});
    }
});

//UPDATE ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({mensagem: 'Produto alterado'});
});

// DELETE APAGA UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({mensagem: 'Produto excluído'});
});

module.exports = router;