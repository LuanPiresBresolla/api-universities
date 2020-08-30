import { Request, Response } from 'express';

import connection from '../database/connection';

class UniversitiesController {
  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const universitie = await connection('universities')
      .where('id', id)
      .first();

    if (!universitie) {
      return res.json({ message: 'Universitie not found' });
    }

    return res.json(universitie);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const universities = await connection('universities');

    if (!universities) {
      return res.json({ message: 'Universities not found' });
    }

    return res.json(universities);
  }

  // async create(req: Request, res: Response): Promise<Response> {}
}

export default UniversitiesController;
