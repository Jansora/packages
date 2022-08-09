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

/**
 * <Description> <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @date 2022/8/9 PM02:01 <br>
 * @since 1.0 <br>
 */
@Activate(group = CommonConstants.PROVIDER, value = DubboFilterConstant.AUTH_TOKEN)
public class AuthProviderFilter implements BaseFilter {

    @Override
    public Result invoke(Invoker<?> invoker, Invocation invocation) throws RpcException {
        //设置需要的内容
        RpcContext.getContext().setAttachment(DubboFilterConstant.AUTH_TOKEN, DubboAuthContext.token().toString());
        return invoker.invoke(invocation);
    }
}
