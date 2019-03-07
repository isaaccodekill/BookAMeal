import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import app from '../API/app';
import Caterer from '../API/models/caterer';

dotenv.config();
/* eslint-disable no-unused-vars */
const should = chai.should();
/* eslint-enable no-unused-vars */
chai.use(chaiHttp);

// setting create caterer Details

let CatererIdAccessible;

before((done) => {
  Caterer.create({
    name: 'zik',
    email: 'newemail@gmail.com',
    password: 'hashedPassword', // dont try this at home
    phoneNumber: '12345678901',
    restaurant: 'binat foods',
  })
    .then((caterer) => {
      CatererIdAccessible = caterer.id;
      done();
    });
});

after((done) => {
  Caterer.destroy({ where: { email: 'newemail@gmail.com' } })
    .then((res) => {
      done();
    });
});

describe('GET /api/v1/meals', () => {
  it('should return an array of all the meals', (done) => {
    // get jwt token
    const Token = jwt.sign({ id: CatererIdAccessible, isCaterer: true }, process.env.SECRET,
      { expiresIn: 86400 });
    chai.request(app)
      .get('/api/v1/meals')
      .set('Authorization', `Bearer ${Token}`)
      .end((err, res) => {
        res.should.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('meals');
        res.body.status.should.equal('succesful');
        res.body.meals.should.be.a('array');
        done();
      });
  });
});

describe('POST /api/v1/meals', () => {
  it('should succesfully push a meal to the meals array', (done) => {
    const Token = jwt.sign({ id: CatererIdAccessible, isCaterer: true }, process.env.SECRET);
    chai.request(app)
      .post('/api/v1/meals')
      .set('Authorization', `Bearer ${Token}`)
      .send({
        name: 'eba and fish and juice',
        image: 'image url',
        price: 1700,
        calories: 'infinite x 2',
        description: 'ask nosa ionno',
        currency: 'naira',
      })
      .end((err, res) => {
        res.should.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('meal');
        res.body.meal.should.have.property('price');
        res.body.meal.should.have.property('calories');
        res.body.meal.should.have.property('description');
        res.body.meal.should.have.property('currency');
        res.body.meal.should.have.property('image');
        res.body.status.should.equal('successful');
        done();
      });
  });
});

describe('PUT /api/v1/meals/:id', () => {
  it('should succesfully update the meal with the given id', (done) => {
    const Token = jwt.sign({ id: CatererIdAccessible, isCaterer: true }, process.env.SECRET);
    const meal = {
      name: 'eba and snail with crabs',
      image: 'image url',
      price: 1700,
      calories: 'infinite x 2',
      description: 'ask nosa ionno',
      currency: 'naira',
    };
    chai.request(app)
      .put('/api/v1/meals/1')
      .set('Authorization', `Bearer ${Token}`)
      .send(meal)
      .end((err, res) => {
        res.should.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('updatedMeal');
        res.body.status.should.equal('successful');
        done();
      });
  });
});

describe('DELETE /api/v1/meal/:id', () => {
  it('should delete the meal item with the given id', (done) => {
    const Token = jwt.sign({ id: CatererIdAccessible, isCaterer: true }, process.env.SECRET);
    chai.request(app)
      .delete('/api/v1/meals/1')
      .set('Authorization', `Bearer ${Token}`)
      .end((err, res) => {
        res.should.status(200);
        res.body.status.should.be.eql('successful');
        done();
      });
  });
});
