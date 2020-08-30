import { createConnection, ConnectionOptions } from 'typeorm';

const defaultConnection: ConnectionOptions = {
  type: 'sqlite',
  database: './src/database/data.sqlite',
  key: 'default',
  name: 'default',
  entities: [],
};

export const typeOrmConnection = createConnection(defaultConnection);
