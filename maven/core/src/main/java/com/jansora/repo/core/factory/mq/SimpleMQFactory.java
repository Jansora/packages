package com.jansora.repo.core.factory.mq;

import com.jansora.repo.core.exception.BaseAppException;

public interface SimpleMQFactory {

    public boolean send(String topic, String tags, String message) throws BaseAppException;

}
