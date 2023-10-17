import { Request, Response } from "express";
import { TechSearchService } from "./techSearchService";
import { STATUS_CODE } from "../../utils/statusCode";
import { CommonError } from "../../utils/CommonError";

class TechSearchController {
  constructor(private techSearchService: any) {}

  async registerTechSearch(req: Request, res: Response) {
    const { technology, city } = req.body;

    try {
      const result = await this.techSearchService.registerTechSearch(technology, city);
      return res.status(STATUS_CODE.OK).json(result);
    } catch (erro: any) {
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
        CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
      );
    }
  }

  async getTopTechnologies(req: Request, res: Response) {
    try {
      const limit = 5;
      const topTechnologies = await this.techSearchService.getTopTechnologies(limit);
      return res.status(STATUS_CODE.OK).json(topTechnologies);
    } catch (erro: any) {
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
        CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
      );
    }
  }

  async getTopCitiesForMostSearchedTech(req: Request, res: Response) {
    try{
    const topCities = await this.techSearchService.getTopCitiesForMostSearchedTech();
    return res.status(STATUS_CODE.OK).json(topCities);
  }catch (erro: any) {
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
      CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
    );
  }
}

async searchTechAndCity(req: Request, res: Response) {
  try {
    const { technology, city } = req.query;

    if (!technology || !city) {
      CommonError.build("Technology and city Not Found", STATUS_CODE.NOT_FOUND)
  
    }

    const count = await this.techSearchService.searchTechAndCity(technology, city);

    return res.status(STATUS_CODE.OK).json({ count });
  } catch (erro: any) {
    CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
  
  }
}
}

export { TechSearchController };