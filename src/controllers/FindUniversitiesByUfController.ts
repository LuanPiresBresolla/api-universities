import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Universitie from '../entities/Universitie';

class FindUniversitiesByUfController {
  async index(req: Request, res: Response): Promise<Response> {
    const universitiesRepository = getRepository(Universitie);

    const { uf } = req.query;

    if (!uf) {
      return res.json({ error: 'UF not found' });
    }

    uf.toString().toUpperCase();

    const universities = await universitiesRepository.find({
      where: { uf: uf.toString().toUpperCase() },
    });

    if (!universities) {
      return res.json({ message: 'Universities not found' });
    }

    return res.json(universities);
  }
}

export default FindUniversitiesByUfController;
