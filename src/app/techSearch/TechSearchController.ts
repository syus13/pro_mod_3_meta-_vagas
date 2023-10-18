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

async getTechSearchResults(req: Request, res: Response) {
  try {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const perPage = req.query.perPage ? parseInt(req.query.perPage as string) : 10;
    const startIndex = (page - 1) * perPage;

    const results = await this.techSearchService.searchTech(req.query, startIndex, perPage);

    return res.status(STATUS_CODE.OK).json(results);
  } catch (error: any) {
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
      CommonError.build(error.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
    );
  }
}

async getTop5Technologies(req: Request, res: Response) {
  try {
    const topTechnologies = await this.techSearchService.getTop5Technologies();
    return res.status(STATUS_CODE.OK).json(topTechnologies);
  } catch (erro: any) {
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
      CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
    );
  }
}


}

export { TechSearchController };