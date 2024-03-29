import React from 'react';
import {Editor as ByteEditor, Viewer as ByteViewer} from '@bytemd/react';
import gfm from '@bytemd/plugin-gfm';
import highlight from "@bytemd/plugin-highlight"
import math from "@bytemd/plugin-math"
import zoom from "@bytemd/plugin-medium-zoom"
import mermaid from "@bytemd/plugin-mermaid"
// import './code-mirror.less'
// import 'bytemd/dist/index.css'
import 'highlight.js/styles/vs2015.css';

import './index.less'
// import "./theme/scrolls.scss";
// import {UploadFiles} from "../../../request/utils";
import breaks from '@bytemd/plugin-breaks';
import styled from "styled-components";


// import './theme/github-markdown.less'
import frontmatter from "@bytemd/plugin-frontmatter"
import gemoji from "@bytemd/plugin-gemoji"
import LazyLoadEditor from "./LazyLoadEditor";
// import vega from    "@bytemd/plugin-vega"

// const copyToClipboard = (content='拷贝的内容') => {
//   if(copy(content)){
//     message.success('上传成功，已拷贝到剪贴板')
//   }else{
//     message.warning('上传成功，拷贝到剪贴板失败， 请手动拷贝地址：' + content, 10)
//   }
//
// }


const plugins = [
    gfm(),
    breaks(),
    // frontmatter(),
    // gemoji(),
    highlight({init: hljs => {

            // const init = ['javascript', 'json', 'xml', 'markdown'];
            //
            // hljs.listLanguages().filter(language => !init.includes(language)).forEach((langName) => {
            //     // let langModule = require(`highlight.js/lib/languages/${langName}`);
            //     // console.log(hljs);
            //     // hljs.registerLanguage(langName, langModule);
            //     hljs.unregisterLanguage(langName)
            // });


                // hljs.highlight()
            // ['javascript', 'json', 'xml', 'markdown'].forEach((langName) => {
            //     let langModule = require(`highlight.js/lib/languages/${langName}`);
            //     console.log(hljs);
            //     hljs.registerLanguage(langName, langModule);
            // });
        }}),
    math(),
    zoom(),
    mermaid(),
    // vega(),
    frontmatter(),
    gemoji()
    // Add more plugins here
];



const StyledByteEditorWrapper = styled.div`
    .bytemd {
       height: ${props => console.log(props) || props.height ? props.height : "400px"} !important;
    }
`


export const Editor = ({height, value, setValue, style, uploadFn}) => {
    LazyLoadEditor();
    return (
        <StyledByteEditorWrapper height={height}>
            <ByteEditor
                style={style ? {...style} : {}}
                value={value}
                plugins={plugins}
                onChange={setValue}
                editorConfig={{}}
                uploadImages={  async (files) => {
                    let result = [];
                    if (files.length < 1) return ['']
                    await uploadFn(files, (data)=> {
                        result = data.map(file => ({url:file.url, title: file.filename, alt: file.filename}))
                    })
                    return result;
                }}
            />
        </StyledByteEditorWrapper>
    )
}
export const Viewer = ({height, value, style}) => {
    LazyLoadEditor();
    return (
        <StyledByteEditorWrapper height={height}>
            <ByteViewer
                style={style ? {...style} : {}}
                value={value}
                plugins={plugins}
            />
        </StyledByteEditorWrapper>
    )
}
