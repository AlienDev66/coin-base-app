import { EntityRepository, Repository } from 'typeorm';
import { User } from '../database/entities';

interface IFindByEmail {
  email: string;
}

interface ICreateOne {
  email: string;
  name: string;
  password: string;
}

@EntityRepository(User)
class UserRepository extends Repository<User> {
  findByEmail({ email }: IFindByEmail) {
    return this.findOne({ where: { email } });
  }

  getAll() {
    return this.find();
  }

  createOne({ name, email, password: passwordHash }: ICreateOne) {
    const newUserToSave = this.create({
      name,
      email,
      passwordHash,
    });

    return this.save(newUserToSave);
  }
}

export default UserRepository;
