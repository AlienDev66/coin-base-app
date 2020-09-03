import { EntityRepository, Repository } from 'typeorm';
import { User } from '../database/entities';

interface IFindByEmail {
  email: string;
}

@EntityRepository(User)
class UserRepository extends Repository<User> {
  findByEmail({ email }: IFindByEmail) {
    return this.findOne({ where: { email } });
  }

  getAll() {
    return this.find();
  }
}

export default UserRepository;
