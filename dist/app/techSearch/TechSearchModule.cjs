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
        const result = yield this.techSearchService.registerTechSearch(
          technology,
          city
        );
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
      const resultOrError = yield this.techSearchService.getTopTechnologies();
      if ("error" in resultOrError) {
        return res.status(resultOrError.statusCode).json(resultOrError);
      }
      return res.json(resultOrError);
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
  getTopTechnologies() {
    return __async(this, null, function* () {
      try {
        return yield this.model.find().sort({ count: -1 }).limit(5);
      } catch (erro) {
        CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
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
