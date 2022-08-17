package com.jansora.repo.mysql.utils;

import com.github.pagehelper.PageHelper;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Consumer;
import java.util.function.Function;

public class PageUtils {

    /*
        单批次最多 10000 条数据
     */
    private static final int PAGE_SIZE = 10000;

    /**
     * 分页查询(分页消费)
     * @param t 查询 function 的 入参
     * @param queryFunction 查询 function. 入参为 t
     * @param consumerFunction 消费函数, 入参为 List<R>;
     */
    public static <T, R> void batchConsumer(T t, Function<T, List<R>> queryFunction, Consumer<List<R>> consumerFunction) {
        AtomicInteger pageNum = new AtomicInteger(1);

        List<R> temp;

        PageHelper.startPage(pageNum.get(), PAGE_SIZE, false);


        while (true) {

            temp = queryFunction.apply(t);
            if (temp.size() == 0) {
                break;
            }

            consumerFunction.accept(temp);

            // 当前尺寸小于页面大小, 说明已经到达最后一页
            if (temp.size() < PAGE_SIZE) {
                break;
            }

            PageHelper.startPage(pageNum.incrementAndGet(), PAGE_SIZE, false);

        }
        PageHelper.startPage(1, 500, false);
    }

}
