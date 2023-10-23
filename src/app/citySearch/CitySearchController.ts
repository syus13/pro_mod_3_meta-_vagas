import { Request, Response } from "express";
import { CitySearchService } from "./CitySearchService";
import { STATUS_CODE } from "../../utils/statusCode";
import { CommonError } from "../../utils/CommonError";

class CitySearchController {
  constructor(private citySearchService: CitySearchService) {}

  async getTop5Cities(req: Request, res: Response) {
    try {
      const topCities = await this.citySearchService.getTop5Cities();
      return res.status(STATUS_CODE.OK).json(topCities);
    } catch (erro: any) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json(
          CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        );
    }
  }
  async getTop5CitiesForMostSearchedTech(req: Request, res: Response) {
    try {
      const topCities =
        await this.citySearchService.getTop5CitiesForMostSearchedTech();
      return res.status(STATUS_CODE.OK).json(topCities);
    } catch (erro: any) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json(
          CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        );
    }
  }
}

export { CitySearchController };
