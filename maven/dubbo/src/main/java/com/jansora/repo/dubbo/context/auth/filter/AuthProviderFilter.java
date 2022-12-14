package com.jansora.repo.dubbo.context.auth.filter;

import com.jansora.repo.dubbo.constants.DubboFilterConstant;
import com.jansora.repo.dubbo.context.DubboAuthContext;
import org.apache.dubbo.rpc.Filter;
import org.apache.dubbo.rpc.Invocation;
import org.apache.dubbo.rpc.Invoker;
import org.apache.dubbo.rpc.Result;
import org.apache.dubbo.rpc.RpcContext;
import org.apache.dubbo.rpc.RpcException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

/**
 * <Description> <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/9 PM02:01 <br>
 * @since 1.0 <br>
 */
//@Activate(group = CommonConstants.PROVIDER, value = DubboFilterConstant.AUTH_TOKEN)
public class AuthProviderFilter implements Filter {
    private static final Logger LOGGER = LoggerFactory.getLogger(AuthProviderFilter.class);

    @Override
    public Result invoke(Invoker<?> invoker, Invocation invocation) throws RpcException {
        String authId = RpcContext.getContext().getAttachment(DubboFilterConstant.AUTH_TOKEN);
        try {
            DubboAuthContext.setContext(StringUtils.hasLength(authId) ? Long.parseLong(authId) : -1L);
        }
        catch (NumberFormatException e) {
            LOGGER.error("validate token failed. ", e);
            throw new RpcException("validate token failed. ", e);
        }


        return invoker.invoke(invocation);
    }
}
