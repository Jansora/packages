"use client"

import React, {useEffect, useState} from 'react';


const LazyLoadEditor = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const interval = setInterval(() => {
            if (window.monaco) {
                setLoading(false)
                clearInterval(interval)
            }
        }, 100)
    }, [])


    useEffect(() => {

        const proxyUrl = (props && props.proxyUrl) ? props.proxyUrl : (window.proxyUrl ? window.proxyUrl : 'https://cdn.jansora.com/lib/monaco-editor/0.21.2/min/vs/monaco-editor-loader-proxy.js')
        const wrapper = document.createElement('div');
        wrapper.setAttribute("id", "init-monaco-editor-container")
        document.body.appendChild(wrapper);
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = proxyUrl;
        wrapper.appendChild(script);


    }, [])

    return !loading;
}

export default LazyLoadEditor;
