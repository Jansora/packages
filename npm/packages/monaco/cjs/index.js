"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CodeEditor", {
  enumerable: true,
  get: function get() {
    return _CodeEditor["default"];
  }
});
Object.defineProperty(exports, "DiffEditor", {
  enumerable: true,
  get: function get() {
    return _DiffEditor["default"];
  }
});
var _CodeEditor = _interopRequireDefault(require("./editor/CodeEditor"));
var _DiffEditor = _interopRequireDefault(require("./editor/DiffEditor"));