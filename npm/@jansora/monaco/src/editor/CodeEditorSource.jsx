/*
* @file DefaultLayout.jsx.jsx
* @author jansora
* @date 2020/2/12
*/


import React, {useEffect, useRef, useState} from "react";

// import * as monaco from 'monaco-editor/esm/vs/editor/editor.main';

// import styled from "styled-components";


const CodeEditorSource = (props) => {

    const {onChange, id, force} = props;
    // console.log("CodeEditorSource", props)
    const monaco = window.monaco;
    const monacoRef = useRef(window.monaco);

    const value = props.value ? props.value : "";
    const style = props.style ? props.style  : {};
    const language = props.language ? props.language : 'javascript';
    const ref = useRef(null);
    const readOnly = !!props.readOnly;
    const options = props.options ? props.options  : {};
    const [model, setModel] = useState(null);
    // const [model] = useState(monaco.editor.createModel(value, language));
    const [editor, setEditor] = useState(null);


    // const monaco = window.monaco;

    useEffect(() => {
        if(ref.current && monacoRef.current && !model) {
            setModel(monaco.editor.createModel(value, language))
        }
    }, [monaco, monacoRef, model])


    useEffect(() => {
        if(ref.current && model) {

            setEditor(
              monaco.editor.create(ref.current, {
                  model, language, theme: "vs-dark", ...options, readOnly
              })
            )

        }
        // eslint-disable-next-line
    }, [ref, model, language]);


    useEffect(() => {
        if (editor && editor.setModelLanguage) {
            editor.setModelLanguage(model, language)
        }
        // eslint-disable-next-line
    }, [editor, language, model])


    useEffect(() => {

        if(editor && force) {
            model.setValue(value);
            // model

        }
        // eslint-disable-next-line
    }, [value, force, model]);



    useEffect(() => {
        if(editor) {
            editor.onDidChangeModelContent((event) => onChange && onChange(model.getValue()))
        }
        // eslint-disable-next-line
    }, [editor]);


    useEffect(()=> {

        return () => model && model.dispose()
        // eslint-disable-next-line
    }, [])

    return (
       <div id={id ? id : "monaco"} ref={ref} style={{
           width: '100%', height: '500px', display: 'flex',
           alignItems: 'center', justifyContent: 'center',
           ...style}}  />

    )
}

export default CodeEditorSource;
