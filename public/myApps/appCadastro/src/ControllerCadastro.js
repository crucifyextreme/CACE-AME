appCadastro.
    controller('ControllerCadastro',
    [
        '$scope','ModelCadastro','$timeout','$routeParams',
        function($scope, ModelCadastro,$timeout,$routeParams) {

            $scope.iniciaDados = function() {

            }
            /**
             * BUSCA ESTADO
             */
            $scope.buscaEstado = function(regiao) {
                if(regiao != '') {
                    ModelCadastro.buscaEstados()
                        .success(function(data) {
                            $scope.estados = data;
                        })
                        .error(function() {
                            alert('Ops, ocorreu um erro no sistema');
                        });
                } else {
                    $scope.estados = null;
                }
            }
            /**
             * BUSCA CIDADE DE ACORDO O ESTADO SELECIONADO
             */
            $scope.consultaCidade = function(estado) {
                if(estado != '') {

                    ModelCadastro.buscaCidades(angular.fromJson({uf:estado}))
                        .success(function(data) {
                            $scope.cidades = data;
                        })
                        .error(function() {
                            alert('Ops, ocorreu um erro no sistema');
                        });
                } else {
                    $scope.cidades = null;
                }
            }
        }
    ]
)