import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/UserRepository';
import { compareCryptedData } from '../utils/cryptDecrypt';

interface ICreateSeesion {
  email: string;
  password: string;
}

class SessionController {
  async create({ email, password }: ICreateSeesion) {
    try {
      const userRepository = getCustomRepository(UserRepository);

      const user = await userRepository.findByEmail({ email });

      if (!user) {
        return { statusCode: 400, content: { error: "User doesn't exist!" } };
      }

      const isPasswordMatch = compareCryptedData(user.passwordHash, password);

      if (!isPasswordMatch) {
        return { statusCode: 401, content: { error: 'Incorrect password' } };
      }

      return {
        statusCode: 200,
        content: { data: { ...user, passwordHash: undefined } },
      };
    } catch (err) {
      return {
        statusCode: 400,
        content: { error: err.message },
      };
    }
  }
}

export default SessionController;
