import { Router } from 'express';

import UsuarioController from './app/controllers/UsuarioController';
import SecaoController from './app/controllers/SecaoController';
import authMiddleware from './app/middlewares/auth';

// instancio as rotas utilizando a classe Router do express
const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ mensagem: 'Olá a Aplicação CrudAuthNodeRef' });
});
routes.put('/criarUsuario', UsuarioController.criar);
routes.post('/logar', SecaoController.logar);

routes.use(authMiddleware);

routes.delete('/deletarUsuario', UsuarioController.deletar);
routes.post('/atualizarUsuario', UsuarioController.atualizar);
routes.get('/listarUsuario', UsuarioController.listar);
routes.post('/buscarUsuario', UsuarioController.buscar);

// exportando as rotas
export default routes;
