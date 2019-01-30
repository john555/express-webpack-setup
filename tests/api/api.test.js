import supertest from 'supertest';
import api from '../../src/api';

describe('api', () => {
  let req;
  beforeEach(()=>{
    req = supertest(api);
  });
  it('smoke test', done => {
    req.get('/')
      .expect(200, done);
  });
})
