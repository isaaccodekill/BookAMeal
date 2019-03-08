// here we wanna just test that caterer can sign in and sign up
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../API/app';

/* eslint-disable no-unused-vars */
const should = chai.should();
/* eslint-enable no-unused-vars */
chai.use(chaiHttp);
describe('POST /api/v1/auth/', () => {
  it('/signup should succesfully register a user', (done) => {
    const User = {
      name: 'userZik',
      email: 'myemail',
      password: 'minepassword',
      phoneNumber: '09098876544',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(User)
      .end((err, res) => {
        res.should.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('token');
        res.body.message.should.equal('User Registered');
        done();
      });
  });
});

describe('POST /api/v1/auth/', () => {
  it('/login should succesfully login a user', (done) => {
    const User = {
      email: 'myemail',
      password: 'minepassword',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(User)
      .end((err, res) => {
        res.should.status(200);
        res.body.should.be.a('object');
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('token');
        res.body.message.should.equal('User Signed In');
        done();
      });
  });
});
