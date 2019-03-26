import joi from 'joi';

class orderValidation {
  static validateorderAddition(req, res, next) {
   
    const schema = joi.object().keys({
      MealId: joi.number().required(),
      UserId: joi.number(),
      address: joi.string().required(),
      method: joi.string().required(),
      quantity: joi.number().required(),
      cost: joi.number().required(),
      resolved: joi.boolean().required(),
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

  static validateOrderUpdate(req, res, next) {
    const schema = joi.object().keys({
      MealId: joi.number().required(),
      UserId: joi.number().required(),
      address: joi.string().required(),
      method: joi.string().required(),
      quantity: joi.number().required(),
      cost: joi.number().required(),
      resolved: joi.boolean().required(),
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


export default orderValidation;
