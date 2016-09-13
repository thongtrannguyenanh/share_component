(function () {
    'use strict';

    angular.module('shareComponent')
        .controller('child1Ctrl', child1Ctrl);

    function child1Ctrl() {
        var vm = this;

        this.$onInit = function () {
            vm.data = this.parent.child1Data;
            vm.ExternalClick = this.parent.child1ExternalClick;
        };

    };
})();