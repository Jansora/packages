package com.jansora.repo.dubbo.context.auth.filter;

import com.jansora.repo.core.auth.AuthContext;
import com.jansora.repo.dubbo.constants.DubboFilterConstant;
import lombok.extern.slf4j.Slf4j;
import org.apache.dubbo.rpc.*;

/**
 * <Description> <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/9 PM02:01 <br>
 * @since 1.0 <br>
 */
@Slf4j
//@Activate(group = CommonConstants.CONSUMER, value = DubboFilterConstant.AUTH_TOKEN)
public class AuthConsumerFilter implements Filter {

    @Override
    public Result invoke(Invoker<?> invoker, Invocation invocation) throws RpcException {
        Long authId = AuthContext.auth().getAuthId();
        String token = AuthContext.auth().getRole().role();
        String requestId = AuthContext.auth().getRequestId();

        RpcContext.getContext().setAttachment(DubboFilterConstant.AUTH_ID, authId.toString());
        RpcContext.getContext().setAttachment(DubboFilterConstant.AUTH_ROLE, token);
        RpcContext.getContext().setAttachment(DubboFilterConstant.REQUEST_ID, requestId);

        log.info("dubbo consumer start: {}#{} {} arguments: {} auth: {} ",
                invocation.getServiceName(), invocation.getMethodName(), requestId, invocation.getArguments(), AuthContext.auth()
        );
        return invoker.invoke(invocation);
    }
}
