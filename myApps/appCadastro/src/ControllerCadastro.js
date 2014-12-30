appCadastro.
    controller('ControllerCadastro',
    [
        '$scope','ModelCadastro','$timeout','$routeParams',
        function($scope, ModelCadastro,$timeout,$routeParams) {

            $scope.iniciaDados = function() {
                $scope.carregando = 'Informe';
                $scope.carregando_cidade = 'Informe';
            }
            /**
             * BUSCA ESTADO
             */
            $scope.buscaEstado = function(regiao) {
                $scope.carregando = 'carregando ...';
                if(regiao != '') {
                    ModelCadastro.buscaEstados()
                        .success(function(data) {
                            $scope.estados = data;
                            $scope.carregando = 'Informe';
                        })
                        .error(function() {
                            alert('Ops, ocorreu um erro no sistema');
                        });
                } else {
                    $scope.carregando = 'Informe';
                }
            }
            /**
             * BUSCA CIDADE DE ACORDO O ESTADO SELECIONADO
             */
            $scope.consultaCidade = function(estado) {

                if(estado != '') {
                    $scope.carregando_cidade = 'carregando ...';
                    ModelCadastro.buscaCidades(angular.fromJson({uf:estado}))
                        .success(function(data) {
                            $scope.cidades = data;
                            $scope.carregando_cidade = 'Informe';
                        })
                        .error(function() {
                            alert('Ops, ocorreu um erro no sistema');
                        });
                } else {
                    $scope.carregando_cidade = 'Informe';
                }
            }
            /**
             * CONSULTA CEP
             */
            $scope.consultaCep = function(cep) {
                /**
                 * LIMPA TODOS OS CAMPOS QUANDO EFETUAR A CONSULTA NO CEP E HABILITA OS INPUTS DESABILITADOS
                 */
                $scope.disabilitaInputs = false;
                $scope.carregando = "";
                $scope.carregando_cidade = "";
                $scope.item = "";
                $scope.item = {
                    CEP: cep
                }

                ModelCadastro.buscaCep(cep)
                    .success(function(data) {
                        ModelCadastro.buscaNomeEstado(angular.fromJson({uf:data.uf}))
                            .success(function(estado) {

                                if(estado.length != undefined) {
                                    $scope.item = {
                                        ENDERECO:data.logradouro,
                                        BAIRRO:data.bairro,
                                        REGIAO: estado[0].regiao,
                                        CEP: data.cep
                                    }
                                    $scope.carregando = estado[0].nome;
                                    $scope.carregando_cidade = data.localidade;
                                    $scope.disabilitaInputs = true;

                                } else {
                                    $scope.disabilitaInputs = false;
                                    $scope.carregando = "";
                                    $scope.carregando_cidade = "";
                                    $scope.item = "";
                                    $scope.item = {
                                        CEP: cep
                                    }

                                }
                            })



                    })
                    .error(function() {

                    });
            }
        }
    ]
)