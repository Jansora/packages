package com.jansora.repo.core.payload;

import org.springframework.util.CollectionUtils;

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
public final class TreeUtils {

    /**
     * 摊平
     */
    public static <T extends TreeAble<T, ID>, ID> List<T> flat(List<T> nodes) {
        if (CollectionUtils.isEmpty(nodes)) {
            return new ArrayList<>();
        }
        List<T> result = new ArrayList<>(nodes);
        List<T> children = nodes.stream().map(node -> flat(node.getChildren()))
                .flatMap(Collection::stream).toList();
        result.addAll(children);
        return result;
    }

    /**
     * 收缩为 tree
     */
    public static <T extends TreeAble<T, ID>, ID> List<T> tree(ID parentId, List<T> nodes) {
        if (CollectionUtils.isEmpty(nodes)) {
            return new ArrayList<>();
        }

        return nodes.stream()
                .filter(node -> Objects.equals(parentId, node.getParentId()))
                .peek(treeNode -> treeNode.setChildren(
                            tree(treeNode.getId(), nodes)
                        )
                )
                .collect(Collectors.toList());
    }

}
