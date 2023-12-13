package com.jansora.repo.core.payload;

import com.jansora.repo.core.auth.AuthContext;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2023-12-13 12:12:38
 */
public interface Accessor {

    /**
     * 权限信息
     * @return
     */
    public Boolean getEnabled();

    /**
     * 用户信息
     * @return
     */
    public Long getUserId();

    /**
     * 可访问的
     * @return
     */
    default public boolean accessible() {
        return getEnabled() || AuthContext.auth().getAuthId().equals(getUserId());
    }

}
