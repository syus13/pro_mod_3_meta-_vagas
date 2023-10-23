"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve2, reject) => {
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
    var step = (x) => x.done ? resolve2(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/pretty-format/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/pretty-format/node_modules/ansi-styles/index.js"(exports2, module2) {
    "use strict";
    var ANSI_BACKGROUND_OFFSET = 10;
    var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
    var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles2 = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles2.color.gray = styles2.color.blackBright;
      styles2.bgColor.bgGray = styles2.bgColor.bgBlackBright;
      styles2.color.grey = styles2.color.blackBright;
      styles2.bgColor.bgGrey = styles2.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles2)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles2[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles2[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles2, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles2, "codes", {
        value: codes,
        enumerable: false
      });
      styles2.color.close = "\x1B[39m";
      styles2.bgColor.close = "\x1B[49m";
      styles2.color.ansi256 = wrapAnsi256();
      styles2.color.ansi16m = wrapAnsi16m();
      styles2.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
      styles2.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
      Object.defineProperties(styles2, {
        rgbToAnsi256: {
          value: (red, green, blue) => {
            if (red === green && green === blue) {
              if (red < 8) {
                return 16;
              }
              if (red > 248) {
                return 231;
              }
              return Math.round((red - 8) / 247 * 24) + 232;
            }
            return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
          },
          enumerable: false
        },
        hexToRgb: {
          value: (hex2) => {
            const matches = new RegExp("(?<colorString>[a-f\\d]{6}|[a-f\\d]{3})", "i").exec(hex2.toString(16));
            if (!matches) {
              return [0, 0, 0];
            }
            let { colorString } = matches.groups;
            if (colorString.length === 3) {
              colorString = colorString.split("").map((character) => character + character).join("");
            }
            const integer = Number.parseInt(colorString, 16);
            return [
              integer >> 16 & 255,
              integer >> 8 & 255,
              integer & 255
            ];
          },
          enumerable: false
        },
        hexToAnsi256: {
          value: (hex2) => styles2.rgbToAnsi256(...styles2.hexToRgb(hex2)),
          enumerable: false
        }
      });
      return styles2;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/pretty-format/build/collections.js
var require_collections = __commonJS({
  "node_modules/pretty-format/build/collections.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.printIteratorEntries = printIteratorEntries;
    exports2.printIteratorValues = printIteratorValues;
    exports2.printListItems = printListItems;
    exports2.printObjectProperties = printObjectProperties;
    var getKeysOfEnumerableProperties = (object2, compareKeys) => {
      const rawKeys = Object.keys(object2);
      const keys2 = compareKeys !== null ? rawKeys.sort(compareKeys) : rawKeys;
      if (Object.getOwnPropertySymbols) {
        Object.getOwnPropertySymbols(object2).forEach((symbol) => {
          if (Object.getOwnPropertyDescriptor(object2, symbol).enumerable) {
            keys2.push(symbol);
          }
        });
      }
      return keys2;
    };
    function printIteratorEntries(iterator, config2, indentation, depth, refs, printer, separator = ": ") {
      let result = "";
      let width = 0;
      let current = iterator.next();
      if (!current.done) {
        result += config2.spacingOuter;
        const indentationNext = indentation + config2.indent;
        while (!current.done) {
          result += indentationNext;
          if (width++ === config2.maxWidth) {
            result += "\u2026";
            break;
          }
          const name = printer(
            current.value[0],
            config2,
            indentationNext,
            depth,
            refs
          );
          const value = printer(
            current.value[1],
            config2,
            indentationNext,
            depth,
            refs
          );
          result += name + separator + value;
          current = iterator.next();
          if (!current.done) {
            result += `,${config2.spacingInner}`;
          } else if (!config2.min) {
            result += ",";
          }
        }
        result += config2.spacingOuter + indentation;
      }
      return result;
    }
    function printIteratorValues(iterator, config2, indentation, depth, refs, printer) {
      let result = "";
      let width = 0;
      let current = iterator.next();
      if (!current.done) {
        result += config2.spacingOuter;
        const indentationNext = indentation + config2.indent;
        while (!current.done) {
          result += indentationNext;
          if (width++ === config2.maxWidth) {
            result += "\u2026";
            break;
          }
          result += printer(current.value, config2, indentationNext, depth, refs);
          current = iterator.next();
          if (!current.done) {
            result += `,${config2.spacingInner}`;
          } else if (!config2.min) {
            result += ",";
          }
        }
        result += config2.spacingOuter + indentation;
      }
      return result;
    }
    function printListItems(list, config2, indentation, depth, refs, printer) {
      let result = "";
      if (list.length) {
        result += config2.spacingOuter;
        const indentationNext = indentation + config2.indent;
        for (let i = 0; i < list.length; i++) {
          result += indentationNext;
          if (i === config2.maxWidth) {
            result += "\u2026";
            break;
          }
          if (i in list) {
            result += printer(list[i], config2, indentationNext, depth, refs);
          }
          if (i < list.length - 1) {
            result += `,${config2.spacingInner}`;
          } else if (!config2.min) {
            result += ",";
          }
        }
        result += config2.spacingOuter + indentation;
      }
      return result;
    }
    function printObjectProperties(val, config2, indentation, depth, refs, printer) {
      let result = "";
      const keys2 = getKeysOfEnumerableProperties(val, config2.compareKeys);
      if (keys2.length) {
        result += config2.spacingOuter;
        const indentationNext = indentation + config2.indent;
        for (let i = 0; i < keys2.length; i++) {
          const key = keys2[i];
          const name = printer(key, config2, indentationNext, depth, refs);
          const value = printer(val[key], config2, indentationNext, depth, refs);
          result += `${indentationNext + name}: ${value}`;
          if (i < keys2.length - 1) {
            result += `,${config2.spacingInner}`;
          } else if (!config2.min) {
            result += ",";
          }
        }
        result += config2.spacingOuter + indentation;
      }
      return result;
    }
  }
});

// node_modules/pretty-format/build/plugins/AsymmetricMatcher.js
var require_AsymmetricMatcher = __commonJS({
  "node_modules/pretty-format/build/plugins/AsymmetricMatcher.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.test = exports2.serialize = exports2.default = void 0;
    var _collections = require_collections();
    var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
    var asymmetricMatcher = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("jest.asymmetricMatcher") : 1267621;
    var SPACE = " ";
    var serialize2 = (val, config2, indentation, depth, refs, printer) => {
      const stringedValue = val.toString();
      if (stringedValue === "ArrayContaining" || stringedValue === "ArrayNotContaining") {
        if (++depth > config2.maxDepth) {
          return `[${stringedValue}]`;
        }
        return `${stringedValue + SPACE}[${(0, _collections.printListItems)(
          val.sample,
          config2,
          indentation,
          depth,
          refs,
          printer
        )}]`;
      }
      if (stringedValue === "ObjectContaining" || stringedValue === "ObjectNotContaining") {
        if (++depth > config2.maxDepth) {
          return `[${stringedValue}]`;
        }
        return `${stringedValue + SPACE}{${(0, _collections.printObjectProperties)(
          val.sample,
          config2,
          indentation,
          depth,
          refs,
          printer
        )}}`;
      }
      if (stringedValue === "StringMatching" || stringedValue === "StringNotMatching") {
        return stringedValue + SPACE + printer(val.sample, config2, indentation, depth, refs);
      }
      if (stringedValue === "StringContaining" || stringedValue === "StringNotContaining") {
        return stringedValue + SPACE + printer(val.sample, config2, indentation, depth, refs);
      }
      if (typeof val.toAsymmetricMatcher !== "function") {
        throw new Error(
          `Asymmetric matcher ${val.constructor.name} does not implement toAsymmetricMatcher()`
        );
      }
      return val.toAsymmetricMatcher();
    };
    exports2.serialize = serialize2;
    var test3 = (val) => val && val.$$typeof === asymmetricMatcher;
    exports2.test = test3;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports2.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/DOMCollection.js
var require_DOMCollection = __commonJS({
  "node_modules/pretty-format/build/plugins/DOMCollection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.test = exports2.serialize = exports2.default = void 0;
    var _collections = require_collections();
    var SPACE = " ";
    var OBJECT_NAMES = ["DOMStringMap", "NamedNodeMap"];
    var ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;
    var testName = (name) => OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name);
    var test3 = (val) => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
    exports2.test = test3;
    var isNamedNodeMap = (collection) => collection.constructor.name === "NamedNodeMap";
    var serialize2 = (collection, config2, indentation, depth, refs, printer) => {
      const name = collection.constructor.name;
      if (++depth > config2.maxDepth) {
        return `[${name}]`;
      }
      return (config2.min ? "" : name + SPACE) + (OBJECT_NAMES.indexOf(name) !== -1 ? `{${(0, _collections.printObjectProperties)(
        isNamedNodeMap(collection) ? Array.from(collection).reduce((props, attribute) => {
          props[attribute.name] = attribute.value;
          return props;
        }, {}) : __spreadValues({}, collection),
        config2,
        indentation,
        depth,
        refs,
        printer
      )}}` : `[${(0, _collections.printListItems)(
        Array.from(collection),
        config2,
        indentation,
        depth,
        refs,
        printer
      )}]`);
    };
    exports2.serialize = serialize2;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports2.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/lib/escapeHTML.js
var require_escapeHTML = __commonJS({
  "node_modules/pretty-format/build/plugins/lib/escapeHTML.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = escapeHTML;
    function escapeHTML(str) {
      return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }
});

// node_modules/pretty-format/build/plugins/lib/markup.js
var require_markup = __commonJS({
  "node_modules/pretty-format/build/plugins/lib/markup.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.printText = exports2.printProps = exports2.printElementAsLeaf = exports2.printElement = exports2.printComment = exports2.printChildren = void 0;
    var _escapeHTML = _interopRequireDefault(require_escapeHTML());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var printProps = (keys2, props, config2, indentation, depth, refs, printer) => {
      const indentationNext = indentation + config2.indent;
      const colors = config2.colors;
      return keys2.map((key) => {
        const value = props[key];
        let printed = printer(value, config2, indentationNext, depth, refs);
        if (typeof value !== "string") {
          if (printed.indexOf("\n") !== -1) {
            printed = config2.spacingOuter + indentationNext + printed + config2.spacingOuter + indentation;
          }
          printed = `{${printed}}`;
        }
        return `${config2.spacingInner + indentation + colors.prop.open + key + colors.prop.close}=${colors.value.open}${printed}${colors.value.close}`;
      }).join("");
    };
    exports2.printProps = printProps;
    var printChildren = (children, config2, indentation, depth, refs, printer) => children.map(
      (child) => config2.spacingOuter + indentation + (typeof child === "string" ? printText(child, config2) : printer(child, config2, indentation, depth, refs))
    ).join("");
    exports2.printChildren = printChildren;
    var printText = (text, config2) => {
      const contentColor = config2.colors.content;
      return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
    };
    exports2.printText = printText;
    var printComment = (comment, config2) => {
      const commentColor = config2.colors.comment;
      return `${commentColor.open}<!--${(0, _escapeHTML.default)(comment)}-->${commentColor.close}`;
    };
    exports2.printComment = printComment;
    var printElement = (type2, printedProps, printedChildren, config2, indentation) => {
      const tagColor = config2.colors.tag;
      return `${tagColor.open}<${type2}${printedProps && tagColor.close + printedProps + config2.spacingOuter + indentation + tagColor.open}${printedChildren ? `>${tagColor.close}${printedChildren}${config2.spacingOuter}${indentation}${tagColor.open}</${type2}` : `${printedProps && !config2.min ? "" : " "}/`}>${tagColor.close}`;
    };
    exports2.printElement = printElement;
    var printElementAsLeaf = (type2, config2) => {
      const tagColor = config2.colors.tag;
      return `${tagColor.open}<${type2}${tagColor.close} \u2026${tagColor.open} />${tagColor.close}`;
    };
    exports2.printElementAsLeaf = printElementAsLeaf;
  }
});

// node_modules/pretty-format/build/plugins/DOMElement.js
var require_DOMElement = __commonJS({
  "node_modules/pretty-format/build/plugins/DOMElement.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.test = exports2.serialize = exports2.default = void 0;
    var _markup = require_markup();
    var ELEMENT_NODE = 1;
    var TEXT_NODE = 3;
    var COMMENT_NODE = 8;
    var FRAGMENT_NODE = 11;
    var ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
    var testHasAttribute = (val) => {
      try {
        return typeof val.hasAttribute === "function" && val.hasAttribute("is");
      } catch (e) {
        return false;
      }
    };
    var testNode = (val) => {
      const constructorName = val.constructor.name;
      const { nodeType, tagName } = val;
      const isCustomElement = typeof tagName === "string" && tagName.includes("-") || testHasAttribute(val);
      return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
    };
    var test3 = (val) => {
      var _a2;
      return ((_a2 = val == null ? void 0 : val.constructor) == null ? void 0 : _a2.name) && testNode(val);
    };
    exports2.test = test3;
    function nodeIsText(node) {
      return node.nodeType === TEXT_NODE;
    }
    function nodeIsComment(node) {
      return node.nodeType === COMMENT_NODE;
    }
    function nodeIsFragment(node) {
      return node.nodeType === FRAGMENT_NODE;
    }
    var serialize2 = (node, config2, indentation, depth, refs, printer) => {
      if (nodeIsText(node)) {
        return (0, _markup.printText)(node.data, config2);
      }
      if (nodeIsComment(node)) {
        return (0, _markup.printComment)(node.data, config2);
      }
      const type2 = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
      if (++depth > config2.maxDepth) {
        return (0, _markup.printElementAsLeaf)(type2, config2);
      }
      return (0, _markup.printElement)(
        type2,
        (0, _markup.printProps)(
          nodeIsFragment(node) ? [] : Array.from(node.attributes, (attr) => attr.name).sort(),
          nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => {
            props[attribute.name] = attribute.value;
            return props;
          }, {}),
          config2,
          indentation + config2.indent,
          depth,
          refs,
          printer
        ),
        (0, _markup.printChildren)(
          Array.prototype.slice.call(node.childNodes || node.children),
          config2,
          indentation + config2.indent,
          depth,
          refs,
          printer
        ),
        config2,
        indentation
      );
    };
    exports2.serialize = serialize2;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports2.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/Immutable.js
var require_Immutable = __commonJS({
  "node_modules/pretty-format/build/plugins/Immutable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.test = exports2.serialize = exports2.default = void 0;
    var _collections = require_collections();
    var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
    var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
    var IS_KEYED_SENTINEL2 = "@@__IMMUTABLE_KEYED__@@";
    var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
    var IS_ORDERED_SENTINEL2 = "@@__IMMUTABLE_ORDERED__@@";
    var IS_RECORD_SENTINEL = "@@__IMMUTABLE_RECORD__@@";
    var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
    var IS_SET_SENTINEL2 = "@@__IMMUTABLE_SET__@@";
    var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
    var getImmutableName = (name) => `Immutable.${name}`;
    var printAsLeaf = (name) => `[${name}]`;
    var SPACE = " ";
    var LAZY = "\u2026";
    var printImmutableEntries = (val, config2, indentation, depth, refs, printer, type2) => ++depth > config2.maxDepth ? printAsLeaf(getImmutableName(type2)) : `${getImmutableName(type2) + SPACE}{${(0, _collections.printIteratorEntries)(
      val.entries(),
      config2,
      indentation,
      depth,
      refs,
      printer
    )}}`;
    function getRecordEntries(val) {
      let i = 0;
      return {
        next() {
          if (i < val._keys.length) {
            const key = val._keys[i++];
            return {
              done: false,
              value: [key, val.get(key)]
            };
          }
          return {
            done: true,
            value: void 0
          };
        }
      };
    }
    var printImmutableRecord = (val, config2, indentation, depth, refs, printer) => {
      const name = getImmutableName(val._name || "Record");
      return ++depth > config2.maxDepth ? printAsLeaf(name) : `${name + SPACE}{${(0, _collections.printIteratorEntries)(
        getRecordEntries(val),
        config2,
        indentation,
        depth,
        refs,
        printer
      )}}`;
    };
    var printImmutableSeq = (val, config2, indentation, depth, refs, printer) => {
      const name = getImmutableName("Seq");
      if (++depth > config2.maxDepth) {
        return printAsLeaf(name);
      }
      if (val[IS_KEYED_SENTINEL2]) {
        return `${name + SPACE}{${// from Immutable collection of entries or from ECMAScript object
        val._iter || val._object ? (0, _collections.printIteratorEntries)(
          val.entries(),
          config2,
          indentation,
          depth,
          refs,
          printer
        ) : LAZY}}`;
      }
      return `${name + SPACE}[${val._iter || // from Immutable collection of values
      val._array || // from ECMAScript array
      val._collection || // from ECMAScript collection in immutable v4
      val._iterable ? (0, _collections.printIteratorValues)(
        val.values(),
        config2,
        indentation,
        depth,
        refs,
        printer
      ) : LAZY}]`;
    };
    var printImmutableValues = (val, config2, indentation, depth, refs, printer, type2) => ++depth > config2.maxDepth ? printAsLeaf(getImmutableName(type2)) : `${getImmutableName(type2) + SPACE}[${(0, _collections.printIteratorValues)(
      val.values(),
      config2,
      indentation,
      depth,
      refs,
      printer
    )}]`;
    var serialize2 = (val, config2, indentation, depth, refs, printer) => {
      if (val[IS_MAP_SENTINEL]) {
        return printImmutableEntries(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer,
          val[IS_ORDERED_SENTINEL2] ? "OrderedMap" : "Map"
        );
      }
      if (val[IS_LIST_SENTINEL]) {
        return printImmutableValues(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer,
          "List"
        );
      }
      if (val[IS_SET_SENTINEL2]) {
        return printImmutableValues(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer,
          val[IS_ORDERED_SENTINEL2] ? "OrderedSet" : "Set"
        );
      }
      if (val[IS_STACK_SENTINEL]) {
        return printImmutableValues(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer,
          "Stack"
        );
      }
      if (val[IS_SEQ_SENTINEL]) {
        return printImmutableSeq(val, config2, indentation, depth, refs, printer);
      }
      return printImmutableRecord(val, config2, indentation, depth, refs, printer);
    };
    exports2.serialize = serialize2;
    var test3 = (val) => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
    exports2.test = test3;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports2.default = _default;
  }
});

// node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "node_modules/react-is/cjs/react-is.production.min.js"(exports2) {
    "use strict";
    var b2 = Symbol.for("react.element");
    var c = Symbol.for("react.portal");
    var d2 = Symbol.for("react.fragment");
    var e = Symbol.for("react.strict_mode");
    var f = Symbol.for("react.profiler");
    var g = Symbol.for("react.provider");
    var h = Symbol.for("react.context");
    var k = Symbol.for("react.server_context");
    var l = Symbol.for("react.forward_ref");
    var m2 = Symbol.for("react.suspense");
    var n2 = Symbol.for("react.suspense_list");
    var p2 = Symbol.for("react.memo");
    var q = Symbol.for("react.lazy");
    var t = Symbol.for("react.offscreen");
    var u2;
    u2 = Symbol.for("react.module.reference");
    function v2(a) {
      if ("object" === typeof a && null !== a) {
        var r = a.$$typeof;
        switch (r) {
          case b2:
            switch (a = a.type, a) {
              case d2:
              case f:
              case e:
              case m2:
              case n2:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case h:
                  case l:
                  case q:
                  case p2:
                  case g:
                    return a;
                  default:
                    return r;
                }
            }
          case c:
            return r;
        }
      }
    }
    exports2.ContextConsumer = h;
    exports2.ContextProvider = g;
    exports2.Element = b2;
    exports2.ForwardRef = l;
    exports2.Fragment = d2;
    exports2.Lazy = q;
    exports2.Memo = p2;
    exports2.Portal = c;
    exports2.Profiler = f;
    exports2.StrictMode = e;
    exports2.Suspense = m2;
    exports2.SuspenseList = n2;
    exports2.isAsyncMode = function() {
      return false;
    };
    exports2.isConcurrentMode = function() {
      return false;
    };
    exports2.isContextConsumer = function(a) {
      return v2(a) === h;
    };
    exports2.isContextProvider = function(a) {
      return v2(a) === g;
    };
    exports2.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === b2;
    };
    exports2.isForwardRef = function(a) {
      return v2(a) === l;
    };
    exports2.isFragment = function(a) {
      return v2(a) === d2;
    };
    exports2.isLazy = function(a) {
      return v2(a) === q;
    };
    exports2.isMemo = function(a) {
      return v2(a) === p2;
    };
    exports2.isPortal = function(a) {
      return v2(a) === c;
    };
    exports2.isProfiler = function(a) {
      return v2(a) === f;
    };
    exports2.isStrictMode = function(a) {
      return v2(a) === e;
    };
    exports2.isSuspense = function(a) {
      return v2(a) === m2;
    };
    exports2.isSuspenseList = function(a) {
      return v2(a) === n2;
    };
    exports2.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === d2 || a === f || a === e || a === m2 || a === n2 || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p2 || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u2 || void 0 !== a.getModuleId) ? true : false;
    };
    exports2.typeOf = v2;
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type2) {
          if (typeof type2 === "string" || typeof type2 === "function") {
            return true;
          }
          if (type2 === REACT_FRAGMENT_TYPE || type2 === REACT_PROFILER_TYPE || enableDebugTracing || type2 === REACT_STRICT_MODE_TYPE || type2 === REACT_SUSPENSE_TYPE || type2 === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type2 === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type2 === "object" && type2 !== null) {
            if (type2.$$typeof === REACT_LAZY_TYPE || type2.$$typeof === REACT_MEMO_TYPE || type2.$$typeof === REACT_PROVIDER_TYPE || type2.$$typeof === REACT_CONTEXT_TYPE || type2.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type2.$$typeof === REACT_MODULE_REFERENCE || type2.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf3(object2) {
          if (typeof object2 === "object" && object2 !== null) {
            var $$typeof = object2.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type2 = object2.type;
                switch (type2) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type2;
                  default:
                    var $$typeofType = type2 && type2.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object2) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object2) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object2) {
          return typeOf3(object2) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object2) {
          return typeOf3(object2) === REACT_PROVIDER_TYPE;
        }
        function isElement(object2) {
          return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object2) {
          return typeOf3(object2) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object2) {
          return typeOf3(object2) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object2) {
          return typeOf3(object2) === REACT_LAZY_TYPE;
        }
        function isMemo(object2) {
          return typeOf3(object2) === REACT_MEMO_TYPE;
        }
        function isPortal(object2) {
          return typeOf3(object2) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object2) {
          return typeOf3(object2) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object2) {
          return typeOf3(object2) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object2) {
          return typeOf3(object2) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object2) {
          return typeOf3(object2) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports2.ContextConsumer = ContextConsumer;
        exports2.ContextProvider = ContextProvider;
        exports2.Element = Element2;
        exports2.ForwardRef = ForwardRef;
        exports2.Fragment = Fragment;
        exports2.Lazy = Lazy;
        exports2.Memo = Memo;
        exports2.Portal = Portal;
        exports2.Profiler = Profiler;
        exports2.StrictMode = StrictMode;
        exports2.Suspense = Suspense;
        exports2.SuspenseList = SuspenseList;
        exports2.isAsyncMode = isAsyncMode;
        exports2.isConcurrentMode = isConcurrentMode;
        exports2.isContextConsumer = isContextConsumer;
        exports2.isContextProvider = isContextProvider;
        exports2.isElement = isElement;
        exports2.isForwardRef = isForwardRef;
        exports2.isFragment = isFragment;
        exports2.isLazy = isLazy;
        exports2.isMemo = isMemo;
        exports2.isPortal = isPortal;
        exports2.isProfiler = isProfiler;
        exports2.isStrictMode = isStrictMode;
        exports2.isSuspense = isSuspense;
        exports2.isSuspenseList = isSuspenseList;
        exports2.isValidElementType = isValidElementType;
        exports2.typeOf = typeOf3;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_is_production_min();
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// node_modules/pretty-format/build/plugins/ReactElement.js
var require_ReactElement = __commonJS({
  "node_modules/pretty-format/build/plugins/ReactElement.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.test = exports2.serialize = exports2.default = void 0;
    var ReactIs = _interopRequireWildcard(require_react_is());
    var _markup = require_markup();
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache2 = _getRequireWildcardCache(nodeInterop);
      if (cache2 && cache2.has(obj)) {
        return cache2.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache2) {
        cache2.set(obj, newObj);
      }
      return newObj;
    }
    var getChildren = (arg, children = []) => {
      if (Array.isArray(arg)) {
        arg.forEach((item) => {
          getChildren(item, children);
        });
      } else if (arg != null && arg !== false) {
        children.push(arg);
      }
      return children;
    };
    var getType3 = (element) => {
      const type2 = element.type;
      if (typeof type2 === "string") {
        return type2;
      }
      if (typeof type2 === "function") {
        return type2.displayName || type2.name || "Unknown";
      }
      if (ReactIs.isFragment(element)) {
        return "React.Fragment";
      }
      if (ReactIs.isSuspense(element)) {
        return "React.Suspense";
      }
      if (typeof type2 === "object" && type2 !== null) {
        if (ReactIs.isContextProvider(element)) {
          return "Context.Provider";
        }
        if (ReactIs.isContextConsumer(element)) {
          return "Context.Consumer";
        }
        if (ReactIs.isForwardRef(element)) {
          if (type2.displayName) {
            return type2.displayName;
          }
          const functionName3 = type2.render.displayName || type2.render.name || "";
          return functionName3 !== "" ? `ForwardRef(${functionName3})` : "ForwardRef";
        }
        if (ReactIs.isMemo(element)) {
          const functionName3 = type2.displayName || type2.type.displayName || type2.type.name || "";
          return functionName3 !== "" ? `Memo(${functionName3})` : "Memo";
        }
      }
      return "UNDEFINED";
    };
    var getPropKeys = (element) => {
      const { props } = element;
      return Object.keys(props).filter((key) => key !== "children" && props[key] !== void 0).sort();
    };
    var serialize2 = (element, config2, indentation, depth, refs, printer) => ++depth > config2.maxDepth ? (0, _markup.printElementAsLeaf)(getType3(element), config2) : (0, _markup.printElement)(
      getType3(element),
      (0, _markup.printProps)(
        getPropKeys(element),
        element.props,
        config2,
        indentation + config2.indent,
        depth,
        refs,
        printer
      ),
      (0, _markup.printChildren)(
        getChildren(element.props.children),
        config2,
        indentation + config2.indent,
        depth,
        refs,
        printer
      ),
      config2,
      indentation
    );
    exports2.serialize = serialize2;
    var test3 = (val) => val != null && ReactIs.isElement(val);
    exports2.test = test3;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports2.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/ReactTestComponent.js
var require_ReactTestComponent = __commonJS({
  "node_modules/pretty-format/build/plugins/ReactTestComponent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.test = exports2.serialize = exports2.default = void 0;
    var _markup = require_markup();
    var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
    var testSymbol = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("react.test.json") : 245830487;
    var getPropKeys = (object2) => {
      const { props } = object2;
      return props ? Object.keys(props).filter((key) => props[key] !== void 0).sort() : [];
    };
    var serialize2 = (object2, config2, indentation, depth, refs, printer) => ++depth > config2.maxDepth ? (0, _markup.printElementAsLeaf)(object2.type, config2) : (0, _markup.printElement)(
      object2.type,
      object2.props ? (0, _markup.printProps)(
        getPropKeys(object2),
        object2.props,
        config2,
        indentation + config2.indent,
        depth,
        refs,
        printer
      ) : "",
      object2.children ? (0, _markup.printChildren)(
        object2.children,
        config2,
        indentation + config2.indent,
        depth,
        refs,
        printer
      ) : "",
      config2,
      indentation
    );
    exports2.serialize = serialize2;
    var test3 = (val) => val && val.$$typeof === testSymbol;
    exports2.test = test3;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports2.default = _default;
  }
});

// node_modules/pretty-format/build/index.js
var require_build = __commonJS({
  "node_modules/pretty-format/build/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = exports2.DEFAULT_OPTIONS = void 0;
    exports2.format = format4;
    exports2.plugins = void 0;
    var _ansiStyles = _interopRequireDefault(require_ansi_styles());
    var _collections = require_collections();
    var _AsymmetricMatcher = _interopRequireDefault(
      require_AsymmetricMatcher()
    );
    var _DOMCollection = _interopRequireDefault(require_DOMCollection());
    var _DOMElement = _interopRequireDefault(require_DOMElement());
    var _Immutable = _interopRequireDefault(require_Immutable());
    var _ReactElement = _interopRequireDefault(require_ReactElement());
    var _ReactTestComponent = _interopRequireDefault(
      require_ReactTestComponent()
    );
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var toString3 = Object.prototype.toString;
    var toISOString = Date.prototype.toISOString;
    var errorToString = Error.prototype.toString;
    var regExpToString = RegExp.prototype.toString;
    var getConstructorName = (val) => typeof val.constructor === "function" && val.constructor.name || "Object";
    var isWindow = (val) => typeof window !== "undefined" && val === window;
    var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
    var NEWLINE_REGEXP = /\n/gi;
    var PrettyFormatPluginError = class extends Error {
      constructor(message, stack) {
        super(message);
        this.stack = stack;
        this.name = this.constructor.name;
      }
    };
    function isToStringedArrayType(toStringed) {
      return toStringed === "[object Array]" || toStringed === "[object ArrayBuffer]" || toStringed === "[object DataView]" || toStringed === "[object Float32Array]" || toStringed === "[object Float64Array]" || toStringed === "[object Int8Array]" || toStringed === "[object Int16Array]" || toStringed === "[object Int32Array]" || toStringed === "[object Uint8Array]" || toStringed === "[object Uint8ClampedArray]" || toStringed === "[object Uint16Array]" || toStringed === "[object Uint32Array]";
    }
    function printNumber(val) {
      return Object.is(val, -0) ? "-0" : String(val);
    }
    function printBigInt(val) {
      return String(`${val}n`);
    }
    function printFunction(val, printFunctionName2) {
      if (!printFunctionName2) {
        return "[Function]";
      }
      return `[Function ${val.name || "anonymous"}]`;
    }
    function printSymbol(val) {
      return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
    }
    function printError(val) {
      return `[${errorToString.call(val)}]`;
    }
    function printBasicValue(val, printFunctionName2, escapeRegex2, escapeString) {
      if (val === true || val === false) {
        return `${val}`;
      }
      if (val === void 0) {
        return "undefined";
      }
      if (val === null) {
        return "null";
      }
      const typeOf3 = typeof val;
      if (typeOf3 === "number") {
        return printNumber(val);
      }
      if (typeOf3 === "bigint") {
        return printBigInt(val);
      }
      if (typeOf3 === "string") {
        if (escapeString) {
          return `"${val.replace(/"|\\/g, "\\$&")}"`;
        }
        return `"${val}"`;
      }
      if (typeOf3 === "function") {
        return printFunction(val, printFunctionName2);
      }
      if (typeOf3 === "symbol") {
        return printSymbol(val);
      }
      const toStringed = toString3.call(val);
      if (toStringed === "[object WeakMap]") {
        return "WeakMap {}";
      }
      if (toStringed === "[object WeakSet]") {
        return "WeakSet {}";
      }
      if (toStringed === "[object Function]" || toStringed === "[object GeneratorFunction]") {
        return printFunction(val, printFunctionName2);
      }
      if (toStringed === "[object Symbol]") {
        return printSymbol(val);
      }
      if (toStringed === "[object Date]") {
        return isNaN(+val) ? "Date { NaN }" : toISOString.call(val);
      }
      if (toStringed === "[object Error]") {
        return printError(val);
      }
      if (toStringed === "[object RegExp]") {
        if (escapeRegex2) {
          return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        return regExpToString.call(val);
      }
      if (val instanceof Error) {
        return printError(val);
      }
      return null;
    }
    function printComplexValue(val, config2, indentation, depth, refs, hasCalledToJSON) {
      if (refs.indexOf(val) !== -1) {
        return "[Circular]";
      }
      refs = refs.slice();
      refs.push(val);
      const hitMaxDepth = ++depth > config2.maxDepth;
      const min = config2.min;
      if (config2.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === "function" && !hasCalledToJSON) {
        return printer(val.toJSON(), config2, indentation, depth, refs, true);
      }
      const toStringed = toString3.call(val);
      if (toStringed === "[object Arguments]") {
        return hitMaxDepth ? "[Arguments]" : `${min ? "" : "Arguments "}[${(0, _collections.printListItems)(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer
        )}]`;
      }
      if (isToStringedArrayType(toStringed)) {
        return hitMaxDepth ? `[${val.constructor.name}]` : `${min ? "" : !config2.printBasicPrototype && val.constructor.name === "Array" ? "" : `${val.constructor.name} `}[${(0, _collections.printListItems)(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer
        )}]`;
      }
      if (toStringed === "[object Map]") {
        return hitMaxDepth ? "[Map]" : `Map {${(0, _collections.printIteratorEntries)(
          val.entries(),
          config2,
          indentation,
          depth,
          refs,
          printer,
          " => "
        )}}`;
      }
      if (toStringed === "[object Set]") {
        return hitMaxDepth ? "[Set]" : `Set {${(0, _collections.printIteratorValues)(
          val.values(),
          config2,
          indentation,
          depth,
          refs,
          printer
        )}}`;
      }
      return hitMaxDepth || isWindow(val) ? `[${getConstructorName(val)}]` : `${min ? "" : !config2.printBasicPrototype && getConstructorName(val) === "Object" ? "" : `${getConstructorName(val)} `}{${(0, _collections.printObjectProperties)(
        val,
        config2,
        indentation,
        depth,
        refs,
        printer
      )}}`;
    }
    function isNewPlugin(plugin2) {
      return plugin2.serialize != null;
    }
    function printPlugin(plugin2, val, config2, indentation, depth, refs) {
      let printed;
      try {
        printed = isNewPlugin(plugin2) ? plugin2.serialize(val, config2, indentation, depth, refs, printer) : plugin2.print(
          val,
          (valChild) => printer(valChild, config2, indentation, depth, refs),
          (str) => {
            const indentationNext = indentation + config2.indent;
            return indentationNext + str.replace(NEWLINE_REGEXP, `
${indentationNext}`);
          },
          {
            edgeSpacing: config2.spacingOuter,
            min: config2.min,
            spacing: config2.spacingInner
          },
          config2.colors
        );
      } catch (error) {
        throw new PrettyFormatPluginError(error.message, error.stack);
      }
      if (typeof printed !== "string") {
        throw new Error(
          `pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`
        );
      }
      return printed;
    }
    function findPlugin(plugins5, val) {
      for (let p2 = 0; p2 < plugins5.length; p2++) {
        try {
          if (plugins5[p2].test(val)) {
            return plugins5[p2];
          }
        } catch (error) {
          throw new PrettyFormatPluginError(error.message, error.stack);
        }
      }
      return null;
    }
    function printer(val, config2, indentation, depth, refs, hasCalledToJSON) {
      const plugin2 = findPlugin(config2.plugins, val);
      if (plugin2 !== null) {
        return printPlugin(plugin2, val, config2, indentation, depth, refs);
      }
      const basicResult = printBasicValue(
        val,
        config2.printFunctionName,
        config2.escapeRegex,
        config2.escapeString
      );
      if (basicResult !== null) {
        return basicResult;
      }
      return printComplexValue(
        val,
        config2,
        indentation,
        depth,
        refs,
        hasCalledToJSON
      );
    }
    var DEFAULT_THEME = {
      comment: "gray",
      content: "reset",
      prop: "yellow",
      tag: "cyan",
      value: "green"
    };
    var DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
    var toOptionsSubtype = (options) => options;
    var DEFAULT_OPTIONS = toOptionsSubtype({
      callToJSON: true,
      compareKeys: void 0,
      escapeRegex: false,
      escapeString: true,
      highlight: false,
      indent: 2,
      maxDepth: Infinity,
      maxWidth: Infinity,
      min: false,
      plugins: [],
      printBasicPrototype: true,
      printFunctionName: true,
      theme: DEFAULT_THEME
    });
    exports2.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
    function validateOptions(options) {
      Object.keys(options).forEach((key) => {
        if (!Object.prototype.hasOwnProperty.call(DEFAULT_OPTIONS, key)) {
          throw new Error(`pretty-format: Unknown option "${key}".`);
        }
      });
      if (options.min && options.indent !== void 0 && options.indent !== 0) {
        throw new Error(
          'pretty-format: Options "min" and "indent" cannot be used together.'
        );
      }
      if (options.theme !== void 0) {
        if (options.theme === null) {
          throw new Error('pretty-format: Option "theme" must not be null.');
        }
        if (typeof options.theme !== "object") {
          throw new Error(
            `pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`
          );
        }
      }
    }
    var getColorsHighlight = (options) => DEFAULT_THEME_KEYS.reduce((colors, key) => {
      const value = options.theme && options.theme[key] !== void 0 ? options.theme[key] : DEFAULT_THEME[key];
      const color = value && _ansiStyles.default[value];
      if (color && typeof color.close === "string" && typeof color.open === "string") {
        colors[key] = color;
      } else {
        throw new Error(
          `pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`
        );
      }
      return colors;
    }, /* @__PURE__ */ Object.create(null));
    var getColorsEmpty = () => DEFAULT_THEME_KEYS.reduce((colors, key) => {
      colors[key] = {
        close: "",
        open: ""
      };
      return colors;
    }, /* @__PURE__ */ Object.create(null));
    var getPrintFunctionName = (options) => {
      var _a2;
      return (_a2 = options == null ? void 0 : options.printFunctionName) != null ? _a2 : DEFAULT_OPTIONS.printFunctionName;
    };
    var getEscapeRegex = (options) => {
      var _a2;
      return (_a2 = options == null ? void 0 : options.escapeRegex) != null ? _a2 : DEFAULT_OPTIONS.escapeRegex;
    };
    var getEscapeString = (options) => {
      var _a2;
      return (_a2 = options == null ? void 0 : options.escapeString) != null ? _a2 : DEFAULT_OPTIONS.escapeString;
    };
    var getConfig = (options) => {
      var _a2, _b, _c, _d, _e, _f, _g;
      return {
        callToJSON: (_a2 = options == null ? void 0 : options.callToJSON) != null ? _a2 : DEFAULT_OPTIONS.callToJSON,
        colors: (options == null ? void 0 : options.highlight) ? getColorsHighlight(options) : getColorsEmpty(),
        compareKeys: typeof (options == null ? void 0 : options.compareKeys) === "function" || (options == null ? void 0 : options.compareKeys) === null ? options.compareKeys : DEFAULT_OPTIONS.compareKeys,
        escapeRegex: getEscapeRegex(options),
        escapeString: getEscapeString(options),
        indent: (options == null ? void 0 : options.min) ? "" : createIndent((_b = options == null ? void 0 : options.indent) != null ? _b : DEFAULT_OPTIONS.indent),
        maxDepth: (_c = options == null ? void 0 : options.maxDepth) != null ? _c : DEFAULT_OPTIONS.maxDepth,
        maxWidth: (_d = options == null ? void 0 : options.maxWidth) != null ? _d : DEFAULT_OPTIONS.maxWidth,
        min: (_e = options == null ? void 0 : options.min) != null ? _e : DEFAULT_OPTIONS.min,
        plugins: (_f = options == null ? void 0 : options.plugins) != null ? _f : DEFAULT_OPTIONS.plugins,
        printBasicPrototype: (_g = options == null ? void 0 : options.printBasicPrototype) != null ? _g : true,
        printFunctionName: getPrintFunctionName(options),
        spacingInner: (options == null ? void 0 : options.min) ? " " : "\n",
        spacingOuter: (options == null ? void 0 : options.min) ? "" : "\n"
      };
    };
    function createIndent(indent) {
      return new Array(indent + 1).join(" ");
    }
    function format4(val, options) {
      if (options) {
        validateOptions(options);
        if (options.plugins) {
          const plugin2 = findPlugin(options.plugins, val);
          if (plugin2 !== null) {
            return printPlugin(plugin2, val, getConfig(options), "", 0, []);
          }
        }
      }
      const basicResult = printBasicValue(
        val,
        getPrintFunctionName(options),
        getEscapeRegex(options),
        getEscapeString(options)
      );
      if (basicResult !== null) {
        return basicResult;
      }
      return printComplexValue(val, getConfig(options), "", 0, []);
    }
    var plugins4 = {
      AsymmetricMatcher: _AsymmetricMatcher.default,
      DOMCollection: _DOMCollection.default,
      DOMElement: _DOMElement.default,
      Immutable: _Immutable.default,
      ReactElement: _ReactElement.default,
      ReactTestComponent: _ReactTestComponent.default
    };
    exports2.plugins = plugins4;
    var _default = format4;
    exports2.default = _default;
  }
});

// node_modules/loupe/lib/helpers.js
function colorise(value, styleType) {
  const color = ansiColors[styles[styleType]] || ansiColors[styleType];
  if (!color) {
    return String(value);
  }
  return `\x1B[${color[0]}m${String(value)}\x1B[${color[1]}m`;
}
function normaliseOptions({
  showHidden = false,
  depth = 2,
  colors = false,
  customInspect = true,
  showProxy = false,
  maxArrayLength = Infinity,
  breakLength = Infinity,
  seen = [],
  // eslint-disable-next-line no-shadow
  truncate: truncate2 = Infinity,
  stylize = String
} = {}) {
  const options = {
    showHidden: Boolean(showHidden),
    depth: Number(depth),
    colors: Boolean(colors),
    customInspect: Boolean(customInspect),
    showProxy: Boolean(showProxy),
    maxArrayLength: Number(maxArrayLength),
    breakLength: Number(breakLength),
    truncate: Number(truncate2),
    seen,
    stylize
  };
  if (options.colors) {
    options.stylize = colorise;
  }
  return options;
}
function truncate(string3, length, tail = truncator) {
  string3 = String(string3);
  const tailLength = tail.length;
  const stringLength = string3.length;
  if (tailLength > length && stringLength > tailLength) {
    return tail;
  }
  if (stringLength > length && stringLength > tailLength) {
    return `${string3.slice(0, length - tailLength)}${tail}`;
  }
  return string3;
}
function inspectList(list, options, inspectItem, separator = ", ") {
  inspectItem = inspectItem || options.inspect;
  const size = list.length;
  if (size === 0)
    return "";
  const originalLength = options.truncate;
  let output = "";
  let peek = "";
  let truncated = "";
  for (let i = 0; i < size; i += 1) {
    const last = i + 1 === list.length;
    const secondToLast = i + 2 === list.length;
    truncated = `${truncator}(${list.length - i})`;
    const value = list[i];
    options.truncate = originalLength - output.length - (last ? 0 : separator.length);
    const string3 = peek || inspectItem(value, options) + (last ? "" : separator);
    const nextLength = output.length + string3.length;
    const truncatedLength = nextLength + truncated.length;
    if (last && nextLength > originalLength && output.length + truncated.length <= originalLength) {
      break;
    }
    if (!last && !secondToLast && truncatedLength > originalLength) {
      break;
    }
    peek = last ? "" : inspectItem(list[i + 1], options) + (secondToLast ? "" : separator);
    if (!last && secondToLast && truncatedLength > originalLength && nextLength + peek.length > originalLength) {
      break;
    }
    output += string3;
    if (!last && !secondToLast && nextLength + peek.length >= originalLength) {
      truncated = `${truncator}(${list.length - i - 1})`;
      break;
    }
    truncated = "";
  }
  return `${output}${truncated}`;
}
function quoteComplexKey(key) {
  if (key.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)) {
    return key;
  }
  return JSON.stringify(key).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
function inspectProperty([key, value], options) {
  options.truncate -= 2;
  if (typeof key === "string") {
    key = quoteComplexKey(key);
  } else if (typeof key !== "number") {
    key = `[${options.inspect(key, options)}]`;
  }
  options.truncate -= key.length;
  value = options.inspect(value, options);
  return `${key}: ${value}`;
}
var ansiColors, styles, truncator;
var init_helpers = __esm({
  "node_modules/loupe/lib/helpers.js"() {
    "use strict";
    ansiColors = {
      bold: ["1", "22"],
      dim: ["2", "22"],
      italic: ["3", "23"],
      underline: ["4", "24"],
      // 5 & 6 are blinking
      inverse: ["7", "27"],
      hidden: ["8", "28"],
      strike: ["9", "29"],
      // 10-20 are fonts
      // 21-29 are resets for 1-9
      black: ["30", "39"],
      red: ["31", "39"],
      green: ["32", "39"],
      yellow: ["33", "39"],
      blue: ["34", "39"],
      magenta: ["35", "39"],
      cyan: ["36", "39"],
      white: ["37", "39"],
      brightblack: ["30;1", "39"],
      brightred: ["31;1", "39"],
      brightgreen: ["32;1", "39"],
      brightyellow: ["33;1", "39"],
      brightblue: ["34;1", "39"],
      brightmagenta: ["35;1", "39"],
      brightcyan: ["36;1", "39"],
      brightwhite: ["37;1", "39"],
      grey: ["90", "39"]
    };
    styles = {
      special: "cyan",
      number: "yellow",
      bigint: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      symbol: "green",
      date: "magenta",
      regexp: "red"
    };
    truncator = "\u2026";
  }
});

// node_modules/loupe/lib/array.js
function inspectArray(array2, options) {
  const nonIndexProperties = Object.keys(array2).slice(array2.length);
  if (!array2.length && !nonIndexProperties.length)
    return "[]";
  options.truncate -= 4;
  const listContents = inspectList(array2, options);
  options.truncate -= listContents.length;
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList(
      nonIndexProperties.map((key) => [key, array2[key]]),
      options,
      inspectProperty
    );
  }
  return `[ ${listContents}${propertyContents ? `, ${propertyContents}` : ""} ]`;
}
var init_array = __esm({
  "node_modules/loupe/lib/array.js"() {
    "use strict";
    init_helpers();
  }
});

// node_modules/get-func-name/index.js
var require_get_func_name = __commonJS({
  "node_modules/get-func-name/index.js"(exports2, module2) {
    "use strict";
    var toString3 = Function.prototype.toString;
    var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
    var maxFunctionSourceLength = 512;
    function getFuncName3(aFunc) {
      if (typeof aFunc !== "function") {
        return null;
      }
      var name = "";
      if (typeof Function.prototype.name === "undefined" && typeof aFunc.name === "undefined") {
        var functionSource = toString3.call(aFunc);
        if (functionSource.indexOf("(") > maxFunctionSourceLength) {
          return name;
        }
        var match = functionSource.match(functionNameMatch);
        if (match) {
          name = match[1];
        }
      } else {
        name = aFunc.name;
      }
      return name;
    }
    module2.exports = getFuncName3;
  }
});

// node_modules/loupe/lib/typedarray.js
function inspectTypedArray(array2, options) {
  const name = getArrayName(array2);
  options.truncate -= name.length + 4;
  const nonIndexProperties = Object.keys(array2).slice(array2.length);
  if (!array2.length && !nonIndexProperties.length)
    return `${name}[]`;
  let output = "";
  for (let i = 0; i < array2.length; i++) {
    const string3 = `${options.stylize(truncate(array2[i], options.truncate), "number")}${i === array2.length - 1 ? "" : ", "}`;
    options.truncate -= string3.length;
    if (array2[i] !== array2.length && options.truncate <= 3) {
      output += `${truncator}(${array2.length - array2[i] + 1})`;
      break;
    }
    output += string3;
  }
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList(
      nonIndexProperties.map((key) => [key, array2[key]]),
      options,
      inspectProperty
    );
  }
  return `${name}[ ${output}${propertyContents ? `, ${propertyContents}` : ""} ]`;
}
var import_get_func_name, getArrayName;
var init_typedarray = __esm({
  "node_modules/loupe/lib/typedarray.js"() {
    "use strict";
    import_get_func_name = __toESM(require_get_func_name());
    init_helpers();
    getArrayName = (array2) => {
      if (typeof Buffer === "function" && array2 instanceof Buffer) {
        return "Buffer";
      }
      if (array2[Symbol.toStringTag]) {
        return array2[Symbol.toStringTag];
      }
      return (0, import_get_func_name.default)(array2.constructor);
    };
  }
});

// node_modules/loupe/lib/date.js
function inspectDate(dateObject, options) {
  const stringRepresentation = dateObject.toJSON();
  if (stringRepresentation === null) {
    return "Invalid Date";
  }
  const split = stringRepresentation.split("T");
  const date = split[0];
  return options.stylize(`${date}T${truncate(split[1], options.truncate - date.length - 1)}`, "date");
}
var init_date = __esm({
  "node_modules/loupe/lib/date.js"() {
    "use strict";
    init_helpers();
  }
});

// node_modules/loupe/lib/function.js
function inspectFunction(func, options) {
  const name = (0, import_get_func_name2.default)(func);
  if (!name) {
    return options.stylize("[Function]", "special");
  }
  return options.stylize(`[Function ${truncate(name, options.truncate - 11)}]`, "special");
}
var import_get_func_name2;
var init_function = __esm({
  "node_modules/loupe/lib/function.js"() {
    "use strict";
    import_get_func_name2 = __toESM(require_get_func_name());
    init_helpers();
  }
});

// node_modules/loupe/lib/map.js
function inspectMapEntry([key, value], options) {
  options.truncate -= 4;
  key = options.inspect(key, options);
  options.truncate -= key.length;
  value = options.inspect(value, options);
  return `${key} => ${value}`;
}
function mapToEntries(map2) {
  const entries = [];
  map2.forEach((value, key) => {
    entries.push([key, value]);
  });
  return entries;
}
function inspectMap(map2, options) {
  const size = map2.size - 1;
  if (size <= 0) {
    return "Map{}";
  }
  options.truncate -= 7;
  return `Map{ ${inspectList(mapToEntries(map2), options, inspectMapEntry)} }`;
}
var init_map = __esm({
  "node_modules/loupe/lib/map.js"() {
    "use strict";
    init_helpers();
  }
});

// node_modules/loupe/lib/number.js
function inspectNumber(number, options) {
  if (isNaN2(number)) {
    return options.stylize("NaN", "number");
  }
  if (number === Infinity) {
    return options.stylize("Infinity", "number");
  }
  if (number === -Infinity) {
    return options.stylize("-Infinity", "number");
  }
  if (number === 0) {
    return options.stylize(1 / number === Infinity ? "+0" : "-0", "number");
  }
  return options.stylize(truncate(number, options.truncate), "number");
}
var isNaN2;
var init_number = __esm({
  "node_modules/loupe/lib/number.js"() {
    "use strict";
    init_helpers();
    isNaN2 = Number.isNaN || ((i) => i !== i);
  }
});

// node_modules/loupe/lib/bigint.js
function inspectBigInt(number, options) {
  let nums = truncate(number.toString(), options.truncate - 1);
  if (nums !== truncator)
    nums += "n";
  return options.stylize(nums, "bigint");
}
var init_bigint = __esm({
  "node_modules/loupe/lib/bigint.js"() {
    "use strict";
    init_helpers();
  }
});

// node_modules/loupe/lib/regexp.js
function inspectRegExp(value, options) {
  const flags = value.toString().split("/")[2];
  const sourceLength = options.truncate - (2 + flags.length);
  const source = value.source;
  return options.stylize(`/${truncate(source, sourceLength)}/${flags}`, "regexp");
}
var init_regexp = __esm({
  "node_modules/loupe/lib/regexp.js"() {
    "use strict";
    init_helpers();
  }
});

// node_modules/loupe/lib/set.js
function arrayFromSet(set3) {
  const values = [];
  set3.forEach((value) => {
    values.push(value);
  });
  return values;
}
function inspectSet(set3, options) {
  if (set3.size === 0)
    return "Set{}";
  options.truncate -= 7;
  return `Set{ ${inspectList(arrayFromSet(set3), options)} }`;
}
var init_set = __esm({
  "node_modules/loupe/lib/set.js"() {
    "use strict";
    init_helpers();
  }
});

// node_modules/loupe/lib/string.js
function escape(char) {
  return escapeCharacters[char] || `\\u${`0000${char.charCodeAt(0).toString(hex)}`.slice(-unicodeLength)}`;
}
function inspectString(string3, options) {
  if (stringEscapeChars.test(string3)) {
    string3 = string3.replace(stringEscapeChars, escape);
  }
  return options.stylize(`'${truncate(string3, options.truncate - 2)}'`, "string");
}
var stringEscapeChars, escapeCharacters, hex, unicodeLength;
var init_string = __esm({
  "node_modules/loupe/lib/string.js"() {
    "use strict";
    init_helpers();
    stringEscapeChars = new RegExp(
      "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
      "g"
    );
    escapeCharacters = {
      "\b": "\\b",
      "	": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "'": "\\'",
      "\\": "\\\\"
    };
    hex = 16;
    unicodeLength = 4;
  }
});

// node_modules/loupe/lib/symbol.js
function inspectSymbol(value) {
  if ("description" in Symbol.prototype) {
    return value.description ? `Symbol(${value.description})` : "Symbol()";
  }
  return value.toString();
}
var init_symbol = __esm({
  "node_modules/loupe/lib/symbol.js"() {
    "use strict";
  }
});

// node_modules/loupe/lib/promise.js
var getPromiseValue, promise_default;
var init_promise = __esm({
  "node_modules/loupe/lib/promise.js"() {
    "use strict";
    getPromiseValue = () => "Promise{\u2026}";
    try {
      const { getPromiseDetails, kPending, kRejected } = process.binding("util");
      if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
        getPromiseValue = (value, options) => {
          const [state, innerValue] = getPromiseDetails(value);
          if (state === kPending) {
            return "Promise{<pending>}";
          }
          return `Promise${state === kRejected ? "!" : ""}{${options.inspect(innerValue, options)}}`;
        };
      }
    } catch (notNode) {
    }
    promise_default = getPromiseValue;
  }
});

// node_modules/loupe/lib/object.js
function inspectObject(object2, options) {
  const properties = Object.getOwnPropertyNames(object2);
  const symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object2) : [];
  if (properties.length === 0 && symbols.length === 0) {
    return "{}";
  }
  options.truncate -= 4;
  options.seen = options.seen || [];
  if (options.seen.indexOf(object2) >= 0) {
    return "[Circular]";
  }
  options.seen.push(object2);
  const propertyContents = inspectList(
    properties.map((key) => [key, object2[key]]),
    options,
    inspectProperty
  );
  const symbolContents = inspectList(
    symbols.map((key) => [key, object2[key]]),
    options,
    inspectProperty
  );
  options.seen.pop();
  let sep = "";
  if (propertyContents && symbolContents) {
    sep = ", ";
  }
  return `{ ${propertyContents}${sep}${symbolContents} }`;
}
var init_object = __esm({
  "node_modules/loupe/lib/object.js"() {
    "use strict";
    init_helpers();
  }
});

// node_modules/loupe/lib/class.js
function inspectClass(value, options) {
  let name = "";
  if (toStringTag && toStringTag in value) {
    name = value[toStringTag];
  }
  name = name || (0, import_get_func_name3.default)(value.constructor);
  if (!name || name === "_class") {
    name = "<Anonymous Class>";
  }
  options.truncate -= name.length;
  return `${name}${inspectObject(value, options)}`;
}
var import_get_func_name3, toStringTag;
var init_class = __esm({
  "node_modules/loupe/lib/class.js"() {
    "use strict";
    import_get_func_name3 = __toESM(require_get_func_name());
    init_object();
    toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag ? Symbol.toStringTag : false;
  }
});

// node_modules/loupe/lib/arguments.js
function inspectArguments(args, options) {
  if (args.length === 0)
    return "Arguments[]";
  options.truncate -= 13;
  return `Arguments[ ${inspectList(args, options)} ]`;
}
var init_arguments = __esm({
  "node_modules/loupe/lib/arguments.js"() {
    "use strict";
    init_helpers();
  }
});

// node_modules/loupe/lib/error.js
function inspectObject2(error, options) {
  const properties = Object.getOwnPropertyNames(error).filter((key) => errorKeys.indexOf(key) === -1);
  const name = error.name;
  options.truncate -= name.length;
  let message = "";
  if (typeof error.message === "string") {
    message = truncate(error.message, options.truncate);
  } else {
    properties.unshift("message");
  }
  message = message ? `: ${message}` : "";
  options.truncate -= message.length + 5;
  const propertyContents = inspectList(
    properties.map((key) => [key, error[key]]),
    options,
    inspectProperty
  );
  return `${name}${message}${propertyContents ? ` { ${propertyContents} }` : ""}`;
}
var errorKeys;
var init_error = __esm({
  "node_modules/loupe/lib/error.js"() {
    "use strict";
    init_helpers();
    errorKeys = [
      "stack",
      "line",
      "column",
      "name",
      "message",
      "fileName",
      "lineNumber",
      "columnNumber",
      "number",
      "description"
    ];
  }
});

// node_modules/loupe/lib/html.js
function inspectAttribute([key, value], options) {
  options.truncate -= 3;
  if (!value) {
    return `${options.stylize(key, "yellow")}`;
  }
  return `${options.stylize(key, "yellow")}=${options.stylize(`"${value}"`, "string")}`;
}
function inspectHTMLCollection(collection, options) {
  return inspectList(collection, options, inspectHTML, "\n");
}
function inspectHTML(element, options) {
  const properties = element.getAttributeNames();
  const name = element.tagName.toLowerCase();
  const head = options.stylize(`<${name}`, "special");
  const headClose = options.stylize(`>`, "special");
  const tail = options.stylize(`</${name}>`, "special");
  options.truncate -= name.length * 2 + 5;
  let propertyContents = "";
  if (properties.length > 0) {
    propertyContents += " ";
    propertyContents += inspectList(
      properties.map((key) => [key, element.getAttribute(key)]),
      options,
      inspectAttribute,
      " "
    );
  }
  options.truncate -= propertyContents.length;
  const truncate2 = options.truncate;
  let children = inspectHTMLCollection(element.children, options);
  if (children && children.length > truncate2) {
    children = `${truncator}(${element.children.length})`;
  }
  return `${head}${propertyContents}${headClose}${children}${tail}`;
}
var init_html = __esm({
  "node_modules/loupe/lib/html.js"() {
    "use strict";
    init_helpers();
  }
});

// node_modules/loupe/index.js
var loupe_exports = {};
__export(loupe_exports, {
  custom: () => custom,
  default: () => loupe_default,
  inspect: () => inspect,
  registerConstructor: () => registerConstructor,
  registerStringTag: () => registerStringTag
});
function FakeMap() {
  this.key = "chai/loupe__" + Math.random() + Date.now();
}
function inspect(value, options) {
  options = normaliseOptions(options);
  options.inspect = inspect;
  const { customInspect } = options;
  let type2 = value === null ? "null" : typeof value;
  if (type2 === "object") {
    type2 = toString.call(value).slice(8, -1);
  }
  if (baseTypesMap[type2]) {
    return baseTypesMap[type2](value, options);
  }
  if (customInspect && value) {
    const output = inspectCustom(value, options, type2);
    if (output) {
      if (typeof output === "string")
        return output;
      return inspect(output, options);
    }
  }
  const proto = value ? Object.getPrototypeOf(value) : false;
  if (proto === Object.prototype || proto === null) {
    return inspectObject(value, options);
  }
  if (value && typeof HTMLElement === "function" && value instanceof HTMLElement) {
    return inspectHTML(value, options);
  }
  if ("constructor" in value) {
    if (value.constructor !== Object) {
      return inspectClass(value, options);
    }
    return inspectObject(value, options);
  }
  if (value === Object(value)) {
    return inspectObject(value, options);
  }
  return options.stylize(String(value), type2);
}
function registerConstructor(constructor, inspector) {
  if (constructorMap.has(constructor)) {
    return false;
  }
  constructorMap.set(constructor, inspector);
  return true;
}
function registerStringTag(stringTag, inspector) {
  if (stringTag in stringTagMap) {
    return false;
  }
  stringTagMap[stringTag] = inspector;
  return true;
}
var symbolsSupported, chaiInspect, nodeInspect, constructorMap, stringTagMap, baseTypesMap, inspectCustom, toString, custom, loupe_default;
var init_loupe = __esm({
  "node_modules/loupe/index.js"() {
    "use strict";
    init_array();
    init_typedarray();
    init_date();
    init_function();
    init_map();
    init_number();
    init_bigint();
    init_regexp();
    init_set();
    init_string();
    init_symbol();
    init_promise();
    init_class();
    init_object();
    init_arguments();
    init_error();
    init_html();
    init_helpers();
    symbolsSupported = typeof Symbol === "function" && typeof Symbol.for === "function";
    chaiInspect = symbolsSupported ? Symbol.for("chai/inspect") : "@@chai/inspect";
    nodeInspect = false;
    try {
      const nodeUtil = require("util");
      nodeInspect = nodeUtil.inspect ? nodeUtil.inspect.custom : false;
    } catch (noNodeInspect) {
      nodeInspect = false;
    }
    FakeMap.prototype = {
      // eslint-disable-next-line object-shorthand
      get: function get(key) {
        return key[this.key];
      },
      // eslint-disable-next-line object-shorthand
      has: function has(key) {
        return this.key in key;
      },
      // eslint-disable-next-line object-shorthand
      set: function set(key, value) {
        if (Object.isExtensible(key)) {
          Object.defineProperty(key, this.key, {
            // eslint-disable-next-line object-shorthand
            value,
            configurable: true
          });
        }
      }
    };
    constructorMap = new (typeof WeakMap === "function" ? WeakMap : FakeMap)();
    stringTagMap = {};
    baseTypesMap = {
      undefined: (value, options) => options.stylize("undefined", "undefined"),
      null: (value, options) => options.stylize(null, "null"),
      boolean: (value, options) => options.stylize(value, "boolean"),
      Boolean: (value, options) => options.stylize(value, "boolean"),
      number: inspectNumber,
      Number: inspectNumber,
      bigint: inspectBigInt,
      BigInt: inspectBigInt,
      string: inspectString,
      String: inspectString,
      function: inspectFunction,
      Function: inspectFunction,
      symbol: inspectSymbol,
      // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
      Symbol: inspectSymbol,
      Array: inspectArray,
      Date: inspectDate,
      Map: inspectMap,
      Set: inspectSet,
      RegExp: inspectRegExp,
      Promise: promise_default,
      // WeakSet, WeakMap are totally opaque to us
      WeakSet: (value, options) => options.stylize("WeakSet{\u2026}", "special"),
      WeakMap: (value, options) => options.stylize("WeakMap{\u2026}", "special"),
      Arguments: inspectArguments,
      Int8Array: inspectTypedArray,
      Uint8Array: inspectTypedArray,
      Uint8ClampedArray: inspectTypedArray,
      Int16Array: inspectTypedArray,
      Uint16Array: inspectTypedArray,
      Int32Array: inspectTypedArray,
      Uint32Array: inspectTypedArray,
      Float32Array: inspectTypedArray,
      Float64Array: inspectTypedArray,
      Generator: () => "",
      DataView: () => "",
      ArrayBuffer: () => "",
      Error: inspectObject2,
      HTMLCollection: inspectHTMLCollection,
      NodeList: inspectHTMLCollection
    };
    inspectCustom = (value, options, type2) => {
      if (chaiInspect in value && typeof value[chaiInspect] === "function") {
        return value[chaiInspect](options);
      }
      if (nodeInspect && nodeInspect in value && typeof value[nodeInspect] === "function") {
        return value[nodeInspect](options.depth, options);
      }
      if ("inspect" in value && typeof value.inspect === "function") {
        return value.inspect(options.depth, options);
      }
      if ("constructor" in value && constructorMap.has(value.constructor)) {
        return constructorMap.get(value.constructor)(value, options);
      }
      if (stringTagMap[type2]) {
        return stringTagMap[type2](value, options);
      }
      return "";
    };
    toString = Object.prototype.toString;
    custom = chaiInspect;
    loupe_default = inspect;
  }
});

// node_modules/diff-sequences/build/index.js
var require_build2 = __commonJS({
  "node_modules/diff-sequences/build/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = diffSequence;
    var pkg = "diff-sequences";
    var NOT_YET_SET = 0;
    var countCommonItemsF = (aIndex, aEnd, bIndex, bEnd, isCommon) => {
      let nCommon = 0;
      while (aIndex < aEnd && bIndex < bEnd && isCommon(aIndex, bIndex)) {
        aIndex += 1;
        bIndex += 1;
        nCommon += 1;
      }
      return nCommon;
    };
    var countCommonItemsR = (aStart, aIndex, bStart, bIndex, isCommon) => {
      let nCommon = 0;
      while (aStart <= aIndex && bStart <= bIndex && isCommon(aIndex, bIndex)) {
        aIndex -= 1;
        bIndex -= 1;
        nCommon += 1;
      }
      return nCommon;
    };
    var extendPathsF = (d2, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF) => {
      let iF = 0;
      let kF = -d2;
      let aFirst = aIndexesF[iF];
      let aIndexPrev1 = aFirst;
      aIndexesF[iF] += countCommonItemsF(
        aFirst + 1,
        aEnd,
        bF + aFirst - kF + 1,
        bEnd,
        isCommon
      );
      const nF = d2 < iMaxF ? d2 : iMaxF;
      for (iF += 1, kF += 2; iF <= nF; iF += 1, kF += 2) {
        if (iF !== d2 && aIndexPrev1 < aIndexesF[iF]) {
          aFirst = aIndexesF[iF];
        } else {
          aFirst = aIndexPrev1 + 1;
          if (aEnd <= aFirst) {
            return iF - 1;
          }
        }
        aIndexPrev1 = aIndexesF[iF];
        aIndexesF[iF] = aFirst + countCommonItemsF(aFirst + 1, aEnd, bF + aFirst - kF + 1, bEnd, isCommon);
      }
      return iMaxF;
    };
    var extendPathsR = (d2, aStart, bStart, bR, isCommon, aIndexesR, iMaxR) => {
      let iR = 0;
      let kR = d2;
      let aFirst = aIndexesR[iR];
      let aIndexPrev1 = aFirst;
      aIndexesR[iR] -= countCommonItemsR(
        aStart,
        aFirst - 1,
        bStart,
        bR + aFirst - kR - 1,
        isCommon
      );
      const nR = d2 < iMaxR ? d2 : iMaxR;
      for (iR += 1, kR -= 2; iR <= nR; iR += 1, kR -= 2) {
        if (iR !== d2 && aIndexesR[iR] < aIndexPrev1) {
          aFirst = aIndexesR[iR];
        } else {
          aFirst = aIndexPrev1 - 1;
          if (aFirst < aStart) {
            return iR - 1;
          }
        }
        aIndexPrev1 = aIndexesR[iR];
        aIndexesR[iR] = aFirst - countCommonItemsR(
          aStart,
          aFirst - 1,
          bStart,
          bR + aFirst - kR - 1,
          isCommon
        );
      }
      return iMaxR;
    };
    var extendOverlappablePathsF = (d2, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division) => {
      const bF = bStart - aStart;
      const aLength = aEnd - aStart;
      const bLength = bEnd - bStart;
      const baDeltaLength = bLength - aLength;
      const kMinOverlapF = -baDeltaLength - (d2 - 1);
      const kMaxOverlapF = -baDeltaLength + (d2 - 1);
      let aIndexPrev1 = NOT_YET_SET;
      const nF = d2 < iMaxF ? d2 : iMaxF;
      for (let iF = 0, kF = -d2; iF <= nF; iF += 1, kF += 2) {
        const insert2 = iF === 0 || iF !== d2 && aIndexPrev1 < aIndexesF[iF];
        const aLastPrev = insert2 ? aIndexesF[iF] : aIndexPrev1;
        const aFirst = insert2 ? aLastPrev : aLastPrev + 1;
        const bFirst = bF + aFirst - kF;
        const nCommonF = countCommonItemsF(
          aFirst + 1,
          aEnd,
          bFirst + 1,
          bEnd,
          isCommon
        );
        const aLast = aFirst + nCommonF;
        aIndexPrev1 = aIndexesF[iF];
        aIndexesF[iF] = aLast;
        if (kMinOverlapF <= kF && kF <= kMaxOverlapF) {
          const iR = (d2 - 1 - (kF + baDeltaLength)) / 2;
          if (iR <= iMaxR && aIndexesR[iR] - 1 <= aLast) {
            const bLastPrev = bF + aLastPrev - (insert2 ? kF + 1 : kF - 1);
            const nCommonR = countCommonItemsR(
              aStart,
              aLastPrev,
              bStart,
              bLastPrev,
              isCommon
            );
            const aIndexPrevFirst = aLastPrev - nCommonR;
            const bIndexPrevFirst = bLastPrev - nCommonR;
            const aEndPreceding = aIndexPrevFirst + 1;
            const bEndPreceding = bIndexPrevFirst + 1;
            division.nChangePreceding = d2 - 1;
            if (d2 - 1 === aEndPreceding + bEndPreceding - aStart - bStart) {
              division.aEndPreceding = aStart;
              division.bEndPreceding = bStart;
            } else {
              division.aEndPreceding = aEndPreceding;
              division.bEndPreceding = bEndPreceding;
            }
            division.nCommonPreceding = nCommonR;
            if (nCommonR !== 0) {
              division.aCommonPreceding = aEndPreceding;
              division.bCommonPreceding = bEndPreceding;
            }
            division.nCommonFollowing = nCommonF;
            if (nCommonF !== 0) {
              division.aCommonFollowing = aFirst + 1;
              division.bCommonFollowing = bFirst + 1;
            }
            const aStartFollowing = aLast + 1;
            const bStartFollowing = bFirst + nCommonF + 1;
            division.nChangeFollowing = d2 - 1;
            if (d2 - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing) {
              division.aStartFollowing = aEnd;
              division.bStartFollowing = bEnd;
            } else {
              division.aStartFollowing = aStartFollowing;
              division.bStartFollowing = bStartFollowing;
            }
            return true;
          }
        }
      }
      return false;
    };
    var extendOverlappablePathsR = (d2, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division) => {
      const bR = bEnd - aEnd;
      const aLength = aEnd - aStart;
      const bLength = bEnd - bStart;
      const baDeltaLength = bLength - aLength;
      const kMinOverlapR = baDeltaLength - d2;
      const kMaxOverlapR = baDeltaLength + d2;
      let aIndexPrev1 = NOT_YET_SET;
      const nR = d2 < iMaxR ? d2 : iMaxR;
      for (let iR = 0, kR = d2; iR <= nR; iR += 1, kR -= 2) {
        const insert2 = iR === 0 || iR !== d2 && aIndexesR[iR] < aIndexPrev1;
        const aLastPrev = insert2 ? aIndexesR[iR] : aIndexPrev1;
        const aFirst = insert2 ? aLastPrev : aLastPrev - 1;
        const bFirst = bR + aFirst - kR;
        const nCommonR = countCommonItemsR(
          aStart,
          aFirst - 1,
          bStart,
          bFirst - 1,
          isCommon
        );
        const aLast = aFirst - nCommonR;
        aIndexPrev1 = aIndexesR[iR];
        aIndexesR[iR] = aLast;
        if (kMinOverlapR <= kR && kR <= kMaxOverlapR) {
          const iF = (d2 + (kR - baDeltaLength)) / 2;
          if (iF <= iMaxF && aLast - 1 <= aIndexesF[iF]) {
            const bLast = bFirst - nCommonR;
            division.nChangePreceding = d2;
            if (d2 === aLast + bLast - aStart - bStart) {
              division.aEndPreceding = aStart;
              division.bEndPreceding = bStart;
            } else {
              division.aEndPreceding = aLast;
              division.bEndPreceding = bLast;
            }
            division.nCommonPreceding = nCommonR;
            if (nCommonR !== 0) {
              division.aCommonPreceding = aLast;
              division.bCommonPreceding = bLast;
            }
            division.nChangeFollowing = d2 - 1;
            if (d2 === 1) {
              division.nCommonFollowing = 0;
              division.aStartFollowing = aEnd;
              division.bStartFollowing = bEnd;
            } else {
              const bLastPrev = bR + aLastPrev - (insert2 ? kR - 1 : kR + 1);
              const nCommonF = countCommonItemsF(
                aLastPrev,
                aEnd,
                bLastPrev,
                bEnd,
                isCommon
              );
              division.nCommonFollowing = nCommonF;
              if (nCommonF !== 0) {
                division.aCommonFollowing = aLastPrev;
                division.bCommonFollowing = bLastPrev;
              }
              const aStartFollowing = aLastPrev + nCommonF;
              const bStartFollowing = bLastPrev + nCommonF;
              if (d2 - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing) {
                division.aStartFollowing = aEnd;
                division.bStartFollowing = bEnd;
              } else {
                division.aStartFollowing = aStartFollowing;
                division.bStartFollowing = bStartFollowing;
              }
            }
            return true;
          }
        }
      }
      return false;
    };
    var divide = (nChange, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, aIndexesR, division) => {
      const bF = bStart - aStart;
      const bR = bEnd - aEnd;
      const aLength = aEnd - aStart;
      const bLength = bEnd - bStart;
      const baDeltaLength = bLength - aLength;
      let iMaxF = aLength;
      let iMaxR = aLength;
      aIndexesF[0] = aStart - 1;
      aIndexesR[0] = aEnd;
      if (baDeltaLength % 2 === 0) {
        const dMin = (nChange || baDeltaLength) / 2;
        const dMax = (aLength + bLength) / 2;
        for (let d2 = 1; d2 <= dMax; d2 += 1) {
          iMaxF = extendPathsF(d2, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
          if (d2 < dMin) {
            iMaxR = extendPathsR(d2, aStart, bStart, bR, isCommon, aIndexesR, iMaxR);
          } else if (
            // If a reverse path overlaps a forward path in the same diagonal,
            // return a division of the index intervals at the middle change.
            extendOverlappablePathsR(
              d2,
              aStart,
              aEnd,
              bStart,
              bEnd,
              isCommon,
              aIndexesF,
              iMaxF,
              aIndexesR,
              iMaxR,
              division
            )
          ) {
            return;
          }
        }
      } else {
        const dMin = ((nChange || baDeltaLength) + 1) / 2;
        const dMax = (aLength + bLength + 1) / 2;
        let d2 = 1;
        iMaxF = extendPathsF(d2, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
        for (d2 += 1; d2 <= dMax; d2 += 1) {
          iMaxR = extendPathsR(
            d2 - 1,
            aStart,
            bStart,
            bR,
            isCommon,
            aIndexesR,
            iMaxR
          );
          if (d2 < dMin) {
            iMaxF = extendPathsF(d2, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
          } else if (
            // If a forward path overlaps a reverse path in the same diagonal,
            // return a division of the index intervals at the middle change.
            extendOverlappablePathsF(
              d2,
              aStart,
              aEnd,
              bStart,
              bEnd,
              isCommon,
              aIndexesF,
              iMaxF,
              aIndexesR,
              iMaxR,
              division
            )
          ) {
            return;
          }
        }
      }
      throw new Error(
        `${pkg}: no overlap aStart=${aStart} aEnd=${aEnd} bStart=${bStart} bEnd=${bEnd}`
      );
    };
    var findSubsequences = (nChange, aStart, aEnd, bStart, bEnd, transposed, callbacks, aIndexesF, aIndexesR, division) => {
      if (bEnd - bStart < aEnd - aStart) {
        transposed = !transposed;
        if (transposed && callbacks.length === 1) {
          const { foundSubsequence: foundSubsequence2, isCommon: isCommon2 } = callbacks[0];
          callbacks[1] = {
            foundSubsequence: (nCommon, bCommon, aCommon) => {
              foundSubsequence2(nCommon, aCommon, bCommon);
            },
            isCommon: (bIndex, aIndex) => isCommon2(aIndex, bIndex)
          };
        }
        const tStart = aStart;
        const tEnd = aEnd;
        aStart = bStart;
        aEnd = bEnd;
        bStart = tStart;
        bEnd = tEnd;
      }
      const { foundSubsequence, isCommon } = callbacks[transposed ? 1 : 0];
      divide(
        nChange,
        aStart,
        aEnd,
        bStart,
        bEnd,
        isCommon,
        aIndexesF,
        aIndexesR,
        division
      );
      const {
        nChangePreceding,
        aEndPreceding,
        bEndPreceding,
        nCommonPreceding,
        aCommonPreceding,
        bCommonPreceding,
        nCommonFollowing,
        aCommonFollowing,
        bCommonFollowing,
        nChangeFollowing,
        aStartFollowing,
        bStartFollowing
      } = division;
      if (aStart < aEndPreceding && bStart < bEndPreceding) {
        findSubsequences(
          nChangePreceding,
          aStart,
          aEndPreceding,
          bStart,
          bEndPreceding,
          transposed,
          callbacks,
          aIndexesF,
          aIndexesR,
          division
        );
      }
      if (nCommonPreceding !== 0) {
        foundSubsequence(nCommonPreceding, aCommonPreceding, bCommonPreceding);
      }
      if (nCommonFollowing !== 0) {
        foundSubsequence(nCommonFollowing, aCommonFollowing, bCommonFollowing);
      }
      if (aStartFollowing < aEnd && bStartFollowing < bEnd) {
        findSubsequences(
          nChangeFollowing,
          aStartFollowing,
          aEnd,
          bStartFollowing,
          bEnd,
          transposed,
          callbacks,
          aIndexesF,
          aIndexesR,
          division
        );
      }
    };
    var validateLength = (name, arg) => {
      if (typeof arg !== "number") {
        throw new TypeError(`${pkg}: ${name} typeof ${typeof arg} is not a number`);
      }
      if (!Number.isSafeInteger(arg)) {
        throw new RangeError(`${pkg}: ${name} value ${arg} is not a safe integer`);
      }
      if (arg < 0) {
        throw new RangeError(`${pkg}: ${name} value ${arg} is a negative integer`);
      }
    };
    var validateCallback = (name, arg) => {
      const type2 = typeof arg;
      if (type2 !== "function") {
        throw new TypeError(`${pkg}: ${name} typeof ${type2} is not a function`);
      }
    };
    function diffSequence(aLength, bLength, isCommon, foundSubsequence) {
      validateLength("aLength", aLength);
      validateLength("bLength", bLength);
      validateCallback("isCommon", isCommon);
      validateCallback("foundSubsequence", foundSubsequence);
      const nCommonF = countCommonItemsF(0, aLength, 0, bLength, isCommon);
      if (nCommonF !== 0) {
        foundSubsequence(nCommonF, 0, 0);
      }
      if (aLength !== nCommonF || bLength !== nCommonF) {
        const aStart = nCommonF;
        const bStart = nCommonF;
        const nCommonR = countCommonItemsR(
          aStart,
          aLength - 1,
          bStart,
          bLength - 1,
          isCommon
        );
        const aEnd = aLength - nCommonR;
        const bEnd = bLength - nCommonR;
        const nCommonFR = nCommonF + nCommonR;
        if (aLength !== nCommonFR && bLength !== nCommonFR) {
          const nChange = 0;
          const transposed = false;
          const callbacks = [
            {
              foundSubsequence,
              isCommon
            }
          ];
          const aIndexesF = [NOT_YET_SET];
          const aIndexesR = [NOT_YET_SET];
          const division = {
            aCommonFollowing: NOT_YET_SET,
            aCommonPreceding: NOT_YET_SET,
            aEndPreceding: NOT_YET_SET,
            aStartFollowing: NOT_YET_SET,
            bCommonFollowing: NOT_YET_SET,
            bCommonPreceding: NOT_YET_SET,
            bEndPreceding: NOT_YET_SET,
            bStartFollowing: NOT_YET_SET,
            nChangeFollowing: NOT_YET_SET,
            nChangePreceding: NOT_YET_SET,
            nCommonFollowing: NOT_YET_SET,
            nCommonPreceding: NOT_YET_SET
          };
          findSubsequences(
            nChange,
            aStart,
            aEnd,
            bStart,
            bEnd,
            transposed,
            callbacks,
            aIndexesF,
            aIndexesR,
            division
          );
        }
        if (nCommonR !== 0) {
          foundSubsequence(nCommonR, aEnd, bEnd);
        }
      }
    }
  }
});

// node_modules/assertion-error/index.js
var require_assertion_error = __commonJS({
  "node_modules/assertion-error/index.js"(exports2, module2) {
    "use strict";
    function exclude() {
      var excludes = [].slice.call(arguments);
      function excludeProps(res, obj) {
        Object.keys(obj).forEach(function(key) {
          if (!~excludes.indexOf(key))
            res[key] = obj[key];
        });
      }
      return function extendExclude() {
        var args = [].slice.call(arguments), i = 0, res = {};
        for (; i < args.length; i++) {
          excludeProps(res, args[i]);
        }
        return res;
      };
    }
    module2.exports = AssertionError2;
    function AssertionError2(message, _props, ssf) {
      var extend = exclude("name", "message", "stack", "constructor", "toJSON"), props = extend(_props || {});
      this.message = message || "Unspecified AssertionError";
      this.showDiff = false;
      for (var key in props) {
        this[key] = props[key];
      }
      ssf = ssf || AssertionError2;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ssf);
      } else {
        try {
          throw new Error();
        } catch (e) {
          this.stack = e.stack;
        }
      }
    }
    AssertionError2.prototype = Object.create(Error.prototype);
    AssertionError2.prototype.name = "AssertionError";
    AssertionError2.prototype.constructor = AssertionError2;
    AssertionError2.prototype.toJSON = function(stack) {
      var extend = exclude("constructor", "toJSON", "stack"), props = extend({ name: this.name }, this);
      if (false !== stack && this.stack) {
        props.stack = this.stack;
      }
      return props;
    };
  }
});

// node_modules/pathval/index.js
var require_pathval = __commonJS({
  "node_modules/pathval/index.js"(exports2, module2) {
    "use strict";
    function hasProperty(obj, name) {
      if (typeof obj === "undefined" || obj === null) {
        return false;
      }
      return name in Object(obj);
    }
    function parsePath(path) {
      var str = path.replace(/([^\\])\[/g, "$1.[");
      var parts = str.match(/(\\\.|[^.]+?)+/g);
      return parts.map(function mapMatches(value) {
        if (value === "constructor" || value === "__proto__" || value === "prototype") {
          return {};
        }
        var regexp = /^\[(\d+)\]$/;
        var mArr = regexp.exec(value);
        var parsed = null;
        if (mArr) {
          parsed = { i: parseFloat(mArr[1]) };
        } else {
          parsed = { p: value.replace(/\\([.[\]])/g, "$1") };
        }
        return parsed;
      });
    }
    function internalGetPathValue(obj, parsed, pathDepth) {
      var temporaryValue = obj;
      var res = null;
      pathDepth = typeof pathDepth === "undefined" ? parsed.length : pathDepth;
      for (var i = 0; i < pathDepth; i++) {
        var part = parsed[i];
        if (temporaryValue) {
          if (typeof part.p === "undefined") {
            temporaryValue = temporaryValue[part.i];
          } else {
            temporaryValue = temporaryValue[part.p];
          }
          if (i === pathDepth - 1) {
            res = temporaryValue;
          }
        }
      }
      return res;
    }
    function internalSetPathValue(obj, val, parsed) {
      var tempObj = obj;
      var pathDepth = parsed.length;
      var part = null;
      for (var i = 0; i < pathDepth; i++) {
        var propName = null;
        var propVal = null;
        part = parsed[i];
        if (i === pathDepth - 1) {
          propName = typeof part.p === "undefined" ? part.i : part.p;
          tempObj[propName] = val;
        } else if (typeof part.p !== "undefined" && tempObj[part.p]) {
          tempObj = tempObj[part.p];
        } else if (typeof part.i !== "undefined" && tempObj[part.i]) {
          tempObj = tempObj[part.i];
        } else {
          var next = parsed[i + 1];
          propName = typeof part.p === "undefined" ? part.i : part.p;
          propVal = typeof next.p === "undefined" ? [] : {};
          tempObj[propName] = propVal;
          tempObj = tempObj[propName];
        }
      }
    }
    function getPathInfo(obj, path) {
      var parsed = parsePath(path);
      var last = parsed[parsed.length - 1];
      var info = {
        parent: parsed.length > 1 ? internalGetPathValue(obj, parsed, parsed.length - 1) : obj,
        name: last.p || last.i,
        value: internalGetPathValue(obj, parsed)
      };
      info.exists = hasProperty(info.parent, info.name);
      return info;
    }
    function getPathValue(obj, path) {
      var info = getPathInfo(obj, path);
      return info.value;
    }
    function setPathValue(obj, path, val) {
      var parsed = parsePath(path);
      internalSetPathValue(obj, val, parsed);
      return obj;
    }
    module2.exports = {
      hasProperty,
      getPathInfo,
      getPathValue,
      setPathValue
    };
  }
});

// node_modules/chai/lib/chai/utils/flag.js
var require_flag = __commonJS({
  "node_modules/chai/lib/chai/utils/flag.js"(exports2, module2) {
    "use strict";
    module2.exports = function flag(obj, key, value) {
      var flags = obj.__flags || (obj.__flags = /* @__PURE__ */ Object.create(null));
      if (arguments.length === 3) {
        flags[key] = value;
      } else {
        return flags[key];
      }
    };
  }
});

// node_modules/chai/lib/chai/utils/test.js
var require_test = __commonJS({
  "node_modules/chai/lib/chai/utils/test.js"(exports2, module2) {
    "use strict";
    var flag = require_flag();
    module2.exports = function test3(obj, args) {
      var negate = flag(obj, "negate"), expr = args[0];
      return negate ? !expr : expr;
    };
  }
});

// node_modules/type-detect/type-detect.js
var require_type_detect = __commonJS({
  "node_modules/type-detect/type-detect.js"(exports2, module2) {
    "use strict";
    (function(global3, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? module2.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global3.typeDetect = factory();
    })(exports2, function() {
      "use strict";
      var promiseExists = typeof Promise === "function";
      var globalObject2 = typeof self === "object" ? self : global;
      var symbolExists = typeof Symbol !== "undefined";
      var mapExists = typeof Map !== "undefined";
      var setExists = typeof Set !== "undefined";
      var weakMapExists = typeof WeakMap !== "undefined";
      var weakSetExists = typeof WeakSet !== "undefined";
      var dataViewExists = typeof DataView !== "undefined";
      var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== "undefined";
      var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== "undefined";
      var setEntriesExists = setExists && typeof Set.prototype.entries === "function";
      var mapEntriesExists = mapExists && typeof Map.prototype.entries === "function";
      var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries());
      var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries());
      var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === "function";
      var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
      var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === "function";
      var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(""[Symbol.iterator]());
      var toStringLeftSliceLength = 8;
      var toStringRightSliceLength = -1;
      function typeDetect2(obj) {
        var typeofObj = typeof obj;
        if (typeofObj !== "object") {
          return typeofObj;
        }
        if (obj === null) {
          return "null";
        }
        if (obj === globalObject2) {
          return "global";
        }
        if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
          return "Array";
        }
        if (typeof window === "object" && window !== null) {
          if (typeof window.location === "object" && obj === window.location) {
            return "Location";
          }
          if (typeof window.document === "object" && obj === window.document) {
            return "Document";
          }
          if (typeof window.navigator === "object") {
            if (typeof window.navigator.mimeTypes === "object" && obj === window.navigator.mimeTypes) {
              return "MimeTypeArray";
            }
            if (typeof window.navigator.plugins === "object" && obj === window.navigator.plugins) {
              return "PluginArray";
            }
          }
          if ((typeof window.HTMLElement === "function" || typeof window.HTMLElement === "object") && obj instanceof window.HTMLElement) {
            if (obj.tagName === "BLOCKQUOTE") {
              return "HTMLQuoteElement";
            }
            if (obj.tagName === "TD") {
              return "HTMLTableDataCellElement";
            }
            if (obj.tagName === "TH") {
              return "HTMLTableHeaderCellElement";
            }
          }
        }
        var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];
        if (typeof stringTag === "string") {
          return stringTag;
        }
        var objPrototype = Object.getPrototypeOf(obj);
        if (objPrototype === RegExp.prototype) {
          return "RegExp";
        }
        if (objPrototype === Date.prototype) {
          return "Date";
        }
        if (promiseExists && objPrototype === Promise.prototype) {
          return "Promise";
        }
        if (setExists && objPrototype === Set.prototype) {
          return "Set";
        }
        if (mapExists && objPrototype === Map.prototype) {
          return "Map";
        }
        if (weakSetExists && objPrototype === WeakSet.prototype) {
          return "WeakSet";
        }
        if (weakMapExists && objPrototype === WeakMap.prototype) {
          return "WeakMap";
        }
        if (dataViewExists && objPrototype === DataView.prototype) {
          return "DataView";
        }
        if (mapExists && objPrototype === mapIteratorPrototype) {
          return "Map Iterator";
        }
        if (setExists && objPrototype === setIteratorPrototype) {
          return "Set Iterator";
        }
        if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
          return "Array Iterator";
        }
        if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
          return "String Iterator";
        }
        if (objPrototype === null) {
          return "Object";
        }
        return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
      }
      return typeDetect2;
    });
  }
});

// node_modules/chai/lib/chai/utils/expectTypes.js
var require_expectTypes = __commonJS({
  "node_modules/chai/lib/chai/utils/expectTypes.js"(exports2, module2) {
    "use strict";
    var AssertionError2 = require_assertion_error();
    var flag = require_flag();
    var type2 = require_type_detect();
    module2.exports = function expectTypes(obj, types) {
      var flagMsg = flag(obj, "message");
      var ssfi = flag(obj, "ssfi");
      flagMsg = flagMsg ? flagMsg + ": " : "";
      obj = flag(obj, "object");
      types = types.map(function(t) {
        return t.toLowerCase();
      });
      types.sort();
      var str = types.map(function(t, index2) {
        var art = ~["a", "e", "i", "o", "u"].indexOf(t.charAt(0)) ? "an" : "a";
        var or = types.length > 1 && index2 === types.length - 1 ? "or " : "";
        return or + art + " " + t;
      }).join(", ");
      var objType = type2(obj).toLowerCase();
      if (!types.some(function(expected) {
        return objType === expected;
      })) {
        throw new AssertionError2(
          flagMsg + "object tested must be " + str + ", but " + objType + " given",
          void 0,
          ssfi
        );
      }
    };
  }
});

// node_modules/chai/lib/chai/utils/getActual.js
var require_getActual = __commonJS({
  "node_modules/chai/lib/chai/utils/getActual.js"(exports2, module2) {
    "use strict";
    module2.exports = function getActual(obj, args) {
      return args.length > 4 ? args[4] : obj._obj;
    };
  }
});

// node_modules/chai/lib/chai/config.js
var require_config = __commonJS({
  "node_modules/chai/lib/chai/config.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /**
       * ### config.includeStack
       *
       * User configurable property, influences whether stack trace
       * is included in Assertion error message. Default of false
       * suppresses stack trace in the error message.
       *
       *     chai.config.includeStack = true;  // enable stack on error
       *
       * @param {Boolean}
       * @api public
       */
      includeStack: false,
      /**
       * ### config.showDiff
       *
       * User configurable property, influences whether or not
       * the `showDiff` flag should be included in the thrown
       * AssertionErrors. `false` will always be `false`; `true`
       * will be true when the assertion has requested a diff
       * be shown.
       *
       * @param {Boolean}
       * @api public
       */
      showDiff: true,
      /**
       * ### config.truncateThreshold
       *
       * User configurable property, sets length threshold for actual and
       * expected values in assertion errors. If this threshold is exceeded, for
       * example for large data structures, the value is replaced with something
       * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
       *
       * Set it to zero if you want to disable truncating altogether.
       *
       * This is especially userful when doing assertions on arrays: having this
       * set to a reasonable large value makes the failure messages readily
       * inspectable.
       *
       *     chai.config.truncateThreshold = 0;  // disable truncating
       *
       * @param {Number}
       * @api public
       */
      truncateThreshold: 40,
      /**
       * ### config.useProxy
       *
       * User configurable property, defines if chai will use a Proxy to throw
       * an error when a non-existent property is read, which protects users
       * from typos when using property-based assertions.
       *
       * Set it to false if you want to disable this feature.
       *
       *     chai.config.useProxy = false;  // disable use of Proxy
       *
       * This feature is automatically disabled regardless of this config value
       * in environments that don't support proxies.
       *
       * @param {Boolean}
       * @api public
       */
      useProxy: true,
      /**
       * ### config.proxyExcludedKeys
       *
       * User configurable property, defines which properties should be ignored
       * instead of throwing an error if they do not exist on the assertion.
       * This is only applied if the environment Chai is running in supports proxies and
       * if the `useProxy` configuration setting is enabled.
       * By default, `then` and `inspect` will not throw an error if they do not exist on the
       * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
       * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
       *
       *     // By default these keys will not throw an error if they do not exist on the assertion object
       *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
       *
       * @param {Array}
       * @api public
       */
      proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"]
    };
  }
});

// node_modules/chai/lib/chai/utils/inspect.js
var require_inspect = __commonJS({
  "node_modules/chai/lib/chai/utils/inspect.js"(exports2, module2) {
    "use strict";
    var getName = require_get_func_name();
    var loupe = (init_loupe(), __toCommonJS(loupe_exports));
    var config2 = require_config();
    module2.exports = inspect3;
    function inspect3(obj, showHidden, depth, colors) {
      var options = {
        colors,
        depth: typeof depth === "undefined" ? 2 : depth,
        showHidden,
        truncate: config2.truncateThreshold ? config2.truncateThreshold : Infinity
      };
      return loupe.inspect(obj, options);
    }
  }
});

// node_modules/chai/lib/chai/utils/objDisplay.js
var require_objDisplay = __commonJS({
  "node_modules/chai/lib/chai/utils/objDisplay.js"(exports2, module2) {
    "use strict";
    var inspect3 = require_inspect();
    var config2 = require_config();
    module2.exports = function objDisplay2(obj) {
      var str = inspect3(obj), type2 = Object.prototype.toString.call(obj);
      if (config2.truncateThreshold && str.length >= config2.truncateThreshold) {
        if (type2 === "[object Function]") {
          return !obj.name || obj.name === "" ? "[Function]" : "[Function: " + obj.name + "]";
        } else if (type2 === "[object Array]") {
          return "[ Array(" + obj.length + ") ]";
        } else if (type2 === "[object Object]") {
          var keys2 = Object.keys(obj), kstr = keys2.length > 2 ? keys2.splice(0, 2).join(", ") + ", ..." : keys2.join(", ");
          return "{ Object (" + kstr + ") }";
        } else {
          return str;
        }
      } else {
        return str;
      }
    };
  }
});

// node_modules/chai/lib/chai/utils/getMessage.js
var require_getMessage = __commonJS({
  "node_modules/chai/lib/chai/utils/getMessage.js"(exports2, module2) {
    "use strict";
    var flag = require_flag();
    var getActual = require_getActual();
    var objDisplay2 = require_objDisplay();
    module2.exports = function getMessage(obj, args) {
      var negate = flag(obj, "negate"), val = flag(obj, "object"), expected = args[3], actual = getActual(obj, args), msg = negate ? args[2] : args[1], flagMsg = flag(obj, "message");
      if (typeof msg === "function")
        msg = msg();
      msg = msg || "";
      msg = msg.replace(/#\{this\}/g, function() {
        return objDisplay2(val);
      }).replace(/#\{act\}/g, function() {
        return objDisplay2(actual);
      }).replace(/#\{exp\}/g, function() {
        return objDisplay2(expected);
      });
      return flagMsg ? flagMsg + ": " + msg : msg;
    };
  }
});

// node_modules/chai/lib/chai/utils/transferFlags.js
var require_transferFlags = __commonJS({
  "node_modules/chai/lib/chai/utils/transferFlags.js"(exports2, module2) {
    "use strict";
    module2.exports = function transferFlags(assertion, object2, includeAll) {
      var flags = assertion.__flags || (assertion.__flags = /* @__PURE__ */ Object.create(null));
      if (!object2.__flags) {
        object2.__flags = /* @__PURE__ */ Object.create(null);
      }
      includeAll = arguments.length === 3 ? includeAll : true;
      for (var flag in flags) {
        if (includeAll || flag !== "object" && flag !== "ssfi" && flag !== "lockSsfi" && flag != "message") {
          object2.__flags[flag] = flags[flag];
        }
      }
    };
  }
});

// node_modules/deep-eql/index.js
var require_deep_eql = __commonJS({
  "node_modules/deep-eql/index.js"(exports2, module2) {
    "use strict";
    var type2 = require_type_detect();
    function FakeMap2() {
      this._key = "chai/deep-eql__" + Math.random() + Date.now();
    }
    FakeMap2.prototype = {
      get: function get2(key) {
        return key[this._key];
      },
      set: function set3(key, value) {
        if (Object.isExtensible(key)) {
          Object.defineProperty(key, this._key, {
            value,
            configurable: true
          });
        }
      }
    };
    var MemoizeMap = typeof WeakMap === "function" ? WeakMap : FakeMap2;
    function memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
      if (!memoizeMap || isPrimitive3(leftHandOperand) || isPrimitive3(rightHandOperand)) {
        return null;
      }
      var leftHandMap = memoizeMap.get(leftHandOperand);
      if (leftHandMap) {
        var result = leftHandMap.get(rightHandOperand);
        if (typeof result === "boolean") {
          return result;
        }
      }
      return null;
    }
    function memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
      if (!memoizeMap || isPrimitive3(leftHandOperand) || isPrimitive3(rightHandOperand)) {
        return;
      }
      var leftHandMap = memoizeMap.get(leftHandOperand);
      if (leftHandMap) {
        leftHandMap.set(rightHandOperand, result);
      } else {
        leftHandMap = new MemoizeMap();
        leftHandMap.set(rightHandOperand, result);
        memoizeMap.set(leftHandOperand, leftHandMap);
      }
    }
    module2.exports = deepEqual;
    module2.exports.MemoizeMap = MemoizeMap;
    function deepEqual(leftHandOperand, rightHandOperand, options) {
      if (options && options.comparator) {
        return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
      }
      var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
      if (simpleResult !== null) {
        return simpleResult;
      }
      return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
    }
    function simpleEqual(leftHandOperand, rightHandOperand) {
      if (leftHandOperand === rightHandOperand) {
        return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
      }
      if (leftHandOperand !== leftHandOperand && // eslint-disable-line no-self-compare
      rightHandOperand !== rightHandOperand) {
        return true;
      }
      if (isPrimitive3(leftHandOperand) || isPrimitive3(rightHandOperand)) {
        return false;
      }
      return null;
    }
    function extensiveDeepEqual(leftHandOperand, rightHandOperand, options) {
      options = options || {};
      options.memoize = options.memoize === false ? false : options.memoize || new MemoizeMap();
      var comparator2 = options && options.comparator;
      var memoizeResultLeft = memoizeCompare(leftHandOperand, rightHandOperand, options.memoize);
      if (memoizeResultLeft !== null) {
        return memoizeResultLeft;
      }
      var memoizeResultRight = memoizeCompare(rightHandOperand, leftHandOperand, options.memoize);
      if (memoizeResultRight !== null) {
        return memoizeResultRight;
      }
      if (comparator2) {
        var comparatorResult = comparator2(leftHandOperand, rightHandOperand);
        if (comparatorResult === false || comparatorResult === true) {
          memoizeSet(leftHandOperand, rightHandOperand, options.memoize, comparatorResult);
          return comparatorResult;
        }
        var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
        if (simpleResult !== null) {
          return simpleResult;
        }
      }
      var leftHandType = type2(leftHandOperand);
      if (leftHandType !== type2(rightHandOperand)) {
        memoizeSet(leftHandOperand, rightHandOperand, options.memoize, false);
        return false;
      }
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, true);
      var result = extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options);
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, result);
      return result;
    }
    function extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options) {
      switch (leftHandType) {
        case "String":
        case "Number":
        case "Boolean":
        case "Date":
          return deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
        case "Promise":
        case "Symbol":
        case "function":
        case "WeakMap":
        case "WeakSet":
          return leftHandOperand === rightHandOperand;
        case "Error":
          return keysEqual(leftHandOperand, rightHandOperand, ["name", "message", "code"], options);
        case "Arguments":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "Array":
          return iterableEqual(leftHandOperand, rightHandOperand, options);
        case "RegExp":
          return regexpEqual(leftHandOperand, rightHandOperand);
        case "Generator":
          return generatorEqual(leftHandOperand, rightHandOperand, options);
        case "DataView":
          return iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options);
        case "ArrayBuffer":
          return iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options);
        case "Set":
          return entriesEqual(leftHandOperand, rightHandOperand, options);
        case "Map":
          return entriesEqual(leftHandOperand, rightHandOperand, options);
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.Instant":
        case "Temporal.ZonedDateTime":
        case "Temporal.PlainYearMonth":
        case "Temporal.PlainMonthDay":
          return leftHandOperand.equals(rightHandOperand);
        case "Temporal.Duration":
          return leftHandOperand.total("nanoseconds") === rightHandOperand.total("nanoseconds");
        case "Temporal.TimeZone":
        case "Temporal.Calendar":
          return leftHandOperand.toString() === rightHandOperand.toString();
        default:
          return objectEqual(leftHandOperand, rightHandOperand, options);
      }
    }
    function regexpEqual(leftHandOperand, rightHandOperand) {
      return leftHandOperand.toString() === rightHandOperand.toString();
    }
    function entriesEqual(leftHandOperand, rightHandOperand, options) {
      if (leftHandOperand.size !== rightHandOperand.size) {
        return false;
      }
      if (leftHandOperand.size === 0) {
        return true;
      }
      var leftHandItems = [];
      var rightHandItems = [];
      leftHandOperand.forEach(function gatherEntries(key, value) {
        leftHandItems.push([key, value]);
      });
      rightHandOperand.forEach(function gatherEntries(key, value) {
        rightHandItems.push([key, value]);
      });
      return iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options);
    }
    function iterableEqual(leftHandOperand, rightHandOperand, options) {
      var length = leftHandOperand.length;
      if (length !== rightHandOperand.length) {
        return false;
      }
      if (length === 0) {
        return true;
      }
      var index2 = -1;
      while (++index2 < length) {
        if (deepEqual(leftHandOperand[index2], rightHandOperand[index2], options) === false) {
          return false;
        }
      }
      return true;
    }
    function generatorEqual(leftHandOperand, rightHandOperand, options) {
      return iterableEqual(getGeneratorEntries(leftHandOperand), getGeneratorEntries(rightHandOperand), options);
    }
    function hasIteratorFunction(target) {
      return typeof Symbol !== "undefined" && typeof target === "object" && typeof Symbol.iterator !== "undefined" && typeof target[Symbol.iterator] === "function";
    }
    function getIteratorEntries(target) {
      if (hasIteratorFunction(target)) {
        try {
          return getGeneratorEntries(target[Symbol.iterator]());
        } catch (iteratorError) {
          return [];
        }
      }
      return [];
    }
    function getGeneratorEntries(generator) {
      var generatorResult = generator.next();
      var accumulator = [generatorResult.value];
      while (generatorResult.done === false) {
        generatorResult = generator.next();
        accumulator.push(generatorResult.value);
      }
      return accumulator;
    }
    function getEnumerableKeys(target) {
      var keys2 = [];
      for (var key in target) {
        keys2.push(key);
      }
      return keys2;
    }
    function getEnumerableSymbols(target) {
      var keys2 = [];
      var allKeys = Object.getOwnPropertySymbols(target);
      for (var i = 0; i < allKeys.length; i += 1) {
        var key = allKeys[i];
        if (Object.getOwnPropertyDescriptor(target, key).enumerable) {
          keys2.push(key);
        }
      }
      return keys2;
    }
    function keysEqual(leftHandOperand, rightHandOperand, keys2, options) {
      var length = keys2.length;
      if (length === 0) {
        return true;
      }
      for (var i = 0; i < length; i += 1) {
        if (deepEqual(leftHandOperand[keys2[i]], rightHandOperand[keys2[i]], options) === false) {
          return false;
        }
      }
      return true;
    }
    function objectEqual(leftHandOperand, rightHandOperand, options) {
      var leftHandKeys = getEnumerableKeys(leftHandOperand);
      var rightHandKeys = getEnumerableKeys(rightHandOperand);
      var leftHandSymbols = getEnumerableSymbols(leftHandOperand);
      var rightHandSymbols = getEnumerableSymbols(rightHandOperand);
      leftHandKeys = leftHandKeys.concat(leftHandSymbols);
      rightHandKeys = rightHandKeys.concat(rightHandSymbols);
      if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
        if (iterableEqual(mapSymbols(leftHandKeys).sort(), mapSymbols(rightHandKeys).sort()) === false) {
          return false;
        }
        return keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options);
      }
      var leftHandEntries = getIteratorEntries(leftHandOperand);
      var rightHandEntries = getIteratorEntries(rightHandOperand);
      if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
        leftHandEntries.sort();
        rightHandEntries.sort();
        return iterableEqual(leftHandEntries, rightHandEntries, options);
      }
      if (leftHandKeys.length === 0 && leftHandEntries.length === 0 && rightHandKeys.length === 0 && rightHandEntries.length === 0) {
        return true;
      }
      return false;
    }
    function isPrimitive3(value) {
      return value === null || typeof value !== "object";
    }
    function mapSymbols(arr) {
      return arr.map(function mapSymbol(entry) {
        if (typeof entry === "symbol") {
          return entry.toString();
        }
        return entry;
      });
    }
  }
});

// node_modules/chai/lib/chai/utils/isProxyEnabled.js
var require_isProxyEnabled = __commonJS({
  "node_modules/chai/lib/chai/utils/isProxyEnabled.js"(exports2, module2) {
    "use strict";
    var config2 = require_config();
    module2.exports = function isProxyEnabled() {
      return config2.useProxy && typeof Proxy !== "undefined" && typeof Reflect !== "undefined";
    };
  }
});

// node_modules/chai/lib/chai/utils/addProperty.js
var require_addProperty = __commonJS({
  "node_modules/chai/lib/chai/utils/addProperty.js"(exports2, module2) {
    "use strict";
    var chai3 = require_chai();
    var flag = require_flag();
    var isProxyEnabled = require_isProxyEnabled();
    var transferFlags = require_transferFlags();
    module2.exports = function addProperty(ctx, name, getter) {
      getter = getter === void 0 ? function() {
      } : getter;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function propertyGetter() {
            if (!isProxyEnabled() && !flag(this, "lockSsfi")) {
              flag(this, "ssfi", propertyGetter);
            }
            var result = getter.call(this);
            if (result !== void 0)
              return result;
            var newAssertion = new chai3.Assertion();
            transferFlags(this, newAssertion);
            return newAssertion;
          },
          configurable: true
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/utils/addLengthGuard.js
var require_addLengthGuard = __commonJS({
  "node_modules/chai/lib/chai/utils/addLengthGuard.js"(exports2, module2) {
    "use strict";
    var fnLengthDesc = Object.getOwnPropertyDescriptor(function() {
    }, "length");
    module2.exports = function addLengthGuard(fn2, assertionName, isChainable) {
      if (!fnLengthDesc.configurable)
        return fn2;
      Object.defineProperty(fn2, "length", {
        get: function() {
          if (isChainable) {
            throw Error("Invalid Chai property: " + assertionName + '.length. Due to a compatibility issue, "length" cannot directly follow "' + assertionName + '". Use "' + assertionName + '.lengthOf" instead.');
          }
          throw Error("Invalid Chai property: " + assertionName + '.length. See docs for proper usage of "' + assertionName + '".');
        }
      });
      return fn2;
    };
  }
});

// node_modules/chai/lib/chai/utils/getProperties.js
var require_getProperties = __commonJS({
  "node_modules/chai/lib/chai/utils/getProperties.js"(exports2, module2) {
    "use strict";
    module2.exports = function getProperties(object2) {
      var result = Object.getOwnPropertyNames(object2);
      function addProperty(property) {
        if (result.indexOf(property) === -1) {
          result.push(property);
        }
      }
      var proto = Object.getPrototypeOf(object2);
      while (proto !== null) {
        Object.getOwnPropertyNames(proto).forEach(addProperty);
        proto = Object.getPrototypeOf(proto);
      }
      return result;
    };
  }
});

// node_modules/chai/lib/chai/utils/proxify.js
var require_proxify = __commonJS({
  "node_modules/chai/lib/chai/utils/proxify.js"(exports2, module2) {
    "use strict";
    var config2 = require_config();
    var flag = require_flag();
    var getProperties = require_getProperties();
    var isProxyEnabled = require_isProxyEnabled();
    var builtins = ["__flags", "__methods", "_obj", "assert"];
    module2.exports = function proxify(obj, nonChainableMethodName) {
      if (!isProxyEnabled())
        return obj;
      return new Proxy(obj, {
        get: function proxyGetter(target, property) {
          if (typeof property === "string" && config2.proxyExcludedKeys.indexOf(property) === -1 && !Reflect.has(target, property)) {
            if (nonChainableMethodName) {
              throw Error("Invalid Chai property: " + nonChainableMethodName + "." + property + '. See docs for proper usage of "' + nonChainableMethodName + '".');
            }
            var suggestion = null;
            var suggestionDistance = 4;
            getProperties(target).forEach(function(prop) {
              if (!Object.prototype.hasOwnProperty(prop) && builtins.indexOf(prop) === -1) {
                var dist2 = stringDistanceCapped(
                  property,
                  prop,
                  suggestionDistance
                );
                if (dist2 < suggestionDistance) {
                  suggestion = prop;
                  suggestionDistance = dist2;
                }
              }
            });
            if (suggestion !== null) {
              throw Error("Invalid Chai property: " + property + '. Did you mean "' + suggestion + '"?');
            } else {
              throw Error("Invalid Chai property: " + property);
            }
          }
          if (builtins.indexOf(property) === -1 && !flag(target, "lockSsfi")) {
            flag(target, "ssfi", proxyGetter);
          }
          return Reflect.get(target, property);
        }
      });
    };
    function stringDistanceCapped(strA, strB, cap) {
      if (Math.abs(strA.length - strB.length) >= cap) {
        return cap;
      }
      var memo = [];
      for (var i = 0; i <= strA.length; i++) {
        memo[i] = Array(strB.length + 1).fill(0);
        memo[i][0] = i;
      }
      for (var j = 0; j < strB.length; j++) {
        memo[0][j] = j;
      }
      for (var i = 1; i <= strA.length; i++) {
        var ch = strA.charCodeAt(i - 1);
        for (var j = 1; j <= strB.length; j++) {
          if (Math.abs(i - j) >= cap) {
            memo[i][j] = cap;
            continue;
          }
          memo[i][j] = Math.min(
            memo[i - 1][j] + 1,
            memo[i][j - 1] + 1,
            memo[i - 1][j - 1] + (ch === strB.charCodeAt(j - 1) ? 0 : 1)
          );
        }
      }
      return memo[strA.length][strB.length];
    }
  }
});

// node_modules/chai/lib/chai/utils/addMethod.js
var require_addMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/addMethod.js"(exports2, module2) {
    "use strict";
    var addLengthGuard = require_addLengthGuard();
    var chai3 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    module2.exports = function addMethod(ctx, name, method) {
      var methodWrapper = function() {
        if (!flag(this, "lockSsfi")) {
          flag(this, "ssfi", methodWrapper);
        }
        var result = method.apply(this, arguments);
        if (result !== void 0)
          return result;
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      addLengthGuard(methodWrapper, name, false);
      ctx[name] = proxify(methodWrapper, name);
    };
  }
});

// node_modules/chai/lib/chai/utils/overwriteProperty.js
var require_overwriteProperty = __commonJS({
  "node_modules/chai/lib/chai/utils/overwriteProperty.js"(exports2, module2) {
    "use strict";
    var chai3 = require_chai();
    var flag = require_flag();
    var isProxyEnabled = require_isProxyEnabled();
    var transferFlags = require_transferFlags();
    module2.exports = function overwriteProperty(ctx, name, getter) {
      var _get = Object.getOwnPropertyDescriptor(ctx, name), _super = function() {
      };
      if (_get && "function" === typeof _get.get)
        _super = _get.get;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function overwritingPropertyGetter() {
            if (!isProxyEnabled() && !flag(this, "lockSsfi")) {
              flag(this, "ssfi", overwritingPropertyGetter);
            }
            var origLockSsfi = flag(this, "lockSsfi");
            flag(this, "lockSsfi", true);
            var result = getter(_super).call(this);
            flag(this, "lockSsfi", origLockSsfi);
            if (result !== void 0) {
              return result;
            }
            var newAssertion = new chai3.Assertion();
            transferFlags(this, newAssertion);
            return newAssertion;
          },
          configurable: true
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/utils/overwriteMethod.js
var require_overwriteMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/overwriteMethod.js"(exports2, module2) {
    "use strict";
    var addLengthGuard = require_addLengthGuard();
    var chai3 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    module2.exports = function overwriteMethod(ctx, name, method) {
      var _method = ctx[name], _super = function() {
        throw new Error(name + " is not a function");
      };
      if (_method && "function" === typeof _method)
        _super = _method;
      var overwritingMethodWrapper = function() {
        if (!flag(this, "lockSsfi")) {
          flag(this, "ssfi", overwritingMethodWrapper);
        }
        var origLockSsfi = flag(this, "lockSsfi");
        flag(this, "lockSsfi", true);
        var result = method(_super).apply(this, arguments);
        flag(this, "lockSsfi", origLockSsfi);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      addLengthGuard(overwritingMethodWrapper, name, false);
      ctx[name] = proxify(overwritingMethodWrapper, name);
    };
  }
});

// node_modules/chai/lib/chai/utils/addChainableMethod.js
var require_addChainableMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/addChainableMethod.js"(exports2, module2) {
    "use strict";
    var addLengthGuard = require_addLengthGuard();
    var chai3 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    var canSetPrototype = typeof Object.setPrototypeOf === "function";
    var testFn = function() {
    };
    var excludeNames = Object.getOwnPropertyNames(testFn).filter(function(name) {
      var propDesc = Object.getOwnPropertyDescriptor(testFn, name);
      if (typeof propDesc !== "object")
        return true;
      return !propDesc.configurable;
    });
    var call2 = Function.prototype.call;
    var apply = Function.prototype.apply;
    module2.exports = function addChainableMethod(ctx, name, method, chainingBehavior) {
      if (typeof chainingBehavior !== "function") {
        chainingBehavior = function() {
        };
      }
      var chainableBehavior = {
        method,
        chainingBehavior
      };
      if (!ctx.__methods) {
        ctx.__methods = {};
      }
      ctx.__methods[name] = chainableBehavior;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function chainableMethodGetter() {
            chainableBehavior.chainingBehavior.call(this);
            var chainableMethodWrapper = function() {
              if (!flag(this, "lockSsfi")) {
                flag(this, "ssfi", chainableMethodWrapper);
              }
              var result = chainableBehavior.method.apply(this, arguments);
              if (result !== void 0) {
                return result;
              }
              var newAssertion = new chai3.Assertion();
              transferFlags(this, newAssertion);
              return newAssertion;
            };
            addLengthGuard(chainableMethodWrapper, name, true);
            if (canSetPrototype) {
              var prototype = Object.create(this);
              prototype.call = call2;
              prototype.apply = apply;
              Object.setPrototypeOf(chainableMethodWrapper, prototype);
            } else {
              var asserterNames = Object.getOwnPropertyNames(ctx);
              asserterNames.forEach(function(asserterName) {
                if (excludeNames.indexOf(asserterName) !== -1) {
                  return;
                }
                var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
                Object.defineProperty(chainableMethodWrapper, asserterName, pd);
              });
            }
            transferFlags(this, chainableMethodWrapper);
            return proxify(chainableMethodWrapper);
          },
          configurable: true
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/utils/overwriteChainableMethod.js
var require_overwriteChainableMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/overwriteChainableMethod.js"(exports2, module2) {
    "use strict";
    var chai3 = require_chai();
    var transferFlags = require_transferFlags();
    module2.exports = function overwriteChainableMethod(ctx, name, method, chainingBehavior) {
      var chainableBehavior = ctx.__methods[name];
      var _chainingBehavior = chainableBehavior.chainingBehavior;
      chainableBehavior.chainingBehavior = function overwritingChainableMethodGetter() {
        var result = chainingBehavior(_chainingBehavior).call(this);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      var _method = chainableBehavior.method;
      chainableBehavior.method = function overwritingChainableMethodWrapper() {
        var result = method(_method).apply(this, arguments);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
    };
  }
});

// node_modules/chai/lib/chai/utils/compareByInspect.js
var require_compareByInspect = __commonJS({
  "node_modules/chai/lib/chai/utils/compareByInspect.js"(exports2, module2) {
    "use strict";
    var inspect3 = require_inspect();
    module2.exports = function compareByInspect(a, b2) {
      return inspect3(a) < inspect3(b2) ? -1 : 1;
    };
  }
});

// node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js
var require_getOwnEnumerablePropertySymbols = __commonJS({
  "node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js"(exports2, module2) {
    "use strict";
    module2.exports = function getOwnEnumerablePropertySymbols(obj) {
      if (typeof Object.getOwnPropertySymbols !== "function")
        return [];
      return Object.getOwnPropertySymbols(obj).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(obj, sym).enumerable;
      });
    };
  }
});

// node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js
var require_getOwnEnumerableProperties = __commonJS({
  "node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js"(exports2, module2) {
    "use strict";
    var getOwnEnumerablePropertySymbols = require_getOwnEnumerablePropertySymbols();
    module2.exports = function getOwnEnumerableProperties(obj) {
      return Object.keys(obj).concat(getOwnEnumerablePropertySymbols(obj));
    };
  }
});

// node_modules/check-error/index.js
var require_check_error = __commonJS({
  "node_modules/check-error/index.js"(exports2, module2) {
    "use strict";
    var getFunctionName2 = require_get_func_name();
    function compatibleInstance(thrown, errorLike) {
      return errorLike instanceof Error && thrown === errorLike;
    }
    function compatibleConstructor(thrown, errorLike) {
      if (errorLike instanceof Error) {
        return thrown.constructor === errorLike.constructor || thrown instanceof errorLike.constructor;
      } else if (errorLike.prototype instanceof Error || errorLike === Error) {
        return thrown.constructor === errorLike || thrown instanceof errorLike;
      }
      return false;
    }
    function compatibleMessage(thrown, errMatcher) {
      var comparisonString = typeof thrown === "string" ? thrown : thrown.message;
      if (errMatcher instanceof RegExp) {
        return errMatcher.test(comparisonString);
      } else if (typeof errMatcher === "string") {
        return comparisonString.indexOf(errMatcher) !== -1;
      }
      return false;
    }
    function getConstructorName(errorLike) {
      var constructorName = errorLike;
      if (errorLike instanceof Error) {
        constructorName = getFunctionName2(errorLike.constructor);
      } else if (typeof errorLike === "function") {
        constructorName = getFunctionName2(errorLike);
        if (constructorName === "") {
          var newConstructorName = getFunctionName2(new errorLike());
          constructorName = newConstructorName || constructorName;
        }
      }
      return constructorName;
    }
    function getMessage(errorLike) {
      var msg = "";
      if (errorLike && errorLike.message) {
        msg = errorLike.message;
      } else if (typeof errorLike === "string") {
        msg = errorLike;
      }
      return msg;
    }
    module2.exports = {
      compatibleInstance,
      compatibleConstructor,
      compatibleMessage,
      getMessage,
      getConstructorName
    };
  }
});

// node_modules/chai/lib/chai/utils/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/chai/lib/chai/utils/isNaN.js"(exports2, module2) {
    "use strict";
    function isNaN3(value) {
      return value !== value;
    }
    module2.exports = Number.isNaN || isNaN3;
  }
});

// node_modules/chai/lib/chai/utils/getOperator.js
var require_getOperator = __commonJS({
  "node_modules/chai/lib/chai/utils/getOperator.js"(exports2, module2) {
    "use strict";
    var type2 = require_type_detect();
    var flag = require_flag();
    function isObjectType(obj) {
      var objectType = type2(obj);
      var objectTypes = ["Array", "Object", "function"];
      return objectTypes.indexOf(objectType) !== -1;
    }
    module2.exports = function getOperator(obj, args) {
      var operator = flag(obj, "operator");
      var negate = flag(obj, "negate");
      var expected = args[3];
      var msg = negate ? args[2] : args[1];
      if (operator) {
        return operator;
      }
      if (typeof msg === "function")
        msg = msg();
      msg = msg || "";
      if (!msg) {
        return void 0;
      }
      if (/\shave\s/.test(msg)) {
        return void 0;
      }
      var isObject4 = isObjectType(expected);
      if (/\snot\s/.test(msg)) {
        return isObject4 ? "notDeepStrictEqual" : "notStrictEqual";
      }
      return isObject4 ? "deepStrictEqual" : "strictEqual";
    };
  }
});

// node_modules/chai/lib/chai/utils/index.js
var require_utils = __commonJS({
  "node_modules/chai/lib/chai/utils/index.js"(exports2) {
    "use strict";
    var pathval = require_pathval();
    exports2.test = require_test();
    exports2.type = require_type_detect();
    exports2.expectTypes = require_expectTypes();
    exports2.getMessage = require_getMessage();
    exports2.getActual = require_getActual();
    exports2.inspect = require_inspect();
    exports2.objDisplay = require_objDisplay();
    exports2.flag = require_flag();
    exports2.transferFlags = require_transferFlags();
    exports2.eql = require_deep_eql();
    exports2.getPathInfo = pathval.getPathInfo;
    exports2.hasProperty = pathval.hasProperty;
    exports2.getName = require_get_func_name();
    exports2.addProperty = require_addProperty();
    exports2.addMethod = require_addMethod();
    exports2.overwriteProperty = require_overwriteProperty();
    exports2.overwriteMethod = require_overwriteMethod();
    exports2.addChainableMethod = require_addChainableMethod();
    exports2.overwriteChainableMethod = require_overwriteChainableMethod();
    exports2.compareByInspect = require_compareByInspect();
    exports2.getOwnEnumerablePropertySymbols = require_getOwnEnumerablePropertySymbols();
    exports2.getOwnEnumerableProperties = require_getOwnEnumerableProperties();
    exports2.checkError = require_check_error();
    exports2.proxify = require_proxify();
    exports2.addLengthGuard = require_addLengthGuard();
    exports2.isProxyEnabled = require_isProxyEnabled();
    exports2.isNaN = require_isNaN();
    exports2.getOperator = require_getOperator();
  }
});

// node_modules/chai/lib/chai/assertion.js
var require_assertion = __commonJS({
  "node_modules/chai/lib/chai/assertion.js"(exports2, module2) {
    "use strict";
    var config2 = require_config();
    module2.exports = function(_chai, util2) {
      var AssertionError2 = _chai.AssertionError, flag = util2.flag;
      _chai.Assertion = Assertion2;
      function Assertion2(obj, msg, ssfi, lockSsfi) {
        flag(this, "ssfi", ssfi || Assertion2);
        flag(this, "lockSsfi", lockSsfi);
        flag(this, "object", obj);
        flag(this, "message", msg);
        return util2.proxify(this);
      }
      Object.defineProperty(Assertion2, "includeStack", {
        get: function() {
          console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");
          return config2.includeStack;
        },
        set: function(value) {
          console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");
          config2.includeStack = value;
        }
      });
      Object.defineProperty(Assertion2, "showDiff", {
        get: function() {
          console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");
          return config2.showDiff;
        },
        set: function(value) {
          console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");
          config2.showDiff = value;
        }
      });
      Assertion2.addProperty = function(name, fn2) {
        util2.addProperty(this.prototype, name, fn2);
      };
      Assertion2.addMethod = function(name, fn2) {
        util2.addMethod(this.prototype, name, fn2);
      };
      Assertion2.addChainableMethod = function(name, fn2, chainingBehavior) {
        util2.addChainableMethod(this.prototype, name, fn2, chainingBehavior);
      };
      Assertion2.overwriteProperty = function(name, fn2) {
        util2.overwriteProperty(this.prototype, name, fn2);
      };
      Assertion2.overwriteMethod = function(name, fn2) {
        util2.overwriteMethod(this.prototype, name, fn2);
      };
      Assertion2.overwriteChainableMethod = function(name, fn2, chainingBehavior) {
        util2.overwriteChainableMethod(this.prototype, name, fn2, chainingBehavior);
      };
      Assertion2.prototype.assert = function(expr, msg, negateMsg, expected, _actual, showDiff) {
        var ok = util2.test(this, arguments);
        if (false !== showDiff)
          showDiff = true;
        if (void 0 === expected && void 0 === _actual)
          showDiff = false;
        if (true !== config2.showDiff)
          showDiff = false;
        if (!ok) {
          msg = util2.getMessage(this, arguments);
          var actual = util2.getActual(this, arguments);
          var assertionErrorObjectProperties = {
            actual,
            expected,
            showDiff
          };
          var operator = util2.getOperator(this, arguments);
          if (operator) {
            assertionErrorObjectProperties.operator = operator;
          }
          throw new AssertionError2(
            msg,
            assertionErrorObjectProperties,
            config2.includeStack ? this.assert : flag(this, "ssfi")
          );
        }
      };
      Object.defineProperty(
        Assertion2.prototype,
        "_obj",
        {
          get: function() {
            return flag(this, "object");
          },
          set: function(val) {
            flag(this, "object", val);
          }
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/core/assertions.js
var require_assertions = __commonJS({
  "node_modules/chai/lib/chai/core/assertions.js"(exports2, module2) {
    "use strict";
    module2.exports = function(chai3, _) {
      var Assertion2 = chai3.Assertion, AssertionError2 = chai3.AssertionError, flag = _.flag;
      [
        "to",
        "be",
        "been",
        "is",
        "and",
        "has",
        "have",
        "with",
        "that",
        "which",
        "at",
        "of",
        "same",
        "but",
        "does",
        "still",
        "also"
      ].forEach(function(chain) {
        Assertion2.addProperty(chain);
      });
      Assertion2.addProperty("not", function() {
        flag(this, "negate", true);
      });
      Assertion2.addProperty("deep", function() {
        flag(this, "deep", true);
      });
      Assertion2.addProperty("nested", function() {
        flag(this, "nested", true);
      });
      Assertion2.addProperty("own", function() {
        flag(this, "own", true);
      });
      Assertion2.addProperty("ordered", function() {
        flag(this, "ordered", true);
      });
      Assertion2.addProperty("any", function() {
        flag(this, "any", true);
        flag(this, "all", false);
      });
      Assertion2.addProperty("all", function() {
        flag(this, "all", true);
        flag(this, "any", false);
      });
      function an(type2, msg) {
        if (msg)
          flag(this, "message", msg);
        type2 = type2.toLowerCase();
        var obj = flag(this, "object"), article = ~["a", "e", "i", "o", "u"].indexOf(type2.charAt(0)) ? "an " : "a ";
        this.assert(
          type2 === _.type(obj).toLowerCase(),
          "expected #{this} to be " + article + type2,
          "expected #{this} not to be " + article + type2
        );
      }
      Assertion2.addChainableMethod("an", an);
      Assertion2.addChainableMethod("a", an);
      function SameValueZero(a, b2) {
        return _.isNaN(a) && _.isNaN(b2) || a === b2;
      }
      function includeChainingBehavior() {
        flag(this, "contains", true);
      }
      function include(val, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), objType = _.type(obj).toLowerCase(), flagMsg = flag(this, "message"), negate = flag(this, "negate"), ssfi = flag(this, "ssfi"), isDeep = flag(this, "deep"), descriptor = isDeep ? "deep " : "";
        flagMsg = flagMsg ? flagMsg + ": " : "";
        var included = false;
        switch (objType) {
          case "string":
            included = obj.indexOf(val) !== -1;
            break;
          case "weakset":
            if (isDeep) {
              throw new AssertionError2(
                flagMsg + "unable to use .deep.include with WeakSet",
                void 0,
                ssfi
              );
            }
            included = obj.has(val);
            break;
          case "map":
            var isEql = isDeep ? _.eql : SameValueZero;
            obj.forEach(function(item) {
              included = included || isEql(item, val);
            });
            break;
          case "set":
            if (isDeep) {
              obj.forEach(function(item) {
                included = included || _.eql(item, val);
              });
            } else {
              included = obj.has(val);
            }
            break;
          case "array":
            if (isDeep) {
              included = obj.some(function(item) {
                return _.eql(item, val);
              });
            } else {
              included = obj.indexOf(val) !== -1;
            }
            break;
          default:
            if (val !== Object(val)) {
              throw new AssertionError2(
                flagMsg + "the given combination of arguments (" + objType + " and " + _.type(val).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + _.type(val).toLowerCase(),
                void 0,
                ssfi
              );
            }
            var props = Object.keys(val), firstErr = null, numErrs = 0;
            props.forEach(function(prop) {
              var propAssertion = new Assertion2(obj);
              _.transferFlags(this, propAssertion, true);
              flag(propAssertion, "lockSsfi", true);
              if (!negate || props.length === 1) {
                propAssertion.property(prop, val[prop]);
                return;
              }
              try {
                propAssertion.property(prop, val[prop]);
              } catch (err) {
                if (!_.checkError.compatibleConstructor(err, AssertionError2)) {
                  throw err;
                }
                if (firstErr === null)
                  firstErr = err;
                numErrs++;
              }
            }, this);
            if (negate && props.length > 1 && numErrs === props.length) {
              throw firstErr;
            }
            return;
        }
        this.assert(
          included,
          "expected #{this} to " + descriptor + "include " + _.inspect(val),
          "expected #{this} to not " + descriptor + "include " + _.inspect(val)
        );
      }
      Assertion2.addChainableMethod("include", include, includeChainingBehavior);
      Assertion2.addChainableMethod("contain", include, includeChainingBehavior);
      Assertion2.addChainableMethod("contains", include, includeChainingBehavior);
      Assertion2.addChainableMethod("includes", include, includeChainingBehavior);
      Assertion2.addProperty("ok", function() {
        this.assert(
          flag(this, "object"),
          "expected #{this} to be truthy",
          "expected #{this} to be falsy"
        );
      });
      Assertion2.addProperty("true", function() {
        this.assert(
          true === flag(this, "object"),
          "expected #{this} to be true",
          "expected #{this} to be false",
          flag(this, "negate") ? false : true
        );
      });
      Assertion2.addProperty("false", function() {
        this.assert(
          false === flag(this, "object"),
          "expected #{this} to be false",
          "expected #{this} to be true",
          flag(this, "negate") ? true : false
        );
      });
      Assertion2.addProperty("null", function() {
        this.assert(
          null === flag(this, "object"),
          "expected #{this} to be null",
          "expected #{this} not to be null"
        );
      });
      Assertion2.addProperty("undefined", function() {
        this.assert(
          void 0 === flag(this, "object"),
          "expected #{this} to be undefined",
          "expected #{this} not to be undefined"
        );
      });
      Assertion2.addProperty("NaN", function() {
        this.assert(
          _.isNaN(flag(this, "object")),
          "expected #{this} to be NaN",
          "expected #{this} not to be NaN"
        );
      });
      function assertExist() {
        var val = flag(this, "object");
        this.assert(
          val !== null && val !== void 0,
          "expected #{this} to exist",
          "expected #{this} to not exist"
        );
      }
      Assertion2.addProperty("exist", assertExist);
      Assertion2.addProperty("exists", assertExist);
      Assertion2.addProperty("empty", function() {
        var val = flag(this, "object"), ssfi = flag(this, "ssfi"), flagMsg = flag(this, "message"), itemsCount;
        flagMsg = flagMsg ? flagMsg + ": " : "";
        switch (_.type(val).toLowerCase()) {
          case "array":
          case "string":
            itemsCount = val.length;
            break;
          case "map":
          case "set":
            itemsCount = val.size;
            break;
          case "weakmap":
          case "weakset":
            throw new AssertionError2(
              flagMsg + ".empty was passed a weak collection",
              void 0,
              ssfi
            );
          case "function":
            var msg = flagMsg + ".empty was passed a function " + _.getName(val);
            throw new AssertionError2(msg.trim(), void 0, ssfi);
          default:
            if (val !== Object(val)) {
              throw new AssertionError2(
                flagMsg + ".empty was passed non-string primitive " + _.inspect(val),
                void 0,
                ssfi
              );
            }
            itemsCount = Object.keys(val).length;
        }
        this.assert(
          0 === itemsCount,
          "expected #{this} to be empty",
          "expected #{this} not to be empty"
        );
      });
      function checkArguments() {
        var obj = flag(this, "object"), type2 = _.type(obj);
        this.assert(
          "Arguments" === type2,
          "expected #{this} to be arguments but got " + type2,
          "expected #{this} to not be arguments"
        );
      }
      Assertion2.addProperty("arguments", checkArguments);
      Assertion2.addProperty("Arguments", checkArguments);
      function assertEqual(val, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        if (flag(this, "deep")) {
          var prevLockSsfi = flag(this, "lockSsfi");
          flag(this, "lockSsfi", true);
          this.eql(val);
          flag(this, "lockSsfi", prevLockSsfi);
        } else {
          this.assert(
            val === obj,
            "expected #{this} to equal #{exp}",
            "expected #{this} to not equal #{exp}",
            val,
            this._obj,
            true
          );
        }
      }
      Assertion2.addMethod("equal", assertEqual);
      Assertion2.addMethod("equals", assertEqual);
      Assertion2.addMethod("eq", assertEqual);
      function assertEql(obj, msg) {
        if (msg)
          flag(this, "message", msg);
        this.assert(
          _.eql(obj, flag(this, "object")),
          "expected #{this} to deeply equal #{exp}",
          "expected #{this} to not deeply equal #{exp}",
          obj,
          this._obj,
          true
        );
      }
      Assertion2.addMethod("eql", assertEql);
      Assertion2.addMethod("eqls", assertEql);
      function assertAbove(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to above must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to above must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount > n2,
            "expected #{this} to have a " + descriptor + " above #{exp} but got #{act}",
            "expected #{this} to not have a " + descriptor + " above #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj > n2,
            "expected #{this} to be above #{exp}",
            "expected #{this} to be at most #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("above", assertAbove);
      Assertion2.addMethod("gt", assertAbove);
      Assertion2.addMethod("greaterThan", assertAbove);
      function assertLeast(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to least must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to least must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount >= n2,
            "expected #{this} to have a " + descriptor + " at least #{exp} but got #{act}",
            "expected #{this} to have a " + descriptor + " below #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj >= n2,
            "expected #{this} to be at least #{exp}",
            "expected #{this} to be below #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("least", assertLeast);
      Assertion2.addMethod("gte", assertLeast);
      Assertion2.addMethod("greaterThanOrEqual", assertLeast);
      function assertBelow(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to below must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to below must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount < n2,
            "expected #{this} to have a " + descriptor + " below #{exp} but got #{act}",
            "expected #{this} to not have a " + descriptor + " below #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj < n2,
            "expected #{this} to be below #{exp}",
            "expected #{this} to be at least #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("below", assertBelow);
      Assertion2.addMethod("lt", assertBelow);
      Assertion2.addMethod("lessThan", assertBelow);
      function assertMost(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to most must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to most must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount <= n2,
            "expected #{this} to have a " + descriptor + " at most #{exp} but got #{act}",
            "expected #{this} to have a " + descriptor + " above #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj <= n2,
            "expected #{this} to be at most #{exp}",
            "expected #{this} to be above #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("most", assertMost);
      Assertion2.addMethod("lte", assertMost);
      Assertion2.addMethod("lessThanOrEqual", assertMost);
      Assertion2.addMethod("within", function(start, finish, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), startType = _.type(start).toLowerCase(), finishType = _.type(finish).toLowerCase(), errorMessage, shouldThrow = true, range = startType === "date" && finishType === "date" ? start.toISOString() + ".." + finish.toISOString() : start + ".." + finish;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && (startType !== "date" || finishType !== "date"))) {
          errorMessage = msgPrefix + "the arguments to within must be dates";
        } else if ((startType !== "number" || finishType !== "number") && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the arguments to within must be numbers";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount >= start && itemsCount <= finish,
            "expected #{this} to have a " + descriptor + " within " + range,
            "expected #{this} to not have a " + descriptor + " within " + range
          );
        } else {
          this.assert(
            obj >= start && obj <= finish,
            "expected #{this} to be within " + range,
            "expected #{this} to not be within " + range
          );
        }
      });
      function assertInstanceOf(constructor, msg) {
        if (msg)
          flag(this, "message", msg);
        var target = flag(this, "object");
        var ssfi = flag(this, "ssfi");
        var flagMsg = flag(this, "message");
        try {
          var isInstanceOf = target instanceof constructor;
        } catch (err) {
          if (err instanceof TypeError) {
            flagMsg = flagMsg ? flagMsg + ": " : "";
            throw new AssertionError2(
              flagMsg + "The instanceof assertion needs a constructor but " + _.type(constructor) + " was given.",
              void 0,
              ssfi
            );
          }
          throw err;
        }
        var name = _.getName(constructor);
        if (name === null) {
          name = "an unnamed constructor";
        }
        this.assert(
          isInstanceOf,
          "expected #{this} to be an instance of " + name,
          "expected #{this} to not be an instance of " + name
        );
      }
      ;
      Assertion2.addMethod("instanceof", assertInstanceOf);
      Assertion2.addMethod("instanceOf", assertInstanceOf);
      function assertProperty(name, val, msg) {
        if (msg)
          flag(this, "message", msg);
        var isNested = flag(this, "nested"), isOwn = flag(this, "own"), flagMsg = flag(this, "message"), obj = flag(this, "object"), ssfi = flag(this, "ssfi"), nameType = typeof name;
        flagMsg = flagMsg ? flagMsg + ": " : "";
        if (isNested) {
          if (nameType !== "string") {
            throw new AssertionError2(
              flagMsg + "the argument to property must be a string when using nested syntax",
              void 0,
              ssfi
            );
          }
        } else {
          if (nameType !== "string" && nameType !== "number" && nameType !== "symbol") {
            throw new AssertionError2(
              flagMsg + "the argument to property must be a string, number, or symbol",
              void 0,
              ssfi
            );
          }
        }
        if (isNested && isOwn) {
          throw new AssertionError2(
            flagMsg + 'The "nested" and "own" flags cannot be combined.',
            void 0,
            ssfi
          );
        }
        if (obj === null || obj === void 0) {
          throw new AssertionError2(
            flagMsg + "Target cannot be null or undefined.",
            void 0,
            ssfi
          );
        }
        var isDeep = flag(this, "deep"), negate = flag(this, "negate"), pathInfo = isNested ? _.getPathInfo(obj, name) : null, value = isNested ? pathInfo.value : obj[name];
        var descriptor = "";
        if (isDeep)
          descriptor += "deep ";
        if (isOwn)
          descriptor += "own ";
        if (isNested)
          descriptor += "nested ";
        descriptor += "property ";
        var hasProperty;
        if (isOwn)
          hasProperty = Object.prototype.hasOwnProperty.call(obj, name);
        else if (isNested)
          hasProperty = pathInfo.exists;
        else
          hasProperty = _.hasProperty(obj, name);
        if (!negate || arguments.length === 1) {
          this.assert(
            hasProperty,
            "expected #{this} to have " + descriptor + _.inspect(name),
            "expected #{this} to not have " + descriptor + _.inspect(name)
          );
        }
        if (arguments.length > 1) {
          this.assert(
            hasProperty && (isDeep ? _.eql(val, value) : val === value),
            "expected #{this} to have " + descriptor + _.inspect(name) + " of #{exp}, but got #{act}",
            "expected #{this} to not have " + descriptor + _.inspect(name) + " of #{act}",
            val,
            value
          );
        }
        flag(this, "object", value);
      }
      Assertion2.addMethod("property", assertProperty);
      function assertOwnProperty(name, value, msg) {
        flag(this, "own", true);
        assertProperty.apply(this, arguments);
      }
      Assertion2.addMethod("ownProperty", assertOwnProperty);
      Assertion2.addMethod("haveOwnProperty", assertOwnProperty);
      function assertOwnPropertyDescriptor(name, descriptor, msg) {
        if (typeof descriptor === "string") {
          msg = descriptor;
          descriptor = null;
        }
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
        if (actualDescriptor && descriptor) {
          this.assert(
            _.eql(descriptor, actualDescriptor),
            "expected the own property descriptor for " + _.inspect(name) + " on #{this} to match " + _.inspect(descriptor) + ", got " + _.inspect(actualDescriptor),
            "expected the own property descriptor for " + _.inspect(name) + " on #{this} to not match " + _.inspect(descriptor),
            descriptor,
            actualDescriptor,
            true
          );
        } else {
          this.assert(
            actualDescriptor,
            "expected #{this} to have an own property descriptor for " + _.inspect(name),
            "expected #{this} to not have an own property descriptor for " + _.inspect(name)
          );
        }
        flag(this, "object", actualDescriptor);
      }
      Assertion2.addMethod("ownPropertyDescriptor", assertOwnPropertyDescriptor);
      Assertion2.addMethod("haveOwnPropertyDescriptor", assertOwnPropertyDescriptor);
      function assertLengthChain() {
        flag(this, "doLength", true);
      }
      function assertLength(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), objType = _.type(obj).toLowerCase(), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi"), descriptor = "length", itemsCount;
        switch (objType) {
          case "map":
          case "set":
            descriptor = "size";
            itemsCount = obj.size;
            break;
          default:
            new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
            itemsCount = obj.length;
        }
        this.assert(
          itemsCount == n2,
          "expected #{this} to have a " + descriptor + " of #{exp} but got #{act}",
          "expected #{this} to not have a " + descriptor + " of #{act}",
          n2,
          itemsCount
        );
      }
      Assertion2.addChainableMethod("length", assertLength, assertLengthChain);
      Assertion2.addChainableMethod("lengthOf", assertLength, assertLengthChain);
      function assertMatch(re, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        this.assert(
          re.exec(obj),
          "expected #{this} to match " + re,
          "expected #{this} not to match " + re
        );
      }
      Assertion2.addMethod("match", assertMatch);
      Assertion2.addMethod("matches", assertMatch);
      Assertion2.addMethod("string", function(str, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).is.a("string");
        this.assert(
          ~obj.indexOf(str),
          "expected #{this} to contain " + _.inspect(str),
          "expected #{this} to not contain " + _.inspect(str)
        );
      });
      function assertKeys(keys2) {
        var obj = flag(this, "object"), objType = _.type(obj), keysType = _.type(keys2), ssfi = flag(this, "ssfi"), isDeep = flag(this, "deep"), str, deepStr = "", actual, ok = true, flagMsg = flag(this, "message");
        flagMsg = flagMsg ? flagMsg + ": " : "";
        var mixedArgsMsg = flagMsg + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
        if (objType === "Map" || objType === "Set") {
          deepStr = isDeep ? "deeply " : "";
          actual = [];
          obj.forEach(function(val, key) {
            actual.push(key);
          });
          if (keysType !== "Array") {
            keys2 = Array.prototype.slice.call(arguments);
          }
        } else {
          actual = _.getOwnEnumerableProperties(obj);
          switch (keysType) {
            case "Array":
              if (arguments.length > 1) {
                throw new AssertionError2(mixedArgsMsg, void 0, ssfi);
              }
              break;
            case "Object":
              if (arguments.length > 1) {
                throw new AssertionError2(mixedArgsMsg, void 0, ssfi);
              }
              keys2 = Object.keys(keys2);
              break;
            default:
              keys2 = Array.prototype.slice.call(arguments);
          }
          keys2 = keys2.map(function(val) {
            return typeof val === "symbol" ? val : String(val);
          });
        }
        if (!keys2.length) {
          throw new AssertionError2(flagMsg + "keys required", void 0, ssfi);
        }
        var len = keys2.length, any = flag(this, "any"), all = flag(this, "all"), expected = keys2;
        if (!any && !all) {
          all = true;
        }
        if (any) {
          ok = expected.some(function(expectedKey) {
            return actual.some(function(actualKey) {
              if (isDeep) {
                return _.eql(expectedKey, actualKey);
              } else {
                return expectedKey === actualKey;
              }
            });
          });
        }
        if (all) {
          ok = expected.every(function(expectedKey) {
            return actual.some(function(actualKey) {
              if (isDeep) {
                return _.eql(expectedKey, actualKey);
              } else {
                return expectedKey === actualKey;
              }
            });
          });
          if (!flag(this, "contains")) {
            ok = ok && keys2.length == actual.length;
          }
        }
        if (len > 1) {
          keys2 = keys2.map(function(key) {
            return _.inspect(key);
          });
          var last = keys2.pop();
          if (all) {
            str = keys2.join(", ") + ", and " + last;
          }
          if (any) {
            str = keys2.join(", ") + ", or " + last;
          }
        } else {
          str = _.inspect(keys2[0]);
        }
        str = (len > 1 ? "keys " : "key ") + str;
        str = (flag(this, "contains") ? "contain " : "have ") + str;
        this.assert(
          ok,
          "expected #{this} to " + deepStr + str,
          "expected #{this} to not " + deepStr + str,
          expected.slice(0).sort(_.compareByInspect),
          actual.sort(_.compareByInspect),
          true
        );
      }
      Assertion2.addMethod("keys", assertKeys);
      Assertion2.addMethod("key", assertKeys);
      function assertThrows(errorLike, errMsgMatcher, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), ssfi = flag(this, "ssfi"), flagMsg = flag(this, "message"), negate = flag(this, "negate") || false;
        new Assertion2(obj, flagMsg, ssfi, true).is.a("function");
        if (errorLike instanceof RegExp || typeof errorLike === "string") {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        var caughtErr;
        try {
          obj();
        } catch (err) {
          caughtErr = err;
        }
        var everyArgIsUndefined = errorLike === void 0 && errMsgMatcher === void 0;
        var everyArgIsDefined = Boolean(errorLike && errMsgMatcher);
        var errorLikeFail = false;
        var errMsgMatcherFail = false;
        if (everyArgIsUndefined || !everyArgIsUndefined && !negate) {
          var errorLikeString = "an error";
          if (errorLike instanceof Error) {
            errorLikeString = "#{exp}";
          } else if (errorLike) {
            errorLikeString = _.checkError.getConstructorName(errorLike);
          }
          this.assert(
            caughtErr,
            "expected #{this} to throw " + errorLikeString,
            "expected #{this} to not throw an error but #{act} was thrown",
            errorLike && errorLike.toString(),
            caughtErr instanceof Error ? caughtErr.toString() : typeof caughtErr === "string" ? caughtErr : caughtErr && _.checkError.getConstructorName(caughtErr)
          );
        }
        if (errorLike && caughtErr) {
          if (errorLike instanceof Error) {
            var isCompatibleInstance = _.checkError.compatibleInstance(caughtErr, errorLike);
            if (isCompatibleInstance === negate) {
              if (everyArgIsDefined && negate) {
                errorLikeFail = true;
              } else {
                this.assert(
                  negate,
                  "expected #{this} to throw #{exp} but #{act} was thrown",
                  "expected #{this} to not throw #{exp}" + (caughtErr && !negate ? " but #{act} was thrown" : ""),
                  errorLike.toString(),
                  caughtErr.toString()
                );
              }
            }
          }
          var isCompatibleConstructor = _.checkError.compatibleConstructor(caughtErr, errorLike);
          if (isCompatibleConstructor === negate) {
            if (everyArgIsDefined && negate) {
              errorLikeFail = true;
            } else {
              this.assert(
                negate,
                "expected #{this} to throw #{exp} but #{act} was thrown",
                "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
                errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike),
                caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr)
              );
            }
          }
        }
        if (caughtErr && errMsgMatcher !== void 0 && errMsgMatcher !== null) {
          var placeholder = "including";
          if (errMsgMatcher instanceof RegExp) {
            placeholder = "matching";
          }
          var isCompatibleMessage = _.checkError.compatibleMessage(caughtErr, errMsgMatcher);
          if (isCompatibleMessage === negate) {
            if (everyArgIsDefined && negate) {
              errMsgMatcherFail = true;
            } else {
              this.assert(
                negate,
                "expected #{this} to throw error " + placeholder + " #{exp} but got #{act}",
                "expected #{this} to throw error not " + placeholder + " #{exp}",
                errMsgMatcher,
                _.checkError.getMessage(caughtErr)
              );
            }
          }
        }
        if (errorLikeFail && errMsgMatcherFail) {
          this.assert(
            negate,
            "expected #{this} to throw #{exp} but #{act} was thrown",
            "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
            errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike),
            caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr)
          );
        }
        flag(this, "object", caughtErr);
      }
      ;
      Assertion2.addMethod("throw", assertThrows);
      Assertion2.addMethod("throws", assertThrows);
      Assertion2.addMethod("Throw", assertThrows);
      function respondTo(method, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), itself = flag(this, "itself"), context = "function" === typeof obj && !itself ? obj.prototype[method] : obj[method];
        this.assert(
          "function" === typeof context,
          "expected #{this} to respond to " + _.inspect(method),
          "expected #{this} to not respond to " + _.inspect(method)
        );
      }
      Assertion2.addMethod("respondTo", respondTo);
      Assertion2.addMethod("respondsTo", respondTo);
      Assertion2.addProperty("itself", function() {
        flag(this, "itself", true);
      });
      function satisfy(matcher, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        var result = matcher(obj);
        this.assert(
          result,
          "expected #{this} to satisfy " + _.objDisplay(matcher),
          "expected #{this} to not satisfy" + _.objDisplay(matcher),
          flag(this, "negate") ? false : true,
          result
        );
      }
      Assertion2.addMethod("satisfy", satisfy);
      Assertion2.addMethod("satisfies", satisfy);
      function closeTo(expected, delta, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).is.a("number");
        if (typeof expected !== "number" || typeof delta !== "number") {
          flagMsg = flagMsg ? flagMsg + ": " : "";
          var deltaMessage = delta === void 0 ? ", and a delta is required" : "";
          throw new AssertionError2(
            flagMsg + "the arguments to closeTo or approximately must be numbers" + deltaMessage,
            void 0,
            ssfi
          );
        }
        this.assert(
          Math.abs(obj - expected) <= delta,
          "expected #{this} to be close to " + expected + " +/- " + delta,
          "expected #{this} not to be close to " + expected + " +/- " + delta
        );
      }
      Assertion2.addMethod("closeTo", closeTo);
      Assertion2.addMethod("approximately", closeTo);
      function isSubsetOf(subset, superset, cmp, contains, ordered) {
        if (!contains) {
          if (subset.length !== superset.length)
            return false;
          superset = superset.slice();
        }
        return subset.every(function(elem, idx) {
          if (ordered)
            return cmp ? cmp(elem, superset[idx]) : elem === superset[idx];
          if (!cmp) {
            var matchIdx = superset.indexOf(elem);
            if (matchIdx === -1)
              return false;
            if (!contains)
              superset.splice(matchIdx, 1);
            return true;
          }
          return superset.some(function(elem2, matchIdx2) {
            if (!cmp(elem, elem2))
              return false;
            if (!contains)
              superset.splice(matchIdx2, 1);
            return true;
          });
        });
      }
      Assertion2.addMethod("members", function(subset, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).to.be.an("array");
        new Assertion2(subset, flagMsg, ssfi, true).to.be.an("array");
        var contains = flag(this, "contains");
        var ordered = flag(this, "ordered");
        var subject, failMsg, failNegateMsg;
        if (contains) {
          subject = ordered ? "an ordered superset" : "a superset";
          failMsg = "expected #{this} to be " + subject + " of #{exp}";
          failNegateMsg = "expected #{this} to not be " + subject + " of #{exp}";
        } else {
          subject = ordered ? "ordered members" : "members";
          failMsg = "expected #{this} to have the same " + subject + " as #{exp}";
          failNegateMsg = "expected #{this} to not have the same " + subject + " as #{exp}";
        }
        var cmp = flag(this, "deep") ? _.eql : void 0;
        this.assert(
          isSubsetOf(subset, obj, cmp, contains, ordered),
          failMsg,
          failNegateMsg,
          subset,
          obj,
          true
        );
      });
      function oneOf(list, msg) {
        if (msg)
          flag(this, "message", msg);
        var expected = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi"), contains = flag(this, "contains"), isDeep = flag(this, "deep");
        new Assertion2(list, flagMsg, ssfi, true).to.be.an("array");
        if (contains) {
          this.assert(
            list.some(function(possibility) {
              return expected.indexOf(possibility) > -1;
            }),
            "expected #{this} to contain one of #{exp}",
            "expected #{this} to not contain one of #{exp}",
            list,
            expected
          );
        } else {
          if (isDeep) {
            this.assert(
              list.some(function(possibility) {
                return _.eql(expected, possibility);
              }),
              "expected #{this} to deeply equal one of #{exp}",
              "expected #{this} to deeply equal one of #{exp}",
              list,
              expected
            );
          } else {
            this.assert(
              list.indexOf(expected) > -1,
              "expected #{this} to be one of #{exp}",
              "expected #{this} to not be one of #{exp}",
              list,
              expected
            );
          }
        }
      }
      Assertion2.addMethod("oneOf", oneOf);
      function assertChanges(subject, prop, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn2 = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn2, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop);
          initial = subject[prop];
        }
        fn2();
        var final = prop === void 0 || prop === null ? subject() : subject[prop];
        var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "change");
        flag(this, "realDelta", final !== initial);
        this.assert(
          initial !== final,
          "expected " + msgObj + " to change",
          "expected " + msgObj + " to not change"
        );
      }
      Assertion2.addMethod("change", assertChanges);
      Assertion2.addMethod("changes", assertChanges);
      function assertIncreases(subject, prop, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn2 = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn2, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop);
          initial = subject[prop];
        }
        new Assertion2(initial, flagMsg, ssfi, true).is.a("number");
        fn2();
        var final = prop === void 0 || prop === null ? subject() : subject[prop];
        var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "increase");
        flag(this, "realDelta", final - initial);
        this.assert(
          final - initial > 0,
          "expected " + msgObj + " to increase",
          "expected " + msgObj + " to not increase"
        );
      }
      Assertion2.addMethod("increase", assertIncreases);
      Assertion2.addMethod("increases", assertIncreases);
      function assertDecreases(subject, prop, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn2 = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn2, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop);
          initial = subject[prop];
        }
        new Assertion2(initial, flagMsg, ssfi, true).is.a("number");
        fn2();
        var final = prop === void 0 || prop === null ? subject() : subject[prop];
        var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "decrease");
        flag(this, "realDelta", initial - final);
        this.assert(
          final - initial < 0,
          "expected " + msgObj + " to decrease",
          "expected " + msgObj + " to not decrease"
        );
      }
      Assertion2.addMethod("decrease", assertDecreases);
      Assertion2.addMethod("decreases", assertDecreases);
      function assertDelta(delta, msg) {
        if (msg)
          flag(this, "message", msg);
        var msgObj = flag(this, "deltaMsgObj");
        var initial = flag(this, "initialDeltaValue");
        var final = flag(this, "finalDeltaValue");
        var behavior = flag(this, "deltaBehavior");
        var realDelta = flag(this, "realDelta");
        var expression;
        if (behavior === "change") {
          expression = Math.abs(final - initial) === Math.abs(delta);
        } else {
          expression = realDelta === Math.abs(delta);
        }
        this.assert(
          expression,
          "expected " + msgObj + " to " + behavior + " by " + delta,
          "expected " + msgObj + " to not " + behavior + " by " + delta
        );
      }
      Assertion2.addMethod("by", assertDelta);
      Assertion2.addProperty("extensible", function() {
        var obj = flag(this, "object");
        var isExtensible = obj === Object(obj) && Object.isExtensible(obj);
        this.assert(
          isExtensible,
          "expected #{this} to be extensible",
          "expected #{this} to not be extensible"
        );
      });
      Assertion2.addProperty("sealed", function() {
        var obj = flag(this, "object");
        var isSealed = obj === Object(obj) ? Object.isSealed(obj) : true;
        this.assert(
          isSealed,
          "expected #{this} to be sealed",
          "expected #{this} to not be sealed"
        );
      });
      Assertion2.addProperty("frozen", function() {
        var obj = flag(this, "object");
        var isFrozen = obj === Object(obj) ? Object.isFrozen(obj) : true;
        this.assert(
          isFrozen,
          "expected #{this} to be frozen",
          "expected #{this} to not be frozen"
        );
      });
      Assertion2.addProperty("finite", function(msg) {
        var obj = flag(this, "object");
        this.assert(
          typeof obj === "number" && isFinite(obj),
          "expected #{this} to be a finite number",
          "expected #{this} to not be a finite number"
        );
      });
    };
  }
});

// node_modules/chai/lib/chai/interface/expect.js
var require_expect = __commonJS({
  "node_modules/chai/lib/chai/interface/expect.js"(exports2, module2) {
    "use strict";
    module2.exports = function(chai3, util2) {
      chai3.expect = function(val, message) {
        return new chai3.Assertion(val, message);
      };
      chai3.expect.fail = function(actual, expected, message, operator) {
        if (arguments.length < 2) {
          message = actual;
          actual = void 0;
        }
        message = message || "expect.fail()";
        throw new chai3.AssertionError(message, {
          actual,
          expected,
          operator
        }, chai3.expect.fail);
      };
    };
  }
});

// node_modules/chai/lib/chai/interface/should.js
var require_should = __commonJS({
  "node_modules/chai/lib/chai/interface/should.js"(exports2, module2) {
    "use strict";
    module2.exports = function(chai3, util2) {
      var Assertion2 = chai3.Assertion;
      function loadShould() {
        function shouldGetter() {
          if (this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol === "function" && this instanceof Symbol || typeof BigInt === "function" && this instanceof BigInt) {
            return new Assertion2(this.valueOf(), null, shouldGetter);
          }
          return new Assertion2(this, null, shouldGetter);
        }
        function shouldSetter(value) {
          Object.defineProperty(this, "should", {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        }
        Object.defineProperty(Object.prototype, "should", {
          set: shouldSetter,
          get: shouldGetter,
          configurable: true
        });
        var should2 = {};
        should2.fail = function(actual, expected, message, operator) {
          if (arguments.length < 2) {
            message = actual;
            actual = void 0;
          }
          message = message || "should.fail()";
          throw new chai3.AssertionError(message, {
            actual,
            expected,
            operator
          }, should2.fail);
        };
        should2.equal = function(val1, val2, msg) {
          new Assertion2(val1, msg).to.equal(val2);
        };
        should2.Throw = function(fn2, errt, errs, msg) {
          new Assertion2(fn2, msg).to.Throw(errt, errs);
        };
        should2.exist = function(val, msg) {
          new Assertion2(val, msg).to.exist;
        };
        should2.not = {};
        should2.not.equal = function(val1, val2, msg) {
          new Assertion2(val1, msg).to.not.equal(val2);
        };
        should2.not.Throw = function(fn2, errt, errs, msg) {
          new Assertion2(fn2, msg).to.not.Throw(errt, errs);
        };
        should2.not.exist = function(val, msg) {
          new Assertion2(val, msg).to.not.exist;
        };
        should2["throw"] = should2["Throw"];
        should2.not["throw"] = should2.not["Throw"];
        return should2;
      }
      ;
      chai3.should = loadShould;
      chai3.Should = loadShould;
    };
  }
});

// node_modules/chai/lib/chai/interface/assert.js
var require_assert = __commonJS({
  "node_modules/chai/lib/chai/interface/assert.js"(exports2, module2) {
    "use strict";
    module2.exports = function(chai3, util2) {
      var Assertion2 = chai3.Assertion, flag = util2.flag;
      var assert2 = chai3.assert = function(express, errmsg) {
        var test3 = new Assertion2(null, null, chai3.assert, true);
        test3.assert(
          express,
          errmsg,
          "[ negation message unavailable ]"
        );
      };
      assert2.fail = function(actual, expected, message, operator) {
        if (arguments.length < 2) {
          message = actual;
          actual = void 0;
        }
        message = message || "assert.fail()";
        throw new chai3.AssertionError(message, {
          actual,
          expected,
          operator
        }, assert2.fail);
      };
      assert2.isOk = function(val, msg) {
        new Assertion2(val, msg, assert2.isOk, true).is.ok;
      };
      assert2.isNotOk = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotOk, true).is.not.ok;
      };
      assert2.equal = function(act, exp, msg) {
        var test3 = new Assertion2(act, msg, assert2.equal, true);
        test3.assert(
          exp == flag(test3, "object"),
          "expected #{this} to equal #{exp}",
          "expected #{this} to not equal #{act}",
          exp,
          act,
          true
        );
      };
      assert2.notEqual = function(act, exp, msg) {
        var test3 = new Assertion2(act, msg, assert2.notEqual, true);
        test3.assert(
          exp != flag(test3, "object"),
          "expected #{this} to not equal #{exp}",
          "expected #{this} to equal #{act}",
          exp,
          act,
          true
        );
      };
      assert2.strictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.strictEqual, true).to.equal(exp);
      };
      assert2.notStrictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.notStrictEqual, true).to.not.equal(exp);
      };
      assert2.deepEqual = assert2.deepStrictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.deepEqual, true).to.eql(exp);
      };
      assert2.notDeepEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.notDeepEqual, true).to.not.eql(exp);
      };
      assert2.isAbove = function(val, abv, msg) {
        new Assertion2(val, msg, assert2.isAbove, true).to.be.above(abv);
      };
      assert2.isAtLeast = function(val, atlst, msg) {
        new Assertion2(val, msg, assert2.isAtLeast, true).to.be.least(atlst);
      };
      assert2.isBelow = function(val, blw, msg) {
        new Assertion2(val, msg, assert2.isBelow, true).to.be.below(blw);
      };
      assert2.isAtMost = function(val, atmst, msg) {
        new Assertion2(val, msg, assert2.isAtMost, true).to.be.most(atmst);
      };
      assert2.isTrue = function(val, msg) {
        new Assertion2(val, msg, assert2.isTrue, true).is["true"];
      };
      assert2.isNotTrue = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotTrue, true).to.not.equal(true);
      };
      assert2.isFalse = function(val, msg) {
        new Assertion2(val, msg, assert2.isFalse, true).is["false"];
      };
      assert2.isNotFalse = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotFalse, true).to.not.equal(false);
      };
      assert2.isNull = function(val, msg) {
        new Assertion2(val, msg, assert2.isNull, true).to.equal(null);
      };
      assert2.isNotNull = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNull, true).to.not.equal(null);
      };
      assert2.isNaN = function(val, msg) {
        new Assertion2(val, msg, assert2.isNaN, true).to.be.NaN;
      };
      assert2.isNotNaN = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNaN, true).not.to.be.NaN;
      };
      assert2.exists = function(val, msg) {
        new Assertion2(val, msg, assert2.exists, true).to.exist;
      };
      assert2.notExists = function(val, msg) {
        new Assertion2(val, msg, assert2.notExists, true).to.not.exist;
      };
      assert2.isUndefined = function(val, msg) {
        new Assertion2(val, msg, assert2.isUndefined, true).to.equal(void 0);
      };
      assert2.isDefined = function(val, msg) {
        new Assertion2(val, msg, assert2.isDefined, true).to.not.equal(void 0);
      };
      assert2.isFunction = function(val, msg) {
        new Assertion2(val, msg, assert2.isFunction, true).to.be.a("function");
      };
      assert2.isNotFunction = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotFunction, true).to.not.be.a("function");
      };
      assert2.isObject = function(val, msg) {
        new Assertion2(val, msg, assert2.isObject, true).to.be.a("object");
      };
      assert2.isNotObject = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotObject, true).to.not.be.a("object");
      };
      assert2.isArray = function(val, msg) {
        new Assertion2(val, msg, assert2.isArray, true).to.be.an("array");
      };
      assert2.isNotArray = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotArray, true).to.not.be.an("array");
      };
      assert2.isString = function(val, msg) {
        new Assertion2(val, msg, assert2.isString, true).to.be.a("string");
      };
      assert2.isNotString = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotString, true).to.not.be.a("string");
      };
      assert2.isNumber = function(val, msg) {
        new Assertion2(val, msg, assert2.isNumber, true).to.be.a("number");
      };
      assert2.isNotNumber = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNumber, true).to.not.be.a("number");
      };
      assert2.isFinite = function(val, msg) {
        new Assertion2(val, msg, assert2.isFinite, true).to.be.finite;
      };
      assert2.isBoolean = function(val, msg) {
        new Assertion2(val, msg, assert2.isBoolean, true).to.be.a("boolean");
      };
      assert2.isNotBoolean = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotBoolean, true).to.not.be.a("boolean");
      };
      assert2.typeOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.typeOf, true).to.be.a(type2);
      };
      assert2.notTypeOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.notTypeOf, true).to.not.be.a(type2);
      };
      assert2.instanceOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.instanceOf, true).to.be.instanceOf(type2);
      };
      assert2.notInstanceOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.notInstanceOf, true).to.not.be.instanceOf(type2);
      };
      assert2.include = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.include, true).include(inc);
      };
      assert2.notInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notInclude, true).not.include(inc);
      };
      assert2.deepInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepInclude, true).deep.include(inc);
      };
      assert2.notDeepInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepInclude, true).not.deep.include(inc);
      };
      assert2.nestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.nestedInclude, true).nested.include(inc);
      };
      assert2.notNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notNestedInclude, true).not.nested.include(inc);
      };
      assert2.deepNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepNestedInclude, true).deep.nested.include(inc);
      };
      assert2.notDeepNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepNestedInclude, true).not.deep.nested.include(inc);
      };
      assert2.ownInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.ownInclude, true).own.include(inc);
      };
      assert2.notOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notOwnInclude, true).not.own.include(inc);
      };
      assert2.deepOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepOwnInclude, true).deep.own.include(inc);
      };
      assert2.notDeepOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepOwnInclude, true).not.deep.own.include(inc);
      };
      assert2.match = function(exp, re, msg) {
        new Assertion2(exp, msg, assert2.match, true).to.match(re);
      };
      assert2.notMatch = function(exp, re, msg) {
        new Assertion2(exp, msg, assert2.notMatch, true).to.not.match(re);
      };
      assert2.property = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.property, true).to.have.property(prop);
      };
      assert2.notProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.notProperty, true).to.not.have.property(prop);
      };
      assert2.propertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.propertyVal, true).to.have.property(prop, val);
      };
      assert2.notPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notPropertyVal, true).to.not.have.property(prop, val);
      };
      assert2.deepPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.deepPropertyVal, true).to.have.deep.property(prop, val);
      };
      assert2.notDeepPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notDeepPropertyVal, true).to.not.have.deep.property(prop, val);
      };
      assert2.ownProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.ownProperty, true).to.have.own.property(prop);
      };
      assert2.notOwnProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.notOwnProperty, true).to.not.have.own.property(prop);
      };
      assert2.ownPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.ownPropertyVal, true).to.have.own.property(prop, value);
      };
      assert2.notOwnPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.notOwnPropertyVal, true).to.not.have.own.property(prop, value);
      };
      assert2.deepOwnPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.deepOwnPropertyVal, true).to.have.deep.own.property(prop, value);
      };
      assert2.notDeepOwnPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.notDeepOwnPropertyVal, true).to.not.have.deep.own.property(prop, value);
      };
      assert2.nestedProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.nestedProperty, true).to.have.nested.property(prop);
      };
      assert2.notNestedProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.notNestedProperty, true).to.not.have.nested.property(prop);
      };
      assert2.nestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.nestedPropertyVal, true).to.have.nested.property(prop, val);
      };
      assert2.notNestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notNestedPropertyVal, true).to.not.have.nested.property(prop, val);
      };
      assert2.deepNestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.deepNestedPropertyVal, true).to.have.deep.nested.property(prop, val);
      };
      assert2.notDeepNestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notDeepNestedPropertyVal, true).to.not.have.deep.nested.property(prop, val);
      };
      assert2.lengthOf = function(exp, len, msg) {
        new Assertion2(exp, msg, assert2.lengthOf, true).to.have.lengthOf(len);
      };
      assert2.hasAnyKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAnyKeys, true).to.have.any.keys(keys2);
      };
      assert2.hasAllKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAllKeys, true).to.have.all.keys(keys2);
      };
      assert2.containsAllKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.containsAllKeys, true).to.contain.all.keys(keys2);
      };
      assert2.doesNotHaveAnyKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAnyKeys, true).to.not.have.any.keys(keys2);
      };
      assert2.doesNotHaveAllKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAllKeys, true).to.not.have.all.keys(keys2);
      };
      assert2.hasAnyDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAnyDeepKeys, true).to.have.any.deep.keys(keys2);
      };
      assert2.hasAllDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAllDeepKeys, true).to.have.all.deep.keys(keys2);
      };
      assert2.containsAllDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.containsAllDeepKeys, true).to.contain.all.deep.keys(keys2);
      };
      assert2.doesNotHaveAnyDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAnyDeepKeys, true).to.not.have.any.deep.keys(keys2);
      };
      assert2.doesNotHaveAllDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAllDeepKeys, true).to.not.have.all.deep.keys(keys2);
      };
      assert2.throws = function(fn2, errorLike, errMsgMatcher, msg) {
        if ("string" === typeof errorLike || errorLike instanceof RegExp) {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        var assertErr = new Assertion2(fn2, msg, assert2.throws, true).to.throw(errorLike, errMsgMatcher);
        return flag(assertErr, "object");
      };
      assert2.doesNotThrow = function(fn2, errorLike, errMsgMatcher, msg) {
        if ("string" === typeof errorLike || errorLike instanceof RegExp) {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        new Assertion2(fn2, msg, assert2.doesNotThrow, true).to.not.throw(errorLike, errMsgMatcher);
      };
      assert2.operator = function(val, operator, val2, msg) {
        var ok;
        switch (operator) {
          case "==":
            ok = val == val2;
            break;
          case "===":
            ok = val === val2;
            break;
          case ">":
            ok = val > val2;
            break;
          case ">=":
            ok = val >= val2;
            break;
          case "<":
            ok = val < val2;
            break;
          case "<=":
            ok = val <= val2;
            break;
          case "!=":
            ok = val != val2;
            break;
          case "!==":
            ok = val !== val2;
            break;
          default:
            msg = msg ? msg + ": " : msg;
            throw new chai3.AssertionError(
              msg + 'Invalid operator "' + operator + '"',
              void 0,
              assert2.operator
            );
        }
        var test3 = new Assertion2(ok, msg, assert2.operator, true);
        test3.assert(
          true === flag(test3, "object"),
          "expected " + util2.inspect(val) + " to be " + operator + " " + util2.inspect(val2),
          "expected " + util2.inspect(val) + " to not be " + operator + " " + util2.inspect(val2)
        );
      };
      assert2.closeTo = function(act, exp, delta, msg) {
        new Assertion2(act, msg, assert2.closeTo, true).to.be.closeTo(exp, delta);
      };
      assert2.approximately = function(act, exp, delta, msg) {
        new Assertion2(act, msg, assert2.approximately, true).to.be.approximately(exp, delta);
      };
      assert2.sameMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.sameMembers, true).to.have.same.members(set22);
      };
      assert2.notSameMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.notSameMembers, true).to.not.have.same.members(set22);
      };
      assert2.sameDeepMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.sameDeepMembers, true).to.have.same.deep.members(set22);
      };
      assert2.notSameDeepMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.notSameDeepMembers, true).to.not.have.same.deep.members(set22);
      };
      assert2.sameOrderedMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.sameOrderedMembers, true).to.have.same.ordered.members(set22);
      };
      assert2.notSameOrderedMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.notSameOrderedMembers, true).to.not.have.same.ordered.members(set22);
      };
      assert2.sameDeepOrderedMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.sameDeepOrderedMembers, true).to.have.same.deep.ordered.members(set22);
      };
      assert2.notSameDeepOrderedMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.notSameDeepOrderedMembers, true).to.not.have.same.deep.ordered.members(set22);
      };
      assert2.includeMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeMembers, true).to.include.members(subset);
      };
      assert2.notIncludeMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeMembers, true).to.not.include.members(subset);
      };
      assert2.includeDeepMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeDeepMembers, true).to.include.deep.members(subset);
      };
      assert2.notIncludeDeepMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeDeepMembers, true).to.not.include.deep.members(subset);
      };
      assert2.includeOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeOrderedMembers, true).to.include.ordered.members(subset);
      };
      assert2.notIncludeOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeOrderedMembers, true).to.not.include.ordered.members(subset);
      };
      assert2.includeDeepOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeDeepOrderedMembers, true).to.include.deep.ordered.members(subset);
      };
      assert2.notIncludeDeepOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeDeepOrderedMembers, true).to.not.include.deep.ordered.members(subset);
      };
      assert2.oneOf = function(inList, list, msg) {
        new Assertion2(inList, msg, assert2.oneOf, true).to.be.oneOf(list);
      };
      assert2.changes = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.changes, true).to.change(obj, prop);
      };
      assert2.changesBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.changesBy, true).to.change(obj, prop).by(delta);
      };
      assert2.doesNotChange = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotChange, true).to.not.change(obj, prop);
      };
      assert2.changesButNotBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.changesButNotBy, true).to.change(obj, prop).but.not.by(delta);
      };
      assert2.increases = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.increases, true).to.increase(obj, prop);
      };
      assert2.increasesBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.increasesBy, true).to.increase(obj, prop).by(delta);
      };
      assert2.doesNotIncrease = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotIncrease, true).to.not.increase(obj, prop);
      };
      assert2.increasesButNotBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.increasesButNotBy, true).to.increase(obj, prop).but.not.by(delta);
      };
      assert2.decreases = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.decreases, true).to.decrease(obj, prop);
      };
      assert2.decreasesBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.decreasesBy, true).to.decrease(obj, prop).by(delta);
      };
      assert2.doesNotDecrease = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotDecrease, true).to.not.decrease(obj, prop);
      };
      assert2.doesNotDecreaseBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotDecreaseBy, true).to.not.decrease(obj, prop).by(delta);
      };
      assert2.decreasesButNotBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.decreasesButNotBy, true).to.decrease(obj, prop).but.not.by(delta);
      };
      assert2.ifError = function(val) {
        if (val) {
          throw val;
        }
      };
      assert2.isExtensible = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isExtensible, true).to.be.extensible;
      };
      assert2.isNotExtensible = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotExtensible, true).to.not.be.extensible;
      };
      assert2.isSealed = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isSealed, true).to.be.sealed;
      };
      assert2.isNotSealed = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotSealed, true).to.not.be.sealed;
      };
      assert2.isFrozen = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isFrozen, true).to.be.frozen;
      };
      assert2.isNotFrozen = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotFrozen, true).to.not.be.frozen;
      };
      assert2.isEmpty = function(val, msg) {
        new Assertion2(val, msg, assert2.isEmpty, true).to.be.empty;
      };
      assert2.isNotEmpty = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotEmpty, true).to.not.be.empty;
      };
      (function alias(name, as) {
        assert2[as] = assert2[name];
        return alias;
      })("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty");
    };
  }
});

// node_modules/chai/lib/chai.js
var require_chai = __commonJS({
  "node_modules/chai/lib/chai.js"(exports2) {
    "use strict";
    var used = [];
    exports2.version = "4.3.8";
    exports2.AssertionError = require_assertion_error();
    var util2 = require_utils();
    exports2.use = function(fn2) {
      if (!~used.indexOf(fn2)) {
        fn2(exports2, util2);
        used.push(fn2);
      }
      return exports2;
    };
    exports2.util = util2;
    var config2 = require_config();
    exports2.config = config2;
    var assertion = require_assertion();
    exports2.use(assertion);
    var core2 = require_assertions();
    exports2.use(core2);
    var expect2 = require_expect();
    exports2.use(expect2);
    var should2 = require_should();
    exports2.use(should2);
    var assert2 = require_assert();
    exports2.use(assert2);
  }
});

// node_modules/chai/index.js
var require_chai2 = __commonJS({
  "node_modules/chai/index.js"(exports2, module2) {
    "use strict";
    module2.exports = require_chai();
  }
});

// node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.mjs
function encode(decoded) {
  const state = new Int32Array(5);
  const bufLength = 1024 * 16;
  const subLength = bufLength - 36;
  const buf = new Uint8Array(bufLength);
  const sub = buf.subarray(0, subLength);
  let pos = 0;
  let out = "";
  for (let i = 0; i < decoded.length; i++) {
    const line = decoded[i];
    if (i > 0) {
      if (pos === bufLength) {
        out += td.decode(buf);
        pos = 0;
      }
      buf[pos++] = semicolon;
    }
    if (line.length === 0)
      continue;
    state[0] = 0;
    for (let j = 0; j < line.length; j++) {
      const segment = line[j];
      if (pos > subLength) {
        out += td.decode(sub);
        buf.copyWithin(0, subLength, pos);
        pos -= subLength;
      }
      if (j > 0)
        buf[pos++] = comma;
      pos = encodeInteger(buf, pos, state, segment, 0);
      if (segment.length === 1)
        continue;
      pos = encodeInteger(buf, pos, state, segment, 1);
      pos = encodeInteger(buf, pos, state, segment, 2);
      pos = encodeInteger(buf, pos, state, segment, 3);
      if (segment.length === 4)
        continue;
      pos = encodeInteger(buf, pos, state, segment, 4);
    }
  }
  return out + td.decode(buf.subarray(0, pos));
}
function encodeInteger(buf, pos, state, segment, j) {
  const next = segment[j];
  let num = next - state[j];
  state[j] = next;
  num = num < 0 ? -num << 1 | 1 : num << 1;
  do {
    let clamped = num & 31;
    num >>>= 5;
    if (num > 0)
      clamped |= 32;
    buf[pos++] = intToChar[clamped];
  } while (num > 0);
  return pos;
}
var comma, semicolon, chars, intToChar, charToInt, td;
var init_sourcemap_codec = __esm({
  "node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.mjs"() {
    "use strict";
    comma = ",".charCodeAt(0);
    semicolon = ";".charCodeAt(0);
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    intToChar = new Uint8Array(64);
    charToInt = new Uint8Array(128);
    for (let i = 0; i < chars.length; i++) {
      const c = chars.charCodeAt(i);
      intToChar[i] = c;
      charToInt[c] = i;
    }
    td = typeof TextDecoder !== "undefined" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer !== "undefined" ? {
      decode(buf) {
        const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
        return out.toString();
      }
    } : {
      decode(buf) {
        let out = "";
        for (let i = 0; i < buf.length; i++) {
          out += String.fromCharCode(buf[i]);
        }
        return out;
      }
    };
  }
});

// node_modules/magic-string/dist/magic-string.es.mjs
var magic_string_es_exports = {};
__export(magic_string_es_exports, {
  Bundle: () => Bundle,
  SourceMap: () => SourceMap,
  default: () => MagicString
});
function getBtoa() {
  if (typeof window !== "undefined" && typeof window.btoa === "function") {
    return (str) => window.btoa(unescape(encodeURIComponent(str)));
  } else if (typeof Buffer === "function") {
    return (str) => Buffer.from(str, "utf-8").toString("base64");
  } else {
    return () => {
      throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
    };
  }
}
function guessIndent(code) {
  const lines = code.split("\n");
  const tabbed = lines.filter((line) => /^\t+/.test(line));
  const spaced = lines.filter((line) => /^ {2,}/.test(line));
  if (tabbed.length === 0 && spaced.length === 0) {
    return null;
  }
  if (tabbed.length >= spaced.length) {
    return "	";
  }
  const min = spaced.reduce((previous, current) => {
    const numSpaces = /^ +/.exec(current)[0].length;
    return Math.min(numSpaces, previous);
  }, Infinity);
  return new Array(min + 1).join(" ");
}
function getRelativePath(from, to) {
  const fromParts = from.split(/[/\\]/);
  const toParts = to.split(/[/\\]/);
  fromParts.pop();
  while (fromParts[0] === toParts[0]) {
    fromParts.shift();
    toParts.shift();
  }
  if (fromParts.length) {
    let i = fromParts.length;
    while (i--)
      fromParts[i] = "..";
  }
  return fromParts.concat(toParts).join("/");
}
function isObject2(thing) {
  return toString2.call(thing) === "[object Object]";
}
function getLocator(source) {
  const originalLines = source.split("\n");
  const lineOffsets = [];
  for (let i = 0, pos = 0; i < originalLines.length; i++) {
    lineOffsets.push(pos);
    pos += originalLines[i].length + 1;
  }
  return function locate(index2) {
    let i = 0;
    let j = lineOffsets.length;
    while (i < j) {
      const m2 = i + j >> 1;
      if (index2 < lineOffsets[m2]) {
        j = m2;
      } else {
        i = m2 + 1;
      }
    }
    const line = i - 1;
    const column = index2 - lineOffsets[line];
    return { line, column };
  };
}
var BitSet, Chunk, btoa, SourceMap, toString2, wordRegex, Mappings, n, warned, MagicString, hasOwnProp, Bundle;
var init_magic_string_es = __esm({
  "node_modules/magic-string/dist/magic-string.es.mjs"() {
    "use strict";
    init_sourcemap_codec();
    BitSet = class _BitSet {
      constructor(arg) {
        this.bits = arg instanceof _BitSet ? arg.bits.slice() : [];
      }
      add(n2) {
        this.bits[n2 >> 5] |= 1 << (n2 & 31);
      }
      has(n2) {
        return !!(this.bits[n2 >> 5] & 1 << (n2 & 31));
      }
    };
    Chunk = class _Chunk {
      constructor(start, end, content) {
        this.start = start;
        this.end = end;
        this.original = content;
        this.intro = "";
        this.outro = "";
        this.content = content;
        this.storeName = false;
        this.edited = false;
        {
          this.previous = null;
          this.next = null;
        }
      }
      appendLeft(content) {
        this.outro += content;
      }
      appendRight(content) {
        this.intro = this.intro + content;
      }
      clone() {
        const chunk = new _Chunk(this.start, this.end, this.original);
        chunk.intro = this.intro;
        chunk.outro = this.outro;
        chunk.content = this.content;
        chunk.storeName = this.storeName;
        chunk.edited = this.edited;
        return chunk;
      }
      contains(index2) {
        return this.start < index2 && index2 < this.end;
      }
      eachNext(fn2) {
        let chunk = this;
        while (chunk) {
          fn2(chunk);
          chunk = chunk.next;
        }
      }
      eachPrevious(fn2) {
        let chunk = this;
        while (chunk) {
          fn2(chunk);
          chunk = chunk.previous;
        }
      }
      edit(content, storeName, contentOnly) {
        this.content = content;
        if (!contentOnly) {
          this.intro = "";
          this.outro = "";
        }
        this.storeName = storeName;
        this.edited = true;
        return this;
      }
      prependLeft(content) {
        this.outro = content + this.outro;
      }
      prependRight(content) {
        this.intro = content + this.intro;
      }
      split(index2) {
        const sliceIndex = index2 - this.start;
        const originalBefore = this.original.slice(0, sliceIndex);
        const originalAfter = this.original.slice(sliceIndex);
        this.original = originalBefore;
        const newChunk = new _Chunk(index2, this.end, originalAfter);
        newChunk.outro = this.outro;
        this.outro = "";
        this.end = index2;
        if (this.edited) {
          newChunk.edit("", false);
          this.content = "";
        } else {
          this.content = originalBefore;
        }
        newChunk.next = this.next;
        if (newChunk.next)
          newChunk.next.previous = newChunk;
        newChunk.previous = this;
        this.next = newChunk;
        return newChunk;
      }
      toString() {
        return this.intro + this.content + this.outro;
      }
      trimEnd(rx) {
        this.outro = this.outro.replace(rx, "");
        if (this.outro.length)
          return true;
        const trimmed = this.content.replace(rx, "");
        if (trimmed.length) {
          if (trimmed !== this.content) {
            this.split(this.start + trimmed.length).edit("", void 0, true);
            if (this.edited) {
              this.edit(trimmed, this.storeName, true);
            }
          }
          return true;
        } else {
          this.edit("", void 0, true);
          this.intro = this.intro.replace(rx, "");
          if (this.intro.length)
            return true;
        }
      }
      trimStart(rx) {
        this.intro = this.intro.replace(rx, "");
        if (this.intro.length)
          return true;
        const trimmed = this.content.replace(rx, "");
        if (trimmed.length) {
          if (trimmed !== this.content) {
            const newChunk = this.split(this.end - trimmed.length);
            if (this.edited) {
              newChunk.edit(trimmed, this.storeName, true);
            }
            this.edit("", void 0, true);
          }
          return true;
        } else {
          this.edit("", void 0, true);
          this.outro = this.outro.replace(rx, "");
          if (this.outro.length)
            return true;
        }
      }
    };
    btoa = /* @__PURE__ */ getBtoa();
    SourceMap = class {
      constructor(properties) {
        this.version = 3;
        this.file = properties.file;
        this.sources = properties.sources;
        this.sourcesContent = properties.sourcesContent;
        this.names = properties.names;
        this.mappings = encode(properties.mappings);
        if (typeof properties.x_google_ignoreList !== "undefined") {
          this.x_google_ignoreList = properties.x_google_ignoreList;
        }
      }
      toString() {
        return JSON.stringify(this);
      }
      toUrl() {
        return "data:application/json;charset=utf-8;base64," + btoa(this.toString());
      }
    };
    toString2 = Object.prototype.toString;
    wordRegex = /\w/;
    Mappings = class {
      constructor(hires) {
        this.hires = hires;
        this.generatedCodeLine = 0;
        this.generatedCodeColumn = 0;
        this.raw = [];
        this.rawSegments = this.raw[this.generatedCodeLine] = [];
        this.pending = null;
      }
      addEdit(sourceIndex, content, loc, nameIndex) {
        if (content.length) {
          let contentLineEnd = content.indexOf("\n", 0);
          let previousContentLineEnd = -1;
          while (contentLineEnd >= 0) {
            const segment2 = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
            if (nameIndex >= 0) {
              segment2.push(nameIndex);
            }
            this.rawSegments.push(segment2);
            this.generatedCodeLine += 1;
            this.raw[this.generatedCodeLine] = this.rawSegments = [];
            this.generatedCodeColumn = 0;
            previousContentLineEnd = contentLineEnd;
            contentLineEnd = content.indexOf("\n", contentLineEnd + 1);
          }
          const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
          if (nameIndex >= 0) {
            segment.push(nameIndex);
          }
          this.rawSegments.push(segment);
          this.advance(content.slice(previousContentLineEnd + 1));
        } else if (this.pending) {
          this.rawSegments.push(this.pending);
          this.advance(content);
        }
        this.pending = null;
      }
      addUneditedChunk(sourceIndex, chunk, original, loc, sourcemapLocations) {
        let originalCharIndex = chunk.start;
        let first = true;
        let charInHiresBoundary = false;
        while (originalCharIndex < chunk.end) {
          if (this.hires || first || sourcemapLocations.has(originalCharIndex)) {
            const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
            if (this.hires === "boundary") {
              if (wordRegex.test(original[originalCharIndex])) {
                if (!charInHiresBoundary) {
                  this.rawSegments.push(segment);
                  charInHiresBoundary = true;
                }
              } else {
                this.rawSegments.push(segment);
                charInHiresBoundary = false;
              }
            } else {
              this.rawSegments.push(segment);
            }
          }
          if (original[originalCharIndex] === "\n") {
            loc.line += 1;
            loc.column = 0;
            this.generatedCodeLine += 1;
            this.raw[this.generatedCodeLine] = this.rawSegments = [];
            this.generatedCodeColumn = 0;
            first = true;
          } else {
            loc.column += 1;
            this.generatedCodeColumn += 1;
            first = false;
          }
          originalCharIndex += 1;
        }
        this.pending = null;
      }
      advance(str) {
        if (!str)
          return;
        const lines = str.split("\n");
        if (lines.length > 1) {
          for (let i = 0; i < lines.length - 1; i++) {
            this.generatedCodeLine++;
            this.raw[this.generatedCodeLine] = this.rawSegments = [];
          }
          this.generatedCodeColumn = 0;
        }
        this.generatedCodeColumn += lines[lines.length - 1].length;
      }
    };
    n = "\n";
    warned = {
      insertLeft: false,
      insertRight: false,
      storeName: false
    };
    MagicString = class _MagicString {
      constructor(string3, options = {}) {
        const chunk = new Chunk(0, string3.length, string3);
        Object.defineProperties(this, {
          original: { writable: true, value: string3 },
          outro: { writable: true, value: "" },
          intro: { writable: true, value: "" },
          firstChunk: { writable: true, value: chunk },
          lastChunk: { writable: true, value: chunk },
          lastSearchedChunk: { writable: true, value: chunk },
          byStart: { writable: true, value: {} },
          byEnd: { writable: true, value: {} },
          filename: { writable: true, value: options.filename },
          indentExclusionRanges: { writable: true, value: options.indentExclusionRanges },
          sourcemapLocations: { writable: true, value: new BitSet() },
          storedNames: { writable: true, value: {} },
          indentStr: { writable: true, value: void 0 },
          ignoreList: { writable: true, value: options.ignoreList }
        });
        this.byStart[0] = chunk;
        this.byEnd[string3.length] = chunk;
      }
      addSourcemapLocation(char) {
        this.sourcemapLocations.add(char);
      }
      append(content) {
        if (typeof content !== "string")
          throw new TypeError("outro content must be a string");
        this.outro += content;
        return this;
      }
      appendLeft(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byEnd[index2];
        if (chunk) {
          chunk.appendLeft(content);
        } else {
          this.intro += content;
        }
        return this;
      }
      appendRight(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byStart[index2];
        if (chunk) {
          chunk.appendRight(content);
        } else {
          this.outro += content;
        }
        return this;
      }
      clone() {
        const cloned = new _MagicString(this.original, { filename: this.filename });
        let originalChunk = this.firstChunk;
        let clonedChunk = cloned.firstChunk = cloned.lastSearchedChunk = originalChunk.clone();
        while (originalChunk) {
          cloned.byStart[clonedChunk.start] = clonedChunk;
          cloned.byEnd[clonedChunk.end] = clonedChunk;
          const nextOriginalChunk = originalChunk.next;
          const nextClonedChunk = nextOriginalChunk && nextOriginalChunk.clone();
          if (nextClonedChunk) {
            clonedChunk.next = nextClonedChunk;
            nextClonedChunk.previous = clonedChunk;
            clonedChunk = nextClonedChunk;
          }
          originalChunk = nextOriginalChunk;
        }
        cloned.lastChunk = clonedChunk;
        if (this.indentExclusionRanges) {
          cloned.indentExclusionRanges = this.indentExclusionRanges.slice();
        }
        cloned.sourcemapLocations = new BitSet(this.sourcemapLocations);
        cloned.intro = this.intro;
        cloned.outro = this.outro;
        return cloned;
      }
      generateDecodedMap(options) {
        options = options || {};
        const sourceIndex = 0;
        const names = Object.keys(this.storedNames);
        const mappings = new Mappings(options.hires);
        const locate = getLocator(this.original);
        if (this.intro) {
          mappings.advance(this.intro);
        }
        this.firstChunk.eachNext((chunk) => {
          const loc = locate(chunk.start);
          if (chunk.intro.length)
            mappings.advance(chunk.intro);
          if (chunk.edited) {
            mappings.addEdit(
              sourceIndex,
              chunk.content,
              loc,
              chunk.storeName ? names.indexOf(chunk.original) : -1
            );
          } else {
            mappings.addUneditedChunk(sourceIndex, chunk, this.original, loc, this.sourcemapLocations);
          }
          if (chunk.outro.length)
            mappings.advance(chunk.outro);
        });
        return {
          file: options.file ? options.file.split(/[/\\]/).pop() : void 0,
          sources: [
            options.source ? getRelativePath(options.file || "", options.source) : options.file || ""
          ],
          sourcesContent: options.includeContent ? [this.original] : void 0,
          names,
          mappings: mappings.raw,
          x_google_ignoreList: this.ignoreList ? [sourceIndex] : void 0
        };
      }
      generateMap(options) {
        return new SourceMap(this.generateDecodedMap(options));
      }
      _ensureindentStr() {
        if (this.indentStr === void 0) {
          this.indentStr = guessIndent(this.original);
        }
      }
      _getRawIndentString() {
        this._ensureindentStr();
        return this.indentStr;
      }
      getIndentString() {
        this._ensureindentStr();
        return this.indentStr === null ? "	" : this.indentStr;
      }
      indent(indentStr, options) {
        const pattern = /^[^\r\n]/gm;
        if (isObject2(indentStr)) {
          options = indentStr;
          indentStr = void 0;
        }
        if (indentStr === void 0) {
          this._ensureindentStr();
          indentStr = this.indentStr || "	";
        }
        if (indentStr === "")
          return this;
        options = options || {};
        const isExcluded = {};
        if (options.exclude) {
          const exclusions = typeof options.exclude[0] === "number" ? [options.exclude] : options.exclude;
          exclusions.forEach((exclusion) => {
            for (let i = exclusion[0]; i < exclusion[1]; i += 1) {
              isExcluded[i] = true;
            }
          });
        }
        let shouldIndentNextCharacter = options.indentStart !== false;
        const replacer = (match) => {
          if (shouldIndentNextCharacter)
            return `${indentStr}${match}`;
          shouldIndentNextCharacter = true;
          return match;
        };
        this.intro = this.intro.replace(pattern, replacer);
        let charIndex = 0;
        let chunk = this.firstChunk;
        while (chunk) {
          const end = chunk.end;
          if (chunk.edited) {
            if (!isExcluded[charIndex]) {
              chunk.content = chunk.content.replace(pattern, replacer);
              if (chunk.content.length) {
                shouldIndentNextCharacter = chunk.content[chunk.content.length - 1] === "\n";
              }
            }
          } else {
            charIndex = chunk.start;
            while (charIndex < end) {
              if (!isExcluded[charIndex]) {
                const char = this.original[charIndex];
                if (char === "\n") {
                  shouldIndentNextCharacter = true;
                } else if (char !== "\r" && shouldIndentNextCharacter) {
                  shouldIndentNextCharacter = false;
                  if (charIndex === chunk.start) {
                    chunk.prependRight(indentStr);
                  } else {
                    this._splitChunk(chunk, charIndex);
                    chunk = chunk.next;
                    chunk.prependRight(indentStr);
                  }
                }
              }
              charIndex += 1;
            }
          }
          charIndex = chunk.end;
          chunk = chunk.next;
        }
        this.outro = this.outro.replace(pattern, replacer);
        return this;
      }
      insert() {
        throw new Error(
          "magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)"
        );
      }
      insertLeft(index2, content) {
        if (!warned.insertLeft) {
          console.warn(
            "magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"
          );
          warned.insertLeft = true;
        }
        return this.appendLeft(index2, content);
      }
      insertRight(index2, content) {
        if (!warned.insertRight) {
          console.warn(
            "magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"
          );
          warned.insertRight = true;
        }
        return this.prependRight(index2, content);
      }
      move(start, end, index2) {
        if (index2 >= start && index2 <= end)
          throw new Error("Cannot move a selection inside itself");
        this._split(start);
        this._split(end);
        this._split(index2);
        const first = this.byStart[start];
        const last = this.byEnd[end];
        const oldLeft = first.previous;
        const oldRight = last.next;
        const newRight = this.byStart[index2];
        if (!newRight && last === this.lastChunk)
          return this;
        const newLeft = newRight ? newRight.previous : this.lastChunk;
        if (oldLeft)
          oldLeft.next = oldRight;
        if (oldRight)
          oldRight.previous = oldLeft;
        if (newLeft)
          newLeft.next = first;
        if (newRight)
          newRight.previous = last;
        if (!first.previous)
          this.firstChunk = last.next;
        if (!last.next) {
          this.lastChunk = first.previous;
          this.lastChunk.next = null;
        }
        first.previous = newLeft;
        last.next = newRight || null;
        if (!newLeft)
          this.firstChunk = first;
        if (!newRight)
          this.lastChunk = last;
        return this;
      }
      overwrite(start, end, content, options) {
        options = options || {};
        return this.update(start, end, content, __spreadProps(__spreadValues({}, options), { overwrite: !options.contentOnly }));
      }
      update(start, end, content, options) {
        if (typeof content !== "string")
          throw new TypeError("replacement content must be a string");
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        if (end > this.original.length)
          throw new Error("end is out of bounds");
        if (start === end)
          throw new Error(
            "Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead"
          );
        this._split(start);
        this._split(end);
        if (options === true) {
          if (!warned.storeName) {
            console.warn(
              "The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"
            );
            warned.storeName = true;
          }
          options = { storeName: true };
        }
        const storeName = options !== void 0 ? options.storeName : false;
        const overwrite = options !== void 0 ? options.overwrite : false;
        if (storeName) {
          const original = this.original.slice(start, end);
          Object.defineProperty(this.storedNames, original, {
            writable: true,
            value: true,
            enumerable: true
          });
        }
        const first = this.byStart[start];
        const last = this.byEnd[end];
        if (first) {
          let chunk = first;
          while (chunk !== last) {
            if (chunk.next !== this.byStart[chunk.end]) {
              throw new Error("Cannot overwrite across a split point");
            }
            chunk = chunk.next;
            chunk.edit("", false);
          }
          first.edit(content, storeName, !overwrite);
        } else {
          const newChunk = new Chunk(start, end, "").edit(content, storeName);
          last.next = newChunk;
          newChunk.previous = last;
        }
        return this;
      }
      prepend(content) {
        if (typeof content !== "string")
          throw new TypeError("outro content must be a string");
        this.intro = content + this.intro;
        return this;
      }
      prependLeft(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byEnd[index2];
        if (chunk) {
          chunk.prependLeft(content);
        } else {
          this.intro = content + this.intro;
        }
        return this;
      }
      prependRight(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byStart[index2];
        if (chunk) {
          chunk.prependRight(content);
        } else {
          this.outro = content + this.outro;
        }
        return this;
      }
      remove(start, end) {
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        if (start === end)
          return this;
        if (start < 0 || end > this.original.length)
          throw new Error("Character is out of bounds");
        if (start > end)
          throw new Error("end must be greater than start");
        this._split(start);
        this._split(end);
        let chunk = this.byStart[start];
        while (chunk) {
          chunk.intro = "";
          chunk.outro = "";
          chunk.edit("");
          chunk = end > chunk.end ? this.byStart[chunk.end] : null;
        }
        return this;
      }
      lastChar() {
        if (this.outro.length)
          return this.outro[this.outro.length - 1];
        let chunk = this.lastChunk;
        do {
          if (chunk.outro.length)
            return chunk.outro[chunk.outro.length - 1];
          if (chunk.content.length)
            return chunk.content[chunk.content.length - 1];
          if (chunk.intro.length)
            return chunk.intro[chunk.intro.length - 1];
        } while (chunk = chunk.previous);
        if (this.intro.length)
          return this.intro[this.intro.length - 1];
        return "";
      }
      lastLine() {
        let lineIndex = this.outro.lastIndexOf(n);
        if (lineIndex !== -1)
          return this.outro.substr(lineIndex + 1);
        let lineStr = this.outro;
        let chunk = this.lastChunk;
        do {
          if (chunk.outro.length > 0) {
            lineIndex = chunk.outro.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.outro.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.outro + lineStr;
          }
          if (chunk.content.length > 0) {
            lineIndex = chunk.content.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.content.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.content + lineStr;
          }
          if (chunk.intro.length > 0) {
            lineIndex = chunk.intro.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.intro.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.intro + lineStr;
          }
        } while (chunk = chunk.previous);
        lineIndex = this.intro.lastIndexOf(n);
        if (lineIndex !== -1)
          return this.intro.substr(lineIndex + 1) + lineStr;
        return this.intro + lineStr;
      }
      slice(start = 0, end = this.original.length) {
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        let result = "";
        let chunk = this.firstChunk;
        while (chunk && (chunk.start > start || chunk.end <= start)) {
          if (chunk.start < end && chunk.end >= end) {
            return result;
          }
          chunk = chunk.next;
        }
        if (chunk && chunk.edited && chunk.start !== start)
          throw new Error(`Cannot use replaced character ${start} as slice start anchor.`);
        const startChunk = chunk;
        while (chunk) {
          if (chunk.intro && (startChunk !== chunk || chunk.start === start)) {
            result += chunk.intro;
          }
          const containsEnd = chunk.start < end && chunk.end >= end;
          if (containsEnd && chunk.edited && chunk.end !== end)
            throw new Error(`Cannot use replaced character ${end} as slice end anchor.`);
          const sliceStart = startChunk === chunk ? start - chunk.start : 0;
          const sliceEnd = containsEnd ? chunk.content.length + end - chunk.end : chunk.content.length;
          result += chunk.content.slice(sliceStart, sliceEnd);
          if (chunk.outro && (!containsEnd || chunk.end === end)) {
            result += chunk.outro;
          }
          if (containsEnd) {
            break;
          }
          chunk = chunk.next;
        }
        return result;
      }
      // TODO deprecate this? not really very useful
      snip(start, end) {
        const clone2 = this.clone();
        clone2.remove(0, start);
        clone2.remove(end, clone2.original.length);
        return clone2;
      }
      _split(index2) {
        if (this.byStart[index2] || this.byEnd[index2])
          return;
        let chunk = this.lastSearchedChunk;
        const searchForward = index2 > chunk.end;
        while (chunk) {
          if (chunk.contains(index2))
            return this._splitChunk(chunk, index2);
          chunk = searchForward ? this.byStart[chunk.end] : this.byEnd[chunk.start];
        }
      }
      _splitChunk(chunk, index2) {
        if (chunk.edited && chunk.content.length) {
          const loc = getLocator(this.original)(index2);
          throw new Error(
            `Cannot split a chunk that has already been edited (${loc.line}:${loc.column} \u2013 "${chunk.original}")`
          );
        }
        const newChunk = chunk.split(index2);
        this.byEnd[index2] = chunk;
        this.byStart[index2] = newChunk;
        this.byEnd[newChunk.end] = newChunk;
        if (chunk === this.lastChunk)
          this.lastChunk = newChunk;
        this.lastSearchedChunk = chunk;
        return true;
      }
      toString() {
        let str = this.intro;
        let chunk = this.firstChunk;
        while (chunk) {
          str += chunk.toString();
          chunk = chunk.next;
        }
        return str + this.outro;
      }
      isEmpty() {
        let chunk = this.firstChunk;
        do {
          if (chunk.intro.length && chunk.intro.trim() || chunk.content.length && chunk.content.trim() || chunk.outro.length && chunk.outro.trim())
            return false;
        } while (chunk = chunk.next);
        return true;
      }
      length() {
        let chunk = this.firstChunk;
        let length = 0;
        do {
          length += chunk.intro.length + chunk.content.length + chunk.outro.length;
        } while (chunk = chunk.next);
        return length;
      }
      trimLines() {
        return this.trim("[\\r\\n]");
      }
      trim(charType) {
        return this.trimStart(charType).trimEnd(charType);
      }
      trimEndAborted(charType) {
        const rx = new RegExp((charType || "\\s") + "+$");
        this.outro = this.outro.replace(rx, "");
        if (this.outro.length)
          return true;
        let chunk = this.lastChunk;
        do {
          const end = chunk.end;
          const aborted = chunk.trimEnd(rx);
          if (chunk.end !== end) {
            if (this.lastChunk === chunk) {
              this.lastChunk = chunk.next;
            }
            this.byEnd[chunk.end] = chunk;
            this.byStart[chunk.next.start] = chunk.next;
            this.byEnd[chunk.next.end] = chunk.next;
          }
          if (aborted)
            return true;
          chunk = chunk.previous;
        } while (chunk);
        return false;
      }
      trimEnd(charType) {
        this.trimEndAborted(charType);
        return this;
      }
      trimStartAborted(charType) {
        const rx = new RegExp("^" + (charType || "\\s") + "+");
        this.intro = this.intro.replace(rx, "");
        if (this.intro.length)
          return true;
        let chunk = this.firstChunk;
        do {
          const end = chunk.end;
          const aborted = chunk.trimStart(rx);
          if (chunk.end !== end) {
            if (chunk === this.lastChunk)
              this.lastChunk = chunk.next;
            this.byEnd[chunk.end] = chunk;
            this.byStart[chunk.next.start] = chunk.next;
            this.byEnd[chunk.next.end] = chunk.next;
          }
          if (aborted)
            return true;
          chunk = chunk.next;
        } while (chunk);
        return false;
      }
      trimStart(charType) {
        this.trimStartAborted(charType);
        return this;
      }
      hasChanged() {
        return this.original !== this.toString();
      }
      _replaceRegexp(searchValue, replacement) {
        function getReplacement(match, str) {
          if (typeof replacement === "string") {
            return replacement.replace(/\$(\$|&|\d+)/g, (_, i) => {
              if (i === "$")
                return "$";
              if (i === "&")
                return match[0];
              const num = +i;
              if (num < match.length)
                return match[+i];
              return `$${i}`;
            });
          } else {
            return replacement(...match, match.index, str, match.groups);
          }
        }
        function matchAll(re, str) {
          let match;
          const matches = [];
          while (match = re.exec(str)) {
            matches.push(match);
          }
          return matches;
        }
        if (searchValue.global) {
          const matches = matchAll(searchValue, this.original);
          matches.forEach((match) => {
            if (match.index != null)
              this.overwrite(
                match.index,
                match.index + match[0].length,
                getReplacement(match, this.original)
              );
          });
        } else {
          const match = this.original.match(searchValue);
          if (match && match.index != null)
            this.overwrite(
              match.index,
              match.index + match[0].length,
              getReplacement(match, this.original)
            );
        }
        return this;
      }
      _replaceString(string3, replacement) {
        const { original } = this;
        const index2 = original.indexOf(string3);
        if (index2 !== -1) {
          this.overwrite(index2, index2 + string3.length, replacement);
        }
        return this;
      }
      replace(searchValue, replacement) {
        if (typeof searchValue === "string") {
          return this._replaceString(searchValue, replacement);
        }
        return this._replaceRegexp(searchValue, replacement);
      }
      _replaceAllString(string3, replacement) {
        const { original } = this;
        const stringLength = string3.length;
        for (let index2 = original.indexOf(string3); index2 !== -1; index2 = original.indexOf(string3, index2 + stringLength)) {
          this.overwrite(index2, index2 + stringLength, replacement);
        }
        return this;
      }
      replaceAll(searchValue, replacement) {
        if (typeof searchValue === "string") {
          return this._replaceAllString(searchValue, replacement);
        }
        if (!searchValue.global) {
          throw new TypeError(
            "MagicString.prototype.replaceAll called with a non-global RegExp argument"
          );
        }
        return this._replaceRegexp(searchValue, replacement);
      }
    };
    hasOwnProp = Object.prototype.hasOwnProperty;
    Bundle = class _Bundle {
      constructor(options = {}) {
        this.intro = options.intro || "";
        this.separator = options.separator !== void 0 ? options.separator : "\n";
        this.sources = [];
        this.uniqueSources = [];
        this.uniqueSourceIndexByFilename = {};
      }
      addSource(source) {
        if (source instanceof MagicString) {
          return this.addSource({
            content: source,
            filename: source.filename,
            separator: this.separator
          });
        }
        if (!isObject2(source) || !source.content) {
          throw new Error(
            "bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`"
          );
        }
        ["filename", "ignoreList", "indentExclusionRanges", "separator"].forEach((option) => {
          if (!hasOwnProp.call(source, option))
            source[option] = source.content[option];
        });
        if (source.separator === void 0) {
          source.separator = this.separator;
        }
        if (source.filename) {
          if (!hasOwnProp.call(this.uniqueSourceIndexByFilename, source.filename)) {
            this.uniqueSourceIndexByFilename[source.filename] = this.uniqueSources.length;
            this.uniqueSources.push({ filename: source.filename, content: source.content.original });
          } else {
            const uniqueSource = this.uniqueSources[this.uniqueSourceIndexByFilename[source.filename]];
            if (source.content.original !== uniqueSource.content) {
              throw new Error(`Illegal source: same filename (${source.filename}), different contents`);
            }
          }
        }
        this.sources.push(source);
        return this;
      }
      append(str, options) {
        this.addSource({
          content: new MagicString(str),
          separator: options && options.separator || ""
        });
        return this;
      }
      clone() {
        const bundle = new _Bundle({
          intro: this.intro,
          separator: this.separator
        });
        this.sources.forEach((source) => {
          bundle.addSource({
            filename: source.filename,
            content: source.content.clone(),
            separator: source.separator
          });
        });
        return bundle;
      }
      generateDecodedMap(options = {}) {
        const names = [];
        let x_google_ignoreList = void 0;
        this.sources.forEach((source) => {
          Object.keys(source.content.storedNames).forEach((name) => {
            if (!~names.indexOf(name))
              names.push(name);
          });
        });
        const mappings = new Mappings(options.hires);
        if (this.intro) {
          mappings.advance(this.intro);
        }
        this.sources.forEach((source, i) => {
          if (i > 0) {
            mappings.advance(this.separator);
          }
          const sourceIndex = source.filename ? this.uniqueSourceIndexByFilename[source.filename] : -1;
          const magicString = source.content;
          const locate = getLocator(magicString.original);
          if (magicString.intro) {
            mappings.advance(magicString.intro);
          }
          magicString.firstChunk.eachNext((chunk) => {
            const loc = locate(chunk.start);
            if (chunk.intro.length)
              mappings.advance(chunk.intro);
            if (source.filename) {
              if (chunk.edited) {
                mappings.addEdit(
                  sourceIndex,
                  chunk.content,
                  loc,
                  chunk.storeName ? names.indexOf(chunk.original) : -1
                );
              } else {
                mappings.addUneditedChunk(
                  sourceIndex,
                  chunk,
                  magicString.original,
                  loc,
                  magicString.sourcemapLocations
                );
              }
            } else {
              mappings.advance(chunk.content);
            }
            if (chunk.outro.length)
              mappings.advance(chunk.outro);
          });
          if (magicString.outro) {
            mappings.advance(magicString.outro);
          }
          if (source.ignoreList && sourceIndex !== -1) {
            if (x_google_ignoreList === void 0) {
              x_google_ignoreList = [];
            }
            x_google_ignoreList.push(sourceIndex);
          }
        });
        return {
          file: options.file ? options.file.split(/[/\\]/).pop() : void 0,
          sources: this.uniqueSources.map((source) => {
            return options.file ? getRelativePath(options.file, source.filename) : source.filename;
          }),
          sourcesContent: this.uniqueSources.map((source) => {
            return options.includeContent ? source.content : null;
          }),
          names,
          mappings: mappings.raw,
          x_google_ignoreList
        };
      }
      generateMap(options) {
        return new SourceMap(this.generateDecodedMap(options));
      }
      getIndentString() {
        const indentStringCounts = {};
        this.sources.forEach((source) => {
          const indentStr = source.content._getRawIndentString();
          if (indentStr === null)
            return;
          if (!indentStringCounts[indentStr])
            indentStringCounts[indentStr] = 0;
          indentStringCounts[indentStr] += 1;
        });
        return Object.keys(indentStringCounts).sort((a, b2) => {
          return indentStringCounts[a] - indentStringCounts[b2];
        })[0] || "	";
      }
      indent(indentStr) {
        if (!arguments.length) {
          indentStr = this.getIndentString();
        }
        if (indentStr === "")
          return this;
        let trailingNewline = !this.intro || this.intro.slice(-1) === "\n";
        this.sources.forEach((source, i) => {
          const separator = source.separator !== void 0 ? source.separator : this.separator;
          const indentStart = trailingNewline || i > 0 && /\r?\n$/.test(separator);
          source.content.indent(indentStr, {
            exclude: source.indentExclusionRanges,
            indentStart
            //: trailingNewline || /\r?\n$/.test( separator )  //true///\r?\n/.test( separator )
          });
          trailingNewline = source.content.lastChar() === "\n";
        });
        if (this.intro) {
          this.intro = indentStr + this.intro.replace(/^[^\n]/gm, (match, index2) => {
            return index2 > 0 ? indentStr + match : match;
          });
        }
        return this;
      }
      prepend(str) {
        this.intro = str + this.intro;
        return this;
      }
      toString() {
        const body = this.sources.map((source, i) => {
          const separator = source.separator !== void 0 ? source.separator : this.separator;
          const str = (i > 0 ? separator : "") + source.content.toString();
          return str;
        }).join("");
        return this.intro + body;
      }
      isEmpty() {
        if (this.intro.length && this.intro.trim())
          return false;
        if (this.sources.some((source) => !source.content.isEmpty()))
          return false;
        return true;
      }
      length() {
        return this.sources.reduce(
          (length, source) => length + source.content.length(),
          this.intro.length
        );
      }
      trimLines() {
        return this.trim("[\\r\\n]");
      }
      trim(charType) {
        return this.trimStart(charType).trimEnd(charType);
      }
      trimStart(charType) {
        const rx = new RegExp("^" + (charType || "\\s") + "+");
        this.intro = this.intro.replace(rx, "");
        if (!this.intro) {
          let source;
          let i = 0;
          do {
            source = this.sources[i++];
            if (!source) {
              break;
            }
          } while (!source.content.trimStartAborted(charType));
        }
        return this;
      }
      trimEnd(charType) {
        const rx = new RegExp((charType || "\\s") + "+$");
        let source;
        let i = this.sources.length - 1;
        do {
          source = this.sources[i--];
          if (!source) {
            this.intro = this.intro.replace(rx, "");
            break;
          }
        } while (!source.content.trimEndAborted(charType));
        return this;
      }
    };
  }
});

// node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js
var require_s3_setup = __commonJS({
  "node_modules/@mapbox/node-pre-gyp/lib/util/s3_setup.js"(exports2, module2) {
    "use strict";
    module2.exports = exports2;
    var url = require("url");
    var fs = require("fs");
    var path = require("path");
    module2.exports.detect = function(opts, config2) {
      const to = opts.hosted_path;
      const uri = url.parse(to);
      config2.prefix = !uri.pathname || uri.pathname === "/" ? "" : uri.pathname.replace("/", "");
      if (opts.bucket && opts.region) {
        config2.bucket = opts.bucket;
        config2.region = opts.region;
        config2.endpoint = opts.host;
        config2.s3ForcePathStyle = opts.s3ForcePathStyle;
      } else {
        const parts = uri.hostname.split(".s3");
        const bucket = parts[0];
        if (!bucket) {
          return;
        }
        if (!config2.bucket) {
          config2.bucket = bucket;
        }
        if (!config2.region) {
          const region = parts[1].slice(1).split(".")[0];
          if (region === "amazonaws") {
            config2.region = "us-east-1";
          } else {
            config2.region = region;
          }
        }
      }
    };
    module2.exports.get_s3 = function(config2) {
      if (process.env.node_pre_gyp_mock_s3) {
        const AWSMock = require("mock-aws-s3");
        const os = require("os");
        AWSMock.config.basePath = `${os.tmpdir()}/mock`;
        const s32 = AWSMock.S3();
        const wcb = (fn2) => (err, ...args) => {
          if (err && err.code === "ENOENT") {
            err.code = "NotFound";
          }
          return fn2(err, ...args);
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
      AWS.config.update(config2);
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
        function get2(uri, requestBody) {
          const filepath = path.join(mockDir, uri.replace("%2B", "+"));
          try {
            fs.accessSync(filepath, fs.constants.R_OK);
          } catch (e) {
            return [404, "not found\n"];
          }
          return [200, fs.createReadStream(filepath)];
        }
        return nock(host).persist().get(() => mock_s3).reply(get2);
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
  "node_modules/abbrev/abbrev.js"(exports2, module2) {
    "use strict";
    module2.exports = exports2 = abbrev.abbrev = abbrev;
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
    function lexSort(a, b2) {
      return a === b2 ? 0 : a > b2 ? 1 : -1;
    }
  }
});

// node_modules/nopt/lib/nopt.js
var require_nopt = __commonJS({
  "node_modules/nopt/lib/nopt.js"(exports2, module2) {
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
    module2.exports = exports2 = nopt;
    exports2.clean = clean;
    exports2.typeDefs = {
      String: { type: String, validate: validateString },
      Boolean: { type: Boolean, validate: validateBoolean },
      url: { type: url, validate: validateUrl },
      Number: { type: Number, validate: validateNumber },
      path: { type: path, validate: validatePath },
      Stream: { type: Stream, validate: validateStream },
      Date: { type: Date, validate: validateDate }
    };
    function nopt(types, shorthands, args, slice2) {
      args = args || process.argv;
      types = types || {};
      shorthands = shorthands || {};
      if (typeof slice2 !== "number")
        slice2 = 2;
      debug(types, shorthands, args, slice2);
      args = args.slice(slice2);
      var data = {}, key, argv = {
        remain: [],
        cooked: args,
        original: args.slice(0)
      };
      parse(args, data, argv.remain, types, shorthands);
      clean(data, types, exports2.typeDefs);
      data.argv = argv;
      Object.defineProperty(data.argv, "toString", { value: function() {
        return this.original.map(JSON.stringify).join(" ");
      }, enumerable: false });
      return data;
    }
    function clean(data, types, typeDefs) {
      typeDefs = typeDefs || exports2.typeDefs;
      var remove = {}, typeDefault = [false, true, null, String, Array];
      Object.keys(data).forEach(function(k) {
        if (k === "argv")
          return;
        var val = data[k], isArray = Array.isArray(val), type2 = types[k];
        if (!isArray)
          val = [val];
        if (!type2)
          type2 = typeDefault;
        if (type2 === Array)
          type2 = typeDefault.concat(Array);
        if (!Array.isArray(type2))
          type2 = [type2];
        debug("val=%j", val);
        debug("types=", type2);
        val = val.map(function(val2) {
          if (typeof val2 === "string") {
            debug("string %j", val2);
            val2 = val2.trim();
            if (val2 === "null" && ~type2.indexOf(null) || val2 === "true" && (~type2.indexOf(true) || ~type2.indexOf(Boolean)) || val2 === "false" && (~type2.indexOf(false) || ~type2.indexOf(Boolean))) {
              val2 = JSON.parse(val2);
              debug("jsonable %j", val2);
            } else if (~type2.indexOf(Number) && !isNaN(val2)) {
              debug("convert to number", val2);
              val2 = +val2;
            } else if (~type2.indexOf(Date) && !isNaN(Date.parse(val2))) {
              debug("convert to date", val2);
              val2 = new Date(val2);
            }
          }
          if (!types.hasOwnProperty(k)) {
            return val2;
          }
          if (val2 === false && ~type2.indexOf(null) && !(~type2.indexOf(false) || ~type2.indexOf(Boolean))) {
            val2 = null;
          }
          var d2 = {};
          d2[k] = val2;
          debug("prevalidated val", d2, val2, types[k]);
          if (!validate(d2, k, val2, types[k], typeDefs)) {
            if (exports2.invalidHandler) {
              exports2.invalidHandler(k, val2, types[k], data);
            } else if (exports2.invalidHandler !== false) {
              debug("invalid: " + k + "=" + val2, types[k]);
            }
            return remove;
          }
          debug("validated val", d2, val2, types[k]);
          return d2[k];
        }).filter(function(val2) {
          return val2 !== remove;
        });
        if (!val.length && type2.indexOf(Array) === -1) {
          debug("VAL HAS NO LENGTH, DELETE IT", val, k, type2.indexOf(Array));
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
    function validate(data, k, val, type2, typeDefs) {
      if (Array.isArray(type2)) {
        for (var i = 0, l = type2.length; i < l; i++) {
          if (type2[i] === Array)
            continue;
          if (validate(data, k, val, type2[i], typeDefs))
            return true;
        }
        delete data[k];
        return false;
      }
      if (type2 === Array)
        return true;
      if (type2 !== type2) {
        debug("Poison NaN", k, val, type2);
        delete data[k];
        return false;
      }
      if (val === type2) {
        debug("Explicitly allowed %j", val);
        data[k] = val;
        return true;
      }
      var ok = false, types = Object.keys(typeDefs);
      for (var i = 0, l = types.length; i < l; i++) {
        debug("test type %j %j %j", k, val, types[i]);
        var t = typeDefs[types[i]];
        if (t && (type2 && type2.name && t.type && t.type.name ? type2.name === t.type.name : type2 === t.type)) {
          var d2 = {};
          ok = false !== t.validate(d2, k, val);
          val = d2[k];
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
            var v2 = arg.substr(at + 1);
            arg = arg.substr(0, at);
            args.splice(i, 1, arg, v2);
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
  "node_modules/are-we-there-yet/lib/tracker-base.js"(exports2, module2) {
    "use strict";
    var EventEmitter = require("events").EventEmitter;
    var util2 = require("util");
    var trackerId = 0;
    var TrackerBase = module2.exports = function(name) {
      EventEmitter.call(this);
      this.id = ++trackerId;
      this.name = name;
    };
    util2.inherits(TrackerBase, EventEmitter);
  }
});

// node_modules/are-we-there-yet/lib/tracker.js
var require_tracker = __commonJS({
  "node_modules/are-we-there-yet/lib/tracker.js"(exports2, module2) {
    "use strict";
    var util2 = require("util");
    var TrackerBase = require_tracker_base();
    var Tracker = module2.exports = function(name, todo) {
      TrackerBase.call(this, name);
      this.workDone = 0;
      this.workTodo = todo || 0;
    };
    util2.inherits(Tracker, TrackerBase);
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
  "node_modules/readable-stream/lib/internal/streams/stream.js"(exports2, module2) {
    "use strict";
    module2.exports = require("stream");
  }
});

// node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/buffer_list.js"(exports2, module2) {
    "use strict";
    function ownKeys(object2, enumerableOnly) {
      var keys2 = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
        })), keys2.push.apply(keys2, symbols);
      }
      return keys2;
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
    var inspect3 = _require2.inspect;
    var custom2 = inspect3 && inspect3.custom || "inspect";
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
        value: function push(v2) {
          var entry = {
            data: v2,
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
        value: function unshift(v2) {
          var entry = {
            data: v2,
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
          var p2 = this.head;
          var ret = "" + p2.data;
          while (p2 = p2.next)
            ret += s + p2.data;
          return ret;
        }
      }, {
        key: "concat",
        value: function concat(n2) {
          if (this.length === 0)
            return Buffer2.alloc(0);
          var ret = Buffer2.allocUnsafe(n2 >>> 0);
          var p2 = this.head;
          var i = 0;
          while (p2) {
            copyBuffer(p2.data, ret, i);
            i += p2.data.length;
            p2 = p2.next;
          }
          return ret;
        }
        // Consumes a specified amount of bytes or characters from the buffered data.
      }, {
        key: "consume",
        value: function consume(n2, hasStrings) {
          var ret;
          if (n2 < this.head.data.length) {
            ret = this.head.data.slice(0, n2);
            this.head.data = this.head.data.slice(n2);
          } else if (n2 === this.head.data.length) {
            ret = this.shift();
          } else {
            ret = hasStrings ? this._getString(n2) : this._getBuffer(n2);
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
        value: function _getString(n2) {
          var p2 = this.head;
          var c = 1;
          var ret = p2.data;
          n2 -= ret.length;
          while (p2 = p2.next) {
            var str = p2.data;
            var nb = n2 > str.length ? str.length : n2;
            if (nb === str.length)
              ret += str;
            else
              ret += str.slice(0, n2);
            n2 -= nb;
            if (n2 === 0) {
              if (nb === str.length) {
                ++c;
                if (p2.next)
                  this.head = p2.next;
                else
                  this.head = this.tail = null;
              } else {
                this.head = p2;
                p2.data = str.slice(nb);
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
        value: function _getBuffer(n2) {
          var ret = Buffer2.allocUnsafe(n2);
          var p2 = this.head;
          var c = 1;
          p2.data.copy(ret);
          n2 -= p2.data.length;
          while (p2 = p2.next) {
            var buf = p2.data;
            var nb = n2 > buf.length ? buf.length : n2;
            buf.copy(ret, ret.length - n2, 0, nb);
            n2 -= nb;
            if (n2 === 0) {
              if (nb === buf.length) {
                ++c;
                if (p2.next)
                  this.head = p2.next;
                else
                  this.head = this.tail = null;
              } else {
                this.head = p2;
                p2.data = buf.slice(nb);
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
        key: custom2,
        value: function value(_, options) {
          return inspect3(this, _objectSpread(_objectSpread({}, options), {}, {
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
  "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports2, module2) {
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
  "node_modules/readable-stream/errors.js"(exports2, module2) {
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
        const type2 = includes(name, ".") ? "property" : "argument";
        msg = `The "${name}" ${type2} ${determiner} ${oneOf(expected, "type")}`;
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
  "node_modules/readable-stream/lib/internal/streams/state.js"(exports2, module2) {
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
  "node_modules/inherits/inherits_browser.js"(exports2, module2) {
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
  "node_modules/inherits/inherits.js"(exports2, module2) {
    "use strict";
    try {
      util2 = require("util");
      if (typeof util2.inherits !== "function")
        throw "";
      module2.exports = util2.inherits;
    } catch (e) {
      module2.exports = require_inherits_browser();
    }
    var util2;
  }
});

// node_modules/util-deprecate/node.js
var require_node = __commonJS({
  "node_modules/util-deprecate/node.js"(exports2, module2) {
    "use strict";
    module2.exports = require("util").deprecate;
  }
});

// node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/readable-stream/lib/_stream_writable.js"(exports2, module2) {
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
        value: function value(object2) {
          if (realHasInstance.call(this, object2))
            return true;
          if (this !== Writable)
            return false;
          return object2 && object2._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function realHasInstance2(object2) {
        return object2 instanceof this;
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
      get: function get2() {
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
      get: function get2() {
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
      get: function get2() {
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
      get: function get2() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function set3(value) {
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
  "node_modules/readable-stream/lib/_stream_duplex.js"(exports2, module2) {
    "use strict";
    var objectKeys = Object.keys || function(obj) {
      var keys3 = [];
      for (var key in obj)
        keys3.push(key);
      return keys3;
    };
    module2.exports = Duplex;
    var Readable = require_stream_readable();
    var Writable = require_stream_writable();
    require_inherits()(Duplex, Readable);
    {
      keys2 = objectKeys(Writable.prototype);
      for (v2 = 0; v2 < keys2.length; v2++) {
        method = keys2[v2];
        if (!Duplex.prototype[method])
          Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    var keys2;
    var method;
    var v2;
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
      get: function get2() {
        return this._writableState.highWaterMark;
      }
    });
    Object.defineProperty(Duplex.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    Object.defineProperty(Duplex.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
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
      get: function get2() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function set3(value) {
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
  "node_modules/safe-buffer/index.js"(exports2, module2) {
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
      copyProps(buffer, exports2);
      exports2.Buffer = SafeBuffer;
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
  "node_modules/string_decoder/lib/string_decoder.js"(exports2) {
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
    exports2.StringDecoder = StringDecoder;
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
    function utf8CheckExtraBytes(self2, buf, p2) {
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
      var p2 = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p2);
      if (r !== void 0)
        return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p2, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p2, 0, buf.length);
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
      var n2 = (buf.length - i) % 3;
      if (n2 === 0)
        return buf.toString("base64", i);
      this.lastNeed = 3 - n2;
      this.lastTotal = 3;
      if (n2 === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n2);
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
  "node_modules/readable-stream/lib/internal/streams/end-of-stream.js"(exports2, module2) {
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
    function noop3() {
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function eos(stream, opts, callback) {
      if (typeof opts === "function")
        return eos(stream, null, opts);
      if (!opts)
        opts = {};
      callback = once(callback || noop3);
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
  "node_modules/readable-stream/lib/internal/streams/async_iterator.js"(exports2, module2) {
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
      var resolve2 = iter[kLastResolve];
      if (resolve2 !== null) {
        var data = iter[kStream].read();
        if (data !== null) {
          iter[kLastPromise] = null;
          iter[kLastResolve] = null;
          iter[kLastReject] = null;
          resolve2(createIterResult(data, false));
        }
      }
    }
    function onReadable(iter) {
      process.nextTick(readAndResolve, iter);
    }
    function wrapForNext(lastPromise, iter) {
      return function(resolve2, reject) {
        lastPromise.then(function() {
          if (iter[kEnded]) {
            resolve2(createIterResult(void 0, true));
            return;
          }
          iter[kHandlePromise](resolve2, reject);
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
          return new Promise(function(resolve2, reject) {
            process.nextTick(function() {
              if (_this[kError]) {
                reject(_this[kError]);
              } else {
                resolve2(createIterResult(void 0, true));
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
      return new Promise(function(resolve2, reject) {
        _this2[kStream].destroy(null, function(err) {
          if (err) {
            reject(err);
            return;
          }
          resolve2(createIterResult(void 0, true));
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
        value: function value(resolve2, reject) {
          var data = iterator[kStream].read();
          if (data) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve2(createIterResult(data, false));
          } else {
            iterator[kLastResolve] = resolve2;
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
        var resolve2 = iterator[kLastResolve];
        if (resolve2 !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve2(createIterResult(void 0, true));
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
  "node_modules/readable-stream/lib/internal/streams/from.js"(exports2, module2) {
    "use strict";
    function asyncGeneratorStep(gen, resolve2, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve2(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn2) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve2, reject) {
          var gen = fn2.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve2, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve2, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    function ownKeys(object2, enumerableOnly) {
      var keys2 = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
        })), keys2.push.apply(keys2, symbols);
      }
      return keys2;
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
  "node_modules/readable-stream/lib/_stream_readable.js"(exports2, module2) {
    "use strict";
    module2.exports = Readable;
    var Duplex;
    Readable.ReadableState = ReadableState;
    var EE = require("events").EventEmitter;
    var EElistenerCount = function EElistenerCount2(emitter, type2) {
      return emitter.listeners(type2).length;
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
    function prependListener(emitter, event, fn2) {
      if (typeof emitter.prependListener === "function")
        return emitter.prependListener(event, fn2);
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn2);
      else if (Array.isArray(emitter._events[event]))
        emitter._events[event].unshift(fn2);
      else
        emitter._events[event] = [fn2, emitter._events[event]];
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
      get: function get2() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function set3(value) {
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
      var p2 = this._readableState.buffer.head;
      var content = "";
      while (p2 !== null) {
        content += decoder.write(p2.data);
        p2 = p2.next;
      }
      this._readableState.buffer.clear();
      if (content !== "")
        this._readableState.buffer.push(content);
      this._readableState.length = content.length;
      return this;
    };
    var MAX_HWM = 1073741824;
    function computeNewHighWaterMark(n2) {
      if (n2 >= MAX_HWM) {
        n2 = MAX_HWM;
      } else {
        n2--;
        n2 |= n2 >>> 1;
        n2 |= n2 >>> 2;
        n2 |= n2 >>> 4;
        n2 |= n2 >>> 8;
        n2 |= n2 >>> 16;
        n2++;
      }
      return n2;
    }
    function howMuchToRead(n2, state) {
      if (n2 <= 0 || state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return 1;
      if (n2 !== n2) {
        if (state.flowing && state.length)
          return state.buffer.head.data.length;
        else
          return state.length;
      }
      if (n2 > state.highWaterMark)
        state.highWaterMark = computeNewHighWaterMark(n2);
      if (n2 <= state.length)
        return n2;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    Readable.prototype.read = function(n2) {
      debug("read", n2);
      n2 = parseInt(n2, 10);
      var state = this._readableState;
      var nOrig = n2;
      if (n2 !== 0)
        state.emittedReadable = false;
      if (n2 === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n2 = howMuchToRead(n2, state);
      if (n2 === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n2 < state.highWaterMark) {
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
          n2 = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n2 > 0)
        ret = fromList(n2, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n2 = 0;
      } else {
        state.length -= n2;
        state.awaitDrain = 0;
      }
      if (state.length === 0) {
        if (!state.ended)
          state.needReadable = true;
        if (nOrig !== n2 && state.ended)
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
    Readable.prototype._read = function(n2) {
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
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf3(state.pipes, dest) !== -1) && !cleanedUp) {
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
      var index2 = indexOf3(state.pipes, dest);
      if (index2 === -1)
        return this;
      state.pipes.splice(index2, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable.prototype.on = function(ev, fn2) {
      var res = Stream.prototype.on.call(this, ev, fn2);
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
    Readable.prototype.removeListener = function(ev, fn2) {
      var res = Stream.prototype.removeListener.call(this, ev, fn2);
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
      for (var n2 = 0; n2 < kProxyEvents.length; n2++) {
        stream.on(kProxyEvents[n2], this.emit.bind(this, kProxyEvents[n2]));
      }
      this._read = function(n3) {
        debug("wrapped _read", n3);
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
      get: function get2() {
        return this._readableState.highWaterMark;
      }
    });
    Object.defineProperty(Readable.prototype, "readableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        return this._readableState && this._readableState.buffer;
      }
    });
    Object.defineProperty(Readable.prototype, "readableFlowing", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        return this._readableState.flowing;
      },
      set: function set3(state) {
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
      get: function get2() {
        return this._readableState.length;
      }
    });
    function fromList(n2, state) {
      if (state.length === 0)
        return null;
      var ret;
      if (state.objectMode)
        ret = state.buffer.shift();
      else if (!n2 || n2 >= state.length) {
        if (state.decoder)
          ret = state.buffer.join("");
        else if (state.buffer.length === 1)
          ret = state.buffer.first();
        else
          ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = state.buffer.consume(n2, state.decoder);
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
    function indexOf3(xs, x) {
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
  "node_modules/readable-stream/lib/_stream_transform.js"(exports2, module2) {
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
    Transform.prototype._read = function(n2) {
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
  "node_modules/readable-stream/lib/_stream_passthrough.js"(exports2, module2) {
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
  "node_modules/readable-stream/lib/internal/streams/pipeline.js"(exports2, module2) {
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
    function noop3(err) {
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
    function call2(fn2) {
      fn2();
    }
    function pipe(from, to) {
      return from.pipe(to);
    }
    function popCallback(streams) {
      if (!streams.length)
        return noop3;
      if (typeof streams[streams.length - 1] !== "function")
        return noop3;
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
            destroys.forEach(call2);
          if (reading)
            return;
          destroys.forEach(call2);
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
  "node_modules/readable-stream/readable.js"(exports2, module2) {
    "use strict";
    var Stream = require("stream");
    if (process.env.READABLE_STREAM === "disable" && Stream) {
      module2.exports = Stream.Readable;
      Object.assign(module2.exports, Stream);
      module2.exports.Stream = Stream;
    } else {
      exports2 = module2.exports = require_stream_readable();
      exports2.Stream = Stream || exports2;
      exports2.Readable = exports2;
      exports2.Writable = require_stream_writable();
      exports2.Duplex = require_stream_duplex();
      exports2.Transform = require_stream_transform();
      exports2.PassThrough = require_stream_passthrough();
      exports2.finished = require_end_of_stream();
      exports2.pipeline = require_pipeline();
    }
  }
});

// node_modules/delegates/index.js
var require_delegates = __commonJS({
  "node_modules/delegates/index.js"(exports2, module2) {
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
  "node_modules/are-we-there-yet/lib/tracker-stream.js"(exports2, module2) {
    "use strict";
    var util2 = require("util");
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
    util2.inherits(TrackerStream, stream.Transform);
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
  "node_modules/are-we-there-yet/lib/tracker-group.js"(exports2, module2) {
    "use strict";
    var util2 = require("util");
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
    util2.inherits(TrackerGroup, TrackerBase);
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
  "node_modules/are-we-there-yet/lib/index.js"(exports2) {
    "use strict";
    exports2.TrackerGroup = require_tracker_group();
    exports2.Tracker = require_tracker();
    exports2.TrackerStream = require_tracker_stream();
  }
});

// node_modules/console-control-strings/index.js
var require_console_control_strings = __commonJS({
  "node_modules/console-control-strings/index.js"(exports2) {
    "use strict";
    var prefix = "\x1B[";
    exports2.up = function up(num) {
      return prefix + (num || "") + "A";
    };
    exports2.down = function down(num) {
      return prefix + (num || "") + "B";
    };
    exports2.forward = function forward(num) {
      return prefix + (num || "") + "C";
    };
    exports2.back = function back(num) {
      return prefix + (num || "") + "D";
    };
    exports2.nextLine = function nextLine(num) {
      return prefix + (num || "") + "E";
    };
    exports2.previousLine = function previousLine(num) {
      return prefix + (num || "") + "F";
    };
    exports2.horizontalAbsolute = function horizontalAbsolute(num) {
      if (num == null)
        throw new Error("horizontalAboslute requires a column to position to");
      return prefix + num + "G";
    };
    exports2.eraseData = function eraseData() {
      return prefix + "J";
    };
    exports2.eraseLine = function eraseLine() {
      return prefix + "K";
    };
    exports2.goto = function(x, y2) {
      return prefix + y2 + ";" + x + "H";
    };
    exports2.gotoSOL = function() {
      return "\r";
    };
    exports2.beep = function() {
      return "\x07";
    };
    exports2.hideCursor = function hideCursor() {
      return prefix + "?25l";
    };
    exports2.showCursor = function showCursor() {
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
    exports2.color = function color(colorWith) {
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
  "node_modules/ansi-regex/index.js"(exports2, module2) {
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
  "node_modules/strip-ansi/index.js"(exports2, module2) {
    "use strict";
    var ansiRegex = require_ansi_regex();
    module2.exports = (string3) => typeof string3 === "string" ? string3.replace(ansiRegex(), "") : string3;
  }
});

// node_modules/is-fullwidth-code-point/index.js
var require_is_fullwidth_code_point = __commonJS({
  "node_modules/is-fullwidth-code-point/index.js"(exports2, module2) {
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
  "node_modules/emoji-regex/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function() {
      return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
    };
  }
});

// node_modules/string-width/index.js
var require_string_width = __commonJS({
  "node_modules/string-width/index.js"(exports2, module2) {
    "use strict";
    var stripAnsi = require_strip_ansi();
    var isFullwidthCodePoint = require_is_fullwidth_code_point();
    var emojiRegex = require_emoji_regex();
    var stringWidth = (string3) => {
      if (typeof string3 !== "string" || string3.length === 0) {
        return 0;
      }
      string3 = stripAnsi(string3);
      if (string3.length === 0) {
        return 0;
      }
      string3 = string3.replace(emojiRegex(), "  ");
      let width = 0;
      for (let i = 0; i < string3.length; i++) {
        const code = string3.codePointAt(i);
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
  "node_modules/wide-align/align.js"(exports2) {
    "use strict";
    var stringWidth = require_string_width();
    exports2.center = alignCenter;
    exports2.left = alignLeft;
    exports2.right = alignRight;
    function createPadding(width) {
      var result = "";
      var string3 = " ";
      var n2 = width;
      do {
        if (n2 % 2) {
          result += string3;
        }
        n2 = Math.floor(n2 / 2);
        string3 += string3;
      } while (n2);
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
  "node_modules/aproba/index.js"(exports2, module2) {
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
          const type2 = schema[ii];
          if (!types[type2])
            throw unknownType(ii, type2);
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
          const type2 = schema[ii];
          const typeCheck = types[type2].check;
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
    function unknownType(num, type2) {
      return newException("EUNKNOWNTYPE", "Unknown type " + type2 + " in argument #" + (num + 1));
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
  "node_modules/gauge/wide-truncate.js"(exports2, module2) {
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
  "node_modules/gauge/error.js"(exports2) {
    "use strict";
    var util2 = require("util");
    var User = exports2.User = function User2(msg) {
      var err = new Error(msg);
      Error.captureStackTrace(err, User2);
      err.code = "EGAUGE";
      return err;
    };
    exports2.MissingTemplateValue = function MissingTemplateValue(item, values) {
      var err = new User(util2.format('Missing template value "%s"', item.type));
      Error.captureStackTrace(err, MissingTemplateValue);
      err.template = item;
      err.values = values;
      return err;
    };
    exports2.Internal = function Internal(msg) {
      var err = new Error(msg);
      Error.captureStackTrace(err, Internal);
      err.code = "EGAUGEINTERNAL";
      return err;
    };
  }
});

// node_modules/gauge/template-item.js
var require_template_item = __commonJS({
  "node_modules/gauge/template-item.js"(exports2, module2) {
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
  "node_modules/gauge/render-template.js"(exports2, module2) {
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
      function cloneAndObjectify(item, index2, arr) {
        var cloned = new TemplateItem(item, width);
        var type2 = cloned.type;
        if (cloned.value == null) {
          if (!(type2 in values)) {
            if (cloned.default == null) {
              throw new error.MissingTemplateValue(cloned, values);
            } else {
              cloned.value = cloned.default;
            }
          } else {
            cloned.value = values[type2];
          }
        }
        if (cloned.value == null || cloned.value === "")
          return null;
        cloned.index = index2;
        cloned.first = index2 === 0;
        cloned.last = index2 === arr.length - 1;
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
  "node_modules/gauge/plumbing.js"(exports2, module2) {
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
  "node_modules/has-unicode/index.js"(exports2, module2) {
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
  "node_modules/color-support/index.js"(exports2, module2) {
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
  "node_modules/gauge/has-color.js"(exports2, module2) {
    "use strict";
    var colorSupport = require_color_support();
    module2.exports = colorSupport().hasBasic;
  }
});

// node_modules/signal-exit/signals.js
var require_signals = __commonJS({
  "node_modules/signal-exit/signals.js"(exports2, module2) {
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
  "node_modules/signal-exit/index.js"(exports2, module2) {
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
      assert2 = require("assert");
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
        assert2.equal(typeof cb, "function", "a callback must be provided for exit handler");
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
    var assert2;
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
  "node_modules/object-assign/index.js"(exports2, module2) {
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
        var test22 = {};
        for (var i = 0; i < 10; i++) {
          test22["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test22).map(function(n2) {
          return test22[n2];
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
  "node_modules/gauge/spin.js"(exports2, module2) {
    "use strict";
    module2.exports = function spin(spinstr, spun) {
      return spinstr[spun % spinstr.length];
    };
  }
});

// node_modules/gauge/progress-bar.js
var require_progress_bar = __commonJS({
  "node_modules/gauge/progress-bar.js"(exports2, module2) {
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
    function repeat(string3, width) {
      var result = "";
      var n2 = width;
      do {
        if (n2 % 2) {
          result += string3;
        }
        n2 = Math.floor(n2 / 2);
        string3 += string3;
      } while (n2 && stringWidth(result) < width);
      return wideTruncate(result, width);
    }
  }
});

// node_modules/gauge/base-theme.js
var require_base_theme = __commonJS({
  "node_modules/gauge/base-theme.js"(exports2, module2) {
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
  "node_modules/gauge/theme-set.js"(exports2, module2) {
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
  "node_modules/gauge/themes.js"(exports2, module2) {
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
  "node_modules/gauge/set-interval.js"(exports2, module2) {
    "use strict";
    module2.exports = setInterval;
  }
});

// node_modules/gauge/process.js
var require_process = __commonJS({
  "node_modules/gauge/process.js"(exports2, module2) {
    "use strict";
    module2.exports = process;
  }
});

// node_modules/gauge/set-immediate.js
var require_set_immediate = __commonJS({
  "node_modules/gauge/set-immediate.js"(exports2, module2) {
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
  "node_modules/gauge/index.js"(exports2, module2) {
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
        var now3 = Date.now();
        if (this._lastUpdateAt && now3 - this._lastUpdateAt < this._updateInterval)
          return;
        this._lastUpdateAt = now3;
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
  "node_modules/set-blocking/index.js"(exports2, module2) {
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
  "node_modules/npmlog/log.js"(exports2, module2) {
    "use strict";
    var Progress = require_lib();
    var Gauge = require_gauge();
    var EE = require("events").EventEmitter;
    var log = exports2 = module2.exports = new EE();
    var util2 = require("util");
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
      Object.keys(log).forEach(function(P2) {
        if (P2[0] === "_") {
          return;
        }
        if (trackerConstructors.filter(function(C2) {
          return C2 === P2;
        }).length) {
          return;
        }
        if (tracker[P2]) {
          return;
        }
        if (typeof log[P2] !== "function") {
          return;
        }
        var func = log[P2];
        tracker[P2] = function() {
          return func.apply(log, arguments);
        };
      });
      if (tracker instanceof Progress.TrackerGroup) {
        trackerConstructors.forEach(function(C2) {
          var func = tracker[C2];
          tracker[C2] = function() {
            return mixinLog(func.apply(tracker, arguments));
          };
        });
      }
      return tracker;
    };
    trackerConstructors.forEach(function(C2) {
      log[C2] = function() {
        return mixinLog(this.tracker[C2].apply(this.tracker, arguments));
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
      var b2 = this._buffer;
      this._buffer = [];
      b2.forEach(function(m2) {
        this.emitLog(m2);
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
        return this.emit("error", new Error(util2.format(
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
      message = util2.format.apply(util2, a);
      var m2 = {
        id: id++,
        level: lvl,
        prefix: String(prefix || ""),
        message,
        messageRaw: a
      };
      this.emit("log", m2);
      this.emit("log." + lvl, m2);
      if (m2.prefix) {
        this.emit(m2.prefix, m2);
      }
      this.record.push(m2);
      var mrs = this.maxRecordSize;
      var n2 = this.record.length - mrs;
      if (n2 > mrs / 10) {
        var newSize = Math.floor(mrs * 0.9);
        this.record = this.record.slice(-1 * newSize);
      }
      this.emitLog(m2);
    }.bind(log);
    log.emitLog = function(m2) {
      if (this._paused) {
        this._buffer.push(m2);
        return;
      }
      if (this.progressEnabled) {
        this.gauge.pulse(m2.prefix);
      }
      var l = this.levels[m2.level];
      if (l === void 0) {
        return;
      }
      if (l < this.levels[this.level]) {
        return;
      }
      if (l > 0 && !isFinite(l)) {
        return;
      }
      var disp = log.disp[m2.level] != null ? log.disp[m2.level] : m2.level;
      this.clearProgress();
      m2.message.split(/\r?\n/).forEach(function(line) {
        if (this.heading) {
          this.write(this.heading, this.headingStyle);
          this.write(" ");
        }
        this.write(disp, log.style[m2.level]);
        var p2 = m2.prefix || "";
        if (p2) {
          this.write(" ");
        }
        this.write(p2, this.prefixStyle);
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
    log.addLevel = function(lvl, n2, style, disp) {
      if (disp == null) {
        disp = lvl;
      }
      this.levels[lvl] = n2;
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
  "node_modules/fs.realpath/old.js"(exports2) {
    "use strict";
    var pathModule = require("path");
    var isWindows2 = process.platform === "win32";
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
    if (isWindows2) {
      nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
    } else {
      nextPartRe = /(.*?)(?:[\/]+|$)/g;
    }
    var nextPartRe;
    if (isWindows2) {
      splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
    } else {
      splitRootRe = /^[\/]*/;
    }
    var splitRootRe;
    exports2.realpathSync = function realpathSync(p2, cache2) {
      p2 = pathModule.resolve(p2);
      if (cache2 && Object.prototype.hasOwnProperty.call(cache2, p2)) {
        return cache2[p2];
      }
      var original = p2, seenLinks = {}, knownHard = {};
      var pos;
      var current;
      var base;
      var previous;
      start();
      function start() {
        var m2 = splitRootRe.exec(p2);
        pos = m2[0].length;
        current = m2[0];
        base = m2[0];
        previous = "";
        if (isWindows2 && !knownHard[base]) {
          fs.lstatSync(base);
          knownHard[base] = true;
        }
      }
      while (pos < p2.length) {
        nextPartRe.lastIndex = pos;
        var result = nextPartRe.exec(p2);
        previous = current;
        current += result[0];
        base = previous + result[1];
        pos = nextPartRe.lastIndex;
        if (knownHard[base] || cache2 && cache2[base] === base) {
          continue;
        }
        var resolvedLink;
        if (cache2 && Object.prototype.hasOwnProperty.call(cache2, base)) {
          resolvedLink = cache2[base];
        } else {
          var stat = fs.lstatSync(base);
          if (!stat.isSymbolicLink()) {
            knownHard[base] = true;
            if (cache2)
              cache2[base] = base;
            continue;
          }
          var linkTarget = null;
          if (!isWindows2) {
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
          if (cache2)
            cache2[base] = resolvedLink;
          if (!isWindows2)
            seenLinks[id] = linkTarget;
        }
        p2 = pathModule.resolve(resolvedLink, p2.slice(pos));
        start();
      }
      if (cache2)
        cache2[original] = p2;
      return p2;
    };
    exports2.realpath = function realpath(p2, cache2, cb) {
      if (typeof cb !== "function") {
        cb = maybeCallback(cache2);
        cache2 = null;
      }
      p2 = pathModule.resolve(p2);
      if (cache2 && Object.prototype.hasOwnProperty.call(cache2, p2)) {
        return process.nextTick(cb.bind(null, null, cache2[p2]));
      }
      var original = p2, seenLinks = {}, knownHard = {};
      var pos;
      var current;
      var base;
      var previous;
      start();
      function start() {
        var m2 = splitRootRe.exec(p2);
        pos = m2[0].length;
        current = m2[0];
        base = m2[0];
        previous = "";
        if (isWindows2 && !knownHard[base]) {
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
        if (pos >= p2.length) {
          if (cache2)
            cache2[original] = p2;
          return cb(null, p2);
        }
        nextPartRe.lastIndex = pos;
        var result = nextPartRe.exec(p2);
        previous = current;
        current += result[0];
        base = previous + result[1];
        pos = nextPartRe.lastIndex;
        if (knownHard[base] || cache2 && cache2[base] === base) {
          return process.nextTick(LOOP);
        }
        if (cache2 && Object.prototype.hasOwnProperty.call(cache2, base)) {
          return gotResolvedLink(cache2[base]);
        }
        return fs.lstat(base, gotStat);
      }
      function gotStat(err, stat) {
        if (err)
          return cb(err);
        if (!stat.isSymbolicLink()) {
          knownHard[base] = true;
          if (cache2)
            cache2[base] = base;
          return process.nextTick(LOOP);
        }
        if (!isWindows2) {
          var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
          if (seenLinks.hasOwnProperty(id)) {
            return gotTarget(null, seenLinks[id], base);
          }
        }
        fs.stat(base, function(err2) {
          if (err2)
            return cb(err2);
          fs.readlink(base, function(err3, target) {
            if (!isWindows2)
              seenLinks[id] = target;
            gotTarget(err3, target);
          });
        });
      }
      function gotTarget(err, target, base2) {
        if (err)
          return cb(err);
        var resolvedLink = pathModule.resolve(previous, target);
        if (cache2)
          cache2[base2] = resolvedLink;
        gotResolvedLink(resolvedLink);
      }
      function gotResolvedLink(resolvedLink) {
        p2 = pathModule.resolve(resolvedLink, p2.slice(pos));
        start();
      }
    };
  }
});

// node_modules/fs.realpath/index.js
var require_fs = __commonJS({
  "node_modules/fs.realpath/index.js"(exports2, module2) {
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
    var version2 = process.version;
    var ok = /^v[0-5]\./.test(version2);
    var old = require_old();
    function newError(er) {
      return er && er.syscall === "realpath" && (er.code === "ELOOP" || er.code === "ENOMEM" || er.code === "ENAMETOOLONG");
    }
    function realpath(p2, cache2, cb) {
      if (ok) {
        return origRealpath(p2, cache2, cb);
      }
      if (typeof cache2 === "function") {
        cb = cache2;
        cache2 = null;
      }
      origRealpath(p2, cache2, function(er, result) {
        if (newError(er)) {
          old.realpath(p2, cache2, cb);
        } else {
          cb(er, result);
        }
      });
    }
    function realpathSync(p2, cache2) {
      if (ok) {
        return origRealpathSync(p2, cache2);
      }
      try {
        return origRealpathSync(p2, cache2);
      } catch (er) {
        if (newError(er)) {
          return old.realpathSync(p2, cache2);
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
  "node_modules/concat-map/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function(xs, fn2) {
      var res = [];
      for (var i = 0; i < xs.length; i++) {
        var x = fn2(xs[i], i);
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
  "node_modules/balanced-match/index.js"(exports2, module2) {
    "use strict";
    module2.exports = balanced;
    function balanced(a, b2, str) {
      if (a instanceof RegExp)
        a = maybeMatch(a, str);
      if (b2 instanceof RegExp)
        b2 = maybeMatch(b2, str);
      var r = range(a, b2, str);
      return r && {
        start: r[0],
        end: r[1],
        pre: str.slice(0, r[0]),
        body: str.slice(r[0] + a.length, r[1]),
        post: str.slice(r[1] + b2.length)
      };
    }
    function maybeMatch(reg, str) {
      var m2 = str.match(reg);
      return m2 ? m2[0] : null;
    }
    balanced.range = range;
    function range(a, b2, str) {
      var begs, beg, left, right, result;
      var ai = str.indexOf(a);
      var bi = str.indexOf(b2, ai + 1);
      var i = ai;
      if (ai >= 0 && bi > 0) {
        if (a === b2) {
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
            bi = str.indexOf(b2, i + 1);
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
  "node_modules/brace-expansion/index.js"(exports2, module2) {
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
      var m2 = balanced("{", "}", str);
      if (!m2)
        return str.split(",");
      var pre = m2.pre;
      var body = m2.body;
      var post = m2.post;
      var p2 = pre.split(",");
      p2[p2.length - 1] += "{" + body + "}";
      var postParts = parseCommaParts(post);
      if (post.length) {
        p2[p2.length - 1] += postParts.shift();
        p2.push.apply(p2, postParts);
      }
      parts.push.apply(parts, p2);
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
    function lte(i, y2) {
      return i <= y2;
    }
    function gte(i, y2) {
      return i >= y2;
    }
    function expand(str, isTop) {
      var expansions = [];
      var m2 = balanced("{", "}", str);
      if (!m2 || /\$$/.test(m2.pre))
        return [str];
      var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m2.body);
      var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m2.body);
      var isSequence = isNumericSequence || isAlphaSequence;
      var isOptions = m2.body.indexOf(",") >= 0;
      if (!isSequence && !isOptions) {
        if (m2.post.match(/,.*\}/)) {
          str = m2.pre + "{" + m2.body + escClose + m2.post;
          return expand(str);
        }
        return [str];
      }
      var n2;
      if (isSequence) {
        n2 = m2.body.split(/\.\./);
      } else {
        n2 = parseCommaParts(m2.body);
        if (n2.length === 1) {
          n2 = expand(n2[0], false).map(embrace);
          if (n2.length === 1) {
            var post = m2.post.length ? expand(m2.post, false) : [""];
            return post.map(function(p2) {
              return m2.pre + n2[0] + p2;
            });
          }
        }
      }
      var pre = m2.pre;
      var post = m2.post.length ? expand(m2.post, false) : [""];
      var N;
      if (isSequence) {
        var x = numeric(n2[0]);
        var y2 = numeric(n2[1]);
        var width = Math.max(n2[0].length, n2[1].length);
        var incr = n2.length == 3 ? Math.abs(numeric(n2[2])) : 1;
        var test3 = lte;
        var reverse = y2 < x;
        if (reverse) {
          incr *= -1;
          test3 = gte;
        }
        var pad = n2.some(isPadded);
        N = [];
        for (var i = x; test3(i, y2); i += incr) {
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
        N = concatMap(n2, function(el) {
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
  "node_modules/minimatch/minimatch.js"(exports2, module2) {
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
      return s.split("").reduce(function(set3, c) {
        set3[c] = true;
        return set3;
      }, {});
    }
    var slashSplit = /\/+/;
    minimatch.filter = filter;
    function filter(pattern, options) {
      options = options || {};
      return function(p2, i, list) {
        return minimatch(p2, pattern, options);
      };
    }
    function ext(a, b2) {
      b2 = b2 || {};
      var t = {};
      Object.keys(a).forEach(function(k) {
        t[k] = a[k];
      });
      Object.keys(b2).forEach(function(k) {
        t[k] = b2[k];
      });
      return t;
    }
    minimatch.defaults = function(def) {
      if (!def || typeof def !== "object" || !Object.keys(def).length) {
        return minimatch;
      }
      var orig = minimatch;
      var m2 = function minimatch2(p2, pattern, options) {
        return orig(p2, pattern, ext(def, options));
      };
      m2.Minimatch = function Minimatch2(pattern, options) {
        return new orig.Minimatch(pattern, ext(def, options));
      };
      m2.Minimatch.defaults = function defaults(options) {
        return orig.defaults(ext(def, options)).Minimatch;
      };
      m2.filter = function filter2(pattern, options) {
        return orig.filter(pattern, ext(def, options));
      };
      m2.defaults = function defaults(options) {
        return orig.defaults(ext(def, options));
      };
      m2.makeRe = function makeRe2(pattern, options) {
        return orig.makeRe(pattern, ext(def, options));
      };
      m2.braceExpand = function braceExpand2(pattern, options) {
        return orig.braceExpand(pattern, ext(def, options));
      };
      m2.match = function(list, pattern, options) {
        return orig.match(list, pattern, ext(def, options));
      };
      return m2;
    };
    Minimatch.defaults = function(def) {
      return minimatch.defaults(def).Minimatch;
    };
    function minimatch(p2, pattern, options) {
      assertValidPattern(pattern);
      if (!options)
        options = {};
      if (!options.nocomment && pattern.charAt(0) === "#") {
        return false;
      }
      return new Minimatch(pattern, options).match(p2);
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
      var set3 = this.globSet = this.braceExpand();
      if (options.debug)
        this.debug = function debug() {
          console.error.apply(console, arguments);
        };
      this.debug(this.pattern, set3);
      set3 = this.globParts = set3.map(function(s) {
        return s.split(slashSplit);
      });
      this.debug(this.pattern, set3);
      set3 = set3.map(function(s, si, set4) {
        return s.map(this.parse, this);
      }, this);
      this.debug(this.pattern, set3);
      set3 = set3.filter(function(s) {
        return s.indexOf(false) === -1;
      });
      this.debug(this.pattern, set3);
      this.set = set3;
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
      for (var n2 = negativeLists.length - 1; n2 > -1; n2--) {
        var nl = negativeLists[n2];
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
      var set3 = this.set;
      if (!set3.length) {
        this.regexp = false;
        return this.regexp;
      }
      var options = this.options;
      var twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
      var flags = options.nocase ? "i" : "";
      var re = set3.map(function(pattern) {
        return pattern.map(function(p2) {
          return p2 === GLOBSTAR ? twoStar : typeof p2 === "string" ? regExpEscape(p2) : p2._src;
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
      var set3 = this.set;
      this.debug(this.pattern, "set", set3);
      var filename;
      var i;
      for (i = f.length - 1; i >= 0; i--) {
        filename = f[i];
        if (filename)
          break;
      }
      for (i = 0; i < set3.length; i++) {
        var pattern = set3[i];
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
        var p2 = pattern[pi];
        var f = file[fi];
        this.debug(pattern, p2, f);
        if (p2 === false)
          return false;
        if (p2 === GLOBSTAR) {
          this.debug("GLOBSTAR", [pattern, p2, f]);
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
        if (typeof p2 === "string") {
          hit = f === p2;
          this.debug("string match", p2, f, hit);
        } else {
          hit = f.match(p2);
          this.debug("pattern match", p2, f, hit);
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
  "node_modules/path-is-absolute/index.js"(exports2, module2) {
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
  "node_modules/glob/common.js"(exports2) {
    "use strict";
    exports2.setopts = setopts;
    exports2.ownProp = ownProp;
    exports2.makeAbs = makeAbs;
    exports2.finish = finish;
    exports2.mark = mark;
    exports2.isIgnored = isIgnored;
    exports2.childrenIgnored = childrenIgnored;
    function ownProp(obj, field) {
      return Object.prototype.hasOwnProperty.call(obj, field);
    }
    var fs = require("fs");
    var path = require("path");
    var minimatch = require_minimatch();
    var isAbsolute3 = require_path_is_absolute();
    var Minimatch = minimatch.Minimatch;
    function alphasort(a, b2) {
      return a.localeCompare(b2, "en");
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
      var cwd3 = process.cwd();
      if (!ownProp(options, "cwd"))
        self2.cwd = cwd3;
      else {
        self2.cwd = path.resolve(options.cwd);
        self2.changedCwd = self2.cwd !== cwd3;
      }
      self2.root = options.root || path.resolve(self2.cwd, "/");
      self2.root = path.resolve(self2.root);
      if (process.platform === "win32")
        self2.root = self2.root.replace(/\\/g, "/");
      self2.cwdAbs = isAbsolute3(self2.cwd) ? self2.cwd : makeAbs(self2, self2.cwd);
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
          var m2 = Object.keys(matches);
          if (nou)
            all.push.apply(all, m2);
          else
            m2.forEach(function(m3) {
              all[m3] = true;
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
        all = all.filter(function(m3) {
          return !isIgnored(self2, m3);
        });
      self2.found = all;
    }
    function mark(self2, p2) {
      var abs = makeAbs(self2, p2);
      var c = self2.cache[abs];
      var m2 = p2;
      if (c) {
        var isDir = c === "DIR" || Array.isArray(c);
        var slash2 = p2.slice(-1) === "/";
        if (isDir && !slash2)
          m2 += "/";
        else if (!isDir && slash2)
          m2 = m2.slice(0, -1);
        if (m2 !== p2) {
          var mabs = makeAbs(self2, m2);
          self2.statCache[mabs] = self2.statCache[abs];
          self2.cache[mabs] = self2.cache[abs];
        }
      }
      return m2;
    }
    function makeAbs(self2, f) {
      var abs = f;
      if (f.charAt(0) === "/") {
        abs = path.join(self2.root, f);
      } else if (isAbsolute3(f) || f === "") {
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
  "node_modules/glob/sync.js"(exports2, module2) {
    "use strict";
    module2.exports = globSync;
    globSync.GlobSync = GlobSync;
    var rp = require_fs();
    var minimatch = require_minimatch();
    var Minimatch = minimatch.Minimatch;
    var Glob = require_glob().Glob;
    var util2 = require("util");
    var path = require("path");
    var assert2 = require("assert");
    var isAbsolute3 = require_path_is_absolute();
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
      var n2 = this.minimatch.set.length;
      this.matches = new Array(n2);
      for (var i = 0; i < n2; i++) {
        this._process(this.minimatch.set[i], i, false);
      }
      this._finish();
    }
    GlobSync.prototype._finish = function() {
      assert2.ok(this instanceof GlobSync);
      if (this.realpath) {
        var self2 = this;
        this.matches.forEach(function(matchset, index2) {
          var set3 = self2.matches[index2] = /* @__PURE__ */ Object.create(null);
          for (var p2 in matchset) {
            try {
              p2 = self2._makeAbs(p2);
              var real = rp.realpathSync(p2, self2.realpathCache);
              set3[real] = true;
            } catch (er) {
              if (er.syscall === "stat")
                set3[self2._makeAbs(p2)] = true;
              else
                throw er;
            }
          }
        });
      }
      common.finish(this);
    };
    GlobSync.prototype._process = function(pattern, index2, inGlobStar) {
      assert2.ok(this instanceof GlobSync);
      var n2 = 0;
      while (typeof pattern[n2] === "string") {
        n2++;
      }
      var prefix;
      switch (n2) {
        case pattern.length:
          this._processSimple(pattern.join("/"), index2);
          return;
        case 0:
          prefix = null;
          break;
        default:
          prefix = pattern.slice(0, n2).join("/");
          break;
      }
      var remain = pattern.slice(n2);
      var read;
      if (prefix === null)
        read = ".";
      else if (isAbsolute3(prefix) || isAbsolute3(pattern.map(function(p2) {
        return typeof p2 === "string" ? p2 : "[*]";
      }).join("/"))) {
        if (!prefix || !isAbsolute3(prefix))
          prefix = "/" + prefix;
        read = prefix;
      } else
        read = prefix;
      var abs = this._makeAbs(read);
      if (childrenIgnored(this, read))
        return;
      var isGlobStar = remain[0] === minimatch.GLOBSTAR;
      if (isGlobStar)
        this._processGlobStar(prefix, read, abs, remain, index2, inGlobStar);
      else
        this._processReaddir(prefix, read, abs, remain, index2, inGlobStar);
    };
    GlobSync.prototype._processReaddir = function(prefix, read, abs, remain, index2, inGlobStar) {
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
          var m2;
          if (negate && !prefix) {
            m2 = !e.match(pn);
          } else {
            m2 = e.match(pn);
          }
          if (m2)
            matchedEntries.push(e);
        }
      }
      var len = matchedEntries.length;
      if (len === 0)
        return;
      if (remain.length === 1 && !this.mark && !this.stat) {
        if (!this.matches[index2])
          this.matches[index2] = /* @__PURE__ */ Object.create(null);
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
          this._emitMatch(index2, e);
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
        this._process(newPattern.concat(remain), index2, inGlobStar);
      }
    };
    GlobSync.prototype._emitMatch = function(index2, e) {
      if (isIgnored(this, e))
        return;
      var abs = this._makeAbs(e);
      if (this.mark)
        e = this._mark(e);
      if (this.absolute) {
        e = abs;
      }
      if (this.matches[index2][e])
        return;
      if (this.nodir) {
        var c = this.cache[abs];
        if (c === "DIR" || Array.isArray(c))
          return;
      }
      this.matches[index2][e] = true;
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
    GlobSync.prototype._processGlobStar = function(prefix, read, abs, remain, index2, inGlobStar) {
      var entries = this._readdir(abs, inGlobStar);
      if (!entries)
        return;
      var remainWithoutGlobStar = remain.slice(1);
      var gspref = prefix ? [prefix] : [];
      var noGlobStar = gspref.concat(remainWithoutGlobStar);
      this._process(noGlobStar, index2, false);
      var len = entries.length;
      var isSym = this.symlinks[abs];
      if (isSym && inGlobStar)
        return;
      for (var i = 0; i < len; i++) {
        var e = entries[i];
        if (e.charAt(0) === "." && !this.dot)
          continue;
        var instead = gspref.concat(entries[i], remainWithoutGlobStar);
        this._process(instead, index2, true);
        var below = gspref.concat(entries[i], remain);
        this._process(below, index2, true);
      }
    };
    GlobSync.prototype._processSimple = function(prefix, index2) {
      var exists = this._stat(prefix);
      if (!this.matches[index2])
        this.matches[index2] = /* @__PURE__ */ Object.create(null);
      if (!exists)
        return;
      if (prefix && isAbsolute3(prefix) && !this.nomount) {
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
      this._emitMatch(index2, prefix);
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
    GlobSync.prototype._mark = function(p2) {
      return common.mark(this, p2);
    };
    GlobSync.prototype._makeAbs = function(f) {
      return common.makeAbs(this, f);
    };
  }
});

// node_modules/wrappy/wrappy.js
var require_wrappy = __commonJS({
  "node_modules/wrappy/wrappy.js"(exports2, module2) {
    "use strict";
    module2.exports = wrappy;
    function wrappy(fn2, cb) {
      if (fn2 && cb)
        return wrappy(fn2)(cb);
      if (typeof fn2 !== "function")
        throw new TypeError("need wrapper function");
      Object.keys(fn2).forEach(function(k) {
        wrapper[k] = fn2[k];
      });
      return wrapper;
      function wrapper() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        var ret = fn2.apply(this, args);
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
  "node_modules/once/once.js"(exports2, module2) {
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
    function once(fn2) {
      var f = function() {
        if (f.called)
          return f.value;
        f.called = true;
        return f.value = fn2.apply(this, arguments);
      };
      f.called = false;
      return f;
    }
    function onceStrict(fn2) {
      var f = function() {
        if (f.called)
          throw new Error(f.onceError);
        f.called = true;
        return f.value = fn2.apply(this, arguments);
      };
      var name = fn2.name || "Function wrapped with `once`";
      f.onceError = name + " shouldn't be called more than once";
      f.called = false;
      return f;
    }
  }
});

// node_modules/inflight/inflight.js
var require_inflight = __commonJS({
  "node_modules/inflight/inflight.js"(exports2, module2) {
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
        var args = slice2(arguments);
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
    function slice2(args) {
      var length = args.length;
      var array2 = [];
      for (var i = 0; i < length; i++)
        array2[i] = args[i];
      return array2;
    }
  }
});

// node_modules/glob/glob.js
var require_glob = __commonJS({
  "node_modules/glob/glob.js"(exports2, module2) {
    "use strict";
    module2.exports = glob;
    var rp = require_fs();
    var minimatch = require_minimatch();
    var Minimatch = minimatch.Minimatch;
    var inherits = require_inherits();
    var EE = require("events").EventEmitter;
    var path = require("path");
    var assert2 = require("assert");
    var isAbsolute3 = require_path_is_absolute();
    var globSync = require_sync();
    var common = require_common();
    var setopts = common.setopts;
    var ownProp = common.ownProp;
    var inflight = require_inflight();
    var util2 = require("util");
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
      var keys2 = Object.keys(add);
      var i = keys2.length;
      while (i--) {
        origin[keys2[i]] = add[keys2[i]];
      }
      return origin;
    }
    glob.hasMagic = function(pattern, options_) {
      var options = extend({}, options_);
      options.noprocess = true;
      var g = new Glob(pattern, options);
      var set3 = g.minimatch.set;
      if (!pattern)
        return false;
      if (set3.length > 1)
        return true;
      for (var j = 0; j < set3[0].length; j++) {
        if (typeof set3[0][j] !== "string")
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
      var n2 = this.minimatch.set.length;
      this.matches = new Array(n2);
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
      if (n2 === 0)
        return done();
      var sync = true;
      for (var i = 0; i < n2; i++) {
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
      assert2(this instanceof Glob);
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
      var n2 = this.matches.length;
      if (n2 === 0)
        return this._finish();
      var self2 = this;
      for (var i = 0; i < this.matches.length; i++)
        this._realpathSet(i, next);
      function next() {
        if (--n2 === 0)
          self2._finish();
      }
    };
    Glob.prototype._realpathSet = function(index2, cb) {
      var matchset = this.matches[index2];
      if (!matchset)
        return cb();
      var found3 = Object.keys(matchset);
      var self2 = this;
      var n2 = found3.length;
      if (n2 === 0)
        return cb();
      var set3 = this.matches[index2] = /* @__PURE__ */ Object.create(null);
      found3.forEach(function(p2, i) {
        p2 = self2._makeAbs(p2);
        rp.realpath(p2, self2.realpathCache, function(er, real) {
          if (!er)
            set3[real] = true;
          else if (er.syscall === "stat")
            set3[p2] = true;
          else
            self2.emit("error", er);
          if (--n2 === 0) {
            self2.matches[index2] = set3;
            cb();
          }
        });
      });
    };
    Glob.prototype._mark = function(p2) {
      return common.mark(this, p2);
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
          var eq2 = this._emitQueue.slice(0);
          this._emitQueue.length = 0;
          for (var i = 0; i < eq2.length; i++) {
            var e = eq2[i];
            this._emitMatch(e[0], e[1]);
          }
        }
        if (this._processQueue.length) {
          var pq = this._processQueue.slice(0);
          this._processQueue.length = 0;
          for (var i = 0; i < pq.length; i++) {
            var p2 = pq[i];
            this._processing--;
            this._process(p2[0], p2[1], p2[2], p2[3]);
          }
        }
      }
    };
    Glob.prototype._process = function(pattern, index2, inGlobStar, cb) {
      assert2(this instanceof Glob);
      assert2(typeof cb === "function");
      if (this.aborted)
        return;
      this._processing++;
      if (this.paused) {
        this._processQueue.push([pattern, index2, inGlobStar, cb]);
        return;
      }
      var n2 = 0;
      while (typeof pattern[n2] === "string") {
        n2++;
      }
      var prefix;
      switch (n2) {
        case pattern.length:
          this._processSimple(pattern.join("/"), index2, cb);
          return;
        case 0:
          prefix = null;
          break;
        default:
          prefix = pattern.slice(0, n2).join("/");
          break;
      }
      var remain = pattern.slice(n2);
      var read;
      if (prefix === null)
        read = ".";
      else if (isAbsolute3(prefix) || isAbsolute3(pattern.map(function(p2) {
        return typeof p2 === "string" ? p2 : "[*]";
      }).join("/"))) {
        if (!prefix || !isAbsolute3(prefix))
          prefix = "/" + prefix;
        read = prefix;
      } else
        read = prefix;
      var abs = this._makeAbs(read);
      if (childrenIgnored(this, read))
        return cb();
      var isGlobStar = remain[0] === minimatch.GLOBSTAR;
      if (isGlobStar)
        this._processGlobStar(prefix, read, abs, remain, index2, inGlobStar, cb);
      else
        this._processReaddir(prefix, read, abs, remain, index2, inGlobStar, cb);
    };
    Glob.prototype._processReaddir = function(prefix, read, abs, remain, index2, inGlobStar, cb) {
      var self2 = this;
      this._readdir(abs, inGlobStar, function(er, entries) {
        return self2._processReaddir2(prefix, read, abs, remain, index2, inGlobStar, entries, cb);
      });
    };
    Glob.prototype._processReaddir2 = function(prefix, read, abs, remain, index2, inGlobStar, entries, cb) {
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
          var m2;
          if (negate && !prefix) {
            m2 = !e.match(pn);
          } else {
            m2 = e.match(pn);
          }
          if (m2)
            matchedEntries.push(e);
        }
      }
      var len = matchedEntries.length;
      if (len === 0)
        return cb();
      if (remain.length === 1 && !this.mark && !this.stat) {
        if (!this.matches[index2])
          this.matches[index2] = /* @__PURE__ */ Object.create(null);
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
          this._emitMatch(index2, e);
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
        this._process([e].concat(remain), index2, inGlobStar, cb);
      }
      cb();
    };
    Glob.prototype._emitMatch = function(index2, e) {
      if (this.aborted)
        return;
      if (isIgnored(this, e))
        return;
      if (this.paused) {
        this._emitQueue.push([index2, e]);
        return;
      }
      var abs = isAbsolute3(e) ? e : this._makeAbs(e);
      if (this.mark)
        e = this._mark(e);
      if (this.absolute)
        e = abs;
      if (this.matches[index2][e])
        return;
      if (this.nodir) {
        var c = this.cache[abs];
        if (c === "DIR" || Array.isArray(c))
          return;
      }
      this.matches[index2][e] = true;
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
    Glob.prototype._processGlobStar = function(prefix, read, abs, remain, index2, inGlobStar, cb) {
      var self2 = this;
      this._readdir(abs, inGlobStar, function(er, entries) {
        self2._processGlobStar2(prefix, read, abs, remain, index2, inGlobStar, entries, cb);
      });
    };
    Glob.prototype._processGlobStar2 = function(prefix, read, abs, remain, index2, inGlobStar, entries, cb) {
      if (!entries)
        return cb();
      var remainWithoutGlobStar = remain.slice(1);
      var gspref = prefix ? [prefix] : [];
      var noGlobStar = gspref.concat(remainWithoutGlobStar);
      this._process(noGlobStar, index2, false, cb);
      var isSym = this.symlinks[abs];
      var len = entries.length;
      if (isSym && inGlobStar)
        return cb();
      for (var i = 0; i < len; i++) {
        var e = entries[i];
        if (e.charAt(0) === "." && !this.dot)
          continue;
        var instead = gspref.concat(entries[i], remainWithoutGlobStar);
        this._process(instead, index2, true, cb);
        var below = gspref.concat(entries[i], remain);
        this._process(below, index2, true, cb);
      }
      cb();
    };
    Glob.prototype._processSimple = function(prefix, index2, cb) {
      var self2 = this;
      this._stat(prefix, function(er, exists) {
        self2._processSimple2(prefix, index2, er, exists, cb);
      });
    };
    Glob.prototype._processSimple2 = function(prefix, index2, er, exists, cb) {
      if (!this.matches[index2])
        this.matches[index2] = /* @__PURE__ */ Object.create(null);
      if (!exists)
        return cb();
      if (prefix && isAbsolute3(prefix) && !this.nomount) {
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
      this._emitMatch(index2, prefix);
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
          var type2 = stat.isDirectory() ? "DIR" : "FILE";
          if (needDir && type2 === "FILE")
            return cb();
          else
            return cb(null, type2, stat);
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
  "node_modules/rimraf/rimraf.js"(exports2, module2) {
    "use strict";
    var assert2 = require("assert");
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
    var isWindows2 = process.platform === "win32";
    var defaults = (options) => {
      const methods = [
        "unlink",
        "chmod",
        "stat",
        "lstat",
        "rmdir",
        "readdir"
      ];
      methods.forEach((m2) => {
        options[m2] = options[m2] || fs[m2];
        m2 = m2 + "Sync";
        options[m2] = options[m2] || fs[m2];
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
    var rimraf = (p2, options, cb) => {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      assert2(p2, "rimraf: missing path");
      assert2.equal(typeof p2, "string", "rimraf: path should be a string");
      assert2.equal(typeof cb, "function", "rimraf: callback function required");
      assert2(options, "rimraf: invalid options argument provided");
      assert2.equal(typeof options, "object", "rimraf: options should be object");
      defaults(options);
      let busyTries = 0;
      let errState = null;
      let n2 = 0;
      const next = (er) => {
        errState = errState || er;
        if (--n2 === 0)
          cb(errState);
      };
      const afterGlob = (er, results) => {
        if (er)
          return cb(er);
        n2 = results.length;
        if (n2 === 0)
          return cb();
        results.forEach((p3) => {
          const CB = (er2) => {
            if (er2) {
              if ((er2.code === "EBUSY" || er2.code === "ENOTEMPTY" || er2.code === "EPERM") && busyTries < options.maxBusyTries) {
                busyTries++;
                return setTimeout(() => rimraf_(p3, options, CB), busyTries * 100);
              }
              if (er2.code === "EMFILE" && timeout < options.emfileWait) {
                return setTimeout(() => rimraf_(p3, options, CB), timeout++);
              }
              if (er2.code === "ENOENT")
                er2 = null;
            }
            timeout = 0;
            next(er2);
          };
          rimraf_(p3, options, CB);
        });
      };
      if (options.disableGlob || !glob.hasMagic(p2))
        return afterGlob(null, [p2]);
      options.lstat(p2, (er, stat) => {
        if (!er)
          return afterGlob(null, [p2]);
        glob(p2, options.glob, afterGlob);
      });
    };
    var rimraf_ = (p2, options, cb) => {
      assert2(p2);
      assert2(options);
      assert2(typeof cb === "function");
      options.lstat(p2, (er, st) => {
        if (er && er.code === "ENOENT")
          return cb(null);
        if (er && er.code === "EPERM" && isWindows2)
          fixWinEPERM(p2, options, er, cb);
        if (st && st.isDirectory())
          return rmdir(p2, options, er, cb);
        options.unlink(p2, (er2) => {
          if (er2) {
            if (er2.code === "ENOENT")
              return cb(null);
            if (er2.code === "EPERM")
              return isWindows2 ? fixWinEPERM(p2, options, er2, cb) : rmdir(p2, options, er2, cb);
            if (er2.code === "EISDIR")
              return rmdir(p2, options, er2, cb);
          }
          return cb(er2);
        });
      });
    };
    var fixWinEPERM = (p2, options, er, cb) => {
      assert2(p2);
      assert2(options);
      assert2(typeof cb === "function");
      options.chmod(p2, 438, (er2) => {
        if (er2)
          cb(er2.code === "ENOENT" ? null : er);
        else
          options.stat(p2, (er3, stats) => {
            if (er3)
              cb(er3.code === "ENOENT" ? null : er);
            else if (stats.isDirectory())
              rmdir(p2, options, er, cb);
            else
              options.unlink(p2, cb);
          });
      });
    };
    var fixWinEPERMSync = (p2, options, er) => {
      assert2(p2);
      assert2(options);
      try {
        options.chmodSync(p2, 438);
      } catch (er2) {
        if (er2.code === "ENOENT")
          return;
        else
          throw er;
      }
      let stats;
      try {
        stats = options.statSync(p2);
      } catch (er3) {
        if (er3.code === "ENOENT")
          return;
        else
          throw er;
      }
      if (stats.isDirectory())
        rmdirSync(p2, options, er);
      else
        options.unlinkSync(p2);
    };
    var rmdir = (p2, options, originalEr, cb) => {
      assert2(p2);
      assert2(options);
      assert2(typeof cb === "function");
      options.rmdir(p2, (er) => {
        if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM"))
          rmkids(p2, options, cb);
        else if (er && er.code === "ENOTDIR")
          cb(originalEr);
        else
          cb(er);
      });
    };
    var rmkids = (p2, options, cb) => {
      assert2(p2);
      assert2(options);
      assert2(typeof cb === "function");
      options.readdir(p2, (er, files) => {
        if (er)
          return cb(er);
        let n2 = files.length;
        if (n2 === 0)
          return options.rmdir(p2, cb);
        let errState;
        files.forEach((f) => {
          rimraf(path.join(p2, f), options, (er2) => {
            if (errState)
              return;
            if (er2)
              return cb(errState = er2);
            if (--n2 === 0)
              options.rmdir(p2, cb);
          });
        });
      });
    };
    var rimrafSync = (p2, options) => {
      options = options || {};
      defaults(options);
      assert2(p2, "rimraf: missing path");
      assert2.equal(typeof p2, "string", "rimraf: path should be a string");
      assert2(options, "rimraf: missing options");
      assert2.equal(typeof options, "object", "rimraf: options should be object");
      let results;
      if (options.disableGlob || !glob.hasMagic(p2)) {
        results = [p2];
      } else {
        try {
          options.lstatSync(p2);
          results = [p2];
        } catch (er) {
          results = glob.sync(p2, options.glob);
        }
      }
      if (!results.length)
        return;
      for (let i = 0; i < results.length; i++) {
        const p3 = results[i];
        let st;
        try {
          st = options.lstatSync(p3);
        } catch (er) {
          if (er.code === "ENOENT")
            return;
          if (er.code === "EPERM" && isWindows2)
            fixWinEPERMSync(p3, options, er);
        }
        try {
          if (st && st.isDirectory())
            rmdirSync(p3, options, null);
          else
            options.unlinkSync(p3);
        } catch (er) {
          if (er.code === "ENOENT")
            return;
          if (er.code === "EPERM")
            return isWindows2 ? fixWinEPERMSync(p3, options, er) : rmdirSync(p3, options, er);
          if (er.code !== "EISDIR")
            throw er;
          rmdirSync(p3, options, er);
        }
      }
    };
    var rmdirSync = (p2, options, originalEr) => {
      assert2(p2);
      assert2(options);
      try {
        options.rmdirSync(p2);
      } catch (er) {
        if (er.code === "ENOENT")
          return;
        if (er.code === "ENOTDIR")
          throw originalEr;
        if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")
          rmkidsSync(p2, options);
      }
    };
    var rmkidsSync = (p2, options) => {
      assert2(p2);
      assert2(options);
      options.readdirSync(p2).forEach((f) => rimrafSync(path.join(p2, f), options));
      const retries = isWindows2 ? 100 : 1;
      let i = 0;
      do {
        let threw = true;
        try {
          const ret = options.rmdirSync(p2, options);
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
  "node_modules/@mapbox/node-pre-gyp/lib/util/napi.js"(exports2, module2) {
    "use strict";
    var fs = require("fs");
    module2.exports = exports2;
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
      let version2 = process.versions.napi;
      if (!version2) {
        if (versionArray[0] === 9 && versionArray[1] >= 3)
          version2 = 2;
        else if (versionArray[0] === 8)
          version2 = 1;
      }
      return version2;
    };
    module2.exports.get_napi_version_as_string = function(target) {
      const version2 = module2.exports.get_napi_version(target);
      return version2 ? "" + version2 : "";
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
  "node_modules/semver/internal/constants.js"(exports2, module2) {
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
  "node_modules/semver/internal/debug.js"(exports2, module2) {
    "use strict";
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module2.exports = debug;
  }
});

// node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/semver/internal/re.js"(exports2, module2) {
    "use strict";
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports2 = module2.exports = {};
    var re = exports2.re = [];
    var safeRe = exports2.safeRe = [];
    var src = exports2.src = [];
    var t = exports2.t = {};
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
      const index2 = R++;
      debug(name, index2, value);
      t[name] = index2;
      src[index2] = value;
      re[index2] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index2] = new RegExp(safe, isGlobal ? "g" : void 0);
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
    exports2.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports2.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports2.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/semver/internal/parse-options.js"(exports2, module2) {
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
  "node_modules/semver/internal/identifiers.js"(exports2, module2) {
    "use strict";
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b2) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b2);
      if (anum && bnum) {
        a = +a;
        b2 = +b2;
      }
      return a === b2 ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b2 ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b2) => compareIdentifiers(b2, a);
    module2.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/semver/classes/semver.js"(exports2, module2) {
    "use strict";
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version2, options) {
        options = parseOptions(options);
        if (version2 instanceof _SemVer) {
          if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) {
            return version2;
          } else {
            version2 = version2.version;
          }
        } else if (typeof version2 !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
        }
        if (version2.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version2, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m2 = version2.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m2) {
          throw new TypeError(`Invalid Version: ${version2}`);
        }
        this.raw = version2;
        this.major = +m2[1];
        this.minor = +m2[2];
        this.patch = +m2[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m2[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m2[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m2[5] ? m2[5].split(".") : [];
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
          const b2 = other.prerelease[i];
          debug("prerelease compare", i, a, b2);
          if (a === void 0 && b2 === void 0) {
            return 0;
          } else if (b2 === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b2) {
            continue;
          } else {
            return compareIdentifiers(a, b2);
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
          const b2 = other.build[i];
          debug("prerelease compare", i, a, b2);
          if (a === void 0 && b2 === void 0) {
            return 0;
          } else if (b2 === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b2) {
            continue;
          } else {
            return compareIdentifiers(a, b2);
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
  "node_modules/semver/functions/parse.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var parse = (version2, options, throwErrors = false) => {
      if (version2 instanceof SemVer) {
        return version2;
      }
      try {
        return new SemVer(version2, options);
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
  "node_modules/semver/functions/valid.js"(exports2, module2) {
    "use strict";
    var parse = require_parse();
    var valid = (version2, options) => {
      const v2 = parse(version2, options);
      return v2 ? v2.version : null;
    };
    module2.exports = valid;
  }
});

// node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "node_modules/semver/functions/clean.js"(exports2, module2) {
    "use strict";
    var parse = require_parse();
    var clean = (version2, options) => {
      const s = parse(version2.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    };
    module2.exports = clean;
  }
});

// node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "node_modules/semver/functions/inc.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var inc = (version2, release, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version2 instanceof SemVer ? version2.version : version2,
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
  "node_modules/semver/functions/diff.js"(exports2, module2) {
    "use strict";
    var parse = require_parse();
    var diff2 = (version1, version2) => {
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
    module2.exports = diff2;
  }
});

// node_modules/semver/functions/major.js
var require_major = __commonJS({
  "node_modules/semver/functions/major.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var major = (a, loose) => new SemVer(a, loose).major;
    module2.exports = major;
  }
});

// node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "node_modules/semver/functions/minor.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var minor = (a, loose) => new SemVer(a, loose).minor;
    module2.exports = minor;
  }
});

// node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "node_modules/semver/functions/patch.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var patch = (a, loose) => new SemVer(a, loose).patch;
    module2.exports = patch;
  }
});

// node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "node_modules/semver/functions/prerelease.js"(exports2, module2) {
    "use strict";
    var parse = require_parse();
    var prerelease = (version2, options) => {
      const parsed = parse(version2, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module2.exports = prerelease;
  }
});

// node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/semver/functions/compare.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var compare = (a, b2, loose) => new SemVer(a, loose).compare(new SemVer(b2, loose));
    module2.exports = compare;
  }
});

// node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "node_modules/semver/functions/rcompare.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var rcompare = (a, b2, loose) => compare(b2, a, loose);
    module2.exports = rcompare;
  }
});

// node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "node_modules/semver/functions/compare-loose.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var compareLoose = (a, b2) => compare(a, b2, true);
    module2.exports = compareLoose;
  }
});

// node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "node_modules/semver/functions/compare-build.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var compareBuild = (a, b2, loose) => {
      const versionA = new SemVer(a, loose);
      const versionB = new SemVer(b2, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module2.exports = compareBuild;
  }
});

// node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "node_modules/semver/functions/sort.js"(exports2, module2) {
    "use strict";
    var compareBuild = require_compare_build();
    var sort4 = (list, loose) => list.sort((a, b2) => compareBuild(a, b2, loose));
    module2.exports = sort4;
  }
});

// node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "node_modules/semver/functions/rsort.js"(exports2, module2) {
    "use strict";
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a, b2) => compareBuild(b2, a, loose));
    module2.exports = rsort;
  }
});

// node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/semver/functions/gt.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var gt = (a, b2, loose) => compare(a, b2, loose) > 0;
    module2.exports = gt;
  }
});

// node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/semver/functions/lt.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var lt = (a, b2, loose) => compare(a, b2, loose) < 0;
    module2.exports = lt;
  }
});

// node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/semver/functions/eq.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var eq2 = (a, b2, loose) => compare(a, b2, loose) === 0;
    module2.exports = eq2;
  }
});

// node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/semver/functions/neq.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var neq = (a, b2, loose) => compare(a, b2, loose) !== 0;
    module2.exports = neq;
  }
});

// node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/semver/functions/gte.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var gte = (a, b2, loose) => compare(a, b2, loose) >= 0;
    module2.exports = gte;
  }
});

// node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/semver/functions/lte.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var lte = (a, b2, loose) => compare(a, b2, loose) <= 0;
    module2.exports = lte;
  }
});

// node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/semver/functions/cmp.js"(exports2, module2) {
    "use strict";
    var eq2 = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b2, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b2 === "object") {
            b2 = b2.version;
          }
          return a === b2;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b2 === "object") {
            b2 = b2.version;
          }
          return a !== b2;
        case "":
        case "=":
        case "==":
          return eq2(a, b2, loose);
        case "!=":
          return neq(a, b2, loose);
        case ">":
          return gt(a, b2, loose);
        case ">=":
          return gte(a, b2, loose);
        case "<":
          return lt(a, b2, loose);
        case "<=":
          return lte(a, b2, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module2.exports = cmp;
  }
});

// node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/semver/functions/coerce.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var parse = require_parse();
    var { safeRe: re, t } = require_re();
    var coerce = (version2, options) => {
      if (version2 instanceof SemVer) {
        return version2;
      }
      if (typeof version2 === "number") {
        version2 = String(version2);
      }
      if (typeof version2 !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version2.match(re[t.COERCE]);
      } else {
        let next;
        while ((next = re[t.COERCERTL].exec(version2)) && (!match || match.index + match[0].length !== version2.length)) {
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
  "node_modules/yallist/iterator.js"(exports2, module2) {
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
  "node_modules/yallist/yallist.js"(exports2, module2) {
    "use strict";
    module2.exports = Yallist;
    Yallist.Node = Node2;
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
    Yallist.prototype.forEach = function(fn2, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn2.call(thisp, walker.value, i, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn2, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn2.call(thisp, walker.value, i, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n2) {
      for (var i = 0, walker = this.head; walker !== null && i < n2; i++) {
        walker = walker.next;
      }
      if (i === n2 && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n2) {
      for (var i = 0, walker = this.tail; walker !== null && i < n2; i++) {
        walker = walker.prev;
      }
      if (i === n2 && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn2, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn2.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn2, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn2.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn2, initial) {
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
        acc = fn2(acc, walker.value, i);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn2, initial) {
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
        acc = fn2(acc, walker.value, i);
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
        walker = insert2(this, walker, nodes[i]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p2 = walker.prev;
        walker.prev = walker.next;
        walker.next = p2;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert2(self2, node, value) {
      var inserted = node === self2.head ? new Node2(value, null, node, self2) : new Node2(value, node, node.next, self2);
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
      self2.tail = new Node2(item, self2.tail, null, self2);
      if (!self2.head) {
        self2.head = self2.tail;
      }
      self2.length++;
    }
    function unshift(self2, item) {
      self2.head = new Node2(item, null, self2.head, self2);
      if (!self2.tail) {
        self2.tail = self2.head;
      }
      self2.length++;
    }
    function Node2(value, prev, next, list) {
      if (!(this instanceof Node2)) {
        return new Node2(value, prev, next, list);
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
  "node_modules/lru-cache/index.js"(exports2, module2) {
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
      rforEach(fn2, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].tail; walker !== null; ) {
          const prev = walker.prev;
          forEachStep(this, fn2, walker, thisp);
          walker = prev;
        }
      }
      forEach(fn2, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].head; walker !== null; ) {
          const next = walker.next;
          forEachStep(this, fn2, walker, thisp);
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
        const now3 = maxAge ? Date.now() : 0;
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
          item.now = now3;
          item.maxAge = maxAge;
          item.value = value;
          this[LENGTH] += len - item.length;
          item.length = len;
          this.get(key);
          trim(this);
          return true;
        }
        const hit = new Entry(key, value, len, now3, maxAge);
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
        return get2(this, key, true);
      }
      peek(key) {
        return get2(this, key, false);
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
        const now3 = Date.now();
        for (let l = arr.length - 1; l >= 0; l--) {
          const hit = arr[l];
          const expiresAt = hit.e || 0;
          if (expiresAt === 0)
            this.set(hit.k, hit.v);
          else {
            const maxAge = expiresAt - now3;
            if (maxAge > 0) {
              this.set(hit.k, hit.v, maxAge);
            }
          }
        }
      }
      prune() {
        this[CACHE].forEach((value, key) => get2(this, key, false));
      }
    };
    var get2 = (self2, key, doUse) => {
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
      const diff2 = Date.now() - hit.now;
      return hit.maxAge ? diff2 > hit.maxAge : self2[MAX_AGE] && diff2 > self2[MAX_AGE];
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
      constructor(key, value, length, now3, maxAge) {
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now3;
        this.maxAge = maxAge || 0;
      }
    };
    var forEachStep = (self2, fn2, node, thisp) => {
      let hit = node.value;
      if (isStale(self2, hit)) {
        del(self2, node);
        if (!self2[ALLOW_STALE])
          hit = void 0;
      }
      if (hit)
        fn2.call(thisp, hit.value, hit.key, self2);
    };
    module2.exports = LRUCache;
  }
});

// node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/semver/classes/range.js"(exports2, module2) {
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
        const cached = cache2.get(memoKey);
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
        cache2.set(memoKey, result);
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
      test(version2) {
        if (!version2) {
          return false;
        }
        if (typeof version2 === "string") {
          try {
            version2 = new SemVer(version2, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version2, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module2.exports = Range;
    var LRU = require_lru_cache();
    var cache2 = new LRU({ max: 1e3 });
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
      return comp.replace(r, (_, M2, m2, p2, pr) => {
        debug("tilde", comp, _, M2, m2, p2, pr);
        let ret;
        if (isX(M2)) {
          ret = "";
        } else if (isX(m2)) {
          ret = `>=${M2}.0.0 <${+M2 + 1}.0.0-0`;
        } else if (isX(p2)) {
          ret = `>=${M2}.${m2}.0 <${M2}.${+m2 + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${+m2 + 1}.0-0`;
        } else {
          ret = `>=${M2}.${m2}.${p2} <${M2}.${+m2 + 1}.0-0`;
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
      return comp.replace(r, (_, M2, m2, p2, pr) => {
        debug("caret", comp, _, M2, m2, p2, pr);
        let ret;
        if (isX(M2)) {
          ret = "";
        } else if (isX(m2)) {
          ret = `>=${M2}.0.0${z} <${+M2 + 1}.0.0-0`;
        } else if (isX(p2)) {
          if (M2 === "0") {
            ret = `>=${M2}.${m2}.0${z} <${M2}.${+m2 + 1}.0-0`;
          } else {
            ret = `>=${M2}.${m2}.0${z} <${+M2 + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M2 === "0") {
            if (m2 === "0") {
              ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${m2}.${+p2 + 1}-0`;
            } else {
              ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${+m2 + 1}.0-0`;
            }
          } else {
            ret = `>=${M2}.${m2}.${p2}-${pr} <${+M2 + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M2 === "0") {
            if (m2 === "0") {
              ret = `>=${M2}.${m2}.${p2}${z} <${M2}.${m2}.${+p2 + 1}-0`;
            } else {
              ret = `>=${M2}.${m2}.${p2}${z} <${M2}.${+m2 + 1}.0-0`;
            }
          } else {
            ret = `>=${M2}.${m2}.${p2} <${+M2 + 1}.0.0-0`;
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
      return comp.replace(r, (ret, gtlt, M2, m2, p2, pr) => {
        debug("xRange", comp, ret, gtlt, M2, m2, p2, pr);
        const xM = isX(M2);
        const xm = xM || isX(m2);
        const xp = xm || isX(p2);
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
            m2 = 0;
          }
          p2 = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M2 = +M2 + 1;
              m2 = 0;
              p2 = 0;
            } else {
              m2 = +m2 + 1;
              p2 = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M2 = +M2 + 1;
            } else {
              m2 = +m2 + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M2}.${m2}.${p2}${pr}`;
        } else if (xm) {
          ret = `>=${M2}.0.0${pr} <${+M2 + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M2}.${m2}.0${pr} <${M2}.${+m2 + 1}.0-0`;
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
    var testSet = (set3, version2, options) => {
      for (let i = 0; i < set3.length; i++) {
        if (!set3[i].test(version2)) {
          return false;
        }
      }
      if (version2.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set3.length; i++) {
          debug(set3[i].semver);
          if (set3[i].semver === Comparator.ANY) {
            continue;
          }
          if (set3[i].semver.prerelease.length > 0) {
            const allowed = set3[i].semver;
            if (allowed.major === version2.major && allowed.minor === version2.minor && allowed.patch === version2.patch) {
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
  "node_modules/semver/classes/comparator.js"(exports2, module2) {
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
        const m2 = comp.match(r);
        if (!m2) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m2[1] !== void 0 ? m2[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m2[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m2[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version2) {
        debug("Comparator.test", version2, this.options.loose);
        if (this.semver === ANY || version2 === ANY) {
          return true;
        }
        if (typeof version2 === "string") {
          try {
            version2 = new SemVer(version2, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version2, this.operator, this.semver, this.options);
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
  "node_modules/semver/functions/satisfies.js"(exports2, module2) {
    "use strict";
    var Range = require_range();
    var satisfies = (version2, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version2);
    };
    module2.exports = satisfies;
  }
});

// node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "node_modules/semver/ranges/to-comparators.js"(exports2, module2) {
    "use strict";
    var Range = require_range();
    var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
    module2.exports = toComparators;
  }
});

// node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "node_modules/semver/ranges/max-satisfying.js"(exports2, module2) {
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
      versions.forEach((v2) => {
        if (rangeObj.test(v2)) {
          if (!max || maxSV.compare(v2) === -1) {
            max = v2;
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
  "node_modules/semver/ranges/min-satisfying.js"(exports2, module2) {
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
      versions.forEach((v2) => {
        if (rangeObj.test(v2)) {
          if (!min || minSV.compare(v2) === 1) {
            min = v2;
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
  "node_modules/semver/ranges/min-version.js"(exports2, module2) {
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
        comparators.forEach((comparator2) => {
          const compver = new SemVer(comparator2.semver.version);
          switch (comparator2.operator) {
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
              throw new Error(`Unexpected operation: ${comparator2.operator}`);
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
  "node_modules/semver/ranges/valid.js"(exports2, module2) {
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
  "node_modules/semver/ranges/outside.js"(exports2, module2) {
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
    var outside = (version2, range, hilo, options) => {
      version2 = new SemVer(version2, options);
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
      if (satisfies(version2, range, options)) {
        return false;
      }
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator2) => {
          if (comparator2.semver === ANY) {
            comparator2 = new Comparator(">=0.0.0");
          }
          high = high || comparator2;
          low = low || comparator2;
          if (gtfn(comparator2.semver, high.semver, options)) {
            high = comparator2;
          } else if (ltfn(comparator2.semver, low.semver, options)) {
            low = comparator2;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version2, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version2, low.semver)) {
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
  "node_modules/semver/ranges/gtr.js"(exports2, module2) {
    "use strict";
    var outside = require_outside();
    var gtr = (version2, range, options) => outside(version2, range, ">", options);
    module2.exports = gtr;
  }
});

// node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "node_modules/semver/ranges/ltr.js"(exports2, module2) {
    "use strict";
    var outside = require_outside();
    var ltr = (version2, range, options) => outside(version2, range, "<", options);
    module2.exports = ltr;
  }
});

// node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "node_modules/semver/ranges/intersects.js"(exports2, module2) {
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
  "node_modules/semver/ranges/simplify.js"(exports2, module2) {
    "use strict";
    var satisfies = require_satisfies();
    var compare = require_compare();
    module2.exports = (versions, range, options) => {
      const set3 = [];
      let first = null;
      let prev = null;
      const v2 = versions.sort((a, b2) => compare(a, b2, options));
      for (const version2 of v2) {
        const included = satisfies(version2, range, options);
        if (included) {
          prev = version2;
          if (!first) {
            first = version2;
          }
        } else {
          if (prev) {
            set3.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set3.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set3) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v2[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v2[0]) {
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
  "node_modules/semver/ranges/subset.js"(exports2, module2) {
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
      for (const eq2 of eqSet) {
        if (gt && !satisfies(eq2, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies(eq2, String(lt), options)) {
          return null;
        }
        for (const c of dom) {
          if (!satisfies(eq2, String(c), options)) {
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
    var higherGT = (a, b2, options) => {
      if (!a) {
        return b2;
      }
      const comp = compare(a.semver, b2.semver, options);
      return comp > 0 ? a : comp < 0 ? b2 : b2.operator === ">" && a.operator === ">=" ? b2 : a;
    };
    var lowerLT = (a, b2, options) => {
      if (!a) {
        return b2;
      }
      const comp = compare(a.semver, b2.semver, options);
      return comp < 0 ? a : comp > 0 ? b2 : b2.operator === "<" && a.operator === "<=" ? b2 : a;
    };
    module2.exports = subset;
  }
});

// node_modules/semver/index.js
var require_semver2 = __commonJS({
  "node_modules/semver/index.js"(exports2, module2) {
    "use strict";
    var internalRe = require_re();
    var constants = require_constants();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse = require_parse();
    var valid = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff2 = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort4 = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq2 = require_eq();
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
      diff: diff2,
      major,
      minor,
      patch,
      prerelease,
      compare,
      rcompare,
      compareLoose,
      compareBuild,
      sort: sort4,
      rsort,
      gt,
      lt,
      eq: eq2,
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
  "node_modules/detect-libc/lib/process.js"(exports2, module2) {
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
  "node_modules/detect-libc/lib/filesystem.js"(exports2, module2) {
    "use strict";
    var fs = require("fs");
    var LDD_PATH = "/usr/bin/ldd";
    var readFileSync = (path) => fs.readFileSync(path, "utf-8");
    var readFile = (path) => new Promise((resolve2, reject) => {
      fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve2(data);
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
  "node_modules/detect-libc/lib/detect-libc.js"(exports2, module2) {
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
        return new Promise((resolve2) => {
          childProcess.exec(command, (err, out) => {
            commandOut = err ? " " : out;
            resolve2(commandOut);
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
    var familyFromFilesystem = () => __async(exports2, null, function* () {
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
    var family = () => __async(exports2, null, function* () {
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
    var isNonGlibcLinux = () => __async(exports2, null, function* () {
      return isLinux() && (yield family()) !== GLIBC;
    });
    var isNonGlibcLinuxSync = () => isLinux() && familySync() !== GLIBC;
    var versionFromFilesystem = () => __async(exports2, null, function* () {
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
    var version2 = () => __async(exports2, null, function* () {
      let version3 = null;
      if (isLinux()) {
        version3 = yield versionFromFilesystem();
        if (!version3) {
          version3 = versionFromReport();
        }
        if (!version3) {
          const out = yield safeCommand();
          version3 = versionFromCommand(out);
        }
      }
      return version3;
    });
    var versionSync = () => {
      let version3 = null;
      if (isLinux()) {
        version3 = versionFromFilesystemSync();
        if (!version3) {
          version3 = versionFromReport();
        }
        if (!version3) {
          const out = safeCommandSync();
          version3 = versionFromCommand(out);
        }
      }
      return version3;
    };
    module2.exports = {
      GLIBC,
      MUSL,
      family,
      familySync,
      isNonGlibcLinux,
      isNonGlibcLinuxSync,
      version: version2,
      versionSync
    };
  }
});

// node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json
var require_abi_crosswalk = __commonJS({
  "node_modules/@mapbox/node-pre-gyp/lib/util/abi_crosswalk.json"(exports2, module2) {
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
  "node_modules/@mapbox/node-pre-gyp/lib/util/versioning.js"(exports2, module2) {
    "use strict";
    module2.exports = exports2;
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
    Object.keys(abi_crosswalk).forEach((v2) => {
      const major = v2.split(".")[0];
      if (!major_versions[major]) {
        major_versions[major] = v2;
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
        required_parameters.forEach((p2) => {
          if (!o[p2] || typeof o[p2] !== "string") {
            missing.push("binary." + p2);
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
      const v2 = package_json.version;
      const module_version = semver.parse(v2);
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
  "node_modules/@mapbox/node-pre-gyp/lib/pre-binding.js"(exports2, module2) {
    "use strict";
    var npg = require_node_pre_gyp();
    var versioning = require_versioning();
    var napi = require_napi();
    var existsSync = require("fs").existsSync || require("path").existsSync;
    var path = require("path");
    module2.exports = exports2;
    exports2.usage = "Finds the require path for the node-pre-gyp installed module";
    exports2.validate = function(package_json, opts) {
      versioning.validate_config(package_json, opts);
    };
    exports2.find = function(package_json_path, opts) {
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
  "node_modules/@mapbox/node-pre-gyp/package.json"(exports2, module2) {
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
  "node_modules/@mapbox/node-pre-gyp/lib/node-pre-gyp.js"(exports2, module2) {
    "use strict";
    module2.exports = exports2;
    exports2.mockS3Http = require_s3_setup().get_mockS3Http();
    exports2.mockS3Http("on");
    var mocking = exports2.mockS3Http("get");
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
    Object.defineProperty(exports2, "find", {
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
    exports2.Run = Run;
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
      const p2 = this.package_json;
      if (!p2 || !p2.binary || p2.binary.host) {
        return "";
      }
      if (!p2.binary.staging_host || !p2.binary.production_host) {
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
      p2.binary.host = p2.binary[target];
      this.binaryHostSet = true;
      return p2.binary.host;
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
  "node_modules/bcrypt/promises.js"(exports2, module2) {
    "use strict";
    var Promise2 = global.Promise;
    module2.exports.promise = function(fn2, context, args) {
      if (!Array.isArray(args)) {
        args = Array.prototype.slice.call(args);
      }
      if (typeof fn2 !== "function") {
        return Promise2.reject(new Error("fn must be a function"));
      }
      return new Promise2(function(resolve2, reject) {
        args.push(function(err, data) {
          if (err) {
            reject(err);
          } else {
            resolve2(data);
          }
        });
        fn2.apply(context, args);
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
  "node_modules/bcrypt/bcrypt.js"(exports2, module2) {
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

// node_modules/yocto-queue/index.js
var Node = class {
  constructor(value) {
    __publicField(this, "value");
    __publicField(this, "next");
    this.value = value;
  }
};
var _head, _tail, _size;
var Queue = class {
  constructor() {
    __privateAdd(this, _head, void 0);
    __privateAdd(this, _tail, void 0);
    __privateAdd(this, _size, void 0);
    this.clear();
  }
  enqueue(value) {
    const node = new Node(value);
    if (__privateGet(this, _head)) {
      __privateGet(this, _tail).next = node;
      __privateSet(this, _tail, node);
    } else {
      __privateSet(this, _head, node);
      __privateSet(this, _tail, node);
    }
    __privateWrapper(this, _size)._++;
  }
  dequeue() {
    const current = __privateGet(this, _head);
    if (!current) {
      return;
    }
    __privateSet(this, _head, __privateGet(this, _head).next);
    __privateWrapper(this, _size)._--;
    return current.value;
  }
  clear() {
    __privateSet(this, _head, void 0);
    __privateSet(this, _tail, void 0);
    __privateSet(this, _size, 0);
  }
  get size() {
    return __privateGet(this, _size);
  }
  *[Symbol.iterator]() {
    let current = __privateGet(this, _head);
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
};
_head = new WeakMap();
_tail = new WeakMap();
_size = new WeakMap();

// node_modules/@vitest/utils/dist/helpers.js
function assertTypes(value, name, types) {
  const receivedType = typeof value;
  const pass = types.includes(receivedType);
  if (!pass)
    throw new TypeError(`${name} value must be ${types.join(" or ")}, received "${receivedType}"`);
}
function isObject(item) {
  return item != null && typeof item === "object" && !Array.isArray(item);
}
function isFinalObj(obj) {
  return obj === Object.prototype || obj === Function.prototype || obj === RegExp.prototype;
}
function getType(value) {
  return Object.prototype.toString.apply(value).slice(8, -1);
}
function collectOwnProperties(obj, collector) {
  const collect = typeof collector === "function" ? collector : (key) => collector.add(key);
  Object.getOwnPropertyNames(obj).forEach(collect);
  Object.getOwnPropertySymbols(obj).forEach(collect);
}
function getOwnProperties(obj) {
  const ownProps = /* @__PURE__ */ new Set();
  if (isFinalObj(obj))
    return [];
  collectOwnProperties(obj, ownProps);
  return Array.from(ownProps);
}
var defaultCloneOptions = { forceWritable: false };
function deepClone(val, options = defaultCloneOptions) {
  const seen = /* @__PURE__ */ new WeakMap();
  return clone(val, seen, options);
}
function clone(val, seen, options = defaultCloneOptions) {
  let k, out;
  if (seen.has(val))
    return seen.get(val);
  if (Array.isArray(val)) {
    out = Array(k = val.length);
    seen.set(val, out);
    while (k--)
      out[k] = clone(val[k], seen);
    return out;
  }
  if (Object.prototype.toString.call(val) === "[object Object]") {
    out = Object.create(Object.getPrototypeOf(val));
    seen.set(val, out);
    const props = getOwnProperties(val);
    for (const k2 of props) {
      const descriptor = Object.getOwnPropertyDescriptor(val, k2);
      if (!descriptor)
        continue;
      const cloned = clone(val[k2], seen);
      if ("get" in descriptor) {
        Object.defineProperty(out, k2, __spreadProps(__spreadValues({}, descriptor), {
          get() {
            return cloned;
          }
        }));
      } else {
        Object.defineProperty(out, k2, __spreadProps(__spreadValues({}, descriptor), {
          writable: options.forceWritable ? true : descriptor.writable,
          value: cloned
        }));
      }
    }
    return out;
  }
  return val;
}
function noop() {
}
function objectAttr(source, path, defaultValue = void 0) {
  const paths = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  let result = source;
  for (const p2 of paths) {
    result = Object(result)[p2];
    if (result === void 0)
      return defaultValue;
  }
  return result;
}

// node_modules/@vitest/utils/dist/chunk-display.js
var import_pretty_format = __toESM(require_build(), 1);
init_loupe();
var {
  AsymmetricMatcher,
  DOMCollection,
  DOMElement,
  Immutable,
  ReactElement,
  ReactTestComponent
} = import_pretty_format.plugins;
var PLUGINS = [
  ReactTestComponent,
  ReactElement,
  DOMElement,
  DOMCollection,
  Immutable,
  AsymmetricMatcher
];
function stringify(object2, maxDepth = 10, _a2 = {}) {
  var _b = _a2, { maxLength } = _b, options = __objRest(_b, ["maxLength"]);
  const MAX_LENGTH = maxLength != null ? maxLength : 1e4;
  let result;
  try {
    result = (0, import_pretty_format.format)(object2, __spreadValues({
      maxDepth,
      escapeString: false,
      // min: true,
      plugins: PLUGINS
    }, options));
  } catch (e) {
    result = (0, import_pretty_format.format)(object2, __spreadValues({
      callToJSON: false,
      maxDepth,
      escapeString: false,
      // min: true,
      plugins: PLUGINS
    }, options));
  }
  return result.length >= MAX_LENGTH && maxDepth > 1 ? stringify(object2, Math.floor(maxDepth / 2)) : result;
}
var formatRegExp = /%[sdjifoOcj%]/g;
function format(...args) {
  if (typeof args[0] !== "string") {
    const objects = [];
    for (let i2 = 0; i2 < args.length; i2++)
      objects.push(inspect2(args[i2], { depth: 0, colors: false, compact: 3 }));
    return objects.join(" ");
  }
  const len = args.length;
  let i = 1;
  const template = args[0];
  let str = String(template).replace(formatRegExp, (x) => {
    if (x === "%%")
      return "%";
    if (i >= len)
      return x;
    switch (x) {
      case "%s": {
        const value = args[i++];
        if (typeof value === "bigint")
          return `${value.toString()}n`;
        if (typeof value === "number" && value === 0 && 1 / value < 0)
          return "-0";
        if (typeof value === "object" && value !== null)
          return inspect2(value, { depth: 0, colors: false, compact: 3 });
        return String(value);
      }
      case "%d": {
        const value = args[i++];
        if (typeof value === "bigint")
          return `${value.toString()}n`;
        return Number(value).toString();
      }
      case "%i": {
        const value = args[i++];
        if (typeof value === "bigint")
          return `${value.toString()}n`;
        return Number.parseInt(String(value)).toString();
      }
      case "%f":
        return Number.parseFloat(String(args[i++])).toString();
      case "%o":
        return inspect2(args[i++], { showHidden: true, showProxy: true });
      case "%O":
        return inspect2(args[i++]);
      case "%c": {
        i++;
        return "";
      }
      case "%j":
        try {
          return JSON.stringify(args[i++]);
        } catch (err) {
          const m2 = err.message;
          if (
            // chromium
            m2.includes("circular structure") || m2.includes("cyclic structures") || m2.includes("cyclic object")
          )
            return "[Circular]";
          throw err;
        }
      default:
        return x;
    }
  });
  for (let x = args[i]; i < len; x = args[++i]) {
    if (x === null || typeof x !== "object")
      str += ` ${x}`;
    else
      str += ` ${inspect2(x)}`;
  }
  return str;
}
function inspect2(obj, options = {}) {
  if (options.truncate === 0)
    options.truncate = Number.POSITIVE_INFINITY;
  return inspect(obj, options);
}
function objDisplay(obj, options = {}) {
  var _a2;
  const truncateThreshold = (_a2 = options.truncate) != null ? _a2 : 40;
  const str = inspect2(obj, options);
  const type2 = Object.prototype.toString.call(obj);
  if (truncateThreshold && str.length >= truncateThreshold) {
    if (type2 === "[object Function]") {
      const fn2 = obj;
      return !fn2.name || fn2.name === "" ? "[Function]" : `[Function: ${fn2.name}]`;
    } else if (type2 === "[object Array]") {
      return `[ Array(${obj.length}) ]`;
    } else if (type2 === "[object Object]") {
      const keys2 = Object.keys(obj);
      const kstr = keys2.length > 2 ? `${keys2.splice(0, 2).join(", ")}, ...` : keys2.join(", ");
      return `{ Object (${kstr}) }`;
    } else {
      return str;
    }
  }
  return str;
}

// node_modules/@vitest/utils/dist/chunk-colors.js
var SAFE_TIMERS_SYMBOL = Symbol("vitest:SAFE_TIMERS");
var SAFE_COLORS_SYMBOL = Symbol("vitest:SAFE_COLORS");
var colorsMap = {
  bold: ["\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"],
  dim: ["\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"],
  italic: ["\x1B[3m", "\x1B[23m"],
  underline: ["\x1B[4m", "\x1B[24m"],
  inverse: ["\x1B[7m", "\x1B[27m"],
  hidden: ["\x1B[8m", "\x1B[28m"],
  strikethrough: ["\x1B[9m", "\x1B[29m"],
  black: ["\x1B[30m", "\x1B[39m"],
  red: ["\x1B[31m", "\x1B[39m"],
  green: ["\x1B[32m", "\x1B[39m"],
  yellow: ["\x1B[33m", "\x1B[39m"],
  blue: ["\x1B[34m", "\x1B[39m"],
  magenta: ["\x1B[35m", "\x1B[39m"],
  cyan: ["\x1B[36m", "\x1B[39m"],
  white: ["\x1B[37m", "\x1B[39m"],
  gray: ["\x1B[90m", "\x1B[39m"],
  bgBlack: ["\x1B[40m", "\x1B[49m"],
  bgRed: ["\x1B[41m", "\x1B[49m"],
  bgGreen: ["\x1B[42m", "\x1B[49m"],
  bgYellow: ["\x1B[43m", "\x1B[49m"],
  bgBlue: ["\x1B[44m", "\x1B[49m"],
  bgMagenta: ["\x1B[45m", "\x1B[49m"],
  bgCyan: ["\x1B[46m", "\x1B[49m"],
  bgWhite: ["\x1B[47m", "\x1B[49m"]
};
var colorsEntries = Object.entries(colorsMap);
function string(str) {
  return String(str);
}
string.open = "";
string.close = "";
var defaultColors = /* @__PURE__ */ colorsEntries.reduce((acc, [key]) => {
  acc[key] = string;
  return acc;
}, { isColorSupported: false });
function getColors() {
  return globalThis[SAFE_COLORS_SYMBOL] || defaultColors;
}

// node_modules/@vitest/utils/dist/index.js
var import_pretty_format2 = __toESM(require_build(), 1);
init_loupe();
function getSafeTimers() {
  const {
    setTimeout: safeSetTimeout,
    setInterval: safeSetInterval,
    clearInterval: safeClearInterval,
    clearTimeout: safeClearTimeout,
    setImmediate: safeSetImmediate,
    clearImmediate: safeClearImmediate
  } = globalThis[SAFE_TIMERS_SYMBOL] || globalThis;
  const {
    nextTick: safeNextTick
  } = globalThis[SAFE_TIMERS_SYMBOL] || globalThis.process || { nextTick: (cb) => cb() };
  return {
    nextTick: safeNextTick,
    setTimeout: safeSetTimeout,
    setInterval: safeSetInterval,
    clearInterval: safeClearInterval,
    clearTimeout: safeClearTimeout,
    setImmediate: safeSetImmediate,
    clearImmediate: safeClearImmediate
  };
}
function createSimpleStackTrace(options) {
  const { message = "error", stackTraceLimit = 1 } = options || {};
  const limit = Error.stackTraceLimit;
  const prepareStackTrace = Error.prepareStackTrace;
  Error.stackTraceLimit = stackTraceLimit;
  Error.prepareStackTrace = (e) => e.stack;
  const err = new Error(message);
  const stackTrace = err.stack || "";
  Error.prepareStackTrace = prepareStackTrace;
  Error.stackTraceLimit = limit;
  return stackTrace;
}

// node_modules/@vitest/utils/dist/diff.js
var import_pretty_format3 = __toESM(require_build(), 1);
var diff$1 = __toESM(require_build2(), 1);
function getType2(value) {
  if (value === void 0) {
    return "undefined";
  } else if (value === null) {
    return "null";
  } else if (Array.isArray(value)) {
    return "array";
  } else if (typeof value === "boolean") {
    return "boolean";
  } else if (typeof value === "function") {
    return "function";
  } else if (typeof value === "number") {
    return "number";
  } else if (typeof value === "string") {
    return "string";
  } else if (typeof value === "bigint") {
    return "bigint";
  } else if (typeof value === "object") {
    if (value != null) {
      if (value.constructor === RegExp)
        return "regexp";
      else if (value.constructor === Map)
        return "map";
      else if (value.constructor === Set)
        return "set";
      else if (value.constructor === Date)
        return "date";
    }
    return "object";
  } else if (typeof value === "symbol") {
    return "symbol";
  }
  throw new Error(`value of unknown type: ${value}`);
}
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;
var Diff = class {
  constructor(op, text) {
    __publicField(this, 0);
    __publicField(this, 1);
    this[0] = op;
    this[1] = text;
  }
};
var NO_DIFF_MESSAGE = "Compared values have no visual difference.";
var SIMILAR_MESSAGE = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.";
function formatTrailingSpaces(line, trailingSpaceFormatter) {
  return line.replace(/\s+$/, (match) => trailingSpaceFormatter(match));
}
function printDiffLine(line, isFirstOrLast, color, indicator, trailingSpaceFormatter, emptyFirstOrLastLinePlaceholder) {
  return line.length !== 0 ? color(
    `${indicator} ${formatTrailingSpaces(line, trailingSpaceFormatter)}`
  ) : indicator !== " " ? color(indicator) : isFirstOrLast && emptyFirstOrLastLinePlaceholder.length !== 0 ? color(`${indicator} ${emptyFirstOrLastLinePlaceholder}`) : "";
}
function printDeleteLine(line, isFirstOrLast, {
  aColor,
  aIndicator,
  changeLineTrailingSpaceColor,
  emptyFirstOrLastLinePlaceholder
}) {
  return printDiffLine(
    line,
    isFirstOrLast,
    aColor,
    aIndicator,
    changeLineTrailingSpaceColor,
    emptyFirstOrLastLinePlaceholder
  );
}
function printInsertLine(line, isFirstOrLast, {
  bColor,
  bIndicator,
  changeLineTrailingSpaceColor,
  emptyFirstOrLastLinePlaceholder
}) {
  return printDiffLine(
    line,
    isFirstOrLast,
    bColor,
    bIndicator,
    changeLineTrailingSpaceColor,
    emptyFirstOrLastLinePlaceholder
  );
}
function printCommonLine(line, isFirstOrLast, {
  commonColor,
  commonIndicator,
  commonLineTrailingSpaceColor,
  emptyFirstOrLastLinePlaceholder
}) {
  return printDiffLine(
    line,
    isFirstOrLast,
    commonColor,
    commonIndicator,
    commonLineTrailingSpaceColor,
    emptyFirstOrLastLinePlaceholder
  );
}
function createPatchMark(aStart, aEnd, bStart, bEnd, { patchColor }) {
  return patchColor(
    `@@ -${aStart + 1},${aEnd - aStart} +${bStart + 1},${bEnd - bStart} @@`
  );
}
function joinAlignedDiffsNoExpand(diffs, options) {
  const iLength = diffs.length;
  const nContextLines = options.contextLines;
  const nContextLines2 = nContextLines + nContextLines;
  let jLength = iLength;
  let hasExcessAtStartOrEnd = false;
  let nExcessesBetweenChanges = 0;
  let i = 0;
  while (i !== iLength) {
    const iStart = i;
    while (i !== iLength && diffs[i][0] === DIFF_EQUAL)
      i += 1;
    if (iStart !== i) {
      if (iStart === 0) {
        if (i > nContextLines) {
          jLength -= i - nContextLines;
          hasExcessAtStartOrEnd = true;
        }
      } else if (i === iLength) {
        const n2 = i - iStart;
        if (n2 > nContextLines) {
          jLength -= n2 - nContextLines;
          hasExcessAtStartOrEnd = true;
        }
      } else {
        const n2 = i - iStart;
        if (n2 > nContextLines2) {
          jLength -= n2 - nContextLines2;
          nExcessesBetweenChanges += 1;
        }
      }
    }
    while (i !== iLength && diffs[i][0] !== DIFF_EQUAL)
      i += 1;
  }
  const hasPatch = nExcessesBetweenChanges !== 0 || hasExcessAtStartOrEnd;
  if (nExcessesBetweenChanges !== 0)
    jLength += nExcessesBetweenChanges + 1;
  else if (hasExcessAtStartOrEnd)
    jLength += 1;
  const jLast = jLength - 1;
  const lines = [];
  let jPatchMark = 0;
  if (hasPatch)
    lines.push("");
  let aStart = 0;
  let bStart = 0;
  let aEnd = 0;
  let bEnd = 0;
  const pushCommonLine = (line) => {
    const j = lines.length;
    lines.push(printCommonLine(line, j === 0 || j === jLast, options));
    aEnd += 1;
    bEnd += 1;
  };
  const pushDeleteLine = (line) => {
    const j = lines.length;
    lines.push(printDeleteLine(line, j === 0 || j === jLast, options));
    aEnd += 1;
  };
  const pushInsertLine = (line) => {
    const j = lines.length;
    lines.push(printInsertLine(line, j === 0 || j === jLast, options));
    bEnd += 1;
  };
  i = 0;
  while (i !== iLength) {
    let iStart = i;
    while (i !== iLength && diffs[i][0] === DIFF_EQUAL)
      i += 1;
    if (iStart !== i) {
      if (iStart === 0) {
        if (i > nContextLines) {
          iStart = i - nContextLines;
          aStart = iStart;
          bStart = iStart;
          aEnd = aStart;
          bEnd = bStart;
        }
        for (let iCommon = iStart; iCommon !== i; iCommon += 1)
          pushCommonLine(diffs[iCommon][1]);
      } else if (i === iLength) {
        const iEnd = i - iStart > nContextLines ? iStart + nContextLines : i;
        for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1)
          pushCommonLine(diffs[iCommon][1]);
      } else {
        const nCommon = i - iStart;
        if (nCommon > nContextLines2) {
          const iEnd = iStart + nContextLines;
          for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1)
            pushCommonLine(diffs[iCommon][1]);
          lines[jPatchMark] = createPatchMark(
            aStart,
            aEnd,
            bStart,
            bEnd,
            options
          );
          jPatchMark = lines.length;
          lines.push("");
          const nOmit = nCommon - nContextLines2;
          aStart = aEnd + nOmit;
          bStart = bEnd + nOmit;
          aEnd = aStart;
          bEnd = bStart;
          for (let iCommon = i - nContextLines; iCommon !== i; iCommon += 1)
            pushCommonLine(diffs[iCommon][1]);
        } else {
          for (let iCommon = iStart; iCommon !== i; iCommon += 1)
            pushCommonLine(diffs[iCommon][1]);
        }
      }
    }
    while (i !== iLength && diffs[i][0] === DIFF_DELETE) {
      pushDeleteLine(diffs[i][1]);
      i += 1;
    }
    while (i !== iLength && diffs[i][0] === DIFF_INSERT) {
      pushInsertLine(diffs[i][1]);
      i += 1;
    }
  }
  if (hasPatch)
    lines[jPatchMark] = createPatchMark(aStart, aEnd, bStart, bEnd, options);
  return lines.join("\n");
}
function joinAlignedDiffsExpand(diffs, options) {
  return diffs.map((diff2, i, diffs2) => {
    const line = diff2[1];
    const isFirstOrLast = i === 0 || i === diffs2.length - 1;
    switch (diff2[0]) {
      case DIFF_DELETE:
        return printDeleteLine(line, isFirstOrLast, options);
      case DIFF_INSERT:
        return printInsertLine(line, isFirstOrLast, options);
      default:
        return printCommonLine(line, isFirstOrLast, options);
    }
  }).join("\n");
}
var noColor = (string3) => string3;
var DIFF_CONTEXT_DEFAULT = 5;
function getDefaultOptions() {
  const c = getColors();
  return {
    aAnnotation: "Expected",
    aColor: c.green,
    aIndicator: "-",
    bAnnotation: "Received",
    bColor: c.red,
    bIndicator: "+",
    changeColor: c.inverse,
    changeLineTrailingSpaceColor: noColor,
    commonColor: c.dim,
    commonIndicator: " ",
    commonLineTrailingSpaceColor: noColor,
    compareKeys: void 0,
    contextLines: DIFF_CONTEXT_DEFAULT,
    emptyFirstOrLastLinePlaceholder: "",
    expand: true,
    includeChangeCounts: false,
    omitAnnotationLines: false,
    patchColor: c.yellow
  };
}
function getCompareKeys(compareKeys) {
  return compareKeys && typeof compareKeys === "function" ? compareKeys : void 0;
}
function getContextLines(contextLines) {
  return typeof contextLines === "number" && Number.isSafeInteger(contextLines) && contextLines >= 0 ? contextLines : DIFF_CONTEXT_DEFAULT;
}
function normalizeDiffOptions(options = {}) {
  return __spreadProps(__spreadValues(__spreadValues({}, getDefaultOptions()), options), {
    compareKeys: getCompareKeys(options.compareKeys),
    contextLines: getContextLines(options.contextLines)
  });
}
function isEmptyString(lines) {
  return lines.length === 1 && lines[0].length === 0;
}
function countChanges(diffs) {
  let a = 0;
  let b2 = 0;
  diffs.forEach((diff2) => {
    switch (diff2[0]) {
      case DIFF_DELETE:
        a += 1;
        break;
      case DIFF_INSERT:
        b2 += 1;
        break;
    }
  });
  return { a, b: b2 };
}
function printAnnotation({
  aAnnotation,
  aColor,
  aIndicator,
  bAnnotation,
  bColor,
  bIndicator,
  includeChangeCounts,
  omitAnnotationLines
}, changeCounts) {
  if (omitAnnotationLines)
    return "";
  let aRest = "";
  let bRest = "";
  if (includeChangeCounts) {
    const aCount = String(changeCounts.a);
    const bCount = String(changeCounts.b);
    const baAnnotationLengthDiff = bAnnotation.length - aAnnotation.length;
    const aAnnotationPadding = " ".repeat(Math.max(0, baAnnotationLengthDiff));
    const bAnnotationPadding = " ".repeat(Math.max(0, -baAnnotationLengthDiff));
    const baCountLengthDiff = bCount.length - aCount.length;
    const aCountPadding = " ".repeat(Math.max(0, baCountLengthDiff));
    const bCountPadding = " ".repeat(Math.max(0, -baCountLengthDiff));
    aRest = `${aAnnotationPadding}  ${aIndicator} ${aCountPadding}${aCount}`;
    bRest = `${bAnnotationPadding}  ${bIndicator} ${bCountPadding}${bCount}`;
  }
  const a = `${aIndicator} ${aAnnotation}${aRest}`;
  const b2 = `${bIndicator} ${bAnnotation}${bRest}`;
  return `${aColor(a)}
${bColor(b2)}

`;
}
function printDiffLines(diffs, options) {
  return printAnnotation(options, countChanges(diffs)) + (options.expand ? joinAlignedDiffsExpand(diffs, options) : joinAlignedDiffsNoExpand(diffs, options));
}
function diffLinesUnified(aLines, bLines, options) {
  return printDiffLines(
    diffLinesRaw(
      isEmptyString(aLines) ? [] : aLines,
      isEmptyString(bLines) ? [] : bLines
    ),
    normalizeDiffOptions(options)
  );
}
function diffLinesUnified2(aLinesDisplay, bLinesDisplay, aLinesCompare, bLinesCompare, options) {
  if (isEmptyString(aLinesDisplay) && isEmptyString(aLinesCompare)) {
    aLinesDisplay = [];
    aLinesCompare = [];
  }
  if (isEmptyString(bLinesDisplay) && isEmptyString(bLinesCompare)) {
    bLinesDisplay = [];
    bLinesCompare = [];
  }
  if (aLinesDisplay.length !== aLinesCompare.length || bLinesDisplay.length !== bLinesCompare.length) {
    return diffLinesUnified(aLinesDisplay, bLinesDisplay, options);
  }
  const diffs = diffLinesRaw(aLinesCompare, bLinesCompare);
  let aIndex = 0;
  let bIndex = 0;
  diffs.forEach((diff2) => {
    switch (diff2[0]) {
      case DIFF_DELETE:
        diff2[1] = aLinesDisplay[aIndex];
        aIndex += 1;
        break;
      case DIFF_INSERT:
        diff2[1] = bLinesDisplay[bIndex];
        bIndex += 1;
        break;
      default:
        diff2[1] = bLinesDisplay[bIndex];
        aIndex += 1;
        bIndex += 1;
    }
  });
  return printDiffLines(diffs, normalizeDiffOptions(options));
}
function diffLinesRaw(aLines, bLines) {
  const aLength = aLines.length;
  const bLength = bLines.length;
  const isCommon = (aIndex2, bIndex2) => aLines[aIndex2] === bLines[bIndex2];
  const diffs = [];
  let aIndex = 0;
  let bIndex = 0;
  const foundSubsequence = (nCommon, aCommon, bCommon) => {
    for (; aIndex !== aCommon; aIndex += 1)
      diffs.push(new Diff(DIFF_DELETE, aLines[aIndex]));
    for (; bIndex !== bCommon; bIndex += 1)
      diffs.push(new Diff(DIFF_INSERT, bLines[bIndex]));
    for (; nCommon !== 0; nCommon -= 1, aIndex += 1, bIndex += 1)
      diffs.push(new Diff(DIFF_EQUAL, bLines[bIndex]));
  };
  const diffSequences = diff$1.default.default || diff$1.default;
  diffSequences(aLength, bLength, isCommon, foundSubsequence);
  for (; aIndex !== aLength; aIndex += 1)
    diffs.push(new Diff(DIFF_DELETE, aLines[aIndex]));
  for (; bIndex !== bLength; bIndex += 1)
    diffs.push(new Diff(DIFF_INSERT, bLines[bIndex]));
  return diffs;
}
function getCommonMessage(message, options) {
  const { commonColor } = normalizeDiffOptions(options);
  return commonColor(message);
}
var {
  AsymmetricMatcher: AsymmetricMatcher2,
  DOMCollection: DOMCollection2,
  DOMElement: DOMElement2,
  Immutable: Immutable2,
  ReactElement: ReactElement2,
  ReactTestComponent: ReactTestComponent2
} = import_pretty_format3.plugins;
var PLUGINS2 = [
  ReactTestComponent2,
  ReactElement2,
  DOMElement2,
  DOMCollection2,
  Immutable2,
  AsymmetricMatcher2
];
var FORMAT_OPTIONS = {
  plugins: PLUGINS2
};
var FALLBACK_FORMAT_OPTIONS = {
  callToJSON: false,
  maxDepth: 10,
  plugins: PLUGINS2
};
function diff(a, b2, options) {
  if (Object.is(a, b2))
    return "";
  const aType = getType2(a);
  let expectedType = aType;
  let omitDifference = false;
  if (aType === "object" && typeof a.asymmetricMatch === "function") {
    if (a.$$typeof !== Symbol.for("jest.asymmetricMatcher")) {
      return null;
    }
    if (typeof a.getExpectedType !== "function") {
      return null;
    }
    expectedType = a.getExpectedType();
    omitDifference = expectedType === "string";
  }
  if (expectedType !== getType2(b2)) {
    const { aAnnotation, aColor, aIndicator, bAnnotation, bColor, bIndicator } = normalizeDiffOptions(options);
    const formatOptions = getFormatOptions(FALLBACK_FORMAT_OPTIONS, options);
    const aDisplay = (0, import_pretty_format3.format)(a, formatOptions);
    const bDisplay = (0, import_pretty_format3.format)(b2, formatOptions);
    const aDiff = `${aColor(`${aIndicator} ${aAnnotation}:`)} 
${aDisplay}`;
    const bDiff = `${bColor(`${bIndicator} ${bAnnotation}:`)} 
${bDisplay}`;
    return `${aDiff}

${bDiff}`;
  }
  if (omitDifference)
    return null;
  switch (aType) {
    case "string":
      return diffLinesUnified(a.split("\n"), b2.split("\n"), options);
    case "boolean":
    case "number":
      return comparePrimitive(a, b2, options);
    case "map":
      return compareObjects(sortMap(a), sortMap(b2), options);
    case "set":
      return compareObjects(sortSet(a), sortSet(b2), options);
    default:
      return compareObjects(a, b2, options);
  }
}
function comparePrimitive(a, b2, options) {
  const aFormat = (0, import_pretty_format3.format)(a, FORMAT_OPTIONS);
  const bFormat = (0, import_pretty_format3.format)(b2, FORMAT_OPTIONS);
  return aFormat === bFormat ? "" : diffLinesUnified(aFormat.split("\n"), bFormat.split("\n"), options);
}
function sortMap(map2) {
  return new Map(Array.from(map2.entries()).sort());
}
function sortSet(set3) {
  return new Set(Array.from(set3.values()).sort());
}
function compareObjects(a, b2, options) {
  let difference;
  let hasThrown = false;
  try {
    const formatOptions = getFormatOptions(FORMAT_OPTIONS, options);
    difference = getObjectsDifference(a, b2, formatOptions, options);
  } catch (e) {
    hasThrown = true;
  }
  const noDiffMessage = getCommonMessage(NO_DIFF_MESSAGE, options);
  if (difference === void 0 || difference === noDiffMessage) {
    const formatOptions = getFormatOptions(FALLBACK_FORMAT_OPTIONS, options);
    difference = getObjectsDifference(a, b2, formatOptions, options);
    if (difference !== noDiffMessage && !hasThrown) {
      difference = `${getCommonMessage(
        SIMILAR_MESSAGE,
        options
      )}

${difference}`;
    }
  }
  return difference;
}
function getFormatOptions(formatOptions, options) {
  const { compareKeys } = normalizeDiffOptions(options);
  return __spreadProps(__spreadValues({}, formatOptions), {
    compareKeys
  });
}
function getObjectsDifference(a, b2, formatOptions, options) {
  const formatOptionsZeroIndent = __spreadProps(__spreadValues({}, formatOptions), { indent: 0 });
  const aCompare = (0, import_pretty_format3.format)(a, formatOptionsZeroIndent);
  const bCompare = (0, import_pretty_format3.format)(b2, formatOptionsZeroIndent);
  if (aCompare === bCompare) {
    return getCommonMessage(NO_DIFF_MESSAGE, options);
  } else {
    const aDisplay = (0, import_pretty_format3.format)(a, formatOptions);
    const bDisplay = (0, import_pretty_format3.format)(b2, formatOptions);
    return diffLinesUnified2(
      aDisplay.split("\n"),
      bDisplay.split("\n"),
      aCompare.split("\n"),
      bCompare.split("\n"),
      options
    );
  }
}

// node_modules/@vitest/utils/dist/error.js
var import_pretty_format4 = __toESM(require_build(), 1);
var import_diff_sequences = __toESM(require_build2(), 1);
init_loupe();
var IS_RECORD_SYMBOL = "@@__IMMUTABLE_RECORD__@@";
var IS_COLLECTION_SYMBOL = "@@__IMMUTABLE_ITERABLE__@@";
function isImmutable(v2) {
  return v2 && (v2[IS_COLLECTION_SYMBOL] || v2[IS_RECORD_SYMBOL]);
}
var OBJECT_PROTO = Object.getPrototypeOf({});
function getUnserializableMessage(err) {
  if (err instanceof Error)
    return `<unserializable>: ${err.message}`;
  if (typeof err === "string")
    return `<unserializable>: ${err}`;
  return "<unserializable>";
}
function serializeError(val, seen = /* @__PURE__ */ new WeakMap()) {
  if (!val || typeof val === "string")
    return val;
  if (typeof val === "function")
    return `Function<${val.name || "anonymous"}>`;
  if (typeof val === "symbol")
    return val.toString();
  if (typeof val !== "object")
    return val;
  if (isImmutable(val))
    return serializeError(val.toJSON(), seen);
  if (val instanceof Promise || val.constructor && val.constructor.prototype === "AsyncFunction")
    return "Promise";
  if (typeof Element !== "undefined" && val instanceof Element)
    return val.tagName;
  if (typeof val.asymmetricMatch === "function")
    return `${val.toString()} ${format(val.sample)}`;
  if (seen.has(val))
    return seen.get(val);
  if (Array.isArray(val)) {
    const clone2 = new Array(val.length);
    seen.set(val, clone2);
    val.forEach((e, i) => {
      try {
        clone2[i] = serializeError(e, seen);
      } catch (err) {
        clone2[i] = getUnserializableMessage(err);
      }
    });
    return clone2;
  } else {
    const clone2 = /* @__PURE__ */ Object.create(null);
    seen.set(val, clone2);
    let obj = val;
    while (obj && obj !== OBJECT_PROTO) {
      Object.getOwnPropertyNames(obj).forEach((key) => {
        if (key in clone2)
          return;
        try {
          clone2[key] = serializeError(val[key], seen);
        } catch (err) {
          delete clone2[key];
          clone2[key] = getUnserializableMessage(err);
        }
      });
      obj = Object.getPrototypeOf(obj);
    }
    return clone2;
  }
}
function normalizeErrorMessage(message) {
  return message.replace(/__vite_ssr_import_\d+__\./g, "");
}
function processError(err, diffOptions) {
  if (!err || typeof err !== "object")
    return { message: err };
  if (err.stack)
    err.stackStr = String(err.stack);
  if (err.name)
    err.nameStr = String(err.name);
  if (err.showDiff || err.showDiff === void 0 && err.expected !== void 0 && err.actual !== void 0) {
    const clonedActual = deepClone(err.actual, { forceWritable: true });
    const clonedExpected = deepClone(err.expected, { forceWritable: true });
    const { replacedActual, replacedExpected } = replaceAsymmetricMatcher(clonedActual, clonedExpected);
    err.diff = diff(replacedExpected, replacedActual, diffOptions);
  }
  if (typeof err.expected !== "string")
    err.expected = stringify(err.expected, 10);
  if (typeof err.actual !== "string")
    err.actual = stringify(err.actual, 10);
  try {
    if (typeof err.message === "string")
      err.message = normalizeErrorMessage(err.message);
    if (typeof err.cause === "object" && typeof err.cause.message === "string")
      err.cause.message = normalizeErrorMessage(err.cause.message);
  } catch (e) {
  }
  try {
    return serializeError(err);
  } catch (e) {
    return serializeError(new Error(`Failed to fully serialize error: ${e == null ? void 0 : e.message}
Inner error message: ${err == null ? void 0 : err.message}`));
  }
}
function isAsymmetricMatcher(data) {
  const type2 = getType(data);
  return type2 === "Object" && typeof data.asymmetricMatch === "function";
}
function isReplaceable(obj1, obj2) {
  const obj1Type = getType(obj1);
  const obj2Type = getType(obj2);
  return obj1Type === obj2Type && obj1Type === "Object";
}
function replaceAsymmetricMatcher(actual, expected, actualReplaced = /* @__PURE__ */ new WeakSet(), expectedReplaced = /* @__PURE__ */ new WeakSet()) {
  if (!isReplaceable(actual, expected))
    return { replacedActual: actual, replacedExpected: expected };
  if (actualReplaced.has(actual) || expectedReplaced.has(expected))
    return { replacedActual: actual, replacedExpected: expected };
  actualReplaced.add(actual);
  expectedReplaced.add(expected);
  getOwnProperties(expected).forEach((key) => {
    const expectedValue = expected[key];
    const actualValue = actual[key];
    if (isAsymmetricMatcher(expectedValue)) {
      if (expectedValue.asymmetricMatch(actualValue))
        actual[key] = expectedValue;
    } else if (isAsymmetricMatcher(actualValue)) {
      if (actualValue.asymmetricMatch(expectedValue))
        expected[key] = actualValue;
    } else if (isReplaceable(actualValue, expectedValue)) {
      const replaced = replaceAsymmetricMatcher(
        actualValue,
        expectedValue,
        actualReplaced,
        expectedReplaced
      );
      actual[key] = replaced.replacedActual;
      expected[key] = replaced.replacedExpected;
    }
  });
  return {
    replacedActual: actual,
    replacedExpected: expected
  };
}

// node_modules/@vitest/runner/dist/utils.js
function createChainable(keys2, fn2) {
  function create(context) {
    const chain2 = function(...args) {
      return fn2.apply(context, args);
    };
    Object.assign(chain2, fn2);
    chain2.withContext = () => chain2.bind(context);
    chain2.setContext = (key, value) => {
      context[key] = value;
    };
    chain2.mergeContext = (ctx) => {
      Object.assign(context, ctx);
    };
    for (const key of keys2) {
      Object.defineProperty(chain2, key, {
        get() {
          return create(__spreadProps(__spreadValues({}, context), { [key]: true }));
        }
      });
    }
    return chain2;
  }
  const chain = create({});
  chain.fn = fn2;
  return chain;
}
function getNames(task) {
  const names = [task.name];
  let current = task;
  while ((current == null ? void 0 : current.suite) || (current == null ? void 0 : current.file)) {
    current = current.suite || current.file;
    if (current == null ? void 0 : current.name)
      names.unshift(current.name);
  }
  return names;
}

// node_modules/@vitest/runner/dist/index.js
var fnMap = /* @__PURE__ */ new WeakMap();
var fixtureMap = /* @__PURE__ */ new WeakMap();
var hooksMap = /* @__PURE__ */ new WeakMap();
function setFn(key, fn2) {
  fnMap.set(key, fn2);
}
function setFixture(key, fixture) {
  fixtureMap.set(key, fixture);
}
function getFixture(key) {
  return fixtureMap.get(key);
}
function setHooks(key, hooks) {
  hooksMap.set(key, hooks);
}
function getHooks(key) {
  return hooksMap.get(key);
}
var PendingError = class extends Error {
  constructor(message, task) {
    super(message);
    __publicField(this, "code", "VITEST_PENDING");
    __publicField(this, "taskId");
    this.message = message;
    this.taskId = task.id;
  }
};
var collectorContext = {
  tasks: [],
  currentSuite: null
};
function collectTask(task) {
  var _a2;
  (_a2 = collectorContext.currentSuite) == null ? void 0 : _a2.tasks.push(task);
}
function runWithSuite(suite2, fn2) {
  return __async(this, null, function* () {
    const prev = collectorContext.currentSuite;
    collectorContext.currentSuite = suite2;
    yield fn2();
    collectorContext.currentSuite = prev;
  });
}
function withTimeout(fn2, timeout, isHook = false) {
  if (timeout <= 0 || timeout === Number.POSITIVE_INFINITY)
    return fn2;
  const { setTimeout: setTimeout2, clearTimeout } = getSafeTimers();
  return (...args) => {
    return Promise.race([fn2(...args), new Promise((resolve2, reject) => {
      var _a2;
      const timer = setTimeout2(() => {
        clearTimeout(timer);
        reject(new Error(makeTimeoutMsg(isHook, timeout)));
      }, timeout);
      (_a2 = timer.unref) == null ? void 0 : _a2.call(timer);
    })]);
  };
}
function createTestContext(test3, runner2) {
  var _a2;
  const context = function() {
    throw new Error("done() callback is deprecated, use promise instead");
  };
  context.meta = test3;
  context.task = test3;
  context.skip = () => {
    test3.pending = true;
    throw new PendingError("test is skipped; abort execution", test3);
  };
  context.onTestFailed = (fn2) => {
    test3.onFailed || (test3.onFailed = []);
    test3.onFailed.push(fn2);
  };
  return ((_a2 = runner2.extendTestContext) == null ? void 0 : _a2.call(runner2, context)) || context;
}
function makeTimeoutMsg(isHook, timeout) {
  return `${isHook ? "Hook" : "Test"} timed out in ${timeout}ms.
If this is a long-running ${isHook ? "hook" : "test"}, pass a timeout value as the last argument or configure it globally with "${isHook ? "hookTimeout" : "testTimeout"}".`;
}
function mergeContextFixtures(fixtures, context = {}) {
  const fixtureArray = Object.entries(fixtures).map(([prop, value], index2) => {
    const isFn = typeof value === "function";
    return {
      prop,
      value,
      index: index2,
      isFn
    };
  });
  if (Array.isArray(context.fixtures))
    context.fixtures = context.fixtures.concat(fixtureArray);
  else
    context.fixtures = fixtureArray;
  fixtureArray.forEach((fixture) => {
    if (fixture.isFn) {
      const usedProps = getUsedProps(fixture.value);
      if (usedProps.length)
        fixture.deps = context.fixtures.filter(({ index: index2, prop }) => index2 !== fixture.index && usedProps.includes(prop));
    }
  });
  return context;
}
var fixtureValueMap = /* @__PURE__ */ new Map();
var fixtureCleanupFnMap = /* @__PURE__ */ new Map();
function withFixtures(fn2, testContext) {
  return (hookContext) => {
    const context = hookContext || testContext;
    if (!context)
      return fn2({});
    let cleanupFnArray = fixtureCleanupFnMap.get(context.task.suite.id);
    if (!cleanupFnArray) {
      cleanupFnArray = [];
      fixtureCleanupFnMap.set(context.task.suite.id, cleanupFnArray);
    }
    const fixtures = getFixture(context);
    if (!(fixtures == null ? void 0 : fixtures.length))
      return fn2(context);
    const usedProps = getUsedProps(fn2);
    if (!usedProps.length)
      return fn2(context);
    const usedFixtures = fixtures.filter(({ prop }) => usedProps.includes(prop));
    const pendingFixtures = resolveDeps(usedFixtures);
    let cursor = 0;
    return new Promise((resolve2, reject) => {
      function use2(fixtureValue) {
        return __async(this, null, function* () {
          const fixture = pendingFixtures[cursor++];
          context[fixture.prop] = fixtureValue;
          if (!fixtureValueMap.has(fixture)) {
            fixtureValueMap.set(fixture, fixtureValue);
            cleanupFnArray.unshift(() => {
              fixtureValueMap.delete(fixture);
            });
          }
          if (cursor < pendingFixtures.length) {
            yield next();
          } else {
            try {
              resolve2(yield fn2(context));
            } catch (err) {
              reject(err);
            }
            return new Promise((resolve22) => {
              cleanupFnArray.push(resolve22);
            });
          }
        });
      }
      function next() {
        return __async(this, null, function* () {
          const fixture = pendingFixtures[cursor];
          const { isFn, value } = fixture;
          if (fixtureValueMap.has(fixture))
            return use2(fixtureValueMap.get(fixture));
          else
            return isFn ? value(context, use2) : use2(value);
        });
      }
      const setupFixturePromise = next();
      cleanupFnArray.unshift(() => setupFixturePromise);
    });
  };
}
function resolveDeps(fixtures, depSet = /* @__PURE__ */ new Set(), pendingFixtures = []) {
  fixtures.forEach((fixture) => {
    if (pendingFixtures.includes(fixture))
      return;
    if (!fixture.isFn || !fixture.deps) {
      pendingFixtures.push(fixture);
      return;
    }
    if (depSet.has(fixture))
      throw new Error("circular fixture dependency");
    depSet.add(fixture);
    resolveDeps(fixture.deps, depSet, pendingFixtures);
    pendingFixtures.push(fixture);
    depSet.clear();
  });
  return pendingFixtures;
}
function getUsedProps(fn2) {
  const match = fn2.toString().match(/[^(]*\(([^)]*)/);
  if (!match)
    return [];
  const args = splitByComma(match[1]);
  if (!args.length)
    return [];
  const first = args[0];
  if (!(first.startsWith("{") && first.endsWith("}")))
    throw new Error("the first argument must use object destructuring pattern");
  const _first = first.slice(1, -1).replace(/\s/g, "");
  const props = splitByComma(_first).map((prop) => {
    return prop.replace(/\:.*|\=.*/g, "");
  });
  const last = props.at(-1);
  if (last && last.startsWith("..."))
    throw new Error("Rest parameters are not supported");
  return props;
}
function splitByComma(s) {
  const result = [];
  const stack = [];
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[") {
      stack.push(s[i] === "{" ? "}" : "]");
    } else if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else if (!stack.length && s[i] === ",") {
      const token = s.substring(start, i).trim();
      if (token)
        result.push(token);
      start = i + 1;
    }
  }
  const lastToken = s.substring(start).trim();
  if (lastToken)
    result.push(lastToken);
  return result;
}
var suite = createSuite();
var test = createTest(
  function(name, fn2, options) {
    getCurrentSuite().test.fn.call(this, formatName(name), fn2, options);
  }
);
var describe = suite;
var it = test;
var runner;
var defaultSuite;
function getRunner() {
  return runner;
}
function getCurrentSuite() {
  return collectorContext.currentSuite || defaultSuite;
}
function createSuiteHooks() {
  return {
    beforeAll: [],
    afterAll: [],
    beforeEach: [],
    afterEach: []
  };
}
function createSuiteCollector(name, factory = () => {
}, mode, concurrent, sequential, shuffle2, each, suiteOptions) {
  const tasks = [];
  const factoryQueue = [];
  let suite2;
  initSuite();
  const test22 = createTest(function(name2, fn2 = noop, options) {
    var _a2, _b;
    const mode2 = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run";
    if (typeof options === "number")
      options = { timeout: options };
    if (typeof suiteOptions === "object")
      options = Object.assign({}, suiteOptions, options);
    const test3 = {
      id: "",
      type: "test",
      name: formatName(name2),
      each: this.each,
      mode: mode2,
      suite: void 0,
      fails: this.fails,
      retry: (_a2 = options == null ? void 0 : options.retry) != null ? _a2 : runner.config.retry,
      repeats: options == null ? void 0 : options.repeats,
      meta: /* @__PURE__ */ Object.create(null)
    };
    if (this.concurrent || !sequential && (concurrent || runner.config.sequence.concurrent))
      test3.concurrent = true;
    if (shuffle2)
      test3.shuffle = true;
    const context = createTestContext(test3, runner);
    Object.defineProperty(test3, "context", {
      value: context,
      enumerable: false
    });
    setFixture(context, this.fixtures);
    setFn(test3, withTimeout(
      withFixtures(fn2, context),
      (_b = options == null ? void 0 : options.timeout) != null ? _b : runner.config.testTimeout
    ));
    tasks.push(test3);
  });
  const custom2 = function(name2 = "") {
    const self2 = this || {};
    const task = {
      id: "",
      name: name2,
      type: "custom",
      mode: self2.only ? "only" : self2.skip ? "skip" : self2.todo ? "todo" : "run",
      meta: /* @__PURE__ */ Object.create(null)
    };
    tasks.push(task);
    return task;
  };
  const collector = {
    type: "collector",
    name,
    mode,
    options: suiteOptions,
    test: test22,
    tasks,
    collect,
    custom: custom2,
    clear,
    on: addHook
  };
  function addHook(name2, ...fn2) {
    getHooks(suite2)[name2].push(...fn2);
  }
  function initSuite() {
    if (typeof suiteOptions === "number")
      suiteOptions = { timeout: suiteOptions };
    suite2 = {
      id: "",
      type: "suite",
      name,
      mode,
      each,
      shuffle: shuffle2,
      tasks: [],
      meta: /* @__PURE__ */ Object.create(null)
    };
    setHooks(suite2, createSuiteHooks());
  }
  function clear() {
    tasks.length = 0;
    factoryQueue.length = 0;
    initSuite();
  }
  function collect(file) {
    return __async(this, null, function* () {
      factoryQueue.length = 0;
      if (factory)
        yield runWithSuite(collector, () => factory(test22));
      const allChildren = [];
      for (const i of [...factoryQueue, ...tasks])
        allChildren.push(i.type === "collector" ? yield i.collect(file) : i);
      suite2.file = file;
      suite2.tasks = allChildren;
      allChildren.forEach((task) => {
        task.suite = suite2;
        if (file)
          task.file = file;
      });
      return suite2;
    });
  }
  collectTask(collector);
  return collector;
}
function createSuite() {
  function suiteFn(name, factory, options) {
    const mode = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run";
    const currentSuite = getCurrentSuite();
    if (typeof options === "number")
      options = { timeout: options };
    if (currentSuite == null ? void 0 : currentSuite.options)
      options = __spreadValues(__spreadValues({}, currentSuite.options), options);
    return createSuiteCollector(formatName(name), factory, mode, this.concurrent, this.sequence, this.shuffle, this.each, options);
  }
  suiteFn.each = function(cases, ...args) {
    const suite2 = this.withContext();
    this.setContext("each", true);
    if (Array.isArray(cases) && args.length)
      cases = formatTemplateString(cases, args);
    return (name, fn2, options) => {
      const _name = formatName(name);
      const arrayOnlyCases = cases.every(Array.isArray);
      cases.forEach((i, idx) => {
        const items = Array.isArray(i) ? i : [i];
        arrayOnlyCases ? suite2(formatTitle(_name, items, idx), () => fn2(...items), options) : suite2(formatTitle(_name, items, idx), () => fn2(i), options);
      });
      this.setContext("each", void 0);
    };
  };
  suiteFn.skipIf = (condition) => condition ? suite.skip : suite;
  suiteFn.runIf = (condition) => condition ? suite : suite.skip;
  return createChainable(
    ["concurrent", "sequential", "shuffle", "skip", "only", "todo"],
    suiteFn
  );
}
function createTest(fn2, context) {
  const testFn = fn2;
  testFn.each = function(cases, ...args) {
    const test22 = this.withContext();
    this.setContext("each", true);
    if (Array.isArray(cases) && args.length)
      cases = formatTemplateString(cases, args);
    return (name, fn22, options) => {
      const _name = formatName(name);
      const arrayOnlyCases = cases.every(Array.isArray);
      cases.forEach((i, idx) => {
        const items = Array.isArray(i) ? i : [i];
        arrayOnlyCases ? test22(formatTitle(_name, items, idx), () => fn22(...items), options) : test22(formatTitle(_name, items, idx), () => fn22(i), options);
      });
      this.setContext("each", void 0);
    };
  };
  testFn.skipIf = (condition) => condition ? test.skip : test;
  testFn.runIf = (condition) => condition ? test : test.skip;
  testFn.extend = function(fixtures) {
    const _context = mergeContextFixtures(fixtures, context);
    return createTest(function fn22(name, fn22, options) {
      getCurrentSuite().test.fn.call(this, formatName(name), fn22, options);
    }, _context);
  };
  const _test2 = createChainable(
    ["concurrent", "skip", "only", "todo", "fails"],
    testFn
  );
  if (context)
    _test2.mergeContext(context);
  return _test2;
}
function formatName(name) {
  return typeof name === "string" ? name : name instanceof Function ? name.name || "<anonymous>" : String(name);
}
function formatTitle(template, items, idx) {
  if (template.includes("%#")) {
    template = template.replace(/%%/g, "__vitest_escaped_%__").replace(/%#/g, `${idx}`).replace(/__vitest_escaped_%__/g, "%%");
  }
  const count = template.split("%").length - 1;
  let formatted = format(template, ...items.slice(0, count));
  if (isObject(items[0])) {
    formatted = formatted.replace(
      /\$([$\w_.]+)/g,
      (_, key) => {
        var _a2, _b;
        return objDisplay(objectAttr(items[0], key), { truncate: (_b = (_a2 = runner == null ? void 0 : runner.config) == null ? void 0 : _a2.chaiConfig) == null ? void 0 : _b.truncateThreshold });
      }
      // https://github.com/chaijs/chai/pull/1490
    );
  }
  return formatted;
}
function formatTemplateString(cases, args) {
  const header = cases.join("").trim().replace(/ /g, "").split("\n").map((i) => i.split("|"))[0];
  const res = [];
  for (let i = 0; i < Math.floor(args.length / header.length); i++) {
    const oneCase = {};
    for (let j = 0; j < header.length; j++)
      oneCase[header[j]] = args[i * header.length + j];
    res.push(oneCase);
  }
  return res;
}
var now$1 = Date.now;
var _test;
function getCurrentTest() {
  return _test;
}
var now = Date.now;
function getDefaultHookTimeout() {
  return getRunner().config.hookTimeout;
}
function beforeAll(fn2, timeout) {
  return getCurrentSuite().on("beforeAll", withTimeout(fn2, timeout != null ? timeout : getDefaultHookTimeout(), true));
}
function afterAll(fn2, timeout) {
  return getCurrentSuite().on("afterAll", withTimeout(fn2, timeout != null ? timeout : getDefaultHookTimeout(), true));
}
function beforeEach(fn2, timeout) {
  return getCurrentSuite().on("beforeEach", withTimeout(withFixtures(fn2), timeout != null ? timeout : getDefaultHookTimeout(), true));
}
function afterEach(fn2, timeout) {
  return getCurrentSuite().on("afterEach", withTimeout(withFixtures(fn2), timeout != null ? timeout : getDefaultHookTimeout(), true));
}
var onTestFailed = createTestHook("onTestFailed", (test3, handler) => {
  test3.onFailed || (test3.onFailed = []);
  test3.onFailed.push(handler);
});
function createTestHook(name, handler) {
  return (fn2) => {
    const current = getCurrentTest();
    if (!current)
      throw new Error(`Hook ${name}() can only be called inside a test`);
    handler(current, fn2);
  };
}

// node_modules/vitest/dist/vendor-global.97e4527c.js
function getWorkerState() {
  return globalThis.__vitest_worker__;
}
function getCurrentEnvironment() {
  const state = getWorkerState();
  return state == null ? void 0 : state.environment.name;
}

// node_modules/vitest/dist/vendor-index.29282562.js
var _a;
var isNode = typeof process < "u" && typeof process.stdout < "u" && !((_a = process.versions) == null ? void 0 : _a.deno) && !globalThis.window;
var isWindows = isNode && process.platform === "win32";
function getRunMode() {
  return getWorkerState().config.mode;
}
function isRunningInBenchmark() {
  return getRunMode() === "benchmark";
}

// node_modules/chai/index.mjs
var chai_exports = {};
__export(chai_exports, {
  Assertion: () => Assertion,
  AssertionError: () => AssertionError,
  assert: () => assert,
  config: () => config,
  core: () => core,
  default: () => chai_default,
  expect: () => expect,
  should: () => should,
  use: () => use,
  util: () => util,
  version: () => version
});
var import_index = __toESM(require_chai2(), 1);
var expect = import_index.default.expect;
var version = import_index.default.version;
var Assertion = import_index.default.Assertion;
var AssertionError = import_index.default.AssertionError;
var util = import_index.default.util;
var config = import_index.default.config;
var use = import_index.default.use;
var should = import_index.default.should;
var assert = import_index.default.assert;
var core = import_index.default.core;
var chai_default = import_index.default;

// node_modules/vitest/dist/vendor-_commonjsHelpers.7d1333e8.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}

// node_modules/tinyspy/dist/index.js
function m(e, t) {
  if (!e)
    throw new Error(t);
}
function y(e, t) {
  return typeof t === e;
}
function b(e) {
  return e instanceof Promise;
}
function d(e, t, n2) {
  Object.defineProperty(e, t, n2);
}
function p(e, t, n2) {
  Object.defineProperty(e, t, { value: n2 });
}
var u = Symbol.for("tinyspy:spy");
var I = /* @__PURE__ */ new Set();
var M = (e) => {
  e.called = false, e.callCount = 0, e.calls = [], e.results = [], e.next = [];
};
var C = (e) => (d(e, u, { value: { reset: () => M(e[u]) } }), e[u]);
var v = (e) => e[u] || C(e);
function T(e) {
  m(y("function", e) || y("undefined", e), "cannot spy on a non-function value");
  let t = function(...a) {
    let r = v(t);
    r.called = true, r.callCount++, r.calls.push(a);
    let i = r.next.shift();
    if (i) {
      r.results.push(i);
      let [s, l] = i;
      if (s === "ok")
        return l;
      throw l;
    }
    let o, c = "ok";
    if (r.impl)
      try {
        new.target ? o = Reflect.construct(r.impl, a, new.target) : o = r.impl.apply(this, a), c = "ok";
      } catch (s) {
        throw o = s, c = "error", r.results.push([c, s]), s;
      }
    let x = [c, o];
    if (b(o)) {
      let s = o.then((l) => x[1] = l).catch((l) => {
        throw x[0] = "error", x[1] = l, l;
      });
      Object.assign(s, o), o = s;
    }
    return r.results.push(x), o;
  };
  p(t, "_isMockFunction", true), p(t, "length", e ? e.length : 0), p(t, "name", e && e.name || "spy");
  let n2 = v(t);
  return n2.reset(), n2.impl = e, t;
}
var P = (e, t) => Object.getOwnPropertyDescriptor(e, t);
function E(e, t, n2) {
  m(!y("undefined", e), "spyOn could not find an object to spy upon"), m(y("object", e) || y("function", e), "cannot spyOn on a primitive value");
  let a = () => {
    if (!y("object", t))
      return [t, "value"];
    if ("getter" in t && "setter" in t)
      throw new Error("cannot spy on both getter and setter");
    if ("getter" in t)
      return [t.getter, "get"];
    if ("setter" in t)
      return [t.setter, "set"];
    throw new Error("specify getter or setter to spy on");
  }, [r, i] = a(), o = P(e, r), c = Object.getPrototypeOf(e), x = c && P(c, r), s = o || x;
  m(s || r in e, `${String(r)} does not exist`);
  let l = false;
  i === "value" && s && !s.value && s.get && (i = "get", l = true, n2 = s.get());
  let f;
  s ? f = s[i] : i !== "value" ? f = () => e[r] : f = e[r], n2 || (n2 = f);
  let S = T(n2), O = (w) => {
    let _a2 = s || {
      configurable: true,
      writable: true
    }, { value: G } = _a2, k = __objRest(_a2, ["value"]);
    i !== "value" && delete k.writable, k[i] = w, d(e, r, k);
  }, K = () => s ? d(e, r, s) : O(f), A = S[u];
  return p(A, "restore", K), p(A, "getOriginal", () => l ? f() : f), p(A, "willCall", (w) => (A.impl = w, S)), O(l ? () => S : S), I.add(S), S;
}

// node_modules/@vitest/spy/dist/index.js
var spies = /* @__PURE__ */ new Set();
function isMockFunction(fn2) {
  return typeof fn2 === "function" && "_isMockFunction" in fn2 && fn2._isMockFunction;
}
function spyOn(obj, method, accessType) {
  const dictionary = {
    get: "getter",
    set: "setter"
  };
  const objMethod = accessType ? { [dictionary[accessType]]: method } : method;
  const stub = E(obj, objMethod);
  return enhanceSpy(stub);
}
var callOrder = 0;
function enhanceSpy(spy) {
  const stub = spy;
  let implementation;
  let instances = [];
  let invocations = [];
  const state = v(spy);
  const mockContext = {
    get calls() {
      return state.calls;
    },
    get instances() {
      return instances;
    },
    get invocationCallOrder() {
      return invocations;
    },
    get results() {
      return state.results.map(([callType, value]) => {
        const type2 = callType === "error" ? "throw" : "return";
        return { type: type2, value };
      });
    },
    get lastCall() {
      return state.calls[state.calls.length - 1];
    }
  };
  let onceImplementations = [];
  let implementationChangedTemporarily = false;
  function mockCall(...args) {
    instances.push(this);
    invocations.push(++callOrder);
    const impl = implementationChangedTemporarily ? implementation : onceImplementations.shift() || implementation || state.getOriginal() || (() => {
    });
    return impl.apply(this, args);
  }
  let name = stub.name;
  stub.getMockName = () => name || "vi.fn()";
  stub.mockName = (n2) => {
    name = n2;
    return stub;
  };
  stub.mockClear = () => {
    state.reset();
    instances = [];
    invocations = [];
    return stub;
  };
  stub.mockReset = () => {
    stub.mockClear();
    implementation = () => void 0;
    onceImplementations = [];
    return stub;
  };
  stub.mockRestore = () => {
    stub.mockReset();
    state.restore();
    implementation = void 0;
    return stub;
  };
  stub.getMockImplementation = () => implementation;
  stub.mockImplementation = (fn2) => {
    implementation = fn2;
    state.willCall(mockCall);
    return stub;
  };
  stub.mockImplementationOnce = (fn2) => {
    onceImplementations.push(fn2);
    return stub;
  };
  function withImplementation(fn2, cb) {
    const originalImplementation = implementation;
    implementation = fn2;
    state.willCall(mockCall);
    implementationChangedTemporarily = true;
    const reset = () => {
      implementation = originalImplementation;
      implementationChangedTemporarily = false;
    };
    const result = cb();
    if (result instanceof Promise) {
      return result.then(() => {
        reset();
        return stub;
      });
    }
    reset();
    return stub;
  }
  stub.withImplementation = withImplementation;
  stub.mockReturnThis = () => stub.mockImplementation(function() {
    return this;
  });
  stub.mockReturnValue = (val) => stub.mockImplementation(() => val);
  stub.mockReturnValueOnce = (val) => stub.mockImplementationOnce(() => val);
  stub.mockResolvedValue = (val) => stub.mockImplementation(() => Promise.resolve(val));
  stub.mockResolvedValueOnce = (val) => stub.mockImplementationOnce(() => Promise.resolve(val));
  stub.mockRejectedValue = (val) => stub.mockImplementation(() => Promise.reject(val));
  stub.mockRejectedValueOnce = (val) => stub.mockImplementationOnce(() => Promise.reject(val));
  Object.defineProperty(stub, "mock", {
    get: () => mockContext
  });
  state.willCall(mockCall);
  spies.add(stub);
  return stub;
}
function fn(implementation) {
  const enhancedSpy = enhanceSpy(E({ spy: implementation || (() => {
  }) }, "spy"));
  if (implementation)
    enhancedSpy.mockImplementation(implementation);
  return enhancedSpy;
}

// node_modules/@vitest/expect/dist/index.js
var MATCHERS_OBJECT = Symbol.for("matchers-object");
var JEST_MATCHERS_OBJECT = Symbol.for("$$jest-matchers-object");
var GLOBAL_EXPECT = Symbol.for("expect-global");
if (!Object.prototype.hasOwnProperty.call(globalThis, MATCHERS_OBJECT)) {
  const globalState = /* @__PURE__ */ new WeakMap();
  const matchers = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, MATCHERS_OBJECT, {
    get: () => globalState
  });
  Object.defineProperty(globalThis, JEST_MATCHERS_OBJECT, {
    configurable: true,
    get: () => ({
      state: globalState.get(globalThis[GLOBAL_EXPECT]),
      matchers
    })
  });
}
function getState(expect2) {
  return globalThis[MATCHERS_OBJECT].get(expect2);
}
function setState(state, expect2) {
  const map2 = globalThis[MATCHERS_OBJECT];
  const current = map2.get(expect2) || {};
  Object.assign(current, state);
  map2.set(expect2, current);
}
function getMatcherUtils() {
  const c = () => getColors();
  const EXPECTED_COLOR = c().green;
  const RECEIVED_COLOR = c().red;
  const INVERTED_COLOR = c().inverse;
  const BOLD_WEIGHT = c().bold;
  const DIM_COLOR = c().dim;
  function matcherHint(matcherName, received = "received", expected = "expected", options = {}) {
    const {
      comment = "",
      isDirectExpectCall = false,
      // seems redundant with received === ''
      isNot = false,
      promise = "",
      secondArgument = "",
      expectedColor = EXPECTED_COLOR,
      receivedColor = RECEIVED_COLOR,
      secondArgumentColor = EXPECTED_COLOR
    } = options;
    let hint = "";
    let dimString = "expect";
    if (!isDirectExpectCall && received !== "") {
      hint += DIM_COLOR(`${dimString}(`) + receivedColor(received);
      dimString = ")";
    }
    if (promise !== "") {
      hint += DIM_COLOR(`${dimString}.`) + promise;
      dimString = "";
    }
    if (isNot) {
      hint += `${DIM_COLOR(`${dimString}.`)}not`;
      dimString = "";
    }
    if (matcherName.includes(".")) {
      dimString += matcherName;
    } else {
      hint += DIM_COLOR(`${dimString}.`) + matcherName;
      dimString = "";
    }
    if (expected === "") {
      dimString += "()";
    } else {
      hint += DIM_COLOR(`${dimString}(`) + expectedColor(expected);
      if (secondArgument)
        hint += DIM_COLOR(", ") + secondArgumentColor(secondArgument);
      dimString = ")";
    }
    if (comment !== "")
      dimString += ` // ${comment}`;
    if (dimString !== "")
      hint += DIM_COLOR(dimString);
    return hint;
  }
  const SPACE_SYMBOL = "\xB7";
  const replaceTrailingSpaces = (text) => text.replace(/\s+$/gm, (spaces) => SPACE_SYMBOL.repeat(spaces.length));
  const printReceived = (object2) => RECEIVED_COLOR(replaceTrailingSpaces(stringify(object2)));
  const printExpected = (value) => EXPECTED_COLOR(replaceTrailingSpaces(stringify(value)));
  return {
    EXPECTED_COLOR,
    RECEIVED_COLOR,
    INVERTED_COLOR,
    BOLD_WEIGHT,
    DIM_COLOR,
    matcherHint,
    printReceived,
    printExpected
  };
}
function equals(a, b2, customTesters, strictCheck) {
  customTesters = customTesters || [];
  return eq(a, b2, [], [], customTesters, strictCheck ? hasKey : hasDefinedKey);
}
var functionToString = Function.prototype.toString;
function isAsymmetric(obj) {
  return !!obj && typeof obj === "object" && "asymmetricMatch" in obj && isA("Function", obj.asymmetricMatch);
}
function asymmetricMatch(a, b2) {
  const asymmetricA = isAsymmetric(a);
  const asymmetricB = isAsymmetric(b2);
  if (asymmetricA && asymmetricB)
    return void 0;
  if (asymmetricA)
    return a.asymmetricMatch(b2);
  if (asymmetricB)
    return b2.asymmetricMatch(a);
}
function eq(a, b2, aStack, bStack, customTesters, hasKey2) {
  let result = true;
  const asymmetricResult = asymmetricMatch(a, b2);
  if (asymmetricResult !== void 0)
    return asymmetricResult;
  for (let i = 0; i < customTesters.length; i++) {
    const customTesterResult = customTesters[i](a, b2);
    if (customTesterResult !== void 0)
      return customTesterResult;
  }
  if (a instanceof Error && b2 instanceof Error)
    return a.message === b2.message;
  if (Object.is(a, b2))
    return true;
  if (a === null || b2 === null)
    return a === b2;
  const className2 = Object.prototype.toString.call(a);
  if (className2 !== Object.prototype.toString.call(b2))
    return false;
  switch (className2) {
    case "[object Boolean]":
    case "[object String]":
    case "[object Number]":
      if (typeof a !== typeof b2) {
        return false;
      } else if (typeof a !== "object" && typeof b2 !== "object") {
        return Object.is(a, b2);
      } else {
        return Object.is(a.valueOf(), b2.valueOf());
      }
    case "[object Date]": {
      const numA = +a;
      const numB = +b2;
      return numA === numB || Number.isNaN(numA) && Number.isNaN(numB);
    }
    case "[object RegExp]":
      return a.source === b2.source && a.flags === b2.flags;
  }
  if (typeof a !== "object" || typeof b2 !== "object")
    return false;
  if (isDomNode(a) && isDomNode(b2))
    return a.isEqualNode(b2);
  let length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b2;
    else if (bStack[length] === b2)
      return false;
  }
  aStack.push(a);
  bStack.push(b2);
  if (className2 === "[object Array]" && a.length !== b2.length)
    return false;
  const aKeys = keys(a, hasKey2);
  let key;
  let size = aKeys.length;
  if (keys(b2, hasKey2).length !== size)
    return false;
  while (size--) {
    key = aKeys[size];
    result = hasKey2(b2, key) && eq(a[key], b2[key], aStack, bStack, customTesters, hasKey2);
    if (!result)
      return false;
  }
  aStack.pop();
  bStack.pop();
  return result;
}
function keys(obj, hasKey2) {
  const keys2 = [];
  for (const key in obj) {
    if (hasKey2(obj, key))
      keys2.push(key);
  }
  return keys2.concat(
    Object.getOwnPropertySymbols(obj).filter(
      (symbol) => Object.getOwnPropertyDescriptor(obj, symbol).enumerable
    )
  );
}
function hasDefinedKey(obj, key) {
  return hasKey(obj, key) && obj[key] !== void 0;
}
function hasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function isA(typeName, value) {
  return Object.prototype.toString.apply(value) === `[object ${typeName}]`;
}
function isDomNode(obj) {
  return obj !== null && typeof obj === "object" && "nodeType" in obj && typeof obj.nodeType === "number" && "nodeName" in obj && typeof obj.nodeName === "string" && "isEqualNode" in obj && typeof obj.isEqualNode === "function";
}
var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
function isImmutableUnorderedKeyed(maybeKeyed) {
  return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL] && !maybeKeyed[IS_ORDERED_SENTINEL]);
}
function isImmutableUnorderedSet(maybeSet) {
  return !!(maybeSet && maybeSet[IS_SET_SENTINEL] && !maybeSet[IS_ORDERED_SENTINEL]);
}
var IteratorSymbol = Symbol.iterator;
function hasIterator(object2) {
  return !!(object2 != null && object2[IteratorSymbol]);
}
function iterableEquality(a, b2, aStack = [], bStack = []) {
  if (typeof a !== "object" || typeof b2 !== "object" || Array.isArray(a) || Array.isArray(b2) || !hasIterator(a) || !hasIterator(b2))
    return void 0;
  if (a.constructor !== b2.constructor)
    return false;
  let length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b2;
  }
  aStack.push(a);
  bStack.push(b2);
  const iterableEqualityWithStack = (a2, b22) => iterableEquality(a2, b22, [...aStack], [...bStack]);
  if (a.size !== void 0) {
    if (a.size !== b2.size) {
      return false;
    } else if (isA("Set", a) || isImmutableUnorderedSet(a)) {
      let allFound = true;
      for (const aValue of a) {
        if (!b2.has(aValue)) {
          let has2 = false;
          for (const bValue of b2) {
            const isEqual = equals(aValue, bValue, [iterableEqualityWithStack]);
            if (isEqual === true)
              has2 = true;
          }
          if (has2 === false) {
            allFound = false;
            break;
          }
        }
      }
      aStack.pop();
      bStack.pop();
      return allFound;
    } else if (isA("Map", a) || isImmutableUnorderedKeyed(a)) {
      let allFound = true;
      for (const aEntry of a) {
        if (!b2.has(aEntry[0]) || !equals(aEntry[1], b2.get(aEntry[0]), [iterableEqualityWithStack])) {
          let has2 = false;
          for (const bEntry of b2) {
            const matchedKey = equals(aEntry[0], bEntry[0], [
              iterableEqualityWithStack
            ]);
            let matchedValue = false;
            if (matchedKey === true) {
              matchedValue = equals(aEntry[1], bEntry[1], [
                iterableEqualityWithStack
              ]);
            }
            if (matchedValue === true)
              has2 = true;
          }
          if (has2 === false) {
            allFound = false;
            break;
          }
        }
      }
      aStack.pop();
      bStack.pop();
      return allFound;
    }
  }
  const bIterator = b2[IteratorSymbol]();
  for (const aValue of a) {
    const nextB = bIterator.next();
    if (nextB.done || !equals(aValue, nextB.value, [iterableEqualityWithStack]))
      return false;
  }
  if (!bIterator.next().done)
    return false;
  aStack.pop();
  bStack.pop();
  return true;
}
function hasPropertyInObject(object2, key) {
  const shouldTerminate = !object2 || typeof object2 !== "object" || object2 === Object.prototype;
  if (shouldTerminate)
    return false;
  return Object.prototype.hasOwnProperty.call(object2, key) || hasPropertyInObject(Object.getPrototypeOf(object2), key);
}
function isObjectWithKeys(a) {
  return isObject(a) && !(a instanceof Error) && !Array.isArray(a) && !(a instanceof Date);
}
function subsetEquality(object2, subset) {
  const subsetEqualityWithContext = (seenReferences = /* @__PURE__ */ new WeakMap()) => (object22, subset2) => {
    if (!isObjectWithKeys(subset2))
      return void 0;
    return Object.keys(subset2).every((key) => {
      if (isObjectWithKeys(subset2[key])) {
        if (seenReferences.has(subset2[key]))
          return equals(object22[key], subset2[key], [iterableEquality]);
        seenReferences.set(subset2[key], true);
      }
      const result = object22 != null && hasPropertyInObject(object22, key) && equals(object22[key], subset2[key], [
        iterableEquality,
        subsetEqualityWithContext(seenReferences)
      ]);
      seenReferences.delete(subset2[key]);
      return result;
    });
  };
  return subsetEqualityWithContext()(object2, subset);
}
function typeEquality(a, b2) {
  if (a == null || b2 == null || a.constructor === b2.constructor)
    return void 0;
  return false;
}
function arrayBufferEquality(a, b2) {
  let dataViewA = a;
  let dataViewB = b2;
  if (!(a instanceof DataView && b2 instanceof DataView)) {
    if (!(a instanceof ArrayBuffer) || !(b2 instanceof ArrayBuffer))
      return void 0;
    try {
      dataViewA = new DataView(a);
      dataViewB = new DataView(b2);
    } catch (e) {
      return void 0;
    }
  }
  if (dataViewA.byteLength !== dataViewB.byteLength)
    return false;
  for (let i = 0; i < dataViewA.byteLength; i++) {
    if (dataViewA.getUint8(i) !== dataViewB.getUint8(i))
      return false;
  }
  return true;
}
function sparseArrayEquality(a, b2) {
  if (!Array.isArray(a) || !Array.isArray(b2))
    return void 0;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b2);
  return equals(a, b2, [iterableEquality, typeEquality], true) && equals(aKeys, bKeys);
}
function generateToBeMessage(deepEqualityName, expected = "#{this}", actual = "#{exp}") {
  const toBeMessage = `expected ${expected} to be ${actual} // Object.is equality`;
  if (["toStrictEqual", "toEqual"].includes(deepEqualityName))
    return `${toBeMessage}

If it should pass with deep equality, replace "toBe" with "${deepEqualityName}"

Expected: ${expected}
Received: serializes to the same string
`;
  return toBeMessage;
}
var AsymmetricMatcher3 = class {
  constructor(sample, inverse = false) {
    // should have "jest" to be compatible with its ecosystem
    __publicField(this, "$$typeof", Symbol.for("jest.asymmetricMatcher"));
    this.sample = sample;
    this.inverse = inverse;
  }
  getMatcherContext(expect2) {
    return __spreadProps(__spreadValues({}, getState(expect2 || globalThis[GLOBAL_EXPECT])), {
      equals,
      isNot: this.inverse,
      utils: __spreadProps(__spreadValues({}, getMatcherUtils()), {
        diff,
        stringify,
        iterableEquality,
        subsetEquality
      })
    });
  }
};
var StringContaining = class extends AsymmetricMatcher3 {
  constructor(sample, inverse = false) {
    if (!isA("String", sample))
      throw new Error("Expected is not a string");
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    const result = isA("String", other) && other.includes(this.sample);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "string";
  }
};
var Anything = class extends AsymmetricMatcher3 {
  asymmetricMatch(other) {
    return other != null;
  }
  toString() {
    return "Anything";
  }
  toAsymmetricMatcher() {
    return "Anything";
  }
};
var ObjectContaining = class extends AsymmetricMatcher3 {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  getPrototype(obj) {
    if (Object.getPrototypeOf)
      return Object.getPrototypeOf(obj);
    if (obj.constructor.prototype === obj)
      return null;
    return obj.constructor.prototype;
  }
  hasProperty(obj, property) {
    if (!obj)
      return false;
    if (Object.prototype.hasOwnProperty.call(obj, property))
      return true;
    return this.hasProperty(this.getPrototype(obj), property);
  }
  asymmetricMatch(other) {
    if (typeof this.sample !== "object") {
      throw new TypeError(
        `You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`
      );
    }
    let result = true;
    for (const property in this.sample) {
      if (!this.hasProperty(other, property) || !equals(this.sample[property], other[property])) {
        result = false;
        break;
      }
    }
    return this.inverse ? !result : result;
  }
  toString() {
    return `Object${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "object";
  }
};
var ArrayContaining = class extends AsymmetricMatcher3 {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    if (!Array.isArray(this.sample)) {
      throw new TypeError(
        `You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`
      );
    }
    const result = this.sample.length === 0 || Array.isArray(other) && this.sample.every(
      (item) => other.some((another) => equals(item, another))
    );
    return this.inverse ? !result : result;
  }
  toString() {
    return `Array${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "array";
  }
};
var Any = class extends AsymmetricMatcher3 {
  constructor(sample) {
    if (typeof sample === "undefined") {
      throw new TypeError(
        "any() expects to be passed a constructor function. Please pass one or use anything() to match any object."
      );
    }
    super(sample);
  }
  fnNameFor(func) {
    if (func.name)
      return func.name;
    const functionToString2 = Function.prototype.toString;
    const matches = functionToString2.call(func).match(/^(?:async)?\s*function\s*\*?\s*([\w$]+)\s*\(/);
    return matches ? matches[1] : "<anonymous>";
  }
  asymmetricMatch(other) {
    if (this.sample === String)
      return typeof other == "string" || other instanceof String;
    if (this.sample === Number)
      return typeof other == "number" || other instanceof Number;
    if (this.sample === Function)
      return typeof other == "function" || other instanceof Function;
    if (this.sample === Boolean)
      return typeof other == "boolean" || other instanceof Boolean;
    if (this.sample === BigInt)
      return typeof other == "bigint" || other instanceof BigInt;
    if (this.sample === Symbol)
      return typeof other == "symbol" || other instanceof Symbol;
    if (this.sample === Object)
      return typeof other == "object";
    return other instanceof this.sample;
  }
  toString() {
    return "Any";
  }
  getExpectedType() {
    if (this.sample === String)
      return "string";
    if (this.sample === Number)
      return "number";
    if (this.sample === Function)
      return "function";
    if (this.sample === Object)
      return "object";
    if (this.sample === Boolean)
      return "boolean";
    return this.fnNameFor(this.sample);
  }
  toAsymmetricMatcher() {
    return `Any<${this.fnNameFor(this.sample)}>`;
  }
};
var StringMatching = class extends AsymmetricMatcher3 {
  constructor(sample, inverse = false) {
    if (!isA("String", sample) && !isA("RegExp", sample))
      throw new Error("Expected is not a String or a RegExp");
    super(new RegExp(sample), inverse);
  }
  asymmetricMatch(other) {
    const result = isA("String", other) && this.sample.test(other);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Matching`;
  }
  getExpectedType() {
    return "string";
  }
};
var JestAsymmetricMatchers = (chai3, utils) => {
  utils.addMethod(
    chai3.expect,
    "anything",
    () => new Anything()
  );
  utils.addMethod(
    chai3.expect,
    "any",
    (expected) => new Any(expected)
  );
  utils.addMethod(
    chai3.expect,
    "stringContaining",
    (expected) => new StringContaining(expected)
  );
  utils.addMethod(
    chai3.expect,
    "objectContaining",
    (expected) => new ObjectContaining(expected)
  );
  utils.addMethod(
    chai3.expect,
    "arrayContaining",
    (expected) => new ArrayContaining(expected)
  );
  utils.addMethod(
    chai3.expect,
    "stringMatching",
    (expected) => new StringMatching(expected)
  );
  chai3.expect.not = {
    stringContaining: (expected) => new StringContaining(expected, true),
    objectContaining: (expected) => new ObjectContaining(expected, true),
    arrayContaining: (expected) => new ArrayContaining(expected, true),
    stringMatching: (expected) => new StringMatching(expected, true)
  };
};
function recordAsyncExpect(test3, promise) {
  if (test3 && promise instanceof Promise) {
    promise = promise.finally(() => {
      const index2 = test3.promises.indexOf(promise);
      if (index2 !== -1)
        test3.promises.splice(index2, 1);
    });
    if (!test3.promises)
      test3.promises = [];
    test3.promises.push(promise);
  }
  return promise;
}
function wrapSoft(utils, fn2) {
  return function(...args) {
    var _a2;
    const test3 = utils.flag(this, "vitest-test");
    const state = (test3 == null ? void 0 : test3.context._local) ? test3.context.expect.getState() : getState(globalThis[GLOBAL_EXPECT]);
    if (!state.soft)
      return fn2.apply(this, args);
    if (!test3)
      throw new Error("expect.soft() can only be used inside a test");
    try {
      return fn2.apply(this, args);
    } catch (err) {
      test3.result || (test3.result = { state: "fail" });
      test3.result.state = "fail";
      (_a2 = test3.result).errors || (_a2.errors = []);
      test3.result.errors.push(processError(err));
    }
  };
}
var JestChaiExpect = (chai3, utils) => {
  const { AssertionError: AssertionError2 } = chai3;
  const c = () => getColors();
  function def(name, fn2) {
    const addMethod = (n2) => {
      const softWrapper = wrapSoft(utils, fn2);
      utils.addMethod(chai3.Assertion.prototype, n2, softWrapper);
      utils.addMethod(globalThis[JEST_MATCHERS_OBJECT].matchers, n2, softWrapper);
    };
    if (Array.isArray(name))
      name.forEach((n2) => addMethod(n2));
    else
      addMethod(name);
  }
  ["throw", "throws", "Throw"].forEach((m2) => {
    utils.overwriteMethod(chai3.Assertion.prototype, m2, (_super) => {
      return function(...args) {
        const promise = utils.flag(this, "promise");
        const object2 = utils.flag(this, "object");
        const isNot = utils.flag(this, "negate");
        if (promise === "rejects") {
          utils.flag(this, "object", () => {
            throw object2;
          });
        } else if (promise === "resolves" && typeof object2 !== "function") {
          if (!isNot) {
            const message = utils.flag(this, "message") || "expected promise to throw an error, but it didn't";
            const error = {
              showDiff: false
            };
            throw new AssertionError2(message, error, utils.flag(this, "ssfi"));
          } else {
            return;
          }
        }
        _super.apply(this, args);
      };
    });
  });
  def("withTest", function(test3) {
    utils.flag(this, "vitest-test", test3);
    return this;
  });
  def("toEqual", function(expected) {
    const actual = utils.flag(this, "object");
    const equal = equals(
      actual,
      expected,
      [iterableEquality]
    );
    return this.assert(
      equal,
      "expected #{this} to deeply equal #{exp}",
      "expected #{this} to not deeply equal #{exp}",
      expected,
      actual
    );
  });
  def("toStrictEqual", function(expected) {
    const obj = utils.flag(this, "object");
    const equal = equals(
      obj,
      expected,
      [
        iterableEquality,
        typeEquality,
        sparseArrayEquality,
        arrayBufferEquality
      ],
      true
    );
    return this.assert(
      equal,
      "expected #{this} to strictly equal #{exp}",
      "expected #{this} to not strictly equal #{exp}",
      expected,
      obj
    );
  });
  def("toBe", function(expected) {
    const actual = this._obj;
    const pass = Object.is(actual, expected);
    let deepEqualityName = "";
    if (!pass) {
      const toStrictEqualPass = equals(
        actual,
        expected,
        [
          iterableEquality,
          typeEquality,
          sparseArrayEquality,
          arrayBufferEquality
        ],
        true
      );
      if (toStrictEqualPass) {
        deepEqualityName = "toStrictEqual";
      } else {
        const toEqualPass = equals(
          actual,
          expected,
          [iterableEquality]
        );
        if (toEqualPass)
          deepEqualityName = "toEqual";
      }
    }
    return this.assert(
      pass,
      generateToBeMessage(deepEqualityName),
      "expected #{this} not to be #{exp} // Object.is equality",
      expected,
      actual
    );
  });
  def("toMatchObject", function(expected) {
    const actual = this._obj;
    return this.assert(
      equals(actual, expected, [iterableEquality, subsetEquality]),
      "expected #{this} to match object #{exp}",
      "expected #{this} to not match object #{exp}",
      expected,
      actual
    );
  });
  def("toMatch", function(expected) {
    if (typeof expected === "string")
      return this.include(expected);
    else
      return this.match(expected);
  });
  def("toContain", function(item) {
    return this.contain(item);
  });
  def("toContainEqual", function(expected) {
    const obj = utils.flag(this, "object");
    const index2 = Array.from(obj).findIndex((item) => {
      return equals(item, expected);
    });
    this.assert(
      index2 !== -1,
      "expected #{this} to deep equally contain #{exp}",
      "expected #{this} to not deep equally contain #{exp}",
      expected
    );
  });
  def("toBeTruthy", function() {
    const obj = utils.flag(this, "object");
    this.assert(
      Boolean(obj),
      "expected #{this} to be truthy",
      "expected #{this} to not be truthy",
      obj,
      false
    );
  });
  def("toBeFalsy", function() {
    const obj = utils.flag(this, "object");
    this.assert(
      !obj,
      "expected #{this} to be falsy",
      "expected #{this} to not be falsy",
      obj,
      false
    );
  });
  def("toBeGreaterThan", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual > expected,
      `expected ${actual} to be greater than ${expected}`,
      `expected ${actual} to be not greater than ${expected}`,
      actual,
      expected,
      false
    );
  });
  def("toBeGreaterThanOrEqual", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual >= expected,
      `expected ${actual} to be greater than or equal to ${expected}`,
      `expected ${actual} to be not greater than or equal to ${expected}`,
      actual,
      expected,
      false
    );
  });
  def("toBeLessThan", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual < expected,
      `expected ${actual} to be less than ${expected}`,
      `expected ${actual} to be not less than ${expected}`,
      actual,
      expected,
      false
    );
  });
  def("toBeLessThanOrEqual", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual <= expected,
      `expected ${actual} to be less than or equal to ${expected}`,
      `expected ${actual} to be not less than or equal to ${expected}`,
      actual,
      expected,
      false
    );
  });
  def("toBeNaN", function() {
    return this.be.NaN;
  });
  def("toBeUndefined", function() {
    return this.be.undefined;
  });
  def("toBeNull", function() {
    return this.be.null;
  });
  def("toBeDefined", function() {
    const negate = utils.flag(this, "negate");
    utils.flag(this, "negate", false);
    if (negate)
      return this.be.undefined;
    return this.not.be.undefined;
  });
  def("toBeTypeOf", function(expected) {
    const actual = typeof this._obj;
    const equal = expected === actual;
    return this.assert(
      equal,
      "expected #{this} to be type of #{exp}",
      "expected #{this} not to be type of #{exp}",
      expected,
      actual
    );
  });
  def("toBeInstanceOf", function(obj) {
    return this.instanceOf(obj);
  });
  def("toHaveLength", function(length) {
    return this.have.length(length);
  });
  def("toHaveProperty", function(...args) {
    if (Array.isArray(args[0]))
      args[0] = args[0].map((key) => String(key).replace(/([.[\]])/g, "\\$1")).join(".");
    const actual = this._obj;
    const [propertyName, expected] = args;
    const getValue = () => {
      const hasOwn = Object.prototype.hasOwnProperty.call(actual, propertyName);
      if (hasOwn)
        return { value: actual[propertyName], exists: true };
      return utils.getPathInfo(actual, propertyName);
    };
    const { value, exists } = getValue();
    const pass = exists && (args.length === 1 || equals(expected, value));
    const valueString = args.length === 1 ? "" : ` with value ${utils.objDisplay(expected)}`;
    return this.assert(
      pass,
      `expected #{this} to have property "${propertyName}"${valueString}`,
      `expected #{this} to not have property "${propertyName}"${valueString}`,
      actual
    );
  });
  def("toBeCloseTo", function(received, precision = 2) {
    const expected = this._obj;
    let pass = false;
    let expectedDiff = 0;
    let receivedDiff = 0;
    if (received === Number.POSITIVE_INFINITY && expected === Number.POSITIVE_INFINITY) {
      pass = true;
    } else if (received === Number.NEGATIVE_INFINITY && expected === Number.NEGATIVE_INFINITY) {
      pass = true;
    } else {
      expectedDiff = 10 ** -precision / 2;
      receivedDiff = Math.abs(expected - received);
      pass = receivedDiff < expectedDiff;
    }
    return this.assert(
      pass,
      `expected #{this} to be close to #{exp}, received difference is ${receivedDiff}, but expected ${expectedDiff}`,
      `expected #{this} to not be close to #{exp}, received difference is ${receivedDiff}, but expected ${expectedDiff}`,
      received,
      expected,
      false
    );
  });
  const assertIsMock = (assertion) => {
    if (!isMockFunction(assertion._obj))
      throw new TypeError(`${utils.inspect(assertion._obj)} is not a spy or a call to a spy!`);
  };
  const getSpy = (assertion) => {
    assertIsMock(assertion);
    return assertion._obj;
  };
  const ordinalOf = (i) => {
    const j = i % 10;
    const k = i % 100;
    if (j === 1 && k !== 11)
      return `${i}st`;
    if (j === 2 && k !== 12)
      return `${i}nd`;
    if (j === 3 && k !== 13)
      return `${i}rd`;
    return `${i}th`;
  };
  const formatCalls = (spy, msg, actualCall) => {
    if (spy.mock.calls) {
      msg += c().gray(`

Received: 

${spy.mock.calls.map((callArg, i) => {
        let methodCall = c().bold(`  ${ordinalOf(i + 1)} ${spy.getMockName()} call:

`);
        if (actualCall)
          methodCall += diff(actualCall, callArg, { omitAnnotationLines: true });
        else
          methodCall += stringify(callArg).split("\n").map((line) => `    ${line}`).join("\n");
        methodCall += "\n";
        return methodCall;
      }).join("\n")}`);
    }
    msg += c().gray(`

Number of calls: ${c().bold(spy.mock.calls.length)}
`);
    return msg;
  };
  const formatReturns = (spy, msg, actualReturn) => {
    msg += c().gray(`

Received: 

${spy.mock.results.map((callReturn, i) => {
      let methodCall = c().bold(`  ${ordinalOf(i + 1)} ${spy.getMockName()} call return:

`);
      if (actualReturn)
        methodCall += diff(actualReturn, callReturn.value, { omitAnnotationLines: true });
      else
        methodCall += stringify(callReturn).split("\n").map((line) => `    ${line}`).join("\n");
      methodCall += "\n";
      return methodCall;
    }).join("\n")}`);
    msg += c().gray(`

Number of calls: ${c().bold(spy.mock.calls.length)}
`);
    return msg;
  };
  def(["toHaveBeenCalledTimes", "toBeCalledTimes"], function(number) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    return this.assert(
      callCount === number,
      `expected "${spyName}" to be called #{exp} times, but got ${callCount} times`,
      `expected "${spyName}" to not be called #{exp} times`,
      number,
      callCount,
      false
    );
  });
  def("toHaveBeenCalledOnce", function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    return this.assert(
      callCount === 1,
      `expected "${spyName}" to be called once, but got ${callCount} times`,
      `expected "${spyName}" to not be called once`,
      1,
      callCount,
      false
    );
  });
  def(["toHaveBeenCalled", "toBeCalled"], function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    const called = callCount > 0;
    const isNot = utils.flag(this, "negate");
    let msg = utils.getMessage(
      this,
      [
        called,
        `expected "${spyName}" to be called at least once`,
        `expected "${spyName}" to not be called at all, but actually been called ${callCount} times`,
        true,
        called
      ]
    );
    if (called && isNot)
      msg = formatCalls(spy, msg);
    if (called && isNot || !called && !isNot)
      throw new AssertionError2(msg);
  });
  def(["toHaveBeenCalledWith", "toBeCalledWith"], function(...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const pass = spy.mock.calls.some((callArg) => equals(callArg, args, [iterableEquality]));
    const isNot = utils.flag(this, "negate");
    const msg = utils.getMessage(
      this,
      [
        pass,
        `expected "${spyName}" to be called with arguments: #{exp}`,
        `expected "${spyName}" to not be called with arguments: #{exp}`,
        args
      ]
    );
    if (pass && isNot || !pass && !isNot)
      throw new AssertionError2(formatCalls(spy, msg, args));
  });
  def(["toHaveBeenNthCalledWith", "nthCalledWith"], function(times, ...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const nthCall = spy.mock.calls[times - 1];
    this.assert(
      equals(nthCall, args, [iterableEquality]),
      `expected ${ordinalOf(times)} "${spyName}" call to have been called with #{exp}`,
      `expected ${ordinalOf(times)} "${spyName}" call to not have been called with #{exp}`,
      args,
      nthCall
    );
  });
  def(["toHaveBeenLastCalledWith", "lastCalledWith"], function(...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const lastCall = spy.mock.calls[spy.mock.calls.length - 1];
    this.assert(
      equals(lastCall, args, [iterableEquality]),
      `expected last "${spyName}" call to have been called with #{exp}`,
      `expected last "${spyName}" call to not have been called with #{exp}`,
      args,
      lastCall
    );
  });
  def(["toThrow", "toThrowError"], function(expected) {
    if (typeof expected === "string" || typeof expected === "undefined" || expected instanceof RegExp)
      return this.throws(expected);
    const obj = this._obj;
    const promise = utils.flag(this, "promise");
    const isNot = utils.flag(this, "negate");
    let thrown = null;
    if (promise === "rejects") {
      thrown = obj;
    } else if (promise === "resolves" && typeof obj !== "function") {
      if (!isNot) {
        const message = utils.flag(this, "message") || "expected promise to throw an error, but it didn't";
        const error = {
          showDiff: false
        };
        throw new AssertionError2(message, error, utils.flag(this, "ssfi"));
      } else {
        return;
      }
    } else {
      let isThrow = false;
      try {
        obj();
      } catch (err) {
        isThrow = true;
        thrown = err;
      }
      if (!isThrow && !isNot) {
        const message = utils.flag(this, "message") || "expected function to throw an error, but it didn't";
        const error = {
          showDiff: false
        };
        throw new AssertionError2(message, error, utils.flag(this, "ssfi"));
      }
    }
    if (typeof expected === "function") {
      const name = expected.name || expected.prototype.constructor.name;
      return this.assert(
        thrown && thrown instanceof expected,
        `expected error to be instance of ${name}`,
        `expected error not to be instance of ${name}`,
        expected,
        thrown,
        false
      );
    }
    if (expected instanceof Error) {
      return this.assert(
        thrown && expected.message === thrown.message,
        `expected error to have message: ${expected.message}`,
        `expected error not to have message: ${expected.message}`,
        expected.message,
        thrown && thrown.message
      );
    }
    if (typeof expected === "object" && "asymmetricMatch" in expected && typeof expected.asymmetricMatch === "function") {
      const matcher = expected;
      return this.assert(
        thrown && matcher.asymmetricMatch(thrown),
        "expected error to match asymmetric matcher",
        "expected error not to match asymmetric matcher",
        matcher.toString(),
        thrown,
        false
      );
    }
    throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof expected}"`);
  });
  def(["toHaveReturned", "toReturn"], function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const calledAndNotThrew = spy.mock.calls.length > 0 && spy.mock.results.some(({ type: type2 }) => type2 !== "throw");
    this.assert(
      calledAndNotThrew,
      `expected "${spyName}" to be successfully called at least once`,
      `expected "${spyName}" to not be successfully called`,
      calledAndNotThrew,
      !calledAndNotThrew,
      false
    );
  });
  def(["toHaveReturnedTimes", "toReturnTimes"], function(times) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const successfulReturns = spy.mock.results.reduce((success, { type: type2 }) => type2 === "throw" ? success : ++success, 0);
    this.assert(
      successfulReturns === times,
      `expected "${spyName}" to be successfully called ${times} times`,
      `expected "${spyName}" to not be successfully called ${times} times`,
      `expected number of returns: ${times}`,
      `received number of returns: ${successfulReturns}`,
      false
    );
  });
  def(["toHaveReturnedWith", "toReturnWith"], function(value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const pass = spy.mock.results.some(({ type: type2, value: result }) => type2 === "return" && equals(value, result));
    const isNot = utils.flag(this, "negate");
    const msg = utils.getMessage(
      this,
      [
        pass,
        `expected "${spyName}" to return with: #{exp} at least once`,
        `expected "${spyName}" to not return with: #{exp}`,
        value
      ]
    );
    if (pass && isNot || !pass && !isNot)
      throw new AssertionError2(formatReturns(spy, msg, value));
  });
  def(["toHaveLastReturnedWith", "lastReturnedWith"], function(value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const { value: lastResult } = spy.mock.results[spy.mock.results.length - 1];
    const pass = equals(lastResult, value);
    this.assert(
      pass,
      `expected last "${spyName}" call to return #{exp}`,
      `expected last "${spyName}" call to not return #{exp}`,
      value,
      lastResult
    );
  });
  def(["toHaveNthReturnedWith", "nthReturnedWith"], function(nthCall, value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const isNot = utils.flag(this, "negate");
    const { type: callType, value: callResult } = spy.mock.results[nthCall - 1];
    const ordinalCall = `${ordinalOf(nthCall)} call`;
    if (!isNot && callType === "throw")
      chai3.assert.fail(`expected ${ordinalCall} to return #{exp}, but instead it threw an error`);
    const nthCallReturn = equals(callResult, value);
    this.assert(
      nthCallReturn,
      `expected ${ordinalCall} "${spyName}" call to return #{exp}`,
      `expected ${ordinalCall} "${spyName}" call to not return #{exp}`,
      value,
      callResult
    );
  });
  def("toSatisfy", function(matcher, message) {
    return this.be.satisfy(matcher, message);
  });
  utils.addProperty(chai3.Assertion.prototype, "resolves", function __VITEST_RESOLVES__() {
    const error = new Error("resolves");
    utils.flag(this, "promise", "resolves");
    utils.flag(this, "error", error);
    const test3 = utils.flag(this, "vitest-test");
    const obj = utils.flag(this, "object");
    if (typeof (obj == null ? void 0 : obj.then) !== "function")
      throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof obj}'.`);
    const proxy = new Proxy(this, {
      get: (target, key, receiver) => {
        const result = Reflect.get(target, key, receiver);
        if (typeof result !== "function")
          return result instanceof chai3.Assertion ? proxy : result;
        return (...args) => __async(this, null, function* () {
          const promise = obj.then(
            (value) => {
              utils.flag(this, "object", value);
              return result.call(this, ...args);
            },
            (err) => {
              const _error = new AssertionError2(
                `promise rejected "${utils.inspect(err)}" instead of resolving`,
                { showDiff: false }
              );
              _error.stack = error.stack.replace(error.message, _error.message);
              throw _error;
            }
          );
          return recordAsyncExpect(test3, promise);
        });
      }
    });
    return proxy;
  });
  utils.addProperty(chai3.Assertion.prototype, "rejects", function __VITEST_REJECTS__() {
    const error = new Error("rejects");
    utils.flag(this, "promise", "rejects");
    utils.flag(this, "error", error);
    const test3 = utils.flag(this, "vitest-test");
    const obj = utils.flag(this, "object");
    const wrapper = typeof obj === "function" ? obj() : obj;
    if (typeof (wrapper == null ? void 0 : wrapper.then) !== "function")
      throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof wrapper}'.`);
    const proxy = new Proxy(this, {
      get: (target, key, receiver) => {
        const result = Reflect.get(target, key, receiver);
        if (typeof result !== "function")
          return result instanceof chai3.Assertion ? proxy : result;
        return (...args) => __async(this, null, function* () {
          const promise = wrapper.then(
            (value) => {
              const _error = new AssertionError2(
                `promise resolved "${utils.inspect(value)}" instead of rejecting`,
                { showDiff: false }
              );
              _error.stack = error.stack.replace(error.message, _error.message);
              throw _error;
            },
            (err) => {
              utils.flag(this, "object", err);
              return result.call(this, ...args);
            }
          );
          return recordAsyncExpect(test3, promise);
        });
      }
    });
    return proxy;
  });
};
function getMatcherState(assertion, expect2) {
  const obj = assertion._obj;
  const isNot = util.flag(assertion, "negate");
  const promise = util.flag(assertion, "promise") || "";
  const jestUtils = __spreadProps(__spreadValues({}, getMatcherUtils()), {
    diff,
    stringify,
    iterableEquality,
    subsetEquality
  });
  const matcherState = __spreadProps(__spreadValues({}, getState(expect2)), {
    isNot,
    utils: jestUtils,
    promise,
    equals,
    // needed for built-in jest-snapshots, but we don't use it
    suppressedErrors: []
  });
  return {
    state: matcherState,
    isNot,
    obj
  };
}
var JestExtendError = class extends Error {
  constructor(message, actual, expected) {
    super(message);
    this.actual = actual;
    this.expected = expected;
  }
};
function JestExtendPlugin(expect2, matchers) {
  return (c, utils) => {
    Object.entries(matchers).forEach(([expectAssertionName, expectAssertion]) => {
      function expectWrapper(...args) {
        const { state, isNot, obj } = getMatcherState(this, expect2);
        const result = expectAssertion.call(state, obj, ...args);
        if (result && typeof result === "object" && result instanceof Promise) {
          return result.then(({ pass: pass2, message: message2, actual: actual2, expected: expected2 }) => {
            if (pass2 && isNot || !pass2 && !isNot)
              throw new JestExtendError(message2(), actual2, expected2);
          });
        }
        const { pass, message, actual, expected } = result;
        if (pass && isNot || !pass && !isNot)
          throw new JestExtendError(message(), actual, expected);
      }
      const softWrapper = wrapSoft(utils, expectWrapper);
      utils.addMethod(globalThis[JEST_MATCHERS_OBJECT].matchers, expectAssertionName, softWrapper);
      utils.addMethod(c.Assertion.prototype, expectAssertionName, softWrapper);
      class CustomMatcher extends AsymmetricMatcher3 {
        constructor(inverse = false, ...sample) {
          super(sample, inverse);
        }
        asymmetricMatch(other) {
          const { pass } = expectAssertion.call(
            this.getMatcherContext(expect2),
            other,
            ...this.sample
          );
          return this.inverse ? !pass : pass;
        }
        toString() {
          return `${this.inverse ? "not." : ""}${expectAssertionName}`;
        }
        getExpectedType() {
          return "any";
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map(String).join(", ")}>`;
        }
      }
      Object.defineProperty(expect2, expectAssertionName, {
        configurable: true,
        enumerable: true,
        value: (...sample) => new CustomMatcher(false, ...sample),
        writable: true
      });
      Object.defineProperty(expect2.not, expectAssertionName, {
        configurable: true,
        enumerable: true,
        value: (...sample) => new CustomMatcher(true, ...sample),
        writable: true
      });
    });
  };
}
var JestExtend = (chai3, utils) => {
  utils.addMethod(chai3.expect, "extend", (expect2, expects) => {
    chai3.use(JestExtendPlugin(expect2, expects));
  });
};

// node_modules/@vitest/snapshot/dist/index.js
var import_pretty_format5 = __toESM(require_build(), 1);
function getDefaultExportFromCjs2(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var naturalCompare$2 = { exports: {} };
var naturalCompare = function(a, b2) {
  var i, codeA, codeB = 1, posA = 0, posB = 0, alphabet = String.alphabet;
  function getCode(str, pos, code) {
    if (code) {
      for (i = pos; code = getCode(str, i), code < 76 && code > 65; )
        ++i;
      return +str.slice(pos - 1, i);
    }
    code = alphabet && alphabet.indexOf(str.charAt(pos));
    return code > -1 ? code + 76 : (code = str.charCodeAt(pos) || 0, code < 45 || code > 127) ? code : code < 46 ? 65 : code < 48 ? code - 1 : code < 58 ? code + 18 : code < 65 ? code - 11 : code < 91 ? code + 11 : code < 97 ? code - 37 : code < 123 ? code + 5 : code - 63;
  }
  if ((a += "") != (b2 += ""))
    for (; codeB; ) {
      codeA = getCode(a, posA++);
      codeB = getCode(b2, posB++);
      if (codeA < 76 && codeB < 76 && codeA > 66 && codeB > 66) {
        codeA = getCode(a, posA, posA);
        codeB = getCode(b2, posB, posA = i);
        posB = i;
      }
      if (codeA != codeB)
        return codeA < codeB ? -1 : 1;
    }
  return 0;
};
try {
  naturalCompare$2.exports = naturalCompare;
} catch (e) {
  String.naturalCompare = naturalCompare;
}
var naturalCompareExports = naturalCompare$2.exports;
var naturalCompare$1 = /* @__PURE__ */ getDefaultExportFromCjs2(naturalCompareExports);
function notNullish2(v2) {
  return v2 != null;
}
function isPrimitive2(value) {
  return value === null || typeof value !== "function" && typeof value !== "object";
}
function isObject3(item) {
  return item != null && typeof item === "object" && !Array.isArray(item);
}
function getCallLastIndex2(code) {
  let charIndex = -1;
  let inString = null;
  let startedBracers = 0;
  let endedBracers = 0;
  let beforeChar = null;
  while (charIndex <= code.length) {
    beforeChar = code[charIndex];
    charIndex++;
    const char = code[charIndex];
    const isCharString = char === '"' || char === "'" || char === "`";
    if (isCharString && beforeChar !== "\\") {
      if (inString === char)
        inString = null;
      else if (!inString)
        inString = char;
    }
    if (!inString) {
      if (char === "(")
        startedBracers++;
      if (char === ")")
        endedBracers++;
    }
    if (startedBracers && endedBracers && startedBracers === endedBracers)
      return charIndex;
  }
  return null;
}
var getPromiseValue2 = () => "Promise{\u2026}";
try {
  const { getPromiseDetails, kPending, kRejected } = process.binding("util");
  if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
    getPromiseValue2 = (value, options) => {
      const [state, innerValue] = getPromiseDetails(value);
      if (state === kPending) {
        return "Promise{<pending>}";
      }
      return `Promise${state === kRejected ? "!" : ""}{${options.inspect(innerValue, options)}}`;
    };
  }
} catch (notNode) {
}
var nodeInspect2 = false;
try {
  const nodeUtil = require("util");
  nodeInspect2 = nodeUtil.inspect ? nodeUtil.inspect.custom : false;
} catch (noNodeInspect) {
  nodeInspect2 = false;
}
var lineSplitRE = /\r?\n/;
function positionToOffset(source, lineNumber, columnNumber) {
  const lines = source.split(lineSplitRE);
  const nl = /\r\n/.test(source) ? 2 : 1;
  let start = 0;
  if (lineNumber > lines.length)
    return source.length;
  for (let i2 = 0; i2 < lineNumber - 1; i2++)
    start += lines[i2].length + nl;
  return start + columnNumber;
}
function offsetToLineNumber(source, offset) {
  if (offset > source.length) {
    throw new Error(
      `offset is longer than source length! offset ${offset} > length ${source.length}`
    );
  }
  const lines = source.split(lineSplitRE);
  const nl = /\r\n/.test(source) ? 2 : 1;
  let counted = 0;
  let line = 0;
  for (; line < lines.length; line++) {
    const lineLength = lines[line].length + nl;
    if (counted + lineLength >= offset)
      break;
    counted += lineLength;
  }
  return line + 1;
}
var serialize$1 = (val, config2, indentation, depth, refs, printer) => {
  const name = val.getMockName();
  const nameString = name === "vi.fn()" ? "" : ` ${name}`;
  let callsString = "";
  if (val.mock.calls.length !== 0) {
    const indentationNext = indentation + config2.indent;
    callsString = ` {${config2.spacingOuter}${indentationNext}"calls": ${printer(val.mock.calls, config2, indentationNext, depth, refs)}${config2.min ? ", " : ","}${config2.spacingOuter}${indentationNext}"results": ${printer(val.mock.results, config2, indentationNext, depth, refs)}${config2.min ? "" : ","}${config2.spacingOuter}${indentation}}`;
  }
  return `[MockFunction${nameString}]${callsString}`;
};
var test2 = (val) => val && !!val._isMockFunction;
var plugin = { serialize: serialize$1, test: test2 };
var {
  DOMCollection: DOMCollection3,
  DOMElement: DOMElement3,
  Immutable: Immutable3,
  ReactElement: ReactElement3,
  ReactTestComponent: ReactTestComponent3,
  AsymmetricMatcher: AsymmetricMatcher4
} = import_pretty_format5.plugins;
var PLUGINS3 = [
  ReactTestComponent3,
  ReactElement3,
  DOMElement3,
  DOMCollection3,
  Immutable3,
  AsymmetricMatcher4,
  plugin
];
function addSerializer(plugin2) {
  PLUGINS3 = [plugin2].concat(PLUGINS3);
}
function getSerializers() {
  return PLUGINS3;
}
function testNameToKey(testName, count) {
  return `${testName} ${count}`;
}
function keyToTestName(key) {
  if (!/ \d+$/.test(key))
    throw new Error("Snapshot keys must end with a number.");
  return key.replace(/ \d+$/, "");
}
function getSnapshotData(content, options) {
  const update = options.updateSnapshot;
  const data = /* @__PURE__ */ Object.create(null);
  let snapshotContents = "";
  let dirty = false;
  if (content != null) {
    try {
      snapshotContents = content;
      const populate = new Function("exports", snapshotContents);
      populate(data);
    } catch (e) {
    }
  }
  const isInvalid = snapshotContents;
  if ((update === "all" || update === "new") && isInvalid)
    dirty = true;
  return { data, dirty };
}
function addExtraLineBreaks(string3) {
  return string3.includes("\n") ? `
${string3}
` : string3;
}
function removeExtraLineBreaks(string3) {
  return string3.length > 2 && string3.startsWith("\n") && string3.endsWith("\n") ? string3.slice(1, -1) : string3;
}
var escapeRegex = true;
var printFunctionName = false;
function serialize(val, indent = 2, formatOverrides = {}) {
  return normalizeNewlines(
    (0, import_pretty_format5.format)(val, __spreadValues({
      escapeRegex,
      indent,
      plugins: getSerializers(),
      printFunctionName
    }, formatOverrides))
  );
}
function escapeBacktickString(str) {
  return str.replace(/`|\\|\${/g, "\\$&");
}
function printBacktickString(str) {
  return `\`${escapeBacktickString(str)}\``;
}
function normalizeNewlines(string3) {
  return string3.replace(/\r\n|\r/g, "\n");
}
function saveSnapshotFile(environment, snapshotData, snapshotPath) {
  return __async(this, null, function* () {
    const snapshots = Object.keys(snapshotData).sort(naturalCompare$1).map(
      (key) => `exports[${printBacktickString(key)}] = ${printBacktickString(normalizeNewlines(snapshotData[key]))};`
    );
    const content = `${environment.getHeader()}

${snapshots.join("\n\n")}
`;
    const oldContent = yield environment.readSnapshotFile(snapshotPath);
    const skipWriting = oldContent != null && oldContent === content;
    if (skipWriting)
      return;
    yield environment.saveSnapshotFile(
      snapshotPath,
      content
    );
  });
}
function prepareExpected(expected) {
  function findStartIndent() {
    var _a2, _b;
    const matchObject = /^( +)}\s+$/m.exec(expected || "");
    const objectIndent = (_a2 = matchObject == null ? void 0 : matchObject[1]) == null ? void 0 : _a2.length;
    if (objectIndent)
      return objectIndent;
    const matchText = /^\n( +)"/.exec(expected || "");
    return ((_b = matchText == null ? void 0 : matchText[1]) == null ? void 0 : _b.length) || 0;
  }
  const startIndent = findStartIndent();
  let expectedTrimmed = expected == null ? void 0 : expected.trim();
  if (startIndent) {
    expectedTrimmed = expectedTrimmed == null ? void 0 : expectedTrimmed.replace(new RegExp(`^${" ".repeat(startIndent)}`, "gm"), "").replace(/ +}$/, "}");
  }
  return expectedTrimmed;
}
function deepMergeArray(target = [], source = []) {
  const mergedOutput = Array.from(target);
  source.forEach((sourceElement, index2) => {
    const targetElement = mergedOutput[index2];
    if (Array.isArray(target[index2])) {
      mergedOutput[index2] = deepMergeArray(target[index2], sourceElement);
    } else if (isObject3(targetElement)) {
      mergedOutput[index2] = deepMergeSnapshot(target[index2], sourceElement);
    } else {
      mergedOutput[index2] = sourceElement;
    }
  });
  return mergedOutput;
}
function deepMergeSnapshot(target, source) {
  if (isObject3(target) && isObject3(source)) {
    const mergedOutput = __spreadValues({}, target);
    Object.keys(source).forEach((key) => {
      if (isObject3(source[key]) && !source[key].$$typeof) {
        if (!(key in target))
          Object.assign(mergedOutput, { [key]: source[key] });
        else
          mergedOutput[key] = deepMergeSnapshot(target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        mergedOutput[key] = deepMergeArray(target[key], source[key]);
      } else {
        Object.assign(mergedOutput, { [key]: source[key] });
      }
    });
    return mergedOutput;
  } else if (Array.isArray(target) && Array.isArray(source)) {
    return deepMergeArray(target, source);
  }
  return target;
}
function normalizeWindowsPath(input = "") {
  if (!input || !input.includes("\\")) {
    return input;
  }
  return input.replace(/\\/g, "/");
}
var _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function cwd() {
  if (typeof process !== "undefined") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
var resolve$2 = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index2 = arguments_.length - 1; index2 >= -1 && !resolvedAbsolute; index2--) {
    const path = index2 >= 0 ? arguments_[index2] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index2 = 0; index2 <= path.length; ++index2) {
    if (index2 < path.length) {
      char = path[index2];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index2 - 1 || dots === 1)
        ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index2;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index2)}`;
        } else {
          res = path.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var isAbsolute = function(p2) {
  return _IS_ABSOLUTE_RE.test(p2);
};
var comma2 = ",".charCodeAt(0);
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar2 = new Uint8Array(64);
var charToInt2 = new Uint8Array(128);
for (let i = 0; i < chars2.length; i++) {
  const c = chars2.charCodeAt(i);
  intToChar2[i] = c;
  charToInt2[c] = i;
}
function decode(mappings) {
  const state = new Int32Array(5);
  const decoded = [];
  let index2 = 0;
  do {
    const semi = indexOf(mappings, index2);
    const line = [];
    let sorted = true;
    let lastCol = 0;
    state[0] = 0;
    for (let i = index2; i < semi; i++) {
      let seg;
      i = decodeInteger(mappings, i, state, 0);
      const col = state[0];
      if (col < lastCol)
        sorted = false;
      lastCol = col;
      if (hasMoreVlq(mappings, i, semi)) {
        i = decodeInteger(mappings, i, state, 1);
        i = decodeInteger(mappings, i, state, 2);
        i = decodeInteger(mappings, i, state, 3);
        if (hasMoreVlq(mappings, i, semi)) {
          i = decodeInteger(mappings, i, state, 4);
          seg = [col, state[1], state[2], state[3], state[4]];
        } else {
          seg = [col, state[1], state[2], state[3]];
        }
      } else {
        seg = [col];
      }
      line.push(seg);
    }
    if (!sorted)
      sort(line);
    decoded.push(line);
    index2 = semi + 1;
  } while (index2 <= mappings.length);
  return decoded;
}
function indexOf(mappings, index2) {
  const idx = mappings.indexOf(";", index2);
  return idx === -1 ? mappings.length : idx;
}
function decodeInteger(mappings, pos, state, j) {
  let value = 0;
  let shift = 0;
  let integer = 0;
  do {
    const c = mappings.charCodeAt(pos++);
    integer = charToInt2[c];
    value |= (integer & 31) << shift;
    shift += 5;
  } while (integer & 32);
  const shouldNegate = value & 1;
  value >>>= 1;
  if (shouldNegate) {
    value = -2147483648 | -value;
  }
  state[j] += value;
  return pos;
}
function hasMoreVlq(mappings, i, length) {
  if (i >= length)
    return false;
  return mappings.charCodeAt(i) !== comma2;
}
function sort(line) {
  line.sort(sortComparator$1);
}
function sortComparator$1(a, b2) {
  return a[0] - b2[0];
}
var schemeRegex = /^[\w+.-]+:\/\//;
var urlRegex = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/;
var fileRegex = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
var UrlType;
(function(UrlType22) {
  UrlType22[UrlType22["Empty"] = 1] = "Empty";
  UrlType22[UrlType22["Hash"] = 2] = "Hash";
  UrlType22[UrlType22["Query"] = 3] = "Query";
  UrlType22[UrlType22["RelativePath"] = 4] = "RelativePath";
  UrlType22[UrlType22["AbsolutePath"] = 5] = "AbsolutePath";
  UrlType22[UrlType22["SchemeRelative"] = 6] = "SchemeRelative";
  UrlType22[UrlType22["Absolute"] = 7] = "Absolute";
})(UrlType || (UrlType = {}));
function isAbsoluteUrl(input) {
  return schemeRegex.test(input);
}
function isSchemeRelativeUrl(input) {
  return input.startsWith("//");
}
function isAbsolutePath(input) {
  return input.startsWith("/");
}
function isFileUrl(input) {
  return input.startsWith("file:");
}
function isRelative(input) {
  return /^[.?#]/.test(input);
}
function parseAbsoluteUrl(input) {
  const match = urlRegex.exec(input);
  return makeUrl(match[1], match[2] || "", match[3], match[4] || "", match[5] || "/", match[6] || "", match[7] || "");
}
function parseFileUrl(input) {
  const match = fileRegex.exec(input);
  const path = match[2];
  return makeUrl("file:", "", match[1] || "", "", isAbsolutePath(path) ? path : "/" + path, match[3] || "", match[4] || "");
}
function makeUrl(scheme, user, host, port, path, query, hash) {
  return {
    scheme,
    user,
    host,
    port,
    path,
    query,
    hash,
    type: UrlType.Absolute
  };
}
function parseUrl(input) {
  if (isSchemeRelativeUrl(input)) {
    const url2 = parseAbsoluteUrl("http:" + input);
    url2.scheme = "";
    url2.type = UrlType.SchemeRelative;
    return url2;
  }
  if (isAbsolutePath(input)) {
    const url2 = parseAbsoluteUrl("http://foo.com" + input);
    url2.scheme = "";
    url2.host = "";
    url2.type = UrlType.AbsolutePath;
    return url2;
  }
  if (isFileUrl(input))
    return parseFileUrl(input);
  if (isAbsoluteUrl(input))
    return parseAbsoluteUrl(input);
  const url = parseAbsoluteUrl("http://foo.com/" + input);
  url.scheme = "";
  url.host = "";
  url.type = input ? input.startsWith("?") ? UrlType.Query : input.startsWith("#") ? UrlType.Hash : UrlType.RelativePath : UrlType.Empty;
  return url;
}
function stripPathFilename(path) {
  if (path.endsWith("/.."))
    return path;
  const index2 = path.lastIndexOf("/");
  return path.slice(0, index2 + 1);
}
function mergePaths(url, base) {
  normalizePath(base, base.type);
  if (url.path === "/") {
    url.path = base.path;
  } else {
    url.path = stripPathFilename(base.path) + url.path;
  }
}
function normalizePath(url, type2) {
  const rel = type2 <= UrlType.RelativePath;
  const pieces = url.path.split("/");
  let pointer = 1;
  let positive = 0;
  let addTrailingSlash = false;
  for (let i = 1; i < pieces.length; i++) {
    const piece = pieces[i];
    if (!piece) {
      addTrailingSlash = true;
      continue;
    }
    addTrailingSlash = false;
    if (piece === ".")
      continue;
    if (piece === "..") {
      if (positive) {
        addTrailingSlash = true;
        positive--;
        pointer--;
      } else if (rel) {
        pieces[pointer++] = piece;
      }
      continue;
    }
    pieces[pointer++] = piece;
    positive++;
  }
  let path = "";
  for (let i = 1; i < pointer; i++) {
    path += "/" + pieces[i];
  }
  if (!path || addTrailingSlash && !path.endsWith("/..")) {
    path += "/";
  }
  url.path = path;
}
function resolve$1(input, base) {
  if (!input && !base)
    return "";
  const url = parseUrl(input);
  let inputType = url.type;
  if (base && inputType !== UrlType.Absolute) {
    const baseUrl = parseUrl(base);
    const baseType = baseUrl.type;
    switch (inputType) {
      case UrlType.Empty:
        url.hash = baseUrl.hash;
      case UrlType.Hash:
        url.query = baseUrl.query;
      case UrlType.Query:
      case UrlType.RelativePath:
        mergePaths(url, baseUrl);
      case UrlType.AbsolutePath:
        url.user = baseUrl.user;
        url.host = baseUrl.host;
        url.port = baseUrl.port;
      case UrlType.SchemeRelative:
        url.scheme = baseUrl.scheme;
    }
    if (baseType > inputType)
      inputType = baseType;
  }
  normalizePath(url, inputType);
  const queryHash = url.query + url.hash;
  switch (inputType) {
    case UrlType.Hash:
    case UrlType.Query:
      return queryHash;
    case UrlType.RelativePath: {
      const path = url.path.slice(1);
      if (!path)
        return queryHash || ".";
      if (isRelative(base || input) && !isRelative(path)) {
        return "./" + path + queryHash;
      }
      return path + queryHash;
    }
    case UrlType.AbsolutePath:
      return url.path + queryHash;
    default:
      return url.scheme + "//" + url.user + url.host + url.port + url.path + queryHash;
  }
}
function resolve(input, base) {
  if (base && !base.endsWith("/"))
    base += "/";
  return resolve$1(input, base);
}
function stripFilename(path) {
  if (!path)
    return "";
  const index2 = path.lastIndexOf("/");
  return path.slice(0, index2 + 1);
}
var COLUMN = 0;
var SOURCES_INDEX = 1;
var SOURCE_LINE = 2;
var SOURCE_COLUMN = 3;
var NAMES_INDEX = 4;
function maybeSort(mappings, owned) {
  const unsortedIndex = nextUnsortedSegmentLine(mappings, 0);
  if (unsortedIndex === mappings.length)
    return mappings;
  if (!owned)
    mappings = mappings.slice();
  for (let i = unsortedIndex; i < mappings.length; i = nextUnsortedSegmentLine(mappings, i + 1)) {
    mappings[i] = sortSegments(mappings[i], owned);
  }
  return mappings;
}
function nextUnsortedSegmentLine(mappings, start) {
  for (let i = start; i < mappings.length; i++) {
    if (!isSorted(mappings[i]))
      return i;
  }
  return mappings.length;
}
function isSorted(line) {
  for (let j = 1; j < line.length; j++) {
    if (line[j][COLUMN] < line[j - 1][COLUMN]) {
      return false;
    }
  }
  return true;
}
function sortSegments(line, owned) {
  if (!owned)
    line = line.slice();
  return line.sort(sortComparator);
}
function sortComparator(a, b2) {
  return a[COLUMN] - b2[COLUMN];
}
var found = false;
function binarySearch(haystack, needle, low, high) {
  while (low <= high) {
    const mid = low + (high - low >> 1);
    const cmp = haystack[mid][COLUMN] - needle;
    if (cmp === 0) {
      found = true;
      return mid;
    }
    if (cmp < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  found = false;
  return low - 1;
}
function upperBound(haystack, needle, index2) {
  for (let i = index2 + 1; i < haystack.length; index2 = i++) {
    if (haystack[i][COLUMN] !== needle)
      break;
  }
  return index2;
}
function lowerBound(haystack, needle, index2) {
  for (let i = index2 - 1; i >= 0; index2 = i--) {
    if (haystack[i][COLUMN] !== needle)
      break;
  }
  return index2;
}
function memoizedState() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
}
function memoizedBinarySearch(haystack, needle, state, key) {
  const { lastKey, lastNeedle, lastIndex } = state;
  let low = 0;
  let high = haystack.length - 1;
  if (key === lastKey) {
    if (needle === lastNeedle) {
      found = lastIndex !== -1 && haystack[lastIndex][COLUMN] === needle;
      return lastIndex;
    }
    if (needle >= lastNeedle) {
      low = lastIndex === -1 ? 0 : lastIndex;
    } else {
      high = lastIndex;
    }
  }
  state.lastKey = key;
  state.lastNeedle = needle;
  return state.lastIndex = binarySearch(haystack, needle, low, high);
}
var LINE_GTR_ZERO = "`line` must be greater than 0 (lines start at line 1)";
var COL_GTR_EQ_ZERO = "`column` must be greater than or equal to 0 (columns start at column 0)";
var LEAST_UPPER_BOUND = -1;
var GREATEST_LOWER_BOUND = 1;
var decodedMappings;
var originalPositionFor;
var TraceMap = class {
  constructor(map2, mapUrl) {
    const isString = typeof map2 === "string";
    if (!isString && map2._decodedMemo)
      return map2;
    const parsed = isString ? JSON.parse(map2) : map2;
    const { version: version2, file, names, sourceRoot, sources, sourcesContent } = parsed;
    this.version = version2;
    this.file = file;
    this.names = names;
    this.sourceRoot = sourceRoot;
    this.sources = sources;
    this.sourcesContent = sourcesContent;
    const from = resolve(sourceRoot || "", stripFilename(mapUrl));
    this.resolvedSources = sources.map((s) => resolve(s || "", from));
    const { mappings } = parsed;
    if (typeof mappings === "string") {
      this._encoded = mappings;
      this._decoded = void 0;
    } else {
      this._encoded = void 0;
      this._decoded = maybeSort(mappings, isString);
    }
    this._decodedMemo = memoizedState();
    this._bySources = void 0;
    this._bySourceMemos = void 0;
  }
};
(() => {
  decodedMappings = (map2) => {
    return map2._decoded || (map2._decoded = decode(map2._encoded));
  };
  originalPositionFor = (map2, { line, column, bias }) => {
    line--;
    if (line < 0)
      throw new Error(LINE_GTR_ZERO);
    if (column < 0)
      throw new Error(COL_GTR_EQ_ZERO);
    const decoded = decodedMappings(map2);
    if (line >= decoded.length)
      return OMapping(null, null, null, null);
    const segments = decoded[line];
    const index2 = traceSegmentInternal(segments, map2._decodedMemo, line, column, bias || GREATEST_LOWER_BOUND);
    if (index2 === -1)
      return OMapping(null, null, null, null);
    const segment = segments[index2];
    if (segment.length === 1)
      return OMapping(null, null, null, null);
    const { names, resolvedSources } = map2;
    return OMapping(resolvedSources[segment[SOURCES_INDEX]], segment[SOURCE_LINE] + 1, segment[SOURCE_COLUMN], segment.length === 5 ? names[segment[NAMES_INDEX]] : null);
  };
})();
function OMapping(source, line, column, name) {
  return { source, line, column, name };
}
function traceSegmentInternal(segments, memo, line, column, bias) {
  let index2 = memoizedBinarySearch(segments, column, memo, line);
  if (found) {
    index2 = (bias === LEAST_UPPER_BOUND ? upperBound : lowerBound)(segments, column, index2);
  } else if (bias === LEAST_UPPER_BOUND)
    index2++;
  if (index2 === -1 || index2 === segments.length)
    return -1;
  return index2;
}
var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
var stackIgnorePatterns = [
  "node:internal",
  /\/packages\/\w+\/dist\//,
  /\/@vitest\/\w+\/dist\//,
  "/vitest/dist/",
  "/vitest/src/",
  "/vite-node/dist/",
  "/vite-node/src/",
  "/node_modules/chai/",
  "/node_modules/tinypool/",
  "/node_modules/tinyspy/",
  "/deps/chai.js",
  /__vitest_browser__/
];
function extractLocation(urlLike) {
  if (!urlLike.includes(":"))
    return [urlLike];
  const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
  const parts = regExp.exec(urlLike.replace(/^\(|\)$/g, ""));
  if (!parts)
    return [urlLike];
  let url = parts[1];
  if (url.startsWith("http:") || url.startsWith("https:")) {
    const urlObj = new URL(url);
    url = urlObj.pathname;
  }
  if (url.startsWith("/@fs/")) {
    url = url.slice(typeof process !== "undefined" && process.platform === "win32" ? 5 : 4);
  }
  return [url, parts[2] || void 0, parts[3] || void 0];
}
function parseSingleFFOrSafariStack(raw) {
  let line = raw.trim();
  if (SAFARI_NATIVE_CODE_REGEXP.test(line))
    return null;
  if (line.includes(" > eval"))
    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
  if (!line.includes("@") && !line.includes(":"))
    return null;
  const functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
  const matches = line.match(functionNameRegex);
  const functionName3 = matches && matches[1] ? matches[1] : void 0;
  const [url, lineNumber, columnNumber] = extractLocation(line.replace(functionNameRegex, ""));
  if (!url || !lineNumber || !columnNumber)
    return null;
  return {
    file: url,
    method: functionName3 || "",
    line: Number.parseInt(lineNumber),
    column: Number.parseInt(columnNumber)
  };
}
function parseSingleV8Stack(raw) {
  let line = raw.trim();
  if (!CHROME_IE_STACK_REGEXP.test(line))
    return null;
  if (line.includes("(eval "))
    line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
  let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const location = sanitizedLine.match(/ (\(.+\)$)/);
  sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
  const [url, lineNumber, columnNumber] = extractLocation(location ? location[1] : sanitizedLine);
  let method = location && sanitizedLine || "";
  let file = url && ["eval", "<anonymous>"].includes(url) ? void 0 : url;
  if (!file || !lineNumber || !columnNumber)
    return null;
  if (method.startsWith("async "))
    method = method.slice(6);
  if (file.startsWith("file://"))
    file = file.slice(7);
  file = resolve$2(file);
  if (method)
    method = method.replace(/__vite_ssr_import_\d+__\./g, "");
  return {
    method,
    file,
    line: Number.parseInt(lineNumber),
    column: Number.parseInt(columnNumber)
  };
}
function parseStacktrace(stack, options = {}) {
  const { ignoreStackEntries = stackIgnorePatterns } = options;
  let stacks = !CHROME_IE_STACK_REGEXP.test(stack) ? parseFFOrSafariStackTrace(stack) : parseV8Stacktrace(stack);
  if (ignoreStackEntries.length)
    stacks = stacks.filter((stack2) => !ignoreStackEntries.some((p2) => stack2.file.match(p2)));
  return stacks.map((stack2) => {
    var _a2;
    const map2 = (_a2 = options.getSourceMap) == null ? void 0 : _a2.call(options, stack2.file);
    if (!map2 || typeof map2 !== "object" || !map2.version)
      return stack2;
    const traceMap = new TraceMap(map2);
    const { line, column } = originalPositionFor(traceMap, stack2);
    if (line != null && column != null)
      return __spreadProps(__spreadValues({}, stack2), { line, column });
    return stack2;
  });
}
function parseFFOrSafariStackTrace(stack) {
  return stack.split("\n").map((line) => parseSingleFFOrSafariStack(line)).filter(notNullish2);
}
function parseV8Stacktrace(stack) {
  return stack.split("\n").map((line) => parseSingleV8Stack(line)).filter(notNullish2);
}
function parseErrorStacktrace(e, options = {}) {
  if (!e || isPrimitive2(e))
    return [];
  if (e.stacks)
    return e.stacks;
  const stackStr = e.stack || e.stackStr || "";
  const stackFrames = parseStacktrace(stackStr, options);
  e.stacks = stackFrames;
  return stackFrames;
}
function saveInlineSnapshots(environment, snapshots) {
  return __async(this, null, function* () {
    const MagicString2 = (yield Promise.resolve().then(() => (init_magic_string_es(), magic_string_es_exports))).default;
    const files = new Set(snapshots.map((i) => i.file));
    yield Promise.all(Array.from(files).map((file) => __async(this, null, function* () {
      const snaps = snapshots.filter((i) => i.file === file);
      const code = yield environment.readSnapshotFile(file);
      const s = new MagicString2(code);
      for (const snap of snaps) {
        const index2 = positionToOffset(code, snap.line, snap.column);
        replaceInlineSnap(code, s, index2, snap.snapshot);
      }
      const transformed = s.toString();
      if (transformed !== code)
        yield environment.saveSnapshotFile(file, transformed);
    })));
  });
}
var startObjectRegex = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*({)/m;
function replaceObjectSnap(code, s, index2, newSnap) {
  let _code = code.slice(index2);
  const startMatch = startObjectRegex.exec(_code);
  if (!startMatch)
    return false;
  _code = _code.slice(startMatch.index);
  let callEnd = getCallLastIndex2(_code);
  if (callEnd === null)
    return false;
  callEnd += index2 + startMatch.index;
  const shapeStart = index2 + startMatch.index + startMatch[0].length;
  const shapeEnd = getObjectShapeEndIndex(code, shapeStart);
  const snap = `, ${prepareSnapString(newSnap, code, index2)}`;
  if (shapeEnd === callEnd) {
    s.appendLeft(callEnd, snap);
  } else {
    s.overwrite(shapeEnd, callEnd, snap);
  }
  return true;
}
function getObjectShapeEndIndex(code, index2) {
  let startBraces = 1;
  let endBraces = 0;
  while (startBraces !== endBraces && index2 < code.length) {
    const s = code[index2++];
    if (s === "{")
      startBraces++;
    else if (s === "}")
      endBraces++;
  }
  return index2;
}
function prepareSnapString(snap, source, index2) {
  const lineNumber = offsetToLineNumber(source, index2);
  const line = source.split(lineSplitRE)[lineNumber - 1];
  const indent = line.match(/^\s*/)[0] || "";
  const indentNext = indent.includes("	") ? `${indent}	` : `${indent}  `;
  const lines = snap.trim().replace(/\\/g, "\\\\").split(/\n/g);
  const isOneline = lines.length <= 1;
  const quote = isOneline ? "'" : "`";
  if (isOneline)
    return `'${lines.join("\n").replace(/'/g, "\\'")}'`;
  else
    return `${quote}
${lines.map((i) => i ? indentNext + i : "").join("\n").replace(/`/g, "\\`").replace(/\${/g, "\\${")}
${indent}${quote}`;
}
var startRegex = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*[\w_$]*(['"`\)])/m;
function replaceInlineSnap(code, s, index2, newSnap) {
  const codeStartingAtIndex = code.slice(index2);
  const startMatch = startRegex.exec(codeStartingAtIndex);
  const firstKeywordMatch = /toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot/.exec(codeStartingAtIndex);
  if (!startMatch || startMatch.index !== (firstKeywordMatch == null ? void 0 : firstKeywordMatch.index))
    return replaceObjectSnap(code, s, index2, newSnap);
  const quote = startMatch[1];
  const startIndex = index2 + startMatch.index + startMatch[0].length;
  const snapString = prepareSnapString(newSnap, code, index2);
  if (quote === ")") {
    s.appendRight(startIndex - 1, snapString);
    return true;
  }
  const quoteEndRE = new RegExp(`(?:^|[^\\\\])${quote}`);
  const endMatch = quoteEndRE.exec(code.slice(startIndex));
  if (!endMatch)
    return false;
  const endIndex = startIndex + endMatch.index + endMatch[0].length;
  s.overwrite(startIndex - 1, endIndex, snapString);
  return true;
}
var INDENTATION_REGEX = /^([^\S\n]*)\S/m;
function stripSnapshotIndentation(inlineSnapshot) {
  const match = inlineSnapshot.match(INDENTATION_REGEX);
  if (!match || !match[1]) {
    return inlineSnapshot;
  }
  const indentation = match[1];
  const lines = inlineSnapshot.split(/\n/g);
  if (lines.length <= 2) {
    return inlineSnapshot;
  }
  if (lines[0].trim() !== "" || lines[lines.length - 1].trim() !== "") {
    return inlineSnapshot;
  }
  for (let i = 1; i < lines.length - 1; i++) {
    if (lines[i] !== "") {
      if (lines[i].indexOf(indentation) !== 0) {
        return inlineSnapshot;
      }
      lines[i] = lines[i].substring(indentation.length);
    }
  }
  lines[lines.length - 1] = "";
  inlineSnapshot = lines.join("\n");
  return inlineSnapshot;
}
function saveRawSnapshots(environment, snapshots) {
  return __async(this, null, function* () {
    yield Promise.all(snapshots.map((snap) => __async(this, null, function* () {
      if (!snap.readonly)
        yield environment.saveSnapshotFile(snap.file, snap.snapshot);
    })));
  });
}
var SnapshotState = class _SnapshotState {
  constructor(testFilePath, snapshotPath, snapshotContent, options) {
    __publicField(this, "_counters");
    __publicField(this, "_dirty");
    __publicField(this, "_updateSnapshot");
    __publicField(this, "_snapshotData");
    __publicField(this, "_initialData");
    __publicField(this, "_inlineSnapshots");
    __publicField(this, "_rawSnapshots");
    __publicField(this, "_uncheckedKeys");
    __publicField(this, "_snapshotFormat");
    __publicField(this, "_environment");
    __publicField(this, "_fileExists");
    __publicField(this, "added");
    __publicField(this, "expand");
    __publicField(this, "matched");
    __publicField(this, "unmatched");
    __publicField(this, "updated");
    this.testFilePath = testFilePath;
    this.snapshotPath = snapshotPath;
    const { data, dirty } = getSnapshotData(
      snapshotContent,
      options
    );
    this._fileExists = snapshotContent != null;
    this._initialData = data;
    this._snapshotData = data;
    this._dirty = dirty;
    this._inlineSnapshots = [];
    this._rawSnapshots = [];
    this._uncheckedKeys = new Set(Object.keys(this._snapshotData));
    this._counters = /* @__PURE__ */ new Map();
    this.expand = options.expand || false;
    this.added = 0;
    this.matched = 0;
    this.unmatched = 0;
    this._updateSnapshot = options.updateSnapshot;
    this.updated = 0;
    this._snapshotFormat = __spreadValues({
      printBasicPrototype: false
    }, options.snapshotFormat);
    this._environment = options.snapshotEnvironment;
  }
  static create(testFilePath, options) {
    return __async(this, null, function* () {
      const snapshotPath = yield options.snapshotEnvironment.resolvePath(testFilePath);
      const content = yield options.snapshotEnvironment.readSnapshotFile(snapshotPath);
      return new _SnapshotState(testFilePath, snapshotPath, content, options);
    });
  }
  get environment() {
    return this._environment;
  }
  markSnapshotsAsCheckedForTest(testName) {
    this._uncheckedKeys.forEach((uncheckedKey) => {
      if (keyToTestName(uncheckedKey) === testName)
        this._uncheckedKeys.delete(uncheckedKey);
    });
  }
  _inferInlineSnapshotStack(stacks) {
    const promiseIndex = stacks.findIndex((i) => i.method.match(/__VITEST_(RESOLVES|REJECTS)__/));
    if (promiseIndex !== -1)
      return stacks[promiseIndex + 3];
    const stackIndex = stacks.findIndex((i) => i.method.includes("__INLINE_SNAPSHOT__"));
    return stackIndex !== -1 ? stacks[stackIndex + 2] : null;
  }
  _addSnapshot(key, receivedSerialized, options) {
    this._dirty = true;
    if (options.isInline) {
      const stacks = parseErrorStacktrace(options.error || new Error("snapshot"), { ignoreStackEntries: [] });
      const stack = this._inferInlineSnapshotStack(stacks);
      if (!stack) {
        throw new Error(
          `@vitest/snapshot: Couldn't infer stack frame for inline snapshot.
${JSON.stringify(stacks)}`
        );
      }
      stack.column--;
      this._inlineSnapshots.push(__spreadValues({
        snapshot: receivedSerialized
      }, stack));
    } else if (options.rawSnapshot) {
      this._rawSnapshots.push(__spreadProps(__spreadValues({}, options.rawSnapshot), {
        snapshot: receivedSerialized
      }));
    } else {
      this._snapshotData[key] = receivedSerialized;
    }
  }
  clear() {
    this._snapshotData = this._initialData;
    this._counters = /* @__PURE__ */ new Map();
    this.added = 0;
    this.matched = 0;
    this.unmatched = 0;
    this.updated = 0;
    this._dirty = false;
  }
  save() {
    return __async(this, null, function* () {
      const hasExternalSnapshots = Object.keys(this._snapshotData).length;
      const hasInlineSnapshots = this._inlineSnapshots.length;
      const hasRawSnapshots = this._rawSnapshots.length;
      const isEmpty = !hasExternalSnapshots && !hasInlineSnapshots && !hasRawSnapshots;
      const status = {
        deleted: false,
        saved: false
      };
      if ((this._dirty || this._uncheckedKeys.size) && !isEmpty) {
        if (hasExternalSnapshots) {
          yield saveSnapshotFile(this._environment, this._snapshotData, this.snapshotPath);
          this._fileExists = true;
        }
        if (hasInlineSnapshots)
          yield saveInlineSnapshots(this._environment, this._inlineSnapshots);
        if (hasRawSnapshots)
          yield saveRawSnapshots(this._environment, this._rawSnapshots);
        status.saved = true;
      } else if (!hasExternalSnapshots && this._fileExists) {
        if (this._updateSnapshot === "all") {
          yield this._environment.removeSnapshotFile(this.snapshotPath);
          this._fileExists = false;
        }
        status.deleted = true;
      }
      return status;
    });
  }
  getUncheckedCount() {
    return this._uncheckedKeys.size || 0;
  }
  getUncheckedKeys() {
    return Array.from(this._uncheckedKeys);
  }
  removeUncheckedKeys() {
    if (this._updateSnapshot === "all" && this._uncheckedKeys.size) {
      this._dirty = true;
      this._uncheckedKeys.forEach((key) => delete this._snapshotData[key]);
      this._uncheckedKeys.clear();
    }
  }
  match({
    testName,
    received,
    key,
    inlineSnapshot,
    isInline,
    error,
    rawSnapshot
  }) {
    this._counters.set(testName, (this._counters.get(testName) || 0) + 1);
    const count = Number(this._counters.get(testName));
    if (!key)
      key = testNameToKey(testName, count);
    if (!(isInline && this._snapshotData[key] !== void 0))
      this._uncheckedKeys.delete(key);
    let receivedSerialized = rawSnapshot && typeof received === "string" ? received : serialize(received, void 0, this._snapshotFormat);
    if (!rawSnapshot)
      receivedSerialized = addExtraLineBreaks(receivedSerialized);
    if (rawSnapshot) {
      if (rawSnapshot.content && rawSnapshot.content.match(/\r\n/) && !receivedSerialized.match(/\r\n/))
        rawSnapshot.content = normalizeNewlines(rawSnapshot.content);
    }
    const expected = isInline ? inlineSnapshot : rawSnapshot ? rawSnapshot.content : this._snapshotData[key];
    const expectedTrimmed = prepareExpected(expected);
    const pass = expectedTrimmed === prepareExpected(receivedSerialized);
    const hasSnapshot = expected !== void 0;
    const snapshotIsPersisted = isInline || this._fileExists || rawSnapshot && rawSnapshot.content != null;
    if (pass && !isInline && !rawSnapshot) {
      this._snapshotData[key] = receivedSerialized;
    }
    if (hasSnapshot && this._updateSnapshot === "all" || (!hasSnapshot || !snapshotIsPersisted) && (this._updateSnapshot === "new" || this._updateSnapshot === "all")) {
      if (this._updateSnapshot === "all") {
        if (!pass) {
          if (hasSnapshot)
            this.updated++;
          else
            this.added++;
          this._addSnapshot(key, receivedSerialized, { error, isInline, rawSnapshot });
        } else {
          this.matched++;
        }
      } else {
        this._addSnapshot(key, receivedSerialized, { error, isInline, rawSnapshot });
        this.added++;
      }
      return {
        actual: "",
        count,
        expected: "",
        key,
        pass: true
      };
    } else {
      if (!pass) {
        this.unmatched++;
        return {
          actual: removeExtraLineBreaks(receivedSerialized),
          count,
          expected: expectedTrimmed !== void 0 ? removeExtraLineBreaks(expectedTrimmed) : void 0,
          key,
          pass: false
        };
      } else {
        this.matched++;
        return {
          actual: "",
          count,
          expected: "",
          key,
          pass: true
        };
      }
    }
  }
  pack() {
    return __async(this, null, function* () {
      const snapshot = {
        filepath: this.testFilePath,
        added: 0,
        fileDeleted: false,
        matched: 0,
        unchecked: 0,
        uncheckedKeys: [],
        unmatched: 0,
        updated: 0
      };
      const uncheckedCount = this.getUncheckedCount();
      const uncheckedKeys = this.getUncheckedKeys();
      if (uncheckedCount)
        this.removeUncheckedKeys();
      const status = yield this.save();
      snapshot.fileDeleted = status.deleted;
      snapshot.added = this.added;
      snapshot.matched = this.matched;
      snapshot.unmatched = this.unmatched;
      snapshot.updated = this.updated;
      snapshot.unchecked = !status.deleted ? uncheckedCount : 0;
      snapshot.uncheckedKeys = Array.from(uncheckedKeys);
      return snapshot;
    });
  }
};
function createMismatchError(message, actual, expected) {
  const error = new Error(message);
  Object.defineProperty(error, "actual", {
    value: actual,
    enumerable: true,
    configurable: true,
    writable: true
  });
  Object.defineProperty(error, "expected", {
    value: expected,
    enumerable: true,
    configurable: true,
    writable: true
  });
  return error;
}
var SnapshotClient = class {
  constructor(Service = SnapshotState) {
    __publicField(this, "filepath");
    __publicField(this, "name");
    __publicField(this, "snapshotState");
    __publicField(this, "snapshotStateMap", /* @__PURE__ */ new Map());
    this.Service = Service;
  }
  setTest(filepath, name, options) {
    return __async(this, null, function* () {
      var _a2;
      this.filepath = filepath;
      this.name = name;
      if (((_a2 = this.snapshotState) == null ? void 0 : _a2.testFilePath) !== filepath) {
        this.resetCurrent();
        if (!this.getSnapshotState(filepath)) {
          this.snapshotStateMap.set(
            filepath,
            yield this.Service.create(
              filepath,
              options
            )
          );
        }
        this.snapshotState = this.getSnapshotState(filepath);
      }
    });
  }
  getSnapshotState(filepath) {
    return this.snapshotStateMap.get(filepath);
  }
  clearTest() {
    this.filepath = void 0;
    this.name = void 0;
  }
  skipTestSnapshots(name) {
    var _a2;
    (_a2 = this.snapshotState) == null ? void 0 : _a2.markSnapshotsAsCheckedForTest(name);
  }
  /**
   * Should be overridden by the consumer.
   *
   * Vitest checks equality with @vitest/expect.
   */
  equalityCheck(received, expected) {
    return received === expected;
  }
  assert(options) {
    const {
      filepath = this.filepath,
      name = this.name,
      message,
      isInline = false,
      properties,
      inlineSnapshot,
      error,
      errorMessage,
      rawSnapshot
    } = options;
    let { received } = options;
    if (!filepath)
      throw new Error("Snapshot cannot be used outside of test");
    if (typeof properties === "object") {
      if (typeof received !== "object" || !received)
        throw new Error("Received value must be an object when the matcher has properties");
      try {
        const pass2 = this.equalityCheck(received, properties);
        if (!pass2)
          throw createMismatchError("Snapshot properties mismatched", received, properties);
        else
          received = deepMergeSnapshot(received, properties);
      } catch (err) {
        err.message = errorMessage || "Snapshot mismatched";
        throw err;
      }
    }
    const testName = [
      name,
      ...message ? [message] : []
    ].join(" > ");
    const snapshotState = this.getSnapshotState(filepath);
    const { actual, expected, key, pass } = snapshotState.match({
      testName,
      received,
      isInline,
      error,
      inlineSnapshot,
      rawSnapshot
    });
    if (!pass)
      throw createMismatchError(`Snapshot \`${key || "unknown"}\` mismatched`, actual == null ? void 0 : actual.trim(), expected == null ? void 0 : expected.trim());
  }
  assertRaw(options) {
    return __async(this, null, function* () {
      if (!options.rawSnapshot)
        throw new Error("Raw snapshot is required");
      const {
        filepath = this.filepath,
        rawSnapshot
      } = options;
      if (rawSnapshot.content == null) {
        if (!filepath)
          throw new Error("Snapshot cannot be used outside of test");
        const snapshotState = this.getSnapshotState(filepath);
        options.filepath || (options.filepath = filepath);
        rawSnapshot.file = yield snapshotState.environment.resolveRawPath(filepath, rawSnapshot.file);
        rawSnapshot.content = (yield snapshotState.environment.readSnapshotFile(rawSnapshot.file)) || void 0;
      }
      return this.assert(options);
    });
  }
  resetCurrent() {
    return __async(this, null, function* () {
      if (!this.snapshotState)
        return null;
      const result = yield this.snapshotState.pack();
      this.snapshotState = void 0;
      return result;
    });
  }
  clear() {
    this.snapshotStateMap.clear();
  }
};

// node_modules/vitest/dist/vendor-tasks.f9d75aed.js
function getFullName(task, separator = " > ") {
  return getNames(task).join(separator);
}

// node_modules/@vitest/utils/dist/source-map.js
function normalizeWindowsPath2(input = "") {
  if (!input || !input.includes("\\")) {
    return input;
  }
  return input.replace(/\\/g, "/");
}
var _IS_ABSOLUTE_RE2 = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function cwd2() {
  if (typeof process !== "undefined") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
var resolve$22 = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath2(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index2 = arguments_.length - 1; index2 >= -1 && !resolvedAbsolute; index2--) {
    const path = index2 >= 0 ? arguments_[index2] : cwd2();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute2(path);
  }
  resolvedPath = normalizeString2(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute2(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString2(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index2 = 0; index2 <= path.length; ++index2) {
    if (index2 < path.length) {
      char = path[index2];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index2 - 1 || dots === 1)
        ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index2;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index2)}`;
        } else {
          res = path.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var isAbsolute2 = function(p2) {
  return _IS_ABSOLUTE_RE2.test(p2);
};
var comma3 = ",".charCodeAt(0);
var chars3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar3 = new Uint8Array(64);
var charToInt3 = new Uint8Array(128);
for (let i = 0; i < chars3.length; i++) {
  const c = chars3.charCodeAt(i);
  intToChar3[i] = c;
  charToInt3[c] = i;
}
function decode2(mappings) {
  const state = new Int32Array(5);
  const decoded = [];
  let index2 = 0;
  do {
    const semi = indexOf2(mappings, index2);
    const line = [];
    let sorted = true;
    let lastCol = 0;
    state[0] = 0;
    for (let i = index2; i < semi; i++) {
      let seg;
      i = decodeInteger2(mappings, i, state, 0);
      const col = state[0];
      if (col < lastCol)
        sorted = false;
      lastCol = col;
      if (hasMoreVlq2(mappings, i, semi)) {
        i = decodeInteger2(mappings, i, state, 1);
        i = decodeInteger2(mappings, i, state, 2);
        i = decodeInteger2(mappings, i, state, 3);
        if (hasMoreVlq2(mappings, i, semi)) {
          i = decodeInteger2(mappings, i, state, 4);
          seg = [col, state[1], state[2], state[3], state[4]];
        } else {
          seg = [col, state[1], state[2], state[3]];
        }
      } else {
        seg = [col];
      }
      line.push(seg);
    }
    if (!sorted)
      sort2(line);
    decoded.push(line);
    index2 = semi + 1;
  } while (index2 <= mappings.length);
  return decoded;
}
function indexOf2(mappings, index2) {
  const idx = mappings.indexOf(";", index2);
  return idx === -1 ? mappings.length : idx;
}
function decodeInteger2(mappings, pos, state, j) {
  let value = 0;
  let shift = 0;
  let integer = 0;
  do {
    const c = mappings.charCodeAt(pos++);
    integer = charToInt3[c];
    value |= (integer & 31) << shift;
    shift += 5;
  } while (integer & 32);
  const shouldNegate = value & 1;
  value >>>= 1;
  if (shouldNegate) {
    value = -2147483648 | -value;
  }
  state[j] += value;
  return pos;
}
function hasMoreVlq2(mappings, i, length) {
  if (i >= length)
    return false;
  return mappings.charCodeAt(i) !== comma3;
}
function sort2(line) {
  line.sort(sortComparator$12);
}
function sortComparator$12(a, b2) {
  return a[0] - b2[0];
}
var UrlType2;
(function(UrlType3) {
  UrlType3[UrlType3["Empty"] = 1] = "Empty";
  UrlType3[UrlType3["Hash"] = 2] = "Hash";
  UrlType3[UrlType3["Query"] = 3] = "Query";
  UrlType3[UrlType3["RelativePath"] = 4] = "RelativePath";
  UrlType3[UrlType3["AbsolutePath"] = 5] = "AbsolutePath";
  UrlType3[UrlType3["SchemeRelative"] = 6] = "SchemeRelative";
  UrlType3[UrlType3["Absolute"] = 7] = "Absolute";
})(UrlType2 || (UrlType2 = {}));
var COLUMN2 = 0;
var SOURCES_INDEX2 = 1;
var SOURCE_LINE2 = 2;
var SOURCE_COLUMN2 = 3;
var NAMES_INDEX2 = 4;
var REV_GENERATED_LINE = 1;
var REV_GENERATED_COLUMN = 2;
var found2 = false;
function binarySearch2(haystack, needle, low, high) {
  while (low <= high) {
    const mid = low + (high - low >> 1);
    const cmp = haystack[mid][COLUMN2] - needle;
    if (cmp === 0) {
      found2 = true;
      return mid;
    }
    if (cmp < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  found2 = false;
  return low - 1;
}
function upperBound2(haystack, needle, index2) {
  for (let i = index2 + 1; i < haystack.length; index2 = i++) {
    if (haystack[i][COLUMN2] !== needle)
      break;
  }
  return index2;
}
function lowerBound2(haystack, needle, index2) {
  for (let i = index2 - 1; i >= 0; index2 = i--) {
    if (haystack[i][COLUMN2] !== needle)
      break;
  }
  return index2;
}
function memoizedState2() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
}
function memoizedBinarySearch2(haystack, needle, state, key) {
  const { lastKey, lastNeedle, lastIndex } = state;
  let low = 0;
  let high = haystack.length - 1;
  if (key === lastKey) {
    if (needle === lastNeedle) {
      found2 = lastIndex !== -1 && haystack[lastIndex][COLUMN2] === needle;
      return lastIndex;
    }
    if (needle >= lastNeedle) {
      low = lastIndex === -1 ? 0 : lastIndex;
    } else {
      high = lastIndex;
    }
  }
  state.lastKey = key;
  state.lastNeedle = needle;
  return state.lastIndex = binarySearch2(haystack, needle, low, high);
}
function buildBySources(decoded, memos) {
  const sources = memos.map(buildNullArray);
  for (let i = 0; i < decoded.length; i++) {
    const line = decoded[i];
    for (let j = 0; j < line.length; j++) {
      const seg = line[j];
      if (seg.length === 1)
        continue;
      const sourceIndex = seg[SOURCES_INDEX2];
      const sourceLine = seg[SOURCE_LINE2];
      const sourceColumn = seg[SOURCE_COLUMN2];
      const originalSource = sources[sourceIndex];
      const originalLine = originalSource[sourceLine] || (originalSource[sourceLine] = []);
      const memo = memos[sourceIndex];
      const index2 = upperBound2(originalLine, sourceColumn, memoizedBinarySearch2(originalLine, sourceColumn, memo, sourceLine));
      insert(originalLine, memo.lastIndex = index2 + 1, [sourceColumn, i, seg[COLUMN2]]);
    }
  }
  return sources;
}
function insert(array2, index2, value) {
  for (let i = array2.length; i > index2; i--) {
    array2[i] = array2[i - 1];
  }
  array2[index2] = value;
}
function buildNullArray() {
  return { __proto__: null };
}
var LINE_GTR_ZERO2 = "`line` must be greater than 0 (lines start at line 1)";
var COL_GTR_EQ_ZERO2 = "`column` must be greater than or equal to 0 (columns start at column 0)";
var LEAST_UPPER_BOUND2 = -1;
var GREATEST_LOWER_BOUND2 = 1;
var decodedMappings2;
var originalPositionFor2;
var generatedPositionFor;
(() => {
  decodedMappings2 = (map2) => {
    return map2._decoded || (map2._decoded = decode2(map2._encoded));
  };
  originalPositionFor2 = (map2, { line, column, bias }) => {
    line--;
    if (line < 0)
      throw new Error(LINE_GTR_ZERO2);
    if (column < 0)
      throw new Error(COL_GTR_EQ_ZERO2);
    const decoded = decodedMappings2(map2);
    if (line >= decoded.length)
      return OMapping2(null, null, null, null);
    const segments = decoded[line];
    const index2 = traceSegmentInternal2(segments, map2._decodedMemo, line, column, bias || GREATEST_LOWER_BOUND2);
    if (index2 === -1)
      return OMapping2(null, null, null, null);
    const segment = segments[index2];
    if (segment.length === 1)
      return OMapping2(null, null, null, null);
    const { names, resolvedSources } = map2;
    return OMapping2(resolvedSources[segment[SOURCES_INDEX2]], segment[SOURCE_LINE2] + 1, segment[SOURCE_COLUMN2], segment.length === 5 ? names[segment[NAMES_INDEX2]] : null);
  };
  generatedPositionFor = (map2, { source, line, column, bias }) => {
    return generatedPosition(map2, source, line, column, bias || GREATEST_LOWER_BOUND2, false);
  };
  function generatedPosition(map2, source, line, column, bias, all) {
    line--;
    if (line < 0)
      throw new Error(LINE_GTR_ZERO2);
    if (column < 0)
      throw new Error(COL_GTR_EQ_ZERO2);
    const { sources, resolvedSources } = map2;
    let sourceIndex = sources.indexOf(source);
    if (sourceIndex === -1)
      sourceIndex = resolvedSources.indexOf(source);
    if (sourceIndex === -1)
      return all ? [] : GMapping(null, null);
    const generated = map2._bySources || (map2._bySources = buildBySources(decodedMappings2(map2), map2._bySourceMemos = sources.map(memoizedState2)));
    const segments = generated[sourceIndex][line];
    if (segments == null)
      return all ? [] : GMapping(null, null);
    const memo = map2._bySourceMemos[sourceIndex];
    if (all)
      return sliceGeneratedPositions(segments, memo, line, column, bias);
    const index2 = traceSegmentInternal2(segments, memo, line, column, bias);
    if (index2 === -1)
      return GMapping(null, null);
    const segment = segments[index2];
    return GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]);
  }
})();
function OMapping2(source, line, column, name) {
  return { source, line, column, name };
}
function GMapping(line, column) {
  return { line, column };
}
function traceSegmentInternal2(segments, memo, line, column, bias) {
  let index2 = memoizedBinarySearch2(segments, column, memo, line);
  if (found2) {
    index2 = (bias === LEAST_UPPER_BOUND2 ? upperBound2 : lowerBound2)(segments, column, index2);
  } else if (bias === LEAST_UPPER_BOUND2)
    index2++;
  if (index2 === -1 || index2 === segments.length)
    return -1;
  return index2;
}
function sliceGeneratedPositions(segments, memo, line, column, bias) {
  let min = traceSegmentInternal2(segments, memo, line, column, GREATEST_LOWER_BOUND2);
  if (!found2 && bias === LEAST_UPPER_BOUND2)
    min++;
  if (min === -1 || min === segments.length)
    return [];
  const matchedColumn = found2 ? column : segments[min][COLUMN2];
  if (!found2)
    min = lowerBound2(segments, matchedColumn, min);
  const max = upperBound2(segments, matchedColumn, min);
  const result = [];
  for (; min <= max; min++) {
    const segment = segments[min];
    result.push(GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]));
  }
  return result;
}
var CHROME_IE_STACK_REGEXP2 = /^\s*at .*(\S+:\d+|\(native\))/m;
var SAFARI_NATIVE_CODE_REGEXP2 = /^(eval@)?(\[native code])?$/;
function extractLocation2(urlLike) {
  if (!urlLike.includes(":"))
    return [urlLike];
  const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
  const parts = regExp.exec(urlLike.replace(/^\(|\)$/g, ""));
  if (!parts)
    return [urlLike];
  let url = parts[1];
  if (url.startsWith("http:") || url.startsWith("https:")) {
    const urlObj = new URL(url);
    url = urlObj.pathname;
  }
  if (url.startsWith("/@fs/")) {
    url = url.slice(typeof process !== "undefined" && process.platform === "win32" ? 5 : 4);
  }
  return [url, parts[2] || void 0, parts[3] || void 0];
}
function parseSingleFFOrSafariStack2(raw) {
  let line = raw.trim();
  if (SAFARI_NATIVE_CODE_REGEXP2.test(line))
    return null;
  if (line.includes(" > eval"))
    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
  if (!line.includes("@") && !line.includes(":"))
    return null;
  const functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
  const matches = line.match(functionNameRegex);
  const functionName3 = matches && matches[1] ? matches[1] : void 0;
  const [url, lineNumber, columnNumber] = extractLocation2(line.replace(functionNameRegex, ""));
  if (!url || !lineNumber || !columnNumber)
    return null;
  return {
    file: url,
    method: functionName3 || "",
    line: Number.parseInt(lineNumber),
    column: Number.parseInt(columnNumber)
  };
}
function parseSingleStack(raw) {
  const line = raw.trim();
  if (!CHROME_IE_STACK_REGEXP2.test(line))
    return parseSingleFFOrSafariStack2(line);
  return parseSingleV8Stack2(line);
}
function parseSingleV8Stack2(raw) {
  let line = raw.trim();
  if (!CHROME_IE_STACK_REGEXP2.test(line))
    return null;
  if (line.includes("(eval "))
    line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
  let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const location = sanitizedLine.match(/ (\(.+\)$)/);
  sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
  const [url, lineNumber, columnNumber] = extractLocation2(location ? location[1] : sanitizedLine);
  let method = location && sanitizedLine || "";
  let file = url && ["eval", "<anonymous>"].includes(url) ? void 0 : url;
  if (!file || !lineNumber || !columnNumber)
    return null;
  if (method.startsWith("async "))
    method = method.slice(6);
  if (file.startsWith("file://"))
    file = file.slice(7);
  file = resolve$22(file);
  if (method)
    method = method.replace(/__vite_ssr_import_\d+__\./g, "");
  return {
    method,
    file,
    line: Number.parseInt(lineNumber),
    column: Number.parseInt(columnNumber)
  };
}

// node_modules/vitest/dist/vendor-vi.6873a1c1.js
var import_util = __toESM(require("util"), 1);

// node_modules/vitest/dist/vendor-date.6e993429.js
var RealDate = Date;
var now2 = null;
var MockDate = class extends RealDate {
  constructor(y2, m2, d2, h, M2, s, ms) {
    super();
    let date;
    switch (arguments.length) {
      case 0:
        if (now2 !== null)
          date = new RealDate(now2.valueOf());
        else
          date = new RealDate();
        break;
      case 1:
        date = new RealDate(y2);
        break;
      default:
        d2 = typeof d2 === "undefined" ? 1 : d2;
        h = h || 0;
        M2 = M2 || 0;
        s = s || 0;
        ms = ms || 0;
        date = new RealDate(y2, m2, d2, h, M2, s, ms);
        break;
    }
    return date;
  }
};
MockDate.UTC = RealDate.UTC;
MockDate.now = function() {
  return new MockDate().valueOf();
};
MockDate.parse = function(dateString) {
  return RealDate.parse(dateString);
};
MockDate.toString = function() {
  return RealDate.toString();
};
function mockDate(date) {
  const dateObj = new RealDate(date.valueOf());
  if (Number.isNaN(dateObj.getTime()))
    throw new TypeError(`mockdate: The time set is an invalid date: ${date}`);
  globalThis.Date = MockDate;
  now2 = dateObj.valueOf();
}
function resetDate() {
  globalThis.Date = RealDate;
}

// node_modules/vitest/dist/vendor-vi.6873a1c1.js
function resetModules(modules, resetMocks = false) {
  const skipPaths = [
    // Vitest
    /\/vitest\/dist\//,
    /\/vite-node\/dist\//,
    // yarn's .store folder
    /vitest-virtual-\w+\/dist/,
    // cnpm
    /@vitest\/dist/,
    // don't clear mocks
    ...!resetMocks ? [/^mock:/] : []
  ];
  modules.forEach((mod, path) => {
    if (skipPaths.some((re) => re.test(path)))
      return;
    modules.invalidateModule(mod);
  });
}
function waitNextTick() {
  const { setTimeout: setTimeout2 } = getSafeTimers();
  return new Promise((resolve2) => setTimeout2(resolve2, 0));
}
function waitForImportsToResolve() {
  return __async(this, null, function* () {
    yield waitNextTick();
    const state = getWorkerState();
    const promises = [];
    let resolvingCount = 0;
    for (const mod of state.moduleCache.values()) {
      if (mod.promise && !mod.evaluated)
        promises.push(mod.promise);
      if (mod.resolving)
        resolvingCount++;
    }
    if (!promises.length && !resolvingCount)
      return;
    yield Promise.allSettled(promises);
    yield waitForImportsToResolve();
  });
}
var benchFns = /* @__PURE__ */ new WeakMap();
var benchOptsMap = /* @__PURE__ */ new WeakMap();
var bench = createBenchmark(
  function(name, fn2 = noop, options = {}) {
    if (!isRunningInBenchmark())
      throw new Error("`bench()` is only available in benchmark mode.");
    const task = getCurrentSuite().custom.call(this, formatName2(name));
    task.meta = {
      benchmark: true
    };
    benchFns.set(task, fn2);
    benchOptsMap.set(task, options);
  }
);
function createBenchmark(fn2) {
  const benchmark = createChainable(
    ["skip", "only", "todo"],
    fn2
  );
  benchmark.skipIf = (condition) => condition ? benchmark.skip : benchmark;
  benchmark.runIf = (condition) => condition ? benchmark : benchmark.skip;
  return benchmark;
}
function formatName2(name) {
  return typeof name === "string" ? name : name instanceof Function ? name.name || "<anonymous>" : String(name);
}
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var chaiSubset = { exports: {} };
(function(module2, exports2) {
  (function() {
    (function(chaiSubset2) {
      if (typeof commonjsRequire === "function" && true && true) {
        return module2.exports = chaiSubset2;
      } else {
        return chai.use(chaiSubset2);
      }
    })(function(chai3, utils) {
      var Assertion2 = chai3.Assertion;
      var assertionPrototype = Assertion2.prototype;
      Assertion2.addMethod("containSubset", function(expected) {
        var actual = utils.flag(this, "object");
        var showDiff = chai3.config.showDiff;
        assertionPrototype.assert.call(
          this,
          compare(expected, actual),
          "expected #{act} to contain subset #{exp}",
          "expected #{act} to not contain subset #{exp}",
          expected,
          actual,
          showDiff
        );
      });
      chai3.assert.containSubset = function(val, exp, msg) {
        new chai3.Assertion(val, msg).to.be.containSubset(exp);
      };
      function compare(expected, actual) {
        if (expected === actual) {
          return true;
        }
        if (typeof actual !== typeof expected) {
          return false;
        }
        if (typeof expected !== "object" || expected === null) {
          return expected === actual;
        }
        if (!!expected && !actual) {
          return false;
        }
        if (Array.isArray(expected)) {
          if (typeof actual.length !== "number") {
            return false;
          }
          var aa = Array.prototype.slice.call(actual);
          return expected.every(function(exp) {
            return aa.some(function(act) {
              return compare(exp, act);
            });
          });
        }
        if (expected instanceof Date) {
          if (actual instanceof Date) {
            return expected.getTime() === actual.getTime();
          } else {
            return false;
          }
        }
        return Object.keys(expected).every(function(key) {
          var eo = expected[key];
          var ao = actual[key];
          if (typeof eo === "object" && eo !== null && ao !== null) {
            return compare(eo, ao);
          }
          if (typeof eo === "function") {
            return eo(ao);
          }
          return ao === eo;
        });
      }
    });
  }).call(commonjsGlobal);
})(chaiSubset);
var chaiSubsetExports = chaiSubset.exports;
var Subset = /* @__PURE__ */ getDefaultExportFromCjs(chaiSubsetExports);
var MATCHERS_OBJECT2 = Symbol.for("matchers-object");
var JEST_MATCHERS_OBJECT2 = Symbol.for("$$jest-matchers-object");
var GLOBAL_EXPECT2 = Symbol.for("expect-global");
if (!Object.prototype.hasOwnProperty.call(globalThis, MATCHERS_OBJECT2)) {
  const globalState = /* @__PURE__ */ new WeakMap();
  const matchers = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, MATCHERS_OBJECT2, {
    get: () => globalState
  });
  Object.defineProperty(globalThis, JEST_MATCHERS_OBJECT2, {
    configurable: true,
    get: () => ({
      state: globalState.get(globalThis[GLOBAL_EXPECT2]),
      matchers
    })
  });
}
function recordAsyncExpect2(test3, promise) {
  if (test3 && promise instanceof Promise) {
    promise = promise.finally(() => {
      const index2 = test3.promises.indexOf(promise);
      if (index2 !== -1)
        test3.promises.splice(index2, 1);
    });
    if (!test3.promises)
      test3.promises = [];
    test3.promises.push(promise);
  }
  return promise;
}
var VitestSnapshotClient = class extends SnapshotClient {
  equalityCheck(received, expected) {
    return equals(received, expected, [iterableEquality, subsetEquality]);
  }
};
var _client;
function getSnapshotClient() {
  if (!_client)
    _client = new VitestSnapshotClient();
  return _client;
}
function getErrorMessage(err) {
  if (err instanceof Error)
    return err.message;
  return err;
}
function getErrorString(expected, promise) {
  if (typeof expected !== "function") {
    if (!promise)
      throw new Error(`expected must be a function, received ${typeof expected}`);
    return getErrorMessage(expected);
  }
  try {
    expected();
  } catch (e) {
    return getErrorMessage(e);
  }
  throw new Error("snapshot function didn't throw");
}
var SnapshotPlugin = (chai3, utils) => {
  const getTestNames = (test3) => {
    var _a2;
    if (!test3)
      return {};
    return {
      filepath: (_a2 = test3.file) == null ? void 0 : _a2.filepath,
      name: getNames(test3).slice(1).join(" > ")
    };
  };
  for (const key of ["matchSnapshot", "toMatchSnapshot"]) {
    utils.addMethod(
      chai3.Assertion.prototype,
      key,
      function(properties, message) {
        const expected = utils.flag(this, "object");
        const test3 = utils.flag(this, "vitest-test");
        if (typeof properties === "string" && typeof message === "undefined") {
          message = properties;
          properties = void 0;
        }
        const errorMessage = utils.flag(this, "message");
        getSnapshotClient().assert(__spreadValues({
          received: expected,
          message,
          isInline: false,
          properties,
          errorMessage
        }, getTestNames(test3)));
      }
    );
  }
  utils.addMethod(
    chai3.Assertion.prototype,
    "toMatchFileSnapshot",
    function(file, message) {
      const expected = utils.flag(this, "object");
      const test3 = utils.flag(this, "vitest-test");
      const errorMessage = utils.flag(this, "message");
      const promise = getSnapshotClient().assertRaw(__spreadValues({
        received: expected,
        message,
        isInline: false,
        rawSnapshot: {
          file
        },
        errorMessage
      }, getTestNames(test3)));
      return recordAsyncExpect2(test3, promise);
    }
  );
  utils.addMethod(
    chai3.Assertion.prototype,
    "toMatchInlineSnapshot",
    function __INLINE_SNAPSHOT__(properties, inlineSnapshot, message) {
      var _a2;
      const test3 = utils.flag(this, "vitest-test");
      const isInsideEach = test3 && (test3.each || ((_a2 = test3.suite) == null ? void 0 : _a2.each));
      if (isInsideEach)
        throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
      const expected = utils.flag(this, "object");
      const error = utils.flag(this, "error");
      if (typeof properties === "string") {
        message = inlineSnapshot;
        inlineSnapshot = properties;
        properties = void 0;
      }
      if (inlineSnapshot)
        inlineSnapshot = stripSnapshotIndentation(inlineSnapshot);
      const errorMessage = utils.flag(this, "message");
      getSnapshotClient().assert(__spreadValues({
        received: expected,
        message,
        isInline: true,
        properties,
        inlineSnapshot,
        error,
        errorMessage
      }, getTestNames(test3)));
    }
  );
  utils.addMethod(
    chai3.Assertion.prototype,
    "toThrowErrorMatchingSnapshot",
    function(message) {
      const expected = utils.flag(this, "object");
      const test3 = utils.flag(this, "vitest-test");
      const promise = utils.flag(this, "promise");
      const errorMessage = utils.flag(this, "message");
      getSnapshotClient().assert(__spreadValues({
        received: getErrorString(expected, promise),
        message,
        errorMessage
      }, getTestNames(test3)));
    }
  );
  utils.addMethod(
    chai3.Assertion.prototype,
    "toThrowErrorMatchingInlineSnapshot",
    function __INLINE_SNAPSHOT__(inlineSnapshot, message) {
      var _a2;
      const test3 = utils.flag(this, "vitest-test");
      const isInsideEach = test3 && (test3.each || ((_a2 = test3.suite) == null ? void 0 : _a2.each));
      if (isInsideEach)
        throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
      const expected = utils.flag(this, "object");
      const error = utils.flag(this, "error");
      const promise = utils.flag(this, "promise");
      const errorMessage = utils.flag(this, "message");
      getSnapshotClient().assert(__spreadValues({
        received: getErrorString(expected, promise),
        message,
        inlineSnapshot,
        isInline: true,
        error,
        errorMessage
      }, getTestNames(test3)));
    }
  );
  utils.addMethod(
    chai3.expect,
    "addSnapshotSerializer",
    addSerializer
  );
};
use(JestExtend);
use(JestChaiExpect);
use(Subset);
use(SnapshotPlugin);
use(JestAsymmetricMatchers);
function createExpect(test3) {
  var _a2;
  const expect2 = (value, message) => {
    const { assertionCalls } = getState(expect2);
    setState({ assertionCalls: assertionCalls + 1, soft: false }, expect2);
    const assert2 = expect(value, message);
    const _test2 = test3 || getCurrentTest();
    if (_test2)
      return assert2.withTest(_test2);
    else
      return assert2;
  };
  Object.assign(expect2, expect);
  expect2.getState = () => getState(expect2);
  expect2.setState = (state) => setState(state, expect2);
  const globalState = getState(globalThis[GLOBAL_EXPECT]) || {};
  setState(__spreadProps(__spreadValues({}, globalState), {
    assertionCalls: 0,
    isExpectingAssertions: false,
    isExpectingAssertionsError: null,
    expectedAssertionsNumber: null,
    expectedAssertionsNumberErrorGen: null,
    environment: getCurrentEnvironment(),
    testPath: test3 ? (_a2 = test3.suite.file) == null ? void 0 : _a2.filepath : globalState.testPath,
    currentTestName: test3 ? getFullName(test3) : globalState.currentTestName
  }), expect2);
  expect2.extend = (matchers) => expect.extend(expect2, matchers);
  expect2.soft = (...args) => {
    const assert2 = expect2(...args);
    expect2.setState({
      soft: true
    });
    return assert2;
  };
  expect2.unreachable = (message) => {
    assert.fail(`expected${message ? ` "${message}" ` : " "}not to be reached`);
  };
  function assertions(expected) {
    const errorGen = () => new Error(`expected number of assertions to be ${expected}, but got ${expect2.getState().assertionCalls}`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(errorGen(), assertions);
    expect2.setState({
      expectedAssertionsNumber: expected,
      expectedAssertionsNumberErrorGen: errorGen
    });
  }
  function hasAssertions() {
    const error = new Error("expected any number of assertion, but got none");
    if (Error.captureStackTrace)
      Error.captureStackTrace(error, hasAssertions);
    expect2.setState({
      isExpectingAssertions: true,
      isExpectingAssertionsError: error
    });
  }
  util.addMethod(expect2, "assertions", assertions);
  util.addMethod(expect2, "hasAssertions", hasAssertions);
  return expect2;
}
var globalExpect = createExpect();
Object.defineProperty(globalThis, GLOBAL_EXPECT, {
  value: globalExpect,
  writable: true,
  configurable: true
});
var fakeTimersSrc = { exports: {} };
var globalObject;
if (typeof commonjsGlobal !== "undefined") {
  globalObject = commonjsGlobal;
} else if (typeof window !== "undefined") {
  globalObject = window;
} else {
  globalObject = self;
}
var global2 = globalObject;
var throwsOnProto$1;
try {
  const object2 = {};
  object2.__proto__;
  throwsOnProto$1 = false;
} catch (_) {
  throwsOnProto$1 = true;
}
var throwsOnProto_1 = throwsOnProto$1;
var call = Function.call;
var throwsOnProto = throwsOnProto_1;
var disallowedProperties = [
  // ignore size because it throws from Map
  "size",
  "caller",
  "callee",
  "arguments"
];
if (throwsOnProto) {
  disallowedProperties.push("__proto__");
}
var copyPrototypeMethods = function copyPrototypeMethods2(prototype) {
  return Object.getOwnPropertyNames(prototype).reduce(
    function(result, name) {
      if (disallowedProperties.includes(name)) {
        return result;
      }
      if (typeof prototype[name] !== "function") {
        return result;
      }
      result[name] = call.bind(prototype[name]);
      return result;
    },
    /* @__PURE__ */ Object.create(null)
  );
};
var copyPrototype$5 = copyPrototypeMethods;
var array = copyPrototype$5(Array.prototype);
var every$1 = array.every;
function hasCallsLeft(callMap, spy) {
  if (callMap[spy.id] === void 0) {
    callMap[spy.id] = 0;
  }
  return callMap[spy.id] < spy.callCount;
}
function checkAdjacentCalls(callMap, spy, index2, spies2) {
  var calledBeforeNext = true;
  if (index2 !== spies2.length - 1) {
    calledBeforeNext = spy.calledBefore(spies2[index2 + 1]);
  }
  if (hasCallsLeft(callMap, spy) && calledBeforeNext) {
    callMap[spy.id] += 1;
    return true;
  }
  return false;
}
function calledInOrder(spies2) {
  var callMap = {};
  var _spies = arguments.length > 1 ? arguments : spies2;
  return every$1(_spies, checkAdjacentCalls.bind(null, callMap));
}
var calledInOrder_1 = calledInOrder;
var functionName$1 = function functionName(func) {
  if (!func) {
    return "";
  }
  try {
    return func.displayName || func.name || // Use function decomposition as a last resort to get function
    // name. Does not rely on function decomposition to work - if it
    // doesn't debugging will be slightly less informative
    // (i.e. toString will say 'spy' rather than 'myFunc').
    (String(func).match(/function ([^\s(]+)/) || [])[1];
  } catch (e) {
    return "";
  }
};
var functionName2 = functionName$1;
function className(value) {
  return value.constructor && value.constructor.name || // The next branch is for IE11 support only:
  // Because the name property is not set on the prototype
  // of the Function object, we finally try to grab the
  // name from its definition. This will never be reached
  // in node, so we are not able to test this properly.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
  typeof value.constructor === "function" && /* istanbul ignore next */
  functionName2(value.constructor) || null;
}
var className_1 = className;
var deprecated = {};
(function(exports2) {
  exports2.wrap = function(func, msg) {
    var wrapped = function() {
      exports2.printWarning(msg);
      return func.apply(this, arguments);
    };
    if (func.prototype) {
      wrapped.prototype = func.prototype;
    }
    return wrapped;
  };
  exports2.defaultMsg = function(packageName, funcName) {
    return `${packageName}.${funcName} is deprecated and will be removed from the public API in a future version of ${packageName}.`;
  };
  exports2.printWarning = function(msg) {
    if (typeof process === "object" && process.emitWarning) {
      process.emitWarning(msg);
    } else if (console.info) {
      console.info(msg);
    } else {
      console.log(msg);
    }
  };
})(deprecated);
var every = function every2(obj, fn2) {
  var pass = true;
  try {
    obj.forEach(function() {
      if (!fn2.apply(this, arguments)) {
        throw new Error();
      }
    });
  } catch (e) {
    pass = false;
  }
  return pass;
};
var sort3 = array.sort;
var slice = array.slice;
function comparator(a, b2) {
  var aCall = a.getCall(0);
  var bCall = b2.getCall(0);
  var aId = aCall && aCall.callId || -1;
  var bId = bCall && bCall.callId || -1;
  return aId < bId ? -1 : 1;
}
function orderByFirstCall(spies2) {
  return sort3(slice(spies2), comparator);
}
var orderByFirstCall_1 = orderByFirstCall;
var copyPrototype$4 = copyPrototypeMethods;
var _function = copyPrototype$4(Function.prototype);
var copyPrototype$3 = copyPrototypeMethods;
var map = copyPrototype$3(Map.prototype);
var copyPrototype$2 = copyPrototypeMethods;
var object = copyPrototype$2(Object.prototype);
var copyPrototype$1 = copyPrototypeMethods;
var set2 = copyPrototype$1(Set.prototype);
var copyPrototype = copyPrototypeMethods;
var string2 = copyPrototype(String.prototype);
var prototypes = {
  array,
  function: _function,
  map,
  object,
  set: set2,
  string: string2
};
var typeDetect = { exports: {} };
(function(module2, exports2) {
  (function(global3, factory) {
    module2.exports = factory();
  })(commonjsGlobal, function() {
    var promiseExists = typeof Promise === "function";
    var globalObject2 = typeof self === "object" ? self : commonjsGlobal;
    var symbolExists = typeof Symbol !== "undefined";
    var mapExists = typeof Map !== "undefined";
    var setExists = typeof Set !== "undefined";
    var weakMapExists = typeof WeakMap !== "undefined";
    var weakSetExists = typeof WeakSet !== "undefined";
    var dataViewExists = typeof DataView !== "undefined";
    var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== "undefined";
    var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== "undefined";
    var setEntriesExists = setExists && typeof Set.prototype.entries === "function";
    var mapEntriesExists = mapExists && typeof Map.prototype.entries === "function";
    var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries());
    var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries());
    var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === "function";
    var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
    var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === "function";
    var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(""[Symbol.iterator]());
    var toStringLeftSliceLength = 8;
    var toStringRightSliceLength = -1;
    function typeDetect2(obj) {
      var typeofObj = typeof obj;
      if (typeofObj !== "object") {
        return typeofObj;
      }
      if (obj === null) {
        return "null";
      }
      if (obj === globalObject2) {
        return "global";
      }
      if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
        return "Array";
      }
      if (typeof window === "object" && window !== null) {
        if (typeof window.location === "object" && obj === window.location) {
          return "Location";
        }
        if (typeof window.document === "object" && obj === window.document) {
          return "Document";
        }
        if (typeof window.navigator === "object") {
          if (typeof window.navigator.mimeTypes === "object" && obj === window.navigator.mimeTypes) {
            return "MimeTypeArray";
          }
          if (typeof window.navigator.plugins === "object" && obj === window.navigator.plugins) {
            return "PluginArray";
          }
        }
        if ((typeof window.HTMLElement === "function" || typeof window.HTMLElement === "object") && obj instanceof window.HTMLElement) {
          if (obj.tagName === "BLOCKQUOTE") {
            return "HTMLQuoteElement";
          }
          if (obj.tagName === "TD") {
            return "HTMLTableDataCellElement";
          }
          if (obj.tagName === "TH") {
            return "HTMLTableHeaderCellElement";
          }
        }
      }
      var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];
      if (typeof stringTag === "string") {
        return stringTag;
      }
      var objPrototype = Object.getPrototypeOf(obj);
      if (objPrototype === RegExp.prototype) {
        return "RegExp";
      }
      if (objPrototype === Date.prototype) {
        return "Date";
      }
      if (promiseExists && objPrototype === Promise.prototype) {
        return "Promise";
      }
      if (setExists && objPrototype === Set.prototype) {
        return "Set";
      }
      if (mapExists && objPrototype === Map.prototype) {
        return "Map";
      }
      if (weakSetExists && objPrototype === WeakSet.prototype) {
        return "WeakSet";
      }
      if (weakMapExists && objPrototype === WeakMap.prototype) {
        return "WeakMap";
      }
      if (dataViewExists && objPrototype === DataView.prototype) {
        return "DataView";
      }
      if (mapExists && objPrototype === mapIteratorPrototype) {
        return "Map Iterator";
      }
      if (setExists && objPrototype === setIteratorPrototype) {
        return "Set Iterator";
      }
      if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
        return "Array Iterator";
      }
      if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
        return "String Iterator";
      }
      if (objPrototype === null) {
        return "Object";
      }
      return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
    }
    return typeDetect2;
  });
})(typeDetect);
var typeDetectExports = typeDetect.exports;
var type = typeDetectExports;
var typeOf = function typeOf2(value) {
  return type(value).toLowerCase();
};
function valueToString(value) {
  if (value && value.toString) {
    return value.toString();
  }
  return String(value);
}
var valueToString_1 = valueToString;
var lib = {
  global: global2,
  calledInOrder: calledInOrder_1,
  className: className_1,
  deprecated,
  every,
  functionName: functionName$1,
  orderByFirstCall: orderByFirstCall_1,
  prototypes,
  typeOf,
  valueToString: valueToString_1
};
(function(module2, exports2) {
  const globalObject2 = lib.global;
  let timersModule;
  if (typeof commonjsRequire === "function" && true) {
    try {
      timersModule = require("timers");
    } catch (e) {
    }
  }
  function withGlobal(_global) {
    const userAgent = _global.navigator && _global.navigator.userAgent;
    const isRunningInIE = userAgent && userAgent.indexOf("MSIE ") > -1;
    const maxTimeout = Math.pow(2, 31) - 1;
    const idCounterStart = 1e12;
    const NOOP = function() {
      return void 0;
    };
    const NOOP_ARRAY = function() {
      return [];
    };
    const timeoutResult = _global.setTimeout(NOOP, 0);
    const addTimerReturnsObject = typeof timeoutResult === "object";
    const hrtimePresent = _global.process && typeof _global.process.hrtime === "function";
    const hrtimeBigintPresent = hrtimePresent && typeof _global.process.hrtime.bigint === "function";
    const nextTickPresent = _global.process && typeof _global.process.nextTick === "function";
    const utilPromisify = _global.process && import_util.default.promisify;
    const performancePresent = _global.performance && typeof _global.performance.now === "function";
    const hasPerformancePrototype = _global.Performance && (typeof _global.Performance).match(/^(function|object)$/);
    const hasPerformanceConstructorPrototype = _global.performance && _global.performance.constructor && _global.performance.constructor.prototype;
    const queueMicrotaskPresent = _global.hasOwnProperty("queueMicrotask");
    const requestAnimationFramePresent = _global.requestAnimationFrame && typeof _global.requestAnimationFrame === "function";
    const cancelAnimationFramePresent = _global.cancelAnimationFrame && typeof _global.cancelAnimationFrame === "function";
    const requestIdleCallbackPresent = _global.requestIdleCallback && typeof _global.requestIdleCallback === "function";
    const cancelIdleCallbackPresent = _global.cancelIdleCallback && typeof _global.cancelIdleCallback === "function";
    const setImmediatePresent = _global.setImmediate && typeof _global.setImmediate === "function";
    if (isRunningInIE) {
      _global.setTimeout = _global.setTimeout;
      _global.clearTimeout = _global.clearTimeout;
      _global.setInterval = _global.setInterval;
      _global.clearInterval = _global.clearInterval;
      _global.Date = _global.Date;
    }
    if (setImmediatePresent) {
      _global.setImmediate = _global.setImmediate;
      _global.clearImmediate = _global.clearImmediate;
    }
    _global.clearTimeout(timeoutResult);
    const NativeDate = _global.Date;
    let uniqueTimerId = idCounterStart;
    function isNumberFinite(num) {
      if (Number.isFinite) {
        return Number.isFinite(num);
      }
      return isFinite(num);
    }
    let isNearInfiniteLimit = false;
    function checkIsNearInfiniteLimit(clock, i) {
      if (clock.loopLimit && i === clock.loopLimit - 1) {
        isNearInfiniteLimit = true;
      }
    }
    function resetIsNearInfiniteLimit() {
      isNearInfiniteLimit = false;
    }
    function parseTime(str) {
      if (!str) {
        return 0;
      }
      const strings = str.split(":");
      const l = strings.length;
      let i = l;
      let ms = 0;
      let parsed;
      if (l > 3 || !/^(\d\d:){0,2}\d\d?$/.test(str)) {
        throw new Error(
          "tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits"
        );
      }
      while (i--) {
        parsed = parseInt(strings[i], 10);
        if (parsed >= 60) {
          throw new Error(`Invalid time ${str}`);
        }
        ms += parsed * Math.pow(60, l - i - 1);
      }
      return ms * 1e3;
    }
    function nanoRemainder(msFloat) {
      const modulo = 1e6;
      const remainder = msFloat * 1e6 % modulo;
      const positiveRemainder = remainder < 0 ? remainder + modulo : remainder;
      return Math.floor(positiveRemainder);
    }
    function getEpoch(epoch) {
      if (!epoch) {
        return 0;
      }
      if (typeof epoch.getTime === "function") {
        return epoch.getTime();
      }
      if (typeof epoch === "number") {
        return epoch;
      }
      throw new TypeError("now should be milliseconds since UNIX epoch");
    }
    function inRange(from, to, timer) {
      return timer && timer.callAt >= from && timer.callAt <= to;
    }
    function getInfiniteLoopError(clock, job) {
      const infiniteLoopError = new Error(
        `Aborting after running ${clock.loopLimit} timers, assuming an infinite loop!`
      );
      if (!job.error) {
        return infiniteLoopError;
      }
      const computedTargetPattern = /target\.*[<|(|[].*?[>|\]|)]\s*/;
      let clockMethodPattern = new RegExp(
        String(Object.keys(clock).join("|"))
      );
      if (addTimerReturnsObject) {
        clockMethodPattern = new RegExp(
          `\\s+at (Object\\.)?(?:${Object.keys(clock).join("|")})\\s+`
        );
      }
      let matchedLineIndex = -1;
      job.error.stack.split("\n").some(function(line, i) {
        const matchedComputedTarget = line.match(computedTargetPattern);
        if (matchedComputedTarget) {
          matchedLineIndex = i;
          return true;
        }
        const matchedClockMethod = line.match(clockMethodPattern);
        if (matchedClockMethod) {
          matchedLineIndex = i;
          return false;
        }
        return matchedLineIndex >= 0;
      });
      const stack = `${infiniteLoopError}
${job.type || "Microtask"} - ${job.func.name || "anonymous"}
${job.error.stack.split("\n").slice(matchedLineIndex + 1).join("\n")}`;
      try {
        Object.defineProperty(infiniteLoopError, "stack", {
          value: stack
        });
      } catch (e) {
      }
      return infiniteLoopError;
    }
    function mirrorDateProperties(target, source) {
      let prop;
      for (prop in source) {
        if (source.hasOwnProperty(prop)) {
          target[prop] = source[prop];
        }
      }
      if (source.now) {
        target.now = function now3() {
          return target.clock.now;
        };
      } else {
        delete target.now;
      }
      if (source.toSource) {
        target.toSource = function toSource() {
          return source.toSource();
        };
      } else {
        delete target.toSource;
      }
      target.toString = function toString3() {
        return source.toString();
      };
      target.prototype = source.prototype;
      target.parse = source.parse;
      target.UTC = source.UTC;
      target.prototype.toUTCString = source.prototype.toUTCString;
      target.isFake = true;
      return target;
    }
    function createDate() {
      function ClockDate(year, month, date, hour, minute, second, ms) {
        if (!(this instanceof ClockDate)) {
          return new NativeDate(ClockDate.clock.now).toString();
        }
        switch (arguments.length) {
          case 0:
            return new NativeDate(ClockDate.clock.now);
          case 1:
            return new NativeDate(year);
          case 2:
            return new NativeDate(year, month);
          case 3:
            return new NativeDate(year, month, date);
          case 4:
            return new NativeDate(year, month, date, hour);
          case 5:
            return new NativeDate(year, month, date, hour, minute);
          case 6:
            return new NativeDate(
              year,
              month,
              date,
              hour,
              minute,
              second
            );
          default:
            return new NativeDate(
              year,
              month,
              date,
              hour,
              minute,
              second,
              ms
            );
        }
      }
      return mirrorDateProperties(ClockDate, NativeDate);
    }
    function enqueueJob(clock, job) {
      if (!clock.jobs) {
        clock.jobs = [];
      }
      clock.jobs.push(job);
    }
    function runJobs(clock) {
      if (!clock.jobs) {
        return;
      }
      for (let i = 0; i < clock.jobs.length; i++) {
        const job = clock.jobs[i];
        job.func.apply(null, job.args);
        checkIsNearInfiniteLimit(clock, i);
        if (clock.loopLimit && i > clock.loopLimit) {
          throw getInfiniteLoopError(clock, job);
        }
      }
      resetIsNearInfiniteLimit();
      clock.jobs = [];
    }
    function addTimer(clock, timer) {
      if (timer.func === void 0) {
        throw new Error("Callback must be provided to timer calls");
      }
      if (addTimerReturnsObject) {
        if (typeof timer.func !== "function") {
          throw new TypeError(
            `[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${timer.func} of type ${typeof timer.func}`
          );
        }
      }
      if (isNearInfiniteLimit) {
        timer.error = new Error();
      }
      timer.type = timer.immediate ? "Immediate" : "Timeout";
      if (timer.hasOwnProperty("delay")) {
        if (typeof timer.delay !== "number") {
          timer.delay = parseInt(timer.delay, 10);
        }
        if (!isNumberFinite(timer.delay)) {
          timer.delay = 0;
        }
        timer.delay = timer.delay > maxTimeout ? 1 : timer.delay;
        timer.delay = Math.max(0, timer.delay);
      }
      if (timer.hasOwnProperty("interval")) {
        timer.type = "Interval";
        timer.interval = timer.interval > maxTimeout ? 1 : timer.interval;
      }
      if (timer.hasOwnProperty("animation")) {
        timer.type = "AnimationFrame";
        timer.animation = true;
      }
      if (timer.hasOwnProperty("idleCallback")) {
        timer.type = "IdleCallback";
        timer.idleCallback = true;
      }
      if (!clock.timers) {
        clock.timers = {};
      }
      timer.id = uniqueTimerId++;
      timer.createdAt = clock.now;
      timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));
      clock.timers[timer.id] = timer;
      if (addTimerReturnsObject) {
        const res = {
          refed: true,
          ref: function() {
            this.refed = true;
            return res;
          },
          unref: function() {
            this.refed = false;
            return res;
          },
          hasRef: function() {
            return this.refed;
          },
          refresh: function() {
            timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));
            clock.timers[timer.id] = timer;
            return res;
          },
          [Symbol.toPrimitive]: function() {
            return timer.id;
          }
        };
        return res;
      }
      return timer.id;
    }
    function compareTimers(a, b2) {
      if (a.callAt < b2.callAt) {
        return -1;
      }
      if (a.callAt > b2.callAt) {
        return 1;
      }
      if (a.immediate && !b2.immediate) {
        return -1;
      }
      if (!a.immediate && b2.immediate) {
        return 1;
      }
      if (a.createdAt < b2.createdAt) {
        return -1;
      }
      if (a.createdAt > b2.createdAt) {
        return 1;
      }
      if (a.id < b2.id) {
        return -1;
      }
      if (a.id > b2.id) {
        return 1;
      }
    }
    function firstTimerInRange(clock, from, to) {
      const timers2 = clock.timers;
      let timer = null;
      let id, isInRange;
      for (id in timers2) {
        if (timers2.hasOwnProperty(id)) {
          isInRange = inRange(from, to, timers2[id]);
          if (isInRange && (!timer || compareTimers(timer, timers2[id]) === 1)) {
            timer = timers2[id];
          }
        }
      }
      return timer;
    }
    function firstTimer(clock) {
      const timers2 = clock.timers;
      let timer = null;
      let id;
      for (id in timers2) {
        if (timers2.hasOwnProperty(id)) {
          if (!timer || compareTimers(timer, timers2[id]) === 1) {
            timer = timers2[id];
          }
        }
      }
      return timer;
    }
    function lastTimer(clock) {
      const timers2 = clock.timers;
      let timer = null;
      let id;
      for (id in timers2) {
        if (timers2.hasOwnProperty(id)) {
          if (!timer || compareTimers(timer, timers2[id]) === -1) {
            timer = timers2[id];
          }
        }
      }
      return timer;
    }
    function callTimer(clock, timer) {
      if (typeof timer.interval === "number") {
        clock.timers[timer.id].callAt += timer.interval;
      } else {
        delete clock.timers[timer.id];
      }
      if (typeof timer.func === "function") {
        timer.func.apply(null, timer.args);
      } else {
        const eval2 = eval;
        (function() {
          eval2(timer.func);
        })();
      }
    }
    function getClearHandler(ttype) {
      if (ttype === "IdleCallback" || ttype === "AnimationFrame") {
        return `cancel${ttype}`;
      }
      return `clear${ttype}`;
    }
    function getScheduleHandler(ttype) {
      if (ttype === "IdleCallback" || ttype === "AnimationFrame") {
        return `request${ttype}`;
      }
      return `set${ttype}`;
    }
    function createWarnOnce() {
      let calls = 0;
      return function(msg) {
        !calls++ && console.warn(msg);
      };
    }
    const warnOnce = createWarnOnce();
    function clearTimer(clock, timerId, ttype) {
      if (!timerId) {
        return;
      }
      if (!clock.timers) {
        clock.timers = {};
      }
      const id = Number(timerId);
      if (Number.isNaN(id) || id < idCounterStart) {
        const handlerName = getClearHandler(ttype);
        if (clock.shouldClearNativeTimers === true) {
          const nativeHandler = clock[`_${handlerName}`];
          return typeof nativeHandler === "function" ? nativeHandler(timerId) : void 0;
        }
        warnOnce(
          `FakeTimers: ${handlerName} was invoked to clear a native timer instead of one created by this library.
To automatically clean-up native timers, use \`shouldClearNativeTimers\`.`
        );
      }
      if (clock.timers.hasOwnProperty(id)) {
        const timer = clock.timers[id];
        if (timer.type === ttype || timer.type === "Timeout" && ttype === "Interval" || timer.type === "Interval" && ttype === "Timeout") {
          delete clock.timers[id];
        } else {
          const clear = getClearHandler(ttype);
          const schedule = getScheduleHandler(timer.type);
          throw new Error(
            `Cannot clear timer: timer created with ${schedule}() but cleared with ${clear}()`
          );
        }
      }
    }
    function uninstall(clock, config2) {
      let method, i, l;
      const installedHrTime = "_hrtime";
      const installedNextTick = "_nextTick";
      for (i = 0, l = clock.methods.length; i < l; i++) {
        method = clock.methods[i];
        if (method === "hrtime" && _global.process) {
          _global.process.hrtime = clock[installedHrTime];
        } else if (method === "nextTick" && _global.process) {
          _global.process.nextTick = clock[installedNextTick];
        } else if (method === "performance") {
          const originalPerfDescriptor = Object.getOwnPropertyDescriptor(
            clock,
            `_${method}`
          );
          if (originalPerfDescriptor && originalPerfDescriptor.get && !originalPerfDescriptor.set) {
            Object.defineProperty(
              _global,
              method,
              originalPerfDescriptor
            );
          } else if (originalPerfDescriptor.configurable) {
            _global[method] = clock[`_${method}`];
          }
        } else {
          if (_global[method] && _global[method].hadOwnProperty) {
            _global[method] = clock[`_${method}`];
          } else {
            try {
              delete _global[method];
            } catch (ignore) {
            }
          }
        }
        if (clock.timersModuleMethods !== void 0) {
          for (let j = 0; j < clock.timersModuleMethods.length; j++) {
            const entry = clock.timersModuleMethods[j];
            timersModule[entry.methodName] = entry.original;
          }
        }
      }
      if (config2.shouldAdvanceTime === true) {
        _global.clearInterval(clock.attachedInterval);
      }
      clock.methods = [];
      if (!clock.timers) {
        return [];
      }
      return Object.keys(clock.timers).map(function mapper(key) {
        return clock.timers[key];
      });
    }
    function hijackMethod(target, method, clock) {
      clock[method].hadOwnProperty = Object.prototype.hasOwnProperty.call(
        target,
        method
      );
      clock[`_${method}`] = target[method];
      if (method === "Date") {
        const date = mirrorDateProperties(clock[method], target[method]);
        target[method] = date;
      } else if (method === "performance") {
        const originalPerfDescriptor = Object.getOwnPropertyDescriptor(
          target,
          method
        );
        if (originalPerfDescriptor && originalPerfDescriptor.get && !originalPerfDescriptor.set) {
          Object.defineProperty(
            clock,
            `_${method}`,
            originalPerfDescriptor
          );
          const perfDescriptor = Object.getOwnPropertyDescriptor(
            clock,
            method
          );
          Object.defineProperty(target, method, perfDescriptor);
        } else {
          target[method] = clock[method];
        }
      } else {
        target[method] = function() {
          return clock[method].apply(clock, arguments);
        };
        Object.defineProperties(
          target[method],
          Object.getOwnPropertyDescriptors(clock[method])
        );
      }
      target[method].clock = clock;
    }
    function doIntervalTick(clock, advanceTimeDelta) {
      clock.tick(advanceTimeDelta);
    }
    const timers = {
      setTimeout: _global.setTimeout,
      clearTimeout: _global.clearTimeout,
      setInterval: _global.setInterval,
      clearInterval: _global.clearInterval,
      Date: _global.Date
    };
    if (setImmediatePresent) {
      timers.setImmediate = _global.setImmediate;
      timers.clearImmediate = _global.clearImmediate;
    }
    if (hrtimePresent) {
      timers.hrtime = _global.process.hrtime;
    }
    if (nextTickPresent) {
      timers.nextTick = _global.process.nextTick;
    }
    if (performancePresent) {
      timers.performance = _global.performance;
    }
    if (requestAnimationFramePresent) {
      timers.requestAnimationFrame = _global.requestAnimationFrame;
    }
    if (queueMicrotaskPresent) {
      timers.queueMicrotask = true;
    }
    if (cancelAnimationFramePresent) {
      timers.cancelAnimationFrame = _global.cancelAnimationFrame;
    }
    if (requestIdleCallbackPresent) {
      timers.requestIdleCallback = _global.requestIdleCallback;
    }
    if (cancelIdleCallbackPresent) {
      timers.cancelIdleCallback = _global.cancelIdleCallback;
    }
    const originalSetTimeout = _global.setImmediate || _global.setTimeout;
    function createClock(start, loopLimit) {
      start = Math.floor(getEpoch(start));
      loopLimit = loopLimit || 1e3;
      let nanos = 0;
      const adjustedSystemTime = [0, 0];
      if (NativeDate === void 0) {
        throw new Error(
          "The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)"
        );
      }
      const clock = {
        now: start,
        Date: createDate(),
        loopLimit
      };
      clock.Date.clock = clock;
      function getTimeToNextFrame() {
        return 16 - (clock.now - start) % 16;
      }
      function hrtime(prev) {
        const millisSinceStart = clock.now - adjustedSystemTime[0] - start;
        const secsSinceStart = Math.floor(millisSinceStart / 1e3);
        const remainderInNanos = (millisSinceStart - secsSinceStart * 1e3) * 1e6 + nanos - adjustedSystemTime[1];
        if (Array.isArray(prev)) {
          if (prev[1] > 1e9) {
            throw new TypeError(
              "Number of nanoseconds can't exceed a billion"
            );
          }
          const oldSecs = prev[0];
          let nanoDiff = remainderInNanos - prev[1];
          let secDiff = secsSinceStart - oldSecs;
          if (nanoDiff < 0) {
            nanoDiff += 1e9;
            secDiff -= 1;
          }
          return [secDiff, nanoDiff];
        }
        return [secsSinceStart, remainderInNanos];
      }
      function fakePerformanceNow() {
        const hrt = hrtime();
        const millis = hrt[0] * 1e3 + hrt[1] / 1e6;
        return millis;
      }
      if (hrtimeBigintPresent) {
        hrtime.bigint = function() {
          const parts = hrtime();
          return BigInt(parts[0]) * BigInt(1e9) + BigInt(parts[1]);
        };
      }
      clock.requestIdleCallback = function requestIdleCallback(func, timeout) {
        let timeToNextIdlePeriod = 0;
        if (clock.countTimers() > 0) {
          timeToNextIdlePeriod = 50;
        }
        const result = addTimer(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 2),
          delay: typeof timeout === "undefined" ? timeToNextIdlePeriod : Math.min(timeout, timeToNextIdlePeriod),
          idleCallback: true
        });
        return Number(result);
      };
      clock.cancelIdleCallback = function cancelIdleCallback(timerId) {
        return clearTimer(clock, timerId, "IdleCallback");
      };
      clock.setTimeout = function setTimeout2(func, timeout) {
        return addTimer(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 2),
          delay: timeout
        });
      };
      if (typeof _global.Promise !== "undefined" && utilPromisify) {
        clock.setTimeout[utilPromisify.custom] = function promisifiedSetTimeout(timeout, arg) {
          return new _global.Promise(function setTimeoutExecutor(resolve2) {
            addTimer(clock, {
              func: resolve2,
              args: [arg],
              delay: timeout
            });
          });
        };
      }
      clock.clearTimeout = function clearTimeout(timerId) {
        return clearTimer(clock, timerId, "Timeout");
      };
      clock.nextTick = function nextTick(func) {
        return enqueueJob(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 1),
          error: isNearInfiniteLimit ? new Error() : null
        });
      };
      clock.queueMicrotask = function queueMicrotask(func) {
        return clock.nextTick(func);
      };
      clock.setInterval = function setInterval2(func, timeout) {
        timeout = parseInt(timeout, 10);
        return addTimer(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 2),
          delay: timeout,
          interval: timeout
        });
      };
      clock.clearInterval = function clearInterval2(timerId) {
        return clearTimer(clock, timerId, "Interval");
      };
      if (setImmediatePresent) {
        clock.setImmediate = function setImmediate2(func) {
          return addTimer(clock, {
            func,
            args: Array.prototype.slice.call(arguments, 1),
            immediate: true
          });
        };
        if (typeof _global.Promise !== "undefined" && utilPromisify) {
          clock.setImmediate[utilPromisify.custom] = function promisifiedSetImmediate(arg) {
            return new _global.Promise(
              function setImmediateExecutor(resolve2) {
                addTimer(clock, {
                  func: resolve2,
                  args: [arg],
                  immediate: true
                });
              }
            );
          };
        }
        clock.clearImmediate = function clearImmediate(timerId) {
          return clearTimer(clock, timerId, "Immediate");
        };
      }
      clock.countTimers = function countTimers() {
        return Object.keys(clock.timers || {}).length + (clock.jobs || []).length;
      };
      clock.requestAnimationFrame = function requestAnimationFrame(func) {
        const result = addTimer(clock, {
          func,
          delay: getTimeToNextFrame(),
          get args() {
            return [fakePerformanceNow()];
          },
          animation: true
        });
        return Number(result);
      };
      clock.cancelAnimationFrame = function cancelAnimationFrame(timerId) {
        return clearTimer(clock, timerId, "AnimationFrame");
      };
      clock.runMicrotasks = function runMicrotasks() {
        runJobs(clock);
      };
      function doTick(tickValue, isAsync, resolve2, reject) {
        const msFloat = typeof tickValue === "number" ? tickValue : parseTime(tickValue);
        const ms = Math.floor(msFloat);
        const remainder = nanoRemainder(msFloat);
        let nanosTotal = nanos + remainder;
        let tickTo = clock.now + ms;
        if (msFloat < 0) {
          throw new TypeError("Negative ticks are not supported");
        }
        if (nanosTotal >= 1e6) {
          tickTo += 1;
          nanosTotal -= 1e6;
        }
        nanos = nanosTotal;
        let tickFrom = clock.now;
        let previous = clock.now;
        let timer, firstException, oldNow, nextPromiseTick, compensationCheck, postTimerCall;
        clock.duringTick = true;
        oldNow = clock.now;
        runJobs(clock);
        if (oldNow !== clock.now) {
          tickFrom += clock.now - oldNow;
          tickTo += clock.now - oldNow;
        }
        function doTickInner() {
          timer = firstTimerInRange(clock, tickFrom, tickTo);
          while (timer && tickFrom <= tickTo) {
            if (clock.timers[timer.id]) {
              tickFrom = timer.callAt;
              clock.now = timer.callAt;
              oldNow = clock.now;
              try {
                runJobs(clock);
                callTimer(clock, timer);
              } catch (e) {
                firstException = firstException || e;
              }
              if (isAsync) {
                originalSetTimeout(nextPromiseTick);
                return;
              }
              compensationCheck();
            }
            postTimerCall();
          }
          oldNow = clock.now;
          runJobs(clock);
          if (oldNow !== clock.now) {
            tickFrom += clock.now - oldNow;
            tickTo += clock.now - oldNow;
          }
          clock.duringTick = false;
          timer = firstTimerInRange(clock, tickFrom, tickTo);
          if (timer) {
            try {
              clock.tick(tickTo - clock.now);
            } catch (e) {
              firstException = firstException || e;
            }
          } else {
            clock.now = tickTo;
            nanos = nanosTotal;
          }
          if (firstException) {
            throw firstException;
          }
          if (isAsync) {
            resolve2(clock.now);
          } else {
            return clock.now;
          }
        }
        nextPromiseTick = isAsync && function() {
          try {
            compensationCheck();
            postTimerCall();
            doTickInner();
          } catch (e) {
            reject(e);
          }
        };
        compensationCheck = function() {
          if (oldNow !== clock.now) {
            tickFrom += clock.now - oldNow;
            tickTo += clock.now - oldNow;
            previous += clock.now - oldNow;
          }
        };
        postTimerCall = function() {
          timer = firstTimerInRange(clock, previous, tickTo);
          previous = tickFrom;
        };
        return doTickInner();
      }
      clock.tick = function tick(tickValue) {
        return doTick(tickValue, false);
      };
      if (typeof _global.Promise !== "undefined") {
        clock.tickAsync = function tickAsync(tickValue) {
          return new _global.Promise(function(resolve2, reject) {
            originalSetTimeout(function() {
              try {
                doTick(tickValue, true, resolve2, reject);
              } catch (e) {
                reject(e);
              }
            });
          });
        };
      }
      clock.next = function next() {
        runJobs(clock);
        const timer = firstTimer(clock);
        if (!timer) {
          return clock.now;
        }
        clock.duringTick = true;
        try {
          clock.now = timer.callAt;
          callTimer(clock, timer);
          runJobs(clock);
          return clock.now;
        } finally {
          clock.duringTick = false;
        }
      };
      if (typeof _global.Promise !== "undefined") {
        clock.nextAsync = function nextAsync() {
          return new _global.Promise(function(resolve2, reject) {
            originalSetTimeout(function() {
              try {
                const timer = firstTimer(clock);
                if (!timer) {
                  resolve2(clock.now);
                  return;
                }
                let err;
                clock.duringTick = true;
                clock.now = timer.callAt;
                try {
                  callTimer(clock, timer);
                } catch (e) {
                  err = e;
                }
                clock.duringTick = false;
                originalSetTimeout(function() {
                  if (err) {
                    reject(err);
                  } else {
                    resolve2(clock.now);
                  }
                });
              } catch (e) {
                reject(e);
              }
            });
          });
        };
      }
      clock.runAll = function runAll() {
        let numTimers, i;
        runJobs(clock);
        for (i = 0; i < clock.loopLimit; i++) {
          if (!clock.timers) {
            resetIsNearInfiniteLimit();
            return clock.now;
          }
          numTimers = Object.keys(clock.timers).length;
          if (numTimers === 0) {
            resetIsNearInfiniteLimit();
            return clock.now;
          }
          clock.next();
          checkIsNearInfiniteLimit(clock, i);
        }
        const excessJob = firstTimer(clock);
        throw getInfiniteLoopError(clock, excessJob);
      };
      clock.runToFrame = function runToFrame() {
        return clock.tick(getTimeToNextFrame());
      };
      if (typeof _global.Promise !== "undefined") {
        clock.runAllAsync = function runAllAsync() {
          return new _global.Promise(function(resolve2, reject) {
            let i = 0;
            function doRun() {
              originalSetTimeout(function() {
                try {
                  let numTimers;
                  if (i < clock.loopLimit) {
                    if (!clock.timers) {
                      resetIsNearInfiniteLimit();
                      resolve2(clock.now);
                      return;
                    }
                    numTimers = Object.keys(
                      clock.timers
                    ).length;
                    if (numTimers === 0) {
                      resetIsNearInfiniteLimit();
                      resolve2(clock.now);
                      return;
                    }
                    clock.next();
                    i++;
                    doRun();
                    checkIsNearInfiniteLimit(clock, i);
                    return;
                  }
                  const excessJob = firstTimer(clock);
                  reject(getInfiniteLoopError(clock, excessJob));
                } catch (e) {
                  reject(e);
                }
              });
            }
            doRun();
          });
        };
      }
      clock.runToLast = function runToLast() {
        const timer = lastTimer(clock);
        if (!timer) {
          runJobs(clock);
          return clock.now;
        }
        return clock.tick(timer.callAt - clock.now);
      };
      if (typeof _global.Promise !== "undefined") {
        clock.runToLastAsync = function runToLastAsync() {
          return new _global.Promise(function(resolve2, reject) {
            originalSetTimeout(function() {
              try {
                const timer = lastTimer(clock);
                if (!timer) {
                  resolve2(clock.now);
                }
                resolve2(clock.tickAsync(timer.callAt - clock.now));
              } catch (e) {
                reject(e);
              }
            });
          });
        };
      }
      clock.reset = function reset() {
        nanos = 0;
        clock.timers = {};
        clock.jobs = [];
        clock.now = start;
      };
      clock.setSystemTime = function setSystemTime(systemTime) {
        const newNow = getEpoch(systemTime);
        const difference = newNow - clock.now;
        let id, timer;
        adjustedSystemTime[0] = adjustedSystemTime[0] + difference;
        adjustedSystemTime[1] = adjustedSystemTime[1] + nanos;
        clock.now = newNow;
        nanos = 0;
        for (id in clock.timers) {
          if (clock.timers.hasOwnProperty(id)) {
            timer = clock.timers[id];
            timer.createdAt += difference;
            timer.callAt += difference;
          }
        }
      };
      clock.jump = function jump(tickValue) {
        const msFloat = typeof tickValue === "number" ? tickValue : parseTime(tickValue);
        const ms = Math.floor(msFloat);
        for (const timer of Object.values(clock.timers)) {
          if (clock.now + ms > timer.callAt) {
            timer.callAt = clock.now + ms;
          }
        }
        clock.tick(ms);
      };
      if (performancePresent) {
        clock.performance = /* @__PURE__ */ Object.create(null);
        clock.performance.now = fakePerformanceNow;
      }
      if (hrtimePresent) {
        clock.hrtime = hrtime;
      }
      return clock;
    }
    function install(config2) {
      if (arguments.length > 1 || config2 instanceof Date || Array.isArray(config2) || typeof config2 === "number") {
        throw new TypeError(
          `FakeTimers.install called with ${String(
            config2
          )} install requires an object parameter`
        );
      }
      if (_global.Date.isFake === true) {
        throw new TypeError(
          "Can't install fake timers twice on the same global object."
        );
      }
      config2 = typeof config2 !== "undefined" ? config2 : {};
      config2.shouldAdvanceTime = config2.shouldAdvanceTime || false;
      config2.advanceTimeDelta = config2.advanceTimeDelta || 20;
      config2.shouldClearNativeTimers = config2.shouldClearNativeTimers || false;
      if (config2.target) {
        throw new TypeError(
          "config.target is no longer supported. Use `withGlobal(target)` instead."
        );
      }
      let i, l;
      const clock = createClock(config2.now, config2.loopLimit);
      clock.shouldClearNativeTimers = config2.shouldClearNativeTimers;
      clock.uninstall = function() {
        return uninstall(clock, config2);
      };
      clock.methods = config2.toFake || [];
      if (clock.methods.length === 0) {
        clock.methods = Object.keys(timers).filter(function(key) {
          return key !== "nextTick" && key !== "queueMicrotask";
        });
      }
      if (config2.shouldAdvanceTime === true) {
        const intervalTick = doIntervalTick.bind(
          null,
          clock,
          config2.advanceTimeDelta
        );
        const intervalId = _global.setInterval(
          intervalTick,
          config2.advanceTimeDelta
        );
        clock.attachedInterval = intervalId;
      }
      if (clock.methods.includes("performance")) {
        const proto = (() => {
          if (hasPerformancePrototype) {
            return _global.Performance.prototype;
          }
          if (hasPerformanceConstructorPrototype) {
            return _global.performance.constructor.prototype;
          }
        })();
        if (proto) {
          Object.getOwnPropertyNames(proto).forEach(function(name) {
            if (name !== "now") {
              clock.performance[name] = name.indexOf("getEntries") === 0 ? NOOP_ARRAY : NOOP;
            }
          });
        } else if ((config2.toFake || []).includes("performance")) {
          throw new ReferenceError(
            "non-existent performance object cannot be faked"
          );
        }
      }
      if (_global === globalObject2 && timersModule) {
        clock.timersModuleMethods = [];
      }
      for (i = 0, l = clock.methods.length; i < l; i++) {
        const nameOfMethodToReplace = clock.methods[i];
        if (nameOfMethodToReplace === "hrtime") {
          if (_global.process && typeof _global.process.hrtime === "function") {
            hijackMethod(_global.process, nameOfMethodToReplace, clock);
          }
        } else if (nameOfMethodToReplace === "nextTick") {
          if (_global.process && typeof _global.process.nextTick === "function") {
            hijackMethod(_global.process, nameOfMethodToReplace, clock);
          }
        } else {
          hijackMethod(_global, nameOfMethodToReplace, clock);
        }
        if (clock.timersModuleMethods !== void 0 && timersModule[nameOfMethodToReplace]) {
          const original = timersModule[nameOfMethodToReplace];
          clock.timersModuleMethods.push({
            methodName: nameOfMethodToReplace,
            original
          });
          timersModule[nameOfMethodToReplace] = _global[nameOfMethodToReplace];
        }
      }
      return clock;
    }
    return {
      timers,
      createClock,
      install,
      withGlobal
    };
  }
  const defaultImplementation = withGlobal(globalObject2);
  exports2.timers = defaultImplementation.timers;
  exports2.createClock = defaultImplementation.createClock;
  exports2.install = defaultImplementation.install;
  exports2.withGlobal = withGlobal;
})(fakeTimersSrc, fakeTimersSrc.exports);
var fakeTimersSrcExports = fakeTimersSrc.exports;
var FakeTimers = class {
  constructor({
    global: global3,
    config: config2
  }) {
    __publicField(this, "_clock");
    __publicField(this, "_fakingTime");
    __publicField(this, "_fakingDate");
    __publicField(this, "_fakeTimers");
    __publicField(this, "_userConfig");
    __publicField(this, "_now", RealDate.now);
    this._userConfig = config2;
    this._fakingDate = false;
    this._fakingTime = false;
    this._fakeTimers = fakeTimersSrcExports.withGlobal(global3);
  }
  clearAllTimers() {
    if (this._fakingTime)
      this._clock.reset();
  }
  dispose() {
    this.useRealTimers();
  }
  runAllTimers() {
    if (this._checkFakeTimers())
      this._clock.runAll();
  }
  runAllTimersAsync() {
    return __async(this, null, function* () {
      if (this._checkFakeTimers())
        yield this._clock.runAllAsync();
    });
  }
  runOnlyPendingTimers() {
    if (this._checkFakeTimers())
      this._clock.runToLast();
  }
  runOnlyPendingTimersAsync() {
    return __async(this, null, function* () {
      if (this._checkFakeTimers())
        yield this._clock.runToLastAsync();
    });
  }
  advanceTimersToNextTimer(steps = 1) {
    if (this._checkFakeTimers()) {
      for (let i = steps; i > 0; i--) {
        this._clock.next();
        this._clock.tick(0);
        if (this._clock.countTimers() === 0)
          break;
      }
    }
  }
  advanceTimersToNextTimerAsync(steps = 1) {
    return __async(this, null, function* () {
      if (this._checkFakeTimers()) {
        for (let i = steps; i > 0; i--) {
          yield this._clock.nextAsync();
          this._clock.tick(0);
          if (this._clock.countTimers() === 0)
            break;
        }
      }
    });
  }
  advanceTimersByTime(msToRun) {
    if (this._checkFakeTimers())
      this._clock.tick(msToRun);
  }
  advanceTimersByTimeAsync(msToRun) {
    return __async(this, null, function* () {
      if (this._checkFakeTimers())
        yield this._clock.tickAsync(msToRun);
    });
  }
  runAllTicks() {
    if (this._checkFakeTimers()) {
      this._clock.runMicrotasks();
    }
  }
  useRealTimers() {
    if (this._fakingDate) {
      resetDate();
      this._fakingDate = false;
    }
    if (this._fakingTime) {
      this._clock.uninstall();
      this._fakingTime = false;
    }
  }
  useFakeTimers() {
    if (this._fakingDate) {
      throw new Error(
        '"setSystemTime" was called already and date was mocked. Reset timers using `vi.useRealTimers()` if you want to use fake timers again.'
      );
    }
    if (!this._fakingTime) {
      const toFake = Object.keys(this._fakeTimers.timers);
      this._clock = this._fakeTimers.install(__spreadValues({
        now: Date.now(),
        toFake
      }, this._userConfig));
      this._fakingTime = true;
    }
  }
  reset() {
    if (this._checkFakeTimers()) {
      const { now: now3 } = this._clock;
      this._clock.reset();
      this._clock.setSystemTime(now3);
    }
  }
  setSystemTime(now3) {
    if (this._fakingTime) {
      this._clock.setSystemTime(now3);
    } else {
      mockDate(now3 != null ? now3 : this.getRealSystemTime());
      this._fakingDate = true;
    }
  }
  getRealSystemTime() {
    return this._now();
  }
  getTimerCount() {
    if (this._checkFakeTimers())
      return this._clock.countTimers();
    return 0;
  }
  configure(config2) {
    this._userConfig = config2;
  }
  isFakeTimers() {
    return this._fakingTime;
  }
  _checkFakeTimers() {
    if (!this._fakingTime) {
      throw new Error(
        'Timers are not mocked. Try calling "vi.useFakeTimers()" first.'
      );
    }
    return this._fakingTime;
  }
};
function copyStackTrace(target, source) {
  if (source.stack !== void 0)
    target.stack = source.stack.replace(source.message, target.message);
  return target;
}
function waitFor(callback, options = {}) {
  const { setTimeout: setTimeout2, setInterval: setInterval2, clearTimeout, clearInterval: clearInterval2 } = getSafeTimers();
  const { interval = 50, timeout = 1e3 } = typeof options === "number" ? { timeout: options } : options;
  const STACK_TRACE_ERROR = new Error("STACK_TRACE_ERROR");
  return new Promise((resolve2, reject) => {
    let lastError;
    let promiseStatus = "idle";
    let timeoutId;
    let intervalId;
    const onResolve = (result) => {
      if (timeoutId)
        clearTimeout(timeoutId);
      if (intervalId)
        clearInterval2(intervalId);
      resolve2(result);
    };
    const handleTimeout = () => {
      let error = lastError;
      if (!error)
        error = copyStackTrace(new Error("Timed out in waitFor!"), STACK_TRACE_ERROR);
      reject(error);
    };
    const checkCallback = () => {
      if (vi.isFakeTimers())
        vi.advanceTimersByTime(interval);
      if (promiseStatus === "pending")
        return;
      try {
        const result = callback();
        if (result !== null && typeof result === "object" && typeof result.then === "function") {
          const thenable = result;
          promiseStatus = "pending";
          thenable.then(
            (resolvedValue) => {
              promiseStatus = "resolved";
              onResolve(resolvedValue);
            },
            (rejectedValue) => {
              promiseStatus = "rejected";
              lastError = rejectedValue;
            }
          );
        } else {
          onResolve(result);
          return true;
        }
      } catch (error) {
        lastError = error;
      }
    };
    if (checkCallback() === true)
      return;
    timeoutId = setTimeout2(handleTimeout, timeout);
    intervalId = setInterval2(checkCallback, interval);
  });
}
function waitUntil(callback, options = {}) {
  const { setTimeout: setTimeout2, setInterval: setInterval2, clearTimeout, clearInterval: clearInterval2 } = getSafeTimers();
  const { interval = 50, timeout = 1e3 } = typeof options === "number" ? { timeout: options } : options;
  const STACK_TRACE_ERROR = new Error("STACK_TRACE_ERROR");
  return new Promise((resolve2, reject) => {
    let promiseStatus = "idle";
    let timeoutId;
    let intervalId;
    const onReject = (error) => {
      if (!error)
        error = copyStackTrace(new Error("Timed out in waitUntil!"), STACK_TRACE_ERROR);
      reject(error);
    };
    const onResolve = (result) => {
      if (!result)
        return;
      if (timeoutId)
        clearTimeout(timeoutId);
      if (intervalId)
        clearInterval2(intervalId);
      resolve2(result);
      return true;
    };
    const checkCallback = () => {
      if (vi.isFakeTimers())
        vi.advanceTimersByTime(interval);
      if (promiseStatus === "pending")
        return;
      try {
        const result = callback();
        if (result !== null && typeof result === "object" && typeof result.then === "function") {
          const thenable = result;
          promiseStatus = "pending";
          thenable.then(
            (resolvedValue) => {
              promiseStatus = "resolved";
              onResolve(resolvedValue);
            },
            (rejectedValue) => {
              promiseStatus = "rejected";
              onReject(rejectedValue);
            }
          );
        } else {
          return onResolve(result);
        }
      } catch (error) {
        onReject(error);
      }
    };
    if (checkCallback() === true)
      return;
    timeoutId = setTimeout2(onReject, timeout);
    intervalId = setInterval2(checkCallback, interval);
  });
}
function createVitest() {
  const _mocker = typeof __vitest_mocker__ !== "undefined" ? __vitest_mocker__ : new Proxy({}, {
    get(_, name) {
      throw new Error(
        `Vitest mocker was not initialized in this environment. vi.${String(name)}() is forbidden.`
      );
    }
  });
  let _mockedDate = null;
  let _config = null;
  const workerState = getWorkerState();
  if (!workerState) {
    const errorMsg = 'Vitest failed to access its internal state.\n\nOne of the following is possible:\n- "vitest" is imported directly without running "vitest" command\n- "vitest" is imported inside "globalSetup" (to fix this, use "setupFiles" instead, because "globalSetup" runs in a different context)\n- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues\n';
    throw new Error(errorMsg);
  }
  const _timers = new FakeTimers({
    global: globalThis,
    config: workerState.config.fakeTimers
  });
  const _stubsGlobal = /* @__PURE__ */ new Map();
  const _stubsEnv = /* @__PURE__ */ new Map();
  const getImporter = () => {
    const stackTrace = createSimpleStackTrace({ stackTraceLimit: 4 });
    const importerStack = stackTrace.split("\n")[4];
    const stack = parseSingleStack(importerStack);
    return (stack == null ? void 0 : stack.file) || "";
  };
  const utils = {
    useFakeTimers(config2) {
      if (config2) {
        _timers.configure(config2);
      } else {
        const workerState2 = getWorkerState();
        _timers.configure(workerState2.config.fakeTimers);
      }
      _timers.useFakeTimers();
      return utils;
    },
    isFakeTimers() {
      return _timers.isFakeTimers();
    },
    useRealTimers() {
      _timers.useRealTimers();
      _mockedDate = null;
      return utils;
    },
    runOnlyPendingTimers() {
      _timers.runOnlyPendingTimers();
      return utils;
    },
    runOnlyPendingTimersAsync() {
      return __async(this, null, function* () {
        yield _timers.runOnlyPendingTimersAsync();
        return utils;
      });
    },
    runAllTimers() {
      _timers.runAllTimers();
      return utils;
    },
    runAllTimersAsync() {
      return __async(this, null, function* () {
        yield _timers.runAllTimersAsync();
        return utils;
      });
    },
    runAllTicks() {
      _timers.runAllTicks();
      return utils;
    },
    advanceTimersByTime(ms) {
      _timers.advanceTimersByTime(ms);
      return utils;
    },
    advanceTimersByTimeAsync(ms) {
      return __async(this, null, function* () {
        yield _timers.advanceTimersByTimeAsync(ms);
        return utils;
      });
    },
    advanceTimersToNextTimer() {
      _timers.advanceTimersToNextTimer();
      return utils;
    },
    advanceTimersToNextTimerAsync() {
      return __async(this, null, function* () {
        yield _timers.advanceTimersToNextTimerAsync();
        return utils;
      });
    },
    getTimerCount() {
      return _timers.getTimerCount();
    },
    setSystemTime(time) {
      const date = time instanceof Date ? time : new Date(time);
      _mockedDate = date;
      _timers.setSystemTime(date);
      return utils;
    },
    getMockedSystemTime() {
      return _mockedDate;
    },
    getRealSystemTime() {
      return _timers.getRealSystemTime();
    },
    clearAllTimers() {
      _timers.clearAllTimers();
      return utils;
    },
    // mocks
    spyOn,
    fn,
    waitFor,
    waitUntil,
    hoisted(factory) {
      assertTypes(factory, '"vi.hoisted" factory', ["function"]);
      return factory();
    },
    mock(path, factory) {
      const importer = getImporter();
      _mocker.queueMock(
        path,
        importer,
        factory ? () => factory(() => _mocker.importActual(path, importer)) : void 0
      );
    },
    unmock(path) {
      _mocker.queueUnmock(path, getImporter());
    },
    doMock(path, factory) {
      _mocker.queueMock(path, getImporter(), factory);
    },
    doUnmock(path) {
      _mocker.queueUnmock(path, getImporter());
    },
    importActual(path) {
      return __async(this, null, function* () {
        return _mocker.importActual(path, getImporter());
      });
    },
    importMock(path) {
      return __async(this, null, function* () {
        return _mocker.importMock(path, getImporter());
      });
    },
    mocked(item, _options = {}) {
      return item;
    },
    isMockFunction(fn2) {
      return isMockFunction(fn2);
    },
    clearAllMocks() {
      spies.forEach((spy) => spy.mockClear());
      return utils;
    },
    resetAllMocks() {
      spies.forEach((spy) => spy.mockReset());
      return utils;
    },
    restoreAllMocks() {
      spies.forEach((spy) => spy.mockRestore());
      return utils;
    },
    stubGlobal(name, value) {
      if (!_stubsGlobal.has(name))
        _stubsGlobal.set(name, Object.getOwnPropertyDescriptor(globalThis, name));
      Object.defineProperty(globalThis, name, {
        value,
        writable: true,
        configurable: true,
        enumerable: true
      });
      return utils;
    },
    stubEnv(name, value) {
      if (!_stubsEnv.has(name))
        _stubsEnv.set(name, process.env[name]);
      process.env[name] = value;
      return utils;
    },
    unstubAllGlobals() {
      _stubsGlobal.forEach((original, name) => {
        if (!original)
          Reflect.deleteProperty(globalThis, name);
        else
          Object.defineProperty(globalThis, name, original);
      });
      _stubsGlobal.clear();
      return utils;
    },
    unstubAllEnvs() {
      _stubsEnv.forEach((original, name) => {
        if (original === void 0)
          delete process.env[name];
        else
          process.env[name] = original;
      });
      _stubsEnv.clear();
      return utils;
    },
    resetModules() {
      const state = getWorkerState();
      resetModules(state.moduleCache);
      return utils;
    },
    dynamicImportSettled() {
      return __async(this, null, function* () {
        return waitForImportsToResolve();
      });
    },
    setConfig(config2) {
      const state = getWorkerState();
      if (!_config)
        _config = __spreadValues({}, state.config);
      Object.assign(state.config, config2);
    },
    resetConfig() {
      if (_config) {
        const state = getWorkerState();
        Object.assign(state.config, _config);
      }
    }
  };
  return utils;
}
var vitest = createVitest();
var vi = vitest;

// node_modules/vitest/dist/vendor-run-once.3e5ef7d7.js
var filesCount = /* @__PURE__ */ new Map();
var cache = /* @__PURE__ */ new Map();
function runOnce(fn2, key) {
  const filepath = getWorkerState().filepath || "__unknown_files__";
  if (!key) {
    filesCount.set(filepath, (filesCount.get(filepath) || 0) + 1);
    key = String(filesCount.get(filepath));
  }
  const id = `${filepath}:${key}`;
  if (!cache.has(id))
    cache.set(id, fn2());
  return cache.get(id);
}
function isFirstRun() {
  let firstRun = false;
  runOnce(() => {
    firstRun = true;
  }, "__vitest_first_run__");
  return firstRun;
}

// node_modules/vitest/dist/vendor-index.7646b3af.js
function getRunningMode() {
  return process.env.VITEST_MODE === "WATCH" ? "watch" : "run";
}
function isWatchMode() {
  return getRunningMode() === "watch";
}
var dist = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.expectTypeOf = void 0;
  const fn2 = () => true;
  const expectTypeOf2 = (_actual) => {
    const nonFunctionProperties = [
      "parameters",
      "returns",
      "resolves",
      "not",
      "items",
      "constructorParameters",
      "thisParameter",
      "instance",
      "guards",
      "asserts",
      "branded"
    ];
    const obj = {
      /* eslint-disable mmkal/@typescript-eslint/no-unsafe-assignment */
      toBeAny: fn2,
      toBeUnknown: fn2,
      toBeNever: fn2,
      toBeFunction: fn2,
      toBeObject: fn2,
      toBeArray: fn2,
      toBeString: fn2,
      toBeNumber: fn2,
      toBeBoolean: fn2,
      toBeVoid: fn2,
      toBeSymbol: fn2,
      toBeNull: fn2,
      toBeUndefined: fn2,
      toBeNullable: fn2,
      toMatchTypeOf: fn2,
      toEqualTypeOf: fn2,
      toBeCallableWith: fn2,
      toBeConstructibleWith: fn2,
      /* eslint-enable mmkal/@typescript-eslint/no-unsafe-assignment */
      extract: exports2.expectTypeOf,
      exclude: exports2.expectTypeOf,
      toHaveProperty: exports2.expectTypeOf,
      parameter: exports2.expectTypeOf
    };
    const getterProperties = nonFunctionProperties;
    getterProperties.forEach((prop) => Object.defineProperty(obj, prop, { get: () => (0, exports2.expectTypeOf)({}) }));
    return obj;
  };
  exports2.expectTypeOf = expectTypeOf2;
})(dist);
function noop2() {
}
var assertType = noop2;
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  afterAll,
  afterEach,
  assert,
  assertType,
  beforeAll,
  beforeEach,
  bench,
  chai: chai_exports,
  createExpect,
  describe,
  expect: globalExpect,
  expectTypeOf: dist.expectTypeOf,
  getRunningMode,
  isFirstRun,
  isWatchMode,
  it,
  onTestFailed,
  runOnce,
  should,
  suite,
  test,
  vi,
  vitest
});

// node_modules/vitest/dist/index.js
var expectTypeOf = dist.expectTypeOf;

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

// src/app/user/UserService.ts
var UserService = class {
  constructor(repository) {
    this.repository = repository;
  }
  create(data) {
    return __async(this, null, function* () {
      const userAlreadyExists = yield this.repository.findByEmail(data.email);
      if (userAlreadyExists) {
        return CommonError.build(userAlreadyExists.message, STATUS_CODE.CONFLICT);
      }
      const user = __spreadProps(__spreadValues({}, data), {
        password: Crypt.encrypt(data.password)
      });
      return this.repository.create(user);
    });
  }
  update(id, data) {
    return __async(this, null, function* () {
      try {
        const userAlreadyExists = yield this.repository.findById(id);
        if (!userAlreadyExists) {
          return CommonError.build(
            userAlreadyExists.message,
            STATUS_CODE.NOT_FOUND
          );
        }
        const updated = {
          name: data.name,
          password: Crypt.encrypt(data.password),
          email: data.email
        };
        return yield this.repository.update(id, updated);
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  getFavoriteJobs(userId) {
    return __async(this, null, function* () {
      try {
        const user = yield this.repository.findById(userId);
        if (!user) {
          return CommonError.build("User not found", STATUS_CODE.NOT_FOUND);
        }
        const favoriteJobs = yield this.repository.getFavoriteJobs(user);
        return favoriteJobs || [];
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
  getUserSearchHistory(userId) {
    return __async(this, null, function* () {
      try {
        const user = yield this.repository.findById(userId);
        if (!user) {
          return CommonError.build("User not found", STATUS_CODE.NOT_FOUND);
        }
        const searchHistory = yield this.repository.getUserSearchHistory(user);
        return searchHistory || [];
      } catch (erro) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }
    });
  }
};

// src/app/user/UserService.spec.ts
var userRepositoryMock = {
  findByEmail: vi.fn(),
  create: vi.fn(),
  findById: vi.fn(),
  update: vi.fn(),
  getFavoriteJobs: vi.fn(),
  getUserSearchHistory: vi.fn()
};
var sut = new UserService(userRepositoryMock);
describe("UserService", () => {
  describe("create()", () => {
    it("Should be able to create a user", () => __async(exports, null, function* () {
      const dataMock = {
        name: "John Doe",
        password: "Password123",
        email: "john.doe@example.com",
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        searchHistory: [],
        favoritedBy: []
      };
      const expectMock = __spreadProps(__spreadValues({}, dataMock), { id: "1" });
      vi.spyOn(userRepositoryMock, "create").mockReturnValue(expectMock);
      const result = yield sut.create(dataMock);
      globalExpect(result).toStrictEqual(expectMock);
    }));
  });
  describe("update()", () => {
    it("Should be able to update a user", () => __async(exports, null, function* () {
      const idMock = "1";
      const dataMock = {
        name: "John Doe",
        password: "Password123",
        email: "john.doe@example.com",
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        searchHistory: [],
        favoritedBy: []
      };
      const expectMock = __spreadProps(__spreadValues({}, dataMock), { id: idMock });
      vi.spyOn(userRepositoryMock, "update").mockReturnValue(expectMock);
      vi.spyOn(userRepositoryMock, "findById").mockReturnValue(__spreadValues({
        id: idMock
      }, dataMock));
      const result = yield sut.update(idMock, dataMock);
      globalExpect(result).toStrictEqual(expectMock);
    }));
  });
  describe("getFavoriteJobs()", () => {
    it("Should be able to get favorite jobs of a user", () => __async(exports, null, function* () {
      const userIdMock = "1";
      const expectMock = ["Job1", "Job2", "Job3"];
      vi.spyOn(userRepositoryMock, "getFavoriteJobs").mockReturnValue(
        expectMock
      );
      vi.spyOn(userRepositoryMock, "findById").mockReturnValue({
        id: userIdMock
      });
      const result = yield sut.getFavoriteJobs(userIdMock);
      globalExpect(result).toStrictEqual(expectMock);
    }));
  });
  describe("getUserSearchHistory()", () => {
    it("Should be able to get search history of a user", () => __async(exports, null, function* () {
      const userIdMock = "1";
      const expectMock = ["Search1", "Search2", "Search3"];
      vi.spyOn(userRepositoryMock, "getUserSearchHistory").mockReturnValue(
        expectMock
      );
      vi.spyOn(userRepositoryMock, "findById").mockReturnValue({
        id: userIdMock
      });
      const result = yield sut.getUserSearchHistory(userIdMock);
      globalExpect(result).toStrictEqual(expectMock);
    }));
  });
});
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

assertion-error/index.js:
  (*!
   * assertion-error
   * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
   * MIT Licensed
   *)
  (*!
   * Return a function that will copy properties from
   * one object to another excluding any originally
   * listed. Returned function will create a new `{}`.
   *
   * @param {String} excluded properties ...
   * @return {Function}
   *)
  (*!
   * Primary Exports
   *)
  (*!
   * Inherit from Error.prototype
   *)
  (*!
   * Statically set name
   *)
  (*!
   * Ensure correct constructor
   *)

chai/lib/chai/utils/flag.js:
  (*!
   * Chai - flag utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/test.js:
  (*!
   * Chai - test utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/expectTypes.js:
  (*!
   * Chai - expectTypes utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/getActual.js:
  (*!
   * Chai - getActual utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/objDisplay.js:
  (*!
   * Chai - flag utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/getMessage.js:
  (*!
   * Chai - message composition utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/transferFlags.js:
  (*!
   * Chai - transferFlags utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

deep-eql/index.js:
  (*!
   * deep-eql
   * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Check to see if the MemoizeMap has recorded a result of the two operands
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @returns {Boolean|null} result
  *)
  (*!
   * Set the result of the equality into the MemoizeMap
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @param {Boolean} result
  *)
  (*!
   * Primary Export
   *)
  (*!
   * The main logic of the `deepEqual` function.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (optional) Additional options
   * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
   * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
      complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
      references to blow the stack.
   * @return {Boolean} equal match
  *)
  (*!
   * Compare two Regular Expressions for equality.
   *
   * @param {RegExp} leftHandOperand
   * @param {RegExp} rightHandOperand
   * @return {Boolean} result
   *)
  (*!
   * Compare two Sets/Maps for equality. Faster than other equality functions.
   *
   * @param {Set} leftHandOperand
   * @param {Set} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for generator objects such as those returned by generator functions.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Determine if the given object has an @@iterator function.
   *
   * @param {Object} target
   * @return {Boolean} `true` if the object has an @@iterator function.
   *)
  (*!
   * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
   * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
   *
   * @param {Object} target
   * @returns {Array} an array of entries from the @@iterator function
   *)
  (*!
   * Gets all entries from a Generator. This will consume the generator - which could have side effects.
   *
   * @param {Generator} target
   * @returns {Array} an array of entries from the Generator.
   *)
  (*!
   * Gets all own and inherited enumerable keys from a target.
   *
   * @param {Object} target
   * @returns {Array} an array of own and inherited enumerable keys from the target.
   *)
  (*!
   * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
   * each key. If any value of the given key is not equal, the function will return false (early).
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
   * for each enumerable key in the object.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Returns true if the argument is a primitive.
   *
   * This intentionally returns true for all objects that can be compared by reference,
   * including functions and symbols.
   *
   * @param {Mixed} value
   * @return {Boolean} result
   *)

chai/lib/chai/utils/isProxyEnabled.js:
  (*!
   * Chai - isProxyEnabled helper
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/addProperty.js:
  (*!
   * Chai - addProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/addLengthGuard.js:
  (*!
   * Chai - addLengthGuard utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/getProperties.js:
  (*!
   * Chai - getProperties utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/proxify.js:
  (*!
   * Chai - proxify utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/addMethod.js:
  (*!
   * Chai - addMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/overwriteProperty.js:
  (*!
   * Chai - overwriteProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/overwriteMethod.js:
  (*!
   * Chai - overwriteMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/addChainableMethod.js:
  (*!
   * Chai - addChainingMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)
  (*!
   * Module variables
   *)

chai/lib/chai/utils/overwriteChainableMethod.js:
  (*!
   * Chai - overwriteChainableMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/compareByInspect.js:
  (*!
   * Chai - compareByInspect utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js:
  (*!
   * Chai - getOwnEnumerablePropertySymbols utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/getOwnEnumerableProperties.js:
  (*!
   * Chai - getOwnEnumerableProperties utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/isNaN.js:
  (*!
   * Chai - isNaN utility
   * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/index.js:
  (*!
   * chai
   * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Dependencies that are used for multiple exports are required here only once
   *)
  (*!
   * test utility
   *)
  (*!
   * type utility
   *)
  (*!
   * expectTypes utility
   *)
  (*!
   * message utility
   *)
  (*!
   * actual utility
   *)
  (*!
   * Inspect util
   *)
  (*!
   * Object Display util
   *)
  (*!
   * Flag utility
   *)
  (*!
   * Flag transferring utility
   *)
  (*!
   * Deep equal utility
   *)
  (*!
   * Deep path info
   *)
  (*!
   * Check if a property exists
   *)
  (*!
   * Function name
   *)
  (*!
   * add Property
   *)
  (*!
   * add Method
   *)
  (*!
   * overwrite Property
   *)
  (*!
   * overwrite Method
   *)
  (*!
   * Add a chainable method
   *)
  (*!
   * Overwrite chainable method
   *)
  (*!
   * Compare by inspect method
   *)
  (*!
   * Get own enumerable property symbols method
   *)
  (*!
   * Get own enumerable properties method
   *)
  (*!
   * Checks error against a given set of criteria
   *)
  (*!
   * Proxify util
   *)
  (*!
   * addLengthGuard util
   *)
  (*!
   * isProxyEnabled helper
   *)
  (*!
   * isNaN method
   *)
  (*!
   * getOperator method
   *)

chai/lib/chai/assertion.js:
  (*!
   * chai
   * http://chaijs.com
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies.
   *)
  (*!
   * Module export.
   *)
  (*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   *)
  (*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   *)

chai/lib/chai/core/assertions.js:
  (*!
   * chai
   * http://chaijs.com
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/interface/expect.js:
  (*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/interface/should.js:
  (*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/interface/assert.js:
  (*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai dependencies.
   *)
  (*!
   * Module export.
   *)
  (*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   *)
  (*!
   * Aliases.
   *)

chai/lib/chai.js:
  (*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai version
   *)
  (*!
   * Assertion Error
   *)
  (*!
   * Utils for plugins (not exported)
   *)
  (*!
   * Utility Functions
   *)
  (*!
   * Configuration
   *)
  (*!
   * Primary `Assertion` prototype
   *)
  (*!
   * Core Assertions
   *)
  (*!
   * Expect interface
   *)
  (*!
   * Should interface
   *)
  (*!
   * Assert interface
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

@vitest/snapshot/dist/index.js:
  (*
   * @version    1.4.0
   * @date       2015-10-26
   * @stability  3 - Stable
   * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
   * @license    MIT License
   *)
*/
