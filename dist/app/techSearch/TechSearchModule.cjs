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
  async registerTechSearch(req, res) {
    const { technology, city } = req.body;
    try {
      const result = await this.techSearchService.registerTechSearch(
        technology,
        city
      );
      return res.status(STATUS_CODE.OK).json(result);
    } catch (erro) {
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
        CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
      );
    }
  }
  async getTopTechnologies(req, res) {
    const resultOrError = await this.techSearchService.getTopTechnologies();
    if ("error" in resultOrError) {
      return res.status(resultOrError.statusCode).json(resultOrError);
    }
    return res.json(resultOrError);
  }
};

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

// src/app/techSearch/TechSearchRepository.ts
var TechSearchRepository = class {
  constructor(model2) {
    this.model = model2;
  }
  async findOne(query) {
    try {
      return this.model.findOne(query);
    } catch (erro) {
      CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async create(data) {
    try {
      return this.model.create(data);
    } catch (erro) {
      CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async find(query) {
    try {
      return this.model.find(query);
    } catch (erro) {
      CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async getTopTechnologies() {
    try {
      return await this.model.find().sort({ count: -1 }).limit(5);
    } catch (erro) {
      CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
};

// src/app/techSearch/TechSearch.ts
var import_mongoose = require("mongoose");
var TechSearchSchema = new import_mongoose.Schema(
  {
    technology: { type: String, required: true },
    count: { type: Number, required: true },
    city: { type: String, required: true }
  },
  { timestamps: true }
);
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
