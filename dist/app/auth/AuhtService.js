"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js
var require_s3_setup = __commonJS({
  "node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js"(exports, module2) {
    "use strict";
    module2.exports = exports;
    var url = require("url");
    var fs = require("fs");
    var path = require("path");
    module2.exports.detect = function(opts, config) {
      const to = opts.hosted_path;
      const uri = url.parse(to);
      config.prefix = !uri.pathname || uri.pathname === "/" ? "" : uri.pathname.replace("/", "");
      if (opts.bucket && opts.region) {
        config.bucket = opts.bucket;
        config.region = opts.region;
        config.endpoint = opts.host;
        config.s3ForcePathStyle = opts.s3ForcePathStyle;
      } else {
        const parts = uri.hostname.split(".s3");
        const bucket = parts[0];
        if (!bucket) {
          return;
        }
        if (!config.bucket) {
          config.bucket = bucket;
        }
        if (!config.region) {
          const region = parts[1].slice(1).split(".")[0];
          if (region === "amazonaws") {
            config.region = "us-east-1";
          } else {
            config.region = region;
          }
        }
      }
    };
    module2.exports.get_s3 = function(config) {
      if (process.env.node_pre_gyp_mock_s3) {
        const AWSMock = require("mock-aws-s3");
        const os = require("os");
        AWSMock.config.basePath = `${os.tmpdir()}/mock`;
        const s32 = AWSMock.S3();
        const wcb = (fn) => (err, ...args) => {
          if (err && err.code === "ENOENT") {
            err.code = "NotFound";
          }
          return fn(err, ...args);
        };
        return {
          listObjects(params, callback) {
            return s32.listObjects(params, wcb(callback));
          },
          headObject(params, callback) {
            return s32.headObject(params, wcb(callback));
          },
          deleteObject(params, callback) {
            return s32.deleteObject(params, wcb(callback));
          },
          putObject(params, callback) {
            return s32.putObject(params, wcb(callback));
          }
        };
      }
      const AWS = require("aws-sdk");
      AWS.config.update(config);
      const s3 = new AWS.S3();
      return {
        listObjects(params, callback) {
          return s3.listObjects(params, callback);
        },
        headObject(params, callback) {
          return s3.headObject(params, callback);
        },
        deleteObject(params, callback) {
          return s3.deleteObject(params, callback);
        },
        putObject(params, callback) {
          return s3.putObject(params, callback);
        }
      };
    };
    module2.exports.get_mockS3Http = function() {
      let mock_s3 = false;
      if (!process.env.node_pre_gyp_mock_s3) {
        return () => mock_s3;
      }
      const nock = require("nock");
      const host = "https://mapbox-node-pre-gyp-public-testing-bucket.s3.us-east-1.amazonaws.com";
      const mockDir = process.env.node_pre_gyp_mock_s3 + "/mapbox-node-pre-gyp-public-testing-bucket";
      const mock_http = () => {
        function get(uri, requestBody) {
          const filepath = path.join(mockDir, uri.replace("%2B", "+"));
          try {
            fs.accessSync(filepath, fs.constants.R_OK);
          } catch (e) {
            return [404, "not found\n"];
          }
          return [200, fs.createReadStream(filepath)];
        }
        return nock(host).persist().get(() => mock_s3).reply(get);
      };
      mock_http(nock, host, mockDir);
      const mockS3Http = (action) => {
        const previous = mock_s3;
        if (action === "off") {
          mock_s3 = false;
        } else if (action === "on") {
          mock_s3 = true;
        } else if (action !== "get") {
          throw new Error(`illegal action for setMockHttp ${action}`);
        }
        return previous;
      };
      return mockS3Http;
    };
  }
});

// node_modules/abbrev/abbrev.js
var require_abbrev = __commonJS({
  "node_modules/abbrev/abbrev.js"(exports, module2) {
    "use strict";
    module2.exports = exports = abbrev.abbrev = abbrev;
    abbrev.monkeyPatch = monkeyPatch;
    function monkeyPatch() {
      Object.defineProperty(Array.prototype, "abbrev", {
        value: function() {
          return abbrev(this);
        },
        enumerable: false,
        configurable: true,
        writable: true
      });
      Object.defineProperty(Object.prototype, "abbrev", {
        value: function() {
          return abbrev(Object.keys(this));
        },
        enumerable: false,
        configurable: true,
        writable: true
      });
    }
    function abbrev(list) {
      if (arguments.length !== 1 || !Array.isArray(list)) {
        list = Array.prototype.slice.call(arguments, 0);
      }
      for (var i = 0, l = list.length, args = []; i < l; i++) {
        args[i] = typeof list[i] === "string" ? list[i] : String(list[i]);
      }
      args = args.sort(lexSort);
      var abbrevs = {}, prev = "";
      for (var i = 0, l = args.length; i < l; i++) {
        var current = args[i], next = args[i + 1] || "", nextMatches = true, prevMatches = true;
        if (current === next)
          continue;
        for (var j = 0, cl = current.length; j < cl; j++) {
          var curChar = current.charAt(j);
          nextMatches = nextMatches && curChar === next.charAt(j);
          prevMatches = prevMatches && curChar === prev.charAt(j);
          if (!nextMatches && !prevMatches) {
            j++;
            break;
          }
        }
        prev = current;
        if (j === cl) {
          abbrevs[current] = current;
          continue;
        }
        for (var a = current.substr(0, j); j <= cl; j++) {
          abbrevs[a] = current;
          a += current.charAt(j);
        }
      }
      return abbrevs;
    }
    function lexSort(a, b) {
      return a === b ? 0 : a > b ? 1 : -1;
    }
  }
});

// node_modules/nopt/lib/nopt.js
var require_nopt = __commonJS({
  "node_modules/nopt/lib/nopt.js"(exports, module2) {
    "use strict";
    var debug = process.env.DEBUG_NOPT || process.env.NOPT_DEBUG ? function() {
      console.error.apply(console, arguments);
    } : function() {
    };
    var url = require("url");
    var path = require("path");
    var Stream = require("stream").Stream;
    var abbrev = require_abbrev();
    var os = require("os");
    module2.exports = exports = nopt;
    exports.clean = clean;
    exports.typeDefs = {
      String: { type: String, validate: validateString },
      Boolean: { type: Boolean, validate: validateBoolean },
      url: { type: url, validate: validateUrl },
      Number: { type: Number, validate: validateNumber },
      path: { type: path, validate: validatePath },
      Stream: { type: Stream, validate: validateStream },
      Date: { type: Date, validate: validateDate }
    };
    function nopt(types, shorthands, args, slice) {
      args = args || process.argv;
      types = types || {};
      shorthands = shorthands || {};
      if (typeof slice !== "number")
        slice = 2;
      debug(types, shorthands, args, slice);
      args = args.slice(slice);
      var data = {}, key, argv = {
        remain: [],
        cooked: args,
        original: args.slice(0)
      };
      parse(args, data, argv.remain, types, shorthands);
      clean(data, types, exports.typeDefs);
      data.argv = argv;
      Object.defineProperty(data.argv, "toString", { value: function() {
        return this.original.map(JSON.stringify).join(" ");
      }, enumerable: false });
      return data;
    }
    function clean(data, types, typeDefs) {
      typeDefs = typeDefs || exports.typeDefs;
      var remove = {}, typeDefault = [false, true, null, String, Array];
      Object.keys(data).forEach(function(k) {
        if (k === "argv")
          return;
        var val = data[k], isArray = Array.isArray(val), type = types[k];
        if (!isArray)
          val = [val];
        if (!type)
          type = typeDefault;
        if (type === Array)
          type = typeDefault.concat(Array);
        if (!Array.isArray(type))
          type = [type];
        debug("val=%j", val);
        debug("types=", type);
        val = val.map(function(val2) {
          if (typeof val2 === "string") {
            debug("string %j", val2);
            val2 = val2.trim();
            if (val2 === "null" && ~type.indexOf(null) || val2 === "true" && (~type.indexOf(true) || ~type.indexOf(Boolean)) || val2 === "false" && (~type.indexOf(false) || ~type.indexOf(Boolean))) {
              val2 = JSON.parse(val2);
              debug("jsonable %j", val2);
            } else if (~type.indexOf(Number) && !isNaN(val2)) {
              debug("convert to number", val2);
              val2 = +val2;
            } else if (~type.indexOf(Date) && !isNaN(Date.parse(val2))) {
              debug("convert to date", val2);
              val2 = new Date(val2);
            }
          }
          if (!types.hasOwnProperty(k)) {
            return val2;
          }
          if (val2 === false && ~type.indexOf(null) && !(~type.indexOf(false) || ~type.indexOf(Boolean))) {
            val2 = null;
          }
          var d = {};
          d[k] = val2;
          debug("prevalidated val", d, val2, types[k]);
          if (!validate(d, k, val2, types[k], typeDefs)) {
            if (exports.invalidHandler) {
              exports.invalidHandler(k, val2, types[k], data);
            } else if (exports.invalidHandler !== false) {
              debug("invalid: " + k + "=" + val2, types[k]);
            }
            return remove;
          }
          debug("validated val", d, val2, types[k]);
          return d[k];
        }).filter(function(val2) {
          return val2 !== remove;
        });
        if (!val.length && type.indexOf(Array) === -1) {
          debug("VAL HAS NO LENGTH, DELETE IT", val, k, type.indexOf(Array));
          delete data[k];
        } else if (isArray) {
          debug(isArray, data[k], val);
          data[k] = val;
        } else
          data[k] = val[0];
        debug("k=%s val=%j", k, val, data[k]);
      });
    }
    function validateString(data, k, val) {
      data[k] = String(val);
    }
    function validatePath(data, k, val) {
      if (val === true)
        return false;
      if (val === null)
        return true;
      val = String(val);
      var isWin = process.platform === "win32", homePattern = isWin ? /^~(\/|\\)/ : /^~\//, home = os.homedir();
      if (home && val.match(homePattern)) {
        data[k] = path.resolve(home, val.substr(2));
      } else {
        data[k] = path.resolve(val);
      }
      return true;
    }
    function validateNumber(data, k, val) {
      debug("validate Number %j %j %j", k, val, isNaN(val));
      if (isNaN(val))
        return false;
      data[k] = +val;
    }
    function validateDate(data, k, val) {
      var s = Date.parse(val);
      debug("validate Date %j %j %j", k, val, s);
      if (isNaN(s))
        return false;
      data[k] = new Date(val);
    }
    function validateBoolean(data, k, val) {
      if (val instanceof Boolean)
        val = val.valueOf();
      else if (typeof val === "string") {
        if (!isNaN(val))
          val = !!+val;
        else if (val === "null" || val === "false")
          val = false;
        else
          val = true;
      } else
        val = !!val;
      data[k] = val;
    }
    function validateUrl(data, k, val) {
      val = url.parse(String(val));
      if (!val.host)
        return false;
      data[k] = val.href;
    }
    function validateStream(data, k, val) {
      if (!(val instanceof Stream))
        return false;
      data[k] = val;
    }
    function validate(data, k, val, type, typeDefs) {
      if (Array.isArray(type)) {
        for (var i = 0, l = type.length; i < l; i++) {
          if (type[i] === Array)
            continue;
          if (validate(data, k, val, type[i], typeDefs))
            return true;
        }
        delete data[k];
        return false;
      }
      if (type === Array)
        return true;
      if (type !== type) {
        debug("Poison NaN", k, val, type);
        delete data[k];
        return false;
      }
      if (val === type) {
        debug("Explicitly allowed %j", val);
        data[k] = val;
        return true;
      }
      var ok = false, types = Object.keys(typeDefs);
      for (var i = 0, l = types.length; i < l; i++) {
        debug("test type %j %j %j", k, val, types[i]);
        var t = typeDefs[types[i]];
        if (t && (type && type.name && t.type && t.type.name ? type.name === t.type.name : type === t.type)) {
          var d = {};
          ok = false !== t.validate(d, k, val);
          val = d[k];
          if (ok) {
            data[k] = val;
            break;
          }
        }
      }
      debug("OK? %j (%j %j %j)", ok, k, val, types[i]);
      if (!ok)
        delete data[k];
      return ok;
    }
    function parse(args, data, remain, types, shorthands) {
      debug("parse", args, data, remain);
      var key = null, abbrevs = abbrev(Object.keys(types)), shortAbbr = abbrev(Object.keys(shorthands));
      for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        debug("arg", arg);
        if (arg.match(/^-{2,}$/)) {
          remain.push.apply(remain, args.slice(i + 1));
          args[i] = "--";
          break;
        }
        var hadEq = false;
        if (arg.charAt(0) === "-" && arg.length > 1) {
          var at = arg.indexOf("=");
          if (at > -1) {
            hadEq = true;
            var v = arg.substr(at + 1);
            arg = arg.substr(0, at);
            args.splice(i, 1, arg, v);
          }
          var shRes = resolveShort(arg, shorthands, shortAbbr, abbrevs);
          debug("arg=%j shRes=%j", arg, shRes);
          if (shRes) {
            debug(arg, shRes);
            args.splice.apply(args, [i, 1].concat(shRes));
            if (arg !== shRes[0]) {
              i--;
              continue;
            }
          }
          arg = arg.replace(/^-+/, "");
          var no = null;
          while (arg.toLowerCase().indexOf("no-") === 0) {
            no = !no;
            arg = arg.substr(3);
          }
          if (abbrevs[arg])
            arg = abbrevs[arg];
          var argType = types[arg];
          var isTypeArray = Array.isArray(argType);
          if (isTypeArray && argType.length === 1) {
            isTypeArray = false;
            argType = argType[0];
          }
          var isArray = argType === Array || isTypeArray && argType.indexOf(Array) !== -1;
          if (!types.hasOwnProperty(arg) && data.hasOwnProperty(arg)) {
            if (!Array.isArray(data[arg]))
              data[arg] = [data[arg]];
            isArray = true;
          }
          var val, la = args[i + 1];
          var isBool = typeof no === "boolean" || argType === Boolean || isTypeArray && argType.indexOf(Boolean) !== -1 || typeof argType === "undefined" && !hadEq || la === "false" && (argType === null || isTypeArray && ~argType.indexOf(null));
          if (isBool) {
            val = !no;
            if (la === "true" || la === "false") {
              val = JSON.parse(la);
              la = null;
              if (no)
                val = !val;
              i++;
            }
            if (isTypeArray && la) {
              if (~argType.indexOf(la)) {
                val = la;
                i++;
              } else if (la === "null" && ~argType.indexOf(null)) {
                val = null;
                i++;
              } else if (!la.match(/^-{2,}[^-]/) && !isNaN(la) && ~argType.indexOf(Number)) {
                val = +la;
                i++;
              } else if (!la.match(/^-[^-]/) && ~argType.indexOf(String)) {
                val = la;
                i++;
              }
            }
            if (isArray)
              (data[arg] = data[arg] || []).push(val);
            else
              data[arg] = val;
            continue;
          }
          if (argType === String) {
            if (la === void 0) {
              la = "";
            } else if (la.match(/^-{1,2}[^-]+/)) {
              la = "";
              i--;
            }
          }
          if (la && la.match(/^-{2,}$/)) {
            la = void 0;
            i--;
          }
          val = la === void 0 ? true : la;
          if (isArray)
            (data[arg] = data[arg] || []).push(val);
          else
            data[arg] = val;
          i++;
          continue;
        }
        remain.push(arg);
      }
    }
    function resolveShort(arg, shorthands, shortAbbr, abbrevs) {
      arg = arg.replace(/^-+/, "");
      if (abbrevs[arg] === arg)
        return null;
      if (shorthands[arg]) {
        if (shorthands[arg] && !Array.isArray(shorthands[arg]))
          shorthands[arg] = shorthands[arg].split(/\s+/);
        return shorthands[arg];
      }
      var singles = shorthands.___singles;
      if (!singles) {
        singles = Object.keys(shorthands).filter(function(s) {
          return s.length === 1;
        }).reduce(function(l, r) {
          l[r] = true;
          return l;
        }, {});
        shorthands.___singles = singles;
        debug("shorthand singles", singles);
      }
      var chrs = arg.split("").filter(function(c) {
        return singles[c];
      });
      if (chrs.join("") === arg)
        return chrs.map(function(c) {
          return shorthands[c];
        }).reduce(function(l, r) {
          return l.concat(r);
        }, []);
      if (abbrevs[arg] && !shorthands[arg])
        return null;
      if (shortAbbr[arg])
        arg = shortAbbr[arg];
      if (shorthands[arg] && !Array.isArray(shorthands[arg]))
        shorthands[arg] = shorthands[arg].split(/\s+/);
      return shorthands[arg];
    }
  }
});

// node_modules/are-we-there-yet/lib/tracker-base.js
var require_tracker_base = __commonJS({
  "node_modules/are-we-there-yet/lib/tracker-base.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events").EventEmitter;
    var util = require("util");
    var trackerId = 0;
    var TrackerBase = module2.exports = function(name) {
      EventEmitter.call(this);
      this.id = ++trackerId;
      this.name = name;
    };
    util.inherits(TrackerBase, EventEmitter);
  }
});

// node_modules/are-we-there-yet/lib/tracker.js
var require_tracker = __commonJS({
  "node_modules/are-we-there-yet/lib/tracker.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var TrackerBase = require_tracker_base();
    var Tracker = module2.exports = function(name, todo) {
      TrackerBase.call(this, name);
      this.workDone = 0;
      this.workTodo = todo || 0;
    };
    util.inherits(Tracker, TrackerBase);
    Tracker.prototype.completed = function() {
      return this.workTodo === 0 ? 0 : this.workDone / this.workTodo;
    };
    Tracker.prototype.addWork = function(work) {
      this.workTodo += work;
      this.emit("change", this.name, this.completed(), this);
    };
    Tracker.prototype.completeWork = function(work) {
      this.workDone += work;
      if (this.workDone > this.workTodo) {
        this.workDone = this.workTodo;
      }
      this.emit("change", this.name, this.completed(), this);
    };
    Tracker.prototype.finish = function() {
      this.workTodo = this.workDone = 1;
      this.emit("change", this.name, 1, this);
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/stream.js
var require_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/stream.js"(exports, module2) {
    "use strict";
    module2.exports = require("stream");
  }
});

// node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/buffer_list.js"(exports, module2) {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var _require = require("buffer");
    var Buffer2 = _require.Buffer;
    var _require2 = require("util");
    var inspect = _require2.inspect;
    var custom = inspect && inspect.custom || "inspect";
    function copyBuffer(src, target, offset) {
      Buffer2.prototype.copy.call(src, target, offset);
    }
    module2.exports = /* @__PURE__ */ function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      _createClass(BufferList, [{
        key: "push",
        value: function push(v) {
          var entry = {
            data: v,
            next: null
          };
          if (this.length > 0)
            this.tail.next = entry;
          else
            this.head = entry;
          this.tail = entry;
          ++this.length;
        }
      }, {
        key: "unshift",
        value: function unshift(v) {
          var entry = {
            data: v,
            next: this.head
          };
          if (this.length === 0)
            this.tail = entry;
          this.head = entry;
          ++this.length;
        }
      }, {
        key: "shift",
        value: function shift() {
          if (this.length === 0)
            return;
          var ret = this.head.data;
          if (this.length === 1)
            this.head = this.tail = null;
          else
            this.head = this.head.next;
          --this.length;
          return ret;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.head = this.tail = null;
          this.length = 0;
        }
      }, {
        key: "join",
        value: function join(s) {
          if (this.length === 0)
            return "";
          var p = this.head;
          var ret = "" + p.data;
          while (p = p.next)
            ret += s + p.data;
          return ret;
        }
      }, {
        key: "concat",
        value: function concat(n) {
          if (this.length === 0)
            return Buffer2.alloc(0);
          var ret = Buffer2.allocUnsafe(n >>> 0);
          var p = this.head;
          var i = 0;
          while (p) {
            copyBuffer(p.data, ret, i);
            i += p.data.length;
            p = p.next;
          }
          return ret;
        }
        // Consumes a specified amount of bytes or characters from the buffered data.
      }, {
        key: "consume",
        value: function consume(n, hasStrings) {
          var ret;
          if (n < this.head.data.length) {
            ret = this.head.data.slice(0, n);
            this.head.data = this.head.data.slice(n);
          } else if (n === this.head.data.length) {
            ret = this.shift();
          } else {
            ret = hasStrings ? this._getString(n) : this._getBuffer(n);
          }
          return ret;
        }
      }, {
        key: "first",
        value: function first() {
          return this.head.data;
        }
        // Consumes a specified amount of characters from the buffered data.
      }, {
        key: "_getString",
        value: function _getString(n) {
          var p = this.head;
          var c = 1;
          var ret = p.data;
          n -= ret.length;
          while (p = p.next) {
            var str = p.data;
            var nb = n > str.length ? str.length : n;
            if (nb === str.length)
              ret += str;
            else
              ret += str.slice(0, n);
            n -= nb;
            if (n === 0) {
              if (nb === str.length) {
                ++c;
                if (p.next)
                  this.head = p.next;
                else
                  this.head = this.tail = null;
              } else {
                this.head = p;
                p.data = str.slice(nb);
              }
              break;
            }
            ++c;
          }
          this.length -= c;
          return ret;
        }
        // Consumes a specified amount of bytes from the buffered data.
      }, {
        key: "_getBuffer",
        value: function _getBuffer(n) {
          var ret = Buffer2.allocUnsafe(n);
          var p = this.head;
          var c = 1;
          p.data.copy(ret);
          n -= p.data.length;
          while (p = p.next) {
            var buf = p.data;
            var nb = n > buf.length ? buf.length : n;
            buf.copy(ret, ret.length - n, 0, nb);
            n -= nb;
            if (n === 0) {
              if (nb === buf.length) {
                ++c;
                if (p.next)
                  this.head = p.next;
                else
                  this.head = this.tail = null;
              } else {
                this.head = p;
                p.data = buf.slice(nb);
              }
              break;
            }
            ++c;
          }
          this.length -= c;
          return ret;
        }
        // Make sure the linked list only shows the minimal necessary information.
      }, {
        key: custom,
        value: function value(_, options) {
          return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
            // Only inspect one level.
            depth: 0,
            // It should not recurse.
            customInspect: false
          }));
        }
      }]);
      return BufferList;
    }();
  }
});

// node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports, module2) {
    "use strict";
    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err) {
          if (!this._writableState) {
            process.nextTick(emitErrorNT, this, err);
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            process.nextTick(emitErrorNT, this, err);
          }
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          if (!_this._writableState) {
            process.nextTick(emitErrorAndCloseNT, _this, err2);
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true;
            process.nextTick(emitErrorAndCloseNT, _this, err2);
          } else {
            process.nextTick(emitCloseNT, _this);
          }
        } else if (cb) {
          process.nextTick(emitCloseNT, _this);
          cb(err2);
        } else {
          process.nextTick(emitCloseNT, _this);
        }
      });
      return this;
    }
    function emitErrorAndCloseNT(self2, err) {
      emitErrorNT(self2, err);
      emitCloseNT(self2);
    }
    function emitCloseNT(self2) {
      if (self2._writableState && !self2._writableState.emitClose)
        return;
      if (self2._readableState && !self2._readableState.emitClose)
        return;
      self2.emit("close");
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    function errorOrDestroy(stream, err) {
      var rState = stream._readableState;
      var wState = stream._writableState;
      if (rState && rState.autoDestroy || wState && wState.autoDestroy)
        stream.destroy(err);
      else
        stream.emit("error", err);
    }
    module2.exports = {
      destroy,
      undestroy,
      errorOrDestroy
    };
  }
});

// node_modules/readable-stream/errors.js
var require_errors = __commonJS({
  "node_modules/readable-stream/errors.js"(exports, module2) {
    "use strict";
    var codes = {};
    function createErrorType(code, message, Base) {
      if (!Base) {
        Base = Error;
      }
      function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") {
          return message;
        } else {
          return message(arg1, arg2, arg3);
        }
      }
      class NodeError extends Base {
        constructor(arg1, arg2, arg3) {
          super(getMessage(arg1, arg2, arg3));
        }
      }
      NodeError.prototype.name = Base.name;
      NodeError.prototype.code = code;
      codes[code] = NodeError;
    }
    function oneOf(expected, thing) {
      if (Array.isArray(expected)) {
        const len = expected.length;
        expected = expected.map((i) => String(i));
        if (len > 2) {
          return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
        } else if (len === 2) {
          return `one of ${thing} ${expected[0]} or ${expected[1]}`;
        } else {
          return `of ${thing} ${expected[0]}`;
        }
      } else {
        return `of ${thing} ${String(expected)}`;
      }
    }
    function startsWith(str, search, pos) {
      return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    }
    function endsWith(str, search, this_len) {
      if (this_len === void 0 || this_len > str.length) {
        this_len = str.length;
      }
      return str.substring(this_len - search.length, this_len) === search;
    }
    function includes(str, search, start) {
      if (typeof start !== "number") {
        start = 0;
      }
      if (start + search.length > str.length) {
        return false;
      } else {
        return str.indexOf(search, start) !== -1;
      }
    }
    createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
      return 'The value "' + value + '" is invalid for option "' + name + '"';
    }, TypeError);
    createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
      let determiner;
      if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
      } else {
        determiner = "must be";
      }
      let msg;
      if (endsWith(name, " argument")) {
        msg = `The ${name} ${determiner} ${oneOf(expected, "type")}`;
      } else {
        const type = includes(name, ".") ? "property" : "argument";
        msg = `The "${name}" ${type} ${determiner} ${oneOf(expected, "type")}`;
      }
      msg += `. Received type ${typeof actual}`;
      return msg;
    }, TypeError);
    createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
      return "The " + name + " method is not implemented";
    });
    createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    createErrorType("ERR_STREAM_DESTROYED", function(name) {
      return "Cannot call " + name + " after a stream was destroyed";
    });
    createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
      return "Unknown encoding: " + arg;
    }, TypeError);
    createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    module2.exports.codes = codes;
  }
});

// node_modules/readable-stream/lib/internal/streams/state.js
var require_state = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/state.js"(exports, module2) {
    "use strict";
    var ERR_INVALID_OPT_VALUE = require_errors().codes.ERR_INVALID_OPT_VALUE;
    function highWaterMarkFrom(options, isDuplex, duplexKey) {
      return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
    }
    function getHighWaterMark(state, options, duplexKey, isDuplex) {
      var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
      if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
          var name = isDuplex ? duplexKey : "highWaterMark";
          throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
      }
      return state.objectMode ? 16 : 16 * 1024;
    }
    module2.exports = {
      getHighWaterMark
    };
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module2) {
    "use strict";
    if (typeof Object.create === "function") {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  "node_modules/inherits/inherits.js"(exports, module2) {
    "use strict";
    try {
      util = require("util");
      if (typeof util.inherits !== "function")
        throw "";
      module2.exports = util.inherits;
    } catch (e) {
      module2.exports = require_inherits_browser();
    }
    var util;
  }
});

// node_modules/util-deprecate/node.js
var require_node = __commonJS({
  "node_modules/util-deprecate/node.js"(exports, module2) {
    "use strict";
    module2.exports = require("util").deprecate;
  }
});

// node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/readable-stream/lib/_stream_writable.js"(exports, module2) {
    "use strict";
    module2.exports = Writable;
    function CorkedRequest(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    var Duplex;
    Writable.WritableState = WritableState;
    var internalUtil = {
      deprecate: require_node()
    };
    var Stream = require_stream();
    var Buffer2 = require("buffer").Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES;
    var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END;
    var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    require_inherits()(Writable, Stream);
    function nop() {
    }
    function WritableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean")
        isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, "buffer", {
          get: internalUtil.deprecate(function writableStateBufferGetter() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
          if (realHasInstance.call(this, object))
            return true;
          if (this !== Writable)
            return false;
          return object && object._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function realHasInstance2(object) {
        return object instanceof this;
      };
    }
    function Writable(options) {
      Duplex = Duplex || require_stream_duplex();
      var isDuplex = this instanceof Duplex;
      if (!isDuplex && !realHasInstance.call(Writable, this))
        return new Writable(options);
      this._writableState = new WritableState(options, this, isDuplex);
      this.writable = true;
      if (options) {
        if (typeof options.write === "function")
          this._write = options.write;
        if (typeof options.writev === "function")
          this._writev = options.writev;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
        if (typeof options.final === "function")
          this._final = options.final;
      }
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
    };
    function writeAfterEnd(stream, cb) {
      var er = new ERR_STREAM_WRITE_AFTER_END();
      errorOrDestroy(stream, er);
      process.nextTick(cb, er);
    }
    function validChunk(stream, state, chunk, cb) {
      var er;
      if (chunk === null) {
        er = new ERR_STREAM_NULL_VALUES();
      } else if (typeof chunk !== "string" && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
      }
      if (er) {
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
      }
      return true;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf)
        encoding = "buffer";
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (typeof cb !== "function")
        cb = nop;
      if (state.ending)
        writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      this._writableState.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest)
          clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string")
        encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
        throw new ERR_UNKNOWN_ENCODING(encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer2.from(chunk, encoding);
      }
      return chunk;
    }
    Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (state.destroyed)
        state.onwrite(new ERR_STREAM_DESTROYED("write"));
      else if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync) {
        process.nextTick(cb, er);
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
        finishMaybe(stream, state);
      }
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      if (typeof cb !== "function")
        throw new ERR_MULTIPLE_CALLBACK();
      onwriteStateUpdate(state);
      if (er)
        onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
        if (sync) {
          process.nextTick(afterWrite, stream, state, finished, cb);
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf)
            allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          if (state.writing) {
            break;
          }
        }
        if (entry === null)
          state.lastBufferedRequest = null;
      }
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0)
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending)
        endWritable(this, state, cb);
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.length;
      }
    });
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
      stream._final(function(err) {
        state.pendingcb--;
        if (err) {
          errorOrDestroy(stream, err);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
      });
    }
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
          state.pendingcb++;
          state.finalCalled = true;
          process.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit("finish");
          if (state.autoDestroy) {
            var rState = stream._readableState;
            if (!rState || rState.autoDestroy && rState.endEmitted) {
              stream.destroy();
            }
          }
        }
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished)
          process.nextTick(cb);
        else
          stream.once("finish", cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      state.corkedRequestsFree.next = corkReq;
    }
    Object.defineProperty(Writable.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function set(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }
    });
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err, cb) {
      cb(err);
    };
  }
});

// node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/readable-stream/lib/_stream_duplex.js"(exports, module2) {
    "use strict";
    var objectKeys = Object.keys || function(obj) {
      var keys2 = [];
      for (var key in obj)
        keys2.push(key);
      return keys2;
    };
    module2.exports = Duplex;
    var Readable = require_stream_readable();
    var Writable = require_stream_writable();
    require_inherits()(Duplex, Readable);
    {
      keys = objectKeys(Writable.prototype);
      for (v = 0; v < keys.length; v++) {
        method = keys[v];
        if (!Duplex.prototype[method])
          Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    var keys;
    var method;
    var v;
    function Duplex(options) {
      if (!(this instanceof Duplex))
        return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      this.allowHalfOpen = true;
      if (options) {
        if (options.readable === false)
          this.readable = false;
        if (options.writable === false)
          this.writable = false;
        if (options.allowHalfOpen === false) {
          this.allowHalfOpen = false;
          this.once("end", onend);
        }
      }
    }
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    });
    Object.defineProperty(Duplex.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    Object.defineProperty(Duplex.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.length;
      }
    });
    function onend() {
      if (this._writableState.ended)
        return;
      process.nextTick(onEndNT, this);
    }
    function onEndNT(self2) {
      self2.end();
    }
    Object.defineProperty(Duplex.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function set(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module2) {
    "use strict";
    var buffer = require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "node_modules/string_decoder/lib/string_decoder.js"(exports) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var isEncoding = Buffer2.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc)
        return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried)
              return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
        throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    exports.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0)
        return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0)
          return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length)
        return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127)
        return 0;
      else if (byte >> 5 === 6)
        return 2;
      else if (byte >> 4 === 14)
        return 3;
      else if (byte >> 3 === 30)
        return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self2, buf, i) {
      var j = buf.length - 1;
      if (j < i)
        return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2)
            nb = 0;
          else
            self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self2, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "\uFFFD";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "\uFFFD";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "\uFFFD";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== void 0)
        return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed)
        return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + "\uFFFD";
      return r;
    }
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0)
        return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
  }
});

// node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/end-of-stream.js"(exports, module2) {
    "use strict";
    var ERR_STREAM_PREMATURE_CLOSE = require_errors().codes.ERR_STREAM_PREMATURE_CLOSE;
    function once(callback) {
      var called = false;
      return function() {
        if (called)
          return;
        called = true;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        callback.apply(this, args);
      };
    }
    function noop() {
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function eos(stream, opts, callback) {
      if (typeof opts === "function")
        return eos(stream, null, opts);
      if (!opts)
        opts = {};
      callback = once(callback || noop);
      var readable = opts.readable || opts.readable !== false && stream.readable;
      var writable = opts.writable || opts.writable !== false && stream.writable;
      var onlegacyfinish = function onlegacyfinish2() {
        if (!stream.writable)
          onfinish();
      };
      var writableEnded = stream._writableState && stream._writableState.finished;
      var onfinish = function onfinish2() {
        writable = false;
        writableEnded = true;
        if (!readable)
          callback.call(stream);
      };
      var readableEnded = stream._readableState && stream._readableState.endEmitted;
      var onend = function onend2() {
        readable = false;
        readableEnded = true;
        if (!writable)
          callback.call(stream);
      };
      var onerror = function onerror2(err) {
        callback.call(stream, err);
      };
      var onclose = function onclose2() {
        var err;
        if (readable && !readableEnded) {
          if (!stream._readableState || !stream._readableState.ended)
            err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
          if (!stream._writableState || !stream._writableState.ended)
            err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
      };
      var onrequest = function onrequest2() {
        stream.req.on("finish", onfinish);
      };
      if (isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req)
          onrequest();
        else
          stream.on("request", onrequest);
      } else if (writable && !stream._writableState) {
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
      }
      stream.on("end", onend);
      stream.on("finish", onfinish);
      if (opts.error !== false)
        stream.on("error", onerror);
      stream.on("close", onclose);
      return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req)
          stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
      };
    }
    module2.exports = eos;
  }
});

// node_modules/readable-stream/lib/internal/streams/async_iterator.js
var require_async_iterator = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/async_iterator.js"(exports, module2) {
    "use strict";
    var _Object$setPrototypeO;
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var finished = require_end_of_stream();
    var kLastResolve = Symbol("lastResolve");
    var kLastReject = Symbol("lastReject");
    var kError = Symbol("error");
    var kEnded = Symbol("ended");
    var kLastPromise = Symbol("lastPromise");
    var kHandlePromise = Symbol("handlePromise");
    var kStream = Symbol("stream");
    function createIterResult(value, done) {
      return {
        value,
        done
      };
    }
    function readAndResolve(iter) {
      var resolve = iter[kLastResolve];
      if (resolve !== null) {
        var data = iter[kStream].read();
        if (data !== null) {
          iter[kLastPromise] = null;
          iter[kLastResolve] = null;
          iter[kLastReject] = null;
          resolve(createIterResult(data, false));
        }
      }
    }
    function onReadable(iter) {
      process.nextTick(readAndResolve, iter);
    }
    function wrapForNext(lastPromise, iter) {
      return function(resolve, reject) {
        lastPromise.then(function() {
          if (iter[kEnded]) {
            resolve(createIterResult(void 0, true));
            return;
          }
          iter[kHandlePromise](resolve, reject);
        }, reject);
      };
    }
    var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
    });
    var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
      get stream() {
        return this[kStream];
      },
      next: function next() {
        var _this = this;
        var error = this[kError];
        if (error !== null) {
          return Promise.reject(error);
        }
        if (this[kEnded]) {
          return Promise.resolve(createIterResult(void 0, true));
        }
        if (this[kStream].destroyed) {
          return new Promise(function(resolve, reject) {
            process.nextTick(function() {
              if (_this[kError]) {
                reject(_this[kError]);
              } else {
                resolve(createIterResult(void 0, true));
              }
            });
          });
        }
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) {
          promise = new Promise(wrapForNext(lastPromise, this));
        } else {
          var data = this[kStream].read();
          if (data !== null) {
            return Promise.resolve(createIterResult(data, false));
          }
          promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
      }
    }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
      return this;
    }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
      var _this2 = this;
      return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
          if (err) {
            reject(err);
            return;
          }
          resolve(createIterResult(void 0, true));
        });
      });
    }), _Object$setPrototypeO), AsyncIteratorPrototype);
    var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
      var _Object$create;
      var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
      }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
      }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve, reject) {
          var data = iterator[kStream].read();
          if (data) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(data, false));
          } else {
            iterator[kLastResolve] = resolve;
            iterator[kLastReject] = reject;
          }
        },
        writable: true
      }), _Object$create));
      iterator[kLastPromise] = null;
      finished(stream, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var reject = iterator[kLastReject];
          if (reject !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            reject(err);
          }
          iterator[kError] = err;
          return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(void 0, true));
        }
        iterator[kEnded] = true;
      });
      stream.on("readable", onReadable.bind(null, iterator));
      return iterator;
    };
    module2.exports = createReadableStreamAsyncIterator;
  }
});

// node_modules/readable-stream/lib/internal/streams/from.js
var require_from = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/from.js"(exports, module2) {
    "use strict";
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var ERR_INVALID_ARG_TYPE = require_errors().codes.ERR_INVALID_ARG_TYPE;
    function from(Readable, iterable, opts) {
      var iterator;
      if (iterable && typeof iterable.next === "function") {
        iterator = iterable;
      } else if (iterable && iterable[Symbol.asyncIterator])
        iterator = iterable[Symbol.asyncIterator]();
      else if (iterable && iterable[Symbol.iterator])
        iterator = iterable[Symbol.iterator]();
      else
        throw new ERR_INVALID_ARG_TYPE("iterable", ["Iterable"], iterable);
      var readable = new Readable(_objectSpread({
        objectMode: true
      }, opts));
      var reading = false;
      readable._read = function() {
        if (!reading) {
          reading = true;
          next();
        }
      };
      function next() {
        return _next2.apply(this, arguments);
      }
      function _next2() {
        _next2 = _asyncToGenerator(function* () {
          try {
            var _yield$iterator$next = yield iterator.next(), value = _yield$iterator$next.value, done = _yield$iterator$next.done;
            if (done) {
              readable.push(null);
            } else if (readable.push(yield value)) {
              next();
            } else {
              reading = false;
            }
          } catch (err) {
            readable.destroy(err);
          }
        });
        return _next2.apply(this, arguments);
      }
      return readable;
    }
    module2.exports = from;
  }
});

