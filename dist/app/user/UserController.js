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

// src/app/user/UserController.ts
var UserController_exports = {};
__export(UserController_exports, {
  UserController: () => UserController
});
module.exports = __toCommonJS(UserController_exports);

// src/utils/Validations/user/UserValidation.ts
var yup = __toESM(require("yup"));

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

// src/utils/Validations/user/UserValidation.ts
var UserValidation = class {
  static isValid(data) {
    return __async(this, null, function* () {
      const validation = yup.object().shape({
        name: yup.string().required(),
        password: yup.string().required(),
        email: yup.string().email().required()
      });
      try {
        yield validation.validate(data);
      } catch (erro) {
        return CommonError.build(erro.messages, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
};

// src/utils/Validations/user/UpdateValidation.ts
var yup2 = __toESM(require("yup"));
var UpdateValidation = class {
  static isValid(data) {
    return __async(this, null, function* () {
      const validation = yup2.object().shape({
        name: yup2.string().required(),
        password: yup2.string().required(),
        email: yup2.string().email().required()
      });
      try {
        yield validation.validate(data);
      } catch (erro) {
        return CommonError.build(erro.messages, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
};

// src/app/user/UserController.ts
var UserController = class {
  constructor(service) {
    this.service = service;
  }
  create(req, res) {
    return __async(this, null, function* () {
      const { body } = req;
      const bodyIsValid = yield UserValidation.isValid(body);
      if (bodyIsValid && bodyIsValid.error) {
        return res.status(STATUS_CODE.BAD_REQUEST).json(CommonError.build(bodyIsValid.message, STATUS_CODE.BAD_REQUEST));
      }
      const user = yield this.service.create(body);
      if ("error" in user) {
        return res.status(STATUS_CODE.CONFLICT).json(user);
      }
      return res.status(STATUS_CODE.CREATED).json(user);
    });
  }
  update(req, res) {
    return __async(this, null, function* () {
      const { body, params: { id } } = req;
      const updateValidation = yield UpdateValidation.isValid(body);
      if (updateValidation && updateValidation.error) {
        return res.status(STATUS_CODE.BAD_REQUEST).json(CommonError.build(updateValidation.message, STATUS_CODE.BAD_REQUEST));
      }
      const result = yield this.service.update(id, body);
      if ("error" in result) {
        return res.status(STATUS_CODE.BAD_REQUEST).json(CommonError.build(result.message, STATUS_CODE.BAD_REQUEST));
      }
      return res.status(STATUS_CODE.OK).json(result);
    });
  }
  markJobAsFavorite(req, res) {
    return __async(this, null, function* () {
      const { userId, jobId } = req.body;
      const result = yield this.service.markJobAsFavorite(userId, jobId);
      if ("error" in result) {
        return res.status(STATUS_CODE.BAD_REQUEST).json(CommonError.build(result.message, STATUS_CODE.BAD_REQUEST));
      }
      return res.status(STATUS_CODE.OK).json(result);
    });
  }
  getSearchHistory(req, res) {
    return __async(this, null, function* () {
      const userId = req.query.userId;
      const page = req.query.page;
      const perPage = req.query.perPage;
      if (userId === void 0) {
        return res.status(STATUS_CODE.BAD_REQUEST).json(CommonError.build("ID invalid", STATUS_CODE.BAD_REQUEST));
      }
      const history = yield this.service.getSearchHistory(userId, page, perPage);
      if ("error" in history) {
        return res.status(STATUS_CODE.BAD_REQUEST).json(CommonError.build(history.message, STATUS_CODE.BAD_REQUEST));
      }
      return res.status(STATUS_CODE.OK).json(history);
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserController
});
