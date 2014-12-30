<?php

class ModelCadastro
{

    protected  $app;

    public function __construct(\Silex\Application $app)
    {
        $this->app = $app;
    }

    public function buscaEstados()
    {
        return $this->app["db"]->fetchAll('SELECT *
                                            FROM tb_estados');
    }
    public function buscaCidades($uf)
    {
        return $this->app["db"]->fetchAll('SELECT *
                                            FROM tb_cidades WHERE uf = ? ORDER BY nome ASC', $uf);
    }

} 