import { Request, Response } from 'express';

import connection from '../database/connection';

class FindUniversitiesByUfController {
  async index(req: Request, res: Response): Promise<Response> {
    const { uf } = req.query;

    const universities = await connection('universities').where(
      'uf',
      String(uf),
    );

    if (!universities) {
      return res.json({ message: 'Universities not found' });
    }

    return res.json(universities);
  }
}

export default FindUniversitiesByUfController;