// node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/readable-stream/lib/_stream_readable.js"(exports, module2) {
    "use strict";
    module2.exports = Readable;
    var Duplex;
    Readable.ReadableState = ReadableState;
    var EE = require("events").EventEmitter;
    var EElistenerCount = function EElistenerCount2(emitter, type) {
      return emitter.listeners(type).length;
    };
    var Stream = require_stream();
    var Buffer2 = require("buffer").Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var debugUtil = require("util");
    var debug;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog("stream");
    } else {
      debug = function debug2() {
      };
    }
    var BufferList = require_buffer_list();
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    var StringDecoder;
    var createReadableStreamAsyncIterator;
    var from;
    require_inherits()(Readable, Stream);
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === "function")
        return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (Array.isArray(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [fn, emitter._events[event]];
    }
    function ReadableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean")
        isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.paused = true;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.destroyed = false;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder)
          StringDecoder = require_string_decoder().StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {
      Duplex = Duplex || require_stream_duplex();
      if (!(this instanceof Readable))
        return new Readable(options);
      var isDuplex = this instanceof Duplex;
      this._readableState = new ReadableState(options, this, isDuplex);
      this.readable = true;
      if (options) {
        if (typeof options.read === "function")
          this._read = options.read;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
      }
      Stream.call(this);
    }
    Object.defineProperty(Readable.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function set(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }
    });
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function(err, cb) {
      cb(err);
    };
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
      if (!state.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer2.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      debug("readableAddChunk", chunk);
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er;
        if (!skipChunkCheck)
          er = chunkInvalid(state, chunk);
        if (er) {
          errorOrDestroy(stream, er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state.endEmitted)
              errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
            else
              addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
          } else if (state.destroyed) {
            return false;
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0)
                addChunk(stream, state, chunk, false);
              else
                maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
          maybeReadMore(stream, state);
        }
      }
      return !state.ended && (state.length < state.highWaterMark || state.length === 0);
    }
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit("data", chunk);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront)
          state.buffer.unshift(chunk);
        else
          state.buffer.push(chunk);
        if (state.needReadable)
          emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    function chunkInvalid(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
      }
      return er;
    }
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder)
        StringDecoder = require_string_decoder().StringDecoder;
      var decoder = new StringDecoder(enc);
      this._readableState.decoder = decoder;
      this._readableState.encoding = this._readableState.decoder.encoding;
      var p = this._readableState.buffer.head;
      var content = "";
      while (p !== null) {
        content += decoder.write(p.data);
        p = p.next;
      }
      this._readableState.buffer.clear();
      if (content !== "")
        this._readableState.buffer.push(content);
      this._readableState.length = content.length;
      return this;
    };
    var MAX_HWM = 1073741824;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state) {
      if (n <= 0 || state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return 1;
      if (n !== n) {
        if (state.flowing && state.length)
          return state.buffer.head.data.length;
        else
          return state.length;
      }
      if (n > state.highWaterMark)
        state.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state.length)
        return n;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    Readable.prototype.read = function(n) {
      debug("read", n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
      if (n !== 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading)
          n = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
      } else {
        state.length -= n;
        state.awaitDrain = 0;
      }
      if (state.length === 0) {
        if (!state.ended)
          state.needReadable = true;
        if (nOrig !== n && state.ended)
          endReadable(this);
      }
      if (ret !== null)
        this.emit("data", ret);
      return ret;
    };
    function onEofChunk(stream, state) {
      debug("onEofChunk");
      if (state.ended)
        return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      if (state.sync) {
        emitReadable(stream);
      } else {
        state.needReadable = false;
        if (!state.emittedReadable) {
          state.emittedReadable = true;
          emitReadable_(stream);
        }
      }
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      debug("emitReadable", state.needReadable, state.emittedReadable);
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
      }
    }
    function emitReadable_(stream) {
      var state = stream._readableState;
      debug("emitReadable_", state.destroyed, state.length, state.ended);
      if (!state.destroyed && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
      }
      state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
      }
    }
    function maybeReadMore_(stream, state) {
      while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
        var len = state.length;
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length)
          break;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n) {
      errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted)
        process.nextTick(endFn);
      else
        src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        var ret = dest.write(chunk);
        debug("dest.write", ret);
        if (ret === false) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", state.awaitDrain);
            state.awaitDrain++;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0)
          errorOrDestroy(dest, er);
      }
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain)
          state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      var unpipeInfo = {
        hasUnpiped: false
      };
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++)
          dests[i].emit("unpipe", this, {
            hasUnpiped: false
          });
        return this;
      }
      var index = indexOf(state.pipes, dest);
      if (index === -1)
        return this;
      state.pipes.splice(index, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      var state = this._readableState;
      if (ev === "data") {
        state.readableListening = this.listenerCount("readable") > 0;
        if (state.flowing !== false)
          this.resume();
      } else if (ev === "readable") {
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.flowing = false;
          state.emittedReadable = false;
          debug("on readable", state.length, state.reading);
          if (state.length) {
            emitReadable(this);
          } else if (!state.reading) {
            process.nextTick(nReadingNextTick, this);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.removeListener = function(ev, fn) {
      var res = Stream.prototype.removeListener.call(this, ev, fn);
      if (ev === "readable") {
        process.nextTick(updateReadableListening, this);
      }
      return res;
    };
    Readable.prototype.removeAllListeners = function(ev) {
      var res = Stream.prototype.removeAllListeners.apply(this, arguments);
      if (ev === "readable" || ev === void 0) {
        process.nextTick(updateReadableListening, this);
      }
      return res;
    };
    function updateReadableListening(self2) {
      var state = self2._readableState;
      state.readableListening = self2.listenerCount("readable") > 0;
      if (state.resumeScheduled && !state.paused) {
        state.flowing = true;
      } else if (self2.listenerCount("data") > 0) {
        self2.resume();
      }
    }
    function nReadingNextTick(self2) {
      debug("readable nexttick read 0");
      self2.read(0);
    }
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = !state.readableListening;
        resume(this, state);
      }
      state.paused = false;
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
      }
    }
    function resume_(stream, state) {
      debug("resume", state.reading);
      if (!state.reading) {
        stream.read(0);
      }
      state.resumeScheduled = false;
      stream.emit("resume");
      flow(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      this._readableState.paused = true;
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug("flow", state.flowing);
      while (state.flowing && stream.read() !== null)
        ;
    }
    Readable.prototype.wrap = function(stream) {
      var _this = this;
      var state = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0))
          return;
        else if (!state.objectMode && (!chunk || !chunk.length))
          return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = function methodWrap(method) {
            return function methodWrapReturnFunction() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
      this._read = function(n2) {
        debug("wrapped _read", n2);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    if (typeof Symbol === "function") {
      Readable.prototype[Symbol.asyncIterator] = function() {
        if (createReadableStreamAsyncIterator === void 0) {
          createReadableStreamAsyncIterator = require_async_iterator();
        }
        return createReadableStreamAsyncIterator(this);
      };
    }
    Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState.highWaterMark;
      }
    });
    Object.defineProperty(Readable.prototype, "readableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState && this._readableState.buffer;
      }
    });
    Object.defineProperty(Readable.prototype, "readableFlowing", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState.flowing;
      },
      set: function set(state) {
        if (this._readableState) {
          this._readableState.flowing = state;
        }
      }
    });
    Readable._fromList = fromList;
    Object.defineProperty(Readable.prototype, "readableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState.length;
      }
    });
    function fromList(n, state) {
      if (state.length === 0)
        return null;
      var ret;
      if (state.objectMode)
        ret = state.buffer.shift();
      else if (!n || n >= state.length) {
        if (state.decoder)
          ret = state.buffer.join("");
        else if (state.buffer.length === 1)
          ret = state.buffer.first();
        else
          ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = state.buffer.consume(n, state.decoder);
      }
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      debug("endReadable", state.endEmitted);
      if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
      }
    }
    function endReadableNT(state, stream) {
      debug("endReadableNT", state.endEmitted, state.length);
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
        if (state.autoDestroy) {
          var wState = stream._writableState;
          if (!wState || wState.autoDestroy && wState.finished) {
            stream.destroy();
          }
        }
      }
    }
    if (typeof Symbol === "function") {
      Readable.from = function(iterable, opts) {
        if (from === void 0) {
          from = require_from();
        }
        return from(Readable, iterable, opts);
      };
    }
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x)
          return i;
      }
      return -1;
    }
  }
});

// node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/readable-stream/lib/_stream_transform.js"(exports, module2) {
    "use strict";
    module2.exports = Transform;
    var _require$codes = require_errors().codes;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING;
    var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
    var Duplex = require_stream_duplex();
    require_inherits()(Transform, Duplex);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (cb === null) {
        return this.emit("error", new ERR_MULTIPLE_CALLBACK());
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null)
        this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform))
        return new Transform(options);
      Duplex.call(this, options);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === "function")
          this._transform = options.transform;
        if (typeof options.flush === "function")
          this._flush = options.flush;
      }
      this.on("prefinish", prefinish);
    }
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function" && !this._readableState.destroyed) {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform.prototype._destroy = function(err, cb) {
      Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
      });
    };
    function done(stream, er, data) {
      if (er)
        return stream.emit("error", er);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length)
        throw new ERR_TRANSFORM_WITH_LENGTH_0();
      if (stream._transformState.transforming)
        throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
      return stream.push(null);
    }
  }
});

// node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module2) {
    "use strict";
    module2.exports = PassThrough;
    var Transform = require_stream_transform();
    require_inherits()(PassThrough, Transform);
    function PassThrough(options) {
      if (!(this instanceof PassThrough))
        return new PassThrough(options);
      Transform.call(this, options);
    }
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/pipeline.js"(exports, module2) {
    "use strict";
    var eos;
    function once(callback) {
      var called = false;
      return function() {
        if (called)
          return;
        called = true;
        callback.apply(void 0, arguments);
      };
    }
    var _require$codes = require_errors().codes;
    var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    function noop(err) {
      if (err)
        throw err;
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function destroyer(stream, reading, writing, callback) {
      callback = once(callback);
      var closed = false;
      stream.on("close", function() {
        closed = true;
      });
      if (eos === void 0)
        eos = require_end_of_stream();
      eos(stream, {
        readable: reading,
        writable: writing
      }, function(err) {
        if (err)
          return callback(err);
        closed = true;
        callback();
      });
      var destroyed = false;
      return function(err) {
        if (closed)
          return;
        if (destroyed)
          return;
        destroyed = true;
        if (isRequest(stream))
          return stream.abort();
        if (typeof stream.destroy === "function")
          return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED("pipe"));
      };
    }
    function call(fn) {
      fn();
    }
    function pipe(from, to) {
      return from.pipe(to);
    }
    function popCallback(streams) {
      if (!streams.length)
        return noop;
      if (typeof streams[streams.length - 1] !== "function")
        return noop;
      return streams.pop();
    }
    function pipeline() {
      for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
        streams[_key] = arguments[_key];
      }
      var callback = popCallback(streams);
      if (Array.isArray(streams[0]))
        streams = streams[0];
      if (streams.length < 2) {
        throw new ERR_MISSING_ARGS("streams");
      }
      var error;
      var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
          if (!error)
            error = err;
          if (err)
            destroys.forEach(call);
          if (reading)
            return;
          destroys.forEach(call);
          callback(error);
        });
      });
      return streams.reduce(pipe);
    }
    module2.exports = pipeline;
  }
});

// node_modules/readable-stream/readable.js
var require_readable = __commonJS({
  "node_modules/readable-stream/readable.js"(exports, module2) {
    "use strict";
    var Stream = require("stream");
    if (process.env.READABLE_STREAM === "disable" && Stream) {
      module2.exports = Stream.Readable;
      Object.assign(module2.exports, Stream);
      module2.exports.Stream = Stream;
    } else {
      exports = module2.exports = require_stream_readable();
      exports.Stream = Stream || exports;
      exports.Readable = exports;
      exports.Writable = require_stream_writable();
      exports.Duplex = require_stream_duplex();
      exports.Transform = require_stream_transform();
      exports.PassThrough = require_stream_passthrough();
      exports.finished = require_end_of_stream();
      exports.pipeline = require_pipeline();
    }
  }
});

// node_modules/delegates/index.js
var require_delegates = __commonJS({
  "node_modules/delegates/index.js"(exports, module2) {
    "use strict";
    module2.exports = Delegator;
    function Delegator(proto, target) {
      if (!(this instanceof Delegator))
        return new Delegator(proto, target);
      this.proto = proto;
      this.target = target;
      this.methods = [];
      this.getters = [];
      this.setters = [];
      this.fluents = [];
    }
    Delegator.prototype.method = function(name) {
      var proto = this.proto;
      var target = this.target;
      this.methods.push(name);
      proto[name] = function() {
        return this[target][name].apply(this[target], arguments);
      };
      return this;
    };
    Delegator.prototype.access = function(name) {
      return this.getter(name).setter(name);
    };
    Delegator.prototype.getter = function(name) {
      var proto = this.proto;
      var target = this.target;
      this.getters.push(name);
      proto.__defineGetter__(name, function() {
        return this[target][name];
      });
      return this;
    };
    Delegator.prototype.setter = function(name) {
      var proto = this.proto;
      var target = this.target;
      this.setters.push(name);
      proto.__defineSetter__(name, function(val) {
        return this[target][name] = val;
      });
      return this;
    };
    Delegator.prototype.fluent = function(name) {
      var proto = this.proto;
      var target = this.target;
      this.fluents.push(name);
      proto[name] = function(val) {
        if ("undefined" != typeof val) {
          this[target][name] = val;
          return this;
        } else {
          return this[target][name];
        }
      };
      return this;
    };
  }
});

// node_modules/are-we-there-yet/lib/tracker-stream.js
var require_tracker_stream = __commonJS({
  "node_modules/are-we-there-yet/lib/tracker-stream.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var stream = require_readable();
    var delegate = require_delegates();
    var Tracker = require_tracker();
    var TrackerStream = module2.exports = function(name, size, options) {
      stream.Transform.call(this, options);
      this.tracker = new Tracker(name, size);
      this.name = name;
      this.id = this.tracker.id;
      this.tracker.on("change", delegateChange(this));
    };
    util.inherits(TrackerStream, stream.Transform);
    function delegateChange(trackerStream) {
      return function(name, completion, tracker) {
        trackerStream.emit("change", name, completion, trackerStream);
      };
    }
    TrackerStream.prototype._transform = function(data, encoding, cb) {
      this.tracker.completeWork(data.length ? data.length : 1);
      this.push(data);
      cb();
    };
    TrackerStream.prototype._flush = function(cb) {
      this.tracker.finish();
      cb();
    };
    delegate(TrackerStream.prototype, "tracker").method("completed").method("addWork").method("finish");
  }
});

// node_modules/are-we-there-yet/lib/tracker-group.js
var require_tracker_group = __commonJS({
  "node_modules/are-we-there-yet/lib/tracker-group.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var TrackerBase = require_tracker_base();
    var Tracker = require_tracker();
    var TrackerStream = require_tracker_stream();
    var TrackerGroup = module2.exports = function(name) {
      TrackerBase.call(this, name);
      this.parentGroup = null;
      this.trackers = [];
      this.completion = {};
      this.weight = {};
      this.totalWeight = 0;
      this.finished = false;
      this.bubbleChange = bubbleChange(this);
    };
    util.inherits(TrackerGroup, TrackerBase);
    function bubbleChange(trackerGroup) {
      return function(name, completed, tracker) {
        trackerGroup.completion[tracker.id] = completed;
        if (trackerGroup.finished) {
          return;
        }
        trackerGroup.emit("change", name || trackerGroup.name, trackerGroup.completed(), trackerGroup);
      };
    }
    TrackerGroup.prototype.nameInTree = function() {
      var names = [];
      var from = this;
      while (from) {
        names.unshift(from.name);
        from = from.parentGroup;
      }
      return names.join("/");
    };
    TrackerGroup.prototype.addUnit = function(unit, weight) {
      if (unit.addUnit) {
        var toTest = this;
        while (toTest) {
          if (unit === toTest) {
            throw new Error(
              "Attempted to add tracker group " + unit.name + " to tree that already includes it " + this.nameInTree(this)
            );
          }
          toTest = toTest.parentGroup;
        }
        unit.parentGroup = this;
      }
      this.weight[unit.id] = weight || 1;
      this.totalWeight += this.weight[unit.id];
      this.trackers.push(unit);
      this.completion[unit.id] = unit.completed();
      unit.on("change", this.bubbleChange);
      if (!this.finished) {
        this.emit("change", unit.name, this.completion[unit.id], unit);
      }
      return unit;
    };
    TrackerGroup.prototype.completed = function() {
      if (this.trackers.length === 0) {
        return 0;
      }
      var valPerWeight = 1 / this.totalWeight;
      var completed = 0;
      for (var ii = 0; ii < this.trackers.length; ii++) {
        var trackerId = this.trackers[ii].id;
        completed += valPerWeight * this.weight[trackerId] * this.completion[trackerId];
      }
      return completed;
    };
    TrackerGroup.prototype.newGroup = function(name, weight) {
      return this.addUnit(new TrackerGroup(name), weight);
    };
    TrackerGroup.prototype.newItem = function(name, todo, weight) {
      return this.addUnit(new Tracker(name, todo), weight);
    };
    TrackerGroup.prototype.newStream = function(name, todo, weight) {
      return this.addUnit(new TrackerStream(name, todo), weight);
    };
    TrackerGroup.prototype.finish = function() {
      this.finished = true;
      if (!this.trackers.length) {
        this.addUnit(new Tracker(), 1, true);
      }
      for (var ii = 0; ii < this.trackers.length; ii++) {
        var tracker = this.trackers[ii];
        tracker.finish();
        tracker.removeListener("change", this.bubbleChange);
      }
      this.emit("change", this.name, 1, this);
    };
    var buffer = "                                  ";
    TrackerGroup.prototype.debug = function(depth) {
      depth = depth || 0;
      var indent = depth ? buffer.substr(0, depth) : "";
      var output = indent + (this.name || "top") + ": " + this.completed() + "\n";
      this.trackers.forEach(function(tracker) {
        if (tracker instanceof TrackerGroup) {
          output += tracker.debug(depth + 1);
        } else {
          output += indent + " " + tracker.name + ": " + tracker.completed() + "\n";
        }
      });
      return output;
    };
  }
});

// node_modules/are-we-there-yet/lib/index.js
var require_lib = __commonJS({
  "node_modules/are-we-there-yet/lib/index.js"(exports) {
    "use strict";
    exports.TrackerGroup = require_tracker_group();
    exports.Tracker = require_tracker();
    exports.TrackerStream = require_tracker_stream();
  }
});

// node_modules/console-control-strings/index.js
var require_console_control_strings = __commonJS({
  "node_modules/console-control-strings/index.js"(exports) {
    "use strict";
    var prefix = "\x1B[";
    exports.up = function up(num) {
      return prefix + (num || "") + "A";
    };
    exports.down = function down(num) {
      return prefix + (num || "") + "B";
    };
    exports.forward = function forward(num) {
      return prefix + (num || "") + "C";
    };
    exports.back = function back(num) {
      return prefix + (num || "") + "D";
    };
    exports.nextLine = function nextLine(num) {
      return prefix + (num || "") + "E";
    };
    exports.previousLine = function previousLine(num) {
      return prefix + (num || "") + "F";
    };
    exports.horizontalAbsolute = function horizontalAbsolute(num) {
      if (num == null)
        throw new Error("horizontalAboslute requires a column to position to");
      return prefix + num + "G";
    };
    exports.eraseData = function eraseData() {
      return prefix + "J";
    };
    exports.eraseLine = function eraseLine() {
      return prefix + "K";
    };
    exports.goto = function(x, y) {
      return prefix + y + ";" + x + "H";
    };
    exports.gotoSOL = function() {
      return "\r";
    };
    exports.beep = function() {
      return "\x07";
    };
    exports.hideCursor = function hideCursor() {
      return prefix + "?25l";
    };
    exports.showCursor = function showCursor() {
      return prefix + "?25h";
    };
    var colors = {
      reset: 0,
      // styles
      bold: 1,
      italic: 3,
      underline: 4,
      inverse: 7,
      // resets
      stopBold: 22,
      stopItalic: 23,
      stopUnderline: 24,
      stopInverse: 27,
      // colors
      white: 37,
      black: 30,
      blue: 34,
      cyan: 36,
      green: 32,
      magenta: 35,
      red: 31,
      yellow: 33,
      bgWhite: 47,
      bgBlack: 40,
      bgBlue: 44,
      bgCyan: 46,
      bgGreen: 42,
      bgMagenta: 45,
      bgRed: 41,
      bgYellow: 43,
      grey: 90,
      brightBlack: 90,
      brightRed: 91,
      brightGreen: 92,
      brightYellow: 93,
      brightBlue: 94,
      brightMagenta: 95,
      brightCyan: 96,
      brightWhite: 97,
      bgGrey: 100,
      bgBrightBlack: 100,
      bgBrightRed: 101,
      bgBrightGreen: 102,
      bgBrightYellow: 103,
      bgBrightBlue: 104,
      bgBrightMagenta: 105,
      bgBrightCyan: 106,
      bgBrightWhite: 107
    };
    exports.color = function color(colorWith) {
      if (arguments.length !== 1 || !Array.isArray(colorWith)) {
        colorWith = Array.prototype.slice.call(arguments);
      }
      return prefix + colorWith.map(colorNameToCode).join(";") + "m";
    };
    function colorNameToCode(color) {
      if (colors[color] != null)
        return colors[color];
      throw new Error("Unknown color or style name: " + color);
    }
  }
});

// node_modules/ansi-regex/index.js
var require_ansi_regex = __commonJS({
  "node_modules/ansi-regex/index.js"(exports, module2) {
    "use strict";
    module2.exports = ({ onlyFirst = false } = {}) => {
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|");
      return new RegExp(pattern, onlyFirst ? void 0 : "g");
    };
  }
});

// node_modules/strip-ansi/index.js
var require_strip_ansi = __commonJS({
  "node_modules/strip-ansi/index.js"(exports, module2) {
    "use strict";
    var ansiRegex = require_ansi_regex();
    module2.exports = (string) => typeof string === "string" ? string.replace(ansiRegex(), "") : string;
  }
});

// node_modules/is-fullwidth-code-point/index.js
var require_is_fullwidth_code_point = __commonJS({
  "node_modules/is-fullwidth-code-point/index.js"(exports, module2) {
    "use strict";
    var isFullwidthCodePoint = (codePoint) => {
      if (Number.isNaN(codePoint)) {
        return false;
      }
      if (codePoint >= 4352 && (codePoint <= 4447 || // Hangul Jamo
      codePoint === 9001 || // LEFT-POINTING ANGLE BRACKET
      codePoint === 9002 || // RIGHT-POINTING ANGLE BRACKET
      // CJK Radicals Supplement .. Enclosed CJK Letters and Months
      11904 <= codePoint && codePoint <= 12871 && codePoint !== 12351 || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
      12880 <= codePoint && codePoint <= 19903 || // CJK Unified Ideographs .. Yi Radicals
      19968 <= codePoint && codePoint <= 42182 || // Hangul Jamo Extended-A
      43360 <= codePoint && codePoint <= 43388 || // Hangul Syllables
      44032 <= codePoint && codePoint <= 55203 || // CJK Compatibility Ideographs
      63744 <= codePoint && codePoint <= 64255 || // Vertical Forms
      65040 <= codePoint && codePoint <= 65049 || // CJK Compatibility Forms .. Small Form Variants
      65072 <= codePoint && codePoint <= 65131 || // Halfwidth and Fullwidth Forms
      65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510 || // Kana Supplement
      110592 <= codePoint && codePoint <= 110593 || // Enclosed Ideographic Supplement
      127488 <= codePoint && codePoint <= 127569 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
      131072 <= codePoint && codePoint <= 262141)) {
        return true;
      }
      return false;
    };
    module2.exports = isFullwidthCodePoint;
    module2.exports.default = isFullwidthCodePoint;
  }
});

// node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS({
  "node_modules/emoji-regex/index.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
    };
  }
});

// node_modules/string-width/index.js
var require_string_width = __commonJS({
  "node_modules/string-width/index.js"(exports, module2) {
    "use strict";
    var stripAnsi = require_strip_ansi();
    var isFullwidthCodePoint = require_is_fullwidth_code_point();
    var emojiRegex = require_emoji_regex();
    var stringWidth = (string) => {
      if (typeof string !== "string" || string.length === 0) {
        return 0;
      }
      string = stripAnsi(string);
      if (string.length === 0) {
        return 0;
      }
      string = string.replace(emojiRegex(), "  ");
      let width = 0;
      for (let i = 0; i < string.length; i++) {
        const code = string.codePointAt(i);
        if (code <= 31 || code >= 127 && code <= 159) {
          continue;
        }
        if (code >= 768 && code <= 879) {
          continue;
        }
        if (code > 65535) {
          i++;
        }
        width += isFullwidthCodePoint(code) ? 2 : 1;
      }
      return width;
    };
    module2.exports = stringWidth;
    module2.exports.default = stringWidth;
  }
});

// node_modules/wide-align/align.js
var require_align = __commonJS({
  "node_modules/wide-align/align.js"(exports) {
    "use strict";
    var stringWidth = require_string_width();
    exports.center = alignCenter;
    exports.left = alignLeft;
    exports.right = alignRight;
    function createPadding(width) {
      var result = "";
      var string = " ";
      var n = width;
      do {
        if (n % 2) {
          result += string;
        }
        n = Math.floor(n / 2);
        string += string;
      } while (n);
      return result;
    }
    function alignLeft(str, width) {
      var trimmed = str.trimRight();
      if (trimmed.length === 0 && str.length >= width)
        return str;
      var padding = "";
      var strWidth = stringWidth(trimmed);
      if (strWidth < width) {
        padding = createPadding(width - strWidth);
      }
      return trimmed + padding;
    }
    function alignRight(str, width) {
      var trimmed = str.trimLeft();
      if (trimmed.length === 0 && str.length >= width)
        return str;
      var padding = "";
      var strWidth = stringWidth(trimmed);
      if (strWidth < width) {
        padding = createPadding(width - strWidth);
      }
      return padding + trimmed;
    }
    function alignCenter(str, width) {
      var trimmed = str.trim();
      if (trimmed.length === 0 && str.length >= width)
        return str;
      var padLeft = "";
      var padRight = "";
      var strWidth = stringWidth(trimmed);
      if (strWidth < width) {
        var padLeftBy = parseInt((width - strWidth) / 2, 10);
        padLeft = createPadding(padLeftBy);
        padRight = createPadding(width - (strWidth + padLeftBy));
      }
      return padLeft + trimmed + padRight;
    }
  }
});

// node_modules/aproba/index.js
var require_aproba = __commonJS({
  "node_modules/aproba/index.js"(exports, module2) {
    "use strict";
    module2.exports = validate;
    function isArguments(thingy) {
      return thingy != null && typeof thingy === "object" && thingy.hasOwnProperty("callee");
    }
    var types = {
      "*": { label: "any", check: () => true },
      A: { label: "array", check: (_) => Array.isArray(_) || isArguments(_) },
      S: { label: "string", check: (_) => typeof _ === "string" },
      N: { label: "number", check: (_) => typeof _ === "number" },
      F: { label: "function", check: (_) => typeof _ === "function" },
      O: { label: "object", check: (_) => typeof _ === "object" && _ != null && !types.A.check(_) && !types.E.check(_) },
      B: { label: "boolean", check: (_) => typeof _ === "boolean" },
      E: { label: "error", check: (_) => _ instanceof Error },
      Z: { label: "null", check: (_) => _ == null }
    };
    function addSchema(schema, arity) {
      const group = arity[schema.length] = arity[schema.length] || [];
      if (group.indexOf(schema) === -1)
        group.push(schema);
    }
    function validate(rawSchemas, args) {
      if (arguments.length !== 2)
        throw wrongNumberOfArgs(["SA"], arguments.length);
      if (!rawSchemas)
        throw missingRequiredArg(0, "rawSchemas");
      if (!args)
        throw missingRequiredArg(1, "args");
      if (!types.S.check(rawSchemas))
        throw invalidType(0, ["string"], rawSchemas);
      if (!types.A.check(args))
        throw invalidType(1, ["array"], args);
      const schemas = rawSchemas.split("|");
      const arity = {};
      schemas.forEach((schema) => {
        for (let ii = 0; ii < schema.length; ++ii) {
          const type = schema[ii];
          if (!types[type])
            throw unknownType(ii, type);
        }
        if (/E.*E/.test(schema))
          throw moreThanOneError(schema);
        addSchema(schema, arity);
        if (/E/.test(schema)) {
          addSchema(schema.replace(/E.*$/, "E"), arity);
          addSchema(schema.replace(/E/, "Z"), arity);
          if (schema.length === 1)
            addSchema("", arity);
        }
      });
      let matching = arity[args.length];
      if (!matching) {
        throw wrongNumberOfArgs(Object.keys(arity), args.length);
      }
      for (let ii = 0; ii < args.length; ++ii) {
        let newMatching = matching.filter((schema) => {
          const type = schema[ii];
          const typeCheck = types[type].check;
          return typeCheck(args[ii]);
        });
        if (!newMatching.length) {
          const labels = matching.map((_) => types[_[ii]].label).filter((_) => _ != null);
          throw invalidType(ii, labels, args[ii]);
        }
        matching = newMatching;
      }
    }
    function missingRequiredArg(num) {
      return newException("EMISSINGARG", "Missing required argument #" + (num + 1));
    }
    function unknownType(num, type) {
      return newException("EUNKNOWNTYPE", "Unknown type " + type + " in argument #" + (num + 1));
    }
    function invalidType(num, expectedTypes, value) {
      let valueType;
      Object.keys(types).forEach((typeCode) => {
        if (types[typeCode].check(value))
          valueType = types[typeCode].label;
      });
      return newException("EINVALIDTYPE", "Argument #" + (num + 1) + ": Expected " + englishList(expectedTypes) + " but got " + valueType);
    }
    function englishList(list) {
      return list.join(", ").replace(/, ([^,]+)$/, " or $1");
    }
    function wrongNumberOfArgs(expected, got) {
      const english = englishList(expected);
      const args = expected.every((ex) => ex.length === 1) ? "argument" : "arguments";
      return newException("EWRONGARGCOUNT", "Expected " + english + " " + args + " but got " + got);
    }
    function moreThanOneError(schema) {
      return newException(
        "ETOOMANYERRORTYPES",
        'Only one error type per argument signature is allowed, more than one found in "' + schema + '"'
      );
    }
    function newException(code, msg) {
      const err = new Error(msg);
      err.code = code;
      if (Error.captureStackTrace)
        Error.captureStackTrace(err, validate);
      return err;
    }
  }
});

// node_modules/gauge/wide-truncate.js
var require_wide_truncate = __commonJS({
  "node_modules/gauge/wide-truncate.js"(exports, module2) {
    "use strict";
    var stringWidth = require_string_width();
    var stripAnsi = require_strip_ansi();
    module2.exports = wideTruncate;
    function wideTruncate(str, target) {
      if (stringWidth(str) === 0)
        return str;
      if (target <= 0)
        return "";
      if (stringWidth(str) <= target)
        return str;
      var noAnsi = stripAnsi(str);
      var ansiSize = str.length + noAnsi.length;
      var truncated = str.slice(0, target + ansiSize);
      while (stringWidth(truncated) > target) {
        truncated = truncated.slice(0, -1);
      }
      return truncated;
    }
  }
});

// node_modules/gauge/error.js
var require_error = __commonJS({
  "node_modules/gauge/error.js"(exports) {
    "use strict";
    var util = require("util");
    var User = exports.User = function User2(msg) {
      var err = new Error(msg);
      Error.captureStackTrace(err, User2);
      err.code = "EGAUGE";
      return err;
    };
    exports.MissingTemplateValue = function MissingTemplateValue(item, values) {
      var err = new User(util.format('Missing template value "%s"', item.type));
      Error.captureStackTrace(err, MissingTemplateValue);
      err.template = item;
      err.values = values;
      return err;
    };
    exports.Internal = function Internal(msg) {
      var err = new Error(msg);
      Error.captureStackTrace(err, Internal);
      err.code = "EGAUGEINTERNAL";
      return err;
    };
  }
});

// node_modules/gauge/template-item.js
var require_template_item = __commonJS({
  "node_modules/gauge/template-item.js"(exports, module2) {
    "use strict";
    var stringWidth = require_string_width();
    module2.exports = TemplateItem;
    function isPercent(num) {
      if (typeof num !== "string")
        return false;
      return num.slice(-1) === "%";
    }
    function percent(num) {
      return Number(num.slice(0, -1)) / 100;
    }
    function TemplateItem(values, outputLength) {
      this.overallOutputLength = outputLength;
      this.finished = false;
      this.type = null;
      this.value = null;
      this.length = null;
      this.maxLength = null;
      this.minLength = null;
      this.kerning = null;
      this.align = "left";
      this.padLeft = 0;
      this.padRight = 0;
      this.index = null;
      this.first = null;
      this.last = null;
      if (typeof values === "string") {
        this.value = values;
      } else {
        for (var prop in values)
          this[prop] = values[prop];
      }
      if (isPercent(this.length)) {
        this.length = Math.round(this.overallOutputLength * percent(this.length));
      }
      if (isPercent(this.minLength)) {
        this.minLength = Math.round(this.overallOutputLength * percent(this.minLength));
      }
      if (isPercent(this.maxLength)) {
        this.maxLength = Math.round(this.overallOutputLength * percent(this.maxLength));
      }
      return this;
    }
    TemplateItem.prototype = {};
    TemplateItem.prototype.getBaseLength = function() {
      var length = this.length;
      if (length == null && typeof this.value === "string" && this.maxLength == null && this.minLength == null) {
        length = stringWidth(this.value);
      }
      return length;
    };
    TemplateItem.prototype.getLength = function() {
      var length = this.getBaseLength();
      if (length == null)
        return null;
      return length + this.padLeft + this.padRight;
    };
    TemplateItem.prototype.getMaxLength = function() {
      if (this.maxLength == null)
        return null;
      return this.maxLength + this.padLeft + this.padRight;
    };
    TemplateItem.prototype.getMinLength = function() {
      if (this.minLength == null)
        return null;
      return this.minLength + this.padLeft + this.padRight;
    };
  }
});

// node_modules/gauge/render-template.js
var require_render_template = __commonJS({
  "node_modules/gauge/render-template.js"(exports, module2) {
    "use strict";
    var align = require_align();
    var validate = require_aproba();
    var wideTruncate = require_wide_truncate();
    var error = require_error();
    var TemplateItem = require_template_item();
    function renderValueWithValues(values) {
      return function(item) {
        return renderValue(item, values);
      };
    }
    var renderTemplate = module2.exports = function(width, template, values) {
      var items = prepareItems(width, template, values);
      var rendered = items.map(renderValueWithValues(values)).join("");
      return align.left(wideTruncate(rendered, width), width);
    };
    function preType(item) {
      var cappedTypeName = item.type[0].toUpperCase() + item.type.slice(1);
      return "pre" + cappedTypeName;
    }
    function postType(item) {
      var cappedTypeName = item.type[0].toUpperCase() + item.type.slice(1);
      return "post" + cappedTypeName;
    }
    function hasPreOrPost(item, values) {
      if (!item.type)
        return;
      return values[preType(item)] || values[postType(item)];
    }
    function generatePreAndPost(baseItem, parentValues) {
      var item = Object.assign({}, baseItem);
      var values = Object.create(parentValues);
      var template = [];
      var pre = preType(item);
      var post = postType(item);
      if (values[pre]) {
        template.push({ value: values[pre] });
        values[pre] = null;
      }
      item.minLength = null;
      item.length = null;
      item.maxLength = null;
      template.push(item);
      values[item.type] = values[item.type];
      if (values[post]) {
        template.push({ value: values[post] });
        values[post] = null;
      }
      return function($1, $2, length) {
        return renderTemplate(length, template, values);
      };
    }
    function prepareItems(width, template, values) {
      function cloneAndObjectify(item, index, arr) {
        var cloned = new TemplateItem(item, width);
        var type = cloned.type;
        if (cloned.value == null) {
          if (!(type in values)) {
            if (cloned.default == null) {
              throw new error.MissingTemplateValue(cloned, values);
            } else {
              cloned.value = cloned.default;
            }
          } else {
            cloned.value = values[type];
          }
        }
        if (cloned.value == null || cloned.value === "")
          return null;
        cloned.index = index;
        cloned.first = index === 0;
        cloned.last = index === arr.length - 1;
        if (hasPreOrPost(cloned, values))
          cloned.value = generatePreAndPost(cloned, values);
        return cloned;
      }
      var output = template.map(cloneAndObjectify).filter(function(item) {
        return item != null;
      });
      var remainingSpace = width;
      var variableCount = output.length;
      function consumeSpace(length) {
        if (length > remainingSpace)
          length = remainingSpace;
        remainingSpace -= length;
      }
      function finishSizing(item, length) {
        if (item.finished)
          throw new error.Internal("Tried to finish template item that was already finished");
        if (length === Infinity)
          throw new error.Internal("Length of template item cannot be infinity");
        if (length != null)
          item.length = length;
        item.minLength = null;
        item.maxLength = null;
        --variableCount;
        item.finished = true;
        if (item.length == null)
          item.length = item.getBaseLength();
        if (item.length == null)
          throw new error.Internal("Finished template items must have a length");
        consumeSpace(item.getLength());
      }
      output.forEach(function(item) {
        if (!item.kerning)
          return;
        var prevPadRight = item.first ? 0 : output[item.index - 1].padRight;
        if (!item.first && prevPadRight < item.kerning)
          item.padLeft = item.kerning - prevPadRight;
        if (!item.last)
          item.padRight = item.kerning;
      });
      output.forEach(function(item) {
        if (item.getBaseLength() == null)
          return;
        finishSizing(item);
      });
      var resized = 0;
      var resizing;
      var hunkSize;
      do {
        resizing = false;
        hunkSize = Math.round(remainingSpace / variableCount);
        output.forEach(function(item) {
          if (item.finished)
            return;
          if (!item.maxLength)
            return;
          if (item.getMaxLength() < hunkSize) {
            finishSizing(item, item.maxLength);
            resizing = true;
          }
        });
      } while (resizing && resized++ < output.length);
      if (resizing)
        throw new error.Internal("Resize loop iterated too many times while determining maxLength");
      resized = 0;
      do {
        resizing = false;
        hunkSize = Math.round(remainingSpace / variableCount);
        output.forEach(function(item) {
          if (item.finished)
            return;
          if (!item.minLength)
            return;
          if (item.getMinLength() >= hunkSize) {
            finishSizing(item, item.minLength);
            resizing = true;
          }
        });
      } while (resizing && resized++ < output.length);
      if (resizing)
        throw new error.Internal("Resize loop iterated too many times while determining minLength");
      hunkSize = Math.round(remainingSpace / variableCount);
      output.forEach(function(item) {
        if (item.finished)
          return;
        finishSizing(item, hunkSize);
      });
      return output;
    }
    function renderFunction(item, values, length) {
      validate("OON", arguments);
      if (item.type) {
        return item.value(values, values[item.type + "Theme"] || {}, length);
      } else {
        return item.value(values, {}, length);
      }
    }
    function renderValue(item, values) {
      var length = item.getBaseLength();
      var value = typeof item.value === "function" ? renderFunction(item, values, length) : item.value;
      if (value == null || value === "")
        return "";
      var alignWith = align[item.align] || align.left;
      var leftPadding = item.padLeft ? align.left("", item.padLeft) : "";
      var rightPadding = item.padRight ? align.right("", item.padRight) : "";
      var truncated = wideTruncate(String(value), length);
      var aligned = alignWith(truncated, length);
      return leftPadding + aligned + rightPadding;
    }
  }
});

