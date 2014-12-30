appCadastro
    .factory('ModelCadastro', function($http) {

        return {

            buscaEstados: function() {
                return $http.get('cace/buscaEstados');
            },

            buscaNomeEstado:function(siglaEstado) {
                return $http.get('cace/buscaNomeEstado', {
                    params:siglaEstado
                });
            },

            buscaCidades: function(estado) {
                return $http.get('cace/buscaCidades', {
                    params:estado
                });
            },

            buscaCep: function(cep) {
                return $http.get('http://cep.correiocontrol.com.br/'+cep+'.json');
            }
        }
    });