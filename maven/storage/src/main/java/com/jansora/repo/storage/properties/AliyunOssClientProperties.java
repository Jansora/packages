package com.jansora.repo.storage.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * <Description> Description for AliyunOssClientProperties <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/8/5 PM05:12 <br>
 * @since 1.0 <br>
 */
@Configuration
@ConfigurationProperties(prefix = "app.storage.oss")
public class AliyunOssClientProperties {

    /**
     * 终端地址
     */
    private Boolean enabled = false;

    /**
     * 终端地址
     */
    private String EndPoint;

    /**
     * AccessKeyId
     */
    private String AccessKeyId;

    /**
     * AccessKeySecret
     */
    private String AccessKeySecret;

    /**
     *
     */
    private String Bucket;

    /**
     *
     */
    private String AliasDomain;

    /**
     *
     */
    private String OssReturnPrefix;

    /**
     *
     */
    private String localDomain;

    /**
     *
     */
    private String localLocation;

    /**
     *
     */
    private String localReturnPrefix;

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public String getEndPoint() {
        return EndPoint;
    }

    public void setEndPoint(String endPoint) {
        EndPoint = endPoint;
    }

    public String getAccessKeyId() {
        return AccessKeyId;
    }

    public void setAccessKeyId(String accessKeyId) {
        AccessKeyId = accessKeyId;
    }

    public String getAccessKeySecret() {
        return AccessKeySecret;
    }

    public void setAccessKeySecret(String accessKeySecret) {
        AccessKeySecret = accessKeySecret;
    }

    public String getBucket() {
        return Bucket;
    }

    public void setBucket(String bucket) {
        Bucket = bucket;
    }

    public String getAliasDomain() {
        return AliasDomain;
    }

    public void setAliasDomain(String aliasDomain) {
        AliasDomain = aliasDomain;
    }

    public String getOssReturnPrefix() {
        return OssReturnPrefix;
    }

    public void setOssReturnPrefix(String ossReturnPrefix) {
        OssReturnPrefix = ossReturnPrefix;
    }

    public String getLocalDomain() {
        return localDomain;
    }

    public void setLocalDomain(String localDomain) {
        this.localDomain = localDomain;
    }

    public String getLocalLocation() {
        return localLocation;
    }

    public void setLocalLocation(String localLocation) {
        this.localLocation = localLocation;
    }

    public String getLocalReturnPrefix() {
        return localReturnPrefix;
    }

    public void setLocalReturnPrefix(String localReturnPrefix) {
        this.localReturnPrefix = localReturnPrefix;
    }
}
