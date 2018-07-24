(function() {
    'use strict';

    var itemListComponent = {
        bindings: {
            title: '@',
            items: '=',
            onClick: '&'
        },
        controller: function() {},
        controllerAs: 'ctrl',
        templateUrl: 'components/item-list/item-list.component.html'
    };

    angular
        .module('item-list.component', [])
        .component('itemList', itemListComponent);
})();
