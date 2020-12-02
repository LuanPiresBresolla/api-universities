import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import University from '../entities/University';

class FindUniversitiesByUfController {
  async index(req: Request, res: Response): Promise<Response> {
    const universitiesRepository = getRepository(University);

    const { uf, page, records = 10 } = req.query;

    if (!uf) {
      return res.json({ error: 'UF not found' });
    }

    uf.toString().toUpperCase();

    // Verificando quantos registros existem
    const count = await universitiesRepository.count({
      where: { uf: uf.toString().toUpperCase() },
    });
    res.header('X-Total-Count', String(count));

    // Realizando paginação
    if (page) {
      const findPage = Number(page);
      const findRecords = Number(records);

      const universities = await universitiesRepository.find({
        where: { uf: uf.toString().toUpperCase() },
        skip: (findPage - 1) * findRecords,
        take: findRecords,
      });

      return res.json(universities);
    }

    // Buscando todos os registros
    const universities = await universitiesRepository.find({
      where: { uf: uf.toString().toUpperCase() },
    });

    return res.json(universities);
  }
}

export default FindUniversitiesByUfController;
