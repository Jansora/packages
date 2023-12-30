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
* @file DiffEditor.jsx
* @author jansora
* @date 2020/2/12
*/

// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.main';
// import styled from "styled-components";
// import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
// import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';

// const Wrapper = styled.div`
//   width: 100%;
//   height: 500px;
// `
// @ts-ignore
var DiffEditor = function DiffEditor(props) {
  var original = props.original,
    modified = props.modified;
  var ref = (0, _react.useRef)(null);
  var theme = props.dark ? "vs-dark" : "vs";
  var style = props.style ? props.style : {};
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    editor = _useState2[0],
    setEditor = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var monacoLoaded = (0, _LazyLoadEditor["default"])({});
  (0, _react.useEffect)(function () {
    setLoading(true);
    setTimeout(function () {
      return setLoading(false);
    }, 100);
  }, [theme]);
  (0, _react.useEffect)(function () {
    if (monacoLoaded && !loading) {
      // @ts-ignore
      var _editor = window.monaco.editor.createDiffEditor(ref.current, {
        theme: theme,
        readOnly: true
      });
      setEditor(_editor);
    }
  }, [ref, monacoLoaded, theme, loading]);
  (0, _react.useEffect)(function () {
    if (editor) {
      // @ts-ignore
      editor.setModel({
        // @ts-ignore
        original: window.monaco.editor.createModel(original.data, original.language),
        // @ts-ignore
        modified: window.monaco.editor.createModel(modified.data, modified.language)
      });
    }
  }, [editor, modified, original]);
  if (loading || !monacoLoaded) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      padding: '16px 0',
      backgroundColor: props.dark ? '#1E1E1E' : '#FFFFFE'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: props.id ? props.id : "monaco-diff",
      ref: ref,
      style: (0, _objectSpread2["default"])({
        width: '100%',
        height: '500px'
      }, style)
    })
  });
};
var _default = exports["default"] = DiffEditor;
module.exports = exports.default;