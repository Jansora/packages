package com.jansora.repo.rocketmq.factory;

import com.jansora.repo.core.exception.BaseAppException;
import com.jansora.repo.core.factory.mq.SimpleMQFactory;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.client.producer.SendStatus;
import org.apache.rocketmq.spring.core.RocketMQTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Repository;

@Repository
public class RocketMQSimpleFactoryImpl implements SimpleMQFactory {

    private static final Logger LOGGER = LoggerFactory.getLogger(RocketMQSimpleFactoryImpl.class);

    @Autowired
    private RocketMQTemplate rocketMQTemplate;

    @Override
    public boolean send(String topic, String tags, String message) throws BaseAppException {
        LOGGER.debug("rocketmq send message. topic:[{}]  tags:[{}] message:[{}] .", topic, tags, message);

        // springboot不支持使用header传递tags，根据要求，需要在topic后进行拼接 formats: `topicName:tags`，不拼接标识无tag
        String destination = topic + ":" + tags;
        SendResult sendResult = rocketMQTemplate.syncSend(destination,
                MessageBuilder.withPayload(message)
//                        .setHeader(MessageConst.PROPERTY_KEYS, "yourKey")   // 指定业务key
                        .build());

        return SendStatus.SEND_OK.equals(sendResult.getSendStatus());

    }
}
