import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';

import './database/connection';
import { AppError } from './errors/AppError';
import { NotFoundRoute } from './middlewares/NotFoundRoute';

const app = express();

app.use(express.json());
app.use(routes);
app.use(NotFoundRoute);

// eslint-disable-next-line
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res
    .status(500)
    .json({ message: `Internal server error - ${err.message}` });
});

app.listen(process.env.PORT || 3333, () => {
  console.log('Server started in port 3333 🚀');
});
