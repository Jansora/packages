import {clsx} from "clsx"

import React from 'react';
import {Viewer, ViewerProps} from '@bytemd/react';

import LazyLoadEditor from "./LazyLoadEditor";


import breaks from '@bytemd/plugin-breaks';

import frontmatter from "@bytemd/plugin-frontmatter"
import gemoji from "@bytemd/plugin-gemoji"

import gfm from '@bytemd/plugin-gfm';
import prismPlus from "./plugins/RehypePrismPlus"

import math from "@bytemd/plugin-math-ssr"
import zoom from "@bytemd/plugin-medium-zoom"
import mermaid from "@bytemd/plugin-mermaid"


import title from "./plugins/Title";
import {defaultSchema, Schema} from "hast-util-sanitize";


import Directive from "./plugins/directives/Directive";
import EmbedPlugin from "./plugins/directives/EmbedDirective";


import 'bytemd/dist/index.css'
import './theme/github-markdown.less'
import "./plugins/prismplus.css"
import './code-mirror.less'

import './index.scss'

const plugins = [
    gfm(),
    breaks(),


    prismPlus({
        ignoreMissing: false,
        showLineNumbers: true,
        defaultLanguage: "bash"
    }),
    title({}),

    Directive({}),
    EmbedPlugin({}),

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

export interface CustomViewerProps extends React.FC<ViewerProps> {
    onChange?(value: string): void;
    value: string,
    className: string,
}
export const ByteViewer = (props: CustomViewerProps) => {

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
