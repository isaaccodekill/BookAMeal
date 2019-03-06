import Meal from '../models/meal';


class mealServices {
  static getAllmeals(req, res) {
    return Meal.findAll()
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
    return Meal.update(req.body, { where: { id: req.params.id } })
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
