(function() {
    'use strict';

    angular
        .module('test.components')
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
