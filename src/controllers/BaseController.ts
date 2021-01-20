import { Request, Response } from 'express';
import {
  ControllerErrorPayload,
  ControllerSuccessPayload,
} from '../typing/controller';

export default abstract class BaseController {
  error = (req: Request, res: Response, payload: ControllerErrorPayload) => {
    return res.send({
      ...payload,
      code: res.statusCode,
    });
  };

  success = <T>(
    req: Request,
    res: Response,
    payload: ControllerSuccessPayload<T>,
  ) => {
    return res.send({
      ...payload,
      code: res.statusCode,
    });
  };
}
