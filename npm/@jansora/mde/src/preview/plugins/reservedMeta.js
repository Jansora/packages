import {visit} from 'unist-util-visit';


export const reservedMeta = (options = {}) => {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'element' && node.tagName === 'code' && node.data && node.data.meta) {
        node.properties = { ...node.properties, 'data-meta': String(node.data.meta) };
      }
    });
  };
};
