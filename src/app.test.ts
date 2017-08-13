import * as app from './app';
import * as request from 'supertest';

describe('test routes return 200s', () => {

  test('home page should load', (done) => {
    request(app).get('/').then((response:any) => {
      expect(response.status).toBe(200);
      return done();
    });
  });

  test('category page should load', (done) => {
    request(app).get('/category').then((response) => {
      expect(response.status).toBe(200);
      return done();
    });
  });
});
