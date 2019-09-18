var config = require('config.json');
var express = require('express');
var router = express.Router();
var estoqueService = require('services/estoque.service');

// routes
router.post('/createItem', createItem);
router.get('/:_itemID', getEstoque);
router.put('/:_itemID', updateItem);
router.delete('/:_itemID', deleteItem);

function createItem(req, res){
    estoqueService.createItem(req.body)
    .then(function(){
        res.send("Success");
    }).catch(function(){
        res.send("Error");
    });
}

function getEstoque(req, res){
    estoqueService.getEstoque(req.params)
    .then(function(){
        res.send("Success");
    }).catch(function(){
        res.send("Error");
    });
}

function updateItem(req, res){
    estoqueService.updateItem(req.params._id, req.body)
    .then(function(){
        res.send("Success");
    }).catch(function(){
        res.send("Error");
    });
}

function deleteItem(req, res){
    estoqueService.deleteItem(req.params._id)
    .then(function(){
        res.send("Success");
    }).catch(function(){
        res.send("Error");
    });
}