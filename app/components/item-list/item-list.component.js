(function() {
    'use strict';

    angular
        .module('item-list.component', [])
        .component('itemList', {
            bindings: {
                title: '@',
                items: '=',
                onClick: '&'
            },
            controller: function() {},
            controllerAs: 'ctrl',
            templateUrl: 'components/item-list/item-list.component.html'
        });
})();
