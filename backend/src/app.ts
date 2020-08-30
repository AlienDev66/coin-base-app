import 'reflect-metadata';
import express from 'express';

import { typeOrmConnection } from './database';

const app = express();

typeOrmConnection
  .then((database) => console.log('Database Success', database.name))
  .catch((err) => console.log('Database Error', err.message));

app.get('/', (_, response) => response.json({ message: 'Server is up' }));

export default app;