// node_modules/gauge/plumbing.js
var require_plumbing = __commonJS({
  "node_modules/gauge/plumbing.js"(exports, module2) {
    "use strict";
    var consoleControl = require_console_control_strings();
    var renderTemplate = require_render_template();
    var validate = require_aproba();
    var Plumbing = module2.exports = function(theme, template, width) {
      if (!width)
        width = 80;
      validate("OAN", [theme, template, width]);
      this.showing = false;
      this.theme = theme;
      this.width = width;
      this.template = template;
    };
    Plumbing.prototype = {};
    Plumbing.prototype.setTheme = function(theme) {
      validate("O", [theme]);
      this.theme = theme;
    };
    Plumbing.prototype.setTemplate = function(template) {
      validate("A", [template]);
      this.template = template;
    };
    Plumbing.prototype.setWidth = function(width) {
      validate("N", [width]);
      this.width = width;
    };
    Plumbing.prototype.hide = function() {
      return consoleControl.gotoSOL() + consoleControl.eraseLine();
    };
    Plumbing.prototype.hideCursor = consoleControl.hideCursor;
    Plumbing.prototype.showCursor = consoleControl.showCursor;
    Plumbing.prototype.show = function(status) {
      var values = Object.create(this.theme);
      for (var key in status) {
        values[key] = status[key];
      }
      return renderTemplate(this.width, this.template, values).trim() + consoleControl.color("reset") + consoleControl.eraseLine() + consoleControl.gotoSOL();
    };
  }
});

// node_modules/has-unicode/index.js
var require_has_unicode = __commonJS({
  "node_modules/has-unicode/index.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var hasUnicode = module2.exports = function() {
      if (os.type() == "Windows_NT") {
        return false;
      }
      var isUTF8 = /UTF-?8$/i;
      var ctype = process.env.LC_ALL || process.env.LC_CTYPE || process.env.LANG;
      return isUTF8.test(ctype);
    };
  }
});

// node_modules/color-support/index.js
var require_color_support = __commonJS({
  "node_modules/color-support/index.js"(exports, module2) {
    "use strict";
    module2.exports = colorSupport({ alwaysReturn: true }, colorSupport);
    function hasNone(obj, options) {
      obj.level = 0;
      obj.hasBasic = false;
      obj.has256 = false;
      obj.has16m = false;
      if (!options.alwaysReturn) {
        return false;
      }
      return obj;
    }
    function hasBasic(obj) {
      obj.hasBasic = true;
      obj.has256 = false;
      obj.has16m = false;
      obj.level = 1;
      return obj;
    }
    function has256(obj) {
      obj.hasBasic = true;
      obj.has256 = true;
      obj.has16m = false;
      obj.level = 2;
      return obj;
    }
    function has16m(obj) {
      obj.hasBasic = true;
      obj.has256 = true;
      obj.has16m = true;
      obj.level = 3;
      return obj;
    }
    function colorSupport(options, obj) {
      options = options || {};
      obj = obj || {};
      if (typeof options.level === "number") {
        switch (options.level) {
          case 0:
            return hasNone(obj, options);
          case 1:
            return hasBasic(obj);
          case 2:
            return has256(obj);
          case 3:
            return has16m(obj);
        }
      }
      obj.level = 0;
      obj.hasBasic = false;
      obj.has256 = false;
      obj.has16m = false;
      if (typeof process === "undefined" || !process || !process.stdout || !process.env || !process.platform) {
        return hasNone(obj, options);
      }
      var env = options.env || process.env;
      var stream = options.stream || process.stdout;
      var term = options.term || env.TERM || "";
      var platform = options.platform || process.platform;
      if (!options.ignoreTTY && !stream.isTTY) {
        return hasNone(obj, options);
      }
      if (!options.ignoreDumb && term === "dumb" && !env.COLORTERM) {
        return hasNone(obj, options);
      }
      if (platform === "win32") {
        return hasBasic(obj);
      }
      if (env.TMUX) {
        return has256(obj);
      }
      if (!options.ignoreCI && (env.CI || env.TEAMCITY_VERSION)) {
        if (env.TRAVIS) {
          return has256(obj);
        } else {
          return hasNone(obj, options);
        }
      }
      switch (env.TERM_PROGRAM) {
        case "iTerm.app":
          var ver = env.TERM_PROGRAM_VERSION || "0.";
          if (/^[0-2]\./.test(ver)) {
            return has256(obj);
          } else {
            return has16m(obj);
          }
        case "HyperTerm":
        case "Hyper":
          return has16m(obj);
        case "MacTerm":
          return has16m(obj);
        case "Apple_Terminal":
          return has256(obj);
      }
      if (/^xterm-256/.test(term)) {
        return has256(obj);
      }
      if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(term)) {
        return hasBasic(obj);
      }
      if (env.COLORTERM) {
        return hasBasic(obj);
      }
      return hasNone(obj, options);
    }
  }
});

// node_modules/gauge/has-color.js
var require_has_color = __commonJS({
  "node_modules/gauge/has-color.js"(exports, module2) {
    "use strict";
    var colorSupport = require_color_support();
    module2.exports = colorSupport().hasBasic;
  }
});

// node_modules/signal-exit/signals.js
var require_signals = __commonJS({
  "node_modules/signal-exit/signals.js"(exports, module2) {
    "use strict";
    module2.exports = [
      "SIGABRT",
      "SIGALRM",
      "SIGHUP",
      "SIGINT",
      "SIGTERM"
    ];
    if (process.platform !== "win32") {
      module2.exports.push(
        "SIGVTALRM",
        "SIGXCPU",
        "SIGXFSZ",
        "SIGUSR2",
        "SIGTRAP",
        "SIGSYS",
        "SIGQUIT",
        "SIGIOT"
        // should detect profiler and enable/disable accordingly.
        // see #21
        // 'SIGPROF'
      );
    }
    if (process.platform === "linux") {
      module2.exports.push(
        "SIGIO",
        "SIGPOLL",
        "SIGPWR",
        "SIGSTKFLT",
        "SIGUNUSED"
      );
    }
  }
});

// node_modules/signal-exit/index.js
var require_signal_exit = __commonJS({
  "node_modules/signal-exit/index.js"(exports, module2) {
    "use strict";
    var process2 = global.process;
    var processOk = function(process3) {
      return process3 && typeof process3 === "object" && typeof process3.removeListener === "function" && typeof process3.emit === "function" && typeof process3.reallyExit === "function" && typeof process3.listeners === "function" && typeof process3.kill === "function" && typeof process3.pid === "number" && typeof process3.on === "function";
    };
    if (!processOk(process2)) {
      module2.exports = function() {
        return function() {
        };
      };
    } else {
      assert = require("assert");
      signals = require_signals();
      isWin = /^win/i.test(process2.platform);
      EE = require("events");
      if (typeof EE !== "function") {
        EE = EE.EventEmitter;
      }
      if (process2.__signal_exit_emitter__) {
        emitter = process2.__signal_exit_emitter__;
      } else {
        emitter = process2.__signal_exit_emitter__ = new EE();
        emitter.count = 0;
        emitter.emitted = {};
      }
      if (!emitter.infinite) {
        emitter.setMaxListeners(Infinity);
        emitter.infinite = true;
      }
      module2.exports = function(cb, opts) {
        if (!processOk(global.process)) {
          return function() {
          };
        }
        assert.equal(typeof cb, "function", "a callback must be provided for exit handler");
        if (loaded === false) {
          load();
        }
        var ev = "exit";
        if (opts && opts.alwaysLast) {
          ev = "afterexit";
        }
        var remove = function() {
          emitter.removeListener(ev, cb);
          if (emitter.listeners("exit").length === 0 && emitter.listeners("afterexit").length === 0) {
            unload();
          }
        };
        emitter.on(ev, cb);
        return remove;
      };
      unload = function unload2() {
        if (!loaded || !processOk(global.process)) {
          return;
        }
        loaded = false;
        signals.forEach(function(sig) {
          try {
            process2.removeListener(sig, sigListeners[sig]);
          } catch (er) {
          }
        });
        process2.emit = originalProcessEmit;
        process2.reallyExit = originalProcessReallyExit;
        emitter.count -= 1;
      };
      module2.exports.unload = unload;
      emit = function emit2(event, code, signal) {
        if (emitter.emitted[event]) {
          return;
        }
        emitter.emitted[event] = true;
        emitter.emit(event, code, signal);
      };
      sigListeners = {};
      signals.forEach(function(sig) {
        sigListeners[sig] = function listener() {
          if (!processOk(global.process)) {
            return;
          }
          var listeners = process2.listeners(sig);
          if (listeners.length === emitter.count) {
            unload();
            emit("exit", null, sig);
            emit("afterexit", null, sig);
            if (isWin && sig === "SIGHUP") {
              sig = "SIGINT";
            }
            process2.kill(process2.pid, sig);
          }
        };
      });
      module2.exports.signals = function() {
        return signals;
      };
      loaded = false;
      load = function load2() {
        if (loaded || !processOk(global.process)) {
          return;
        }
        loaded = true;
        emitter.count += 1;
        signals = signals.filter(function(sig) {
          try {
            process2.on(sig, sigListeners[sig]);
            return true;
          } catch (er) {
            return false;
          }
        });
        process2.emit = processEmit;
        process2.reallyExit = processReallyExit;
      };
      module2.exports.load = load;
      originalProcessReallyExit = process2.reallyExit;
      processReallyExit = function processReallyExit2(code) {
        if (!processOk(global.process)) {
          return;
        }
        process2.exitCode = code || /* istanbul ignore next */
        0;
        emit("exit", process2.exitCode, null);
        emit("afterexit", process2.exitCode, null);
        originalProcessReallyExit.call(process2, process2.exitCode);
      };
      originalProcessEmit = process2.emit;
      processEmit = function processEmit2(ev, arg) {
        if (ev === "exit" && processOk(global.process)) {
          if (arg !== void 0) {
            process2.exitCode = arg;
          }
          var ret = originalProcessEmit.apply(this, arguments);
          emit("exit", process2.exitCode, null);
          emit("afterexit", process2.exitCode, null);
          return ret;
        } else {
          return originalProcessEmit.apply(this, arguments);
        }
      };
    }
    var assert;
    var signals;
    var isWin;
    var EE;
    var emitter;
    var unload;
    var emit;
    var sigListeners;
    var loaded;
    var load;
    var originalProcessReallyExit;
    var processReallyExit;
    var originalProcessEmit;
    var processEmit;
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module2) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/gauge/spin.js
var require_spin = __commonJS({
  "node_modules/gauge/spin.js"(exports, module2) {
    "use strict";
    module2.exports = function spin(spinstr, spun) {
      return spinstr[spun % spinstr.length];
    };
  }
});

// node_modules/gauge/progress-bar.js
var require_progress_bar = __commonJS({
  "node_modules/gauge/progress-bar.js"(exports, module2) {
    "use strict";
    var validate = require_aproba();
    var renderTemplate = require_render_template();
    var wideTruncate = require_wide_truncate();
    var stringWidth = require_string_width();
    module2.exports = function(theme, width, completed) {
      validate("ONN", [theme, width, completed]);
      if (completed < 0)
        completed = 0;
      if (completed > 1)
        completed = 1;
      if (width <= 0)
        return "";
      var sofar = Math.round(width * completed);
      var rest = width - sofar;
      var template = [
        { type: "complete", value: repeat(theme.complete, sofar), length: sofar },
        { type: "remaining", value: repeat(theme.remaining, rest), length: rest }
      ];
      return renderTemplate(width, template, theme);
    };
    function repeat(string, width) {
      var result = "";
      var n = width;
      do {
        if (n % 2) {
          result += string;
        }
        n = Math.floor(n / 2);
        string += string;
      } while (n && stringWidth(result) < width);
      return wideTruncate(result, width);
    }
  }
});

// node_modules/gauge/base-theme.js
var require_base_theme = __commonJS({
  "node_modules/gauge/base-theme.js"(exports, module2) {
    "use strict";
    var spin = require_spin();
    var progressBar = require_progress_bar();
    module2.exports = {
      activityIndicator: function(values, theme, width) {
        if (values.spun == null)
          return;
        return spin(theme, values.spun);
      },
      progressbar: function(values, theme, width) {
        if (values.completed == null)
          return;
        return progressBar(theme, width, values.completed);
      }
    };
  }
});

// node_modules/gauge/theme-set.js
var require_theme_set = __commonJS({
  "node_modules/gauge/theme-set.js"(exports, module2) {
    "use strict";
    var objectAssign = require_object_assign();
    module2.exports = function() {
      return ThemeSetProto.newThemeSet();
    };
    var ThemeSetProto = {};
    ThemeSetProto.baseTheme = require_base_theme();
    ThemeSetProto.newTheme = function(parent, theme) {
      if (!theme) {
        theme = parent;
        parent = this.baseTheme;
      }
      return objectAssign({}, parent, theme);
    };
    ThemeSetProto.getThemeNames = function() {
      return Object.keys(this.themes);
    };
    ThemeSetProto.addTheme = function(name, parent, theme) {
      this.themes[name] = this.newTheme(parent, theme);
    };
    ThemeSetProto.addToAllThemes = function(theme) {
      var themes = this.themes;
      Object.keys(themes).forEach(function(name) {
        objectAssign(themes[name], theme);
      });
      objectAssign(this.baseTheme, theme);
    };
    ThemeSetProto.getTheme = function(name) {
      if (!this.themes[name])
        throw this.newMissingThemeError(name);
      return this.themes[name];
    };
    ThemeSetProto.setDefault = function(opts, name) {
      if (name == null) {
        name = opts;
        opts = {};
      }
      var platform = opts.platform == null ? "fallback" : opts.platform;
      var hasUnicode = !!opts.hasUnicode;
      var hasColor = !!opts.hasColor;
      if (!this.defaults[platform])
        this.defaults[platform] = { true: {}, false: {} };
      this.defaults[platform][hasUnicode][hasColor] = name;
    };
    ThemeSetProto.getDefault = function(opts) {
      if (!opts)
        opts = {};
      var platformName = opts.platform || process.platform;
      var platform = this.defaults[platformName] || this.defaults.fallback;
      var hasUnicode = !!opts.hasUnicode;
      var hasColor = !!opts.hasColor;
      if (!platform)
        throw this.newMissingDefaultThemeError(platformName, hasUnicode, hasColor);
      if (!platform[hasUnicode][hasColor]) {
        if (hasUnicode && hasColor && platform[!hasUnicode][hasColor]) {
          hasUnicode = false;
        } else if (hasUnicode && hasColor && platform[hasUnicode][!hasColor]) {
          hasColor = false;
        } else if (hasUnicode && hasColor && platform[!hasUnicode][!hasColor]) {
          hasUnicode = false;
          hasColor = false;
        } else if (hasUnicode && !hasColor && platform[!hasUnicode][hasColor]) {
          hasUnicode = false;
        } else if (!hasUnicode && hasColor && platform[hasUnicode][!hasColor]) {
          hasColor = false;
        } else if (platform === this.defaults.fallback) {
          throw this.newMissingDefaultThemeError(platformName, hasUnicode, hasColor);
        }
      }
      if (platform[hasUnicode][hasColor]) {
        return this.getTheme(platform[hasUnicode][hasColor]);
      } else {
        return this.getDefault(objectAssign({}, opts, { platform: "fallback" }));
      }
    };
    ThemeSetProto.newMissingThemeError = function newMissingThemeError(name) {
      var err = new Error('Could not find a gauge theme named "' + name + '"');
      Error.captureStackTrace.call(err, newMissingThemeError);
      err.theme = name;
      err.code = "EMISSINGTHEME";
      return err;
    };
    ThemeSetProto.newMissingDefaultThemeError = function newMissingDefaultThemeError(platformName, hasUnicode, hasColor) {
      var err = new Error(
        "Could not find a gauge theme for your platform/unicode/color use combo:\n    platform = " + platformName + "\n    hasUnicode = " + hasUnicode + "\n    hasColor = " + hasColor
      );
      Error.captureStackTrace.call(err, newMissingDefaultThemeError);
      err.platform = platformName;
      err.hasUnicode = hasUnicode;
      err.hasColor = hasColor;
      err.code = "EMISSINGTHEME";
      return err;
    };
    ThemeSetProto.newThemeSet = function() {
      var themeset = function(opts) {
        return themeset.getDefault(opts);
      };
      return objectAssign(themeset, ThemeSetProto, {
        themes: objectAssign({}, this.themes),
        baseTheme: objectAssign({}, this.baseTheme),
        defaults: JSON.parse(JSON.stringify(this.defaults || {}))
      });
    };
  }
});

// node_modules/gauge/themes.js
var require_themes = __commonJS({
  "node_modules/gauge/themes.js"(exports, module2) {
    "use strict";
    var color = require_console_control_strings().color;
    var ThemeSet = require_theme_set();
    var themes = module2.exports = new ThemeSet();
    themes.addTheme("ASCII", {
      preProgressbar: "[",
      postProgressbar: "]",
      progressbarTheme: {
        complete: "#",
        remaining: "."
      },
      activityIndicatorTheme: "-\\|/",
      preSubsection: ">"
    });
    themes.addTheme("colorASCII", themes.getTheme("ASCII"), {
      progressbarTheme: {
        preComplete: color("bgBrightWhite", "brightWhite"),
        complete: "#",
        postComplete: color("reset"),
        preRemaining: color("bgBrightBlack", "brightBlack"),
        remaining: ".",
        postRemaining: color("reset")
      }
    });
    themes.addTheme("brailleSpinner", {
      preProgressbar: "\u2E28",
      postProgressbar: "\u2E29",
      progressbarTheme: {
        complete: "#",
        remaining: "\u2802"
      },
      activityIndicatorTheme: "\u280B\u2819\u2839\u2838\u283C\u2834\u2826\u2827\u2807\u280F",
      preSubsection: ">"
    });
    themes.addTheme("colorBrailleSpinner", themes.getTheme("brailleSpinner"), {
      progressbarTheme: {
        preComplete: color("bgBrightWhite", "brightWhite"),
        complete: "#",
        postComplete: color("reset"),
        preRemaining: color("bgBrightBlack", "brightBlack"),
        remaining: "\u2802",
        postRemaining: color("reset")
      }
    });
    themes.setDefault({}, "ASCII");
    themes.setDefault({ hasColor: true }, "colorASCII");
    themes.setDefault({ platform: "darwin", hasUnicode: true }, "brailleSpinner");
    themes.setDefault({ platform: "darwin", hasUnicode: true, hasColor: true }, "colorBrailleSpinner");
    themes.setDefault({ platform: "linux", hasUnicode: true }, "brailleSpinner");
    themes.setDefault({ platform: "linux", hasUnicode: true, hasColor: true }, "colorBrailleSpinner");
  }
});

// node_modules/gauge/set-interval.js
var require_set_interval = __commonJS({
  "node_modules/gauge/set-interval.js"(exports, module2) {
    "use strict";
    module2.exports = setInterval;
  }
});

// node_modules/gauge/process.js
var require_process = __commonJS({
  "node_modules/gauge/process.js"(exports, module2) {
    "use strict";
    module2.exports = process;
  }
});

// node_modules/gauge/set-immediate.js
var require_set_immediate = __commonJS({
  "node_modules/gauge/set-immediate.js"(exports, module2) {
    "use strict";
    var process2 = require_process();
    try {
      module2.exports = setImmediate;
    } catch (ex) {
      module2.exports = process2.nextTick;
    }
  }
});

// node_modules/gauge/index.js
var require_gauge = __commonJS({
  "node_modules/gauge/index.js"(exports, module2) {
    "use strict";
    var Plumbing = require_plumbing();
    var hasUnicode = require_has_unicode();
    var hasColor = require_has_color();
    var onExit = require_signal_exit();
    var defaultThemes = require_themes();
    var setInterval2 = require_set_interval();
    var process2 = require_process();
    var setImmediate2 = require_set_immediate();
    module2.exports = Gauge;
    function callWith(obj, method) {
      return function() {
        return method.call(obj);
      };
    }
    function Gauge(arg1, arg2) {
      var options, writeTo;
      if (arg1 && arg1.write) {
        writeTo = arg1;
        options = arg2 || {};
      } else if (arg2 && arg2.write) {
        writeTo = arg2;
        options = arg1 || {};
      } else {
        writeTo = process2.stderr;
        options = arg1 || arg2 || {};
      }
      this._status = {
        spun: 0,
        section: "",
        subsection: ""
      };
      this._paused = false;
      this._disabled = true;
      this._showing = false;
      this._onScreen = false;
      this._needsRedraw = false;
      this._hideCursor = options.hideCursor == null ? true : options.hideCursor;
      this._fixedFramerate = options.fixedFramerate == null ? !/^v0\.8\./.test(process2.version) : options.fixedFramerate;
      this._lastUpdateAt = null;
      this._updateInterval = options.updateInterval == null ? 50 : options.updateInterval;
      this._themes = options.themes || defaultThemes;
      this._theme = options.theme;
      var theme = this._computeTheme(options.theme);
      var template = options.template || [
        { type: "progressbar", length: 20 },
        { type: "activityIndicator", kerning: 1, length: 1 },
        { type: "section", kerning: 1, default: "" },
        { type: "subsection", kerning: 1, default: "" }
      ];
      this.setWriteTo(writeTo, options.tty);
      var PlumbingClass = options.Plumbing || Plumbing;
      this._gauge = new PlumbingClass(theme, template, this.getWidth());
      this._$$doRedraw = callWith(this, this._doRedraw);
      this._$$handleSizeChange = callWith(this, this._handleSizeChange);
      this._cleanupOnExit = options.cleanupOnExit == null || options.cleanupOnExit;
      this._removeOnExit = null;
      if (options.enabled || options.enabled == null && this._tty && this._tty.isTTY) {
        this.enable();
      } else {
        this.disable();
      }
    }
    Gauge.prototype = {};
    Gauge.prototype.isEnabled = function() {
      return !this._disabled;
    };
    Gauge.prototype.setTemplate = function(template) {
      this._gauge.setTemplate(template);
      if (this._showing)
        this._requestRedraw();
    };
    Gauge.prototype._computeTheme = function(theme) {
      if (!theme)
        theme = {};
      if (typeof theme === "string") {
        theme = this._themes.getTheme(theme);
      } else if (theme && (Object.keys(theme).length === 0 || theme.hasUnicode != null || theme.hasColor != null)) {
        var useUnicode = theme.hasUnicode == null ? hasUnicode() : theme.hasUnicode;
        var useColor = theme.hasColor == null ? hasColor : theme.hasColor;
        theme = this._themes.getDefault({ hasUnicode: useUnicode, hasColor: useColor, platform: theme.platform });
      }
      return theme;
    };
    Gauge.prototype.setThemeset = function(themes) {
      this._themes = themes;
      this.setTheme(this._theme);
    };
    Gauge.prototype.setTheme = function(theme) {
      this._gauge.setTheme(this._computeTheme(theme));
      if (this._showing)
        this._requestRedraw();
      this._theme = theme;
    };
    Gauge.prototype._requestRedraw = function() {
      this._needsRedraw = true;
      if (!this._fixedFramerate)
        this._doRedraw();
    };
    Gauge.prototype.getWidth = function() {
      return (this._tty && this._tty.columns || 80) - 1;
    };
    Gauge.prototype.setWriteTo = function(writeTo, tty) {
      var enabled = !this._disabled;
      if (enabled)
        this.disable();
      this._writeTo = writeTo;
      this._tty = tty || writeTo === process2.stderr && process2.stdout.isTTY && process2.stdout || writeTo.isTTY && writeTo || this._tty;
      if (this._gauge)
        this._gauge.setWidth(this.getWidth());
      if (enabled)
        this.enable();
    };
    Gauge.prototype.enable = function() {
      if (!this._disabled)
        return;
      this._disabled = false;
      if (this._tty)
        this._enableEvents();
      if (this._showing)
        this.show();
    };
    Gauge.prototype.disable = function() {
      if (this._disabled)
        return;
      if (this._showing) {
        this._lastUpdateAt = null;
        this._showing = false;
        this._doRedraw();
        this._showing = true;
      }
      this._disabled = true;
      if (this._tty)
        this._disableEvents();
    };
    Gauge.prototype._enableEvents = function() {
      if (this._cleanupOnExit) {
        this._removeOnExit = onExit(callWith(this, this.disable));
      }
      this._tty.on("resize", this._$$handleSizeChange);
      if (this._fixedFramerate) {
        this.redrawTracker = setInterval2(this._$$doRedraw, this._updateInterval);
        if (this.redrawTracker.unref)
          this.redrawTracker.unref();
      }
    };
    Gauge.prototype._disableEvents = function() {
      this._tty.removeListener("resize", this._$$handleSizeChange);
      if (this._fixedFramerate)
        clearInterval(this.redrawTracker);
      if (this._removeOnExit)
        this._removeOnExit();
    };
    Gauge.prototype.hide = function(cb) {
      if (this._disabled)
        return cb && process2.nextTick(cb);
      if (!this._showing)
        return cb && process2.nextTick(cb);
      this._showing = false;
      this._doRedraw();
      cb && setImmediate2(cb);
    };
    Gauge.prototype.show = function(section, completed) {
      this._showing = true;
      if (typeof section === "string") {
        this._status.section = section;
      } else if (typeof section === "object") {
        var sectionKeys = Object.keys(section);
        for (var ii = 0; ii < sectionKeys.length; ++ii) {
          var key = sectionKeys[ii];
          this._status[key] = section[key];
        }
      }
      if (completed != null)
        this._status.completed = completed;
      if (this._disabled)
        return;
      this._requestRedraw();
    };
    Gauge.prototype.pulse = function(subsection) {
      this._status.subsection = subsection || "";
      this._status.spun++;
      if (this._disabled)
        return;
      if (!this._showing)
        return;
      this._requestRedraw();
    };
    Gauge.prototype._handleSizeChange = function() {
      this._gauge.setWidth(this._tty.columns - 1);
      this._requestRedraw();
    };
    Gauge.prototype._doRedraw = function() {
      if (this._disabled || this._paused)
        return;
      if (!this._fixedFramerate) {
        var now = Date.now();
        if (this._lastUpdateAt && now - this._lastUpdateAt < this._updateInterval)
          return;
        this._lastUpdateAt = now;
      }
      if (!this._showing && this._onScreen) {
        this._onScreen = false;
        var result = this._gauge.hide();
        if (this._hideCursor) {
          result += this._gauge.showCursor();
        }
        return this._writeTo.write(result);
      }
      if (!this._showing && !this._onScreen)
        return;
      if (this._showing && !this._onScreen) {
        this._onScreen = true;
        this._needsRedraw = true;
        if (this._hideCursor) {
          this._writeTo.write(this._gauge.hideCursor());
        }
      }
      if (!this._needsRedraw)
        return;
      if (!this._writeTo.write(this._gauge.show(this._status))) {
        this._paused = true;
        this._writeTo.on("drain", callWith(this, function() {
          this._paused = false;
          this._doRedraw();
        }));
      }
    };
  }
});

// node_modules/set-blocking/index.js
var require_set_blocking = __commonJS({
  "node_modules/set-blocking/index.js"(exports, module2) {
    "use strict";
    module2.exports = function(blocking) {
      [process.stdout, process.stderr].forEach(function(stream) {
        if (stream._handle && stream.isTTY && typeof stream._handle.setBlocking === "function") {
          stream._handle.setBlocking(blocking);
        }
      });
    };
  }
});

// node_modules/npmlog/log.js
var require_log = __commonJS({
  "node_modules/npmlog/log.js"(exports, module2) {
    "use strict";
    var Progress = require_lib();
    var Gauge = require_gauge();
    var EE = require("events").EventEmitter;
    var log = exports = module2.exports = new EE();
    var util = require("util");
    var setBlocking = require_set_blocking();
    var consoleControl = require_console_control_strings();
    setBlocking(true);
    var stream = process.stderr;
    Object.defineProperty(log, "stream", {
      set: function(newStream) {
        stream = newStream;
        if (this.gauge) {
          this.gauge.setWriteTo(stream, stream);
        }
      },
      get: function() {
        return stream;
      }
    });
    var colorEnabled;
    log.useColor = function() {
      return colorEnabled != null ? colorEnabled : stream.isTTY;
    };
    log.enableColor = function() {
      colorEnabled = true;
      this.gauge.setTheme({ hasColor: colorEnabled, hasUnicode: unicodeEnabled });
    };
    log.disableColor = function() {
      colorEnabled = false;
      this.gauge.setTheme({ hasColor: colorEnabled, hasUnicode: unicodeEnabled });
    };
    log.level = "info";
    log.gauge = new Gauge(stream, {
      enabled: false,
      // no progress bars unless asked
      theme: { hasColor: log.useColor() },
      template: [
        { type: "progressbar", length: 20 },
        { type: "activityIndicator", kerning: 1, length: 1 },
        { type: "section", default: "" },
        ":",
        { type: "logline", kerning: 1, default: "" }
      ]
    });
    log.tracker = new Progress.TrackerGroup();
    log.progressEnabled = log.gauge.isEnabled();
    var unicodeEnabled;
    log.enableUnicode = function() {
      unicodeEnabled = true;
      this.gauge.setTheme({ hasColor: this.useColor(), hasUnicode: unicodeEnabled });
    };
    log.disableUnicode = function() {
      unicodeEnabled = false;
      this.gauge.setTheme({ hasColor: this.useColor(), hasUnicode: unicodeEnabled });
    };
    log.setGaugeThemeset = function(themes) {
      this.gauge.setThemeset(themes);
    };
    log.setGaugeTemplate = function(template) {
      this.gauge.setTemplate(template);
    };
    log.enableProgress = function() {
      if (this.progressEnabled) {
        return;
      }
      this.progressEnabled = true;
      this.tracker.on("change", this.showProgress);
      if (this._paused) {
        return;
      }
      this.gauge.enable();
    };
    log.disableProgress = function() {
      if (!this.progressEnabled) {
        return;
      }
      this.progressEnabled = false;
      this.tracker.removeListener("change", this.showProgress);
      this.gauge.disable();
    };
    var trackerConstructors = ["newGroup", "newItem", "newStream"];
    var mixinLog = function(tracker) {
      Object.keys(log).forEach(function(P) {
        if (P[0] === "_") {
          return;
        }
        if (trackerConstructors.filter(function(C) {
          return C === P;
        }).length) {
          return;
        }
        if (tracker[P]) {
          return;
        }
        if (typeof log[P] !== "function") {
          return;
        }
        var func = log[P];
        tracker[P] = function() {
          return func.apply(log, arguments);
        };
      });
      if (tracker instanceof Progress.TrackerGroup) {
        trackerConstructors.forEach(function(C) {
          var func = tracker[C];
          tracker[C] = function() {
            return mixinLog(func.apply(tracker, arguments));
          };
        });
      }
      return tracker;
    };
    trackerConstructors.forEach(function(C) {
      log[C] = function() {
        return mixinLog(this.tracker[C].apply(this.tracker, arguments));
      };
    });
    log.clearProgress = function(cb) {
      if (!this.progressEnabled) {
        return cb && process.nextTick(cb);
      }
      this.gauge.hide(cb);
    };
    log.showProgress = function(name, completed) {
      if (!this.progressEnabled) {
        return;
      }
      var values = {};
      if (name) {
        values.section = name;
      }
      var last = log.record[log.record.length - 1];
      if (last) {
        values.subsection = last.prefix;
        var disp = log.disp[last.level] || last.level;
        var logline = this._format(disp, log.style[last.level]);
        if (last.prefix) {
          logline += " " + this._format(last.prefix, this.prefixStyle);
        }
        logline += " " + last.message.split(/\r?\n/)[0];
        values.logline = logline;
      }
      values.completed = completed || this.tracker.completed();
      this.gauge.show(values);
    }.bind(log);
    log.pause = function() {
      this._paused = true;
      if (this.progressEnabled) {
        this.gauge.disable();
      }
    };
    log.resume = function() {
      if (!this._paused) {
        return;
      }
      this._paused = false;
      var b = this._buffer;
      this._buffer = [];
      b.forEach(function(m) {
        this.emitLog(m);
      }, this);
      if (this.progressEnabled) {
        this.gauge.enable();
      }
    };
    log._buffer = [];
    var id = 0;
    log.record = [];
    log.maxRecordSize = 1e4;
    log.log = function(lvl, prefix, message) {
      var l = this.levels[lvl];
      if (l === void 0) {
        return this.emit("error", new Error(util.format(
          "Undefined log level: %j",
          lvl
        )));
      }
      var a = new Array(arguments.length - 2);
      var stack = null;
      for (var i = 2; i < arguments.length; i++) {
        var arg = a[i - 2] = arguments[i];
        if (typeof arg === "object" && arg instanceof Error && arg.stack) {
          Object.defineProperty(arg, "stack", {
            value: stack = arg.stack + "",
            enumerable: true,
            writable: true
          });
        }
      }
      if (stack) {
        a.unshift(stack + "\n");
      }
      message = util.format.apply(util, a);
      var m = {
        id: id++,
        level: lvl,
        prefix: String(prefix || ""),
        message,
        messageRaw: a
      };
      this.emit("log", m);
      this.emit("log." + lvl, m);
      if (m.prefix) {
        this.emit(m.prefix, m);
      }
      this.record.push(m);
      var mrs = this.maxRecordSize;
      var n = this.record.length - mrs;
      if (n > mrs / 10) {
        var newSize = Math.floor(mrs * 0.9);
        this.record = this.record.slice(-1 * newSize);
      }
      this.emitLog(m);
    }.bind(log);
    log.emitLog = function(m) {
      if (this._paused) {
        this._buffer.push(m);
        return;
      }
      if (this.progressEnabled) {
        this.gauge.pulse(m.prefix);
      }
      var l = this.levels[m.level];
      if (l === void 0) {
        return;
      }
      if (l < this.levels[this.level]) {
        return;
      }
      if (l > 0 && !isFinite(l)) {
        return;
      }
      var disp = log.disp[m.level] != null ? log.disp[m.level] : m.level;
      this.clearProgress();
      m.message.split(/\r?\n/).forEach(function(line) {
        if (this.heading) {
          this.write(this.heading, this.headingStyle);
          this.write(" ");
        }
        this.write(disp, log.style[m.level]);
        var p = m.prefix || "";
        if (p) {
          this.write(" ");
        }
        this.write(p, this.prefixStyle);
        this.write(" " + line + "\n");
      }, this);
      this.showProgress();
    };
    log._format = function(msg, style) {
      if (!stream) {
        return;
      }
      var output = "";
      if (this.useColor()) {
        style = style || {};
        var settings = [];
        if (style.fg) {
          settings.push(style.fg);
        }
        if (style.bg) {
          settings.push("bg" + style.bg[0].toUpperCase() + style.bg.slice(1));
        }
        if (style.bold) {
          settings.push("bold");
        }
        if (style.underline) {
          settings.push("underline");
        }
        if (style.inverse) {
          settings.push("inverse");
        }
        if (settings.length) {
          output += consoleControl.color(settings);
        }
        if (style.beep) {
          output += consoleControl.beep();
        }
      }
      output += msg;
      if (this.useColor()) {
        output += consoleControl.color("reset");
      }
      return output;
    };
    log.write = function(msg, style) {
      if (!stream) {
        return;
      }
      stream.write(this._format(msg, style));
    };
    log.addLevel = function(lvl, n, style, disp) {
      if (disp == null) {
        disp = lvl;
      }
      this.levels[lvl] = n;
      this.style[lvl] = style;
      if (!this[lvl]) {
        this[lvl] = function() {
          var a = new Array(arguments.length + 1);
          a[0] = lvl;
          for (var i = 0; i < arguments.length; i++) {
            a[i + 1] = arguments[i];
          }
          return this.log.apply(this, a);
        }.bind(this);
      }
      this.disp[lvl] = disp;
    };
    log.prefixStyle = { fg: "magenta" };
    log.headingStyle = { fg: "white", bg: "black" };
    log.style = {};
    log.levels = {};
    log.disp = {};
    log.addLevel("silly", -Infinity, { inverse: true }, "sill");
    log.addLevel("verbose", 1e3, { fg: "blue", bg: "black" }, "verb");
    log.addLevel("info", 2e3, { fg: "green" });
    log.addLevel("timing", 2500, { fg: "green", bg: "black" });
    log.addLevel("http", 3e3, { fg: "green", bg: "black" });
    log.addLevel("notice", 3500, { fg: "blue", bg: "black" });
    log.addLevel("warn", 4e3, { fg: "black", bg: "yellow" }, "WARN");
    log.addLevel("error", 5e3, { fg: "red", bg: "black" }, "ERR!");
    log.addLevel("silent", Infinity);
    log.on("error", function() {
    });
  }
});

// node_modules/fs.realpath/old.js
var require_old = __commonJS({
  "node_modules/fs.realpath/old.js"(exports) {
    "use strict";
    var pathModule = require("path");
    var isWindows = process.platform === "win32";
    var fs = require("fs");
    var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
    function rethrow() {
      var callback;
      if (DEBUG) {
        var backtrace = new Error();
        callback = debugCallback;
      } else
        callback = missingCallback;
      return callback;
      function debugCallback(err) {
        if (err) {
          backtrace.message = err.message;
          err = backtrace;
          missingCallback(err);
        }
      }
      function missingCallback(err) {
        if (err) {
          if (process.throwDeprecation)
            throw err;
          else if (!process.noDeprecation) {
            var msg = "fs: missing callback " + (err.stack || err.message);
            if (process.traceDeprecation)
              console.trace(msg);
            else
              console.error(msg);
          }
        }
      }
    }
    function maybeCallback(cb) {
      return typeof cb === "function" ? cb : rethrow();
    }
    var normalize = pathModule.normalize;
    if (isWindows) {
      nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
    } else {
      nextPartRe = /(.*?)(?:[\/]+|$)/g;
    }
    var nextPartRe;
    if (isWindows) {
      splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
    } else {
      splitRootRe = /^[\/]*/;
    }
    var splitRootRe;
    exports.realpathSync = function realpathSync(p, cache) {
      p = pathModule.resolve(p);
      if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
        return cache[p];
      }
      var original = p, seenLinks = {}, knownHard = {};
      var pos;
      var current;
      var base;
      var previous;
      start();
      function start() {
        var m = splitRootRe.exec(p);
        pos = m[0].length;
        current = m[0];
        base = m[0];
        previous = "";
        if (isWindows && !knownHard[base]) {
          fs.lstatSync(base);
          knownHard[base] = true;
        }
      }
      while (pos < p.length) {
        nextPartRe.lastIndex = pos;
        var result = nextPartRe.exec(p);
        previous = current;
        current += result[0];
        base = previous + result[1];
        pos = nextPartRe.lastIndex;
        if (knownHard[base] || cache && cache[base] === base) {
          continue;
        }
        var resolvedLink;
        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
          resolvedLink = cache[base];
        } else {
          var stat = fs.lstatSync(base);
          if (!stat.isSymbolicLink()) {
            knownHard[base] = true;
            if (cache)
              cache[base] = base;
            continue;
          }
          var linkTarget = null;
          if (!isWindows) {
            var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
            if (seenLinks.hasOwnProperty(id)) {
              linkTarget = seenLinks[id];
            }
          }
          if (linkTarget === null) {
            fs.statSync(base);
            linkTarget = fs.readlinkSync(base);
          }
          resolvedLink = pathModule.resolve(previous, linkTarget);
          if (cache)
            cache[base] = resolvedLink;
          if (!isWindows)
            seenLinks[id] = linkTarget;
        }
        p = pathModule.resolve(resolvedLink, p.slice(pos));
        start();
      }
      if (cache)
        cache[original] = p;
      return p;
    };
    exports.realpath = function realpath(p, cache, cb) {
      if (typeof cb !== "function") {
        cb = maybeCallback(cache);
        cache = null;
      }
      p = pathModule.resolve(p);
      if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
        return process.nextTick(cb.bind(null, null, cache[p]));
      }
      var original = p, seenLinks = {}, knownHard = {};
      var pos;
      var current;
      var base;
      var previous;
      start();
      function start() {
        var m = splitRootRe.exec(p);
        pos = m[0].length;
        current = m[0];
        base = m[0];
        previous = "";
        if (isWindows && !knownHard[base]) {
          fs.lstat(base, function(err) {
            if (err)
              return cb(err);
            knownHard[base] = true;
            LOOP();
          });
        } else {
          process.nextTick(LOOP);
        }
      }
      function LOOP() {
        if (pos >= p.length) {
          if (cache)
            cache[original] = p;
          return cb(null, p);
        }
        nextPartRe.lastIndex = pos;
        var result = nextPartRe.exec(p);
        previous = current;
        current += result[0];
        base = previous + result[1];
        pos = nextPartRe.lastIndex;
        if (knownHard[base] || cache && cache[base] === base) {
          return process.nextTick(LOOP);
        }
        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
          return gotResolvedLink(cache[base]);
        }
        return fs.lstat(base, gotStat);
      }
      function gotStat(err, stat) {
        if (err)
          return cb(err);
        if (!stat.isSymbolicLink()) {
          knownHard[base] = true;
          if (cache)
            cache[base] = base;
          return process.nextTick(LOOP);
        }
        if (!isWindows) {
          var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
          if (seenLinks.hasOwnProperty(id)) {
            return gotTarget(null, seenLinks[id], base);
          }
        }
        fs.stat(base, function(err2) {
          if (err2)
            return cb(err2);
          fs.readlink(base, function(err3, target) {
            if (!isWindows)
              seenLinks[id] = target;
            gotTarget(err3, target);
          });
        });
      }
      function gotTarget(err, target, base2) {
        if (err)
          return cb(err);
        var resolvedLink = pathModule.resolve(previous, target);
        if (cache)
          cache[base2] = resolvedLink;
        gotResolvedLink(resolvedLink);
      }
      function gotResolvedLink(resolvedLink) {
        p = pathModule.resolve(resolvedLink, p.slice(pos));
        start();
      }
    };
  }
});

