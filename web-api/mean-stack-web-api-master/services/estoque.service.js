var config = require('config.json');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('estoque');

var service = {};

service.list = list;
service.create = create;
service.updateItem = updateItem;
service.delete = _delete;

module.exports = service;

function list() {
    var deferred = Q.defer();
    db.estoque.find().toArray(function(err, result){
        deferred.resolve(result);
    });
    return deferred.promise;    
}

function create(Item) {
    var deferred = Q.defer();
    var item = Item;
    db.estoque.insert(
        item,
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
        });
    return deferred.promise;
}

function updateItem(_id, item){

    db.estoque.findById(_id, function(err, item){
        if (err) deferred.reject(err.name + ': ' + err.message);

        updateItem(item);
    });

    function updateItem(){

        var itemUpdated = {
            Code : item.Code,
            DtEntrega : item.DtEntrega,
            Tipo : item.Tipo,
            Marca : item.Marca,
            Caracteristica : item.Caracteristica,
            Tamanho : item.Tamanho,
            Cor : item.Cor,
            ValorEtiqueta : item.ValorEtiqueta,
            ValorPago : item.ValorPago,
            ValorMargem : item.ValorMargem,
            ValorSugerido : item.ValorSugerido
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

function _delete(_id) {
    var deferred = Q.defer();

    db.estoque.remove(
        { _id: mongo.helper.toObjectID(_id._itemID) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}