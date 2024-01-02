"use client";

import {clsx} from "clsx"

import React from 'react';
import {Viewer, ViewerProps} from '@bytemd/react';

import {plugins, sanitize, simplePlugins} from "./util";
import './index.less'

export interface CustomViewerProps extends ViewerProps {
    value: string,
    className?: string,
}

export const ByteViewer = (props: CustomViewerProps) => {

    const {value, className} = props

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

export const ByteLightViewer = (props: CustomViewerProps) => {

    // @ts-ignore
    const {value, className} = props

    return (
        <div className={clsx(className, "byte-viewer")}>
            <Viewer
                sanitize={sanitize}
                value={value}
                plugins={simplePlugins}
            />
        </div>
    )
}
