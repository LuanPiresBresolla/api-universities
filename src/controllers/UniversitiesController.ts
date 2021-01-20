import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { INTERNAL_SERVER_ERROR } from '../constants';
import BaseController from './BaseController';

import University from '../entities/University';

class UniversitiesController extends BaseController {
  show = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      const universitiesRepository = getRepository(University);

      const university = await universitiesRepository.findOne(id);

      if (!university) {
        return res.json({ message: 'Universitie not found' });
      }

      return res.json(university);
    } catch(_) {
      res.status(500);

      return this.error(req, res, {
        message: INTERNAL_SERVER_ERROR
      })
    }
  }

  index = async (req: Request, res: Response): Promise<Response> => {
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

        return this.success(req, res, {
          data: universities
        });
      }

      // Buscando todos os registros
      const universities = await universitiesRepository.find();

      return this.success(req, res, {
        data: universities
      });
    } catch(e) {
      console.log(e);
      res.status(500);

      return this.error(req, res, {
        message: INTERNAL_SERVER_ERROR
      })
    }
  }
}

export default UniversitiesController;
