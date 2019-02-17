import Menu from '../models/menu';
import Meal from '../models/meal';

class menuService {
  constructor(chef) {
    this.menu = new Menu();
    this.menu.chef = chef;
    this.menu.date = new Date().toLocaleDateString();
    this.menu.mealOptions = [];
  }

  getMenu() {
    const availableMenu = this.menu;
    return availableMenu;
  }

  createAndSaveMenu(body) {
    if (!body.mealOptions || body.mealOptions.length === 0) {
      return 'Cannot create an empty menu';
    }
    const newMeals = body.mealOptions.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.price = meal.price;
      newMeal.description = meal.description;
      newMeal.name = meal.name;
      newMeal.image = meal.image;
      newMeal.currency = meal.currency;

      return newMeal;
    });

    this.menu.mealOptions = newMeals;
    this.menu.chef = body.chef;
    this.menu.date = new Date().toLocaleDateString();

    return { message: 'menu succesfully created' };
  }

  editMenu(body) {
    const newMeals = body.mealOptions.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.price = meal.price;
      newMeal.description = meal.description;
      newMeal.name = meal.name;
      newMeal.image = newMeal.image;
      newMeal.currency = meal.currency;
      return newMeal;
    });

    this.menu.mealOptions = newMeals;
    return 'The menu was edited';
  }
}

export default menuService;
