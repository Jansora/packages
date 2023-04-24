package com.jansora.repo.core.function;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-04-24 23:56:40
 */
@FunctionalInterface
public interface AssertPredicate {

    /**
     * Evaluates this predicate on the given argument
     * @return {@code true} if the input argument matches the predicate,
     * otherwise {@code false}
     */
    boolean test();
}

