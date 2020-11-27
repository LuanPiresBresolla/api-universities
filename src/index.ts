import express from 'express';
import routes from './routes';

import './database/connection';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server started in port 3333 🚀');
});
