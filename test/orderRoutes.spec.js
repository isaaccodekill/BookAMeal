import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import app from '../API/app';
import Caterer from '../API/models/caterer';
import User from '../API/models/user';
import Meal from '../API/models/meal';

dotenv.config();

/* eslint-disable no-unused-vars */
const should = chai.should();
/* eslint-enable no-unused-vars */

let CatererIdAccessible;
let UserIdAccessible;
let validMealId;
let OrderId;

before((done) => {
  Caterer.create({
    name: 'zikosis',
    email: 'newemail2@gmail.com',
    password: 'hashedPassword', // dont try this at home
    phoneNumber: '12345678901',
    restaurant: 'binat foods',
  })
    .then((caterer) => {
      CatererIdAccessible = caterer.id;
      Meal.create({
        name: 'eba and fish and juice',
        image: 'image url',
        price: 1700,
        calories: 'infinite x 2',
        description: 'ask nosa ionno',
        currency: 'naira',
      })
        .then((meal) => {
          validMealId = meal.id;
          User.create({
            name: 'zikUser',
            email: 'newuser@gmail.com',
            password: 'hashedPassword', // dont try this at home
            phoneNumber: '12345678901',
          })
            .then((user) => {
              UserIdAccessible = user.id;
              done();
            });
        });
    });
});

after((done) => {
  Caterer.destroy({ where: { email: 'newemail2@gmail.com' } })
    .then(() => {
      User.destroy({ where: { email: 'newuser@gmail.com' } });
      Meal.destroy({ where: { id: validMealId } });
      done();
    });
});


chai.use(chaiHttp);

describe('GET /api/v1/orders', () => {
  it('should return an array of Orders', (done) => {
    const Token = jwt.sign({ id: CatererIdAccessible, isCaterer: true }, process.env.SECRET,
      { expiresIn: 86400 });
    chai.request(app)
      .get('/api/v1/orders')
      .set('Authorization', `Bearer ${Token}`)
      .end((err, res) => {
        res.should.status(200);
        res.body.should.have.property('status');
        res.body.status.should.equal('successful');
        done();
      });
  });
});

describe('POST /api/v1/orders', () => {
  it('should add a caterer to user\'s favourites', (done) => {
    const Token = jwt.sign({ id: UserIdAccessible, isUser: true }, process.env.SECRET,
      { expiresIn: 86400 });
    chai.request(app)
      .post('/api/v1/orders')
      .set('Authorization', `Bearer ${Token}`)
      .send({
        cost: 2000,
        MealId: validMealId,
        quantity: 2,
        method: 'takeout',
        address: 'address',
        resolved: false,
      })
      .end((err, res) => {
        OrderId = res.body.newOrder.id;
        res.should.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.status.should.be.eql('successful');
        res.body.should.have.property('newOrder');
        res.body.newOrder.should.be.a('object');
        done();
      });
  });
});

describe('PUT /api/v1/orders/:id', () => {
  it('it should update the order with the id', (done) => {
    const Token = jwt.sign({ id: UserIdAccessible, isUser: true }, process.env.SECRET,
      { expiresIn: 86400 });
    const body = {
      cost: 2000,
      MealId: validMealId,
      quantity: 2,
      method: 'takeout',
      address: 'address',
      resolved: 'false',
      UserId: UserIdAccessible,
    };

    chai.request(app)
      .put(`/api/v1/orders/${OrderId}`)
      .set('Authorization', `Bearer ${Token}`)
      .send(body)
      .end((err, res) => {
        res.should.status(200);
        res.body.should.have.property('status');
        res.body.status.should.equal('successful');
        res.body.should.have.property('updatedOrder');
        res.body.updatedOrder.should.be.a('array');
        done();
      });
  });
});

describe('DELETE /api/v1/orders/:id', () => {
  it('should delete the found order', (done) => {
    const Token = jwt.sign({ id: UserIdAccessible, isUser: true }, process.env.SECRET,
      { expiresIn: 86400 });
    chai.request(app)
      .delete(`/api/v1/orders/${OrderId}`)
      .set('Authorization', `Bearer ${Token}`)
      .end((err, res) => {
        res.should.status(200);
        res.body.should.have.property('status');
        res.body.status.should.equal('successful');
        res.body.should.have.property('deletedOrder');
        done();
      });
  });
});
