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

// src/app/citySearch/CitySearchService.ts
var CitySearchService_exports = {};
__export(CitySearchService_exports, {
  CitySearchService: () => CitySearchService
});
module.exports = __toCommonJS(CitySearchService_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CitySearchService
});
