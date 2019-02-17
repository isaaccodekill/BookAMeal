import Meal from '../models/meal';


class mealServices {
  constructor() {
    this.meals = [];
  }

  getAllmeals() {
    return this.meals;
  }

  createAndSave(body) {
    if (this.meals.findIndex(x => x.id === body.id || x.name === body.name) > -1) {
      return 'Meal already exists in database';
    }
    const newMeal = new Meal();
    newMeal.id = body.id;
    newMeal.name = body.name;
    newMeal.image = body.image;
    newMeal.price = body.price;
    newMeal.currency = body.currency;
    newMeal.calories = body.calories;
    newMeal.description = body.description;

    this.meals.push(newMeal);
    return newMeal;
  }

  findMealById(id) {
    const index = this.meals.findIndex(mealItem => mealItem.id === id);
    return this.meals[index];
  }

  findMealByIdAndUpdate(id, body) {
    const foundmealItem = this.findMealById(id);
    const updatedMealItem = new Meal();
    updatedMealItem.id = body.id;
    updatedMealItem.name = body.name;
    updatedMealItem.image = body.image;
    updatedMealItem.price = body.price;
    updatedMealItem.currency = body.currency;
    updatedMealItem.calories = body.calories;
    updatedMealItem.description = body.description;
    const index = this.meals.findIndex(x => x.id === foundmealItem.id);
    this.meals[index] = updatedMealItem;
    return { message: 'Meal item updated', updatedMealItem };
  }

  findMealByIdAndDelete(id) {
    const foundmealItem = this.findMealById(id);
    const index = this.meals.findIndex(x => x.id === id);
    this.meals.splice(index, 1);
    return { message: 'Meal item succefully deleted', foundmealItem };
  }
}


export default mealServices;
