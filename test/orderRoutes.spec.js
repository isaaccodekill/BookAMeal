import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../API/app';

/* eslint-disable no-unused-vars */
const should = chai.should();
/* eslint-enable no-unused-vars */

chai.use(chaiHttp);

describe('GET /api/v1/orders', () => {
  it('should return an array of numbers', (done) => {
    chai.request(app)
      .get('/api/v1/orders')
      .end((err, res) => {
        res.should.status(200);
        res.body.should.be.a('array');
        res.body.length.should.equal(0);
        done();
      });
  });
});

describe('POST /api/v1/orders', () => {
  it('should create and save a new order', (done) => {
    const body = {
      meal: {
        id: '3',
        name: 'eba and snail and juice',
        image: 'image url',
        price: '1700',
        calories: 'infinite x 2',
        description: 'ask nosa ionno',
        currency: 'naira',
      },
      id: '1',
      quantity: 2,
      method: 'takeout',
      address: 'address',
    };


    chai.request(app)
      .post('/api/v1/orders')
      .send(body)
      .end((err, res) => {
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

describe('PUT /api/v1/orders/:id', () => {
  it('it should update the order with the id', (done) => {
    const body = {
      meal: {
        id: '3',
        name: 'eba and meat and juice',
        image: 'image url',
        price: '1900',
        calories: 'infinite x 2',
        description: 'ask nosa ionno',
        currency: 'naira',
      },
      id: '1',
      quantity: 2,
      method: 'takeout',
      address: 'address',
    };

    chai.request(app)
      .put('/api/v1/orders/1')
      .send(body)
      .end((err, res) => {
        res.should.status(200);
        res.body.message.should.equal('The order was updated');
        done();
      });
  });
});

describe('DELETE /api/v1/orders/:id', () => {
  it('should delete the found order', (done) => {
    chai.request(app)
      .delete('/api/v1/orders/1')
      .end((err, res) => {
        res.should.status(200);
        res.body.message.should.equal('An order was deleted');
        done();
      });
  });
});
