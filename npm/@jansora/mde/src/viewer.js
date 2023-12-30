import React from "react";
// import MDEditor from '@uiw/react-md-editor';
import "./editor.css";
import "./markdown.css";
// import "@uiw/react-md-editor/markdown-editor.css";
// import "@uiw/react-markdown-preview/markdown.css";
import './override.css'
import {MdePreview} from "./preview/preview";

const Viewer = (props) => {

    const {value, onChange} = props;

    return <MdePreview source={value} {...props}  />
}
export default Viewer;
