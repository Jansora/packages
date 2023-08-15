package com.jansora.repo.core.payload;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-08-15 11:03:42
 */
public final class TreeUtils<T extends TreeAble<T, ID>, ID> {

    /**
     * 摊平
     */
    public List<T> flat(List<T> nodes) {
        List<T> result = new ArrayList<>(nodes);
        List<T> children = nodes.stream().map(TreeAble::getChildren)
                .flatMap(Collection::stream).toList();
        result.addAll(children);
        return result;
    }

    /**
     * 收缩为 tree
     */
    public List<T> tree(List<T> nodes, ID parentId) {
        return nodes.stream()
                .filter(node -> Objects.equals(parentId, node.getParentId()))
                .peek(treeNode -> treeNode.setChildren(tree(nodes, parentId)))
                .collect(Collectors.toList());
    }

}
