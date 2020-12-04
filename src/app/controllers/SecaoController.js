import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import Usuario from '../models/Usuario';

class SessionController {
  async logar(req, res) {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    if (!(await usuario.verificarSenha(senha))) {
      return res.status(401).json({ error: 'Senha Inválida!' });
    }

    const { id, nome } = usuario;
    return res.json({
      user: {
        id,
        nome,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
