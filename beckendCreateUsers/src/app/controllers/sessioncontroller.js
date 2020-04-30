import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import * as Yup from 'yup';
import User from '../models/user';
import authConfig from '../../config/auth';

class Sessioncontroller {
  async store(req, res) {
    const schema = Yup.object().shape({

      email: Yup.string().email().required(),
      password: Yup.string().required(),

    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Preencimento incorreto');
    }
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json('User not found');
    }

    const { id, name, password_hash } = user;
    const comparar = await bcrypt.compare(password, password_hash);


    if (!comparar) {
      return res.status(400).json('incorrect password');
    }


    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new Sessioncontroller();
