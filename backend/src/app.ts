import 'reflect-metadata';

import path from 'path';
import express from 'express';

import { typeOrmConnection } from './database';
import routes from './routes';

const app = express();

typeOrmConnection
  .then((database) => console.log('Database Success', database.name))
  .catch((err) => console.log('Database Error', err.message));

app.use(
  '/files',
  express.static(path.join(__dirname, '..', 'tmp', 'assets', 'svg-cards'))
);

app.use(express.json());
app.use(routes);

export default app;
