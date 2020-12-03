import Usuario from '../models/Usuario';

class UsuarioController {
  /**
   * Método de criar um usuário
   * @param {*} req
   * @param {*} res
   */
  async criar(req, res) {
    const userExists = await Usuario.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Usuário Já cadastrado!' });
    }
    const { id, name, email, provider } = await Usuario.create(req.body);
    return res.json({ id, name, email, provider });
  }

  /**
   * Método de deletar um usuário
   * @param {*} req
   * @param {*} res
   */
  async deletar(req, res) {
    const { id } = req.body;

    const user = await Usuario.findByPk(id);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado!' });
    }

    await user.destroy(user);

    return res.json({
      'id': `${req.body.id}`,
      'msg': 'Usuário Deletado!',
    });
  }

  /**
   * Método de atualizar um usuário
   * @param {*} req
   * @param {*} res
   */
  async atualizar(req, res) {
    const { email } = req.body;

    const user = await Usuario.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await Usuario.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'Usuário já existe' });
      }
    }

    const { id, name } = await user.update(req.body);

    return res.json({ id, name });
  }

  /**
   * Método de listar os usuários
   * @param {*} req
   * @param {*} res
   */
  async listar(req, res) {
    const users = await Usuario.findAll({
      attributes: ['id', 'name', 'email'],
    });
    return res.json(users);
  }

  /**
   * Método de busca de um usuário pelo id
   * @param {*} req
   * @param {*} res
   */
  async buscar(req, res) {
    const { id } = req.body;

    const usuario = await Usuario.findByPk(id);
    return res.json(usuario);
  }
}

export default new UsuarioController();
