(function() {
    'use strict';

    angular.module('myApp', ['firebase', 'ngAnimate', 'ngRoute'])

    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'mainCtrl'
            })
            .when('/about', {
                templateUrl: 'templates/about.html'
            })
            .otherwise({ redirectTo: '/'});
    });
})();
