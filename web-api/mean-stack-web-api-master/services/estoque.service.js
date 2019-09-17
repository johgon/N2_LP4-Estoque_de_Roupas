var config = require('config.json');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('estoque');

var service = {};

service.listEstoque = listEstoque;
service.createItem = createItem;
service.updateItem = updateItem;
service.deleteItem = deleteItem;

module.exports = service;

function listEstoque(){
    
}

function createItem(){

}

function updateItem(){

}

function deleteItem(){
    
}