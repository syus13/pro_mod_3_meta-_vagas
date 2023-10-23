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

// src/app/userSearchHistory/UserSearchHistoryModule.ts
var UserSearchHistoryModule_exports = {};
__export(UserSearchHistoryModule_exports, {
  UserSearchHistoryModule: () => UserSearchHistoryModule
});
module.exports = __toCommonJS(UserSearchHistoryModule_exports);

// src/app/userSearchHistory/UserSearchHistory.ts
var import_mongoose = require("mongoose");
var UserSearchHistorySchema = new import_mongoose.Schema({
  userId: { type: String, required: true },
  searchQuery: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});
var UserSearchHistory = (0, import_mongoose.model)("UserSearchHistory", UserSearchHistorySchema);

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

// src/app/userSearchHistory/UserSearchHistoryController.ts
var UserSearchHistoryController = class {
  constructor(userSearchHistoryService) {
    this.userSearchHistoryService = userSearchHistoryService;
  }
  getUserSearchHistory(req, res) {
    return __async(this, null, function* () {
      const { userId } = req.params;
      const resultOrError = yield this.userSearchHistoryService.getUserSearchHistory(userId);
      if ("error" in resultOrError) {
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
          CommonError.build(
            resultOrError.message,
            STATUS_CODE.INTERNAL_SERVER_ERROR
          )
        );
      }
      return res.json(resultOrError);
    });
  }
};

// src/app/userSearchHistory/UserSearchHistoryRepository .ts
var UserSearchHistoryRepository = class {
  constructor(model2) {
    this.model = model2;
  }
  getUserSearchHistory(userId) {
    return __async(this, null, function* () {
      try {
        return yield this.model.find({ userId }).sort({ timestamp: -1 });
      } catch (erro) {
        throw new Error(`Failed to get user search history: ${erro.message}`);
      }
    });
  }
};

// src/app/userSearchHistory/UserSearchHistoryService.ts
var UserSearchHistoryService = class {
  constructor(repository) {
    this.repository = repository;
  }
  getUserSearchHistory(userId) {
    return __async(this, null, function* () {
      try {
        return yield this.repository.getUserSearchHistory(userId);
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
};

// src/app/userSearchHistory/UserSearchHistoryModule.ts
var UserSearchHistoryModule = class {
  static getInstance() {
    const repository = new UserSearchHistoryRepository(UserSearchHistory);
    const service = new UserSearchHistoryService(repository);
    const controller = new UserSearchHistoryController(service);
    return { repository, service, controller };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserSearchHistoryModule
});
