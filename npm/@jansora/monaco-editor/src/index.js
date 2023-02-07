import React from 'react';
import CodeEditor from "./editor/CodeEditor";
import DiffEditor from "./editor/DiffEditor";

const InitEditor = () => {
    return <div id='init-monaco-editor'>
        <script src="https://cdn.jansora.com/lib/monaco-editor/0.21.2/min/vs/monaco-editor-loader-proxy.js" />
    </div>
}

export default {DiffEditor, CodeEditor, InitEditor};
