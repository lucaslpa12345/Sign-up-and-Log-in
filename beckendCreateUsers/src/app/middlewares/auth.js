import jwt from 'jsonwebtoken';
import authConf from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json('Token not received');
  }

  const [, token] = authHeader.split(' ');

  try {
    await jwt.verify(token, authConf.secret, (err, result) => {
      if (err) {
        return res.status(401).json('Invalid token');
      }
      if (result) {
        req.userId = result.id;

        return next();
      }
    });
  } catch (err) {
    return res.status(401).json('Invalid token');
  }
};