// node_modules/fs.realpath/index.js
var require_fs = __commonJS({
  "node_modules/fs.realpath/index.js"(exports, module2) {
    "use strict";
    module2.exports = realpath;
    realpath.realpath = realpath;
    realpath.sync = realpathSync;
    realpath.realpathSync = realpathSync;
    realpath.monkeypatch = monkeypatch;
    realpath.unmonkeypatch = unmonkeypatch;
    var fs = require("fs");
    var origRealpath = fs.realpath;
    var origRealpathSync = fs.realpathSync;
    var version = process.version;
    var ok = /^v[0-5]\./.test(version);
    var old = require_old();
    function newError(er) {
      return er && er.syscall === "realpath" && (er.code === "ELOOP" || er.code === "ENOMEM" || er.code === "ENAMETOOLONG");
    }
    function realpath(p, cache, cb) {
      if (ok) {
        return origRealpath(p, cache, cb);
      }
      if (typeof cache === "function") {
        cb = cache;
        cache = null;
      }
      origRealpath(p, cache, function(er, result) {
        if (newError(er)) {
          old.realpath(p, cache, cb);
        } else {
          cb(er, result);
        }
      });
    }
    function realpathSync(p, cache) {
      if (ok) {
        return origRealpathSync(p, cache);
      }
      try {
        return origRealpathSync(p, cache);
      } catch (er) {
        if (newError(er)) {
          return old.realpathSync(p, cache);
        } else {
          throw er;
        }
      }
    }
    function monkeypatch() {
      fs.realpath = realpath;
      fs.realpathSync = realpathSync;
    }
    function unmonkeypatch() {
      fs.realpath = origRealpath;
      fs.realpathSync = origRealpathSync;
    }
  }
});

// node_modules/concat-map/index.js
var require_concat_map = __commonJS({
  "node_modules/concat-map/index.js"(exports, module2) {
    "use strict";
    module2.exports = function(xs, fn) {
      var res = [];
      for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x))
          res.push.apply(res, x);
        else
          res.push(x);
      }
      return res;
    };
    var isArray = Array.isArray || function(xs) {
      return Object.prototype.toString.call(xs) === "[object Array]";
    };
  }
});

// node_modules/balanced-match/index.js
var require_balanced_match = __commonJS({
  "node_modules/balanced-match/index.js"(exports, module2) {
    "use strict";
    module2.exports = balanced;
    function balanced(a, b, str) {
      if (a instanceof RegExp)
        a = maybeMatch(a, str);
      if (b instanceof RegExp)
        b = maybeMatch(b, str);
      var r = range(a, b, str);
      return r && {
        start: r[0],
        end: r[1],
        pre: str.slice(0, r[0]),
        body: str.slice(r[0] + a.length, r[1]),
        post: str.slice(r[1] + b.length)
      };
    }
    function maybeMatch(reg, str) {
      var m = str.match(reg);
      return m ? m[0] : null;
    }
    balanced.range = range;
    function range(a, b, str) {
      var begs, beg, left, right, result;
      var ai = str.indexOf(a);
      var bi = str.indexOf(b, ai + 1);
      var i = ai;
      if (ai >= 0 && bi > 0) {
        if (a === b) {
          return [ai, bi];
        }
        begs = [];
        left = str.length;
        while (i >= 0 && !result) {
          if (i == ai) {
            begs.push(i);
            ai = str.indexOf(a, i + 1);
          } else if (begs.length == 1) {
            result = [begs.pop(), bi];
          } else {
            beg = begs.pop();
            if (beg < left) {
              left = beg;
              right = bi;
            }
            bi = str.indexOf(b, i + 1);
          }
          i = ai < bi && ai >= 0 ? ai : bi;
        }
        if (begs.length) {
          result = [left, right];
        }
      }
      return result;
    }
  }
});

// node_modules/brace-expansion/index.js
var require_brace_expansion = __commonJS({
  "node_modules/brace-expansion/index.js"(exports, module2) {
    "use strict";
    var concatMap = require_concat_map();
    var balanced = require_balanced_match();
    module2.exports = expandTop;
    var escSlash = "\0SLASH" + Math.random() + "\0";
    var escOpen = "\0OPEN" + Math.random() + "\0";
    var escClose = "\0CLOSE" + Math.random() + "\0";
    var escComma = "\0COMMA" + Math.random() + "\0";
    var escPeriod = "\0PERIOD" + Math.random() + "\0";
    function numeric(str) {
      return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
    }
    function escapeBraces(str) {
      return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
    }
    function unescapeBraces(str) {
      return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
    }
    function parseCommaParts(str) {
      if (!str)
        return [""];
      var parts = [];
      var m = balanced("{", "}", str);
      if (!m)
        return str.split(",");
      var pre = m.pre;
      var body = m.body;
      var post = m.post;
      var p = pre.split(",");
      p[p.length - 1] += "{" + body + "}";
      var postParts = parseCommaParts(post);
      if (post.length) {
        p[p.length - 1] += postParts.shift();
        p.push.apply(p, postParts);
      }
      parts.push.apply(parts, p);
      return parts;
    }
    function expandTop(str) {
      if (!str)
        return [];
      if (str.substr(0, 2) === "{}") {
        str = "\\{\\}" + str.substr(2);
      }
      return expand(escapeBraces(str), true).map(unescapeBraces);
    }
    function embrace(str) {
      return "{" + str + "}";
    }
    function isPadded(el) {
      return /^-?0\d/.test(el);
    }
    function lte(i, y) {
      return i <= y;
    }
    function gte(i, y) {
      return i >= y;
    }
    function expand(str, isTop) {
      var expansions = [];
      var m = balanced("{", "}", str);
      if (!m || /\$$/.test(m.pre))
        return [str];
      var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
      var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
      var isSequence = isNumericSequence || isAlphaSequence;
      var isOptions = m.body.indexOf(",") >= 0;
      if (!isSequence && !isOptions) {
        if (m.post.match(/,.*\}/)) {
          str = m.pre + "{" + m.body + escClose + m.post;
          return expand(str);
        }
        return [str];
      }
      var n;
      if (isSequence) {
        n = m.body.split(/\.\./);
      } else {
        n = parseCommaParts(m.body);
        if (n.length === 1) {
          n = expand(n[0], false).map(embrace);
          if (n.length === 1) {
            var post = m.post.length ? expand(m.post, false) : [""];
            return post.map(function(p) {
              return m.pre + n[0] + p;
            });
          }
        }
      }
      var pre = m.pre;
      var post = m.post.length ? expand(m.post, false) : [""];
      var N;
      if (isSequence) {
        var x = numeric(n[0]);
        var y = numeric(n[1]);
        var width = Math.max(n[0].length, n[1].length);
        var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
        var test = lte;
        var reverse = y < x;
        if (reverse) {
          incr *= -1;
          test = gte;
        }
        var pad = n.some(isPadded);
        N = [];
        for (var i = x; test(i, y); i += incr) {
          var c;
          if (isAlphaSequence) {
            c = String.fromCharCode(i);
            if (c === "\\")
              c = "";
          } else {
            c = String(i);
            if (pad) {
              var need = width - c.length;
              if (need > 0) {
                var z = new Array(need + 1).join("0");
                if (i < 0)
                  c = "-" + z + c.slice(1);
                else
                  c = z + c;
              }
            }
          }
          N.push(c);
        }
      } else {
        N = concatMap(n, function(el) {
          return expand(el, false);
        });
      }
      for (var j = 0; j < N.length; j++) {
        for (var k = 0; k < post.length; k++) {
          var expansion = pre + N[j] + post[k];
          if (!isTop || isSequence || expansion)
            expansions.push(expansion);
        }
      }
      return expansions;
    }
  }
});

// node_modules/minimatch/minimatch.js
var require_minimatch = __commonJS({
  "node_modules/minimatch/minimatch.js"(exports, module2) {
    "use strict";
    module2.exports = minimatch;
    minimatch.Minimatch = Minimatch;
    var path = function() {
      try {
        return require("path");
      } catch (e) {
      }
    }() || {
      sep: "/"
    };
    minimatch.sep = path.sep;
    var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {};
    var expand = require_brace_expansion();
    var plTypes = {
      "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
      "?": { open: "(?:", close: ")?" },
      "+": { open: "(?:", close: ")+" },
      "*": { open: "(?:", close: ")*" },
      "@": { open: "(?:", close: ")" }
    };
    var qmark = "[^/]";
    var star = qmark + "*?";
    var twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
    var twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
    var reSpecials = charSet("().*{}+?[]^$\\!");
    function charSet(s) {
      return s.split("").reduce(function(set, c) {
        set[c] = true;
        return set;
      }, {});
    }
    var slashSplit = /\/+/;
    minimatch.filter = filter;
    function filter(pattern, options) {
      options = options || {};
      return function(p, i, list) {
        return minimatch(p, pattern, options);
      };
    }
    function ext(a, b) {
      b = b || {};
      var t = {};
      Object.keys(a).forEach(function(k) {
        t[k] = a[k];
      });
      Object.keys(b).forEach(function(k) {
        t[k] = b[k];
      });
      return t;
    }
    minimatch.defaults = function(def) {
      if (!def || typeof def !== "object" || !Object.keys(def).length) {
        return minimatch;
      }
      var orig = minimatch;
      var m = function minimatch2(p, pattern, options) {
        return orig(p, pattern, ext(def, options));
      };
      m.Minimatch = function Minimatch2(pattern, options) {
        return new orig.Minimatch(pattern, ext(def, options));
      };
      m.Minimatch.defaults = function defaults(options) {
        return orig.defaults(ext(def, options)).Minimatch;
      };
      m.filter = function filter2(pattern, options) {
        return orig.filter(pattern, ext(def, options));
      };
      m.defaults = function defaults(options) {
        return orig.defaults(ext(def, options));
      };
      m.makeRe = function makeRe2(pattern, options) {
        return orig.makeRe(pattern, ext(def, options));
      };
      m.braceExpand = function braceExpand2(pattern, options) {
        return orig.braceExpand(pattern, ext(def, options));
      };
      m.match = function(list, pattern, options) {
        return orig.match(list, pattern, ext(def, options));
      };
      return m;
    };
    Minimatch.defaults = function(def) {
      return minimatch.defaults(def).Minimatch;
    };
    function minimatch(p, pattern, options) {
      assertValidPattern(pattern);
      if (!options)
        options = {};
      if (!options.nocomment && pattern.charAt(0) === "#") {
        return false;
      }
      return new Minimatch(pattern, options).match(p);
    }
    function Minimatch(pattern, options) {
      if (!(this instanceof Minimatch)) {
        return new Minimatch(pattern, options);
      }
      assertValidPattern(pattern);
      if (!options)
        options = {};
      pattern = pattern.trim();
      if (!options.allowWindowsEscape && path.sep !== "/") {
        pattern = pattern.split(path.sep).join("/");
      }
      this.options = options;
      this.set = [];
      this.pattern = pattern;
      this.regexp = null;
      this.negate = false;
      this.comment = false;
      this.empty = false;
      this.partial = !!options.partial;
      this.make();
    }
    Minimatch.prototype.debug = function() {
    };
    Minimatch.prototype.make = make;
    function make() {
      var pattern = this.pattern;
      var options = this.options;
      if (!options.nocomment && pattern.charAt(0) === "#") {
        this.comment = true;
        return;
      }
      if (!pattern) {
        this.empty = true;
        return;
      }
      this.parseNegate();
      var set = this.globSet = this.braceExpand();
      if (options.debug)
        this.debug = function debug() {
          console.error.apply(console, arguments);
        };
      this.debug(this.pattern, set);
      set = this.globParts = set.map(function(s) {
        return s.split(slashSplit);
      });
      this.debug(this.pattern, set);
      set = set.map(function(s, si, set2) {
        return s.map(this.parse, this);
      }, this);
      this.debug(this.pattern, set);
      set = set.filter(function(s) {
        return s.indexOf(false) === -1;
      });
      this.debug(this.pattern, set);
      this.set = set;
    }
    Minimatch.prototype.parseNegate = parseNegate;
    function parseNegate() {
      var pattern = this.pattern;
      var negate = false;
      var options = this.options;
      var negateOffset = 0;
      if (options.nonegate)
        return;
      for (var i = 0, l = pattern.length; i < l && pattern.charAt(i) === "!"; i++) {
        negate = !negate;
        negateOffset++;
      }
      if (negateOffset)
        this.pattern = pattern.substr(negateOffset);
      this.negate = negate;
    }
    minimatch.braceExpand = function(pattern, options) {
      return braceExpand(pattern, options);
    };
    Minimatch.prototype.braceExpand = braceExpand;
    function braceExpand(pattern, options) {
      if (!options) {
        if (this instanceof Minimatch) {
          options = this.options;
        } else {
          options = {};
        }
      }
      pattern = typeof pattern === "undefined" ? this.pattern : pattern;
      assertValidPattern(pattern);
      if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
        return [pattern];
      }
      return expand(pattern);
    }
    var MAX_PATTERN_LENGTH = 1024 * 64;
    var assertValidPattern = function(pattern) {
      if (typeof pattern !== "string") {
        throw new TypeError("invalid pattern");
      }
      if (pattern.length > MAX_PATTERN_LENGTH) {
        throw new TypeError("pattern is too long");
      }
    };
    Minimatch.prototype.parse = parse;
    var SUBPARSE = {};
    function parse(pattern, isSub) {
      assertValidPattern(pattern);
      var options = this.options;
      if (pattern === "**") {
        if (!options.noglobstar)
          return GLOBSTAR;
        else
          pattern = "*";
      }
      if (pattern === "")
        return "";
      var re = "";
      var hasMagic = !!options.nocase;
      var escaping = false;
      var patternListStack = [];
      var negativeLists = [];
      var stateChar;
      var inClass = false;
      var reClassStart = -1;
      var classStart = -1;
      var patternStart = pattern.charAt(0) === "." ? "" : options.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)";
      var self2 = this;
      function clearStateChar() {
        if (stateChar) {
          switch (stateChar) {
            case "*":
              re += star;
              hasMagic = true;
              break;
            case "?":
              re += qmark;
              hasMagic = true;
              break;
            default:
              re += "\\" + stateChar;
              break;
          }
          self2.debug("clearStateChar %j %j", stateChar, re);
          stateChar = false;
        }
      }
      for (var i = 0, len = pattern.length, c; i < len && (c = pattern.charAt(i)); i++) {
        this.debug("%s	%s %s %j", pattern, i, re, c);
        if (escaping && reSpecials[c]) {
          re += "\\" + c;
          escaping = false;
          continue;
        }
        switch (c) {
          case "/": {
            return false;
          }
          case "\\":
            clearStateChar();
            escaping = true;
            continue;
          case "?":
          case "*":
          case "+":
          case "@":
          case "!":
            this.debug("%s	%s %s %j <-- stateChar", pattern, i, re, c);
            if (inClass) {
              this.debug("  in class");
              if (c === "!" && i === classStart + 1)
                c = "^";
              re += c;
              continue;
            }
            self2.debug("call clearStateChar %j", stateChar);
            clearStateChar();
            stateChar = c;
            if (options.noext)
              clearStateChar();
            continue;
          case "(":
            if (inClass) {
              re += "(";
              continue;
            }
            if (!stateChar) {
              re += "\\(";
              continue;
            }
            patternListStack.push({
              type: stateChar,
              start: i - 1,
              reStart: re.length,
              open: plTypes[stateChar].open,
              close: plTypes[stateChar].close
            });
            re += stateChar === "!" ? "(?:(?!(?:" : "(?:";
            this.debug("plType %j %j", stateChar, re);
            stateChar = false;
            continue;
          case ")":
            if (inClass || !patternListStack.length) {
              re += "\\)";
              continue;
            }
            clearStateChar();
            hasMagic = true;
            var pl = patternListStack.pop();
            re += pl.close;
            if (pl.type === "!") {
              negativeLists.push(pl);
            }
            pl.reEnd = re.length;
            continue;
          case "|":
            if (inClass || !patternListStack.length || escaping) {
              re += "\\|";
              escaping = false;
              continue;
            }
            clearStateChar();
            re += "|";
            continue;
          case "[":
            clearStateChar();
            if (inClass) {
              re += "\\" + c;
              continue;
            }
            inClass = true;
            classStart = i;
            reClassStart = re.length;
            re += c;
            continue;
          case "]":
            if (i === classStart + 1 || !inClass) {
              re += "\\" + c;
              escaping = false;
              continue;
            }
            var cs = pattern.substring(classStart + 1, i);
            try {
              RegExp("[" + cs + "]");
            } catch (er) {
              var sp = this.parse(cs, SUBPARSE);
              re = re.substr(0, reClassStart) + "\\[" + sp[0] + "\\]";
              hasMagic = hasMagic || sp[1];
              inClass = false;
              continue;
            }
            hasMagic = true;
            inClass = false;
            re += c;
            continue;
          default:
            clearStateChar();
            if (escaping) {
              escaping = false;
            } else if (reSpecials[c] && !(c === "^" && inClass)) {
              re += "\\";
            }
            re += c;
        }
      }
      if (inClass) {
        cs = pattern.substr(classStart + 1);
        sp = this.parse(cs, SUBPARSE);
        re = re.substr(0, reClassStart) + "\\[" + sp[0];
        hasMagic = hasMagic || sp[1];
      }
      for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
        var tail = re.slice(pl.reStart + pl.open.length);
        this.debug("setting tail", re, pl);
        tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(_, $1, $2) {
          if (!$2) {
            $2 = "\\";
          }
          return $1 + $1 + $2 + "|";
        });
        this.debug("tail=%j\n   %s", tail, tail, pl, re);
        var t = pl.type === "*" ? star : pl.type === "?" ? qmark : "\\" + pl.type;
        hasMagic = true;
        re = re.slice(0, pl.reStart) + t + "\\(" + tail;
      }
      clearStateChar();
      if (escaping) {
        re += "\\\\";
      }
      var addPatternStart = false;
      switch (re.charAt(0)) {
        case "[":
        case ".":
        case "(":
          addPatternStart = true;
      }
      for (var n = negativeLists.length - 1; n > -1; n--) {
        var nl = negativeLists[n];
        var nlBefore = re.slice(0, nl.reStart);
        var nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
        var nlLast = re.slice(nl.reEnd - 8, nl.reEnd);
        var nlAfter = re.slice(nl.reEnd);
        nlLast += nlAfter;
        var openParensBefore = nlBefore.split("(").length - 1;
        var cleanAfter = nlAfter;
        for (i = 0; i < openParensBefore; i++) {
          cleanAfter = cleanAfter.replace(/\)[+*?]?/, "");
        }
        nlAfter = cleanAfter;
        var dollar = "";
        if (nlAfter === "" && isSub !== SUBPARSE) {
          dollar = "$";
        }
        var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast;
        re = newRe;
      }
      if (re !== "" && hasMagic) {
        re = "(?=.)" + re;
      }
      if (addPatternStart) {
        re = patternStart + re;
      }
      if (isSub === SUBPARSE) {
        return [re, hasMagic];
      }
      if (!hasMagic) {
        return globUnescape(pattern);
      }
      var flags = options.nocase ? "i" : "";
      try {
        var regExp = new RegExp("^" + re + "$", flags);
      } catch (er) {
        return new RegExp("$.");
      }
      regExp._glob = pattern;
      regExp._src = re;
      return regExp;
    }
    minimatch.makeRe = function(pattern, options) {
      return new Minimatch(pattern, options || {}).makeRe();
    };
    Minimatch.prototype.makeRe = makeRe;
    function makeRe() {
      if (this.regexp || this.regexp === false)
        return this.regexp;
      var set = this.set;
      if (!set.length) {
        this.regexp = false;
        return this.regexp;
      }
      var options = this.options;
      var twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
      var flags = options.nocase ? "i" : "";
      var re = set.map(function(pattern) {
        return pattern.map(function(p) {
          return p === GLOBSTAR ? twoStar : typeof p === "string" ? regExpEscape(p) : p._src;
        }).join("\\/");
      }).join("|");
      re = "^(?:" + re + ")$";
      if (this.negate)
        re = "^(?!" + re + ").*$";
      try {
        this.regexp = new RegExp(re, flags);
      } catch (ex) {
        this.regexp = false;
      }
      return this.regexp;
    }
    minimatch.match = function(list, pattern, options) {
      options = options || {};
      var mm = new Minimatch(pattern, options);
      list = list.filter(function(f) {
        return mm.match(f);
      });
      if (mm.options.nonull && !list.length) {
        list.push(pattern);
      }
      return list;
    };
    Minimatch.prototype.match = function match(f, partial) {
      if (typeof partial === "undefined")
        partial = this.partial;
      this.debug("match", f, this.pattern);
      if (this.comment)
        return false;
      if (this.empty)
        return f === "";
      if (f === "/" && partial)
        return true;
      var options = this.options;
      if (path.sep !== "/") {
        f = f.split(path.sep).join("/");
      }
      f = f.split(slashSplit);
      this.debug(this.pattern, "split", f);
      var set = this.set;
      this.debug(this.pattern, "set", set);
      var filename;
      var i;
      for (i = f.length - 1; i >= 0; i--) {
        filename = f[i];
        if (filename)
          break;
      }
      for (i = 0; i < set.length; i++) {
        var pattern = set[i];
        var file = f;
        if (options.matchBase && pattern.length === 1) {
          file = [filename];
        }
        var hit = this.matchOne(file, pattern, partial);
        if (hit) {
          if (options.flipNegate)
            return true;
          return !this.negate;
        }
      }
      if (options.flipNegate)
        return false;
      return this.negate;
    };
    Minimatch.prototype.matchOne = function(file, pattern, partial) {
      var options = this.options;
      this.debug(
        "matchOne",
        { "this": this, file, pattern }
      );
      this.debug("matchOne", file.length, pattern.length);
      for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
        this.debug("matchOne loop");
        var p = pattern[pi];
        var f = file[fi];
        this.debug(pattern, p, f);
        if (p === false)
          return false;
        if (p === GLOBSTAR) {
          this.debug("GLOBSTAR", [pattern, p, f]);
          var fr = fi;
          var pr = pi + 1;
          if (pr === pl) {
            this.debug("** at the end");
            for (; fi < fl; fi++) {
              if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".")
                return false;
            }
            return true;
          }
          while (fr < fl) {
            var swallowee = file[fr];
            this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
            if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
              this.debug("globstar found match!", fr, fl, swallowee);
              return true;
            } else {
              if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
                this.debug("dot detected!", file, fr, pattern, pr);
                break;
              }
              this.debug("globstar swallow a segment, and continue");
              fr++;
            }
          }
          if (partial) {
            this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
            if (fr === fl)
              return true;
          }
          return false;
        }
        var hit;
        if (typeof p === "string") {
          hit = f === p;
          this.debug("string match", p, f, hit);
        } else {
          hit = f.match(p);
          this.debug("pattern match", p, f, hit);
        }
        if (!hit)
          return false;
      }
      if (fi === fl && pi === pl) {
        return true;
      } else if (fi === fl) {
        return partial;
      } else if (pi === pl) {
        return fi === fl - 1 && file[fi] === "";
      }
      throw new Error("wtf?");
    };
    function globUnescape(s) {
      return s.replace(/\\(.)/g, "$1");
    }
    function regExpEscape(s) {
      return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }
  }
});

// node_modules/path-is-absolute/index.js
var require_path_is_absolute = __commonJS({
  "node_modules/path-is-absolute/index.js"(exports, module2) {
    "use strict";
    function posix(path) {
      return path.charAt(0) === "/";
    }
    function win32(path) {
      var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
      var result = splitDeviceRe.exec(path);
      var device = result[1] || "";
      var isUnc = Boolean(device && device.charAt(1) !== ":");
      return Boolean(result[2] || isUnc);
    }
    module2.exports = process.platform === "win32" ? win32 : posix;
    module2.exports.posix = posix;
    module2.exports.win32 = win32;
  }
});

// node_modules/glob/common.js
var require_common = __commonJS({
  "node_modules/glob/common.js"(exports) {
    "use strict";
    exports.setopts = setopts;
    exports.ownProp = ownProp;
    exports.makeAbs = makeAbs;
    exports.finish = finish;
    exports.mark = mark;
    exports.isIgnored = isIgnored;
    exports.childrenIgnored = childrenIgnored;
    function ownProp(obj, field) {
      return Object.prototype.hasOwnProperty.call(obj, field);
    }
    var fs = require("fs");
    var path = require("path");
    var minimatch = require_minimatch();
    var isAbsolute = require_path_is_absolute();
    var Minimatch = minimatch.Minimatch;
    function alphasort(a, b) {
      return a.localeCompare(b, "en");
    }
    function setupIgnores(self2, options) {
      self2.ignore = options.ignore || [];
      if (!Array.isArray(self2.ignore))
        self2.ignore = [self2.ignore];
      if (self2.ignore.length) {
        self2.ignore = self2.ignore.map(ignoreMap);
      }
    }
    function ignoreMap(pattern) {
      var gmatcher = null;
      if (pattern.slice(-3) === "/**") {
        var gpattern = pattern.replace(/(\/\*\*)+$/, "");
        gmatcher = new Minimatch(gpattern, { dot: true });
      }
      return {
        matcher: new Minimatch(pattern, { dot: true }),
        gmatcher
      };
    }
    function setopts(self2, pattern, options) {
      if (!options)
        options = {};
      if (options.matchBase && -1 === pattern.indexOf("/")) {
        if (options.noglobstar) {
          throw new Error("base matching requires globstar");
        }
        pattern = "**/" + pattern;
      }
      self2.silent = !!options.silent;
      self2.pattern = pattern;
      self2.strict = options.strict !== false;
      self2.realpath = !!options.realpath;
      self2.realpathCache = options.realpathCache || /* @__PURE__ */ Object.create(null);
      self2.follow = !!options.follow;
      self2.dot = !!options.dot;
      self2.mark = !!options.mark;
      self2.nodir = !!options.nodir;
      if (self2.nodir)
        self2.mark = true;
      self2.sync = !!options.sync;
      self2.nounique = !!options.nounique;
      self2.nonull = !!options.nonull;
      self2.nosort = !!options.nosort;
      self2.nocase = !!options.nocase;
      self2.stat = !!options.stat;
      self2.noprocess = !!options.noprocess;
      self2.absolute = !!options.absolute;
      self2.fs = options.fs || fs;
      self2.maxLength = options.maxLength || Infinity;
      self2.cache = options.cache || /* @__PURE__ */ Object.create(null);
      self2.statCache = options.statCache || /* @__PURE__ */ Object.create(null);
      self2.symlinks = options.symlinks || /* @__PURE__ */ Object.create(null);
      setupIgnores(self2, options);
      self2.changedCwd = false;
      var cwd = process.cwd();
      if (!ownProp(options, "cwd"))
        self2.cwd = cwd;
      else {
        self2.cwd = path.resolve(options.cwd);
        self2.changedCwd = self2.cwd !== cwd;
      }
      self2.root = options.root || path.resolve(self2.cwd, "/");
      self2.root = path.resolve(self2.root);
      if (process.platform === "win32")
        self2.root = self2.root.replace(/\\/g, "/");
      self2.cwdAbs = isAbsolute(self2.cwd) ? self2.cwd : makeAbs(self2, self2.cwd);
      if (process.platform === "win32")
        self2.cwdAbs = self2.cwdAbs.replace(/\\/g, "/");
      self2.nomount = !!options.nomount;
      options.nonegate = true;
      options.nocomment = true;
      options.allowWindowsEscape = false;
      self2.minimatch = new Minimatch(pattern, options);
      self2.options = self2.minimatch.options;
    }
    function finish(self2) {
      var nou = self2.nounique;
      var all = nou ? [] : /* @__PURE__ */ Object.create(null);
      for (var i = 0, l = self2.matches.length; i < l; i++) {
        var matches = self2.matches[i];
        if (!matches || Object.keys(matches).length === 0) {
          if (self2.nonull) {
            var literal = self2.minimatch.globSet[i];
            if (nou)
              all.push(literal);
            else
              all[literal] = true;
          }
        } else {
          var m = Object.keys(matches);
          if (nou)
            all.push.apply(all, m);
          else
            m.forEach(function(m2) {
              all[m2] = true;
            });
        }
      }
      if (!nou)
        all = Object.keys(all);
      if (!self2.nosort)
        all = all.sort(alphasort);
      if (self2.mark) {
        for (var i = 0; i < all.length; i++) {
          all[i] = self2._mark(all[i]);
        }
        if (self2.nodir) {
          all = all.filter(function(e) {
            var notDir = !/\/$/.test(e);
            var c = self2.cache[e] || self2.cache[makeAbs(self2, e)];
            if (notDir && c)
              notDir = c !== "DIR" && !Array.isArray(c);
            return notDir;
          });
        }
      }
      if (self2.ignore.length)
        all = all.filter(function(m2) {
          return !isIgnored(self2, m2);
        });
      self2.found = all;
    }
    function mark(self2, p) {
      var abs = makeAbs(self2, p);
      var c = self2.cache[abs];
      var m = p;
      if (c) {
        var isDir = c === "DIR" || Array.isArray(c);
        var slash = p.slice(-1) === "/";
        if (isDir && !slash)
          m += "/";
        else if (!isDir && slash)
          m = m.slice(0, -1);
        if (m !== p) {
          var mabs = makeAbs(self2, m);
          self2.statCache[mabs] = self2.statCache[abs];
          self2.cache[mabs] = self2.cache[abs];
        }
      }
      return m;
    }
    function makeAbs(self2, f) {
      var abs = f;
      if (f.charAt(0) === "/") {
        abs = path.join(self2.root, f);
      } else if (isAbsolute(f) || f === "") {
        abs = f;
      } else if (self2.changedCwd) {
        abs = path.resolve(self2.cwd, f);
      } else {
        abs = path.resolve(f);
      }
      if (process.platform === "win32")
        abs = abs.replace(/\\/g, "/");
      return abs;
    }
    function isIgnored(self2, path2) {
      if (!self2.ignore.length)
        return false;
      return self2.ignore.some(function(item) {
        return item.matcher.match(path2) || !!(item.gmatcher && item.gmatcher.match(path2));
      });
    }
    function childrenIgnored(self2, path2) {
      if (!self2.ignore.length)
        return false;
      return self2.ignore.some(function(item) {
        return !!(item.gmatcher && item.gmatcher.match(path2));
      });
    }
  }
});

// node_modules/glob/sync.js
var require_sync = __commonJS({
  "node_modules/glob/sync.js"(exports, module2) {
    "use strict";
    module2.exports = globSync;
    globSync.GlobSync = GlobSync;
    var rp = require_fs();
    var minimatch = require_minimatch();
    var Minimatch = minimatch.Minimatch;
    var Glob = require_glob().Glob;
    var util = require("util");
    var path = require("path");
    var assert = require("assert");
    var isAbsolute = require_path_is_absolute();
    var common = require_common();
    var setopts = common.setopts;
    var ownProp = common.ownProp;
    var childrenIgnored = common.childrenIgnored;
    var isIgnored = common.isIgnored;
    function globSync(pattern, options) {
      if (typeof options === "function" || arguments.length === 3)
        throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
      return new GlobSync(pattern, options).found;
    }
    function GlobSync(pattern, options) {
      if (!pattern)
        throw new Error("must provide pattern");
      if (typeof options === "function" || arguments.length === 3)
        throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
      if (!(this instanceof GlobSync))
        return new GlobSync(pattern, options);
      setopts(this, pattern, options);
      if (this.noprocess)
        return this;
      var n = this.minimatch.set.length;
      this.matches = new Array(n);
      for (var i = 0; i < n; i++) {
        this._process(this.minimatch.set[i], i, false);
      }
      this._finish();
    }
    GlobSync.prototype._finish = function() {
      assert.ok(this instanceof GlobSync);
      if (this.realpath) {
        var self2 = this;
        this.matches.forEach(function(matchset, index) {
          var set = self2.matches[index] = /* @__PURE__ */ Object.create(null);
          for (var p in matchset) {
            try {
              p = self2._makeAbs(p);
              var real = rp.realpathSync(p, self2.realpathCache);
              set[real] = true;
            } catch (er) {
              if (er.syscall === "stat")
                set[self2._makeAbs(p)] = true;
              else
                throw er;
            }
          }
        });
      }
      common.finish(this);
    };
    GlobSync.prototype._process = function(pattern, index, inGlobStar) {
      assert.ok(this instanceof GlobSync);
      var n = 0;
      while (typeof pattern[n] === "string") {
        n++;
      }
      var prefix;
      switch (n) {
        case pattern.length:
          this._processSimple(pattern.join("/"), index);
          return;
        case 0:
          prefix = null;
          break;
        default:
          prefix = pattern.slice(0, n).join("/");
          break;
      }
      var remain = pattern.slice(n);
      var read;
      if (prefix === null)
        read = ".";
      else if (isAbsolute(prefix) || isAbsolute(pattern.map(function(p) {
        return typeof p === "string" ? p : "[*]";
      }).join("/"))) {
        if (!prefix || !isAbsolute(prefix))
          prefix = "/" + prefix;
        read = prefix;
      } else
        read = prefix;
      var abs = this._makeAbs(read);
      if (childrenIgnored(this, read))
        return;
      var isGlobStar = remain[0] === minimatch.GLOBSTAR;
      if (isGlobStar)
        this._processGlobStar(prefix, read, abs, remain, index, inGlobStar);
      else
        this._processReaddir(prefix, read, abs, remain, index, inGlobStar);
    };
    GlobSync.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar) {
      var entries = this._readdir(abs, inGlobStar);
      if (!entries)
        return;
      var pn = remain[0];
      var negate = !!this.minimatch.negate;
      var rawGlob = pn._glob;
      var dotOk = this.dot || rawGlob.charAt(0) === ".";
      var matchedEntries = [];
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (e.charAt(0) !== "." || dotOk) {
          var m;
          if (negate && !prefix) {
            m = !e.match(pn);
          } else {
            m = e.match(pn);
          }
          if (m)
            matchedEntries.push(e);
        }
      }
      var len = matchedEntries.length;
      if (len === 0)
        return;
      if (remain.length === 1 && !this.mark && !this.stat) {
        if (!this.matches[index])
          this.matches[index] = /* @__PURE__ */ Object.create(null);
        for (var i = 0; i < len; i++) {
          var e = matchedEntries[i];
          if (prefix) {
            if (prefix.slice(-1) !== "/")
              e = prefix + "/" + e;
            else
              e = prefix + e;
          }
          if (e.charAt(0) === "/" && !this.nomount) {
            e = path.join(this.root, e);
          }
          this._emitMatch(index, e);
        }
        return;
      }
      remain.shift();
      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];
        var newPattern;
        if (prefix)
          newPattern = [prefix, e];
        else
          newPattern = [e];
        this._process(newPattern.concat(remain), index, inGlobStar);
      }
    };
    GlobSync.prototype._emitMatch = function(index, e) {
      if (isIgnored(this, e))
        return;
      var abs = this._makeAbs(e);
      if (this.mark)
        e = this._mark(e);
      if (this.absolute) {
        e = abs;
      }
      if (this.matches[index][e])
        return;
      if (this.nodir) {
        var c = this.cache[abs];
        if (c === "DIR" || Array.isArray(c))
          return;
      }
      this.matches[index][e] = true;
      if (this.stat)
        this._stat(e);
    };
    GlobSync.prototype._readdirInGlobStar = function(abs) {
      if (this.follow)
        return this._readdir(abs, false);
      var entries;
      var lstat;
      var stat;
      try {
        lstat = this.fs.lstatSync(abs);
      } catch (er) {
        if (er.code === "ENOENT") {
          return null;
        }
      }
      var isSym = lstat && lstat.isSymbolicLink();
      this.symlinks[abs] = isSym;
      if (!isSym && lstat && !lstat.isDirectory())
        this.cache[abs] = "FILE";
      else
        entries = this._readdir(abs, false);
      return entries;
    };
    GlobSync.prototype._readdir = function(abs, inGlobStar) {
      var entries;
      if (inGlobStar && !ownProp(this.symlinks, abs))
        return this._readdirInGlobStar(abs);
      if (ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (!c || c === "FILE")
          return null;
        if (Array.isArray(c))
          return c;
      }
      try {
        return this._readdirEntries(abs, this.fs.readdirSync(abs));
      } catch (er) {
        this._readdirError(abs, er);
        return null;
      }
    };
    GlobSync.prototype._readdirEntries = function(abs, entries) {
      if (!this.mark && !this.stat) {
        for (var i = 0; i < entries.length; i++) {
          var e = entries[i];
          if (abs === "/")
            e = abs + e;
          else
            e = abs + "/" + e;
          this.cache[e] = true;
        }
      }
      this.cache[abs] = entries;
      return entries;
    };
    GlobSync.prototype._readdirError = function(f, er) {
      switch (er.code) {
        case "ENOTSUP":
        case "ENOTDIR":
          var abs = this._makeAbs(f);
          this.cache[abs] = "FILE";
          if (abs === this.cwdAbs) {
            var error = new Error(er.code + " invalid cwd " + this.cwd);
            error.path = this.cwd;
            error.code = er.code;
            throw error;
          }
          break;
        case "ENOENT":
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
          this.cache[this._makeAbs(f)] = false;
          break;
        default:
          this.cache[this._makeAbs(f)] = false;
          if (this.strict)
            throw er;
          if (!this.silent)
            console.error("glob error", er);
          break;
      }
    };
    GlobSync.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar) {
      var entries = this._readdir(abs, inGlobStar);
      if (!entries)
        return;
      var remainWithoutGlobStar = remain.slice(1);
      var gspref = prefix ? [prefix] : [];
      var noGlobStar = gspref.concat(remainWithoutGlobStar);
      this._process(noGlobStar, index, false);
      var len = entries.length;
      var isSym = this.symlinks[abs];
      if (isSym && inGlobStar)
        return;
      for (var i = 0; i < len; i++) {
        var e = entries[i];
        if (e.charAt(0) === "." && !this.dot)
          continue;
        var instead = gspref.concat(entries[i], remainWithoutGlobStar);
        this._process(instead, index, true);
        var below = gspref.concat(entries[i], remain);
        this._process(below, index, true);
      }
    };
    GlobSync.prototype._processSimple = function(prefix, index) {
      var exists = this._stat(prefix);
      if (!this.matches[index])
        this.matches[index] = /* @__PURE__ */ Object.create(null);
      if (!exists)
        return;
      if (prefix && isAbsolute(prefix) && !this.nomount) {
        var trail = /[\/\\]$/.test(prefix);
        if (prefix.charAt(0) === "/") {
          prefix = path.join(this.root, prefix);
        } else {
          prefix = path.resolve(this.root, prefix);
          if (trail)
            prefix += "/";
        }
      }
      if (process.platform === "win32")
        prefix = prefix.replace(/\\/g, "/");
      this._emitMatch(index, prefix);
    };
    GlobSync.prototype._stat = function(f) {
      var abs = this._makeAbs(f);
      var needDir = f.slice(-1) === "/";
      if (f.length > this.maxLength)
        return false;
      if (!this.stat && ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (Array.isArray(c))
          c = "DIR";
        if (!needDir || c === "DIR")
          return c;
        if (needDir && c === "FILE")
          return false;
      }
      var exists;
      var stat = this.statCache[abs];
      if (!stat) {
        var lstat;
        try {
          lstat = this.fs.lstatSync(abs);
        } catch (er) {
          if (er && (er.code === "ENOENT" || er.code === "ENOTDIR")) {
            this.statCache[abs] = false;
            return false;
          }
        }
        if (lstat && lstat.isSymbolicLink()) {
          try {
            stat = this.fs.statSync(abs);
          } catch (er) {
            stat = lstat;
          }
        } else {
          stat = lstat;
        }
      }
      this.statCache[abs] = stat;
      var c = true;
      if (stat)
        c = stat.isDirectory() ? "DIR" : "FILE";
      this.cache[abs] = this.cache[abs] || c;
      if (needDir && c === "FILE")
        return false;
      return c;
    };
    GlobSync.prototype._mark = function(p) {
      return common.mark(this, p);
    };
    GlobSync.prototype._makeAbs = function(f) {
      return common.makeAbs(this, f);
    };
  }
});

