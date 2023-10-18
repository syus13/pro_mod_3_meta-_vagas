import { CitySearchController } from './CitySearchController';
import { CitySearchService } from './CitySearchService';
import { CitySearchRepository } from './CitySearchRepository';
import { CitySearch } from './CitySearch';

class CitySearchModule {
  static getInstance() {
    const repository = new CitySearchRepository(CitySearch);
    const service = new CitySearchService(repository);
    const controller = new CitySearchController(service);

    return { repository, service, controller };
  }
}

export { CitySearchModule };
