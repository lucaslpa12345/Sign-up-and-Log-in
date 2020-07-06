import { DataTypes, Sequelize, Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import databaseconfig from '../../config/database';

const sequelize = new Sequelize(databaseconfig);

class User extends Model {
}

User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL,

  },
  {
    sequelize,
    timestamps: true,

  },

);
User.addHook('beforeSave', async (user) => {
  if (user.password) {
    user.password_hash = await bcrypt.hash(user.password, 10);
  }
});



export default User;
