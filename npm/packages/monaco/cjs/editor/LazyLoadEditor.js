"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var LazyLoadEditor = function LazyLoadEditor(props) {
  // const monacoRef = useRef(window.monaco);
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var proxyUrl = props && props.proxyUrl ? props.proxyUrl : props.proxyUrl ? props.proxyUrl : 'https://cdn.jansora.com/lib/monaco-editor/0.21.2/min/vs/monaco-editor-loader-proxy.js';
  (0, _react.useEffect)(function () {
    setLoading(true);
    var interval = setInterval(function () {
      // console.log("loading", window.monaco)
      // @ts-ignore
      if (window.monaco) {
        setLoading(false);
        clearInterval(interval);
      }
    }, 100);
  }, []);
  var documentLoaded = document.querySelector("#init-monaco-editor") != null;

  // console.log("documentLoaded", documentLoaded, !loading)
  if (!documentLoaded) {
    var wrapper = document.createElement('div');
    wrapper.setAttribute("id", "init-monaco-editor");
    document.body.appendChild(wrapper);
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = proxyUrl;
    wrapper.appendChild(script);
  }
  return !loading;
};
var _default = exports["default"] = LazyLoadEditor;
module.exports = exports.default;