import { Router } from 'express';

import UsuarioController from './app/controllers/UsuarioController';
// instancio as rotas utilizando a classe Router do express
const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ mensagem: 'Olá Mundo' });
});

routes.put('/criarUsuario', UsuarioController.criar);
routes.delete('/deletarUsuario', UsuarioController.deletar);
routes.post('/atualizarUsuario', UsuarioController.atualizar);
routes.get('/listarUsuario', UsuarioController.listar);
routes.post('/buscarUsuario', UsuarioController.buscar);

// exportando as rotas
export default routes;
