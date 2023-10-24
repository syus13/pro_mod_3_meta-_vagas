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

// src/app/userSearchHistory/UserSearchHistoryRepository .ts
var UserSearchHistoryRepository_exports = {};
__export(UserSearchHistoryRepository_exports, {
  UserSearchHistoryRepository: () => UserSearchHistoryRepository
});
module.exports = __toCommonJS(UserSearchHistoryRepository_exports);
var UserSearchHistoryRepository = class {
  constructor(model) {
    this.model = model;
  }
  async getUserSearchHistory(userId) {
    try {
      return await this.model.find({ userId }).sort({ timestamp: -1 });
    } catch (erro) {
      throw new Error(`Failed to get user search history: ${erro.message}`);
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserSearchHistoryRepository
});
