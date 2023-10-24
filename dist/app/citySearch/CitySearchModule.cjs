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
  async getTop5Cities(req, res) {
    try {
      const topCities = await this.citySearchService.getTop5Cities();
      return res.status(STATUS_CODE.OK).json(topCities);
    } catch (erro) {
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
        CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
      );
    }
  }
  async getTop5CitiesForMostSearchedTech(req, res) {
    try {
      const topCities = await this.citySearchService.getTop5CitiesForMostSearchedTech();
      return res.status(STATUS_CODE.OK).json(topCities);
    } catch (erro) {
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
        CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
      );
    }
  }
};

// src/app/citySearch/CitySearchService.ts
var CitySearchService = class {
  constructor(citySearchRepository, techSearchService) {
    this.citySearchRepository = citySearchRepository;
    this.techSearchService = techSearchService;
  }
  async getTop5Cities() {
    try {
      const cities = await this.citySearchRepository.find({});
      cities.sort(
        (a, b) => b.count - a.count
      );
      return cities.slice(0, 5).map((city) => city.name);
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async getTop5CitiesForMostSearchedTech() {
    try {
      const topTech = await this.citySearchRepository.getTopTechnology();
      return await this.citySearchRepository.getTopCitiesForTechnology(topTech);
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
};

// src/app/citySearch/CitySearchRepository.ts
var CitySearchRepository = class {
  constructor(model2) {
    this.model = model2;
  }
  async find(query) {
    try {
      return this.model.find(query);
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async getTopTechnology() {
    const topTechs = await this.model.find().sort({ count: -1 }).limit(1);
    if (!topTechs || topTechs.length === 0) {
      throw new Error("No technology found");
    }
    return topTechs[0].technology;
  }
  async getTop5CitiesForMostSearchedTech(technology) {
    try {
      return await this.model.find({ technology }).sort({ count: -1 }).limit(5);
    } catch (erro) {
    }
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
  async registerTechSearch(technology, city) {
    try {
      const existingRecord = await this.techSearchRepository.findOne({
        technology,
        city
      });
      if (existingRecord) {
        existingRecord.count += 1;
        await existingRecord.save();
      } else {
        await this.techSearchRepository.create({
          technology,
          city,
          count: 1
        });
      }
      return existingRecord;
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async getTopTechnologies() {
    try {
      return await this.techSearchRepository.getTopTechnologies();
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
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
