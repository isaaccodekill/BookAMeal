import joi from 'joi';

class MealValidation {
  static validateMealAddition(req, res, next) {
    const schema = joi.object().keys({
      name: joi.string().required(),
      price: joi.number().required(),
      calories: joi.string().required(),
      description: joi.string().required(),
      currency: joi.string().required(),
      image: joi.string().required(),
      CatererId: joi.number(),
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

  static validateMealUpdate(req, res, next) {
    const schema = joi.object().keys({
      name: joi.string().required(),
      price: joi.number().required(),
      calories: joi.string().required(),
      description: joi.string().required(),
      currency: joi.string().required(),
      image: joi.string().required(),
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


export default MealValidation;
