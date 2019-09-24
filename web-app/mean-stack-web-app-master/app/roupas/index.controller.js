(function () {
    'use strict';

    angular
        .module('app')
        .controller('Roupas.IndexController', Controller);

    function Controller($window, RoupasService, FlashService) {
        var vm = this;      

        vm.item = {};
        vm.item.Data ="";
        vm.item.ValorMargem = "";
        

        vm.saveRoupas = function() {
            debugger;
            vm.item.Data = Date.now();
            vm.item.ValorMargem = vm.item.ValorPago*2;
            RoupasService.Create(vm.item).then(function () {
                FlashService.Success('roupa adicionada');
                vm.IsEdit = true;
            })
        }
        

    }

})();