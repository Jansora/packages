package com.jansora.repo.core.factory.event;

public interface SimpleMQFactory {

    public boolean send(String topic, String tags, String message) ;

}
