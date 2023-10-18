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

// src/app/job/Job.ts
var Job_exports = {};
__export(Job_exports, {
  Job: () => Job
});
module.exports = __toCommonJS(Job_exports);
var import_mongoose = require("mongoose");
var JobSchema = new import_mongoose.Schema({
  position: { type: String, required: true },
  salary: { type: Number, required: true },
  city: { type: String, required: true },
  website: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  technology: { type: String, required: true },
  favoritedBy: [{ type: import_mongoose.Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });
var Job = (0, import_mongoose.model)("Job", JobSchema);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Job
});
