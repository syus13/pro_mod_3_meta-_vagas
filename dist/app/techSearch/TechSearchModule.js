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

// src/app/techSearch/TechSearchModule.ts
var TechSearchModule_exports = {};
__export(TechSearchModule_exports, {
  TechSearchModule: () => TechSearchModule
});
module.exports = __toCommonJS(TechSearchModule_exports);

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

// src/app/techSearch/TechSearchController.ts
var TechSearchController = class {
  constructor(techSearchService) {
    this.techSearchService = techSearchService;
  }
  registerTechSearch(req, res) {
    return __async(this, null, function* () {
      const { technology, city } = req.body;
      try {
        const result = yield this.techSearchService.registerTechSearch(technology, city);
        return res.status(STATUS_CODE.OK).json(result);
      } catch (erro) {
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
          CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        );
      }
    });
  }
  getTopTechnologies(req, res) {
    return __async(this, null, function* () {
      try {
        const limit = 5;
        const topTechnologies = yield this.techSearchService.getTopTechnologies(limit);
        return res.status(STATUS_CODE.OK).json(topTechnologies);
      } catch (erro) {
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
          CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        );
      }
    });
  }
  getTopCitiesForMostSearchedTech(req, res) {
    return __async(this, null, function* () {
      try {
        const topCities = yield this.techSearchService.getTopCitiesForMostSearchedTech();
        return res.status(STATUS_CODE.OK).json(topCities);
      } catch (erro) {
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
          CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        );
      }
    });
  }
  searchTechAndCity(req, res) {
    return __async(this, null, function* () {
      try {
        const { technology, city } = req.query;
        if (!technology || !city) {
          CommonError.build("Technology and city Not Found", STATUS_CODE.NOT_FOUND);
        }
        const count = yield this.techSearchService.searchTechAndCity(technology, city);
        return res.status(STATUS_CODE.OK).json({ count });
      } catch (erro) {
        CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  getTechSearchResults(req, res) {
    return __async(this, null, function* () {
      try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const perPage = req.query.perPage ? parseInt(req.query.perPage) : 10;
        const startIndex = (page - 1) * perPage;
        const results = yield this.techSearchService.searchTech(req.query, startIndex, perPage);
        return res.status(STATUS_CODE.OK).json(results);
      } catch (error) {
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
          CommonError.build(error.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        );
      }
    });
  }
  getTop5Technologies(req, res) {
    return __async(this, null, function* () {
      try {
        const topTechnologies = yield this.techSearchService.getTop5Technologies();
        return res.status(STATUS_CODE.OK).json(topTechnologies);
      } catch (erro) {
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
          CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        );
      }
    });
  }
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

// src/app/techSearch/TechSearchRepository.ts
var TechSearchRepository = class {
  constructor(model2) {
    this.model = model2;
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

// src/app/techSearch/TechSearch.ts
var import_mongoose = require("mongoose");
var TechSearchSchema = new import_mongoose.Schema({
  technology: { type: String, required: true },
  count: { type: Number, required: true },
  city: { type: String, required: true }
}, { timestamps: true });
var TechSearch = (0, import_mongoose.model)("TechSearch", TechSearchSchema);

// src/app/techSearch/TechSearchModule.ts
var TechSearchModule = class {
  static getInstance() {
    const techSearchRepository = new TechSearchRepository(TechSearch);
    const techSearchService = new TechSearchService(techSearchRepository);
    const techSearchController = new TechSearchController(techSearchService);
    return { TechSearchRepository, techSearchService, techSearchController };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TechSearchModule
});
