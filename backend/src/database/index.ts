import { createConnection, ConnectionOptions } from 'typeorm';

import { User } from './entities';

const defaultConnection: ConnectionOptions = {
  type: 'sqlite',
  database: './src/database/database.sqlite',
  key: 'default',
  name: 'default',
  synchronize: true,
  // logging: true,
  entities: [User],
};

export const typeOrmConnection = createConnection(defaultConnection);
