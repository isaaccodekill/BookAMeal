"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
var should = _chai.default.should();
/* eslint-enable no-unused-vars */


_chai.default.use(_chaiHttp.default);

describe('GET /api/v1/meals', function () {
  it('should return an array of all the meals', function (done) {
    _chai.default.request(_app.default).get('/api/v1/meals').end(function (err, res) {
      res.should.status(200);
      res.body.should.be.a('array');
      res.body.length.should.be.eql(0);
      done();
    });
  });
});
describe('POST /api/v1/meals', function () {
  it('should succesfully push a meal to the meals array', function (done) {
    var meal = {
      id: '3',
      name: 'eba and snail and juice',
      image: 'image url',
      price: '1700',
      calories: 'infinite x 2',
      description: 'ask nosa ionno',
      currency: 'naira'
    };

    _chai.default.request(_app.default).post('/api/v1/meals').send(meal).end(function (err, res) {
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
describe('PUT /api/v1/meals/:id', function () {
  it('should succesfully update the meal with the given id', function (done) {
    var meal = {
      id: '3',
      name: 'eba and snail with crabs',
      image: 'image url',
      price: '1700',
      calories: 'infinite x 2',
      description: 'ask nosa ionno',
      currency: 'naira'
    };

    _chai.default.request(_app.default).put('/api/v1/meals/3').send(meal).end(function (err, res) {
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
describe('DELETE /api/v1/meal/:id', function () {
  it('should delete the meal item with the given id', function (done) {
    _chai.default.request(_app.default).delete('/api/v1/meals/3').end(function (err, res) {
      res.should.status(200);
      res.body.message.should.be.eql('Meal item succefully deleted');
      done();
    });
  });
});