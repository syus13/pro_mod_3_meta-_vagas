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

// src/app/userHistory/UserSearchHistory.ts
var UserSearchHistory_exports = {};
__export(UserSearchHistory_exports, {
  UserSearchHistory: () => UserSearchHistory
});
module.exports = __toCommonJS(UserSearchHistory_exports);
var import_mongoose = require("mongoose");
var UserSearchHistorySchema = new import_mongoose.Schema({
  userId: { type: String, required: true },
  searchQuery: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});
var UserSearchHistory = (0, import_mongoose.model)("UserSearchHistory", UserSearchHistorySchema);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserSearchHistory
});
