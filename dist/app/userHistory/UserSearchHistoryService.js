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

// src/app/userHistory/UserSearchHistoryService.ts
var UserSearchHistoryService_exports = {};
__export(UserSearchHistoryService_exports, {
  UserSearchHistoryService: () => UserSearchHistoryService
});
module.exports = __toCommonJS(UserSearchHistoryService_exports);

// src/app/userHistory/UserSearchHistory.ts
var import_mongoose = require("mongoose");
var UserSearchHistorySchema = new import_mongoose.Schema({
  userId: { type: String, required: true },
  searchQuery: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});
var UserSearchHistory = (0, import_mongoose.model)("UserSearchHistory", UserSearchHistorySchema);

// src/app/userHistory/UserSearchHistoryService.ts
var UserSearchHistoryService = class {
  addSearchHistory(userId, searchQuery) {
    return __async(this, null, function* () {
      const history = new UserSearchHistory({
        userId,
        searchQuery
      });
      yield history.save();
      return history;
    });
  }
  getLastSearches(userId, limit = 10) {
    return __async(this, null, function* () {
      return UserSearchHistory.find({ userId }).sort({ timestamp: -1 }).limit(limit);
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserSearchHistoryService
});
