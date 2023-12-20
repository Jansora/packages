"use client"


import React, {useEffect, useState} from "react";

const LazyLoadEditor = (props) => {

    if (typeof document == 'undefined') {
        return
    }

    const monacoEditorContainer = "init-monaco-editor-container"

    const documentLoaded = document.querySelector(`#${monacoEditorContainer}`) != null;

    const [loading, setLoading] = useState(true);

    if (!documentLoaded) {

        const proxyUrl = (props && props.proxyUrl) ? props.proxyUrl : (window.proxyUrl ? window.proxyUrl : 'https://cdn.jansora.com/lib/monaco-editor/0.21.2/min/vs/monaco-editor-loader-proxy.js')

        const wrapper = document.createElement('div');

        wrapper.setAttribute("id", monacoEditorContainer)

        document.body.appendChild(wrapper);

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = proxyUrl;
        // script.src = proxyUrl;
        wrapper.appendChild(script);
    }

    useEffect(() => {
        setLoading(true)
        const interval = setInterval(() => {
            // console.log("loading", window.monaco)
            if (window.monaco) {
                setLoading(false)
                clearInterval(interval)
            }
        }, 100)
    }, [])

    return !loading;

}

export default LazyLoadEditor;
