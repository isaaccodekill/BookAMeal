import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import app from '../API/app';
import User from '../API/models/user';
import Caterer from '../API/models/caterer';

dotenv.config();

/* eslint-disable no-unused-vars */
const should = chai.should();
/* eslint-enable no-unused-vars */

let UserIdAccessible;
let CatererId;

before((done) => {
  User.create({
    name: 'zikUser',
    email: 'newuser@gmail.com',
    password: 'hashedPassword', // dont try this at home
    phoneNumber: '12345678901',
  })
    .then((user) => {
      UserIdAccessible = user.id;
      Caterer.create({
        name: 'zikosis',
        email: 'newemail2@gmail.com',
        password: 'hashedPassword', // dont try this at home
        phoneNumber: '12345678901',
        restaurant: 'binat foods',
      })
        .then((caterer) => {
          CatererId = caterer.id;
          done();
        });
    });
});
after((done) => {
  User.destroy({ where: { email: 'newuser@gmail.com' } });
  done();
});


chai.use(chaiHttp);

describe('GET /api/v1/userActions/getAllCaterers', () => {
  it('should return an array of caterers', (done) => {
    const Token = jwt.sign({ id: UserIdAccessible, isUser: true }, process.env.SECRET,
      { expiresIn: 86400 });
    chai.request(app)
      .get('/api/v1/userActions/getAllCaterers')
      .set('Authorization', `Bearer ${Token}`)
      .end((err, res) => {
        res.should.status(200);
        res.body.should.have.property('status');
        res.body.status.should.equal('successfull');
        res.body.should.have.property('Caterers');
        res.body.Caterers.should.be.a('array');
        done();
      });
  });
});

describe('POST /api/v1/userActions/saveCaterer', () => {
  it('should create and save a new order', (done) => {
    const Token = jwt.sign({ id: UserIdAccessible, isUser: true }, process.env.SECRET,
      { expiresIn: 86400 });
    chai.request(app)
      .post('/api/v1/userActions/saveCaterer')
      .set('Authorization', `Bearer ${Token}`)
      .send({
        savedCaterers: CatererId,
      })
      .end((err, res) => {
        res.should.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.status.should.equal('successful');
        res.body.should.have.property('message');
        res.body.message.should.equal('caterer saved');
        done();
      });
  });
});

describe('GET /api/v1/userActions/getOrderhistory', () => {
  it('should all of a users old orders', (done) => {
    const Token = jwt.sign({ id: UserIdAccessible, isUser: true }, process.env.SECRET,
      { expiresIn: 86400 });
    chai.request(app)
      .get('/api/v1/userActions/getOrderhistory')
      .set('Authorization', `Bearer ${Token}`)
      .end((err, res) => {
        res.should.status(200);
        res.body.should.have.property('status');
        res.body.status.should.equal('successfull');
        res.body.should.have.property('orders');
        res.body.orders.should.be.a('array');
        done();
      });
  });
});


describe('DELETE /api/v1/userActions/deleteSavedCaterer/:id', () => {
  it('should delete the saved Caterer', (done) => {
    const Token = jwt.sign({ id: UserIdAccessible, isUser: true }, process.env.SECRET,
      { expiresIn: 86400 });
    chai.request(app)
      .post(`/api/v1/userActions/deleteSavedCaterer/${CatererId}`)
      .set('Authorization', `Bearer ${Token}`)
      .end((err, res) => {
        res.should.status(200);
        res.body.should.have.property('status');
        res.body.status.should.equal('successful');
        res.body.should.have.property('message');
        res.body.message.should.equal('caterer deleted');
        done();
      });
  });
})


