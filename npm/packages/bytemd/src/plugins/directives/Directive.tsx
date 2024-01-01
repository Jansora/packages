// Register `hName`, `hProperties` types, used when turning markdown to HTML:
/// <reference types="mdast-util-to-hast" />
// Register directive nodes in mdast:
/// <reference types="mdast-util-directive" />

import {BytemdPlugin} from "bytemd";
// @ts-ignore
import remarkDirective from 'remark-directive'


export default function Directive({
                                          ignoreMissing = true,
                                          ...rest
                                      }): BytemdPlugin {
    return {
        remark: (processor) => processor.use(remarkDirective, ),
    }
}