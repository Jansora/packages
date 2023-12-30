import slug from 'rehype-slug';
import headings from 'rehype-autolink-headings';
import rehypeIgnore from 'rehype-ignore';
import {getCodeString} from 'rehype-rewrite';
import {octiconLink} from './nodes/octiconLink';
import {copyElement} from './nodes/copy';

export const rehypeRewriteHandle =
  (disableCopy, rewrite) =>
  (node, index, parent) => {
    if (node.type === 'element' && parent && parent.type === 'root' && /h(1|2|3|4|5|6)/.test(node.tagName)) {
      const child = node.children && (node.children[0]);
      if (child && child.properties && child.properties.ariaHidden === 'true') {
        child.properties = { class: 'anchor', ...child.properties };
        child.children = [octiconLink];
      }
    }
    if (node.type === 'element' && node.tagName === 'pre' && !disableCopy) {
      const code = getCodeString(node.children);
      node.children.push(copyElement(code));
    }
    rewrite && rewrite(node, index === null ? undefined : index, parent === null ? undefined : parent);
  };

export const defaultRehypePlugins = [slug, headings, rehypeIgnore];
