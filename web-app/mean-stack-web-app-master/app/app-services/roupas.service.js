(function () {
    'use strict';

    angular
        .module('app')
        .factory('RoupasService', Service);

    function Service($http, $q) {
        var service = {};
        var apiURL = "http://localhost:9050/api/estoque";
        service.Create = Create;
        service.List = List;
        service.Delete = Delete;
        service.Update = Update;

        return service;
        function Create(roupa) {
            return $http.post(apiURL + "/create", roupa).then(handleSuccess, handleError);
        }

        function List(perguntas) {
            return $http.get(apiURL + "/List" , perguntas).then(handleSuccess, handleError);
        }

        function Delete(_id) {
            return $http.delete(apiURL + "/delete/" + _id).then(handleSuccess, handleError);
        }

        function Update(roupa) {
            return $http.put(apiURL + "/update/" + roupa._id, roupa).then(handleSuccess, handleError);
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
