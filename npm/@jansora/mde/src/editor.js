"use client"


import {randomString} from "@/lib/utils";

import {commands} from "./commands";
import {onImagePasted} from "@/components/mde/upload-image";
import React from "react";
import dynamic from "next/dynamic";
// import MDEditor from '@uiw/react-md-editor';
import "./editor.css";
import "./markdown.css";
// import "@uiw/react-md-editor/markdown-editor.css";
// import "@uiw/react-markdown-preview/markdown.css";
import './override.css'

export const AtomicMarkdownEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    { ssr: false }
);

const {
    bold,
    checkedListCommand,
    code,
    codeBlock,
    codeEdit,
    codeLive,
    codePreview,
    comment,
    fullscreen,
    help,
    hr,
    image,
    italic,
    link,
    orderedListCommand,
    quote,
    strikethrough,
    table,
    title1,
    title2,
    title3,
    unorderedListCommand
} = commands;

 const Editor = (props) => {

    const {value, onChange, uploadFn, className, style} = props;

    const id = props.id || randomString();
    return <AtomicMarkdownEditor
        value={value}
        className={className || ""}
        style={style || {}}
        id={id}
        commands={[
            title1, title2, title3,
            commands.divider,
            bold, italic, strikethrough,
            commands.divider,
            hr, quote, code, codeBlock,
            commands.divider,
            table, orderedListCommand, unorderedListCommand, checkedListCommand,
            commands.divider,
            link, image,comment,
        ]}
        extraCommands={[
            codeEdit, codeLive, codePreview, fullscreen, help,
        ]}
        onPaste={async (event) => {
            await onImagePasted(event.clipboardData, uploadFn, onChange,
                id);
        }}
        onDrop={async (event) => {
            await onImagePasted(event.dataTransfer, uploadFn, onChange,
                id);
        }}
        {...props}
    />
}

export default Editor;
