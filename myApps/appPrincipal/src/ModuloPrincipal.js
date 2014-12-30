var appPrincipal = angular.module('appPrincipal',['ngRoute', 'ngResource'])

appPrincipal
    .config(
    [
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/cadastro', {
                    templateUrl:'../myApps/appPrincipal/templates/cadastro.html'
                })
                .otherwise({redirectTo:'/cadastro'});
        }
    ]
);