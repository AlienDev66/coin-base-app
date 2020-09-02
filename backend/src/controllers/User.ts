// import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { User } from '../database/entities';

// interface RouteProps {
//   req?: Request;
//   res?: Response;
// }

class UserController {
  private userRepository!: Repository<User>;

  constructor() {
    const userRepository = getRepository(User);

    this.userRepository = userRepository;
  }

  async index() {
    const users = await this.userRepository.find();

    return users;
  }
}

export default UserController;
