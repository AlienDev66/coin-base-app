import { getCustomRepository } from 'typeorm';

import UserRepository from '../repositories/UserRepository';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

class UserController {
  async index() {
    try {
      const userRepository = getCustomRepository(UserRepository);

      const users = (await userRepository.getAll()).map((currentUser) => ({
        ...currentUser,
        passwordHash: undefined,
      }));

      return { statusCode: 200, content: { data: users } };
    } catch (err) {
      return { statusCode: 400, content: { error: err.message } };
    }
  }

  async create({ name, email, password }: ICreateUser) {
    try {
      const userRepository = getCustomRepository(UserRepository);

      const userReturnedInSearchByEmail = await userRepository.findByEmail({
        email,
      });

      if (userReturnedInSearchByEmail) {
        return { statusCode: 409, content: { error: 'User already exists!' } };
      }

      const newUserSaved = await userRepository.createOne({
        name,
        email,
        password,
      });

      return {
        statusCode: 201,
        content: {
          data: { ...newUserSaved, passwordHash: undefined },
          message: 'User Created!',
        },
      };
    } catch (err) {
      return { statusCode: 400, content: { error: err.message } };
    }
  }
}

export default UserController;
