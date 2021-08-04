import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import University from '../entities/University';
import { AppError } from '../errors/AppError';

class UniversitiesController {
  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const universitiesRepository = getRepository(University);

      const university = await universitiesRepository.findOne(id);

      if (!university) {
        return res.json({ message: 'Universitie not found' });
      }

      return res.json(university);
    } catch (error) {
      throw new AppError(
        'Error a fetch university. Contact the service administrator',
      );
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    try {
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
    } catch (error) {
      throw new AppError(
        'Error a fetch universities. Contact the service administrator',
      );
    }
  }
}

export { UniversitiesController };
