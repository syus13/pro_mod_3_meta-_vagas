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

// src/app/techSearch/TechSearchController.ts
var TechSearchController_exports = {};
__export(TechSearchController_exports, {
  TechSearchController: () => TechSearchController
});
module.exports = __toCommonJS(TechSearchController_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TechSearchController
});
