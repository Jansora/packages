package com.jansora.repo.core.factory;

public interface SimpleMQFactory {

    public boolean send(String topic, String tags, String message) ;

}
