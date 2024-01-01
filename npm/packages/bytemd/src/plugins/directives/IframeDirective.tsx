// Register `hName`, `hProperties` types, used when turning markdown to HTML:
/// <reference types="mdast-util-to-hast" />
// Register directive nodes in mdast:
/// <reference types="mdast-util-directive" />

import {visit} from 'unist-util-visit'
import {BytemdPlugin} from "bytemd";

// This plugin is an example to turn `::Iframe` into Iframe.
function IframeDirective() {
    /**
     * @param {import('mdast').Root} tree
     *   Tree.
     * @param {import('vfile').VFile} file
     *   File.
     * @returns {undefined}
     *   Nothing.
     */
    return (tree, file) => {
        visit(tree, function (node) {
            if (
                node.type === 'containerDirective' ||
                node.type === 'leafDirective' ||
                node.type === 'textDirective'
            ) {

                console.log("node:", node)

                if (node.name !== 'iframe') return
                if (!!node.children && node.children.length != 1) return

                const data = node.data || (node.data = {})

                try {
                    const custom = node.children[0]
                    const defaultProperties =  {
                        src: 'https://www.baidu.com.com/Iframe/' + "3cWN4BgXq_w",
                        width: 200,
                        height: 200,
                        // frameBorder: 0,
                        // allow: 'picture-in-picture',
                        // allowFullScreen: true
                    }
                    data.hName = 'iframe'
                    data.hProperties = {
                        ...defaultProperties, ...JSON.parse(custom)
                    }
                }
                catch (e) {

                }



                //
                // const data = node.data || (node.data = {})
                // const attributes = node.attributes || {}
                // const id = attributes.id
                //
                // if (node.type === 'textDirective') {
                //     file.fail(
                //         'Unexpected `:youtube` text directive, use two colons for a leaf directive',
                //         node
                //     )
                // }
                //
                // if (!id) {
                //     file.fail('Unexpected missing `id` on `youtube` directive', node)
                // }
                //
                // data.hName = 'iframe'
                // data.hProperties = {
                //     src: 'https://www.youtube.com/Iframe/' + id,
                //     width: 200,
                //     height: 200,
                //     frameBorder: 0,
                //     allow: 'picture-in-picture',
                //     allowFullScreen: true
                // }
            }
        })
    }
}

export default function IframePlugin({
                                        ignoreMissing = true,
                                        ...rest
                                    }): BytemdPlugin {
    return {
        remark: (processor) => processor.use(IframeDirective, ),
    }
}