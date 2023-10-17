import { JobController } from "./JobController";
import { JobService } from "./JobService";
import { JobRepository } from "./JobRepository";
import { Job } from "./Job";
import { UserRepository } from "../user/UserRepository";
import { TechSearchRepository } from "../techSearch/TechSearchRepository";

class JobModule {
  static getInstance() {
    const repository = new JobRepository(Job, TechSearchRepository);
    const service = new JobService(repository, TechSearchRepository, UserRepository);
    const controller = new JobController(service);

    return { repository, service, controller };
  }
}

export { JobModule };
