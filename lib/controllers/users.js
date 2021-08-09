import { Router } from 'express';
import User from '../models/User.js';

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
  })

  .put('/:id', async (req, res, next) => {
 
    try {
      const { id } = req.params;
      const newInfo = req.body;
      const user = await User.updateById(id, newInfo);
      res.send(user);
    } catch (error) {
      next(error);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      await User.deleteById(id);
      res.send({ message: 'This user was deleted' });
    } catch (error) {
      next(error);
    }
  });
