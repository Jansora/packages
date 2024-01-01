// Register `hName`, `hProperties` types, used when turning markdown to HTML:
/// <reference types="mdast-util-to-hast" />
// Register directive nodes in mdast:
/// <reference types="mdast-util-directive" />

import {visit} from 'unist-util-visit'
import {BytemdPlugin} from "bytemd";

// This plugin is an example to turn `::embed` into embed.
function EmbedDirective() {
    /**
     * @param {import('mdast').Root} tree
     *   Tree.
     * @param {import('vfile').VFile} file
     *   File.
     * @returns {undefined}
     *   Nothing.
     */
    return (tree: any, file: any) => {
        visit(tree, function (node) {
            if (
                node.type === 'containerDirective' ||
                node.type === 'leafDirective' ||
                node.type === 'textDirective'
            ) {

                console.log("node:", node)

                if (node.name !== 'embed') return
                // @ts-ignore
                console.log("embed:", node.children.filter(child => child.type === "link").length === 1)
                // @ts-ignore
                if (!node.children && node.children.filter(child => child.type === "link").length !== 1) return
                // @ts-ignore
                console.log("embed2:", node.children.filter(child => child.type === "link")[0])

                const data = node.data || (node.data = {})

                try {
                    // const custom = node.children.map(child => child.text)
                    // console.log("custom)
                    const defaultProperties =  {
                        src: 'https://www.baidu.com.com/embed/' + "3cWN4BgXq_w",
                        width: "100%",
                        height: 350,
                        // frameBorder: 0,
                        // allow: 'picture-in-picture',
                        // allowFullScreen: true
                    }
                    data.hName = 'iframe'
                    data.hProperties = {
                        ...defaultProperties,
                        // @ts-ignore
                        src: node.children.filter(child => child.type === "link")[0].url
                    }
                    console.log("ttbx")

                }
                catch (e) {
                    console.log("eee",e)
                }

                console.log("ttx")


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
                //     src: 'https://www.youtube.com/embed/' + id,
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

export default function EmbedPlugin({
                                      ignoreMissing = true,
                                      ...rest
                                  }): BytemdPlugin {
    return {
        remark: (processor) => processor.use(EmbedDirective, ),
    }
}