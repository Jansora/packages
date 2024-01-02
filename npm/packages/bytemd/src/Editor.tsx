"use client";

import {clsx} from "clsx"

import React, {Dispatch, SetStateAction} from 'react';
import {Editor, EditorProps} from '@bytemd/react';

import {plugins, sanitize, simplePlugins, uploadImages} from "./util";

export interface CustomEditorProps extends React.FC<EditorProps> {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    uploadFn: React.FC,
    className?: string,
}
export const ByteEditor = (props: CustomEditorProps) => {

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


export const ByteLightEditor = (props: CustomEditorProps) => {

    const {value, setValue, className} = props

    return (
        <div className={clsx(className, "byte-editor")}>
            <Editor
                value={value}
                plugins={simplePlugins}
                onChange={setValue}
            />
        </div>
    )
}