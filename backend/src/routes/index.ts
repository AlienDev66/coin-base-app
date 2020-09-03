import { Router } from 'express';

import { UserController } from '../controllers';

const userController = new UserController();

const routes = Router();

routes.get('/users', async (_, res) => {
  const userResponse = await userController.index();

  return res.status(userResponse.statusCode).json(userResponse.content);
});

routes.post('/users', async (req, res) => {
  const userResponse = await userController.create({ request: req });

  return res.status(userResponse.statusCode).json(userResponse.content);
});

export default routes;
