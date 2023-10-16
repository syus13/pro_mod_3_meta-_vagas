import { Request, Response } from 'express';
import TechSearchService from './techSearchService';
import { STATUS_CODE } from '../../utils/statusCode';
import { CommonError } from '../../utils/CommonError';

class TechSearchController {
    constructor(private techSearchService: TechSearchService) {}

  async findTopSearchedTechnologies(req: Request, res: Response) {
    try {
      const technologies = await this.techSearchService.findTopSearchedTechnologies();
      res.status(STATUS_CODE.OK).json(technologies)
    } catch (erro: any) {
      res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
  }

  async findTopSearchedCities(req: Request, res: Response) {
    try {
      const { technology } = req.params;
      const cities = await this.techSearchService.findTopSearchedCities(technology);
      res.status(STATUS_CODE.OK).json(cities)
    } catch (erro: any) {
        res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR))
    }
  }
}

export default TechSearchController;
