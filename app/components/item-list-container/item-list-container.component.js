(function() {
    'use strict';

    angular
        .module('test.components')
        .component('itemListContainer', {
            controller: 'ItemListContainerController',
            controllerAs: 'ctrl',
            templateUrl: 'components/item-list-container/item-list-container.html'
        });
})();