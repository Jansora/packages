package com.jansora.repo.dubbo.context.auth.filter;

import com.jansora.repo.core.context.AuthContext;
import com.jansora.repo.dubbo.constants.DubboFilterConstant;
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
//@Activate(group = CommonConstants.CONSUMER, value = DubboFilterConstant.AUTH_TOKEN)
public class AuthConsumerFilter implements Filter {

    @Override
    public Result invoke(Invoker<?> invoker, Invocation invocation) throws RpcException {
        Long authId = AuthContext.auth().getAuthId();
        String token = AuthContext.auth().getRole().role();

        RpcContext.getContext().setAttachment(DubboFilterConstant.AUTH_ID, authId.toString());
        RpcContext.getContext().setAttachment(DubboFilterConstant.AUTH_ROLE, token);

        return invoker.invoke(invocation);
    }
}
