import joi from 'joi';

class CatererAuthValidation {
  static validateCatererSignUp(req, res, next) {
    const schema = joi.object().keys({
      name: joi.string().required(),
      email: joi.string().required(),
      phoneNumber: joi.number().required().min(11),
      password: joi.string().required().min(6),
      restaurant: joi.string().required(),
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

  static validateCatererLogin(req, res, next) {
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


export default CatererAuthValidation;
