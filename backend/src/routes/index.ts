import { Router } from 'express';

import { UserController } from '../controllers';

const userController = new UserController();

const routes = Router();

routes.get('/users', async (req, res) => {
  const a = req.body;

  console.log(a);

  const response = await userController.index();

  return res.json(response);
});

export default routes;
