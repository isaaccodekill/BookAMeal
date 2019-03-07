import chai from 'chai';

import chaiHttp from 'chai-http';

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import app from '../API/app';


import Caterer from '../API/models/caterer';
import User from '../API/models/user';

dotenv.config();

let CatererIdAccessible;
let UserIdAccessible;

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

after((done) => {
  Caterer.destroy({ where: { email: 'newemail2@gmail.com' } })
    .then((res) => {
      User.destroy({ where: { email: 'newuser@gmail.com' } })
      done();
    });
});

/* eslint-disable no-unused-vars */
const should = chai.should();
/* eslint-enable no-unused-vars */

// create Payloads

chai.use(chaiHttp);

describe('GET /api/v1/menu', () => {
  it('should return menu Object containing meal options array', (done) => {
    // get jwt token
    const Token = jwt.sign({ id: UserIdAccessible, isUser: true }, process.env.SECRET,
      { expiresIn: 86400 });
    chai.request(app)
      .get('/api/v1/menu')
      .set('Authorization', `Bearer ${Token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.status.should.equal('successful');
        done();
      });
  });
});

describe('POST /api/v1/menu', () => {
  it('it should succesfully create a menu', (done) => {
    // get jwt token
    const Token = jwt.sign({ id: CatererIdAccessible, isCaterer: true }, process.env.SECRET,
      { expiresIn: 86400 });
    const body = { MenuItems: [1, 2, 3, 5] };
    chai.request(app)
      .post('/api/v1/menu')
      .set('Authorization', `Bearer ${Token}`)
      .send(body)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status');
        res.body.status.should.equal('successful');
        res.body.menu.should.be.a('object');
        done();
      });
  });
});

describe('PUT /api/v1/menu', () => {
  it('should successfuly update the menu', (done) => {
    // get jwt token
    const Token = jwt.sign({ id: CatererIdAccessible, isCaterer: true }, process.env.SECRET,
      { expiresIn: 86400 });
    const body = { MenuItems: [1, 2, 3, 8] };
    chai.request(app)
      .put('/api/v1/menu')
      .set('Authorization', `Bearer ${Token}`)
      .send(body)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status');
        res.body.should.have.property('message');
        res.body.message.should.equal('menu was edited');
        res.body.status.should.equal('successful');
        res.body.menu.should.be.a('array');
        done();
      });
  });
});
