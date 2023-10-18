import { CommonError } from '../../utils/CommonError';
import { STATUS_CODE } from '../../utils/statusCode';
import { CitySearchRepository } from './CitySearchRepository';

class CitySearchService {
  techSearchService: any;
  constructor(private citySearchRepository: CitySearchRepository) {}

  async getTop5Cities() {
    try {
      return await this.citySearchRepository.find().sort({ count: -1 }).limit(5);
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async getTop5CitiesForMostSearchedTech() {
    
    const topTechnology = await this.techSearchService.getTop5Technologies();
  
   
    try {
      return await this.citySearchRepository.find({ technology: topTechnology }).sort({ count: -1 }).limit(5);
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  

}

export { CitySearchService };
