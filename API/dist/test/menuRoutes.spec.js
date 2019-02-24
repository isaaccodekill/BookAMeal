"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
var should = _chai.default.should();
/* eslint-enable no-unused-vars */


_chai.default.use(_chaiHttp.default);

describe('GET /api/v1/menu', function () {
  it('should return menu Object containing meal options array', function (done) {
    _chai.default.request(_app.default).get('/api/v1/menu').end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.mealOptions.should.be.a('array');
      done();
    });
  });
});
describe('POST /api/v1/menu', function () {
  it('it should not send a post request with an empty mealOptions array', function (done) {
    var menu = {
      chef: 'isaac',
      mealOptions: []
    };

    _chai.default.request(_app.default).post('/api/v1/menu').send(menu).end(function (err, res) {
      res.should.have.status(201);
      res.body.should.equal('Cannot create an empty menu');
      done();
    });
  });
  it('should create a menu', function (done) {
    var menu = {
      chef: 'isaac',
      mealOptions: [{
        id: '3',
        name: 'eba and snail and juice',
        image: 'image url',
        price: '1700',
        calories: 'infinite x 2',
        description: 'ask nosa ionno',
        currency: 'naira'
      }, {
        id: '2',
        name: 'eba and fish and juice',
        image: 'image url',
        price: '1900',
        calories: 'infinite x 2',
        description: 'ask nosa ',
        currency: 'naira'
      }, {
        id: '1',
        name: 'eba and fish and juice',
        image: 'image url',
        price: '1900',
        calories: 'infinite x 2',
        description: 'ask nosa ',
        currency: 'naira'
      }]
    };

    _chai.default.request(_app.default).post('/api/v1/menu').send(menu).end(function (err, res) {
      res.should.status(201);
      res.body.message.should.equal('menu succesfully created');
      done();
    });
  });
});
describe('PUT /api/v1/menu', function () {
  it('should successfuly update the menu', function (done) {
    var body = {
      mealOptions: [{
        id: '2',
        name: 'eba and fish and juice',
        image: 'image url',
        price: '1900',
        calories: 'infinite x 2',
        description: 'ask nosa ',
        currency: 'naira'
      }, {
        id: '1',
        name: 'eba and fish and juice',
        image: 'image url',
        price: '1900',
        calories: 'infinite x 2',
        description: 'ask nosa ',
        currency: 'naira'
      }]
    };

    _chai.default.request(_app.default).put('/api/v1/menu').send(body).end(function (err, res) {
      //   console.log(res)
      res.should.status(201);
      res.body.should.equal('The menu was edited');
      done();
    });
  });
});