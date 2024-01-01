import type {BytemdPlugin} from 'bytemd'
import rehypePrism from 'rehype-prism-plus/common'

export default function prismPlusSSR({
                                         ignoreMissing = true,
                                         ...rest
                                     }): BytemdPlugin {
    return {
        rehype: (processor) => processor.use(rehypePrism, { ignoreMissing, ...rest }),
    }
}