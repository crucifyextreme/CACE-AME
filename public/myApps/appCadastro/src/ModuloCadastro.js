var appCadastro = angular.module('appCadastro',['ngRoute', 'ngResource'])

appCadastro
    .config(
    [
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/novoCadastro', {
                    templateUrl:'../myApps/appCadastro/templates/novoCadastro.html'
                })
                .otherwise({redirectTo:'/cadastro'});
        }
    ]
);