// node_modules/wrappy/wrappy.js
var require_wrappy = __commonJS({
  "node_modules/wrappy/wrappy.js"(exports, module2) {
    "use strict";
    module2.exports = wrappy;
    function wrappy(fn, cb) {
      if (fn && cb)
        return wrappy(fn)(cb);
      if (typeof fn !== "function")
        throw new TypeError("need wrapper function");
      Object.keys(fn).forEach(function(k) {
        wrapper[k] = fn[k];
      });
      return wrapper;
      function wrapper() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        var ret = fn.apply(this, args);
        var cb2 = args[args.length - 1];
        if (typeof ret === "function" && ret !== cb2) {
          Object.keys(cb2).forEach(function(k) {
            ret[k] = cb2[k];
          });
        }
        return ret;
      }
    }
  }
});

// node_modules/once/once.js
var require_once = __commonJS({
  "node_modules/once/once.js"(exports, module2) {
    "use strict";
    var wrappy = require_wrappy();
    module2.exports = wrappy(once);
    module2.exports.strict = wrappy(onceStrict);
    once.proto = once(function() {
      Object.defineProperty(Function.prototype, "once", {
        value: function() {
          return once(this);
        },
        configurable: true
      });
      Object.defineProperty(Function.prototype, "onceStrict", {
        value: function() {
          return onceStrict(this);
        },
        configurable: true
      });
    });
    function once(fn) {
      var f = function() {
        if (f.called)
          return f.value;
        f.called = true;
        return f.value = fn.apply(this, arguments);
      };
      f.called = false;
      return f;
    }
    function onceStrict(fn) {
      var f = function() {
        if (f.called)
          throw new Error(f.onceError);
        f.called = true;
        return f.value = fn.apply(this, arguments);
      };
      var name = fn.name || "Function wrapped with `once`";
      f.onceError = name + " shouldn't be called more than once";
      f.called = false;
      return f;
    }
  }
});

// node_modules/inflight/inflight.js
var require_inflight = __commonJS({
  "node_modules/inflight/inflight.js"(exports, module2) {
    "use strict";
    var wrappy = require_wrappy();
    var reqs = /* @__PURE__ */ Object.create(null);
    var once = require_once();
    module2.exports = wrappy(inflight);
    function inflight(key, cb) {
      if (reqs[key]) {
        reqs[key].push(cb);
        return null;
      } else {
        reqs[key] = [cb];
        return makeres(key);
      }
    }
    function makeres(key) {
      return once(function RES() {
        var cbs = reqs[key];
        var len = cbs.length;
        var args = slice(arguments);
        try {
          for (var i = 0; i < len; i++) {
            cbs[i].apply(null, args);
          }
        } finally {
          if (cbs.length > len) {
            cbs.splice(0, len);
            process.nextTick(function() {
              RES.apply(null, args);
            });
          } else {
            delete reqs[key];
          }
        }
      });
    }
    function slice(args) {
      var length = args.length;
      var array = [];
      for (var i = 0; i < length; i++)
        array[i] = args[i];
      return array;
    }
  }
});

// node_modules/glob/glob.js
var require_glob = __commonJS({
  "node_modules/glob/glob.js"(exports, module2) {
    "use strict";
    module2.exports = glob;
    var rp = require_fs();
    var minimatch = require_minimatch();
    var Minimatch = minimatch.Minimatch;
    var inherits = require_inherits();
    var EE = require("events").EventEmitter;
    var path = require("path");
    var assert = require("assert");
    var isAbsolute = require_path_is_absolute();
    var globSync = require_sync();
    var common = require_common();
    var setopts = common.setopts;
    var ownProp = common.ownProp;
    var inflight = require_inflight();
    var util = require("util");
    var childrenIgnored = common.childrenIgnored;
    var isIgnored = common.isIgnored;
    var once = require_once();
    function glob(pattern, options, cb) {
      if (typeof options === "function")
        cb = options, options = {};
      if (!options)
        options = {};
      if (options.sync) {
        if (cb)
          throw new TypeError("callback provided to sync glob");
        return globSync(pattern, options);
      }
      return new Glob(pattern, options, cb);
    }
    glob.sync = globSync;
    var GlobSync = glob.GlobSync = globSync.GlobSync;
    glob.glob = glob;
    function extend(origin, add) {
      if (add === null || typeof add !== "object") {
        return origin;
      }
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    }
    glob.hasMagic = function(pattern, options_) {
      var options = extend({}, options_);
      options.noprocess = true;
      var g = new Glob(pattern, options);
      var set = g.minimatch.set;
      if (!pattern)
        return false;
      if (set.length > 1)
        return true;
      for (var j = 0; j < set[0].length; j++) {
        if (typeof set[0][j] !== "string")
          return true;
      }
      return false;
    };
    glob.Glob = Glob;
    inherits(Glob, EE);
    function Glob(pattern, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = null;
      }
      if (options && options.sync) {
        if (cb)
          throw new TypeError("callback provided to sync glob");
        return new GlobSync(pattern, options);
      }
      if (!(this instanceof Glob))
        return new Glob(pattern, options, cb);
      setopts(this, pattern, options);
      this._didRealPath = false;
      var n = this.minimatch.set.length;
      this.matches = new Array(n);
      if (typeof cb === "function") {
        cb = once(cb);
        this.on("error", cb);
        this.on("end", function(matches) {
          cb(null, matches);
        });
      }
      var self2 = this;
      this._processing = 0;
      this._emitQueue = [];
      this._processQueue = [];
      this.paused = false;
      if (this.noprocess)
        return this;
      if (n === 0)
        return done();
      var sync = true;
      for (var i = 0; i < n; i++) {
        this._process(this.minimatch.set[i], i, false, done);
      }
      sync = false;
      function done() {
        --self2._processing;
        if (self2._processing <= 0) {
          if (sync) {
            process.nextTick(function() {
              self2._finish();
            });
          } else {
            self2._finish();
          }
        }
      }
    }
    Glob.prototype._finish = function() {
      assert(this instanceof Glob);
      if (this.aborted)
        return;
      if (this.realpath && !this._didRealpath)
        return this._realpath();
      common.finish(this);
      this.emit("end", this.found);
    };
    Glob.prototype._realpath = function() {
      if (this._didRealpath)
        return;
      this._didRealpath = true;
      var n = this.matches.length;
      if (n === 0)
        return this._finish();
      var self2 = this;
      for (var i = 0; i < this.matches.length; i++)
        this._realpathSet(i, next);
      function next() {
        if (--n === 0)
          self2._finish();
      }
    };
    Glob.prototype._realpathSet = function(index, cb) {
      var matchset = this.matches[index];
      if (!matchset)
        return cb();
      var found = Object.keys(matchset);
      var self2 = this;
      var n = found.length;
      if (n === 0)
        return cb();
      var set = this.matches[index] = /* @__PURE__ */ Object.create(null);
      found.forEach(function(p, i) {
        p = self2._makeAbs(p);
        rp.realpath(p, self2.realpathCache, function(er, real) {
          if (!er)
            set[real] = true;
          else if (er.syscall === "stat")
            set[p] = true;
          else
            self2.emit("error", er);
          if (--n === 0) {
            self2.matches[index] = set;
            cb();
          }
        });
      });
    };
    Glob.prototype._mark = function(p) {
      return common.mark(this, p);
    };
    Glob.prototype._makeAbs = function(f) {
      return common.makeAbs(this, f);
    };
    Glob.prototype.abort = function() {
      this.aborted = true;
      this.emit("abort");
    };
    Glob.prototype.pause = function() {
      if (!this.paused) {
        this.paused = true;
        this.emit("pause");
      }
    };
    Glob.prototype.resume = function() {
      if (this.paused) {
        this.emit("resume");
        this.paused = false;
        if (this._emitQueue.length) {
          var eq = this._emitQueue.slice(0);
          this._emitQueue.length = 0;
          for (var i = 0; i < eq.length; i++) {
            var e = eq[i];
            this._emitMatch(e[0], e[1]);
          }
        }
        if (this._processQueue.length) {
          var pq = this._processQueue.slice(0);
          this._processQueue.length = 0;
          for (var i = 0; i < pq.length; i++) {
            var p = pq[i];
            this._processing--;
            this._process(p[0], p[1], p[2], p[3]);
          }
        }
      }
    };
    Glob.prototype._process = function(pattern, index, inGlobStar, cb) {
      assert(this instanceof Glob);
      assert(typeof cb === "function");
      if (this.aborted)
        return;
      this._processing++;
      if (this.paused) {
        this._processQueue.push([pattern, index, inGlobStar, cb]);
        return;
      }
      var n = 0;
      while (typeof pattern[n] === "string") {
        n++;
      }
      var prefix;
      switch (n) {
        case pattern.length:
          this._processSimple(pattern.join("/"), index, cb);
          return;
        case 0:
          prefix = null;
          break;
        default:
          prefix = pattern.slice(0, n).join("/");
          break;
      }
      var remain = pattern.slice(n);
      var read;
      if (prefix === null)
        read = ".";
      else if (isAbsolute(prefix) || isAbsolute(pattern.map(function(p) {
        return typeof p === "string" ? p : "[*]";
      }).join("/"))) {
        if (!prefix || !isAbsolute(prefix))
          prefix = "/" + prefix;
        read = prefix;
      } else
        read = prefix;
      var abs = this._makeAbs(read);
      if (childrenIgnored(this, read))
        return cb();
      var isGlobStar = remain[0] === minimatch.GLOBSTAR;
      if (isGlobStar)
        this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb);
      else
        this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb);
    };
    Glob.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar, cb) {
      var self2 = this;
      this._readdir(abs, inGlobStar, function(er, entries) {
        return self2._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
      });
    };
    Glob.prototype._processReaddir2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb) {
      if (!entries)
        return cb();
      var pn = remain[0];
      var negate = !!this.minimatch.negate;
      var rawGlob = pn._glob;
      var dotOk = this.dot || rawGlob.charAt(0) === ".";
      var matchedEntries = [];
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (e.charAt(0) !== "." || dotOk) {
          var m;
          if (negate && !prefix) {
            m = !e.match(pn);
          } else {
            m = e.match(pn);
          }
          if (m)
            matchedEntries.push(e);
        }
      }
      var len = matchedEntries.length;
      if (len === 0)
        return cb();
      if (remain.length === 1 && !this.mark && !this.stat) {
        if (!this.matches[index])
          this.matches[index] = /* @__PURE__ */ Object.create(null);
        for (var i = 0; i < len; i++) {
          var e = matchedEntries[i];
          if (prefix) {
            if (prefix !== "/")
              e = prefix + "/" + e;
            else
              e = prefix + e;
          }
          if (e.charAt(0) === "/" && !this.nomount) {
            e = path.join(this.root, e);
          }
          this._emitMatch(index, e);
        }
        return cb();
      }
      remain.shift();
      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];
        var newPattern;
        if (prefix) {
          if (prefix !== "/")
            e = prefix + "/" + e;
          else
            e = prefix + e;
        }
        this._process([e].concat(remain), index, inGlobStar, cb);
      }
      cb();
    };
    Glob.prototype._emitMatch = function(index, e) {
      if (this.aborted)
        return;
      if (isIgnored(this, e))
        return;
      if (this.paused) {
        this._emitQueue.push([index, e]);
        return;
      }
      var abs = isAbsolute(e) ? e : this._makeAbs(e);
      if (this.mark)
        e = this._mark(e);
      if (this.absolute)
        e = abs;
      if (this.matches[index][e])
        return;
      if (this.nodir) {
        var c = this.cache[abs];
        if (c === "DIR" || Array.isArray(c))
          return;
      }
      this.matches[index][e] = true;
      var st = this.statCache[abs];
      if (st)
        this.emit("stat", e, st);
      this.emit("match", e);
    };
    Glob.prototype._readdirInGlobStar = function(abs, cb) {
      if (this.aborted)
        return;
      if (this.follow)
        return this._readdir(abs, false, cb);
      var lstatkey = "lstat\0" + abs;
      var self2 = this;
      var lstatcb = inflight(lstatkey, lstatcb_);
      if (lstatcb)
        self2.fs.lstat(abs, lstatcb);
      function lstatcb_(er, lstat) {
        if (er && er.code === "ENOENT")
          return cb();
        var isSym = lstat && lstat.isSymbolicLink();
        self2.symlinks[abs] = isSym;
        if (!isSym && lstat && !lstat.isDirectory()) {
          self2.cache[abs] = "FILE";
          cb();
        } else
          self2._readdir(abs, false, cb);
      }
    };
    Glob.prototype._readdir = function(abs, inGlobStar, cb) {
      if (this.aborted)
        return;
      cb = inflight("readdir\0" + abs + "\0" + inGlobStar, cb);
      if (!cb)
        return;
      if (inGlobStar && !ownProp(this.symlinks, abs))
        return this._readdirInGlobStar(abs, cb);
      if (ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (!c || c === "FILE")
          return cb();
        if (Array.isArray(c))
          return cb(null, c);
      }
      var self2 = this;
      self2.fs.readdir(abs, readdirCb(this, abs, cb));
    };
    function readdirCb(self2, abs, cb) {
      return function(er, entries) {
        if (er)
          self2._readdirError(abs, er, cb);
        else
          self2._readdirEntries(abs, entries, cb);
      };
    }
    Glob.prototype._readdirEntries = function(abs, entries, cb) {
      if (this.aborted)
        return;
      if (!this.mark && !this.stat) {
        for (var i = 0; i < entries.length; i++) {
          var e = entries[i];
          if (abs === "/")
            e = abs + e;
          else
            e = abs + "/" + e;
          this.cache[e] = true;
        }
      }
      this.cache[abs] = entries;
      return cb(null, entries);
    };
    Glob.prototype._readdirError = function(f, er, cb) {
      if (this.aborted)
        return;
      switch (er.code) {
        case "ENOTSUP":
        case "ENOTDIR":
          var abs = this._makeAbs(f);
          this.cache[abs] = "FILE";
          if (abs === this.cwdAbs) {
            var error = new Error(er.code + " invalid cwd " + this.cwd);
            error.path = this.cwd;
            error.code = er.code;
            this.emit("error", error);
            this.abort();
          }
          break;
        case "ENOENT":
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
          this.cache[this._makeAbs(f)] = false;
          break;
        default:
          this.cache[this._makeAbs(f)] = false;
          if (this.strict) {
            this.emit("error", er);
            this.abort();
          }
          if (!this.silent)
            console.error("glob error", er);
          break;
      }
      return cb();
    };
    Glob.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar, cb) {
      var self2 = this;
      this._readdir(abs, inGlobStar, function(er, entries) {
        self2._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
      });
    };
    Glob.prototype._processGlobStar2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb) {
      if (!entries)
        return cb();
      var remainWithoutGlobStar = remain.slice(1);
      var gspref = prefix ? [prefix] : [];
      var noGlobStar = gspref.concat(remainWithoutGlobStar);
      this._process(noGlobStar, index, false, cb);
      var isSym = this.symlinks[abs];
      var len = entries.length;
      if (isSym && inGlobStar)
        return cb();
      for (var i = 0; i < len; i++) {
        var e = entries[i];
        if (e.charAt(0) === "." && !this.dot)
          continue;
        var instead = gspref.concat(entries[i], remainWithoutGlobStar);
        this._process(instead, index, true, cb);
        var below = gspref.concat(entries[i], remain);
        this._process(below, index, true, cb);
      }
      cb();
    };
    Glob.prototype._processSimple = function(prefix, index, cb) {
      var self2 = this;
      this._stat(prefix, function(er, exists) {
        self2._processSimple2(prefix, index, er, exists, cb);
      });
    };
    Glob.prototype._processSimple2 = function(prefix, index, er, exists, cb) {
      if (!this.matches[index])
        this.matches[index] = /* @__PURE__ */ Object.create(null);
      if (!exists)
        return cb();
      if (prefix && isAbsolute(prefix) && !this.nomount) {
        var trail = /[\/\\]$/.test(prefix);
        if (prefix.charAt(0) === "/") {
          prefix = path.join(this.root, prefix);
        } else {
          prefix = path.resolve(this.root, prefix);
          if (trail)
            prefix += "/";
        }
      }
      if (process.platform === "win32")
        prefix = prefix.replace(/\\/g, "/");
      this._emitMatch(index, prefix);
      cb();
    };
    Glob.prototype._stat = function(f, cb) {
      var abs = this._makeAbs(f);
      var needDir = f.slice(-1) === "/";
      if (f.length > this.maxLength)
        return cb();
      if (!this.stat && ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (Array.isArray(c))
          c = "DIR";
        if (!needDir || c === "DIR")
          return cb(null, c);
        if (needDir && c === "FILE")
          return cb();
      }
      var exists;
      var stat = this.statCache[abs];
      if (stat !== void 0) {
        if (stat === false)
          return cb(null, stat);
        else {
          var type = stat.isDirectory() ? "DIR" : "FILE";
          if (needDir && type === "FILE")
            return cb();
          else
            return cb(null, type, stat);
        }
      }
      var self2 = this;
      var statcb = inflight("stat\0" + abs, lstatcb_);
      if (statcb)
        self2.fs.lstat(abs, statcb);
      function lstatcb_(er, lstat) {
        if (lstat && lstat.isSymbolicLink()) {
          return self2.fs.stat(abs, function(er2, stat2) {
            if (er2)
              self2._stat2(f, abs, null, lstat, cb);
            else
              self2._stat2(f, abs, er2, stat2, cb);
          });
        } else {
          self2._stat2(f, abs, er, lstat, cb);
        }
      }
    };
    Glob.prototype._stat2 = function(f, abs, er, stat, cb) {
      if (er && (er.code === "ENOENT" || er.code === "ENOTDIR")) {
        this.statCache[abs] = false;
        return cb();
      }
      var needDir = f.slice(-1) === "/";
      this.statCache[abs] = stat;
      if (abs.slice(-1) === "/" && stat && !stat.isDirectory())
        return cb(null, false, stat);
      var c = true;
      if (stat)
        c = stat.isDirectory() ? "DIR" : "FILE";
      this.cache[abs] = this.cache[abs] || c;
      if (needDir && c === "FILE")
        return cb();
      return cb(null, c, stat);
    };
  }
});

// node_modules/rimraf/rimraf.js
var require_rimraf = __commonJS({
  "node_modules/rimraf/rimraf.js"(exports, module2) {
    "use strict";
    var assert = require("assert");
    var path = require("path");
    var fs = require("fs");
    var glob = void 0;
    try {
      glob = require_glob();
    } catch (_err) {
    }
    var defaultGlobOpts = {
      nosort: true,
      silent: true
    };
    var timeout = 0;
    var isWindows = process.platform === "win32";
    var defaults = (options) => {
      const methods = [
        "unlink",
        "chmod",
        "stat",
        "lstat",
        "rmdir",
        "readdir"
      ];
      methods.forEach((m) => {
        options[m] = options[m] || fs[m];
        m = m + "Sync";
        options[m] = options[m] || fs[m];
      });
      options.maxBusyTries = options.maxBusyTries || 3;
      options.emfileWait = options.emfileWait || 1e3;
      if (options.glob === false) {
        options.disableGlob = true;
      }
      if (options.disableGlob !== true && glob === void 0) {
        throw Error("glob dependency not found, set `options.disableGlob = true` if intentional");
      }
      options.disableGlob = options.disableGlob || false;
      options.glob = options.glob || defaultGlobOpts;
    };
    var rimraf = (p, options, cb) => {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      assert(p, "rimraf: missing path");
      assert.equal(typeof p, "string", "rimraf: path should be a string");
      assert.equal(typeof cb, "function", "rimraf: callback function required");
      assert(options, "rimraf: invalid options argument provided");
      assert.equal(typeof options, "object", "rimraf: options should be object");
      defaults(options);
      let busyTries = 0;
      let errState = null;
      let n = 0;
      const next = (er) => {
        errState = errState || er;
        if (--n === 0)
          cb(errState);
      };
      const afterGlob = (er, results) => {
        if (er)
          return cb(er);
        n = results.length;
        if (n === 0)
          return cb();
        results.forEach((p2) => {
          const CB = (er2) => {
            if (er2) {
              if ((er2.code === "EBUSY" || er2.code === "ENOTEMPTY" || er2.code === "EPERM") && busyTries < options.maxBusyTries) {
                busyTries++;
                return setTimeout(() => rimraf_(p2, options, CB), busyTries * 100);
              }
              if (er2.code === "EMFILE" && timeout < options.emfileWait) {
                return setTimeout(() => rimraf_(p2, options, CB), timeout++);
              }
              if (er2.code === "ENOENT")
                er2 = null;
            }
            timeout = 0;
            next(er2);
          };
          rimraf_(p2, options, CB);
        });
      };
      if (options.disableGlob || !glob.hasMagic(p))
        return afterGlob(null, [p]);
      options.lstat(p, (er, stat) => {
        if (!er)
          return afterGlob(null, [p]);
        glob(p, options.glob, afterGlob);
      });
    };
    var rimraf_ = (p, options, cb) => {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.lstat(p, (er, st) => {
        if (er && er.code === "ENOENT")
          return cb(null);
        if (er && er.code === "EPERM" && isWindows)
          fixWinEPERM(p, options, er, cb);
        if (st && st.isDirectory())
          return rmdir(p, options, er, cb);
        options.unlink(p, (er2) => {
          if (er2) {
            if (er2.code === "ENOENT")
              return cb(null);
            if (er2.code === "EPERM")
              return isWindows ? fixWinEPERM(p, options, er2, cb) : rmdir(p, options, er2, cb);
            if (er2.code === "EISDIR")
              return rmdir(p, options, er2, cb);
          }
          return cb(er2);
        });
      });
    };
    var fixWinEPERM = (p, options, er, cb) => {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.chmod(p, 438, (er2) => {
        if (er2)
          cb(er2.code === "ENOENT" ? null : er);
        else
          options.stat(p, (er3, stats) => {
            if (er3)
              cb(er3.code === "ENOENT" ? null : er);
            else if (stats.isDirectory())
              rmdir(p, options, er, cb);
            else
              options.unlink(p, cb);
          });
      });
    };
    var fixWinEPERMSync = (p, options, er) => {
      assert(p);
      assert(options);
      try {
        options.chmodSync(p, 438);
      } catch (er2) {
        if (er2.code === "ENOENT")
          return;
        else
          throw er;
      }
      let stats;
      try {
        stats = options.statSync(p);
      } catch (er3) {
        if (er3.code === "ENOENT")
          return;
        else
          throw er;
      }
      if (stats.isDirectory())
        rmdirSync(p, options, er);
      else
        options.unlinkSync(p);
    };
    var rmdir = (p, options, originalEr, cb) => {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.rmdir(p, (er) => {
        if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM"))
          rmkids(p, options, cb);
        else if (er && er.code === "ENOTDIR")
          cb(originalEr);
        else
          cb(er);
      });
    };
    var rmkids = (p, options, cb) => {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.readdir(p, (er, files) => {
        if (er)
          return cb(er);
        let n = files.length;
        if (n === 0)
          return options.rmdir(p, cb);
        let errState;
        files.forEach((f) => {
          rimraf(path.join(p, f), options, (er2) => {
            if (errState)
              return;
            if (er2)
              return cb(errState = er2);
            if (--n === 0)
              options.rmdir(p, cb);
          });
        });
      });
    };
    var rimrafSync = (p, options) => {
      options = options || {};
      defaults(options);
      assert(p, "rimraf: missing path");
      assert.equal(typeof p, "string", "rimraf: path should be a string");
      assert(options, "rimraf: missing options");
      assert.equal(typeof options, "object", "rimraf: options should be object");
      let results;
      if (options.disableGlob || !glob.hasMagic(p)) {
        results = [p];
      } else {
        try {
          options.lstatSync(p);
          results = [p];
        } catch (er) {
          results = glob.sync(p, options.glob);
        }
      }
      if (!results.length)
        return;
      for (let i = 0; i < results.length; i++) {
        const p2 = results[i];
        let st;
        try {
          st = options.lstatSync(p2);
        } catch (er) {
          if (er.code === "ENOENT")
            return;
          if (er.code === "EPERM" && isWindows)
            fixWinEPERMSync(p2, options, er);
        }
        try {
          if (st && st.isDirectory())
            rmdirSync(p2, options, null);
          else
            options.unlinkSync(p2);
        } catch (er) {
          if (er.code === "ENOENT")
            return;
          if (er.code === "EPERM")
            return isWindows ? fixWinEPERMSync(p2, options, er) : rmdirSync(p2, options, er);
          if (er.code !== "EISDIR")
            throw er;
          rmdirSync(p2, options, er);
        }
      }
    };
    var rmdirSync = (p, options, originalEr) => {
      assert(p);
      assert(options);
      try {
        options.rmdirSync(p);
      } catch (er) {
        if (er.code === "ENOENT")
          return;
        if (er.code === "ENOTDIR")
          throw originalEr;
        if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")
          rmkidsSync(p, options);
      }
    };
    var rmkidsSync = (p, options) => {
      assert(p);
      assert(options);
      options.readdirSync(p).forEach((f) => rimrafSync(path.join(p, f), options));
      const retries = isWindows ? 100 : 1;
      let i = 0;
      do {
        let threw = true;
        try {
          const ret = options.rmdirSync(p, options);
          threw = false;
          return ret;
        } finally {
          if (++i < retries && threw)
            continue;
        }
      } while (true);
    };
    module2.exports = rimraf;
    rimraf.sync = rimrafSync;
  }
});

// node_modules/@mapbox/node-pre-gyp/lib/util/napi.js
var require_napi = __commonJS({
  "node_modules/@mapbox/node-pre-gyp/lib/util/napi.js"(exports, module2) {
    "use strict";
    var fs = require("fs");
    module2.exports = exports;
    var versionArray = process.version.substr(1).replace(/-.*$/, "").split(".").map((item) => {
      return +item;
    });
    var napi_multiple_commands = [
      "build",
      "clean",
      "configure",
      "package",
      "publish",
      "reveal",
      "testbinary",
      "testpackage",
      "unpublish"
    ];
    var napi_build_version_tag = "napi_build_version=";
    module2.exports.get_napi_version = function() {
      let version = process.versions.napi;
      if (!version) {
        if (versionArray[0] === 9 && versionArray[1] >= 3)
          version = 2;
        else if (versionArray[0] === 8)
          version = 1;
      }
      return version;
    };
    module2.exports.get_napi_version_as_string = function(target) {
      const version = module2.exports.get_napi_version(target);
      return version ? "" + version : "";
    };
    module2.exports.validate_package_json = function(package_json, opts) {
      const binary = package_json.binary;
      const module_path_ok = pathOK(binary.module_path);
      const remote_path_ok = pathOK(binary.remote_path);
      const package_name_ok = pathOK(binary.package_name);
      const napi_build_versions = module2.exports.get_napi_build_versions(package_json, opts, true);
      const napi_build_versions_raw = module2.exports.get_napi_build_versions_raw(package_json);
      if (napi_build_versions) {
        napi_build_versions.forEach((napi_build_version) => {
          if (!(parseInt(napi_build_version, 10) === napi_build_version && napi_build_version > 0)) {
            throw new Error("All values specified in napi_versions must be positive integers.");
          }
        });
      }
      if (napi_build_versions && (!module_path_ok || !remote_path_ok && !package_name_ok)) {
        throw new Error("When napi_versions is specified; module_path and either remote_path or package_name must contain the substitution string '{napi_build_version}`.");
      }
      if ((module_path_ok || remote_path_ok || package_name_ok) && !napi_build_versions_raw) {
        throw new Error("When the substitution string '{napi_build_version}` is specified in module_path, remote_path, or package_name; napi_versions must also be specified.");
      }
      if (napi_build_versions && !module2.exports.get_best_napi_build_version(package_json, opts) && module2.exports.build_napi_only(package_json)) {
        throw new Error(
          "The Node-API version of this Node instance is " + module2.exports.get_napi_version(opts ? opts.target : void 0) + ". This module supports Node-API version(s) " + module2.exports.get_napi_build_versions_raw(package_json) + ". This Node instance cannot run this module."
        );
      }
      if (napi_build_versions_raw && !napi_build_versions && module2.exports.build_napi_only(package_json)) {
        throw new Error(
          "The Node-API version of this Node instance is " + module2.exports.get_napi_version(opts ? opts.target : void 0) + ". This module supports Node-API version(s) " + module2.exports.get_napi_build_versions_raw(package_json) + ". This Node instance cannot run this module."
        );
      }
    };
    function pathOK(path) {
      return path && (path.indexOf("{napi_build_version}") !== -1 || path.indexOf("{node_napi_label}") !== -1);
    }
    module2.exports.expand_commands = function(package_json, opts, commands) {
      const expanded_commands = [];
      const napi_build_versions = module2.exports.get_napi_build_versions(package_json, opts);
      commands.forEach((command) => {
        if (napi_build_versions && command.name === "install") {
          const napi_build_version = module2.exports.get_best_napi_build_version(package_json, opts);
          const args = napi_build_version ? [napi_build_version_tag + napi_build_version] : [];
          expanded_commands.push({ name: command.name, args });
        } else if (napi_build_versions && napi_multiple_commands.indexOf(command.name) !== -1) {
          napi_build_versions.forEach((napi_build_version) => {
            const args = command.args.slice();
            args.push(napi_build_version_tag + napi_build_version);
            expanded_commands.push({ name: command.name, args });
          });
        } else {
          expanded_commands.push(command);
        }
      });
      return expanded_commands;
    };
    module2.exports.get_napi_build_versions = function(package_json, opts, warnings) {
      const log = require_log();
      let napi_build_versions = [];
      const supported_napi_version = module2.exports.get_napi_version(opts ? opts.target : void 0);
      if (package_json.binary && package_json.binary.napi_versions) {
        package_json.binary.napi_versions.forEach((napi_version) => {
          const duplicated = napi_build_versions.indexOf(napi_version) !== -1;
          if (!duplicated && supported_napi_version && napi_version <= supported_napi_version) {
            napi_build_versions.push(napi_version);
          } else if (warnings && !duplicated && supported_napi_version) {
            log.info("This Node instance does not support builds for Node-API version", napi_version);
          }
        });
      }
      if (opts && opts["build-latest-napi-version-only"]) {
        let latest_version = 0;
        napi_build_versions.forEach((napi_version) => {
          if (napi_version > latest_version)
            latest_version = napi_version;
        });
        napi_build_versions = latest_version ? [latest_version] : [];
      }
      return napi_build_versions.length ? napi_build_versions : void 0;
    };
    module2.exports.get_napi_build_versions_raw = function(package_json) {
      const napi_build_versions = [];
      if (package_json.binary && package_json.binary.napi_versions) {
        package_json.binary.napi_versions.forEach((napi_version) => {
          if (napi_build_versions.indexOf(napi_version) === -1) {
            napi_build_versions.push(napi_version);
          }
        });
      }
      return napi_build_versions.length ? napi_build_versions : void 0;
    };
    module2.exports.get_command_arg = function(napi_build_version) {
      return napi_build_version_tag + napi_build_version;
    };
    module2.exports.get_napi_build_version_from_command_args = function(command_args) {
      for (let i = 0; i < command_args.length; i++) {
        const arg = command_args[i];
        if (arg.indexOf(napi_build_version_tag) === 0) {
          return parseInt(arg.substr(napi_build_version_tag.length), 10);
        }
      }
      return void 0;
    };
    module2.exports.swap_build_dir_out = function(napi_build_version) {
      if (napi_build_version) {
        const rm = require_rimraf();
        rm.sync(module2.exports.get_build_dir(napi_build_version));
        fs.renameSync("build", module2.exports.get_build_dir(napi_build_version));
      }
    };
    module2.exports.swap_build_dir_in = function(napi_build_version) {
      if (napi_build_version) {
        const rm = require_rimraf();
        rm.sync("build");
        fs.renameSync(module2.exports.get_build_dir(napi_build_version), "build");
      }
    };
    module2.exports.get_build_dir = function(napi_build_version) {
      return "build-tmp-napi-v" + napi_build_version;
    };
    module2.exports.get_best_napi_build_version = function(package_json, opts) {
      let best_napi_build_version = 0;
      const napi_build_versions = module2.exports.get_napi_build_versions(package_json, opts);
      if (napi_build_versions) {
        const our_napi_version = module2.exports.get_napi_version(opts ? opts.target : void 0);
        napi_build_versions.forEach((napi_build_version) => {
          if (napi_build_version > best_napi_build_version && napi_build_version <= our_napi_version) {
            best_napi_build_version = napi_build_version;
          }
        });
      }
      return best_napi_build_version === 0 ? void 0 : best_napi_build_version;
    };
    module2.exports.build_napi_only = function(package_json) {
      return package_json.binary && package_json.binary.package_name && package_json.binary.package_name.indexOf("{node_napi_label}") === -1;
    };
  }
});

// node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "node_modules/semver/internal/constants.js"(exports, module2) {
    "use strict";
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module2.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/semver/internal/debug.js"(exports, module2) {
    "use strict";
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module2.exports = debug;
  }
});

// node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/semver/internal/re.js"(exports, module2) {
    "use strict";
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports = module2.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/semver/internal/parse-options.js"(exports, module2) {
    "use strict";
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module2.exports = parseOptions;
  }
});

// node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/semver/internal/identifiers.js"(exports, module2) {
    "use strict";
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module2.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/semver/classes/semver.js"(exports, module2) {
    "use strict";
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof _SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (!identifier && identifierBase === false) {
              throw new Error("invalid increment argument: identifier is empty");
            }
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module2.exports = SemVer;
  }
});

// node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "node_modules/semver/functions/parse.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var parse = (version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module2.exports = parse;
  }
});

// node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "node_modules/semver/functions/valid.js"(exports, module2) {
    "use strict";
    var parse = require_parse();
    var valid = (version, options) => {
      const v = parse(version, options);
      return v ? v.version : null;
    };
    module2.exports = valid;
  }
});

// node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "node_modules/semver/functions/clean.js"(exports, module2) {
    "use strict";
    var parse = require_parse();
    var clean = (version, options) => {
      const s = parse(version.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    };
    module2.exports = clean;
  }
});

// node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "node_modules/semver/functions/inc.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var inc = (version, release, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version instanceof SemVer ? version.version : version,
          options
        ).inc(release, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    };
    module2.exports = inc;
  }
});

// node_modules/semver/functions/diff.js
var require_diff = __commonJS({
  "node_modules/semver/functions/diff.js"(exports, module2) {
    "use strict";
    var parse = require_parse();
    var diff = (version1, version2) => {
      const v1 = parse(version1, null, true);
      const v2 = parse(version2, null, true);
      const comparison = v1.compare(v2);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v2;
      const lowVersion = v1Higher ? v2 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        if (!lowVersion.patch && !lowVersion.minor) {
          return "major";
        }
        if (highVersion.patch) {
          return "patch";
        }
        if (highVersion.minor) {
          return "minor";
        }
        return "major";
      }
      const prefix = highHasPre ? "pre" : "";
      if (v1.major !== v2.major) {
        return prefix + "major";
      }
      if (v1.minor !== v2.minor) {
        return prefix + "minor";
      }
      if (v1.patch !== v2.patch) {
        return prefix + "patch";
      }
      return "prerelease";
    };
    module2.exports = diff;
  }
});

// node_modules/semver/functions/major.js
var require_major = __commonJS({
  "node_modules/semver/functions/major.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var major = (a, loose) => new SemVer(a, loose).major;
    module2.exports = major;
  }
});

// node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "node_modules/semver/functions/minor.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var minor = (a, loose) => new SemVer(a, loose).minor;
    module2.exports = minor;
  }
});

// node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "node_modules/semver/functions/patch.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var patch = (a, loose) => new SemVer(a, loose).patch;
    module2.exports = patch;
  }
});

// node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "node_modules/semver/functions/prerelease.js"(exports, module2) {
    "use strict";
    var parse = require_parse();
    var prerelease = (version, options) => {
      const parsed = parse(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module2.exports = prerelease;
  }
});

