var App = angular.module('intro-angular', ['ui.router'])


    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/params");

        $stateProvider
            .state('home', {
                url: "/",
                controller: 'HomeController',
                templateUrl:'../views/home/home.html'
            })
            .state('incrementer', {
                url: "/incrementer",
                controller:'IncrementerController',
                templateUrl:'../views/incrementer/incrementer.html'
            })
            .state('params', {
                url: "/params",
                controller:'paramsController',
                templateUrl:'../views/params/params.html'
            });
    })
    .service('Settings', function() {
        this.values = {
            increment: 1,
            limmax: 50,
            limmin: -50
        };
    })
    

