package com.jansora.repo.core.payload.request;

import com.resend.services.emails.model.Attachment;
import lombok.Data;

import java.util.List;

/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2024-09-11 10:50:53
 */
@Data
public class SendEmailRequest {

    /**
     * 发送者
     */
    String from;

    /**
     * 接收者
     */
    String to;

    /**
     * 标题
     */
    String title;

    /**
     * 载荷 （html)）
     */
    String payload;

    /**
     * 附件
     */
    List<Attachment> attachments;


    @Override
    public String toString() {
        return "SendEmailRequest{" +
                "from='" + from + '\'' +
                ", to='" + to + '\'' +
                ", title='" + title + '\'' +
                ", payload='" + payload + '\'' +
                '}';
    }
}
