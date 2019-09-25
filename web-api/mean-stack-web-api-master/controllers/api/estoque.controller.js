var config = require('config.json');
var express = require('express');
var router = express.Router();
var estoqueService = require('services/estoque.service');

// routes
router.post('/create', create);
router.get('/List', list);
router.put('/:_itemID', updateItem);
router.delete('/:_itemID', deleteItem);

module.exports = router;

function create(req, res){
    estoqueService.create(req.body)
    .then(function(){
        res.send(200);
    }).catch(function(){
        res.send(400).send(err);
    });
}

function list(req, res){
    estoqueService.list()
    .then(function(itens){
        res.status(200).send(itens);
    }).catch(function(){
        res.send(400).send(err);
    });
}

function updateItem(req, res){
    estoqueService.updateItem(req.params._id, req.body)
    .then(function(){
        res.send(200);
    }).catch(function(){
        res.send(400).send(err);
    });
}

function deleteItem(req, res){
    estoqueService.delete(req.params)
    .then(function(){
        res.send(200);
    }).catch(function(){
        res.send(400).send(err);
    });
}