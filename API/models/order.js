import Meal from './meal';

class order {
  constructor(id, quantity, method, address, cost) {
    this.id = id;
    this.meal = new Meal();
    this.quantity = quantity;
    this.method = method;
    this.address = address;
    this.cost = cost;
    this.time = Date.now();
  }
}

export default order;
