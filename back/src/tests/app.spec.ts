import request from 'supertest';
import express, { Express } from 'express';
import routes from '../routes/agence.routes';

// créer un objet de type Express.
const app: Express = express();
// routes
app.use(routes)

/** tester endpoint / */
describe('GET / endpoint', () => {
    describe('GET /', () => {
      it('should get 404', (done) => {
        request(app).get('/').expect(404, done);
      });
    });
});

/** tester endpoint /agences */
describe("GET /agences endpoint", () => {
  it("get agences request", async () => {
    const result = await request(app).get("/agences")
    expect(JSON.parse(result.text).length).toEqual(5);
    //expect(result.statusCode).toEqual(200);
  });
});