import express from 'express';
import routes from './routes';
// Arquivo que vai carregar todos os models e fazer a conexão com o banco
import './database';

// Instanciei o servidor utilizando o express e disse que vou utilizar as rotas e os middlewares
class App {
  constructor() {
    // instanciou o servidor usando o express
    this.server = express();
    // chamada de métodos
    this.middlewares();
    this.routes();
  }

  // digo que o servidor vai utilizar middlewares no formato json
  middlewares() {
    this.server.use(express.json());
  }

  // digo que o servidor vai utilizar as rotas definidas no arquivo de rotas
  routes() {
    this.server.use(routes);
  }
}

// exporto a aplicação para ser utilizada em outro arquivo
export default new App().server;
