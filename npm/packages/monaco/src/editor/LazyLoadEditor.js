import React, {useEffect, useState} from 'react';

const LazyLoadEditor = (props) => {
    const documentLoaded = document.querySelector("#init-monaco-editor") != null;

    // const monacoRef = useRef(window.monaco);
    const [loading, setLoading] = useState(true);
    const proxyUrl = (props && props.proxyUrl) ? props.proxyUrl : (window.proxyUrl ? window.proxyUrl : 'https://cdn.jansora.com/lib/monaco-editor/0.21.2/min/vs/monaco-editor-loader-proxy.js')
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

    // console.log("documentLoaded", documentLoaded, !loading)
    if (!documentLoaded) {
        const wrapper = document.createElement('div');
        wrapper.setAttribute("id", "init-monaco-editor")
        document.body.appendChild(wrapper);
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = proxyUrl;
        wrapper.appendChild(script);
    }
    return !loading;
}

export default LazyLoadEditor;
