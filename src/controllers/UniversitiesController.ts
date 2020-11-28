import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Universitie from '../entities/Universitie';

class UniversitiesController {
  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const universitiesRepository = getRepository(Universitie);

    const universitie = await universitiesRepository.findOne(id);

    if (!universitie) {
      return res.json({ message: 'Universitie not found' });
    }

    return res.json(universitie);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const universitiesRepository = getRepository(Universitie);

    const universities = await universitiesRepository.find();

    if (!universities) {
      return res.json({ message: 'Universities not found' });
    }

    return res.json(universities);
  }
}

export default UniversitiesController;
