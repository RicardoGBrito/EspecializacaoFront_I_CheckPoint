import express from 'express';
import App from './axios-api.jsx';
import {insertPaginas,updatePaginas,selectPaginas,selectPedidoId} from '../controllers/pedidos.js'
const router = express.Router();

//RETORNA TODOS OS PEDIDOS
router.get('/api ', async (req,res,next) => {
    let paginas = await selectPaginas();
    res.status(200).json({
        paginas
    });
});

//RETONA OS DADOS DE pagina
router.get('/api', async (req,res,next) => {
    let paginas = await selectPaginasId();
    res.status(200).json({
        paginas
    });
});

//RETORNA OS DADOS  POR PARAMETRO 
router.get('./api', (req, res, next) => {
    const id = req.params.id_paginas;
    res.status(200).send({

        message: 'Usando o GET para ler',
        id: id
    });
});

// ADICIONA 

router.put('/api', (req, res, next) => {
    if(req.body && !req.body.id){
        res.status(400).json({
            erro: {
                mensagem: error.mensagem
            }
        });
    }
    updatePagina(req.body);
    res.status(200).send({
        mensagem: 'Usando o PATCH dentro da rota'
    });
});

//DELETA 
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota'
    });
});


export default router;