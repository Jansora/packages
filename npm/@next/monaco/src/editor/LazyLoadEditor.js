"use client"


const LazyLoadEditor = (props) => {

    if (typeof document == 'undefined') {
        return
    }

    const monacoEditorContainer = "init-monaco-editor-container"

    const documentLoaded = document.querySelector(`#${monacoEditorContainer}`) != null;

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

    return !!window.monaco

}

export default LazyLoadEditor;
