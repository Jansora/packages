package com.jansora.repo.dubbo.context.auth.filter;

import com.jansora.repo.core.auth.AuthContext;
import com.jansora.repo.core.payload.valobj.AuthValueObject;
import com.jansora.repo.dubbo.constants.DubboFilterConstant;
import lombok.extern.slf4j.Slf4j;
import org.apache.dubbo.rpc.*;
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
@Slf4j
//@Activate(group = CommonConstants.PROVIDER, value = DubboFilterConstant.AUTH_TOKEN)
public class AuthProviderFilter implements Filter {

    @Override
    public Result invoke(Invoker<?> invoker, Invocation invocation) throws RpcException {

        String authId = RpcContext.getContext().getAttachment(DubboFilterConstant.AUTH_ID);
        String authRole = RpcContext.getContext().getAttachment(DubboFilterConstant.AUTH_ROLE);
        String requestId = RpcContext.getContext().getAttachment(DubboFilterConstant.REQUEST_ID);
//        String requestId = AuthValueObject.requestId();

        try {
            AuthContext.setContext(StringUtils.hasLength(authId) ? new AuthValueObject(Long.parseLong(authId), authRole, requestId) : new AuthValueObject(requestId));
        }
        catch (NumberFormatException e) {
            log.error("validate token failed. ", e);
            throw new RpcException("validate token failed. ", e);
        }


        String serviceName = invocation.getServiceName().split("\\.")[invocation.getServiceName().split("\\.").length -1];

        log.info("dubbo provider start: {}#{} requestId: {} auth_id: {} role: {} arguments: {}",
                serviceName, invocation.getMethodName(), requestId,  AuthContext.auth().getAuthId(), AuthContext.auth().getRole(), invocation.getArguments()
        );
        Result result = invoker.invoke(invocation);
        log.info("dubbo provider end: {}#{} requestId: {} ",
                serviceName, invocation.getMethodName(), requestId
        );
        return result;
    }
}
