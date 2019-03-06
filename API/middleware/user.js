import joi from 'joi';

class UserAuthValidation {
  static validateUserSignUp(req, res, next) {
    const schema = joi.object().keys({
      name: joi.string().required(),
      email: joi.string().required(),
      phoneNumber: joi.number().required().min(11),
      password: joi.string().required().min(6),
    });
    joi.validate(req.body, schema, (error, value) => {
      if (error !== null) {
        res.status(400).json({
          error: error.message || error.details[0].message,
        });
      }
    });
    next();
  }

  static validateUserLogin(req, res, next) {
    const schema = joi.object().keys({
      email: joi.string().required(),
      password: joi.string().required(),
    });
    joi.validate(req.body, schema, (error, value) => {
      if (error !== null) {
        res.status(400).json({
          error: error.message || error.details[0].message,
        });
      }
    });
    next();
  }
}


export default UserAuthValidation;

