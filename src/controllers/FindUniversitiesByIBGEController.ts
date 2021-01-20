import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { INTERNAL_SERVER_ERROR } from '../constants';
import BaseController from './BaseController';

import University from '../entities/University';

class FindUniversitiesByIBGEController extends BaseController {
  index = async (req: Request, res: Response): Promise<Response> => {
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

        return this.success(req, res, {
          data: universities
        })
      }

      const universities = await universitiesRepository.find({
        where: { ibge },
      });

      return this.success(req, res, {
        data: universities
      })
    } catch(_) {
      res.status(500);

      return this.error(req, res, {
        message: INTERNAL_SERVER_ERROR
      })
    }
  }
}

export default FindUniversitiesByIBGEController;
