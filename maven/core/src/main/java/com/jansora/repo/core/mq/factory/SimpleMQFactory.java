package com.jansora.repo.core.mq.factory;

import com.jansora.repo.core.exception.BaseAppException;

public interface SimpleMQFactory {

    public boolean send(String topic, String tags, String message) throws BaseAppException;

}
