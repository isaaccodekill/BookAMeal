"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
var should = _chai.default.should();
/* eslint-enable no-unused-vars */


_chai.default.use(_chaiHttp.default);

describe('GET /api/v1/orders', function () {
  it('should return an array of numbers', function (done) {
    _chai.default.request(_app.default).get('/api/v1/orders').end(function (err, res) {
      res.should.status(200);
      res.body.should.be.a('array');
      res.body.length.should.equal(0);
      done();
    });
  });
});
describe('POST /api/v1/orders', function () {
  it('should create and save a new order', function (done) {
    var body = {
      meal: {
        id: '3',
        name: 'eba and snail and juice',
        image: 'image url',
        price: '1700',
        calories: 'infinite x 2',
        description: 'ask nosa ionno',
        currency: 'naira'
      },
      id: '1',
      quantity: 2,
      method: 'takeout',
      address: 'address'
    };

    _chai.default.request(_app.default).post('/api/v1/orders').send(body).end(function (err, res) {
      res.should.status(200);
      res.body.should.be.a('object');
      res.body.message.should.be.eql('An order was created');
      res.body.newOrder.meal.should.be.a('object');
      res.body.newOrder.should.have.property('id');
      res.body.newOrder.should.have.property('address');
      done();
    });
  });
});
describe('PUT /api/v1/orders/:id', function () {
  it('it should update the order with the id', function (done) {
    var body = {
      meal: {
        id: '3',
        name: 'eba and meat and juice',
        image: 'image url',
        price: '1900',
        calories: 'infinite x 2',
        description: 'ask nosa ionno',
        currency: 'naira'
      },
      id: '1',
      quantity: 2,
      method: 'takeout',
      address: 'address'
    };

    _chai.default.request(_app.default).put('/api/v1/orders/1').send(body).end(function (err, res) {
      res.should.status(200);
      res.body.message.should.equal('The order was updated');
      done();
    });
  });
});
describe('DELETE /api/v1/orders/:id', function () {
  it('should delete the found order', function (done) {
    _chai.default.request(_app.default).delete('/api/v1/orders/1').end(function (err, res) {
      res.should.status(200);
      res.body.message.should.equal('An order was deleted');
      done();
    });
  });
});