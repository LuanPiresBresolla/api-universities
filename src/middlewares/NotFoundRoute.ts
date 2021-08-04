import { Request, Response, NextFunction } from 'express';

export function notFoundRoute(req: Request, res: Response, next: NextFunction) {
  res.status(404).send({
    message: 'Route not found',
  });

  next();
}
