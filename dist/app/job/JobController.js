"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/app/job/JobController.ts
var JobController_exports = {};
__export(JobController_exports, {
  JobController: () => JobController
});
module.exports = __toCommonJS(JobController_exports);

// src/utils/Validations/job/JobValidation.ts
var yup = __toESM(require("yup"));

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

// src/utils/Validations/job/JobValidation.ts
var JobValidation = class {
  static isValid(data) {
    return __async(this, null, function* () {
      const validation = yup.object().shape({
        position: yup.string().required(),
        salary: yup.string().required(),
        city: yup.string().required(),
        website: yup.string().required(),
        company: yup.string().required(),
        description: yup.string().required(),
        link: yup.string().required(),
        technology: yup.string().required()
      });
      try {
        yield validation.validate(data);
      } catch (erro) {
        return CommonError.build(erro.messages, STATUS_CODE.NOT_FOUND);
      }
    });
  }
};

// src/app/job/JobController.ts
var JobController = class {
  constructor(service) {
    this.service = service;
  }
  createJob(req, res) {
    return __async(this, null, function* () {
      const { body } = req;
      const bodyIsValid = yield JobValidation.isValid(body);
      if (bodyIsValid && bodyIsValid.error) {
        return res.status(STATUS_CODE.BAD_REQUEST).json(CommonError.build(bodyIsValid.message, STATUS_CODE.BAD_REQUEST));
      }
      const job = yield this.service.create(body);
      if ("error" in job) {
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
          CommonError.build(job.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        );
      }
      return res.status(STATUS_CODE.CREATED).json(job);
    });
  }
  searchJobs(req, res) {
    return __async(this, null, function* () {
      const { page = 1, limit = 10 } = req.query;
      const jobsOrError = yield this.service.searchJobs(
        req.query,
        Number(page),
        Number(limit)
      );
      if ("error" in jobsOrError) {
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
          CommonError.build(
            jobsOrError.message,
            STATUS_CODE.INTERNAL_SERVER_ERROR
          )
        );
      }
      return res.status(STATUS_CODE.CREATED).json(jobsOrError);
    });
  }
  favoriteJob(req, res) {
    return __async(this, null, function* () {
      const { userId, jobId } = req.params;
      const resultOrError = yield this.service.favoriteJob(userId, jobId);
      if ("error" in resultOrError) {
        return res.status(resultOrError.statusCode).json(resultOrError);
      }
      return res.json(resultOrError);
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JobController
});
