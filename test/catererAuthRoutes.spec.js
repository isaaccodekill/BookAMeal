// here we wanna just test that caterer can sign in and sign up
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../API/app';

/* eslint-disable no-unused-vars */
const should = chai.should();
/* eslint-enable no-unused-vars */
chai.use(chaiHttp);

before((done) => {
  app.on('appStarted', () => {
    done();
  });
});

describe('POST /api/v1/caterer/auth/', () => {
  it('/signup should succesfully register a caterer', (done) => {
    const Caterer = {
      name: 'chefZik',
      email: 'myemail',
      password: 'minepassword',
      phoneNumber: '09098987654',
      restaurant: 'God saves',
    };
    chai.request(app)
      .post('/api/v1/caterer/auth/signup')
      .send(Caterer)
      .end((err, res) => {
        res.should.status(200);
        res.body.should.be.a('object');
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('token');
        res.body.message.should.equal('successfull');
        done();
      });
  });
});

describe('POST /api/v1/caterer/auth/', () => {
  it('/login should succesfully login a caterer', (done) => {
    const Caterer = {
      email: 'myemail',
      password: 'minepassword',
    };
    chai.request(app)
      .post('/api/v1/caterer/auth/login')
      .send(Caterer)
      .end((err, res) => {
        res.should.status(200);
        res.body.should.be.a('object');
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('token');
        res.body.message.should.equal('successfull');
        done();
      });
  });
});
