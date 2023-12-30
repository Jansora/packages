import { useEffect, useState } from 'react';
var LazyLoadEditor = props => {
  // const monacoRef = useRef(window.monaco);
  var [loading, setLoading] = useState(true);
  var proxyUrl = props && props.proxyUrl ? props.proxyUrl : props.proxyUrl ? props.proxyUrl : 'https://cdn.jansora.com/lib/monaco-editor/0.21.2/min/vs/monaco-editor-loader-proxy.js';
  useEffect(() => {
    setLoading(true);
    var interval = setInterval(() => {
      // console.log("loading", window.monaco)
      // @ts-ignore
      if (window.monaco) {
        setLoading(false);
        clearInterval(interval);
      }
    }, 100);
  }, []);
  var documentLoaded = document.querySelector("#init-monaco-editor") != null;

  // console.log("documentLoaded", documentLoaded, !loading)
  if (!documentLoaded) {
    var wrapper = document.createElement('div');
    wrapper.setAttribute("id", "init-monaco-editor");
    document.body.appendChild(wrapper);
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = proxyUrl;
    wrapper.appendChild(script);
  }
  return !loading;
};
export default LazyLoadEditor;