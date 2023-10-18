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

// src/app/techSearch/TechSearchRepository.ts
var TechSearchRepository_exports = {};
__export(TechSearchRepository_exports, {
  TechSearchRepository: () => TechSearchRepository
});
module.exports = __toCommonJS(TechSearchRepository_exports);

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

// src/app/techSearch/TechSearchRepository.ts
var TechSearchRepository = class {
  constructor(model) {
    this.model = model;
  }
  findOne(query) {
    return __async(this, null, function* () {
      try {
        return this.model.findOne(query);
      } catch (erro) {
        CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  create(data) {
    return __async(this, null, function* () {
      try {
        return this.model.create(data);
      } catch (erro) {
        CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  find(query) {
    return __async(this, null, function* () {
      try {
        return this.model.find(query);
      } catch (erro) {
        CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  sortAndLimit(query, sortField, limit) {
    return __async(this, null, function* () {
      try {
        return query.sort({ [sortField]: -1 }).limit(limit);
      } catch (erro) {
        CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  getTopTechnologies(limit = 5) {
    return __async(this, null, function* () {
      try {
        const topTechnologies = yield this.model.find({}).sort({ count: -1 }).limit(limit);
        return topTechnologies;
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  getTopCitiesForMostSearchedTech(limit = 5) {
    return __async(this, null, function* () {
      try {
        const topCities = yield this.model.find({ technology: { $ne: "" } }).sort({ count: -1 }).limit(limit);
        return topCities;
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  getSearchCount(technology, city) {
    return __async(this, null, function* () {
      const searchRecord = yield this.model.findOne({ technology, city });
      return searchRecord ? searchRecord.count : null;
    });
  }
  incrementSearchCount(technology, city) {
    return __async(this, null, function* () {
      return this.model.findOneAndUpdate(
        { technology, city },
        { $inc: { count: 1 } }
      );
    });
  }
  createSearchCount(technology, city) {
    return __async(this, null, function* () {
      return this.model.create({ technology, city, count: 1 });
    });
  }
  searchTech(query, startIndex, perPage) {
    return __async(this, null, function* () {
      try {
        const { technology, city } = query;
        const filter = {};
        if (technology) {
          filter.technology = technology;
        }
        if (city) {
          filter.city = city;
        }
        const results = yield this.model.find(filter).skip(startIndex).limit(perPage);
        return results;
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  searchTechAndCity(technology, city) {
    return __async(this, null, function* () {
      try {
        const record = yield this.model.findOne({ technology, city });
        return record ? record.count : 0;
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TechSearchRepository
});
