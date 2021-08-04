import { Request, Response, NextFunction } from 'express';

export default function notFoundRoute(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(404).send({
    message: 'Route not found',
  });

  next();
}
