<?php

namespace Controllers\Cadastro;

use ___PHPSTORM_HELPERS\object;
use Silex\Application;
use Silex\Route;
use Silex\ControllerProviderInterface;
use Silex\ControllerCollection;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Acl\Exception\Exception;

class Cadastro implements ControllerProviderInterface
{

    public function connect(Application $app)
    {
        $cadastro = new ControllerCollection(new Route());

        /**
         * ROTA QUE BUSCA TODOS OS ESTADOS NA BASE DE DADOS
         */
        $cadastro->get('/buscaEstados', function( Request $request ) use ($app) {
            try {
                return $app->json($app['models']->load('ModelCadastro','buscaEstados'));
            } catch( \Exception $e) {
                return $e->getMessage();
            }
        });
        /**
         * ROTA QUE BUSCA TODAS AS CIDADES NA BASE DE DADOS
         */
        $cadastro->get('/buscaCidades', function( Request $request ) use ($app) {
            try {
                return $app->json($app['models']->load('ModelCadastro','buscaCidades',array($request->get('uf'))));
            } catch( \Exception $e) {
                return $e->getMessage();
            }
        });


        return $cadastro;
    }
}
