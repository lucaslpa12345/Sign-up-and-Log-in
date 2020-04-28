import bcrypt from 'bcryptjs';
import * as Yup from 'yup';
import User from '../models/user';

class Usercontroller {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),

    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Preencimento incorreto');
    }


    const userexist = await User.findOne({ where: { email: req.body.email } });

    if (userexist) {
      res.status(400).json('Email em uso');
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({ id, name, email });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email,
      oldpassword: Yup.string().min(6),
      password: Yup.string().mid(6)
        .when('oldpassword', (oldpassword, field) => (oldpassword ? field.required() : field)),
      confirmpassword: yup.string().when('password', (password, field) => {
        password ? field.require().oneOf([Yup.ref('password')]) : field;
      }),

    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Preencimento incorreto');
    }

    const { email, oldpassword } = req.body;
    const user = await User.findOne({ where: { id: req.userId } });
    console.log(user);
    if (email !== user.email) {
      const userexist = await User.findOne({ where: { email } });


      if (userexist) {
        res.status(400).json('Email already in use');
      }
    }
    const comparar = await bcrypt.compare(oldpassword, user.password_hash);
    if (!comparar) {
      return res.status(401).json('old passwords dont match');
    }

    const { id, name } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new Usercontroller();
