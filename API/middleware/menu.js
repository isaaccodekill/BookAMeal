import joi from 'joi';

class MealValidation {
  static validateMenuCreate(req, res, next) {
    const schema = joi.object().keys({
      // chefId: joi.number().required(),
      MenuItems: joi.array().items(joi.number()),
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

  static validateMenuEdit(req, res, next) {
    const schema = joi.object().keys({
    // chefId: joi.number().required(),
      MenuItems: joi.array().items(joi.number()),
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
