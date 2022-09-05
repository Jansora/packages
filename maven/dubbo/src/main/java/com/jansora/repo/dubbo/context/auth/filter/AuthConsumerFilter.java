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

/**
 * <Description> <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/9 PM02:01 <br>
 * @since 1.0 <br>
 */
//@Activate(group = CommonConstants.CONSUMER, value = DubboFilterConstant.AUTH_TOKEN)
public class AuthConsumerFilter implements Filter {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthConsumerFilter.class);


    @Override
    public Result invoke(Invoker<?> invoker, Invocation invocation) throws RpcException {
        Long token = DubboAuthContext.auth().getAuthId();
        RpcContext.getContext().setAttachment(DubboFilterConstant.AUTH_TOKEN, token.toString());
        return invoker.invoke(invocation);
    }
}
