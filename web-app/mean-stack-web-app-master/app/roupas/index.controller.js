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
        vm.IsEdit = false;

        vm.saveRoupas = function() {
            debugger;
            if(!vm.IsEdit){
                vm.item.Data = Date.now();
                vm.item.ValorMargem = vm.item.ValorPago*2;
                RoupasService.Create(vm.item).then(function () {
                    vm.IsEdit = true;
                })
            }
            else{
                RoupasService.Update(vm.item).then(function () {
                    vm.IsEdit = true;
                })
            }
        }

        vm.initController = function(){
            debugger;
            if(!vm.IsEdit){
                vm.IsEdit = false;
                return;
            }
            else{
                RoupasService.Get(vm.item.Code).then(function (response) {
                    vm.item = response;
                })
            }
        }

    }

})();