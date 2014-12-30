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
         * ROTA PRINCIPAL.
         */
        $cadastro->get('/', function( Request $request ) use ($app) {
            return "Controller Cadastro Executado";
        });


        return $cadastro;
    }
}
