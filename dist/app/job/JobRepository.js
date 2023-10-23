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
  create(data) {
    return __async(this, null, function* () {
      try {
        return this.model.create(data);
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.BAD_REQUEST);
      }
    });
  }
  searchJobs(filters, page, limit) {
    return __async(this, null, function* () {
      try {
        return yield this.model.find(filters).skip((page - 1) * limit).limit(limit);
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.BAD_REQUEST);
      }
    });
  }
  favoriteJob(userId, jobId) {
    return __async(this, null, function* () {
      try {
        return yield this.model.updateOne(
          { _id: jobId },
          { $addToSet: { favoritedBy: userId } }
        );
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.BAD_REQUEST);
      }
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JobRepository
});
