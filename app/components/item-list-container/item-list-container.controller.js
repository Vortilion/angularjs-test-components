(function() {
    'use strict';

    angular
        .module('test.components')
        .controller('ItemListContainerController', ItemListContainerController);

    function ItemListContainerController() {
        var vm = this;

        vm.activeItems = [
            {name: 'foo', active: true},
            {name: 'bar', active: true}
        ];

        vm.inactiveItems = [
            {name: 'foo', active: false},
            {name: 'bar', active: false}
        ];

        vm.switchStatus = switchStatus;

        function switchStatus(item) {
            item.active = !item.active;
        }
    }
})();