import express from 'express';
import routes from './routes';

import './database/connection';
import NotFoundRoute from './middlewares/NotFoundRoute';

const app = express();

app.use(express.json());
app.use(routes);
app.use(NotFoundRoute)

app.listen(3333, () => {
  console.log('Server started in port 3333 🚀');
});
