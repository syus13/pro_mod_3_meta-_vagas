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

// src/app/job/JobRepository.ts
var JobRepository_exports = {};
__export(JobRepository_exports, {
  JobRepository: () => JobRepository
});
module.exports = __toCommonJS(JobRepository_exports);

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

// src/app/job/JobRepository.ts
var JobRepository = class {
  constructor(model, techSearchRepository) {
    this.model = model;
    this.techSearchRepository = techSearchRepository;
  }
  async create(data) {
    try {
      return this.model.create(data);
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.BAD_REQUEST);
    }
  }
  async searchJobs(filters, page, limit) {
    try {
      return await this.model.find(filters).skip((page - 1) * limit).limit(limit);
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.BAD_REQUEST);
    }
  }
  async favoriteJob(userId, jobId) {
    try {
      return await this.model.updateOne(
        { _id: jobId },
        { $addToSet: { favoritedBy: userId } }
      );
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.BAD_REQUEST);
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JobRepository
});
