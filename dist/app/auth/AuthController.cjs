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

// src/app/auth/AuthController.ts
var AuthController_exports = {};
__export(AuthController_exports, {
  AuthController: () => AuthController
});
module.exports = __toCommonJS(AuthController_exports);

// src/utils/Validations/auth/AuthValidation.ts
var yup = __toESM(require("yup"), 1);

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

// src/utils/Validations/auth/AuthValidation.ts
var AuthValidation = class {
  static async isValid(data) {
    const loginSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required()
    });
    try {
      await loginSchema.validate(data);
      return { erro: false };
    } catch (erro) {
      return {
        erro: true,
        message: erro.message,
        status: STATUS_CODE.BAD_REQUEST
      };
    }
  }
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

// src/app/auth/AuthController.ts
var AuthController = class {
  constructor(service) {
    this.service = service;
  }
  async login(req, res) {
    const { body } = req;
    const authController = await AuthValidation.isValid(body);
    if (authController.erro) {
      return res.status(STATUS_CODE.BAD_REQUEST).json(
        CommonError.build(authController.message, STATUS_CODE.BAD_REQUEST)
      );
    }
    const result = await this.service.login(body);
    if ("error" in result) {
      return res.status(STATUS_CODE.NON_AUTHORIZED).json(CommonError.build(result.message, STATUS_CODE.NON_AUTHORIZED));
    }
    return res.status(STATUS_CODE.OK).json(result);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthController
});
