package com.jansora.app.repo.dubbo.context.auth.filter;

import com.jansora.app.repo.dubbo.constants.DubboFilterConstant;
import com.jansora.app.repo.dubbo.context.DubboAuthContext;
import org.apache.dubbo.common.constants.CommonConstants;
import org.apache.dubbo.common.extension.Activate;
import org.apache.dubbo.rpc.BaseFilter;
import org.apache.dubbo.rpc.Invocation;
import org.apache.dubbo.rpc.Invoker;
import org.apache.dubbo.rpc.Result;
import org.apache.dubbo.rpc.RpcContext;
import org.apache.dubbo.rpc.RpcException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * <Description> <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/9 PM02:01 <br>
 * @since 1.0 <br>
 */
@Activate(group = CommonConstants.CONSUMER, value = DubboFilterConstant.AUTH_TOKEN)
public class AuthConsumerFilter implements BaseFilter {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthConsumerFilter.class);


    @Override
    public Result invoke(Invoker<?> invoker, Invocation invocation) throws RpcException {
        String authId = RpcContext.getContext().getAttachment(DubboFilterConstant.AUTH_TOKEN);
        try {
            DubboAuthContext.setContext(Long.parseLong(authId));
        }
        catch (NumberFormatException e) {
            LOGGER.error("validate token failed. ", e);
            throw new RpcException("validate token failed. ", e);
        }

        return invoker.invoke(invocation);
    }
}
