package com.jansora.repo.spring;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.boot.SpringApplicationRunListener;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;

import java.util.Objects;

public class SpringContext implements SpringApplicationRunListener {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringContext.class);

    public static ApplicationContext context;

    public static String qryEnv(String key) {
        String result = context.getEnvironment().getProperty(key);
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("ContextUtils.qryEnv: key: " + key + ".  value: " + result);
        }
        return result;
    }

    @Override
    public void contextPrepared(ConfigurableApplicationContext applicationContext) throws BeansException {
        if (Objects.isNull(context)) {
            context = applicationContext;
        }
    }

}
