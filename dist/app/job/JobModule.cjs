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

// src/app/job/JobModule.ts
var JobModule_exports = {};
__export(JobModule_exports, {
  JobModule: () => JobModule
});
module.exports = __toCommonJS(JobModule_exports);

// src/utils/Validations/job/JobValidation.ts
var yup = __toESM(require("yup"), 1);

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
  static async isValid(data) {
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
      await validation.validate(data);
    } catch (erro) {
      return CommonError.build(erro.messages, STATUS_CODE.NOT_FOUND);
    }
  }
};

// src/app/job/JobController.ts
var JobController = class {
  constructor(service) {
    this.service = service;
  }
  async createJob(req, res) {
    const { body } = req;
    const bodyIsValid = await JobValidation.isValid(body);
    if (bodyIsValid && bodyIsValid.error) {
      return res.status(STATUS_CODE.BAD_REQUEST).json(CommonError.build(bodyIsValid.message, STATUS_CODE.BAD_REQUEST));
    }
    const job = await this.service.create(body);
    if ("error" in job) {
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
        CommonError.build(job.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
      );
    }
    return res.status(STATUS_CODE.CREATED).json(job);
  }
  async searchJobs(req, res) {
    const { page = 1, limit = 10 } = req.query;
    const jobsOrError = await this.service.searchJobs(
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
  }
  async favoriteJob(req, res) {
    const { userId, jobId } = req.params;
    const resultOrError = await this.service.favoriteJob(userId, jobId);
    if ("error" in resultOrError) {
      return res.status(resultOrError.statusCode).json(resultOrError);
    }
    return res.json(resultOrError);
  }
};

// src/app/job/JobService.ts
var JobService = class {
  constructor(repository, techSearchRepository, userRepository) {
    this.repository = repository;
    this.techSearchRepository = techSearchRepository;
    this.userRepository = userRepository;
  }
  async create(data) {
    try {
      return await this.repository.create(data);
    } catch (erro) {
      return CommonError.build(
        "Error registering the job",
        STATUS_CODE.BAD_REQUEST
      );
    }
  }
  async searchJobs(filters, page, limit) {
    try {
      return await this.repository.searchJobs(filters, page, limit);
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async favoriteJob(userId, jobId) {
    try {
      return await this.repository.favoriteJob(userId, jobId);
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
};

// src/app/job/JobRepository.ts
var JobRepository = class {
  constructor(model2, techSearchRepository) {
    this.model = model2;
    this.techSearchRepository = techSearchRepository;
  }
  async create(data) {
    try {
      return this.model.create(data);
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.BAD_REQUEST);
    }
  }
  async searchJobs(filters, page, limit) {
    try {
      return await this.model.find(filters).skip((page - 1) * limit).limit(limit);
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.BAD_REQUEST);
    }
  }
  async favoriteJob(userId, jobId) {
    try {
      return await this.model.updateOne(
        { _id: jobId },
        { $addToSet: { favoritedBy: userId } }
      );
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.BAD_REQUEST);
    }
  }
};

// src/app/job/Job.ts
var import_mongoose = require("mongoose");
var JobSchema = new import_mongoose.Schema(
  {
    position: { type: String, required: true },
    salary: { type: Number, required: true },
    city: { type: String, required: true },
    website: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    technology: { type: String, required: true },
    favoritedBy: [{ type: import_mongoose.Schema.Types.ObjectId, ref: "User" }]
  },
  { timestamps: true }
);
var Job = (0, import_mongoose.model)("Job", JobSchema);

// src/app/user/UserRepository.ts
var UserRepository = class {
  constructor(model2) {
    this.model = model2;
  }
  searchRecord(filters, jobAlreadyExists) {
    throw new Error("Method not implemented.");
  }
  async findByEmail(email) {
    try {
      return this.model.findOne({ email });
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async create(data) {
    try {
      return this.model.create(data);
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async update(id, data) {
    try {
      return this.model.findByIdAndUpdate(id, data);
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async findById(id) {
    try {
      return this.model.findOne({ _id: id });
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async getFavoriteJobs(user) {
    try {
      return await this.model.find({ _id: { $in: user.favoritedBy } });
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async getUserSearchHistory(user) {
    try {
      return user.searchHistory;
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

// src/app/job/JobModule.ts
var JobModule = class {
  static getInstance() {
    const repository = new JobRepository(Job, TechSearchRepository);
    const service = new JobService(
      repository,
      TechSearchRepository,
      UserRepository
    );
    const controller = new JobController(service);
    return { repository, service, controller };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JobModule
});
