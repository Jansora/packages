// "use client";

import {clsx} from "clsx"

import React from 'react';
import {Editor, EditorProps, Viewer, ViewerProps} from '@bytemd/react';
// import gfm from '@bytemd/plugin-gfm';
// import highlight from "@bytemd/plugin-highlight"
// import math from "@bytemd/plugin-math"
// import zoom from "@bytemd/plugin-medium-zoom"
// import mermaid from "@bytemd/plugin-mermaid"
// import breaks from '@bytemd/plugin-breaks';
// import frontmatter from "@bytemd/plugin-frontmatter"
// import gemoji from "@bytemd/plugin-gemoji"
import LazyLoadEditor from "./LazyLoadEditor";

import 'bytemd/dist/index.css'
import './theme/github-markdown.less'
// import './theme/scrolls.scss'
import './code-mirror.less'
// import 'highlight.js/styles/vs2015.css';
import breaks from '@bytemd/plugin-breaks';

import frontmatter from "@bytemd/plugin-frontmatter"
import gemoji from "@bytemd/plugin-gemoji"

import gfm from '@bytemd/plugin-gfm';
import prismPlus from "./plugins/RehypePrismPlus"

import math from "@bytemd/plugin-math-ssr"
import zoom from "@bytemd/plugin-medium-zoom"
import mermaid from "@bytemd/plugin-mermaid"


// import 'highlight.js/styles/default.css'
// import highlight from '@bytemd/plugin-highlight-ssr'
import "./plugins/prismplus.css"
import title from "./plugins/Title";
import {defaultSchema, Schema} from "hast-util-sanitize";
// import {defaultSchema} from "./plugins/defaultSchema";
import Directive from "./plugins/directives/Directive";
import EmbedPlugin from "./plugins/directives/EmbedDirective";
import './index.scss'

const plugins = [
    gfm(),
    breaks(),
    // frontmatter(),
    // gemoji(),
    // highlight(),

    prismPlus({
        ignoreMissing: false,
        showLineNumbers: true,
        defaultLanguage: "bash"
    }),
    title({}),
    // embed({}),
    Directive({}),
    EmbedPlugin({}),
    // IframePlugin({}),
    math(),
    zoom(),
    mermaid(),
    // vega(),
    frontmatter(),
    gemoji(),

    // Add more plugins here
];

// @ts-ignore
const sanitize = (): Schema => ({
    ...defaultSchema,
    // clobber: defaultSchema.clobber?.concat(['class']),
    attributes: { ...defaultSchema.attributes,
        ...{
            span: ['data-remark-code-title'],
            // div: ['itemScope', 'itemType', 'class', 'id', 'data-language', 'data-*'],
            // embed : ['id', ],
            iframe: ['src', 'width', 'height'],
            code: ['class'],

        },
        //@ts-ignore
        '*': defaultSchema.attributes['*'].concat(['className'])
    },
    tagNames: defaultSchema.tagNames?.concat(["iframe", "embed"])
})
const uploadImages = async (files: File[], uploadFn: any) => {
    let result = [];

    if (files.length < 1) return ['']
    const data = await uploadFn(files)
    // @ts-ignore
    return data.map(file => ({url:file.url, title: file.filename, alt: file.filename}));
}

//@ts-ignore


export interface CustomEditorProps extends React.FC<EditorProps> {
    onChange?(value: string): void;
    value: string,
    setValue: any,
    uploadFn: any,
    className: string,
}
export const ByteEditor = (props: CustomEditorProps) => {
    LazyLoadEditor();

    const {value, setValue, uploadFn, className} = props

    return (
        <div className={clsx(className, "byte-editor")}>
            <Editor
                sanitize={sanitize}
                value={value}
                plugins={plugins}
                onChange={setValue}
                editorConfig={{}}
                uploadImages={(files) => uploadImages(files, uploadFn)}
            />
        </div>
    )
}

export interface CustomEditorProps extends React.FC<ViewerProps> {
    onChange?(value: string): void;
    value: string,
    className: string,
}
export const ByteViewer = (props: CustomEditorProps) => {

    const {value, className} = props

    LazyLoadEditor();
    return (
        <div className={clsx(className, "byte-viewer")}>
            <Viewer
                sanitize={sanitize}
                value={value}
                plugins={plugins}
            />
        </div>
    )
}

const lightPlugins = [
    gfm(),
    breaks(),
    // frontmatter(),
    // gemoji(),
    // highlight(),
    math(),
    // zoom(),
    // mermaid(),
    // vega(),
    // frontmatter(),
    // gemoji()
    // Add more plugins here
];
export const ByteLightEditor = (props: CustomEditorProps) => {
    LazyLoadEditor();

    // @ts-ignore
    const {value, setValue, className} = props

    return (
        <div className={clsx(className, "byte-editor")}>
            <Editor
                value={value}
                plugins={lightPlugins}
                onChange={setValue}
            />
        </div>
    )
}