import { Request, Response, NextFunction } from 'express';

export function NotFoundRoute(req: Request, res: Response, next: NextFunction) {
  res.status(404).send({
    message: 'Route not found',
  });

  next();
}
