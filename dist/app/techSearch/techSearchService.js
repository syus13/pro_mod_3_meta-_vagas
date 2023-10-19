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

// src/app/techSearch/techSearchService.ts
var techSearchService_exports = {};
__export(techSearchService_exports, {
  TechSearchService: () => TechSearchService
});
module.exports = __toCommonJS(techSearchService_exports);

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

// src/app/techSearch/techSearchService.ts
var TechSearchService = class {
  constructor(techSearchRepository) {
    this.techSearchRepository = techSearchRepository;
  }
  registerTechSearch(technology, city) {
    return __async(this, null, function* () {
      try {
        const existingRecord = yield this.techSearchRepository.findOne({
          technology,
          city
        });
        if (existingRecord) {
          existingRecord.count += 1;
          yield existingRecord.save();
        } else {
          yield this.techSearchRepository.create({
            technology,
            city,
            count: 1
          });
        }
        return existingRecord;
      } catch (erro) {
        return CommonError.build(
          erro.message,
          STATUS_CODE.INTERNAL_SERVER_ERROR
        );
      }
    });
  }
  getTopTechnologies(limit = 5) {
    return __async(this, null, function* () {
      try {
        return this.techSearchRepository.getTopTechnologies(limit);
      } catch (erro) {
        return CommonError.build(
          erro.message,
          STATUS_CODE.INTERNAL_SERVER_ERROR
        );
      }
    });
  }
  getTopCitiesForMostSearchedTech() {
    return __async(this, null, function* () {
      try {
        return this.techSearchRepository.getTopCitiesForMostSearchedTech();
      } catch (erro) {
        return CommonError.build(
          erro.message,
          STATUS_CODE.INTERNAL_SERVER_ERROR
        );
      }
    });
  }
  searchTechAndCity(technology, city) {
    return __async(this, null, function* () {
      const count = yield this.techSearchRepository.getSearchCount(technology, city);
      if (count !== null) {
        yield this.techSearchRepository.incrementSearchCount(technology, city);
        return count + 1;
      } else {
        yield this.techSearchRepository.createSearchCount(technology, city);
        return 1;
      }
    });
  }
  searchTech(query, startIndex, perPage) {
    return __async(this, null, function* () {
      try {
        const results = yield this.techSearchRepository.searchTech(query, startIndex, perPage);
        return results;
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TechSearchService
});