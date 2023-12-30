import _extends from "@babel/runtime/helpers/extends";
/*
* @file DiffEditor.jsx
* @author jansora
* @date 2020/2/12
*/

import React, { useEffect, useRef, useState } from "react";
import LazyLoadEditor from "./LazyLoadEditor.js";
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
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
var DiffEditor = props => {
  var {
    original,
    modified
  } = props;
  var ref = useRef(null);
  var theme = props.dark ? "vs-dark" : "vs";
  var style = props.style ? props.style : {};
  var [editor, setEditor] = useState(null);
  var [loading, setLoading] = useState(false);
  var monacoLoaded = LazyLoadEditor({});
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 100);
  }, [theme]);
  useEffect(() => {
    if (monacoLoaded && !loading) {
      // @ts-ignore
      var _editor = window.monaco.editor.createDiffEditor(ref.current, {
        theme,
        readOnly: true
      });
      setEditor(_editor);
    }
  }, [ref, monacoLoaded, theme, loading]);
  useEffect(() => {
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
    return /*#__PURE__*/_jsx(_Fragment, {});
  }
  return /*#__PURE__*/_jsx("div", {
    style: {
      padding: '16px 0',
      backgroundColor: props.dark ? '#1E1E1E' : '#FFFFFE'
    },
    children: /*#__PURE__*/_jsx("div", {
      id: props.id ? props.id : "monaco-diff",
      ref: ref,
      style: _extends({
        width: '100%',
        height: '500px'
      }, style)
    })
  });
};
export default DiffEditor;