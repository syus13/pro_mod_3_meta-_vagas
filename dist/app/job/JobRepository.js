"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/app/job/JobRepository.ts
var JobRepository_exports = {};
__export(JobRepository_exports, {
  JobRepository: () => JobRepository
});
module.exports = __toCommonJS(JobRepository_exports);
var import_mongoose = require("mongoose");

// src/utils/CommonError.ts
var CommonError = class {
  static build(message, status) {
    return {
      error: true,
      message,
      status
    };
  }
};

// src/utils/statusCode.ts
var STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NON_AUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500
};

// src/app/job/filterMapping.ts
var filterMapping = {
  technology: "technology",
  company: "company",
  city: "city",
  salary: "salary",
  position: "position"
};

// src/app/job/JobRepository.ts
var JobRepository = class {
  constructor(model, techSearchRepository) {
    this.model = model;
    this.techSearchRepository = techSearchRepository;
  }
  create(data) {
    return __async(this, null, function* () {
      try {
        return this.model.create(data);
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.BAD_REQUEST);
      }
    });
  }
  filterJobs(filters, startIndex, itemsPerPage) {
    return __async(this, null, function* () {
      try {
        const query = this.model.find();
        if (filters) {
          Object.keys(filterMapping).forEach((filterField) => {
            if (filters[filterField]) {
              query.where(filterMapping[filterField]).equals(filters[filterField]);
            }
          });
          query.skip(startIndex).limit(itemsPerPage);
        }
        const jobs = yield query.exec();
        if (jobs.length === 0) {
          return CommonError.build("Job not Found", STATUS_CODE.NOT_FOUND);
        }
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  upsertTechCount(filters) {
    return __async(this, null, function* () {
      try {
        const existingTech = yield this.techSearchRepository.findOne({
          technology: filters.technology
        });
        if (existingTech) {
          existingTech.count += 1;
          yield existingTech.save();
        } else {
          yield this.techSearchRepository.create({
            technology: filters.technology,
            count: 1
          });
        }
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  favoriteJob(userId, jobId) {
    return __async(this, null, function* () {
      try {
        const job = yield this.model.findById(jobId);
        if (!job) {
          return CommonError.build("Job not found", STATUS_CODE.NOT_FOUND);
        }
        const userIdObjectId = new import_mongoose.Types.ObjectId(userId);
        if (job.favoritedBy.includes(userIdObjectId)) {
          return CommonError.build("Job is already favorited by the user", STATUS_CODE.BAD_REQUEST);
        }
        job.favoritedBy.push(userIdObjectId);
        yield job.save();
        return { message: "Job favorited successfully" };
      } catch (error) {
        return CommonError.build(
          error.message,
          STATUS_CODE.INTERNAL_SERVER_ERROR
        );
      }
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JobRepository
});
