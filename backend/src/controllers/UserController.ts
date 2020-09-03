// import { Request, Response } from 'express';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import UserRepository from '../repositories/UserRepositoty';

interface IFunctionProps {
  request?: Request;
  response?: Response;
}

class UserController {
  async index() {
    try {
      const userRepository = getCustomRepository(UserRepository);

      const users = await userRepository.getAll();

      return { statusCode: 200, content: { data: users } };
    } catch (err) {
      return { statusCode: 400, content: { error: err.message } };
    }
  }

  async create({ request }: IFunctionProps) {
    try {
      const userRepository = getCustomRepository(UserRepository);

      const { name, email, password } = request?.body;

      const userReturnedInSearchByEmail = await userRepository.findByEmail({
        email,
      });

      if (userReturnedInSearchByEmail) {
        return { statusCode: 409, content: { error: 'User already exists!' } };
      }

      const newUserToSave = userRepository.create({
        name,
        email,
        passwordHash: password,
      });

      await userRepository.save(newUserToSave);

      return {
        statusCode: 201,
        content: {
          data: { ...newUserToSave, passwordHash: undefined },
          message: 'User Created!',
        },
      };
    } catch (err) {
      return { statusCode: 400, content: { error: err.message } };
    }
  }
}

export default UserController;