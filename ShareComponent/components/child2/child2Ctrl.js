(function () {
    'use strict';

    angular.module('shareComponent')
        .controller('child2Ctrl', child2Ctrl);

    function child2Ctrl() {
        var vm = this;
        vm.data;

        this.$onInit = function () {
            vm.data = this.parent.child2Data;
        };
    };
})();