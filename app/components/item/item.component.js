(function() {
    'use strict';

    angular
        .module('test.components')
        .component('item', {
            bindings: {
                item: '=set',
                onClick: '&'
            },
            controller: function() {},
            controllerAs: 'ctrl',
            template: function($element, $attrs) {
                return '<span><input type="checkbox" ng-click="ctrl.onClick({item: ctrl.item})" ng-checked="ctrl.item.active">&nbsp;<span ng-bind="ctrl.item.name"></span></span>'
            }
        });
})();