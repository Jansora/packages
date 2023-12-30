"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _LazyLoadEditor = _interopRequireDefault(require("./LazyLoadEditor.js"));
var _jsxRuntime = require("react/jsx-runtime");
/*
* @file DefaultLayout.jsx.jsx
* @author jansora
* @date 2020/2/12
*/

// @ts-ignore
var CodeEditor = function CodeEditor(props) {
  var onChange = props.onChange,
    id = props.id,
    force = props.force;
  var theme = props.dark ? "vs-dark" : "vs";
  var language = props.language ? props.language : 'javascript';
  var style = props.style ? props.style : {};
  var value = props.value ? props.value : "";
  var readOnly = !!props.readOnly;
  var options = props.options ? props.options : {};
  var monacoLoaded = (0, _LazyLoadEditor["default"])({});
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var ref = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)(null),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    model = _useState4[0],
    setModel = _useState4[1];
  (0, _react.useEffect)(function () {
    console.log("xxx", language, theme);
    setLoading(true);
    // model && model.dispose()
    // setModel(window.monaco.editor.createModel(value, language))
    setTimeout(function () {
      return setLoading(false);
    }, 100);
  }, [language, theme]);

  // const monaco = window.monaco;

  (0, _react.useEffect)(function () {
    if (monacoLoaded && !model) {
      // @ts-ignore
      setModel(window.monaco.editor.createModel(value, language));
    }
  }, [monacoLoaded, model]);
  (0, _react.useEffect)(function () {
    if (monacoLoaded && model && !loading) {
      console.log("crete editor", "editor", language, theme);
      // @ts-ignore
      var editor = window.monaco.editor.create(ref.current, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
        model: model,
        language: language,
        theme: theme
      }, options), {}, {
        readOnly: readOnly
      }));
      // @ts-ignore
      editor.onDidChangeModelContent(function (event) {
        return onChange && onChange(model.getValue());
      });
      editor.setModelLanguage && editor.setModelLanguage(model, language);
      // @ts-ignore
      model.setValue(value);
      // setEditor(editor)
    }
    // eslint-disable-next-line
  }, [ref, model, language, theme, loading]);
  (0, _react.useEffect)(function () {
    if (monacoLoaded && force) {
      // @ts-ignore
      model.setValue(value);
    }
    // eslint-disable-next-line
  }, [value, force, model]);

  // @ts-ignore
  (0, _react.useEffect)(function () {
    return function () {
      return model && model.dispose();
    };
  }, []);
  if (loading || !monacoLoaded) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      padding: '16px 0',
      backgroundColor: props.dark ? '#1E1E1E' : '#FFFFFE'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: id ? id : "monaco",
      ref: ref,
      style: (0, _objectSpread2["default"])({
        width: '100%',
        height: '500px'
      }, style)
    })
  });
};
var _default = exports["default"] = CodeEditor;
module.exports = exports.default;