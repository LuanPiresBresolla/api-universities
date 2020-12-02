import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import University from '../entities/University';

class UniversitiesController {
  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const universitiesRepository = getRepository(University);

    const university = await universitiesRepository.findOne(id);

    if (!university) {
      return res.json({ message: 'Universitie not found' });
    }

    return res.json(university);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const universitiesRepository = getRepository(University);
    const { page, records = 10 } = req.query;

    // Verificando quantos registros existem
    const count = await universitiesRepository.count();
    res.header('X-Total-Count', String(count));

    // Realizando paginação
    if (page) {
      const findPage = Number(page);
      const findRecords = Number(records);

      const universities = await universitiesRepository.find({
        skip: (findPage - 1) * findRecords,
        take: findRecords,
      });

      return res.json(universities);
    }

    // Buscando todos os registros
    const universities = await universitiesRepository.find();

    return res.json(universities);
  }
}

export default UniversitiesController;