// node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/semver/functions/compare.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module2.exports = compare;
  }
});

// node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "node_modules/semver/functions/rcompare.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var rcompare = (a, b, loose) => compare(b, a, loose);
    module2.exports = rcompare;
  }
});

// node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "node_modules/semver/functions/compare-loose.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var compareLoose = (a, b) => compare(a, b, true);
    module2.exports = compareLoose;
  }
});

// node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "node_modules/semver/functions/compare-build.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var compareBuild = (a, b, loose) => {
      const versionA = new SemVer(a, loose);
      const versionB = new SemVer(b, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module2.exports = compareBuild;
  }
});

// node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "node_modules/semver/functions/sort.js"(exports, module2) {
    "use strict";
    var compareBuild = require_compare_build();
    var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
    module2.exports = sort;
  }
});

// node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "node_modules/semver/functions/rsort.js"(exports, module2) {
    "use strict";
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
    module2.exports = rsort;
  }
});

// node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/semver/functions/gt.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var gt = (a, b, loose) => compare(a, b, loose) > 0;
    module2.exports = gt;
  }
});

// node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/semver/functions/lt.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var lt = (a, b, loose) => compare(a, b, loose) < 0;
    module2.exports = lt;
  }
});

// node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/semver/functions/eq.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var eq = (a, b, loose) => compare(a, b, loose) === 0;
    module2.exports = eq;
  }
});

// node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/semver/functions/neq.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var neq = (a, b, loose) => compare(a, b, loose) !== 0;
    module2.exports = neq;
  }
});

// node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/semver/functions/gte.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var gte = (a, b, loose) => compare(a, b, loose) >= 0;
    module2.exports = gte;
  }
});

// node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/semver/functions/lte.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var lte = (a, b, loose) => compare(a, b, loose) <= 0;
    module2.exports = lte;
  }
});

// node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/semver/functions/cmp.js"(exports, module2) {
    "use strict";
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module2.exports = cmp;
  }
});

// node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/semver/functions/coerce.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var parse = require_parse();
    var { safeRe: re, t } = require_re();
    var coerce = (version, options) => {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === "number") {
        version = String(version);
      }
      if (typeof version !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version.match(re[t.COERCE]);
      } else {
        let next;
        while ((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
        }
        re[t.COERCERTL].lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      return parse(`${match[2]}.${match[3] || "0"}.${match[4] || "0"}`, options);
    };
    module2.exports = coerce;
  }
});

// node_modules/yallist/iterator.js
var require_iterator = __commonJS({
  "node_modules/yallist/iterator.js"(exports, module2) {
    "use strict";
    module2.exports = function(Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };
  }
});

// node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "node_modules/yallist/yallist.js"(exports, module2) {
    "use strict";
    module2.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self2 = this;
      if (!(self2 instanceof Yallist)) {
        self2 = new Yallist();
      }
      self2.tail = null;
      self2.head = null;
      self2.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self2.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          self2.push(arguments[i]);
        }
      }
      return self2;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
      return next;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        push(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        unshift(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n) {
      for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
        walker = walker.next;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n) {
      for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
        walker = walker.prev;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = 0; walker !== null; i++) {
        acc = fn(acc, walker.value, i);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = this.length - 1; walker !== null; i--) {
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.head; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.tail; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
        walker = walker.next;
      }
      for (; walker !== null && i < to; i++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
        walker = walker.prev;
      }
      for (; walker !== null && i > from; i--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }
      for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
        walker = walker.next;
      }
      var ret = [];
      for (var i = 0; walker && i < deleteCount; i++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }
      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }
      for (var i = 0; i < nodes.length; i++) {
        walker = insert(this, walker, nodes[i]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert(self2, node, value) {
      var inserted = node === self2.head ? new Node(value, null, node, self2) : new Node(value, node, node.next, self2);
      if (inserted.next === null) {
        self2.tail = inserted;
      }
      if (inserted.prev === null) {
        self2.head = inserted;
      }
      self2.length++;
      return inserted;
    }
    function push(self2, item) {
      self2.tail = new Node(item, self2.tail, null, self2);
      if (!self2.head) {
        self2.head = self2.tail;
      }
      self2.length++;
    }
    function unshift(self2, item) {
      self2.head = new Node(item, null, self2.head, self2);
      if (!self2.tail) {
        self2.tail = self2.head;
      }
      self2.length++;
    }
    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
    try {
      require_iterator()(Yallist);
    } catch (er) {
    }
  }
});

// node_modules/lru-cache/index.js
var require_lru_cache = __commonJS({
  "node_modules/lru-cache/index.js"(exports, module2) {
    "use strict";
    var Yallist = require_yallist();
    var MAX = Symbol("max");
    var LENGTH = Symbol("length");
    var LENGTH_CALCULATOR = Symbol("lengthCalculator");
    var ALLOW_STALE = Symbol("allowStale");
    var MAX_AGE = Symbol("maxAge");
    var DISPOSE = Symbol("dispose");
    var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
    var LRU_LIST = Symbol("lruList");
    var CACHE = Symbol("cache");
    var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
    var naiveLength = () => 1;
    var LRUCache = class {
      constructor(options) {
        if (typeof options === "number")
          options = { max: options };
        if (!options)
          options = {};
        if (options.max && (typeof options.max !== "number" || options.max < 0))
          throw new TypeError("max must be a non-negative number");
        const max = this[MAX] = options.max || Infinity;
        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
      }
      // resize the cache when the max changes.
      set max(mL) {
        if (typeof mL !== "number" || mL < 0)
          throw new TypeError("max must be a non-negative number");
        this[MAX] = mL || Infinity;
        trim(this);
      }
      get max() {
        return this[MAX];
      }
      set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
      }
      get allowStale() {
        return this[ALLOW_STALE];
      }
      set maxAge(mA) {
        if (typeof mA !== "number")
          throw new TypeError("maxAge must be a non-negative number");
        this[MAX_AGE] = mA;
        trim(this);
      }
      get maxAge() {
        return this[MAX_AGE];
      }
      // resize the cache when the lengthCalculator changes.
      set lengthCalculator(lC) {
        if (typeof lC !== "function")
          lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
          this[LENGTH_CALCULATOR] = lC;
          this[LENGTH] = 0;
          this[LRU_LIST].forEach((hit) => {
            hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
            this[LENGTH] += hit.length;
          });
        }
        trim(this);
      }
      get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
      }
      get length() {
        return this[LENGTH];
      }
      get itemCount() {
        return this[LRU_LIST].length;
      }
      rforEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].tail; walker !== null; ) {
          const prev = walker.prev;
          forEachStep(this, fn, walker, thisp);
          walker = prev;
        }
      }
      forEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].head; walker !== null; ) {
          const next = walker.next;
          forEachStep(this, fn, walker, thisp);
          walker = next;
        }
      }
      keys() {
        return this[LRU_LIST].toArray().map((k) => k.key);
      }
      values() {
        return this[LRU_LIST].toArray().map((k) => k.value);
      }
      reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
          this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
        }
        this[CACHE] = /* @__PURE__ */ new Map();
        this[LRU_LIST] = new Yallist();
        this[LENGTH] = 0;
      }
      dump() {
        return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
          k: hit.key,
          v: hit.value,
          e: hit.now + (hit.maxAge || 0)
        }).toArray().filter((h) => h);
      }
      dumpLru() {
        return this[LRU_LIST];
      }
      set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);
        if (this[CACHE].has(key)) {
          if (len > this[MAX]) {
            del(this, this[CACHE].get(key));
            return false;
          }
          const node = this[CACHE].get(key);
          const item = node.value;
          if (this[DISPOSE]) {
            if (!this[NO_DISPOSE_ON_SET])
              this[DISPOSE](key, item.value);
          }
          item.now = now;
          item.maxAge = maxAge;
          item.value = value;
          this[LENGTH] += len - item.length;
          item.length = len;
          this.get(key);
          trim(this);
          return true;
        }
        const hit = new Entry(key, value, len, now, maxAge);
        if (hit.length > this[MAX]) {
          if (this[DISPOSE])
            this[DISPOSE](key, value);
          return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true;
      }
      has(key) {
        if (!this[CACHE].has(key))
          return false;
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit);
      }
      get(key) {
        return get(this, key, true);
      }
      peek(key) {
        return get(this, key, false);
      }
      pop() {
        const node = this[LRU_LIST].tail;
        if (!node)
          return null;
        del(this, node);
        return node.value;
      }
      del(key) {
        del(this, this[CACHE].get(key));
      }
      load(arr) {
        this.reset();
        const now = Date.now();
        for (let l = arr.length - 1; l >= 0; l--) {
          const hit = arr[l];
          const expiresAt = hit.e || 0;
          if (expiresAt === 0)
            this.set(hit.k, hit.v);
          else {
            const maxAge = expiresAt - now;
            if (maxAge > 0) {
              this.set(hit.k, hit.v, maxAge);
            }
          }
        }
      }
      prune() {
        this[CACHE].forEach((value, key) => get(this, key, false));
      }
    };
    var get = (self2, key, doUse) => {
      const node = self2[CACHE].get(key);
      if (node) {
        const hit = node.value;
        if (isStale(self2, hit)) {
          del(self2, node);
          if (!self2[ALLOW_STALE])
            return void 0;
        } else {
          if (doUse) {
            if (self2[UPDATE_AGE_ON_GET])
              node.value.now = Date.now();
            self2[LRU_LIST].unshiftNode(node);
          }
        }
        return hit.value;
      }
    };
    var isStale = (self2, hit) => {
      if (!hit || !hit.maxAge && !self2[MAX_AGE])
        return false;
      const diff = Date.now() - hit.now;
      return hit.maxAge ? diff > hit.maxAge : self2[MAX_AGE] && diff > self2[MAX_AGE];
    };
    var trim = (self2) => {
      if (self2[LENGTH] > self2[MAX]) {
        for (let walker = self2[LRU_LIST].tail; self2[LENGTH] > self2[MAX] && walker !== null; ) {
          const prev = walker.prev;
          del(self2, walker);
          walker = prev;
        }
      }
    };
    var del = (self2, node) => {
      if (node) {
        const hit = node.value;
        if (self2[DISPOSE])
          self2[DISPOSE](hit.key, hit.value);
        self2[LENGTH] -= hit.length;
        self2[CACHE].delete(hit.key);
        self2[LRU_LIST].removeNode(node);
      }
    };
    var Entry = class {
      constructor(key, value, length, now, maxAge) {
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
      }
    };
    var forEachStep = (self2, fn, node, thisp) => {
      let hit = node.value;
      if (isStale(self2, hit)) {
        del(self2, node);
        if (!self2[ALLOW_STALE])
          hit = void 0;
      }
      if (hit)
        fn.call(thisp, hit.value, hit.key, self2);
    };
    module2.exports = LRUCache;
  }
});

// node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/semver/classes/range.js"(exports, module2) {
    "use strict";
    var Range = class _Range {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.format();
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().split(/\s+/).join(" ");
        this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.format();
      }
      format() {
        this.range = this.set.map((comps) => comps.join(" ").trim()).join("||").trim();
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module2.exports = Range;
    var LRU = require_lru_cache();
    var cache = new LRU({ max: 1e3 });
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var isNullSet = (c) => c.value === "<0.0.0-0";
    var isAny = (c) => c.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set, version, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug(set[i].semver);
          if (set[i].semver === Comparator.ANY) {
            continue;
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/semver/classes/comparator.js"(exports, module2) {
    "use strict";
    var ANY = Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module2.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/semver/functions/satisfies.js"(exports, module2) {
    "use strict";
    var Range = require_range();
    var satisfies = (version, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module2.exports = satisfies;
  }
});

// node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "node_modules/semver/ranges/to-comparators.js"(exports, module2) {
    "use strict";
    var Range = require_range();
    var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
    module2.exports = toComparators;
  }
});

// node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "node_modules/semver/ranges/max-satisfying.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var maxSatisfying = (versions, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!max || maxSV.compare(v) === -1) {
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    };
    module2.exports = maxSatisfying;
  }
});

// node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "node_modules/semver/ranges/min-satisfying.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var minSatisfying = (versions, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!min || minSV.compare(v) === 1) {
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    };
    module2.exports = minSatisfying;
  }
});

// node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "node_modules/semver/ranges/min-version.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var gt = require_gt();
    var minVersion = (range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module2.exports = minVersion;
  }
});

// node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "node_modules/semver/ranges/valid.js"(exports, module2) {
    "use strict";
    var Range = require_range();
    var validRange = (range, options) => {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    };
    module2.exports = validRange;
  }
});

// node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "node_modules/semver/ranges/outside.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range();
    var satisfies = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = (version, range, hilo, options) => {
      version = new SemVer(version, options);
      range = new Range(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version, range, options)) {
        return false;
      }
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    };
    module2.exports = outside;
  }
});

// node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "node_modules/semver/ranges/gtr.js"(exports, module2) {
    "use strict";
    var outside = require_outside();
    var gtr = (version, range, options) => outside(version, range, ">", options);
    module2.exports = gtr;
  }
});

// node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "node_modules/semver/ranges/ltr.js"(exports, module2) {
    "use strict";
    var outside = require_outside();
    var ltr = (version, range, options) => outside(version, range, "<", options);
    module2.exports = ltr;
  }
});

// node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "node_modules/semver/ranges/intersects.js"(exports, module2) {
    "use strict";
    var Range = require_range();
    var intersects = (r1, r2, options) => {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2, options);
    };
    module2.exports = intersects;
  }
});

