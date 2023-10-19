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

// src/app/userHistory/UserSearchHistoryController.ts
var UserSearchHistoryController_exports = {};
__export(UserSearchHistoryController_exports, {
  UserSearchHistoryController: () => UserSearchHistoryController
});
module.exports = __toCommonJS(UserSearchHistoryController_exports);

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

// src/app/userHistory/UserSearchHistoryController.ts
var UserSearchHistoryController = class {
  constructor(userSearchHistoryService) {
    this.userSearchHistoryService = userSearchHistoryService;
  }
  addSearchHistory(req, res) {
    return __async(this, null, function* () {
      const { userId, searchQuery } = req.body;
      try {
        const history2 = yield this.userSearchHistoryService.addSearchHistory(
          userId,
          searchQuery
        );
        return res.status(STATUS_CODE.OK).json(history2);
      } catch (erro) {
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
      }
    });
  }
  getLastSearches(req, res) {
    return __async(this, null, function* () {
      const userId = req.params.userId;
      try {
        const searches = yield this.userSearchHistoryService.getLastSearches(
          userId
        );
        return res.status(STATUS_CODE.OK).json(history);
      } catch (erro) {
        return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json(CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
      }
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserSearchHistoryController
});