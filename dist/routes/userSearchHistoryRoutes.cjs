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

// src/routes/userSearchHistoryRoutes.ts
var userSearchHistoryRoutes_exports = {};
__export(userSearchHistoryRoutes_exports, {
  userSearchHistoryRoutes: () => userSearchHistoryRoutes
});
module.exports = __toCommonJS(userSearchHistoryRoutes_exports);
var import_express = require("express");

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
  async getUserSearchHistory(req, res) {
    const { userId } = req.params;
    const resultOrError = await this.userSearchHistoryService.getUserSearchHistory(userId);
    if ("error" in resultOrError) {
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(
        CommonError.build(
          resultOrError.message,
          STATUS_CODE.INTERNAL_SERVER_ERROR
        )
      );
    }
    return res.json(resultOrError);
  }
};

// src/app/userSearchHistory/UserSearchHistoryRepository .ts
var UserSearchHistoryRepository = class {
  constructor(model2) {
    this.model = model2;
  }
  async getUserSearchHistory(userId) {
    try {
      return await this.model.find({ userId }).sort({ timestamp: -1 });
    } catch (erro) {
      throw new Error(`Failed to get user search history: ${erro.message}`);
    }
  }
};

// src/app/userSearchHistory/UserSearchHistoryService.ts
var UserSearchHistoryService = class {
  constructor(repository) {
    this.repository = repository;
  }
  async getUserSearchHistory(userId) {
    try {
      return await this.repository.getUserSearchHistory(userId);
    } catch (erro) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
};

// src/app/userSearchHistory/UserSearchHistoryModule.ts
var UserSearchHistoryModule = class {
  static getInstance() {
    const repository = new UserSearchHistoryRepository(UserSearchHistory);
    const service = new UserSearchHistoryService(repository);
    const controller2 = new UserSearchHistoryController(service);
    return { repository, service, controller: controller2 };
  }
};

// src/routes/userSearchHistoryRoutes.ts
var userSearchHistoryRoutes = (0, import_express.Router)();
var { controller } = UserSearchHistoryModule.getInstance();
userSearchHistoryRoutes.get(
  "/:userId/history",
  controller.getUserSearchHistory.bind(controller)
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userSearchHistoryRoutes
});
