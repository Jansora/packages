import React from 'react';
import ReactMarkdown from 'react-markdown';
import raw from 'rehype-raw';
import rehypeRaw from 'rehype-raw';
import rehypePrism from 'rehype-prism-plus';
// import { PluggableList } from 'unified';
import rehypeRewrite from 'rehype-rewrite';
import rehypeAttrs from 'rehype-attr';

import {reservedMeta} from './plugins/reservedMeta';
import {retrieveMeta} from './plugins/retrieveMeta';

import {defaultRehypePlugins, rehypeRewriteHandle} from './rehypePlugins';

// import './styles/markdown.less';

/**
 * https://github.com/uiwjs/react-md-editor/issues/607
 */
const defaultUrlTransform = (url) => url;

export const MdePreview = (props) => {
    const {
        prefixCls = 'wmde-markdown wmde-markdown-color',
        className,
        source,
        style,
        disableCopy = false,
        skipHtml = true,
        onScroll,
        onMouseOver,
        pluginsFilter,
        rehypeRewrite: rewrite,
        wrapperElement = {},
        warpperElement = {},
        urlTransform,
        ...other
    } = props;

    const rehypePlugins = [
        reservedMeta,
        rehypeRaw,
        retrieveMeta,
        [rehypePrism, { ignoreMissing: true }],
        ...defaultRehypePlugins,
        [rehypeRewrite, { rewrite: rehypeRewriteHandle(props.disableCopy ?? false, props.rehypeRewrite) }],
        [rehypeAttrs, { properties: 'attr' }],
        ...(props.rehypePlugins || []),
    ];

    // const mdp = React.useRef<HTMLDivElement>(null);
    // useImperativeHandle(ref, () => ({ ...props, mdp }), [mdp, props]);
    const cls = `${prefixCls || ''} ${className || ''}`;
    // useCopied(mdp);

    // const rehypePlugins = [...(other.rehypePlugins || [])];
    const customProps = {
        allowElement: (element, index, parent) => {
            if (other.allowElement) {
                return other.allowElement(element, index, parent);
            }
            return /^[A-Za-z0-9]+$/.test(element.tagName);
        },
    };
    if (skipHtml) {
        rehypePlugins.push(raw);
    }
    const remarkPlugins = [...(other.remarkPlugins || [])];
    const wrapperProps = { ...warpperElement, ...wrapperElement };
    return (
        <div
            // ref={mdp}
            //  onScroll={onScroll}
            //  onMouseOver={onMouseOver} {...wrapperProps}
             className={cls} style={style}>
            <ReactMarkdown
                {...customProps}
                {...other}
                skipHtml={skipHtml}
                urlTransform={urlTransform || defaultUrlTransform}
                rehypePlugins={pluginsFilter ? pluginsFilter('rehype', rehypePlugins) : rehypePlugins}
                remarkPlugins={pluginsFilter ? pluginsFilter('remark', remarkPlugins) : remarkPlugins}
                children={source || ''}
            />
        </div>
    );
};
