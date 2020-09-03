import { Response, Request } from 'express';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/UserRepositoty';

interface SessionControllerProps {
  request?: Request;
  response?: Response;
}

class SessionController {
  async create({ request }: SessionControllerProps) {
    try {
      const userRepository = getCustomRepository(UserRepository);

      const { email } = request?.body;

      const user = await userRepository.findByEmail({ email });

      if (!user) {
        return { statusCode: 401, content: { error: "User doesn't exists!" } };
      }
    } catch (err) {}
  }
}

export default SessionController;
