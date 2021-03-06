import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import Caterer from '../models/caterer';

dotenv.config();

// import Caterer  Model

class CatererAuth {
  // authentication functions

  static Register(req, res) {
    Caterer.findOne({ where: { email: req.body.email } })
      .then((existingCaterer) => {
        if (existingCaterer) {
          res.status(203).json({
            message: 'Registeration error',
            error: 'A caterer with that email already exists in db',
          });
        } else {
          const hashedPassword = bcrypt.hashSync(req.body.password, 10);
          Caterer.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            phoneNumber: req.body.phoneNumber,
            restaurant: req.body.restaurant,
          })
            .then((caterer) => {
              const token = jwt.sign({ id: caterer.id, isCaterer: true }, process.env.SECRET,
                { expiresIn: 86400 });
              return res.status(200).json({
                message: 'successfull',
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
      });
  }

  static Login(req, res) {
    Caterer.findOne({ where: { email: req.body.email } })
      .then((caterer) => {
        if (!caterer) {
          return res.status(500).json({
            essage: 'unsuccessfull',
            error: 'User not found',
          });
        }
        const passwordIsValid = bcrypt.compareSync(req.body.password, caterer.password);
        if (!passwordIsValid) {
          return res.status(401).json({
            message: 'unsuccessfull',
            token: null,
          });
        }
        const token = jwt.sign({ id: caterer.id, isCaterer: true }, process.env.SECRET,
          { expiresIn: 86400 });
        req.catererId = caterer.id;
        return res.status(200).json({
          message: 'successfull',
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

export default CatererAuth;
