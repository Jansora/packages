package com.jansora.repo.core.logging.aspect;

import com.jansora.repo.core.logging.annotation.Logging;
import com.jansora.repo.core.utils.JsonUtils;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;
import java.util.Objects;

/**
 * 日志切面
 */
@Component
@Aspect
public class LoggingAspect {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoggingAspect.class);

    private static final String LOGGING_PREFIX = "[ --- LOG --- ] ";

    /**
     * 日志切面
     * @param proceedingJoinPoint p
     * @return Naive retVal
     * @throws Throwable Naive exception
     */
    @Around("@annotation(com.jansora.repo.core.logging.annotation.Logging)")
    public Object logging(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {

        // debug 日志没开啥也不做
        if (!LOGGER.isDebugEnabled()) {
            return proceedingJoinPoint.proceed();
        }

        MethodSignature signature = (MethodSignature) proceedingJoinPoint.getSignature();
        Method method = signature.getMethod();

        Logging ceeLogging = method.getAnnotation(Logging.class);

        String function = signature.getDeclaringType().getSimpleName() + "#" + signature.getName() + "() ";

        Throwable throwable = null;
        Object retVal = null;

        try {
            StringBuilder sb = new StringBuilder();
            sb.append(LOGGING_PREFIX).append(function).append("() start");
            if (ceeLogging.printArgs()) {
                sb.append(" args: [ ").append(JsonUtils.toJson(proceedingJoinPoint.getArgs())).append(" ]");
            }
            LOGGER.debug(sb.toString());
        }
        catch (Exception e) {
            LOGGER.debug(LOGGING_PREFIX + function + "print args : exception:{}", e.getMessage());
        }
        long start = System.nanoTime();
        try {
            retVal = proceedingJoinPoint.proceed();
        }
        catch (Throwable e) {
            throwable = e;
        }
        finally {
            float cost = (float) (System.nanoTime() - start) / 1000_000;
            try {
                StringBuilder sb = new StringBuilder();
                sb.append(LOGGING_PREFIX)
                        .append("[ cost: ").append(cost).append(" ms. ] ")
                        .append(function).append(" end. ");

                if (ceeLogging.printRetVal()) {
                    sb.append(" retVal: [").append(JsonUtils.toJson(retVal)).append("]");
                }
                LOGGER.debug(sb.toString());
            }
            catch (Exception e) {
                LOGGER.debug(LOGGING_PREFIX + function + "print retVal error: exception:{}", e.getMessage());
            }
        }

        if (Objects.nonNull(throwable)) {
            throw throwable;
        }

        return retVal;
    }


}
