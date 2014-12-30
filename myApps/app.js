angular.module('appPrincipal', ['ngRoute', 'ngResource']);
angular.module('appCadastro', ['ngRoute', 'ngResource','ui.mask']);

angular.module('MainApp',
    [
        'appPrincipal',
        'appCadastro'
    ]
);
