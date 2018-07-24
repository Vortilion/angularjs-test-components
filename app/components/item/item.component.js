(function() {
    'use strict';

    var itemComponent = {
        bindings: {
            item: '=set',
            onClick: '&'
        },
        controller: function() {},
        controllerAs: 'ctrl',
        templateUrl: 'components/item/item.component.html'
    };

    angular
        .module('item.component', [])
        .component('item', itemComponent);
})();