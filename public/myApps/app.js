angular.module('appPrincipal', ['ngRoute', 'ngResource']);
angular.module('appCadastro', ['ngRoute', 'ngResource']);

angular.module('MainApp',
    [
        'appPrincipal',
        'appCadastro'
    ]
);
