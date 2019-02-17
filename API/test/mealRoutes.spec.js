import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

/* eslint-disable no-unused-vars */
const should = chai.should();
/* eslint-enable no-unused-vars */
chai.use(chaiHttp);

describe('GET /api/v1/meals', () => {
  it('should return an array of all the meals', (done) => {
    chai.request(app)
      .get('/api/v1/meals')
      .end((err, res) => {
        res.should.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
  });
});

describe('POST /api/v1/meals', () => {
  it('should succesfully push a meal to the meals array', (done) => {
    const meal = {
      id: '3',
      name: 'eba and snail and juice',
      image: 'image url',
      price: '1700',
      calories: 'infinite x 2',
      description: 'ask nosa ionno',
      currency: 'naira',
    };
    chai.request(app)
      .post('/api/v1/meals')
      .send(meal)
      .end((err, res) => {
        res.should.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.should.have.property('name');
        res.body.should.have.property('price');
        res.body.should.have.property('calories');
        res.body.should.have.property('description');
        res.body.should.have.property('currency');
        res.body.should.have.property('image');
        done();
      });
  });
});

describe('PUT /api/v1/meals/:id', () => {
  it('should succesfully update the meal with the given id', (done) => {
    const meal = {
      id: '3',
      name: 'eba and snail with crabs',
      image: 'image url',
      price: '1700',
      calories: 'infinite x 2',
      description: 'ask nosa ionno',
      currency: 'naira',
    };
    chai.request(app)
      .put('/api/v1/meals/3')
      .send(meal)
      .end((err, res) => {
        res.should.status(200);
        res.body.should.be.a('object');
        res.body.message.should.be.eql('Meal item updated');
        res.body.updatedMealItem.should.have.property('id');
        res.body.updatedMealItem.should.have.property('name');
        res.body.updatedMealItem.should.have.property('price');
        res.body.updatedMealItem.should.have.property('calories');
        res.body.updatedMealItem.should.have.property('description');
        res.body.updatedMealItem.should.have.property('currency');
        res.body.updatedMealItem.should.have.property('image');
        done();
      });
  });
});

describe('DELETE /api/v1/meal/:id', () => {
  it('should delete the meal item with the given id', (done) => {
    chai.request(app)
      .delete('/api/v1/meals/3')
      .end((err, res) => {
        res.should.status(200);
        res.body.message.should.be.eql('Meal item succefully deleted');
        done();
      });
  });
});
