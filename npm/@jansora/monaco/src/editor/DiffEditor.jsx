/*
* @file DiffEditor.jsx
* @author jansora
* @date 2020/2/12
*/


import React, {useEffect, useRef, useState} from "react";
import LazyLoadEditor from "./LazyLoadEditor";
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.main';
// import styled from "styled-components";
// import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
// import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';

// const Wrapper = styled.div`
//   width: 100%;
//   height: 500px;
// `

const DiffEditor = (props) => {

    const {original, modified} = props;
    const ref = useRef(null);
    const theme = props.dark ? "vs-dark" : "vs";
    const style = props.style ? props.style  : {};
    const [editor, setEditor] = useState(null);
    // const [init, setInit] = useState(false);

    const monacoLoaded = LazyLoadEditor();

    useEffect(() => {
        if(monacoLoaded && !editor) {
            const _editor = window.monaco.editor.createDiffEditor(ref.current, {theme, readOnly: true})
            setEditor(_editor)
        }
    }, [ref, monacoLoaded]);

    useEffect(() => {
        // console.log(editor, original, modified)
        if(editor) {
            editor.setModel({
                original: window.monaco.editor.createModel(original.data, original.language),
                modified: window.monaco.editor.createModel(modified.data, modified.language)
            });
        }
    }, [editor, modified, original])

    return (
        <div id={props.id ? props.id : "monaco-diff"} ref={ref} style={{
            width: '100%', height: '500px',
            ...style}} />
    )
}

export default DiffEditor;