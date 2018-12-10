process.env.NODE_ENV = 'test';

let Colleges = require('./app/models/index');

//Подключаем dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./app/index.js');
let should = chai.should();

chai.use(chaiHttp);
//Наш основной блок
describe('Colleges', () => {
  describe('/GET colleges', () => {
      it('it should GET all the colleges', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });
});