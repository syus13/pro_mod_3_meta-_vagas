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

// src/app/citySearch/CitySearchModule.ts
var CitySearchModule_exports = {};
__export(CitySearchModule_exports, {
  CitySearchModule: () => CitySearchModule
});
module.exports = __toCommonJS(CitySearchModule_exports);

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

// src/app/citySearch/CitySearchController.ts
var CitySearchController = class {
  constructor(citySearchService) {
    this.citySearchService = citySearchService;
  }
  getTop5Cities(req, res) {
    return __async(this, null, function* () {
      try {
        const topCities = yield this.citySearchService.getTop5Cities();
        return res.status(STATUS_CODE.OK).json(topCities);
      } catch (erro) {
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
          CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        );
      }
    });
  }
  getTop5CitiesForMostSearchedTech(req, res) {
    return __async(this, null, function* () {
      try {
        const topCities = yield this.citySearchService.getTop5CitiesForMostSearchedTech();
        return res.status(STATUS_CODE.OK).json(topCities);
      } catch (erro) {
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
          CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        );
      }
    });
  }
};

// src/app/citySearch/CitySearchService.ts
var CitySearchService = class {
  constructor(citySearchRepository, techSearchService) {
    this.citySearchRepository = citySearchRepository;
    this.techSearchService = techSearchService;
  }
  getTop5Cities() {
    return __async(this, null, function* () {
      try {
        const cities = yield this.citySearchRepository.find({});
        cities.sort(
          (a, b) => b.count - a.count
        );
        return cities.slice(0, 5).map((city) => city.name);
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  getTop5CitiesForMostSearchedTech() {
    return __async(this, null, function* () {
      try {
        const topTech = yield this.citySearchRepository.getTopTechnology();
        return yield this.citySearchRepository.getTopCitiesForTechnology(topTech);
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
};

// src/app/citySearch/CitySearchRepository.ts
var CitySearchRepository = class {
  constructor(model2) {
    this.model = model2;
  }
  find(query) {
    return __async(this, null, function* () {
      try {
        return this.model.find(query);
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  getTopTechnology() {
    return __async(this, null, function* () {
      const topTechs = yield this.model.find().sort({ count: -1 }).limit(1);
      if (!topTechs || topTechs.length === 0) {
        throw new Error("No technology found");
      }
      return topTechs[0].technology;
    });
  }
  getTop5CitiesForMostSearchedTech(technology) {
    return __async(this, null, function* () {
      try {
        return yield this.model.find({ technology }).sort({ count: -1 }).limit(5);
      } catch (erro) {
      }
    });
  }
};

// src/app/citySearch/CitySearch.ts
var import_mongoose = require("mongoose");
var CitySearchSchema = new import_mongoose.Schema(
  {
    city: { type: String, required: true },
    technology: { type: String, required: true },
    count: { type: Number, required: true }
  },
  { timestamps: true }
);
var CitySearch = (0, import_mongoose.model)("CitySearch", CitySearchSchema);

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
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  getTopTechnologies() {
    return __async(this, null, function* () {
      try {
        return yield this.techSearchRepository.getTopTechnologies();
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
};

// src/app/citySearch/CitySearchModule.ts
var CitySearchModule = class {
  static getInstance() {
    const repository = new CitySearchRepository(CitySearch);
    const service = new CitySearchService(repository, TechSearchService);
    const controller = new CitySearchController(service);
    return { repository, service, controller };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CitySearchModule
});
