(function () {
    'use strict';

    var child1Component = {
        templateUrl: './components/child1/child1.html',
        controller: 'child1Ctrl as vm',
        require: {
            'parent': '^parentComponent'
        }
    };

    angular.module('shareComponent')
        .component('child1Component', child1Component)

})();