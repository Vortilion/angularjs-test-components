(function() {
    'use strict';

    angular
        .module('test.components')
        .component('item', {
            bindings: {
                item: '=set',
                onClick: '&'
            },
            controllerAs: 'ctrl',
            templateUrl: 'components/item/item.component.html'
        });
})();