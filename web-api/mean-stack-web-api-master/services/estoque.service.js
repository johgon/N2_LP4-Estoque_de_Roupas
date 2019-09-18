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

function createItem(Item){
    var deferred = Q.defer();

    db.estoque.insert(
        Item,
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}

function updateItem(_id, item){

    db.estoque.findById(_id, function(err, item){
        if (err) deferred.reject(err.name + ': ' + err.message);

        updateItem();
    });

    function updateItem(){

        var itemUpdated = {
            Code = item.Code,
            DtEntrega = item.DtEntrega,
            Tipo = item.Tipo,
            Marca = item.Marca,
            Caracteristica = item.Caracteristica,
            Tamanho = item.Tamanho,
            Cor = item.Cor,
            ValorEtiqueta = item.ValorEtiqueta,
            ValorPago = item.ValorPago,
            ValorMargem = item.ValorMargem,
            ValorSugerido = item.ValorSugerido
        };
    
        db.estoque.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: itemUpdated },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
    
                deferred.resolve();
            });
    }

    return deferred.promise;
}

function deleteItem(){
    
}