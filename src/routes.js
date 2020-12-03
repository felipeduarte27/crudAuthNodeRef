import { Router } from 'express';

import UsuarioController from './app/controllers/UsuarioController';
// instancio as rotas utilizando a classe Router do express
const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ mensagem: 'Olá Mundo' });
});

routes.post('/criarUsuario', UsuarioController.criar);
routes.put('/deletarUsuario', UsuarioController.deletar);
routes.delete('/atualizarUsuario', UsuarioController.atualizar);
routes.get('/listarUsuario', UsuarioController.listar);
routes.get('/buscarUsuario', UsuarioController.buscar);

// exportando as rotas
export default routes;