// node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "node_modules/semver/ranges/simplify.js"(exports, module2) {
    "use strict";
    var satisfies = require_satisfies();
    var compare = require_compare();
    module2.exports = (versions, range, options) => {
      const set = [];
      let first = null;
      let prev = null;
      const v = versions.sort((a, b) => compare(a, b, options));
      for (const version of v) {
        const included = satisfies(version, range, options);
        if (included) {
          prev = version;
          if (!first) {
            first = version;
          }
        } else {
          if (prev) {
            set.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "node_modules/semver/ranges/subset.js"(exports, module2) {
    "use strict";
    var Range = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies = require_satisfies();
    var compare = require_compare();
    var subset = (sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;
      OUTER:
        for (const simpleSub of sub.set) {
          for (const simpleDom of dom.set) {
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
              continue OUTER;
            }
          }
          if (sawNonNull) {
            return false;
          }
        }
      return true;
    };
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = (sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c of sub) {
        if (c.operator === ">" || c.operator === ">=") {
          gt = higherGT(gt, c, options);
        } else if (c.operator === "<" || c.operator === "<=") {
          lt = lowerLT(lt, c, options);
        } else {
          eqSet.add(c.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq of eqSet) {
        if (gt && !satisfies(eq, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
          return null;
        }
        for (const c of dom) {
          if (!satisfies(eq, String(c), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c of dom) {
        hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
        hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c.operator === ">" || c.operator === ">=") {
            higher = higherGT(gt, c, options);
            if (higher === c && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c.operator === "<" || c.operator === "<=") {
            lower = lowerLT(lt, c, options);
            if (lower === c && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
            return false;
          }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };
    var higherGT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
    };
    var lowerLT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
    };
    module2.exports = subset;
  }
});

// node_modules/semver/index.js
var require_semver2 = __commonJS({
  "node_modules/semver/index.js"(exports, module2) {
    "use strict";
    var internalRe = require_re();
    var constants = require_constants();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse = require_parse();
    var valid = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq = require_eq();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce = require_coerce();
    var Comparator = require_comparator();
    var Range = require_range();
    var satisfies = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module2.exports = {
      parse,
      valid,
      clean,
      inc,
      diff,
      major,
      minor,
      patch,
      prerelease,
      compare,
      rcompare,
      compareLoose,
      compareBuild,
      sort,
      rsort,
      gt,
      lt,
      eq,
      neq,
      gte,
      lte,
      cmp,
      coerce,
      Comparator,
      Range,
      satisfies,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});

// node_modules/detect-libc/lib/process.js
var require_process2 = __commonJS({
  "node_modules/detect-libc/lib/process.js"(exports, module2) {
    "use strict";
    var isLinux = () => process.platform === "linux";
    var report = null;
    var getReport = () => {
      if (!report) {
        report = isLinux() && process.report ? process.report.getReport() : {};
      }
      return report;
    };
    module2.exports = { isLinux, getReport };
  }
});

// node_modules/detect-libc/lib/filesystem.js
var require_filesystem = __commonJS({
  "node_modules/detect-libc/lib/filesystem.js"(exports, module2) {
    "use strict";
    var fs = require("fs");
    var LDD_PATH = "/usr/bin/ldd";
    var readFileSync = (path) => fs.readFileSync(path, "utf-8");
    var readFile = (path) => new Promise((resolve, reject) => {
      fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    module2.exports = {
      LDD_PATH,
      readFileSync,
      readFile
    };
  }
});

// node_modules/detect-libc/lib/detect-libc.js
var require_detect_libc = __commonJS({
  "node_modules/detect-libc/lib/detect-libc.js"(exports, module2) {
    "use strict";
    var childProcess = require("child_process");
    var { isLinux, getReport } = require_process2();
    var { LDD_PATH, readFile, readFileSync } = require_filesystem();
    var cachedFamilyFilesystem;
    var cachedVersionFilesystem;
    var command = "getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true";
    var commandOut = "";
    var safeCommand = () => {
      if (!commandOut) {
        return new Promise((resolve) => {
          childProcess.exec(command, (err, out) => {
            commandOut = err ? " " : out;
            resolve(commandOut);
          });
        });
      }
      return commandOut;
    };
    var safeCommandSync = () => {
      if (!commandOut) {
        try {
          commandOut = childProcess.execSync(command, { encoding: "utf8" });
        } catch (_err) {
          commandOut = " ";
        }
      }
      return commandOut;
    };
    var GLIBC = "glibc";
    var RE_GLIBC_VERSION = /GLIBC\s(\d+\.\d+)/;
    var MUSL = "musl";
    var GLIBC_ON_LDD = GLIBC.toUpperCase();
    var MUSL_ON_LDD = MUSL.toLowerCase();
    var isFileMusl = (f) => f.includes("libc.musl-") || f.includes("ld-musl-");
    var familyFromReport = () => {
      const report = getReport();
      if (report.header && report.header.glibcVersionRuntime) {
        return GLIBC;
      }
      if (Array.isArray(report.sharedObjects)) {
        if (report.sharedObjects.some(isFileMusl)) {
          return MUSL;
        }
      }
      return null;
    };
    var familyFromCommand = (out) => {
      const [getconf, ldd1] = out.split(/[\r\n]+/);
      if (getconf && getconf.includes(GLIBC)) {
        return GLIBC;
      }
      if (ldd1 && ldd1.includes(MUSL)) {
        return MUSL;
      }
      return null;
    };
    var getFamilyFromLddContent = (content) => {
      if (content.includes(MUSL_ON_LDD)) {
        return MUSL;
      }
      if (content.includes(GLIBC_ON_LDD)) {
        return GLIBC;
      }
      return null;
    };
    var familyFromFilesystem = () => __async(exports, null, function* () {
      if (cachedFamilyFilesystem !== void 0) {
        return cachedFamilyFilesystem;
      }
      cachedFamilyFilesystem = null;
      try {
        const lddContent = yield readFile(LDD_PATH);
        cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
      } catch (e) {
      }
      return cachedFamilyFilesystem;
    });
    var familyFromFilesystemSync = () => {
      if (cachedFamilyFilesystem !== void 0) {
        return cachedFamilyFilesystem;
      }
      cachedFamilyFilesystem = null;
      try {
        const lddContent = readFileSync(LDD_PATH);
        cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
      } catch (e) {
      }
      return cachedFamilyFilesystem;
    };
    var family = () => __async(exports, null, function* () {
      let family2 = null;
      if (isLinux()) {
        family2 = yield familyFromFilesystem();
        if (!family2) {
          family2 = familyFromReport();
        }
        if (!family2) {
          const out = yield safeCommand();
          family2 = familyFromCommand(out);
        }
      }
      return family2;
    });
    var familySync = () => {
      let family2 = null;
      if (isLinux()) {
        family2 = familyFromFilesystemSync();
        if (!family2) {
          family2 = familyFromReport();
        }
        if (!family2) {
          const out = safeCommandSync();
          family2 = familyFromCommand(out);
        }
      }
      return family2;
    };
    var isNonGlibcLinux = () => __async(exports, null, function* () {
      return isLinux() && (yield family()) !== GLIBC;
    });
    var isNonGlibcLinuxSync = () => isLinux() && familySync() !== GLIBC;
    var versionFromFilesystem = () => __async(exports, null, function* () {
      if (cachedVersionFilesystem !== void 0) {
        return cachedVersionFilesystem;
      }
      cachedVersionFilesystem = null;
      try {
        const lddContent = yield readFile(LDD_PATH);
        const versionMatch = lddContent.match(RE_GLIBC_VERSION);
        if (versionMatch) {
          cachedVersionFilesystem = versionMatch[1];
        }
      } catch (e) {
      }
      return cachedVersionFilesystem;
    });
    var versionFromFilesystemSync = () => {
      if (cachedVersionFilesystem !== void 0) {
        return cachedVersionFilesystem;
      }
      cachedVersionFilesystem = null;
      try {
        const lddContent = readFileSync(LDD_PATH);
        const versionMatch = lddContent.match(RE_GLIBC_VERSION);
        if (versionMatch) {
          cachedVersionFilesystem = versionMatch[1];
        }
      } catch (e) {
      }
      return cachedVersionFilesystem;
    };
    var versionFromReport = () => {
      const report = getReport();
      if (report.header && report.header.glibcVersionRuntime) {
        return report.header.glibcVersionRuntime;
      }
      return null;
    };
    var versionSuffix = (s) => s.trim().split(/\s+/)[1];
    var versionFromCommand = (out) => {
      const [getconf, ldd1, ldd2] = out.split(/[\r\n]+/);
      if (getconf && getconf.includes(GLIBC)) {
        return versionSuffix(getconf);
      }
      if (ldd1 && ldd2 && ldd1.includes(MUSL)) {
        return versionSuffix(ldd2);
      }
      return null;
    };
    var version = () => __async(exports, null, function* () {
      let version2 = null;
      if (isLinux()) {
        version2 = yield versionFromFilesystem();
        if (!version2) {
          version2 = versionFromReport();
        }
        if (!version2) {
          const out = yield safeCommand();
          version2 = versionFromCommand(out);
        }
      }
      return version2;
    });
    var versionSync = () => {
      let version2 = null;
      if (isLinux()) {
        version2 = versionFromFilesystemSync();
        if (!version2) {
          version2 = versionFromReport();
        }
        if (!version2) {
          const out = safeCommandSync();
          version2 = versionFromCommand(out);
        }
      }
      return version2;
    };
    module2.exports = {
      GLIBC,
      MUSL,
      family,
      familySync,
      isNonGlibcLinux,
      isNonGlibcLinuxSync,
      version,
      versionSync
    };
  }
});

// node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json
var require_abi_crosswalk = __commonJS({
  "node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json"(exports, module2) {
    module2.exports = {
      "0.1.14": {
        node_abi: null,
        v8: "1.3"
      },
      "0.1.15": {
        node_abi: null,
        v8: "1.3"
      },
      "0.1.16": {
        node_abi: null,
        v8: "1.3"
      },
      "0.1.17": {
        node_abi: null,
        v8: "1.3"
      },
      "0.1.18": {
        node_abi: null,
        v8: "1.3"
      },
      "0.1.19": {
        node_abi: null,
        v8: "2.0"
      },
      "0.1.20": {
        node_abi: null,
        v8: "2.0"
      },
      "0.1.21": {
        node_abi: null,
        v8: "2.0"
      },
      "0.1.22": {
        node_abi: null,
        v8: "2.0"
      },
      "0.1.23": {
        node_abi: null,
        v8: "2.0"
      },
      "0.1.24": {
        node_abi: null,
        v8: "2.0"
      },
      "0.1.25": {
        node_abi: null,
        v8: "2.0"
      },
      "0.1.26": {
        node_abi: null,
        v8: "2.0"
      },
      "0.1.27": {
        node_abi: null,
        v8: "2.1"
      },
      "0.1.28": {
        node_abi: null,
        v8: "2.1"
      },
      "0.1.29": {
        node_abi: null,
        v8: "2.1"
      },
      "0.1.30": {
        node_abi: null,
        v8: "2.1"
      },
      "0.1.31": {
        node_abi: null,
        v8: "2.1"
      },
      "0.1.32": {
        node_abi: null,
        v8: "2.1"
      },
      "0.1.33": {
        node_abi: null,
        v8: "2.1"
      },
      "0.1.90": {
        node_abi: null,
        v8: "2.2"
      },
      "0.1.91": {
        node_abi: null,
        v8: "2.2"
      },
      "0.1.92": {
        node_abi: null,
        v8: "2.2"
      },
      "0.1.93": {
        node_abi: null,
        v8: "2.2"
      },
      "0.1.94": {
        node_abi: null,
        v8: "2.2"
      },
      "0.1.95": {
        node_abi: null,
        v8: "2.2"
      },
      "0.1.96": {
        node_abi: null,
        v8: "2.2"
      },
      "0.1.97": {
        node_abi: null,
        v8: "2.2"
      },
      "0.1.98": {
        node_abi: null,
        v8: "2.2"
      },
      "0.1.99": {
        node_abi: null,
        v8: "2.2"
      },
      "0.1.100": {
        node_abi: null,
        v8: "2.2"
      },
      "0.1.101": {
        node_abi: null,
        v8: "2.3"
      },
      "0.1.102": {
        node_abi: null,
        v8: "2.3"
      },
      "0.1.103": {
        node_abi: null,
        v8: "2.3"
      },
      "0.1.104": {
        node_abi: null,
        v8: "2.3"
      },
      "0.2.0": {
        node_abi: 1,
        v8: "2.3"
      },
      "0.2.1": {
        node_abi: 1,
        v8: "2.3"
      },
      "0.2.2": {
        node_abi: 1,
        v8: "2.3"
      },
      "0.2.3": {
        node_abi: 1,
        v8: "2.3"
      },
      "0.2.4": {
        node_abi: 1,
        v8: "2.3"
      },
      "0.2.5": {
        node_abi: 1,
        v8: "2.3"
      },
      "0.2.6": {
        node_abi: 1,
        v8: "2.3"
      },
      "0.3.0": {
        node_abi: 1,
        v8: "2.5"
      },
      "0.3.1": {
        node_abi: 1,
        v8: "2.5"
      },
      "0.3.2": {
        node_abi: 1,
        v8: "3.0"
      },
      "0.3.3": {
        node_abi: 1,
        v8: "3.0"
      },
      "0.3.4": {
        node_abi: 1,
        v8: "3.0"
      },
      "0.3.5": {
        node_abi: 1,
        v8: "3.0"
      },
      "0.3.6": {
        node_abi: 1,
        v8: "3.0"
      },
      "0.3.7": {
        node_abi: 1,
        v8: "3.0"
      },
      "0.3.8": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.4.0": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.4.1": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.4.2": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.4.3": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.4.4": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.4.5": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.4.6": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.4.7": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.4.8": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.4.9": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.4.10": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.4.11": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.4.12": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.5.0": {
        node_abi: 1,
        v8: "3.1"
      },
      "0.5.1": {
        node_abi: 1,
        v8: "3.4"
      },
      "0.5.2": {
        node_abi: 1,
        v8: "3.4"
      },
      "0.5.3": {
        node_abi: 1,
        v8: "3.4"
      },
      "0.5.4": {
        node_abi: 1,
        v8: "3.5"
      },
      "0.5.5": {
        node_abi: 1,
        v8: "3.5"
      },
      "0.5.6": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.5.7": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.5.8": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.5.9": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.5.10": {
        node_abi: 1,
        v8: "3.7"
      },
      "0.6.0": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.1": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.2": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.3": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.4": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.5": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.6": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.7": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.8": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.9": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.10": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.11": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.12": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.13": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.14": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.15": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.16": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.17": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.18": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.19": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.20": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.6.21": {
        node_abi: 1,
        v8: "3.6"
      },
      "0.7.0": {
        node_abi: 1,
        v8: "3.8"
      },
      "0.7.1": {
        node_abi: 1,
        v8: "3.8"
      },
      "0.7.2": {
        node_abi: 1,
        v8: "3.8"
      },
      "0.7.3": {
        node_abi: 1,
        v8: "3.9"
      },
      "0.7.4": {
        node_abi: 1,
        v8: "3.9"
      },
      "0.7.5": {
        node_abi: 1,
        v8: "3.9"
      },
      "0.7.6": {
        node_abi: 1,
        v8: "3.9"
      },
      "0.7.7": {
        node_abi: 1,
        v8: "3.9"
      },
      "0.7.8": {
        node_abi: 1,
        v8: "3.9"
      },
      "0.7.9": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.7.10": {
        node_abi: 1,
        v8: "3.9"
      },
      "0.7.11": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.7.12": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.0": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.1": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.2": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.3": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.4": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.5": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.6": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.7": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.8": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.9": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.10": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.11": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.12": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.13": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.14": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.15": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.16": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.17": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.18": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.19": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.20": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.21": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.22": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.23": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.24": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.25": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.26": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.27": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.8.28": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.9.0": {
        node_abi: 1,
        v8: "3.11"
      },
      "0.9.1": {
        node_abi: 10,
        v8: "3.11"
      },
      "0.9.2": {
        node_abi: 10,
        v8: "3.11"
      },
      "0.9.3": {
        node_abi: 10,
        v8: "3.13"
      },
      "0.9.4": {
        node_abi: 10,
        v8: "3.13"
      },
      "0.9.5": {
        node_abi: 10,
        v8: "3.13"
      },
      "0.9.6": {
        node_abi: 10,
        v8: "3.15"
      },
      "0.9.7": {
        node_abi: 10,
        v8: "3.15"
      },
      "0.9.8": {
        node_abi: 10,
        v8: "3.15"
      },
      "0.9.9": {
        node_abi: 11,
        v8: "3.15"
      },
      "0.9.10": {
        node_abi: 11,
        v8: "3.15"
      },
      "0.9.11": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.9.12": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.0": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.1": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.2": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.3": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.4": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.5": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.6": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.7": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.8": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.9": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.10": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.11": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.12": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.13": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.14": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.15": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.16": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.17": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.18": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.19": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.20": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.21": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.22": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.23": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.24": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.25": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.26": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.27": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.28": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.29": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.30": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.31": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.32": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.33": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.34": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.35": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.36": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.37": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.38": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.39": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.40": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.41": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.42": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.43": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.44": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.45": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.46": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.47": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.10.48": {
        node_abi: 11,
        v8: "3.14"
      },
      "0.11.0": {
        node_abi: 12,
        v8: "3.17"
      },
      "0.11.1": {
        node_abi: 12,
        v8: "3.18"
      },
      "0.11.2": {
        node_abi: 12,
        v8: "3.19"
      },
      "0.11.3": {
        node_abi: 12,
        v8: "3.19"
      },
      "0.11.4": {
        node_abi: 12,
        v8: "3.20"
      },
      "0.11.5": {
        node_abi: 12,
        v8: "3.20"
      },
      "0.11.6": {
        node_abi: 12,
        v8: "3.20"
      },
      "0.11.7": {
        node_abi: 12,
        v8: "3.20"
      },
      "0.11.8": {
        node_abi: 13,
        v8: "3.21"
      },
      "0.11.9": {
        node_abi: 13,
        v8: "3.22"
      },
      "0.11.10": {
        node_abi: 13,
        v8: "3.22"
      },
      "0.11.11": {
        node_abi: 14,
        v8: "3.22"
      },
      "0.11.12": {
        node_abi: 14,
        v8: "3.22"
      },
      "0.11.13": {
        node_abi: 14,
        v8: "3.25"
      },
      "0.11.14": {
        node_abi: 14,
        v8: "3.26"
      },
      "0.11.15": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.11.16": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.0": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.1": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.2": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.3": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.4": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.5": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.6": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.7": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.8": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.9": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.10": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.11": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.12": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.13": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.14": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.15": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.16": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.17": {
        node_abi: 14,
        v8: "3.28"
      },
      "0.12.18": {
        node_abi: 14,
        v8: "3.28"
      },
      "1.0.0": {
        node_abi: 42,
        v8: "3.31"
      },
      "1.0.1": {
        node_abi: 42,
        v8: "3.31"
      },
      "1.0.2": {
        node_abi: 42,
        v8: "3.31"
      },
      "1.0.3": {
        node_abi: 42,
        v8: "4.1"
      },
      "1.0.4": {
        node_abi: 42,
        v8: "4.1"
      },
      "1.1.0": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.2.0": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.3.0": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.4.1": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.4.2": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.4.3": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.5.0": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.5.1": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.6.0": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.6.1": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.6.2": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.6.3": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.6.4": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.7.1": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.8.1": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.8.2": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.8.3": {
        node_abi: 43,
        v8: "4.1"
      },
      "1.8.4": {
        node_abi: 43,
        v8: "4.1"
      },
      "2.0.0": {
        node_abi: 44,
        v8: "4.2"
      },
      "2.0.1": {
        node_abi: 44,
        v8: "4.2"
      },
      "2.0.2": {
        node_abi: 44,
        v8: "4.2"
      },
      "2.1.0": {
        node_abi: 44,
        v8: "4.2"
      },
      "2.2.0": {
        node_abi: 44,
        v8: "4.2"
      },
      "2.2.1": {
        node_abi: 44,
        v8: "4.2"
      },
      "2.3.0": {
        node_abi: 44,
        v8: "4.2"
      },
      "2.3.1": {
        node_abi: 44,
        v8: "4.2"
      },
      "2.3.2": {
        node_abi: 44,
        v8: "4.2"
      },
      "2.3.3": {
        node_abi: 44,
        v8: "4.2"
      },
      "2.3.4": {
        node_abi: 44,
        v8: "4.2"
      },
      "2.4.0": {
        node_abi: 44,
        v8: "4.2"
      },
      "2.5.0": {
        node_abi: 44,
        v8: "4.2"
      },
      "3.0.0": {
        node_abi: 45,
        v8: "4.4"
      },
      "3.1.0": {
        node_abi: 45,
        v8: "4.4"
      },
      "3.2.0": {
        node_abi: 45,
        v8: "4.4"
      },
      "3.3.0": {
        node_abi: 45,
        v8: "4.4"
      },
      "3.3.1": {
        node_abi: 45,
        v8: "4.4"
      },
      "4.0.0": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.1.0": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.1.1": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.1.2": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.2.0": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.2.1": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.2.2": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.2.3": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.2.4": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.2.5": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.2.6": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.3.0": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.3.1": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.3.2": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.4.0": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.4.1": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.4.2": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.4.3": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.4.4": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.4.5": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.4.6": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.4.7": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.5.0": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.6.0": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.6.1": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.6.2": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.7.0": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.7.1": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.7.2": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.7.3": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.8.0": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.8.1": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.8.2": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.8.3": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.8.4": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.8.5": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.8.6": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.8.7": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.9.0": {
        node_abi: 46,
        v8: "4.5"
      },
      "4.9.1": {
        node_abi: 46,
        v8: "4.5"
      },
      "5.0.0": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.1.0": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.1.1": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.2.0": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.3.0": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.4.0": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.4.1": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.5.0": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.6.0": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.7.0": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.7.1": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.8.0": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.9.0": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.9.1": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.10.0": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.10.1": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.11.0": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.11.1": {
        node_abi: 47,
        v8: "4.6"
      },
      "5.12.0": {
        node_abi: 47,
        v8: "4.6"
      },
      "6.0.0": {
        node_abi: 48,
        v8: "5.0"
      },
      "6.1.0": {
        node_abi: 48,
        v8: "5.0"
      },
      "6.2.0": {
        node_abi: 48,
        v8: "5.0"
      },
      "6.2.1": {
        node_abi: 48,
        v8: "5.0"
      },
      "6.2.2": {
        node_abi: 48,
        v8: "5.0"
      },
      "6.3.0": {
        node_abi: 48,
        v8: "5.0"
      },
      "6.3.1": {
        node_abi: 48,
        v8: "5.0"
      },
      "6.4.0": {
        node_abi: 48,
        v8: "5.0"
      },
      "6.5.0": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.6.0": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.7.0": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.8.0": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.8.1": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.9.0": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.9.1": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.9.2": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.9.3": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.9.4": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.9.5": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.10.0": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.10.1": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.10.2": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.10.3": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.11.0": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.11.1": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.11.2": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.11.3": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.11.4": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.11.5": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.12.0": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.12.1": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.12.2": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.12.3": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.13.0": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.13.1": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.14.0": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.14.1": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.14.2": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.14.3": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.14.4": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.15.0": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.15.1": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.16.0": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.17.0": {
        node_abi: 48,
        v8: "5.1"
      },
      "6.17.1": {
        node_abi: 48,
        v8: "5.1"
      },
      "7.0.0": {
        node_abi: 51,
        v8: "5.4"
      },
      "7.1.0": {
        node_abi: 51,
        v8: "5.4"
      },
      "7.2.0": {
        node_abi: 51,
        v8: "5.4"
      },
      "7.2.1": {
        node_abi: 51,
        v8: "5.4"
      },
      "7.3.0": {
        node_abi: 51,
        v8: "5.4"
      },
      "7.4.0": {
        node_abi: 51,
        v8: "5.4"
      },
      "7.5.0": {
        node_abi: 51,
        v8: "5.4"
      },
      "7.6.0": {
        node_abi: 51,
        v8: "5.5"
      },
      "7.7.0": {
        node_abi: 51,
        v8: "5.5"
      },
      "7.7.1": {
        node_abi: 51,
        v8: "5.5"
      },
      "7.7.2": {
        node_abi: 51,
        v8: "5.5"
      },
      "7.7.3": {
        node_abi: 51,
        v8: "5.5"
      },
      "7.7.4": {
        node_abi: 51,
        v8: "5.5"
      },
      "7.8.0": {
        node_abi: 51,
        v8: "5.5"
      },
      "7.9.0": {
        node_abi: 51,
        v8: "5.5"
      },
      "7.10.0": {
        node_abi: 51,
        v8: "5.5"
      },
      "7.10.1": {
        node_abi: 51,
        v8: "5.5"
      },
      "8.0.0": {
        node_abi: 57,
        v8: "5.8"
      },
      "8.1.0": {
        node_abi: 57,
        v8: "5.8"
      },
      "8.1.1": {
        node_abi: 57,
        v8: "5.8"
      },
      "8.1.2": {
        node_abi: 57,
        v8: "5.8"
      },
      "8.1.3": {
        node_abi: 57,
        v8: "5.8"
      },
      "8.1.4": {
        node_abi: 57,
        v8: "5.8"
      },
      "8.2.0": {
        node_abi: 57,
        v8: "5.8"
      },
      "8.2.1": {
        node_abi: 57,
        v8: "5.8"
      },
      "8.3.0": {
        node_abi: 57,
        v8: "6.0"
      },
      "8.4.0": {
        node_abi: 57,
        v8: "6.0"
      },
      "8.5.0": {
        node_abi: 57,
        v8: "6.0"
      },
      "8.6.0": {
        node_abi: 57,
        v8: "6.0"
      },
      "8.7.0": {
        node_abi: 57,
        v8: "6.1"
      },
      "8.8.0": {
        node_abi: 57,
        v8: "6.1"
      },
      "8.8.1": {
        node_abi: 57,
        v8: "6.1"
      },
      "8.9.0": {
        node_abi: 57,
        v8: "6.1"
      },
      "8.9.1": {
        node_abi: 57,
        v8: "6.1"
      },
      "8.9.2": {
        node_abi: 57,
        v8: "6.1"
      },
      "8.9.3": {
        node_abi: 57,
        v8: "6.1"
      },
      "8.9.4": {
        node_abi: 57,
        v8: "6.1"
      },
      "8.10.0": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.11.0": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.11.1": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.11.2": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.11.3": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.11.4": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.12.0": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.13.0": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.14.0": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.14.1": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.15.0": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.15.1": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.16.0": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.16.1": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.16.2": {
        node_abi: 57,
        v8: "6.2"
      },
      "8.17.0": {
        node_abi: 57,
        v8: "6.2"
      },
      "9.0.0": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.1.0": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.2.0": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.2.1": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.3.0": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.4.0": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.5.0": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.6.0": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.6.1": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.7.0": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.7.1": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.8.0": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.9.0": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.10.0": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.10.1": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.11.0": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.11.1": {
        node_abi: 59,
        v8: "6.2"
      },
      "9.11.2": {
        node_abi: 59,
        v8: "6.2"
      },
      "10.0.0": {
        node_abi: 64,
        v8: "6.6"
      },
      "10.1.0": {
        node_abi: 64,
        v8: "6.6"
      },
      "10.2.0": {
        node_abi: 64,
        v8: "6.6"
      },
      "10.2.1": {
        node_abi: 64,
        v8: "6.6"
      },
      "10.3.0": {
        node_abi: 64,
        v8: "6.6"
      },
      "10.4.0": {
        node_abi: 64,
        v8: "6.7"
      },
      "10.4.1": {
        node_abi: 64,
        v8: "6.7"
      },
      "10.5.0": {
        node_abi: 64,
        v8: "6.7"
      },
      "10.6.0": {
        node_abi: 64,
        v8: "6.7"
      },
      "10.7.0": {
        node_abi: 64,
        v8: "6.7"
      },
      "10.8.0": {
        node_abi: 64,
        v8: "6.7"
      },
      "10.9.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.10.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.11.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.12.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.13.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.14.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.14.1": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.14.2": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.15.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.15.1": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.15.2": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.15.3": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.16.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.16.1": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.16.2": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.16.3": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.17.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.18.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.18.1": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.19.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.20.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.20.1": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.21.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.22.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.22.1": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.23.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.23.1": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.23.2": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.23.3": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.24.0": {
        node_abi: 64,
        v8: "6.8"
      },
      "10.24.1": {
        node_abi: 64,
        v8: "6.8"
      },
      "11.0.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.1.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.2.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.3.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.4.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.5.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.6.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.7.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.8.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.9.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.10.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.10.1": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.11.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.12.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.13.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.14.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "11.15.0": {
        node_abi: 67,
        v8: "7.0"
      },
      "12.0.0": {
        node_abi: 72,
        v8: "7.4"
      },
      "12.1.0": {
        node_abi: 72,
        v8: "7.4"
      },
      "12.2.0": {
        node_abi: 72,
        v8: "7.4"
      },
      "12.3.0": {
        node_abi: 72,
        v8: "7.4"
      },
      "12.3.1": {
        node_abi: 72,
        v8: "7.4"
      },
      "12.4.0": {
        node_abi: 72,
        v8: "7.4"
      },
      "12.5.0": {
        node_abi: 72,
        v8: "7.5"
      },
      "12.6.0": {
        node_abi: 72,
        v8: "7.5"
      },
      "12.7.0": {
        node_abi: 72,
        v8: "7.5"
      },
      "12.8.0": {
        node_abi: 72,
        v8: "7.5"
      },
      "12.8.1": {
        node_abi: 72,
        v8: "7.5"
      },
      "12.9.0": {
        node_abi: 72,
        v8: "7.6"
      },
      "12.9.1": {
        node_abi: 72,
        v8: "7.6"
      },
      "12.10.0": {
        node_abi: 72,
        v8: "7.6"
      },
      "12.11.0": {
        node_abi: 72,
        v8: "7.7"
      },
      "12.11.1": {
        node_abi: 72,
        v8: "7.7"
      },
      "12.12.0": {
        node_abi: 72,
        v8: "7.7"
      },
      "12.13.0": {
        node_abi: 72,
        v8: "7.7"
      },
      "12.13.1": {
        node_abi: 72,
        v8: "7.7"
      },
      "12.14.0": {
        node_abi: 72,
        v8: "7.7"
      },
      "12.14.1": {
        node_abi: 72,
        v8: "7.7"
      },
      "12.15.0": {
        node_abi: 72,
        v8: "7.7"
      },
      "12.16.0": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.16.1": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.16.2": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.16.3": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.17.0": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.18.0": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.18.1": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.18.2": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.18.3": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.18.4": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.19.0": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.19.1": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.20.0": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.20.1": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.20.2": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.21.0": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.22.0": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.22.1": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.22.2": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.22.3": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.22.4": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.22.5": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.22.6": {
        node_abi: 72,
        v8: "7.8"
      },
      "12.22.7": {
        node_abi: 72,
        v8: "7.8"
      },
      "13.0.0": {
        node_abi: 79,
        v8: "7.8"
      },
      "13.0.1": {
        node_abi: 79,
        v8: "7.8"
      },
      "13.1.0": {
        node_abi: 79,
        v8: "7.8"
      },
      "13.2.0": {
        node_abi: 79,
        v8: "7.9"
      },
      "13.3.0": {
        node_abi: 79,
        v8: "7.9"
      },
      "13.4.0": {
        node_abi: 79,
        v8: "7.9"
      },
      "13.5.0": {
        node_abi: 79,
        v8: "7.9"
      },
      "13.6.0": {
        node_abi: 79,
        v8: "7.9"
      },
      "13.7.0": {
        node_abi: 79,
        v8: "7.9"
      },
      "13.8.0": {
        node_abi: 79,
        v8: "7.9"
      },
      "13.9.0": {
        node_abi: 79,
        v8: "7.9"
      },
      "13.10.0": {
        node_abi: 79,
        v8: "7.9"
      },
      "13.10.1": {
        node_abi: 79,
        v8: "7.9"
      },
      "13.11.0": {
        node_abi: 79,
        v8: "7.9"
      },
      "13.12.0": {
        node_abi: 79,
        v8: "7.9"
      },
      "13.13.0": {
        node_abi: 79,
        v8: "7.9"
      },
      "13.14.0": {
        node_abi: 79,
        v8: "7.9"
      },
      "14.0.0": {
        node_abi: 83,
        v8: "8.1"
      },
      "14.1.0": {
        node_abi: 83,
        v8: "8.1"
      },
      "14.2.0": {
        node_abi: 83,
        v8: "8.1"
      },
      "14.3.0": {
        node_abi: 83,
        v8: "8.1"
      },
      "14.4.0": {
        node_abi: 83,
        v8: "8.1"
      },
      "14.5.0": {
        node_abi: 83,
        v8: "8.3"
      },
      "14.6.0": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.7.0": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.8.0": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.9.0": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.10.0": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.10.1": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.11.0": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.12.0": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.13.0": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.13.1": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.14.0": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.15.0": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.15.1": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.15.2": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.15.3": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.15.4": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.15.5": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.16.0": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.16.1": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.17.0": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.17.1": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.17.2": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.17.3": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.17.4": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.17.5": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.17.6": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.18.0": {
        node_abi: 83,
        v8: "8.4"
      },
      "14.18.1": {
        node_abi: 83,
        v8: "8.4"
      },
      "15.0.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.0.1": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.1.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.2.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.2.1": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.3.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.4.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.5.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.5.1": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.6.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.7.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.8.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.9.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.10.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.11.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.12.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.13.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "15.14.0": {
        node_abi: 88,
        v8: "8.6"
      },
      "16.0.0": {
        node_abi: 93,
        v8: "9.0"
      },
      "16.1.0": {
        node_abi: 93,
        v8: "9.0"
      },
      "16.2.0": {
        node_abi: 93,
        v8: "9.0"
      },
      "16.3.0": {
        node_abi: 93,
        v8: "9.0"
      },
      "16.4.0": {
        node_abi: 93,
        v8: "9.1"
      },
      "16.4.1": {
        node_abi: 93,
        v8: "9.1"
      },
      "16.4.2": {
        node_abi: 93,
        v8: "9.1"
      },
      "16.5.0": {
        node_abi: 93,
        v8: "9.1"
      },
      "16.6.0": {
        node_abi: 93,
        v8: "9.2"
      },
      "16.6.1": {
        node_abi: 93,
        v8: "9.2"
      },
      "16.6.2": {
        node_abi: 93,
        v8: "9.2"
      },
      "16.7.0": {
        node_abi: 93,
        v8: "9.2"
      },
      "16.8.0": {
        node_abi: 93,
        v8: "9.2"
      },
      "16.9.0": {
        node_abi: 93,
        v8: "9.3"
      },
      "16.9.1": {
        node_abi: 93,
        v8: "9.3"
      },
      "16.10.0": {
        node_abi: 93,
        v8: "9.3"
      },
      "16.11.0": {
        node_abi: 93,
        v8: "9.4"
      },
      "16.11.1": {
        node_abi: 93,
        v8: "9.4"
      },
      "16.12.0": {
        node_abi: 93,
        v8: "9.4"
      },
      "16.13.0": {
        node_abi: 93,
        v8: "9.4"
      },
      "17.0.0": {
        node_abi: 102,
        v8: "9.5"
      },
      "17.0.1": {
        node_abi: 102,
        v8: "9.5"
      },
      "17.1.0": {
        node_abi: 102,
        v8: "9.5"
      }
    };
  }
});

// node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js
var require_versioning = __commonJS({
  "node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js"(exports, module2) {
    "use strict";
    module2.exports = exports;
    var path = require("path");
    var semver = require_semver2();
    var url = require("url");
    var detect_libc = require_detect_libc();
    var napi = require_napi();
    var abi_crosswalk;
    if (process.env.NODE_PRE_GYP_ABI_CROSSWALK) {
      abi_crosswalk = require(process.env.NODE_PRE_GYP_ABI_CROSSWALK);
    } else {
      abi_crosswalk = require_abi_crosswalk();
    }
    var major_versions = {};
    Object.keys(abi_crosswalk).forEach((v) => {
      const major = v.split(".")[0];
      if (!major_versions[major]) {
        major_versions[major] = v;
      }
    });
    function get_electron_abi(runtime, target_version) {
      if (!runtime) {
        throw new Error("get_electron_abi requires valid runtime arg");
      }
      if (typeof target_version === "undefined") {
        throw new Error("Empty target version is not supported if electron is the target.");
      }
      const sem_ver = semver.parse(target_version);
      return runtime + "-v" + sem_ver.major + "." + sem_ver.minor;
    }
    module2.exports.get_electron_abi = get_electron_abi;
    function get_node_webkit_abi(runtime, target_version) {
      if (!runtime) {
        throw new Error("get_node_webkit_abi requires valid runtime arg");
      }
      if (typeof target_version === "undefined") {
        throw new Error("Empty target version is not supported if node-webkit is the target.");
      }
      return runtime + "-v" + target_version;
    }
    module2.exports.get_node_webkit_abi = get_node_webkit_abi;
    function get_node_abi(runtime, versions) {
      if (!runtime) {
        throw new Error("get_node_abi requires valid runtime arg");
      }
      if (!versions) {
        throw new Error("get_node_abi requires valid process.versions object");
      }
      const sem_ver = semver.parse(versions.node);
      if (sem_ver.major === 0 && sem_ver.minor % 2) {
        return runtime + "-v" + versions.node;
      } else {
        return versions.modules ? runtime + "-v" + +versions.modules : "v8-" + versions.v8.split(".").slice(0, 2).join(".");
      }
    }
    module2.exports.get_node_abi = get_node_abi;
    function get_runtime_abi(runtime, target_version) {
      if (!runtime) {
        throw new Error("get_runtime_abi requires valid runtime arg");
      }
      if (runtime === "node-webkit") {
        return get_node_webkit_abi(runtime, target_version || process.versions["node-webkit"]);
      } else if (runtime === "electron") {
        return get_electron_abi(runtime, target_version || process.versions.electron);
      } else {
        if (runtime !== "node") {
          throw new Error("Unknown Runtime: '" + runtime + "'");
        }
        if (!target_version) {
          return get_node_abi(runtime, process.versions);
        } else {
          let cross_obj;
          if (abi_crosswalk[target_version]) {
            cross_obj = abi_crosswalk[target_version];
          } else {
            const target_parts = target_version.split(".").map((i) => {
              return +i;
            });
            if (target_parts.length !== 3) {
              throw new Error("Unknown target version: " + target_version);
            }
            const major = target_parts[0];
            let minor = target_parts[1];
            let patch = target_parts[2];
            if (major === 1) {
              while (true) {
                if (minor > 0)
                  --minor;
                if (patch > 0)
                  --patch;
                const new_iojs_target = "" + major + "." + minor + "." + patch;
                if (abi_crosswalk[new_iojs_target]) {
                  cross_obj = abi_crosswalk[new_iojs_target];
                  console.log("Warning: node-pre-gyp could not find exact match for " + target_version);
                  console.log("Warning: but node-pre-gyp successfully choose " + new_iojs_target + " as ABI compatible target");
                  break;
                }
                if (minor === 0 && patch === 0) {
                  break;
                }
              }
            } else if (major >= 2) {
              if (major_versions[major]) {
                cross_obj = abi_crosswalk[major_versions[major]];
                console.log("Warning: node-pre-gyp could not find exact match for " + target_version);
                console.log("Warning: but node-pre-gyp successfully choose " + major_versions[major] + " as ABI compatible target");
              }
            } else if (major === 0) {
              if (target_parts[1] % 2 === 0) {
                while (--patch > 0) {
                  const new_node_target = "" + major + "." + minor + "." + patch;
                  if (abi_crosswalk[new_node_target]) {
                    cross_obj = abi_crosswalk[new_node_target];
                    console.log("Warning: node-pre-gyp could not find exact match for " + target_version);
                    console.log("Warning: but node-pre-gyp successfully choose " + new_node_target + " as ABI compatible target");
                    break;
                  }
                }
              }
            }
          }
          if (!cross_obj) {
            throw new Error("Unsupported target version: " + target_version);
          }
          const versions_obj = {
            node: target_version,
            v8: cross_obj.v8 + ".0",
            // abi_crosswalk uses 1 for node versions lacking process.versions.modules
            // process.versions.modules added in >= v0.10.4 and v0.11.7
            modules: cross_obj.node_abi > 1 ? cross_obj.node_abi : void 0
          };
          return get_node_abi(runtime, versions_obj);
        }
      }
    }
    module2.exports.get_runtime_abi = get_runtime_abi;
    var required_parameters = [
      "module_name",
      "module_path",
      "host"
    ];
    function validate_config(package_json, opts) {
      const msg = package_json.name + " package.json is not node-pre-gyp ready:\n";
      const missing = [];
      if (!package_json.main) {
        missing.push("main");
      }
      if (!package_json.version) {
        missing.push("version");
      }
      if (!package_json.name) {
        missing.push("name");
      }
      if (!package_json.binary) {
        missing.push("binary");
      }
      const o = package_json.binary;
      if (o) {
        required_parameters.forEach((p) => {
          if (!o[p] || typeof o[p] !== "string") {
            missing.push("binary." + p);
          }
        });
      }
      if (missing.length >= 1) {
        throw new Error(msg + "package.json must declare these properties: \n" + missing.join("\n"));
      }
      if (o) {
        const protocol = url.parse(o.host).protocol;
        if (protocol === "http:") {
          throw new Error("'host' protocol (" + protocol + ") is invalid - only 'https:' is accepted");
        }
      }
      napi.validate_package_json(package_json, opts);
    }
    module2.exports.validate_config = validate_config;
    function eval_template(template, opts) {
      Object.keys(opts).forEach((key) => {
        const pattern = "{" + key + "}";
        while (template.indexOf(pattern) > -1) {
          template = template.replace(pattern, opts[key]);
        }
      });
      return template;
    }
    function fix_slashes(pathname) {
      if (pathname.slice(-1) !== "/") {
        return pathname + "/";
      }
      return pathname;
    }
    function drop_double_slashes(pathname) {
      return pathname.replace(/\/\//g, "/");
    }
    function get_process_runtime(versions) {
      let runtime = "node";
      if (versions["node-webkit"]) {
        runtime = "node-webkit";
      } else if (versions.electron) {
        runtime = "electron";
      }
      return runtime;
    }
    module2.exports.get_process_runtime = get_process_runtime;
    var default_package_name = "{module_name}-v{version}-{node_abi}-{platform}-{arch}.tar.gz";
    var default_remote_path = "";
    module2.exports.evaluate = function(package_json, options, napi_build_version) {
      options = options || {};
      validate_config(package_json, options);
      const v = package_json.version;
      const module_version = semver.parse(v);
      const runtime = options.runtime || get_process_runtime(process.versions);
      const opts = {
        name: package_json.name,
        configuration: options.debug ? "Debug" : "Release",
        debug: options.debug,
        module_name: package_json.binary.module_name,
        version: module_version.version,
        prerelease: module_version.prerelease.length ? module_version.prerelease.join(".") : "",
        build: module_version.build.length ? module_version.build.join(".") : "",
        major: module_version.major,
        minor: module_version.minor,
        patch: module_version.patch,
        runtime,
        node_abi: get_runtime_abi(runtime, options.target),
        node_abi_napi: napi.get_napi_version(options.target) ? "napi" : get_runtime_abi(runtime, options.target),
        napi_version: napi.get_napi_version(options.target),
        // non-zero numeric, undefined if unsupported
        napi_build_version: napi_build_version || "",
        node_napi_label: napi_build_version ? "napi-v" + napi_build_version : get_runtime_abi(runtime, options.target),
        target: options.target || "",
        platform: options.target_platform || process.platform,
        target_platform: options.target_platform || process.platform,
        arch: options.target_arch || process.arch,
        target_arch: options.target_arch || process.arch,
        libc: options.target_libc || detect_libc.familySync() || "unknown",
        module_main: package_json.main,
        toolset: options.toolset || "",
        // address https://github.com/mapbox/node-pre-gyp/issues/119
        bucket: package_json.binary.bucket,
        region: package_json.binary.region,
        s3ForcePathStyle: package_json.binary.s3ForcePathStyle || false
      };
      const validModuleName = opts.module_name.replace("-", "_");
      const host = process.env["npm_config_" + validModuleName + "_binary_host_mirror"] || package_json.binary.host;
      opts.host = fix_slashes(eval_template(host, opts));
      opts.module_path = eval_template(package_json.binary.module_path, opts);
      if (options.module_root) {
        opts.module_path = path.join(options.module_root, opts.module_path);
      } else {
        opts.module_path = path.resolve(opts.module_path);
      }
      opts.module = path.join(opts.module_path, opts.module_name + ".node");
      opts.remote_path = package_json.binary.remote_path ? drop_double_slashes(fix_slashes(eval_template(package_json.binary.remote_path, opts))) : default_remote_path;
      const package_name = package_json.binary.package_name ? package_json.binary.package_name : default_package_name;
      opts.package_name = eval_template(package_name, opts);
      opts.staged_tarball = path.join("build/stage", opts.remote_path, opts.package_name);
      opts.hosted_path = url.resolve(opts.host, opts.remote_path);
      opts.hosted_tarball = url.resolve(opts.hosted_path, opts.package_name);
      return opts;
    };
  }
});

// node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js
var require_pre_binding = __commonJS({
  "node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js"(exports, module2) {
    "use strict";
    var npg = require_node_pre_gyp();
    var versioning = require_versioning();
    var napi = require_napi();
    var existsSync = require("fs").existsSync || require("path").existsSync;
    var path = require("path");
    module2.exports = exports;
    exports.usage = "Finds the require path for the node-pre-gyp installed module";
    exports.validate = function(package_json, opts) {
      versioning.validate_config(package_json, opts);
    };
    exports.find = function(package_json_path, opts) {
      if (!existsSync(package_json_path)) {
        throw new Error(package_json_path + "does not exist");
      }
      const prog = new npg.Run({ package_json_path, argv: process.argv });
      prog.setBinaryHostProperty();
      const package_json = prog.package_json;
      versioning.validate_config(package_json, opts);
      let napi_build_version;
      if (napi.get_napi_build_versions(package_json, opts)) {
        napi_build_version = napi.get_best_napi_build_version(package_json, opts);
      }
      opts = opts || {};
      if (!opts.module_root)
        opts.module_root = path.dirname(package_json_path);
      const meta = versioning.evaluate(package_json, opts, napi_build_version);
      return meta.module;
    };
  }
});

// node_modules/@mapbox/node-pre-gyp/package.json
var require_package = __commonJS({
  "node_modules/@mapbox/node-pre-gyp/package.json"(exports, module2) {
    module2.exports = {
      name: "@mapbox/node-pre-gyp",
      description: "Node.js native addon binary install tool",
      version: "1.0.11",
      keywords: [
        "native",
        "addon",
        "module",
        "c",
        "c++",
        "bindings",
        "binary"
      ],
      license: "BSD-3-Clause",
      author: "Dane Springmeyer <dane@mapbox.com>",
      repository: {
        type: "git",
        url: "git://github.com/mapbox/node-pre-gyp.git"
      },
      bin: "./bin/node-pre-gyp",
      main: "./lib/node-pre-gyp.js",
      dependencies: {
        "detect-libc": "^2.0.0",
        "https-proxy-agent": "^5.0.0",
        "make-dir": "^3.1.0",
        "node-fetch": "^2.6.7",
        nopt: "^5.0.0",
        npmlog: "^5.0.1",
        rimraf: "^3.0.2",
        semver: "^7.3.5",
        tar: "^6.1.11"
      },
      devDependencies: {
        "@mapbox/cloudfriend": "^5.1.0",
        "@mapbox/eslint-config-mapbox": "^3.0.0",
        "aws-sdk": "^2.1087.0",
        codecov: "^3.8.3",
        eslint: "^7.32.0",
        "eslint-plugin-node": "^11.1.0",
        "mock-aws-s3": "^4.0.2",
        nock: "^12.0.3",
        "node-addon-api": "^4.3.0",
        nyc: "^15.1.0",
        tape: "^5.5.2",
        "tar-fs": "^2.1.1"
      },
      nyc: {
        all: true,
        "skip-full": false,
        exclude: [
          "test/**"
        ]
      },
      scripts: {
        coverage: "nyc --all --include index.js --include lib/ npm test",
        "upload-coverage": "nyc report --reporter json && codecov --clear --flags=unit --file=./coverage/coverage-final.json",
        lint: "eslint bin/node-pre-gyp lib/*js lib/util/*js test/*js scripts/*js",
        fix: "npm run lint -- --fix",
        "update-crosswalk": "node scripts/abi_crosswalk.js",
        test: "tape test/*test.js"
      }
    };
  }
});

// node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js
var require_node_pre_gyp = __commonJS({
  "node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js"(exports, module2) {
    "use strict";
    module2.exports = exports;
    exports.mockS3Http = require_s3_setup().get_mockS3Http();
    exports.mockS3Http("on");
    var mocking = exports.mockS3Http("get");
    var fs = require("fs");
    var path = require("path");
    var nopt = require_nopt();
    var log = require_log();
    log.disableProgress();
    var napi = require_napi();
    var EE = require("events").EventEmitter;
    var inherits = require("util").inherits;
    var cli_commands = [
      "clean",
      "install",
      "reinstall",
      "build",
      "rebuild",
      "package",
      "testpackage",
      "publish",
      "unpublish",
      "info",
      "testbinary",
      "reveal",
      "configure"
    ];
    var aliases = {};
    log.heading = "node-pre-gyp";
    if (mocking) {
      log.warn(`mocking s3 to ${process.env.node_pre_gyp_mock_s3}`);
    }
    Object.defineProperty(exports, "find", {
      get: function() {
        return require_pre_binding().find;
      },
      enumerable: true
    });
    function Run({ package_json_path = "./package.json", argv }) {
      this.package_json_path = package_json_path;
      this.commands = {};
      const self2 = this;
      cli_commands.forEach((command) => {
        self2.commands[command] = function(argvx, callback) {
          log.verbose("command", command, argvx);
          return require("./" + command)(self2, argvx, callback);
        };
      });
      this.parseArgv(argv);
      this.binaryHostSet = false;
    }
    inherits(Run, EE);
    exports.Run = Run;
    var proto = Run.prototype;
    proto.package = require_package();
    proto.configDefs = {
      help: Boolean,
      // everywhere
      arch: String,
      // 'configure'
      debug: Boolean,
      // 'build'
      directory: String,
      // bin
      proxy: String,
      // 'install'
      loglevel: String
      // everywhere
    };
    proto.shorthands = {
      release: "--no-debug",
      C: "--directory",
      debug: "--debug",
      j: "--jobs",
      silent: "--loglevel=silent",
      silly: "--loglevel=silly",
      verbose: "--loglevel=verbose"
    };
    proto.aliases = aliases;
    proto.parseArgv = function parseOpts(argv) {
      this.opts = nopt(this.configDefs, this.shorthands, argv);
      this.argv = this.opts.argv.remain.slice();
      const commands = this.todo = [];
      argv = this.argv.map((arg) => {
        if (arg in this.aliases) {
          arg = this.aliases[arg];
        }
        return arg;
      });
      argv.slice().forEach((arg) => {
        if (arg in this.commands) {
          const args = argv.splice(0, argv.indexOf(arg));
          argv.shift();
          if (commands.length > 0) {
            commands[commands.length - 1].args = args;
          }
          commands.push({ name: arg, args: [] });
        }
      });
      if (commands.length > 0) {
        commands[commands.length - 1].args = argv.splice(0);
      }
      let package_json_path = this.package_json_path;
      if (this.opts.directory) {
        package_json_path = path.join(this.opts.directory, package_json_path);
      }
      this.package_json = JSON.parse(fs.readFileSync(package_json_path));
      this.todo = napi.expand_commands(this.package_json, this.opts, commands);
      const npm_config_prefix = "npm_config_";
      Object.keys(process.env).forEach((name) => {
        if (name.indexOf(npm_config_prefix) !== 0)
          return;
        const val = process.env[name];
        if (name === npm_config_prefix + "loglevel") {
          log.level = val;
        } else {
          name = name.substring(npm_config_prefix.length);
          if (name === "argv") {
            if (this.opts.argv && this.opts.argv.remain && this.opts.argv.remain.length) {
            } else {
              this.opts[name] = val;
            }
          } else {
            this.opts[name] = val;
          }
        }
      });
      if (this.opts.loglevel) {
        log.level = this.opts.loglevel;
      }
      log.resume();
    };
    proto.setBinaryHostProperty = function(command) {
      if (this.binaryHostSet) {
        return this.package_json.binary.host;
      }
      const p = this.package_json;
      if (!p || !p.binary || p.binary.host) {
        return "";
      }
      if (!p.binary.staging_host || !p.binary.production_host) {
        return "";
      }
      let target = "production_host";
      if (command === "publish" || command === "unpublish") {
        target = "staging_host";
      }
      const npg_s3_host = process.env.node_pre_gyp_s3_host;
      if (npg_s3_host === "staging" || npg_s3_host === "production") {
        target = `${npg_s3_host}_host`;
      } else if (this.opts["s3_host"] === "staging" || this.opts["s3_host"] === "production") {
        target = `${this.opts["s3_host"]}_host`;
      } else if (this.opts["s3_host"] || npg_s3_host) {
        throw new Error(`invalid s3_host ${this.opts["s3_host"] || npg_s3_host}`);
      }
      p.binary.host = p.binary[target];
      this.binaryHostSet = true;
      return p.binary.host;
    };
    proto.usage = function usage() {
      const str = [
        "",
        "  Usage: node-pre-gyp <command> [options]",
        "",
        "  where <command> is one of:",
        cli_commands.map((c) => {
          return "    - " + c + " - " + require("./" + c).usage;
        }).join("\n"),
        "",
        "node-pre-gyp@" + this.version + "  " + path.resolve(__dirname, ".."),
        "node@" + process.versions.node
      ].join("\n");
      return str;
    };
    Object.defineProperty(proto, "version", {
      get: function() {
        return this.package.version;
      },
      enumerable: true
    });
  }
});

// node_modules/bcrypt/promises.js
var require_promises = __commonJS({
  "node_modules/bcrypt/promises.js"(exports, module2) {
    "use strict";
    var Promise2 = global.Promise;
    module2.exports.promise = function(fn, context, args) {
      if (!Array.isArray(args)) {
        args = Array.prototype.slice.call(args);
      }
      if (typeof fn !== "function") {
        return Promise2.reject(new Error("fn must be a function"));
      }
      return new Promise2(function(resolve, reject) {
        args.push(function(err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
        fn.apply(context, args);
      });
    };
    module2.exports.reject = function(err) {
      return Promise2.reject(err);
    };
    module2.exports.use = function(promise) {
      Promise2 = promise;
    };
  }
});

// node_modules/bcrypt/bcrypt.js
var require_bcrypt = __commonJS({
  "node_modules/bcrypt/bcrypt.js"(exports, module2) {
    "use strict";
    var nodePreGyp = require_node_pre_gyp();
    var path = require("path");
    var binding_path = nodePreGyp.find(path.resolve(path.join(__dirname, "./package.json")));
    var bindings = require(binding_path);
    var crypto = require("crypto");
    var promises = require_promises();
    module2.exports.genSaltSync = function genSaltSync(rounds, minor) {
      if (!rounds) {
        rounds = 10;
      } else if (typeof rounds !== "number") {
        throw new Error("rounds must be a number");
      }
      if (!minor) {
        minor = "b";
      } else if (minor !== "b" && minor !== "a") {
        throw new Error('minor must be either "a" or "b"');
      }
      return bindings.gen_salt_sync(minor, rounds, crypto.randomBytes(16));
    };
    module2.exports.genSalt = function genSalt(rounds, minor, cb) {
      var error;
      if (typeof arguments[0] === "function") {
        cb = arguments[0];
        rounds = 10;
        minor = "b";
      } else if (typeof arguments[1] === "function") {
        cb = arguments[1];
        minor = "b";
      }
      if (!cb) {
        return promises.promise(genSalt, this, [rounds, minor]);
      }
      if (!rounds) {
        rounds = 10;
      } else if (typeof rounds !== "number") {
        error = new Error("rounds must be a number");
        return process.nextTick(function() {
          cb(error);
        });
      }
      if (!minor) {
        minor = "b";
      } else if (minor !== "b" && minor !== "a") {
        error = new Error('minor must be either "a" or "b"');
        return process.nextTick(function() {
          cb(error);
        });
      }
      crypto.randomBytes(16, function(error2, randomBytes) {
        if (error2) {
          cb(error2);
          return;
        }
        bindings.gen_salt(minor, rounds, randomBytes, cb);
      });
    };
    module2.exports.hashSync = function hashSync(data, salt) {
      if (data == null || salt == null) {
        throw new Error("data and salt arguments required");
      }
      if (!(typeof data === "string" || data instanceof Buffer) || typeof salt !== "string" && typeof salt !== "number") {
        throw new Error("data must be a string or Buffer and salt must either be a salt string or a number of rounds");
      }
      if (typeof salt === "number") {
        salt = module2.exports.genSaltSync(salt);
      }
      return bindings.encrypt_sync(data, salt);
    };
    module2.exports.hash = function hash(data, salt, cb) {
      var error;
      if (typeof data === "function") {
        error = new Error("data must be a string or Buffer and salt must either be a salt string or a number of rounds");
        return process.nextTick(function() {
          data(error);
        });
      }
      if (typeof salt === "function") {
        error = new Error("data must be a string or Buffer and salt must either be a salt string or a number of rounds");
        return process.nextTick(function() {
          salt(error);
        });
      }
      if (cb && typeof cb !== "function") {
        return promises.reject(new Error("cb must be a function or null to return a Promise"));
      }
      if (!cb) {
        return promises.promise(hash, this, [data, salt]);
      }
      if (data == null || salt == null) {
        error = new Error("data and salt arguments required");
        return process.nextTick(function() {
          cb(error);
        });
      }
      if (!(typeof data === "string" || data instanceof Buffer) || typeof salt !== "string" && typeof salt !== "number") {
        error = new Error("data must be a string or Buffer and salt must either be a salt string or a number of rounds");
        return process.nextTick(function() {
          cb(error);
        });
      }
      if (typeof salt === "number") {
        return module2.exports.genSalt(salt, function(err, salt2) {
          return bindings.encrypt(data, salt2, cb);
        });
      }
      return bindings.encrypt(data, salt, cb);
    };
    module2.exports.compareSync = function compareSync(data, hash) {
      if (data == null || hash == null) {
        throw new Error("data and hash arguments required");
      }
      if (!(typeof data === "string" || data instanceof Buffer) || typeof hash !== "string") {
        throw new Error("data must be a string or Buffer and hash must be a string");
      }
      return bindings.compare_sync(data, hash);
    };
    module2.exports.compare = function compare(data, hash, cb) {
      var error;
      if (typeof data === "function") {
        error = new Error("data and hash arguments required");
        return process.nextTick(function() {
          data(error);
        });
      }
      if (typeof hash === "function") {
        error = new Error("data and hash arguments required");
        return process.nextTick(function() {
          hash(error);
        });
      }
      if (cb && typeof cb !== "function") {
        return promises.reject(new Error("cb must be a function or null to return a Promise"));
      }
      if (!cb) {
        return promises.promise(compare, this, [data, hash]);
      }
      if (data == null || hash == null) {
        error = new Error("data and hash arguments required");
        return process.nextTick(function() {
          cb(error);
        });
      }
      if (!(typeof data === "string" || data instanceof Buffer) || typeof hash !== "string") {
        error = new Error("data and hash must be strings");
        return process.nextTick(function() {
          cb(error);
        });
      }
      return bindings.compare(data, hash, cb);
    };
    module2.exports.getRounds = function getRounds(hash) {
      if (hash == null) {
        throw new Error("hash argument required");
      }
      if (typeof hash !== "string") {
        throw new Error("hash must be a string");
      }
      return bindings.get_rounds(hash);
    };
  }
});

// node_modules/jws/lib/data-stream.js
var require_data_stream = __commonJS({
  "node_modules/jws/lib/data-stream.js"(exports, module2) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var Stream = require("stream");
    var util = require("util");
    function DataStream(data) {
      this.buffer = null;
      this.writable = true;
      this.readable = true;
      if (!data) {
        this.buffer = Buffer2.alloc(0);
        return this;
      }
      if (typeof data.pipe === "function") {
        this.buffer = Buffer2.alloc(0);
        data.pipe(this);
        return this;
      }
      if (data.length || typeof data === "object") {
        this.buffer = data;
        this.writable = false;
        process.nextTick(function() {
          this.emit("end", data);
          this.readable = false;
          this.emit("close");
        }.bind(this));
        return this;
      }
      throw new TypeError("Unexpected data type (" + typeof data + ")");
    }
    util.inherits(DataStream, Stream);
    DataStream.prototype.write = function write(data) {
      this.buffer = Buffer2.concat([this.buffer, Buffer2.from(data)]);
      this.emit("data", data);
    };
    DataStream.prototype.end = function end(data) {
      if (data)
        this.write(data);
      this.emit("end", data);
      this.emit("close");
      this.writable = false;
      this.readable = false;
    };
    module2.exports = DataStream;
  }
});

// node_modules/buffer-equal-constant-time/index.js
var require_buffer_equal_constant_time = __commonJS({
  "node_modules/buffer-equal-constant-time/index.js"(exports, module2) {
    "use strict";
    var Buffer2 = require("buffer").Buffer;
    var SlowBuffer = require("buffer").SlowBuffer;
    module2.exports = bufferEq;
    function bufferEq(a, b) {
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        return false;
      }
      if (a.length !== b.length) {
        return false;
      }
      var c = 0;
      for (var i = 0; i < a.length; i++) {
        c |= a[i] ^ b[i];
      }
      return c === 0;
    }
    bufferEq.install = function() {
      Buffer2.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
        return bufferEq(this, that);
      };
    };
    var origBufEqual = Buffer2.prototype.equal;
    var origSlowBufEqual = SlowBuffer.prototype.equal;
    bufferEq.restore = function() {
      Buffer2.prototype.equal = origBufEqual;
      SlowBuffer.prototype.equal = origSlowBufEqual;
    };
  }
});

// node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js
var require_param_bytes_for_alg = __commonJS({
  "node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js"(exports, module2) {
    "use strict";
    function getParamSize(keySize) {
      var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
      return result;
    }
    var paramBytesForAlg = {
      ES256: getParamSize(256),
      ES384: getParamSize(384),
      ES512: getParamSize(521)
    };
    function getParamBytesForAlg(alg) {
      var paramBytes = paramBytesForAlg[alg];
      if (paramBytes) {
        return paramBytes;
      }
      throw new Error('Unknown algorithm "' + alg + '"');
    }
    module2.exports = getParamBytesForAlg;
  }
});

// node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js
var require_ecdsa_sig_formatter = __commonJS({
  "node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js"(exports, module2) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var getParamBytesForAlg = require_param_bytes_for_alg();
    var MAX_OCTET = 128;
    var CLASS_UNIVERSAL = 0;
    var PRIMITIVE_BIT = 32;
    var TAG_SEQ = 16;
    var TAG_INT = 2;
    var ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6;
    var ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
    function base64Url(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function signatureAsBuffer(signature) {
      if (Buffer2.isBuffer(signature)) {
        return signature;
      } else if ("string" === typeof signature) {
        return Buffer2.from(signature, "base64");
      }
      throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
    }
    function derToJose(signature, alg) {
      signature = signatureAsBuffer(signature);
      var paramBytes = getParamBytesForAlg(alg);
      var maxEncodedParamLength = paramBytes + 1;
      var inputLength = signature.length;
      var offset = 0;
      if (signature[offset++] !== ENCODED_TAG_SEQ) {
        throw new Error('Could not find expected "seq"');
      }
      var seqLength = signature[offset++];
      if (seqLength === (MAX_OCTET | 1)) {
        seqLength = signature[offset++];
      }
      if (inputLength - offset < seqLength) {
        throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
      }
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "r"');
      }
      var rLength = signature[offset++];
      if (inputLength - offset - 2 < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
      }
      if (maxEncodedParamLength < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
      }
      var rOffset = offset;
      offset += rLength;
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "s"');
      }
      var sLength = signature[offset++];
      if (inputLength - offset !== sLength) {
        throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
      }
      if (maxEncodedParamLength < sLength) {
        throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
      }
      var sOffset = offset;
      offset += sLength;
      if (offset !== inputLength) {
        throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
      }
      var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
      var dst = Buffer2.allocUnsafe(rPadding + rLength + sPadding + sLength);
      for (offset = 0; offset < rPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
      offset = paramBytes;
      for (var o = offset; offset < o + sPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
      dst = dst.toString("base64");
      dst = base64Url(dst);
      return dst;
    }
    function countPadding(buf, start, stop) {
      var padding = 0;
      while (start + padding < stop && buf[start + padding] === 0) {
        ++padding;
      }
      var needsSign = buf[start + padding] >= MAX_OCTET;
      if (needsSign) {
        --padding;
      }
      return padding;
    }
    function joseToDer(signature, alg) {
      signature = signatureAsBuffer(signature);
      var paramBytes = getParamBytesForAlg(alg);
      var signatureBytes = signature.length;
      if (signatureBytes !== paramBytes * 2) {
        throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
      }
      var rPadding = countPadding(signature, 0, paramBytes);
      var sPadding = countPadding(signature, paramBytes, signature.length);
      var rLength = paramBytes - rPadding;
      var sLength = paramBytes - sPadding;
      var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
      var shortLength = rsBytes < MAX_OCTET;
      var dst = Buffer2.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
      var offset = 0;
      dst[offset++] = ENCODED_TAG_SEQ;
      if (shortLength) {
        dst[offset++] = rsBytes;
      } else {
        dst[offset++] = MAX_OCTET | 1;
        dst[offset++] = rsBytes & 255;
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = rLength;
      if (rPadding < 0) {
        dst[offset++] = 0;
        offset += signature.copy(dst, offset, 0, paramBytes);
      } else {
        offset += signature.copy(dst, offset, rPadding, paramBytes);
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = sLength;
      if (sPadding < 0) {
        dst[offset++] = 0;
        signature.copy(dst, offset, paramBytes);
      } else {
        signature.copy(dst, offset, paramBytes + sPadding);
      }
      return dst;
    }
    module2.exports = {
      derToJose,
      joseToDer
    };
  }
});

// node_modules/jwa/index.js
var require_jwa = __commonJS({
  "node_modules/jwa/index.js"(exports, module2) {
    "use strict";
    var bufferEqual = require_buffer_equal_constant_time();
    var Buffer2 = require_safe_buffer().Buffer;
    var crypto = require("crypto");
    var formatEcdsa = require_ecdsa_sig_formatter();
    var util = require("util");
    var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
    var MSG_INVALID_SECRET = "secret must be a string or buffer";
    var MSG_INVALID_VERIFIER_KEY = "key must be a string or a buffer";
    var MSG_INVALID_SIGNER_KEY = "key must be a string, a buffer or an object";
    var supportsKeyObjects = typeof crypto.createPublicKey === "function";
    if (supportsKeyObjects) {
      MSG_INVALID_VERIFIER_KEY += " or a KeyObject";
      MSG_INVALID_SECRET += "or a KeyObject";
    }
    function checkIsPublicKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return;
      }
      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key !== "object") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.type !== "string") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.asymmetricKeyType !== "string") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.export !== "function") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
    }
    function checkIsPrivateKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return;
      }
      if (typeof key === "object") {
        return;
      }
      throw typeError(MSG_INVALID_SIGNER_KEY);
    }
    function checkIsSecretKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return key;
      }
      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (typeof key !== "object") {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (key.type !== "secret") {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (typeof key.export !== "function") {
        throw typeError(MSG_INVALID_SECRET);
      }
    }
    function fromBase64(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function toBase64(base64url) {
      base64url = base64url.toString();
      var padding = 4 - base64url.length % 4;
      if (padding !== 4) {
        for (var i = 0; i < padding; ++i) {
          base64url += "=";
        }
      }
      return base64url.replace(/\-/g, "+").replace(/_/g, "/");
    }
    function typeError(template) {
      var args = [].slice.call(arguments, 1);
      var errMsg = util.format.bind(util, template).apply(null, args);
      return new TypeError(errMsg);
    }
    function bufferOrString(obj) {
      return Buffer2.isBuffer(obj) || typeof obj === "string";
    }
    function normalizeInput(thing) {
      if (!bufferOrString(thing))
        thing = JSON.stringify(thing);
      return thing;
    }
    function createHmacSigner(bits) {
      return function sign(thing, secret) {
        checkIsSecretKey(secret);
        thing = normalizeInput(thing);
        var hmac = crypto.createHmac("sha" + bits, secret);
        var sig = (hmac.update(thing), hmac.digest("base64"));
        return fromBase64(sig);
      };
    }
    function createHmacVerifier(bits) {
      return function verify(thing, signature, secret) {
        var computedSig = createHmacSigner(bits)(thing, secret);
        return bufferEqual(Buffer2.from(signature), Buffer2.from(computedSig));
      };
    }
    function createKeySigner(bits) {
      return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign(privateKey, "base64"));
        return fromBase64(sig);
      };
    }
    function createKeyVerifier(bits) {
      return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify(publicKey, signature, "base64");
      };
    }
    function createPSSKeySigner(bits) {
      return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign({
          key: privateKey,
          padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, "base64"));
        return fromBase64(sig);
      };
    }
    function createPSSKeyVerifier(bits) {
      return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify({
          key: publicKey,
          padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, signature, "base64");
      };
    }
    function createECDSASigner(bits) {
      var inner = createKeySigner(bits);
      return function sign() {
        var signature = inner.apply(null, arguments);
        signature = formatEcdsa.derToJose(signature, "ES" + bits);
        return signature;
      };
    }
    function createECDSAVerifer(bits) {
      var inner = createKeyVerifier(bits);
      return function verify(thing, signature, publicKey) {
        signature = formatEcdsa.joseToDer(signature, "ES" + bits).toString("base64");
        var result = inner(thing, signature, publicKey);
        return result;
      };
    }
    function createNoneSigner() {
      return function sign() {
        return "";
      };
    }
    function createNoneVerifier() {
      return function verify(thing, signature) {
        return signature === "";
      };
    }
    module2.exports = function jwa(algorithm) {
      var signerFactories = {
        hs: createHmacSigner,
        rs: createKeySigner,
        ps: createPSSKeySigner,
        es: createECDSASigner,
        none: createNoneSigner
      };
      var verifierFactories = {
        hs: createHmacVerifier,
        rs: createKeyVerifier,
        ps: createPSSKeyVerifier,
        es: createECDSAVerifer,
        none: createNoneVerifier
      };
      var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
      if (!match)
        throw typeError(MSG_INVALID_ALGORITHM, algorithm);
      var algo = (match[1] || match[3]).toLowerCase();
      var bits = match[2];
      return {
        sign: signerFactories[algo](bits),
        verify: verifierFactories[algo](bits)
      };
    };
  }
});

