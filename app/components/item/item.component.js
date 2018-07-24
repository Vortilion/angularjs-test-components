(function() {
    'use strict';

    angular
        .module('item.component', [])
        .component('item', {
            bindings: {
                item: '=set',
                onClick: '&'
            },
            controllerAs: 'ctrl',
            templateUrl: 'components/item/item.component.html'
        });
})();