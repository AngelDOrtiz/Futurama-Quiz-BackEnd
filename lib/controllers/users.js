import { Router } from 'express';
import User from '../models/User';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const user = await User.INSERT(req.body);
      res.send(user); 
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
 
    try {
      const { id } = req.params;
      const user = await User.getById(id);
      res.send(user);
    } catch (error) {
      next(error);
    }
  });
