(function () {
    'use strict';
    var parentComponent =
    {
        templateUrl: './components/parent/parent.html',
        bindings: {
            parentData: '=',
            child1Data: '=',
            child2Data: '=',
            child1ExternalClick: '&'
        },
        controller: 'parentCtrl as vm'
    }

    angular.module("shareComponent")
      .component("parentComponent", parentComponent
    );

})();