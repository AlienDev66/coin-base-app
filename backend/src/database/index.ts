import { createConnection, ConnectionOptions } from 'typeorm';

import { Card, User } from './entities';

const defaultConnection: ConnectionOptions = {
  type: 'sqlite',
  database: './src/database/database.sqlite',
  key: 'default',
  name: 'default',
  synchronize: true,
  // logging: true,
  entities: [User, Card],
};

export const typeOrmConnection = createConnection(defaultConnection);
