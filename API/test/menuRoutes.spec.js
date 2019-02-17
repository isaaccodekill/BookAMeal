import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

/* eslint-disable no-unused-vars */
const should = chai.should();
/* eslint-enable no-unused-vars */


chai.use(chaiHttp);

describe('GET /api/v1/menu', () => {
  it('should return menu Object containing meal options array', (done) => {
    chai.request(app)
      .get('/api/v1/menu')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.mealOptions.should.be.a('array');
        done();
      });
  });
});

describe('POST /api/v1/menu', () => {
  it('it should not send a post request with an empty mealOptions array', (done) => {
    const menu = {
      chef: 'isaac',
      mealOptions: [],
    };

    chai.request(app)
      .post('/api/v1/menu')
      .send(menu)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.equal('Cannot create an empty menu');
        done();
      });
  });

  it('should create a menu', (done) => {
    const menu = {
      chef: 'isaac',
      mealOptions: [
        {
          id: '3',
          name: 'eba and snail and juice',
          image: 'image url',
          price: '1700',
          calories: 'infinite x 2',
          description: 'ask nosa ionno',
          currency: 'naira',
        },
        {
          id: '2',
          name: 'eba and fish and juice',
          image: 'image url',
          price: '1900',
          calories: 'infinite x 2',
          description: 'ask nosa ',
          currency: 'naira',
        },
        {
          id: '1',
          name: 'eba and fish and juice',
          image: 'image url',
          price: '1900',
          calories: 'infinite x 2',
          description: 'ask nosa ',
          currency: 'naira',
        },
      ],
    };
    chai.request(app)
      .post('/api/v1/menu')
      .send(menu)
      .end((err, res) => {
        res.should.status(201);
        res.body.message.should.equal('menu succesfully created');
        done();
      });
  });
});

describe('PUT /api/v1/menu', () => {
  it('should successfuly update the menu', (done) => {
    const body = {
      mealOptions: [
        {
          id: '2',
          name: 'eba and fish and juice',
          image: 'image url',
          price: '1900',
          calories: 'infinite x 2',
          description: 'ask nosa ',
          currency: 'naira',
        },
        {
          id: '1',
          name: 'eba and fish and juice',
          image: 'image url',
          price: '1900',
          calories: 'infinite x 2',
          description: 'ask nosa ',
          currency: 'naira',
        },
      ],
    };
    chai.request(app)
      .put('/api/v1/menu')
      .send(body)
      .end((err, res) => {
        //   console.log(res)
        res.should.status(201);
        res.body.should.equal('The menu was edited');
        done();
      });
  });
});
