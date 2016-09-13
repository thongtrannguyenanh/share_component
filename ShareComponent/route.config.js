(function () {
    'use strict';

    angular.module('shareComponent')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('view1', {
            url: "/Page1",
            templateUrl: "app/page1/page1.html"
        })
        .state('view2', {
            url: "/Page2",
            templateUrl: "app/page2/page2.html"
        })
    }])
}
)();