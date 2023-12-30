import React, {useEffect, useState} from 'react';

export declare type Props = {

    /**
     * 远程地址
     */
    proxyUrl?: string;
}
const LazyLoadEditor = (props: Props) => {

    // const monacoRef = useRef(window.monaco);
    const [loading, setLoading] = useState(true);
    const proxyUrl = (props && props.proxyUrl) ? props.proxyUrl : (props.proxyUrl ? props.proxyUrl : 'https://cdn.jansora.com/lib/monaco-editor/0.21.2/min/vs/monaco-editor-loader-proxy.js')
    useEffect(() => {
        setLoading(true)
        const interval = setInterval(() => {
            // console.log("loading", window.monaco)
            // @ts-ignore
            if (window.monaco && window.document) {
                setLoading(false)
                clearInterval(interval)


                const documentLoaded = window.document.querySelector("#init-monaco-editor") != null;

                // console.log("documentLoaded", documentLoaded, !loading)
                if (!documentLoaded) {
                    const wrapper = window.document.createElement('div');
                    wrapper.setAttribute("id", "init-monaco-editor")
                    window.document.body.appendChild(wrapper);
                    const script = window.document.createElement('script');
                    script.type = 'text/javascript';
                    script.async = true;
                    script.src = proxyUrl;
                    wrapper.appendChild(script);
                }
            }
        }, 100)
    }, [])


    return !loading;
}

export default LazyLoadEditor;
