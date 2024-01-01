import type {BytemdPlugin} from 'bytemd'
import oembed from "remark-oembed"
import {TransformerInfo} from '@remark-embedder/core'

function handleHTML(html: string, info: TransformerInfo) {
    const {url, transformer} = info
    if (
        transformer.name === '@remark-embedder/transformer-oembed' ||
        url.includes('youtube.com')
    ) {
        return `<div class="embed-youtube aspect-w-16 aspect-h-9">${html}</div>`
    }
    return html
}


const CodeSandboxTransformer = {
    name: 'CodeSandbox',
    // shouldTransform can also be async
    shouldTransform(url) {
        console.log("abc")

        const {host, pathname} = new URL(url)

        return (
            ['codesandbox.io', 'www.codesandbox.io'].includes(host) &&
            pathname.includes('/s/')
        )
    },
    // getHTML can also be async
    getHTML(url) {
        console.log("xxx")
        const iframeUrl = url.replace('/s/', '/embed/')

        return `<iframe src="${iframeUrl}" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>`
    },
}

function handleError({error, url, transformer}) {
    if (
        transformer.name !== '@remark-embedder/transformer-oembed' ||
        !url.includes('twitter.com')
    ) {
        // we're only handling errors from this specific transformer and the twitter URL
        // so we'll rethrow errors from any other transformer/url
        throw error
    }
    return `<p>Unable to embed <a href="${url}">this tweet</a>.</p>`
}

export default function Embed({
                                         // ignoreMissing = true,
                                         // ...rest
                                     }): BytemdPlugin {

    // let katex: typeof K
    return {
        rehype: (processor) => processor.use(

             oembed, { syncWidget: true }
         )
        // rehype: (processor) => processor.use(remarkIframe, {
        //     'www.youtube.com': {
        //         tag: 'iframe',
        //         width: 560,
        //         height: 315,
        //         disabled: false,
        //         replace: [
        //             ['watch?v=', 'embed/'],
        //             ['http://', 'https://'],
        //         ],
        //         thumbnail: {
        //             format: 'http://img.youtube.com/vi/{id}/0.jpg',
        //             id: '.+/(.+)$'
        //         },
        //         removeAfter: '&'
        //     }
        // }),
    }
}