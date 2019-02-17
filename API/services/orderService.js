import Meal from '../models/meal';
import Order from '../models/order';

class orderServices {
  constructor() {
    this.orders = [];
  }

  getOrders() {
    return this.orders;
  }

  createAndSaveOrder(body) {
    const newMeal = new Meal();
    newMeal.id = body.meal.id;
    newMeal.name = body.meal.name;
    newMeal.price = body.meal.price;
    newMeal.description = body.meal.description;
    newMeal.currency = body.meal.currency;
    newMeal.calories = body.meal.calories;

    const newOrder = new Order();
    newOrder.id = body.id;
    newOrder.meal = newMeal;
    newOrder.quantity = body.quantity;
    newOrder.cost = newOrder.meal.price * newOrder.quantity;
    newOrder.method = body.method;
    newOrder.address = body.address;

    this.orders.push(newOrder);
    return { message: 'An order was created', newOrder };
  }

  findOrderById(id) {
    const index = this.orders.findIndex(order => order.id === id);
    return this.orders[index];
  }

  findOrderByIdAndUpdate(id, body) {
    const foundOrder = this.findOrderById(id);
    const newMeal = new Meal();
    newMeal.id = body.meal.id;
    newMeal.name = body.meal.name;
    newMeal.price = body.meal.price;
    newMeal.description = body.meal.description;
    newMeal.currency = body.meal.currency;
    newMeal.calories = body.meal.calories;

    const updatedOrder = new Order();
    updatedOrder.id = id;
    updatedOrder.meal = newMeal;
    updatedOrder.quantity = body.quantity;
    updatedOrder.cost = updatedOrder.meal.price * updatedOrder.quantity;
    updatedOrder.method = body.method;
    updatedOrder.address = body.address;

    const index = this.orders.findIndex(x => x.id === foundOrder.id);
    this.orders[index] = updatedOrder;
    return { message: 'The order was updated', updatedOrder };
  }

  findOrderByIdAndDelete(id) {
    const foundOrder = this.findOrderById(id);
    const index = this.orders.findIndex(x => x.id === foundOrder.id);
    this.orders.splice(index, 1);
    return {message: 'An order was deleted' };
  }
}

// note for id let the id be the position in the array in wwhich they belong
// or make it a random number

export default orderServices;
