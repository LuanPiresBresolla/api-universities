import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Universitie from '../entities/Universitie';

class FindUniversitiesByIBGEController {
  async index(req: Request, res: Response): Promise<Response> {
    const universitiesRepository = getRepository(Universitie);

    const { id: ibge } = req.params;

    const universities = await universitiesRepository.find({
      where: { ibge },
    });

    if (!universities) {
      return res.json({ message: 'Universities not found' });
    }

    return res.json(universities);
  }
}

export default FindUniversitiesByIBGEController;
