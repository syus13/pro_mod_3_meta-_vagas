import { CommonError } from '../../utils/CommonError';
import { STATUS_CODE } from '../../utils/statusCode';
import TechSearchRepository from './TechSearchRepository';

class TechSearchService {
  constructor(private techSearchRepository: TechSearchRepository) {}

  async findTopSearchedTechnologies(limit: number = 5) {
    try {
      return await this.techSearchRepository.findTopSearchedTechnologies(limit);
    } catch (erro: any) {
    return CommonError.build(erro.message,STATUS_CODE.INTERNAL_SERVER_ERROR)
      }
    }
  

  async findTopSearchedCities(technology: string, limit: number = 5) {
    try {
      return await this.techSearchRepository.findTopSearchedCities(technology, limit);
    } catch (erro: any) {
        return CommonError.build(erro.message,STATUS_CODE.INTERNAL_SERVER_ERROR)
          }
    }
}


export default TechSearchService;
