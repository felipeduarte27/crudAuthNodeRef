import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

// Classe usuário com um método estático que chama o construtor da classe Model do Sequelize
// Passando os atributos da classe e a instância do sequelize passada como parâmetro
class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.VIRTUAL,
        senha_hash: Sequelize.STRING,
      },
      { sequelize }
    );

    // Hook do sequelize para antes de salvar o usuário encriptar a senha dele utilizando a biblioteca bcrypt
    this.addHook('beforeSave', async (usuario) => {
      if (usuario.senha) {
        usuario.senha_hash = await bcrypt.hash(usuario.senha, 8);
      }
    });
  }

  verificarSenha(senha) {
    return bcrypt.compare(senha, this.senha_hash);
  }
}

export default Usuario;
