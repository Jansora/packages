import React from 'react';
import {Editor as ByteEditor, Viewer as ByteViewer} from '@bytemd/react';
import gfm from '@bytemd/plugin-gfm';
import highlight from "@bytemd/plugin-highlight"
import math from "@bytemd/plugin-math"
import zoom from "@bytemd/plugin-medium-zoom"
import mermaid from "@bytemd/plugin-mermaid"
import './index.css'
import 'highlight.js/styles/vs.css';
import './override.css'

import breaks from '@bytemd/plugin-breaks';

// import './github-markdown-dark.less'
// import './github-markdown-light.less'
// import frontmatter from "@bytemd/plugin-frontmatter"
// import gemoji from    "@bytemd/plugin-gemoji"
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
  highlight(),
  // image({
  //   async upload(files) {
  //     // TODO: upload image files and return urls
  //     if(files.length < 1) return ['']
  //
  //     let url = ''
  //     const callback = (data) => {
  //       url = data;
  //       copyToClipboard(url)
  //     };
  //     await UploadFile(files[0], callback);
  //     // console.log("url", url, resp)
  //     return [url]
  //   }
  // }),


  math(), zoom(), mermaid(),
  // vega(),
  // Add more plugins here
];

const Editor = ({value, setValue, style, uploadFn}) => {

  return (
      <ByteEditor
          style={style ? {...style} : {}}
          // mode="tab"
          // id="222"
          value={value}
          plugins={plugins}
          onChange={setValue}
          editorConfig={{}}
          uploadImages={  async (files) => {
            // TODO: upload image files and return urls

            let result = [];
            if (files.length < 1) return ['']
            await uploadFn(files, (data)=> {
              result = data.map(file => ({url:file.url, title: file.filename, alt: file.filename}))
            })

            console.log("uploadFn callback", result)

            return result;
            // const callback = (data) => {
            //
            //   result.append({url:data, title: "b.png", alt: data})
            //   console.log("UploadFile callback", data)
            //   copyToClipboard(data)
            // };
            // await UploadFile(files[0], callback);
            // console.log("url", url, resp)

          }}
      />
  )
}
const Viewer = ({value, style}) => {
  return (
      <ByteViewer
          style={style ? {...style} : {}}
          value={value}
          plugins={plugins}
      />
  )
}




export default {Viewer, Editor};