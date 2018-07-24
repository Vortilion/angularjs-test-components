(function() {
    'use strict';

    angular
        .module('item-list-container.component', [])
        .component('itemListContainer', {
            controller: 'ItemListContainerController',
            controllerAs: 'ctrl',
            templateUrl: 'components/item-list-container/item-list-container.component.html'
        });
})();
