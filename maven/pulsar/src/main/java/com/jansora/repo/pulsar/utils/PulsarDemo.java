package com.jansora.repo.pulsar.utils;//package com.jansora.app.infrastructure.mq;

import io.github.majusko.pulsar.annotation.PulsarConsumer;
import io.github.majusko.pulsar.producer.ProducerFactory;
import io.github.majusko.pulsar.producer.PulsarTemplate;
import org.apache.pulsar.client.api.PulsarClientException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 * 2021/01/20 22:38:48
 */
public class PulsarDemo {

    private static final Logger LOGGER = LoggerFactory.getLogger(PulsarDemo.class);

    @Autowired
    private PulsarTemplate<String> producer;

    @Bean
    public ProducerFactory producerFactory() {
        return new ProducerFactory()
//                .addProducer("my-topic", MyMsg.class)
                .addProducer("other-topic", String.class);
    }

    void send() throws PulsarClientException {
        producer.send("other-topic", "Hello world!");
    }

    @PulsarConsumer(topic="my-topic", clazz=String.class)
    void consumer(String msg) {
        // TODO process your message
        System.out.println(msg);
    }


}
