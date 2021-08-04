import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import University from '../entities/University';
import { AppError } from '../errors/AppError';

class FindUniversitiesByIBGEController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const universitiesRepository = getRepository(University);

      const { id: ibge } = req.params;
      const { page, records = 10 } = req.query;

      // Verificando quantos registros existem
      const count = await universitiesRepository.count({
        where: { ibge },
      });
      res.header('X-Total-Count', String(count));

      // Realizando paginação
      if (page) {
        const findPage = Number(page);
        const findRecords = Number(records);

        const universities = await universitiesRepository.find({
          where: { ibge },
          skip: (findPage - 1) * findRecords,
          take: findRecords,
        });

        return res.json(universities);
      }

      const universities = await universitiesRepository.find({
        where: { ibge },
      });

      return res.json(universities);
    } catch (error) {
      throw new AppError(
        'Error a fetch universities. Contact the service administrator',
      );
    }
  }
}

export { FindUniversitiesByIBGEController };
