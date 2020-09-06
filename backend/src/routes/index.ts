import { Router } from 'express';

import { UserController, SessionController } from '../controllers';

const userController = new UserController();
const sessionController = new SessionController();

const routes = Router();

routes.get('/users', async (_, response) => {
  const userResponse = await userController.index();

  return response.status(userResponse.statusCode).json(userResponse.content);
});

routes.post('/users', async (request, response) => {
  const { name, password, email } = request?.body;

  const userResponse = await userController.create({ name, password, email });

  return response.status(userResponse.statusCode).json(userResponse.content);
});

routes.post('/sessions', async (request, response) => {
  const { email, password } = request?.body;

  const sessionResponse = await sessionController.create({ email, password });

  return response
    .status(sessionResponse?.statusCode)
    .json(sessionResponse?.content);
});

export default routes;
