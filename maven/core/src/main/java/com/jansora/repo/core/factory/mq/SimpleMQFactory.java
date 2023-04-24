package com.jansora.repo.core.factory.mq;

public interface SimpleMQFactory {

    public boolean send(String topic, String tags, String message) ;

}
