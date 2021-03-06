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
      name: Yup.string().min(3),
      email: Yup.string().email(),
      oldpassword: Yup.string().min(6),
      password: Yup.string().min(6)
        .when('oldpassword', (oldpassword, field) => (oldpassword ? field.required() : field)),

      confirmpassword: Yup.string()
        .when('password', (password, field) => (password ? field.required().oneOf([Yup.ref('password')]) : field)),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json('Preencimento incorreto');
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


  async showUsers(req, res) {
    const Users = await User.findAll();

    function filtrar(item) {
      const name = {
        id: item.id,
        name: item.name,
        email: item.email,
      };
      return name;
    }

    const tudo = Users.map((item) => filtrar(item));

    res.send(tudo);
  }


  async deleteUser(req, res) {
    const user = await User.destroy({ where: { id: req.headers.id } });

    if (!user) {
      return res.status(400).json('ocorreu um erro ao deletar usuário');
    }

    return res.status(200).json('Usuário deletado');
  }
}

export default new Usercontroller();
