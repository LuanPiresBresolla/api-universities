import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import University from '../entities/University';

class FindUniversitiesByIBGEController {
  async index(req: Request, res: Response): Promise<Response> {
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
  }
}

export default FindUniversitiesByIBGEController;
