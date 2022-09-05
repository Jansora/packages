package com.jansora.repo.storage.repository;

import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.model.PutObjectRequest;
import com.jansora.app.repo.core.exception.auth.ForbiddenException;
import com.jansora.app.repo.core.exception.dao.DataOperationException;
import com.jansora.app.repo.core.exception.web.BadRequestException;
import com.jansora.repo.storage.payload.UploadDto;
import com.jansora.repo.storage.properties.AliyunOssClientProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

/**
 * <Description> Description for StorageRepository <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/8/5 PM04:40 <br>
 * @since 1.0 <br>
 */
@Repository
public class StorageRepository {

    @Autowired
    AliyunOssClientProperties aliyunOSSProperties;

    private static OSS ossClient;

    private static final SimpleDateFormat dateFormat =  new SimpleDateFormat("/yyyy/MM/dd/hh:mm:ss/");

    public StorageRepository(@Autowired AliyunOssClientProperties aliyunOSSProperties) {

        if (aliyunOSSProperties.getEnabled()) {
            ossClient = new OSSClientBuilder().build(
                    aliyunOSSProperties.getEndPoint(),
                    aliyunOSSProperties.getAccessKeyId(),
                    aliyunOSSProperties.getAccessKeySecret()
            );

        }

    }
    public String UploadToTemp(File file) throws BadRequestException, DataOperationException {
        if (aliyunOSSProperties.getEnabled()) {
            return SaveToOSSTemp(file);
        }
        throw new DataOperationException();
    }

    public String SaveToOSSTemp(File file) {


        if(ossClient == null)
            ossClient = new OSSClientBuilder().build(
                    aliyunOSSProperties.getEndPoint(), aliyunOSSProperties.getAccessKeyId(), aliyunOSSProperties.getAccessKeySecret());

        String path =  aliyunOSSProperties.getOssReturnPrefix()
                + "tmp" + new SimpleDateFormat("/yyyy/MM/dd/").format(new Date()) + UUID.randomUUID();
        PutObjectRequest putObjectRequest = new PutObjectRequest(
                aliyunOSSProperties.getBucket(), path, file);
        ossClient.putObject(putObjectRequest);
        return aliyunOSSProperties.getAliasDomain() + "/" + path;
    }

    public UploadDto upload(MultipartFile file, String username) throws BadRequestException, ForbiddenException {
        return saveToOSS(file, username);
    }


    public UploadDto saveToOSS(MultipartFile file, String username) throws BadRequestException, ForbiddenException {
        if (!aliyunOSSProperties.getEnabled()) {
            throw new ForbiddenException("禁止上传文件, 此配置尚未打开");
        }
        if(ossClient == null)
            ossClient = new OSSClientBuilder().build(
                    aliyunOSSProperties.getEndPoint(), aliyunOSSProperties.getAccessKeyId(), aliyunOSSProperties.getAccessKeySecret());

        String Path =  aliyunOSSProperties.getOssReturnPrefix() + username
                + dateFormat.format(new Date())
                + file.getOriginalFilename();
        try {
            PutObjectRequest putObjectRequest = new PutObjectRequest(
                    aliyunOSSProperties.getBucket(), Path, file.getInputStream());
            ossClient.putObject(putObjectRequest);
        } catch (IOException e) {
            throw new BadRequestException("文件上传到 OSS 失败");

        }
        UploadDto result = new UploadDto();
        result.setFilename(file.getOriginalFilename());
        result.setUrl(aliyunOSSProperties.getAliasDomain() + "/" + Path);
        return result;
    }



}
