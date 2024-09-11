package com.jansora.repo.core.utils;

import com.jansora.repo.core.payload.request.SendEmailRequest;
import com.resend.Resend;
import com.resend.core.exception.ResendException;
import com.resend.services.emails.model.CreateEmailOptions;
import com.resend.services.emails.model.CreateEmailResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;


/**
 * @description:
 * @author: jansora (zhang.yangyuan)
 * @date: 2024-09-11 10:48:39
 */
@Slf4j
public final class MailUtils {

    public static boolean sendEmail(String apiKey, SendEmailRequest request) throws ResendException {

        Resend resend = new Resend(apiKey);


        CreateEmailOptions.Builder builder = CreateEmailOptions.builder();

        builder.from(request.getFrom()).to(request.getTo());

        builder.html(request.getPayload()).subject(request.getTitle());
        if (!CollectionUtils.isEmpty(request.getAttachments())) {
            builder.attachments(request.getAttachments());
        }

        try {
            log.info("send email request: {}", request);

            CreateEmailResponse data = resend.emails().send(builder.build());
            log.info("send email response: {}", data);

            return StringUtils.hasLength(data.getId());
        }
        catch (ResendException e) {
            log.error("send email error: {}", request, e);

        }

        return false;
    }
}
