import Meal from '../models/meal';


class mealServices {
  static getAllmeals(req, res) {
    return Meal.findAll({ where: { CatererId: req.caterer.id } })
      .then((meals) => {
        res.status(200).json({
          status: 'succesful',
          meals,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 'unsuccesful',
          error,
        });
      });
  }

  static createAndSave(req, res) {
    req.body.CatererId = req.caterer.id;
    return Meal.create(req.body)
      .then((meal) => {
        res.status(200).json({
          status: 'successful',
          meal,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 'unsuccesful',
          error,
        });
      });
  }

  static findMealById(req, res) {
    return Meal.findByPk(req.params.id)
      .then((foundMeal) => {
        res.status(200).json({
          status: 'successful',
          foundMeal,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 'unsuccesful',
          error,
        });
      });
  }

  static findMealByIdAndUpdate(req, res) {
    req.body.CatererId = req.caterer.id;
    Meal.update(req.body, { where: { id: req.params.id } })
      .then((updatedMeal) => {
        res.status(200).json({
          status: 'successful',
          updatedMeal,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 'unsuccesful',
          error,
        });
      });
  }

  static findMealByIdAndDelete(req, res) {
    return Meal.destroy({ where: { id: req.params.id } })
      .then((deletedMeal) => {
        res.status(200).json({
          status: 'successful',
          deletedMeal,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 'unsuccesful',
          error,
        });
      });
  }
}


export default mealServices;