// node_modules/jws/lib/tostring.js
var require_tostring = __commonJS({
  "node_modules/jws/lib/tostring.js"(exports, module2) {
    "use strict";
    var Buffer2 = require("buffer").Buffer;
    module2.exports = function toString(obj) {
      if (typeof obj === "string")
        return obj;
      if (typeof obj === "number" || Buffer2.isBuffer(obj))
        return obj.toString();
      return JSON.stringify(obj);
    };
  }
});

// node_modules/jws/lib/sign-stream.js
var require_sign_stream = __commonJS({
  "node_modules/jws/lib/sign-stream.js"(exports, module2) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream = require("stream");
    var toString = require_tostring();
    var util = require("util");
    function base64url(string, encoding) {
      return Buffer2.from(string, encoding).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function jwsSecuredInput(header, payload, encoding) {
      encoding = encoding || "utf8";
      var encodedHeader = base64url(toString(header), "binary");
      var encodedPayload = base64url(toString(payload), encoding);
      return util.format("%s.%s", encodedHeader, encodedPayload);
    }
    function jwsSign(opts) {
      var header = opts.header;
      var payload = opts.payload;
      var secretOrKey = opts.secret || opts.privateKey;
      var encoding = opts.encoding;
      var algo = jwa(header.alg);
      var securedInput = jwsSecuredInput(header, payload, encoding);
      var signature = algo.sign(securedInput, secretOrKey);
      return util.format("%s.%s", securedInput, signature);
    }
    function SignStream(opts) {
      var secret = opts.secret || opts.privateKey || opts.key;
      var secretStream = new DataStream(secret);
      this.readable = true;
      this.header = opts.header;
      this.encoding = opts.encoding;
      this.secret = this.privateKey = this.key = secretStream;
      this.payload = new DataStream(opts.payload);
      this.secret.once("close", function() {
        if (!this.payload.writable && this.readable)
          this.sign();
      }.bind(this));
      this.payload.once("close", function() {
        if (!this.secret.writable && this.readable)
          this.sign();
      }.bind(this));
    }
    util.inherits(SignStream, Stream);
    SignStream.prototype.sign = function sign() {
      try {
        var signature = jwsSign({
          header: this.header,
          payload: this.payload.buffer,
          secret: this.secret.buffer,
          encoding: this.encoding
        });
        this.emit("done", signature);
        this.emit("data", signature);
        this.emit("end");
        this.readable = false;
        return signature;
      } catch (e) {
        this.readable = false;
        this.emit("error", e);
        this.emit("close");
      }
    };
    SignStream.sign = jwsSign;
    module2.exports = SignStream;
  }
});

// node_modules/jws/lib/verify-stream.js
var require_verify_stream = __commonJS({
  "node_modules/jws/lib/verify-stream.js"(exports, module2) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream = require("stream");
    var toString = require_tostring();
    var util = require("util");
    var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
    function isObject(thing) {
      return Object.prototype.toString.call(thing) === "[object Object]";
    }
    function safeJsonParse(thing) {
      if (isObject(thing))
        return thing;
      try {
        return JSON.parse(thing);
      } catch (e) {
        return void 0;
      }
    }
    function headerFromJWS(jwsSig) {
      var encodedHeader = jwsSig.split(".", 1)[0];
      return safeJsonParse(Buffer2.from(encodedHeader, "base64").toString("binary"));
    }
    function securedInputFromJWS(jwsSig) {
      return jwsSig.split(".", 2).join(".");
    }
    function signatureFromJWS(jwsSig) {
      return jwsSig.split(".")[2];
    }
    function payloadFromJWS(jwsSig, encoding) {
      encoding = encoding || "utf8";
      var payload = jwsSig.split(".")[1];
      return Buffer2.from(payload, "base64").toString(encoding);
    }
    function isValidJws(string) {
      return JWS_REGEX.test(string) && !!headerFromJWS(string);
    }
    function jwsVerify(jwsSig, algorithm, secretOrKey) {
      if (!algorithm) {
        var err = new Error("Missing algorithm parameter for jws.verify");
        err.code = "MISSING_ALGORITHM";
        throw err;
      }
      jwsSig = toString(jwsSig);
      var signature = signatureFromJWS(jwsSig);
      var securedInput = securedInputFromJWS(jwsSig);
      var algo = jwa(algorithm);
      return algo.verify(securedInput, signature, secretOrKey);
    }
    function jwsDecode(jwsSig, opts) {
      opts = opts || {};
      jwsSig = toString(jwsSig);
      if (!isValidJws(jwsSig))
        return null;
      var header = headerFromJWS(jwsSig);
      if (!header)
        return null;
      var payload = payloadFromJWS(jwsSig);
      if (header.typ === "JWT" || opts.json)
        payload = JSON.parse(payload, opts.encoding);
      return {
        header,
        payload,
        signature: signatureFromJWS(jwsSig)
      };
    }
    function VerifyStream(opts) {
      opts = opts || {};
      var secretOrKey = opts.secret || opts.publicKey || opts.key;
      var secretStream = new DataStream(secretOrKey);
      this.readable = true;
      this.algorithm = opts.algorithm;
      this.encoding = opts.encoding;
      this.secret = this.publicKey = this.key = secretStream;
      this.signature = new DataStream(opts.signature);
      this.secret.once("close", function() {
        if (!this.signature.writable && this.readable)
          this.verify();
      }.bind(this));
      this.signature.once("close", function() {
        if (!this.secret.writable && this.readable)
          this.verify();
      }.bind(this));
    }
    util.inherits(VerifyStream, Stream);
    VerifyStream.prototype.verify = function verify() {
      try {
        var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
        var obj = jwsDecode(this.signature.buffer, this.encoding);
        this.emit("done", valid, obj);
        this.emit("data", valid);
        this.emit("end");
        this.readable = false;
        return valid;
      } catch (e) {
        this.readable = false;
        this.emit("error", e);
        this.emit("close");
      }
    };
    VerifyStream.decode = jwsDecode;
    VerifyStream.isValid = isValidJws;
    VerifyStream.verify = jwsVerify;
    module2.exports = VerifyStream;
  }
});

// node_modules/jws/index.js
var require_jws = __commonJS({
  "node_modules/jws/index.js"(exports) {
    "use strict";
    var SignStream = require_sign_stream();
    var VerifyStream = require_verify_stream();
    var ALGORITHMS = [
      "HS256",
      "HS384",
      "HS512",
      "RS256",
      "RS384",
      "RS512",
      "PS256",
      "PS384",
      "PS512",
      "ES256",
      "ES384",
      "ES512"
    ];
    exports.ALGORITHMS = ALGORITHMS;
    exports.sign = SignStream.sign;
    exports.verify = VerifyStream.verify;
    exports.decode = VerifyStream.decode;
    exports.isValid = VerifyStream.isValid;
    exports.createSign = function createSign(opts) {
      return new SignStream(opts);
    };
    exports.createVerify = function createVerify(opts) {
      return new VerifyStream(opts);
    };
  }
});

// node_modules/jsonwebtoken/decode.js
var require_decode = __commonJS({
  "node_modules/jsonwebtoken/decode.js"(exports, module2) {
    "use strict";
    var jws = require_jws();
    module2.exports = function(jwt, options) {
      options = options || {};
      var decoded = jws.decode(jwt, options);
      if (!decoded) {
        return null;
      }
      var payload = decoded.payload;
      if (typeof payload === "string") {
        try {
          var obj = JSON.parse(payload);
          if (obj !== null && typeof obj === "object") {
            payload = obj;
          }
        } catch (e) {
        }
      }
      if (options.complete === true) {
        return {
          header: decoded.header,
          payload,
          signature: decoded.signature
        };
      }
      return payload;
    };
  }
});

// node_modules/jsonwebtoken/lib/JsonWebTokenError.js
var require_JsonWebTokenError = __commonJS({
  "node_modules/jsonwebtoken/lib/JsonWebTokenError.js"(exports, module2) {
    "use strict";
    var JsonWebTokenError = function(message, error) {
      Error.call(this, message);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = "JsonWebTokenError";
      this.message = message;
      if (error)
        this.inner = error;
    };
    JsonWebTokenError.prototype = Object.create(Error.prototype);
    JsonWebTokenError.prototype.constructor = JsonWebTokenError;
    module2.exports = JsonWebTokenError;
  }
});

// node_modules/jsonwebtoken/lib/NotBeforeError.js
var require_NotBeforeError = __commonJS({
  "node_modules/jsonwebtoken/lib/NotBeforeError.js"(exports, module2) {
    "use strict";
    var JsonWebTokenError = require_JsonWebTokenError();
    var NotBeforeError = function(message, date) {
      JsonWebTokenError.call(this, message);
      this.name = "NotBeforeError";
      this.date = date;
    };
    NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);
    NotBeforeError.prototype.constructor = NotBeforeError;
    module2.exports = NotBeforeError;
  }
});

// node_modules/jsonwebtoken/lib/TokenExpiredError.js
var require_TokenExpiredError = __commonJS({
  "node_modules/jsonwebtoken/lib/TokenExpiredError.js"(exports, module2) {
    "use strict";
    var JsonWebTokenError = require_JsonWebTokenError();
    var TokenExpiredError = function(message, expiredAt) {
      JsonWebTokenError.call(this, message);
      this.name = "TokenExpiredError";
      this.expiredAt = expiredAt;
    };
    TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);
    TokenExpiredError.prototype.constructor = TokenExpiredError;
    module2.exports = TokenExpiredError;
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module2) {
    "use strict";
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/jsonwebtoken/lib/timespan.js
var require_timespan = __commonJS({
  "node_modules/jsonwebtoken/lib/timespan.js"(exports, module2) {
    "use strict";
    var ms = require_ms();
    module2.exports = function(time, iat) {
      var timestamp = iat || Math.floor(Date.now() / 1e3);
      if (typeof time === "string") {
        var milliseconds = ms(time);
        if (typeof milliseconds === "undefined") {
          return;
        }
        return Math.floor(timestamp + milliseconds / 1e3);
      } else if (typeof time === "number") {
        return timestamp + time;
      } else {
        return;
      }
    };
  }
});

// node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js
var require_asymmetricKeyDetailsSupported = __commonJS({
  "node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js"(exports, module2) {
    "use strict";
    var semver = require_semver2();
    module2.exports = semver.satisfies(process.version, ">=15.7.0");
  }
});

// node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js
var require_rsaPssKeyDetailsSupported = __commonJS({
  "node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js"(exports, module2) {
    "use strict";
    var semver = require_semver2();
    module2.exports = semver.satisfies(process.version, ">=16.9.0");
  }
});

// node_modules/jsonwebtoken/lib/validateAsymmetricKey.js
var require_validateAsymmetricKey = __commonJS({
  "node_modules/jsonwebtoken/lib/validateAsymmetricKey.js"(exports, module2) {
    "use strict";
    var ASYMMETRIC_KEY_DETAILS_SUPPORTED = require_asymmetricKeyDetailsSupported();
    var RSA_PSS_KEY_DETAILS_SUPPORTED = require_rsaPssKeyDetailsSupported();
    var allowedAlgorithmsForKeys = {
      "ec": ["ES256", "ES384", "ES512"],
      "rsa": ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"],
      "rsa-pss": ["PS256", "PS384", "PS512"]
    };
    var allowedCurves = {
      ES256: "prime256v1",
      ES384: "secp384r1",
      ES512: "secp521r1"
    };
    module2.exports = function(algorithm, key) {
      if (!algorithm || !key)
        return;
      const keyType = key.asymmetricKeyType;
      if (!keyType)
        return;
      const allowedAlgorithms = allowedAlgorithmsForKeys[keyType];
      if (!allowedAlgorithms) {
        throw new Error(`Unknown key type "${keyType}".`);
      }
      if (!allowedAlgorithms.includes(algorithm)) {
        throw new Error(`"alg" parameter for "${keyType}" key type must be one of: ${allowedAlgorithms.join(", ")}.`);
      }
      if (ASYMMETRIC_KEY_DETAILS_SUPPORTED) {
        switch (keyType) {
          case "ec":
            const keyCurve = key.asymmetricKeyDetails.namedCurve;
            const allowedCurve = allowedCurves[algorithm];
            if (keyCurve !== allowedCurve) {
              throw new Error(`"alg" parameter "${algorithm}" requires curve "${allowedCurve}".`);
            }
            break;
          case "rsa-pss":
            if (RSA_PSS_KEY_DETAILS_SUPPORTED) {
              const length = parseInt(algorithm.slice(-3), 10);
              const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = key.asymmetricKeyDetails;
              if (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm) {
                throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${algorithm}.`);
              }
              if (saltLength !== void 0 && saltLength > length >> 3) {
                throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${algorithm}.`);
              }
            }
            break;
        }
      }
    };
  }
});

// node_modules/jsonwebtoken/lib/psSupported.js
var require_psSupported = __commonJS({
  "node_modules/jsonwebtoken/lib/psSupported.js"(exports, module2) {
    "use strict";
    var semver = require_semver2();
    module2.exports = semver.satisfies(process.version, "^6.12.0 || >=8.0.0");
  }
});

// node_modules/jsonwebtoken/verify.js
var require_verify = __commonJS({
  "node_modules/jsonwebtoken/verify.js"(exports, module2) {
    "use strict";
    var JsonWebTokenError = require_JsonWebTokenError();
    var NotBeforeError = require_NotBeforeError();
    var TokenExpiredError = require_TokenExpiredError();
    var decode = require_decode();
    var timespan = require_timespan();
    var validateAsymmetricKey = require_validateAsymmetricKey();
    var PS_SUPPORTED = require_psSupported();
    var jws = require_jws();
    var { KeyObject, createSecretKey, createPublicKey } = require("crypto");
    var PUB_KEY_ALGS = ["RS256", "RS384", "RS512"];
    var EC_KEY_ALGS = ["ES256", "ES384", "ES512"];
    var RSA_KEY_ALGS = ["RS256", "RS384", "RS512"];
    var HS_ALGS = ["HS256", "HS384", "HS512"];
    if (PS_SUPPORTED) {
      PUB_KEY_ALGS.splice(PUB_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
      RSA_KEY_ALGS.splice(RSA_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
    }
    module2.exports = function(jwtString, secretOrPublicKey, options, callback) {
      if (typeof options === "function" && !callback) {
        callback = options;
        options = {};
      }
      if (!options) {
        options = {};
      }
      options = Object.assign({}, options);
      let done;
      if (callback) {
        done = callback;
      } else {
        done = function(err, data) {
          if (err)
            throw err;
          return data;
        };
      }
      if (options.clockTimestamp && typeof options.clockTimestamp !== "number") {
        return done(new JsonWebTokenError("clockTimestamp must be a number"));
      }
      if (options.nonce !== void 0 && (typeof options.nonce !== "string" || options.nonce.trim() === "")) {
        return done(new JsonWebTokenError("nonce must be a non-empty string"));
      }
      if (options.allowInvalidAsymmetricKeyTypes !== void 0 && typeof options.allowInvalidAsymmetricKeyTypes !== "boolean") {
        return done(new JsonWebTokenError("allowInvalidAsymmetricKeyTypes must be a boolean"));
      }
      const clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1e3);
      if (!jwtString) {
        return done(new JsonWebTokenError("jwt must be provided"));
      }
      if (typeof jwtString !== "string") {
        return done(new JsonWebTokenError("jwt must be a string"));
      }
      const parts = jwtString.split(".");
      if (parts.length !== 3) {
        return done(new JsonWebTokenError("jwt malformed"));
      }
      let decodedToken;
      try {
        decodedToken = decode(jwtString, { complete: true });
      } catch (err) {
        return done(err);
      }
      if (!decodedToken) {
        return done(new JsonWebTokenError("invalid token"));
      }
      const header = decodedToken.header;
      let getSecret;
      if (typeof secretOrPublicKey === "function") {
        if (!callback) {
          return done(new JsonWebTokenError("verify must be called asynchronous if secret or public key is provided as a callback"));
        }
        getSecret = secretOrPublicKey;
      } else {
        getSecret = function(header2, secretCallback) {
          return secretCallback(null, secretOrPublicKey);
        };
      }
      return getSecret(header, function(err, secretOrPublicKey2) {
        if (err) {
          return done(new JsonWebTokenError("error in secret or public key callback: " + err.message));
        }
        const hasSignature = parts[2].trim() !== "";
        if (!hasSignature && secretOrPublicKey2) {
          return done(new JsonWebTokenError("jwt signature is required"));
        }
        if (hasSignature && !secretOrPublicKey2) {
          return done(new JsonWebTokenError("secret or public key must be provided"));
        }
        if (!hasSignature && !options.algorithms) {
          return done(new JsonWebTokenError('please specify "none" in "algorithms" to verify unsigned tokens'));
        }
        if (secretOrPublicKey2 != null && !(secretOrPublicKey2 instanceof KeyObject)) {
          try {
            secretOrPublicKey2 = createPublicKey(secretOrPublicKey2);
          } catch (_) {
            try {
              secretOrPublicKey2 = createSecretKey(typeof secretOrPublicKey2 === "string" ? Buffer.from(secretOrPublicKey2) : secretOrPublicKey2);
            } catch (_2) {
              return done(new JsonWebTokenError("secretOrPublicKey is not valid key material"));
            }
          }
        }
        if (!options.algorithms) {
          if (secretOrPublicKey2.type === "secret") {
            options.algorithms = HS_ALGS;
          } else if (["rsa", "rsa-pss"].includes(secretOrPublicKey2.asymmetricKeyType)) {
            options.algorithms = RSA_KEY_ALGS;
          } else if (secretOrPublicKey2.asymmetricKeyType === "ec") {
            options.algorithms = EC_KEY_ALGS;
          } else {
            options.algorithms = PUB_KEY_ALGS;
          }
        }
        if (options.algorithms.indexOf(decodedToken.header.alg) === -1) {
          return done(new JsonWebTokenError("invalid algorithm"));
        }
        if (header.alg.startsWith("HS") && secretOrPublicKey2.type !== "secret") {
          return done(new JsonWebTokenError(`secretOrPublicKey must be a symmetric key when using ${header.alg}`));
        } else if (/^(?:RS|PS|ES)/.test(header.alg) && secretOrPublicKey2.type !== "public") {
          return done(new JsonWebTokenError(`secretOrPublicKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInvalidAsymmetricKeyTypes) {
          try {
            validateAsymmetricKey(header.alg, secretOrPublicKey2);
          } catch (e) {
            return done(e);
          }
        }
        let valid;
        try {
          valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey2);
        } catch (e) {
          return done(e);
        }
        if (!valid) {
          return done(new JsonWebTokenError("invalid signature"));
        }
        const payload = decodedToken.payload;
        if (typeof payload.nbf !== "undefined" && !options.ignoreNotBefore) {
          if (typeof payload.nbf !== "number") {
            return done(new JsonWebTokenError("invalid nbf value"));
          }
          if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
            return done(new NotBeforeError("jwt not active", new Date(payload.nbf * 1e3)));
          }
        }
        if (typeof payload.exp !== "undefined" && !options.ignoreExpiration) {
          if (typeof payload.exp !== "number") {
            return done(new JsonWebTokenError("invalid exp value"));
          }
          if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
            return done(new TokenExpiredError("jwt expired", new Date(payload.exp * 1e3)));
          }
        }
        if (options.audience) {
          const audiences = Array.isArray(options.audience) ? options.audience : [options.audience];
          const target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
          const match = target.some(function(targetAudience) {
            return audiences.some(function(audience) {
              return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
            });
          });
          if (!match) {
            return done(new JsonWebTokenError("jwt audience invalid. expected: " + audiences.join(" or ")));
          }
        }
        if (options.issuer) {
          const invalid_issuer = typeof options.issuer === "string" && payload.iss !== options.issuer || Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1;
          if (invalid_issuer) {
            return done(new JsonWebTokenError("jwt issuer invalid. expected: " + options.issuer));
          }
        }
        if (options.subject) {
          if (payload.sub !== options.subject) {
            return done(new JsonWebTokenError("jwt subject invalid. expected: " + options.subject));
          }
        }
        if (options.jwtid) {
          if (payload.jti !== options.jwtid) {
            return done(new JsonWebTokenError("jwt jwtid invalid. expected: " + options.jwtid));
          }
        }
        if (options.nonce) {
          if (payload.nonce !== options.nonce) {
            return done(new JsonWebTokenError("jwt nonce invalid. expected: " + options.nonce));
          }
        }
        if (options.maxAge) {
          if (typeof payload.iat !== "number") {
            return done(new JsonWebTokenError("iat required when maxAge is specified"));
          }
          const maxAgeTimestamp = timespan(options.maxAge, payload.iat);
          if (typeof maxAgeTimestamp === "undefined") {
            return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
          }
          if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
            return done(new TokenExpiredError("maxAge exceeded", new Date(maxAgeTimestamp * 1e3)));
          }
        }
        if (options.complete === true) {
          const signature = decodedToken.signature;
          return done(null, {
            header,
            payload,
            signature
          });
        }
        return done(null, payload);
      });
    };
  }
});

// node_modules/lodash.includes/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.includes/index.js"(exports, module2) {
    "use strict";
    var INFINITY = 1 / 0;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var MAX_INTEGER = 17976931348623157e292;
    var NAN = 0 / 0;
    var argsTag = "[object Arguments]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var freeParseInt = parseInt;
    function arrayMap(array, iteratee) {
      var index = -1, length = array ? array.length : 0, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value) {
        return baseFindIndex(array, baseIsNaN, fromIndex);
      }
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeKeys = overArg(Object.keys, Object);
    var nativeMax = Math.max;
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isString(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function values(object) {
      return object ? baseValues(object, keys(object)) : [];
    }
    module2.exports = includes;
  }
});

// node_modules/lodash.isboolean/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash.isboolean/index.js"(exports, module2) {
    "use strict";
    var boolTag = "[object Boolean]";
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function isBoolean(value) {
      return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    module2.exports = isBoolean;
  }
});

// node_modules/lodash.isinteger/index.js
var require_lodash3 = __commonJS({
  "node_modules/lodash.isinteger/index.js"(exports, module2) {
    "use strict";
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function isInteger(value) {
      return typeof value == "number" && value == toInteger(value);
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module2.exports = isInteger;
  }
});

// node_modules/lodash.isnumber/index.js
var require_lodash4 = __commonJS({
  "node_modules/lodash.isnumber/index.js"(exports, module2) {
    "use strict";
    var numberTag = "[object Number]";
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isNumber(value) {
      return typeof value == "number" || isObjectLike(value) && objectToString.call(value) == numberTag;
    }
    module2.exports = isNumber;
  }
});

// node_modules/lodash.isplainobject/index.js
var require_lodash5 = __commonJS({
  "node_modules/lodash.isplainobject/index.js"(exports, module2) {
    "use strict";
    var objectTag = "[object Object]";
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    var objectToString = objectProto.toString;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isPlainObject(value) {
      if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module2.exports = isPlainObject;
  }
});

// node_modules/lodash.isstring/index.js
var require_lodash6 = __commonJS({
  "node_modules/lodash.isstring/index.js"(exports, module2) {
    "use strict";
    var stringTag = "[object String]";
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var isArray = Array.isArray;
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isString(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
    }
    module2.exports = isString;
  }
});

// node_modules/lodash.once/index.js
var require_lodash7 = __commonJS({
  "node_modules/lodash.once/index.js"(exports, module2) {
    "use strict";
    var FUNC_ERROR_TEXT = "Expected a function";
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function before(n, func) {
      var result;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = void 0;
        }
        return result;
      };
    }
    function once(func) {
      return before(2, func);
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module2.exports = once;
  }
});

// node_modules/jsonwebtoken/sign.js
var require_sign = __commonJS({
  "node_modules/jsonwebtoken/sign.js"(exports, module2) {
    "use strict";
    var timespan = require_timespan();
    var PS_SUPPORTED = require_psSupported();
    var validateAsymmetricKey = require_validateAsymmetricKey();
    var jws = require_jws();
    var includes = require_lodash();
    var isBoolean = require_lodash2();
    var isInteger = require_lodash3();
    var isNumber = require_lodash4();
    var isPlainObject = require_lodash5();
    var isString = require_lodash6();
    var once = require_lodash7();
    var { KeyObject, createSecretKey, createPrivateKey } = require("crypto");
    var SUPPORTED_ALGS = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
    if (PS_SUPPORTED) {
      SUPPORTED_ALGS.splice(3, 0, "PS256", "PS384", "PS512");
    }
    var sign_options_schema = {
      expiresIn: { isValid: function(value) {
        return isInteger(value) || isString(value) && value;
      }, message: '"expiresIn" should be a number of seconds or string representing a timespan' },
      notBefore: { isValid: function(value) {
        return isInteger(value) || isString(value) && value;
      }, message: '"notBefore" should be a number of seconds or string representing a timespan' },
      audience: { isValid: function(value) {
        return isString(value) || Array.isArray(value);
      }, message: '"audience" must be a string or array' },
      algorithm: { isValid: includes.bind(null, SUPPORTED_ALGS), message: '"algorithm" must be a valid string enum value' },
      header: { isValid: isPlainObject, message: '"header" must be an object' },
      encoding: { isValid: isString, message: '"encoding" must be a string' },
      issuer: { isValid: isString, message: '"issuer" must be a string' },
      subject: { isValid: isString, message: '"subject" must be a string' },
      jwtid: { isValid: isString, message: '"jwtid" must be a string' },
      noTimestamp: { isValid: isBoolean, message: '"noTimestamp" must be a boolean' },
      keyid: { isValid: isString, message: '"keyid" must be a string' },
      mutatePayload: { isValid: isBoolean, message: '"mutatePayload" must be a boolean' },
      allowInsecureKeySizes: { isValid: isBoolean, message: '"allowInsecureKeySizes" must be a boolean' },
      allowInvalidAsymmetricKeyTypes: { isValid: isBoolean, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean' }
    };
    var registered_claims_schema = {
      iat: { isValid: isNumber, message: '"iat" should be a number of seconds' },
      exp: { isValid: isNumber, message: '"exp" should be a number of seconds' },
      nbf: { isValid: isNumber, message: '"nbf" should be a number of seconds' }
    };
    function validate(schema, allowUnknown, object, parameterName) {
      if (!isPlainObject(object)) {
        throw new Error('Expected "' + parameterName + '" to be a plain object.');
      }
      Object.keys(object).forEach(function(key) {
        const validator = schema[key];
        if (!validator) {
          if (!allowUnknown) {
            throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
          }
          return;
        }
        if (!validator.isValid(object[key])) {
          throw new Error(validator.message);
        }
      });
    }
    function validateOptions(options) {
      return validate(sign_options_schema, false, options, "options");
    }
    function validatePayload(payload) {
      return validate(registered_claims_schema, true, payload, "payload");
    }
    var options_to_payload = {
      "audience": "aud",
      "issuer": "iss",
      "subject": "sub",
      "jwtid": "jti"
    };
    var options_for_objects = [
      "expiresIn",
      "notBefore",
      "noTimestamp",
      "audience",
      "issuer",
      "subject",
      "jwtid"
    ];
    module2.exports = function(payload, secretOrPrivateKey, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      } else {
        options = options || {};
      }
      const isObjectPayload = typeof payload === "object" && !Buffer.isBuffer(payload);
      const header = Object.assign({
        alg: options.algorithm || "HS256",
        typ: isObjectPayload ? "JWT" : void 0,
        kid: options.keyid
      }, options.header);
      function failure(err) {
        if (callback) {
          return callback(err);
        }
        throw err;
      }
      if (!secretOrPrivateKey && options.algorithm !== "none") {
        return failure(new Error("secretOrPrivateKey must have a value"));
      }
      if (secretOrPrivateKey != null && !(secretOrPrivateKey instanceof KeyObject)) {
        try {
          secretOrPrivateKey = createPrivateKey(secretOrPrivateKey);
        } catch (_) {
          try {
            secretOrPrivateKey = createSecretKey(typeof secretOrPrivateKey === "string" ? Buffer.from(secretOrPrivateKey) : secretOrPrivateKey);
          } catch (_2) {
            return failure(new Error("secretOrPrivateKey is not valid key material"));
          }
        }
      }
      if (header.alg.startsWith("HS") && secretOrPrivateKey.type !== "secret") {
        return failure(new Error(`secretOrPrivateKey must be a symmetric key when using ${header.alg}`));
      } else if (/^(?:RS|PS|ES)/.test(header.alg)) {
        if (secretOrPrivateKey.type !== "private") {
          return failure(new Error(`secretOrPrivateKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInsecureKeySizes && !header.alg.startsWith("ES") && secretOrPrivateKey.asymmetricKeyDetails !== void 0 && //KeyObject.asymmetricKeyDetails is supported in Node 15+
        secretOrPrivateKey.asymmetricKeyDetails.modulusLength < 2048) {
          return failure(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
        }
      }
      if (typeof payload === "undefined") {
        return failure(new Error("payload is required"));
      } else if (isObjectPayload) {
        try {
          validatePayload(payload);
        } catch (error) {
          return failure(error);
        }
        if (!options.mutatePayload) {
          payload = Object.assign({}, payload);
        }
      } else {
        const invalid_options = options_for_objects.filter(function(opt) {
          return typeof options[opt] !== "undefined";
        });
        if (invalid_options.length > 0) {
          return failure(new Error("invalid " + invalid_options.join(",") + " option for " + typeof payload + " payload"));
        }
      }
      if (typeof payload.exp !== "undefined" && typeof options.expiresIn !== "undefined") {
        return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
      }
      if (typeof payload.nbf !== "undefined" && typeof options.notBefore !== "undefined") {
        return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
      }
      try {
        validateOptions(options);
      } catch (error) {
        return failure(error);
      }
      if (!options.allowInvalidAsymmetricKeyTypes) {
        try {
          validateAsymmetricKey(header.alg, secretOrPrivateKey);
        } catch (error) {
          return failure(error);
        }
      }
      const timestamp = payload.iat || Math.floor(Date.now() / 1e3);
      if (options.noTimestamp) {
        delete payload.iat;
      } else if (isObjectPayload) {
        payload.iat = timestamp;
      }
      if (typeof options.notBefore !== "undefined") {
        try {
          payload.nbf = timespan(options.notBefore, timestamp);
        } catch (err) {
          return failure(err);
        }
        if (typeof payload.nbf === "undefined") {
          return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
      }
      if (typeof options.expiresIn !== "undefined" && typeof payload === "object") {
        try {
          payload.exp = timespan(options.expiresIn, timestamp);
        } catch (err) {
          return failure(err);
        }
        if (typeof payload.exp === "undefined") {
          return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
      }
      Object.keys(options_to_payload).forEach(function(key) {
        const claim = options_to_payload[key];
        if (typeof options[key] !== "undefined") {
          if (typeof payload[claim] !== "undefined") {
            return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
          }
          payload[claim] = options[key];
        }
      });
      const encoding = options.encoding || "utf8";
      if (typeof callback === "function") {
        callback = callback && once(callback);
        jws.createSign({
          header,
          privateKey: secretOrPrivateKey,
          payload,
          encoding
        }).once("error", callback).once("done", function(signature) {
          if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
            return callback(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
          }
          callback(null, signature);
        });
      } else {
        let signature = jws.sign({ header, payload, secret: secretOrPrivateKey, encoding });
        if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
          throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`);
        }
        return signature;
      }
    };
  }
});

// node_modules/jsonwebtoken/index.js
var require_jsonwebtoken = __commonJS({
  "node_modules/jsonwebtoken/index.js"(exports, module2) {
    "use strict";
    module2.exports = {
      decode: require_decode(),
      verify: require_verify(),
      sign: require_sign(),
      JsonWebTokenError: require_JsonWebTokenError(),
      NotBeforeError: require_NotBeforeError(),
      TokenExpiredError: require_TokenExpiredError()
    };
  }
});

// src/app/auth/AuhtService.ts
var AuhtService_exports = {};
__export(AuhtService_exports, {
  AuthService: () => AuthService
});
module.exports = __toCommonJS(AuhtService_exports);

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

// src/utils/Crypt.ts
var import_bcrypt = __toESM(require_bcrypt());
var Crypt = class {
  static encrypt(text) {
    return import_bcrypt.default.hashSync(text, 8);
  }
  static compare(text, hash) {
    return import_bcrypt.default.compareSync(text, hash);
  }
};

// src/app/auth/AuhtService.ts
var import_jsonwebtoken = __toESM(require_jsonwebtoken());
var AuthService = class {
  constructor(repository) {
    this.repository = repository;
  }
  login(data) {
    return __async(this, null, function* () {
      const userAlreadyExists = yield this.repository.findByEmail(data.email);
      if (!userAlreadyExists) {
        return CommonError.build(
          "invalid email or password ",
          STATUS_CODE.BAD_REQUEST
        );
      }
      const passwordIsValid = Crypt.compare(
        data.password,
        userAlreadyExists.password
      );
      if (!passwordIsValid) {
        return CommonError.build(
          "invalid email or password ",
          STATUS_CODE.BAD_REQUEST
        );
      }
      const payload = __spreadValues({}, userAlreadyExists);
      const secretKey = process.env.JWT_SECRET_KEY;
      const options = { expiresIn: "90m" };
      const token = import_jsonwebtoken.default.sign(payload, secretKey, options);
      return { token, user: userAlreadyExists };
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthService
});
/*! Bundled license information:

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
