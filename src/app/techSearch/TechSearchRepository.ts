import { Model, Document } from "mongoose";
import { TypeTechSearch } from "./TechSearch";
import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";

class TechSearchRepository {
  constructor(
    private model: Model<TypeTechSearch & Document>
  ) {}

  async createTechSearch(techSearchData: TypeTechSearch) {
    try {
      const techSearch = new this.model(techSearchData);
      const techSearchDoc = techSearch.toObject(); // Converte para documento do Mongoose
      const savedTechSearch = new this.model(techSearchDoc);
      await savedTechSearch.save();
      return savedTechSearch;
    } catch (erro: any) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
  }

  async findByTechnologyAndCity(technology: string, city: string) {
    try {
      return await this.model.findOne({ technology, city });
    } catch (erro: any) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
  }

  async updateTechSearch(techSearch: TypeTechSearch & Document) {
    try {
      return await techSearch.save(); 
    } catch (erro: any) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
  }

  async findTopSearchedTechnologies(limit: number = 5) {
    try {
      const technologies = await this.model.aggregate([
        {
          $group: {
            _id: '$technology',
            count: { $sum: '$count' },
          },
        },
        { $sort: { count: -1 } },
        { $limit: limit },
      ]);

      return technologies;
    } catch (erro: any) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
  }

  async findTopSearchedCities(technology: string, limit: number = 5) {
    try {
      const cities = await this.model.find({ technology })
        .sort({ count: -1 })
        .limit(limit);

      return cities;
    } catch (erro: any) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
  }
}

export default TechSearchRepository;
