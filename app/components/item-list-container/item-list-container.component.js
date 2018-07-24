(function() {
    'use strict';

    var itemListContainerComponent = {
        controller: 'ItemListContainerController',
        controllerAs: 'ctrl',
        templateUrl: 'components/item-list-container/item-list-container.component.html'
    };

    angular
        .module('item-list-container.component', [])
        .component('itemListContainer', itemListContainerComponent);
})();
