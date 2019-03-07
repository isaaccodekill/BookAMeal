import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/user';

dotenv.config();

// import User Model

class UserAuth {
  // authentication functions

  static Register(req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    User.create({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
    })
      .then((user) => {
        const token = jwt.sign({ id: user.id, isUser: true }, process.env.SECRET,
          { expiresIn: 86400 });
        return res.status(200).json({
          message: 'User Registered',
          token,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          message: 'unsucessfull',
          error,
        });
      });
  }

  static Login(req, res) {
    User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (!user) {
          return res.status(500).json({
            message: 'unsuccessfull',
            error: 'User not found',
          });
        }
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
          return res.status(401).json({
            message: 'Wrong password',
            token: null,
          });
        }
        const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 86400 });
        return res.status(200).json({
          message: 'User Signed In',
          token,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          message: 'unsuccessfull',
          error,
        });
      });
  }
}

export default UserAuth;
