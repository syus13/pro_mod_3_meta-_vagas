import { TechSearchController } from "./TechSearchController";
import { TechSearchService } from "./techSearchService";
import { TechSearchRepository } from "./TechSearchRepository";
import { TechSearch } from "./TechSearch";

class TechSearchModule {
  static getInstance() {
    const techSearchRepository = new TechSearchRepository(TechSearch);
    const techSearchService = new TechSearchService(techSearchRepository);
    const techSearchController = new TechSearchController(techSearchService);

    return { TechSearchRepository, techSearchService, techSearchController };
  }
}

export { TechSearchModule };
