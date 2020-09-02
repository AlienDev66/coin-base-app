import 'reflect-metadata';
import express from 'express';

import { typeOrmConnection } from './database';
import routes from './routes';

const app = express();

typeOrmConnection
  .then((database) => {
    app.use(express.json());
    app.use(routes);

    console.log('Database Success', database.name);

    app.listen(3333, () => console.log('server up'));
  })
  .catch((err) => console.log('Database Error', err.message));
