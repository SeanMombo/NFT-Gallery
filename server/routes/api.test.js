import request from 'supertest';
import express from 'express';
import { apiRouter } from './api.js';

const app = new express();
app.use('/', apiRouter);

describe('Testing Routes', function () {

  test('responds to /nft/:address', async () => {
    const res = await request(app).get('/nft/jacob.eth'); 
    expect(res.statusCode).toBe(200);
    expect(res.header['content-type']).toBe("application/json; charset=utf-8");
    expect(res._body).toHaveLength(10);
    expect(res._body[0].collectionAddress).toEqual('0xca21d4228cdcc68d4e23807e5e370c07577dd152')
  });

});