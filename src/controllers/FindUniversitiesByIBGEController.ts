import { Request, Response } from 'express';

import connection from '../database/connection';

class FindUniversitiesByIBGEController {
  async index(req: Request, res: Response): Promise<Response> {
    const { id: ibge } = req.params;

    const universities = await connection('universities').where(
      'ibge',
      String(ibge),
    );

    if (!universities) {
      return res.json({ message: 'Universities not found' });
    }

    return res.json(universities);
  }
}

export default FindUniversitiesByIBGEController;
