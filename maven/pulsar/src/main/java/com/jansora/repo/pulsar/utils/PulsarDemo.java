package com.jansora.repo.pulsar.utils;//package com.jansora.app.infrastructure.mq;

import io.github.majusko.pulsar.annotation.PulsarConsumer;
import io.github.majusko.pulsar.producer.ProducerFactory;
import io.github.majusko.pulsar.producer.PulsarTemplate;
import org.apache.pulsar.client.api.PulsarClientException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 * 2021/01/20 22:38:48
 */
public class PulsarDemo {

    private static final Logger LOGGER = LoggerFactory.getLogger(PulsarDemo.class);

    @Autowired
    private PulsarTemplate<byte[]> producer;

    @Bean
    public ProducerFactory producerFactory() {
        return new ProducerFactory()
                .addProducer("topic1")
                .addProducer("topic2");
    }

    void send(String topic, byte[] data) throws PulsarClientException {
        producer.send(topic, data);
    }

    @PulsarConsumer(topic="topic1")
    void consumer(byte[] msg) {
        System.out.println(Arrays.toString(msg));
    }


}
