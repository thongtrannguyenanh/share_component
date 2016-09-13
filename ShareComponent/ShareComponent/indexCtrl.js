(function () {
    'use strict';

    angular.module('shareComponent')
        .controller('indexCtrl', indexCtrl);

    function indexCtrl() {
        var vm = this;
        vm.child1ExternalClick = child1ExternalClick;

        function child1ExternalClick()
        {
            alert('Hi');
        }
    };
})();