(function () {
    'use strict';

    angular
        .module('app')
        .controller('RoupasSearch.IndexController', Controller);

    function Controller($window, RoupasService, FlashService) {
        var vm = this;

        vm.filter={};
        vm.Lista = [];

        vm.listRoupas = function() {
            RoupasService.List(vm.filter).then(function (response) {
                vm.Lista = response;
            })
        }
        
        vm.delete = function(item) {
            RoupasService.Delete(item._id).then(function (response) {
                vm.listRoupas();
            })
        }

    }

})();