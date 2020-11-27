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

  // async create(req: Request, res: Response): Promise<Response> {
  //   const universitiesRepository = getRepository(Universitie);

  //   const universitiesKnex = await connection('universities');

  //   for (let i = 0; i <= universitiesKnex.length; i++) {
  //     try {
  //       const universitie = universitiesRepository.create(universitiesKnex[i]);

  //       // eslint-disable-next-line no-await-in-loop
  //       await universitiesRepository.save(universitie);
  //     } catch (error) {
  //       console.log('Erro no registro: ', universitiesKnex[i].id);
  //     }
  //   }

  //   return res.json({ ok: true });
  // }
}

export default UniversitiesController;
