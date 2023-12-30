import _extends from "@babel/runtime/helpers/extends";
/*
* @file DefaultLayout.jsx.jsx
* @author jansora
* @date 2020/2/12
*/

import React, { useEffect, useRef, useState } from "react";
import LazyLoadEditor from "./LazyLoadEditor.js";

// @ts-ignore
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
var CodeEditor = props => {
  var {
    onChange,
    id,
    force
  } = props;
  var theme = props.dark ? "vs-dark" : "vs";
  var language = props.language ? props.language : 'javascript';
  var style = props.style ? props.style : {};
  var value = props.value ? props.value : "";
  var readOnly = !!props.readOnly;
  var options = props.options ? props.options : {};
  var monacoLoaded = LazyLoadEditor({});
  var [loading, setLoading] = useState(false);
  var ref = useRef(null);
  var [model, setModel] = useState(null);
  useEffect(() => {
    console.log("xxx", language, theme);
    setLoading(true);
    // model && model.dispose()
    // setModel(window.monaco.editor.createModel(value, language))
    setTimeout(() => setLoading(false), 100);
  }, [language, theme]);

  // const monaco = window.monaco;

  useEffect(() => {
    if (monacoLoaded && !model) {
      // @ts-ignore
      setModel(window.monaco.editor.createModel(value, language));
    }
  }, [monacoLoaded, model]);
  useEffect(() => {
    if (monacoLoaded && model && !loading) {
      console.log("crete editor", "editor", language, theme);
      // @ts-ignore
      var editor = window.monaco.editor.create(ref.current, _extends({
        model,
        language,
        theme
      }, options, {
        readOnly
      }));
      // @ts-ignore
      editor.onDidChangeModelContent(event => onChange && onChange(model.getValue()));
      editor.setModelLanguage && editor.setModelLanguage(model, language);
      // @ts-ignore
      model.setValue(value);
      // setEditor(editor)
    }
    // eslint-disable-next-line
  }, [ref, model, language, theme, loading]);
  useEffect(() => {
    if (monacoLoaded && force) {
      // @ts-ignore
      model.setValue(value);
    }
    // eslint-disable-next-line
  }, [value, force, model]);

  // @ts-ignore
  useEffect(() => () => model && model.dispose(), []);
  if (loading || !monacoLoaded) {
    return /*#__PURE__*/_jsx(_Fragment, {});
  }
  return /*#__PURE__*/_jsx("div", {
    style: {
      padding: '16px 0',
      backgroundColor: props.dark ? '#1E1E1E' : '#FFFFFE'
    },
    children: /*#__PURE__*/_jsx("div", {
      id: id ? id : "monaco",
      ref: ref,
      style: _extends({
        width: '100%',
        height: '500px'
      }, style)
    })
  });
};
export default CodeEditor;