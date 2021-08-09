import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import User from '../lib/models/User.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a new user', async () => {

    const user = {
      username: 'Blob',
      password: '1234,',
      scores: 0,
    };

    const res = await request(app).post('/api/v1/users').send(user);
    expect(res.body).toEqual({ id: '1', ...user });
  });

  it('gets a user by id', async () => {

    const blob = {
      username: 'Blob',
      password: '1234,',
      scores: 0,
    };
    const user = await User.INSERT(blob);

    const res = await request(app).get(`/api/v1/users/${user.id}`);
    expect(res.body).toEqual(user);
  });
});
