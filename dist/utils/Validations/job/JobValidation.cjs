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

// src/utils/Validations/job/JobValidation.ts
var JobValidation_exports = {};
__export(JobValidation_exports, {
  JobValidation: () => JobValidation
});
module.exports = __toCommonJS(JobValidation_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JobValidation
});
