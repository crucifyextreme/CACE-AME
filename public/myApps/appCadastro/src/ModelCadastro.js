appCadastro
    .factory('ModelCadastro', function($http) {

        return {

            buscaEstados: function() {
                return $http.get('cace/buscaEstados');
            },

            buscaCidades: function(estado) {
                return $http.get('cace/buscaCidades', {
                    params:estado
                });
            }
        }
    });