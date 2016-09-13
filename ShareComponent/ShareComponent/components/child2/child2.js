(function () {
    'use strict';

    var child2Component = {
        templateUrl: './components/child2/child2.html',
        controller: 'child2Ctrl as vm',
        require: {
            'parent': '^parentComponent'
        }
    };

    angular.module('shareComponent')
        .component('child2Component', child2Component)

})();