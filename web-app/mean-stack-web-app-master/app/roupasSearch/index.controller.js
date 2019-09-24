(function () {
    'use strict';

    angular
        .module('app')
        .controller('Roupas.IndexController', Controller);

    function Controller($window, RoupasService, FlashService) {
        var vm = this;      

        vm.item.Data ="";
        vm.item.ValorMargem = "";
        
        vm.filter={};
        vm.Lista = []

        vm.listRoupas = function() {
            vm.item.Data = Date.now();
            vm.item.ValorMargem = vm.item.ValorPago*2;
            RoupasService.List(vm.filter).then(function (response) {
                vm.Lista = response;
            })
        }

    }

})();