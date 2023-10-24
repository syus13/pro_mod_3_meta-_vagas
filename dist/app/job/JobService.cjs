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

// src/app/job/JobService.ts
var JobService_exports = {};
__export(JobService_exports, {
  JobService: () => JobService
});
module.exports = __toCommonJS(JobService_exports);

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

// src/app/job/JobService.ts
var JobService = class {
  constructor(repository, techSearchRepository, userRepository) {
    this.repository = repository;
    this.techSearchRepository = techSearchRepository;
    this.userRepository = userRepository;
  }
  async create(data) {
    try {
      return await this.repository.create(data);
    } catch (erro) {
      return CommonError.build(
        "Error registering the job",
        STATUS_CODE.BAD_REQUEST
      );
    }
  }
  async searchJobs(filters, page, limit) {
    try {
      return await this.repository.searchJobs(filters, page, limit);
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async favoriteJob(userId, jobId) {
    try {
      return await this.repository.favoriteJob(userId, jobId);
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JobService
});
