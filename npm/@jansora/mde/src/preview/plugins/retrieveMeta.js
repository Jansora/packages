import {visit} from 'unist-util-visit';


export const retrieveMeta = (options = {}) => {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'element' && node.tagName === 'code' && node.properties && node.properties['dataMeta']) {
        if (!node.data) {
          node.data = {};
        }
        node.data.meta = node.properties['dataMeta'];
        delete node.properties['dataMeta'];
      }
    });
  };
};
