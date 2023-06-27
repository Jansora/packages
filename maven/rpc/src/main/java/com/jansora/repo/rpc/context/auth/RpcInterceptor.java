package com.jansora.repo.rpc.context.auth;

import com.jansora.repo.core.context.AuthContext;
import com.jansora.repo.core.exception.auth.ForbiddenException;
import com.jansora.repo.core.exception.auth.UnauthorizedException;
import com.jansora.repo.core.payload.valobj.AuthValueObject;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import static com.jansora.repo.rpc.constants.AuthConstants.ROLE;
import static com.jansora.repo.rpc.constants.AuthConstants.USER_ID;

/**
 * <Description> 权限验证 <br>
 *
 * @author Jansora <br>
 * @version 1.0 <br>
 * @CreateDate 2020/11/20 22:21:29  <br>
 * 
 * @since 4.0 <br>
 */
@Slf4j
@Configuration
public class RpcInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws ForbiddenException, UnauthorizedException {


        String userId = request.getHeader(USER_ID);
        String role = request.getHeader(ROLE);
        if (StringUtils.hasText(userId)) {
            AuthContext.setContext(new AuthValueObject(Long.valueOf(userId), role));
        }
        log.debug("responseInterceptor working. auth:{}", AuthContext.auth());
        return true;
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        AuthContext.clear();
    }
}
