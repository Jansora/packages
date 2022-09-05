package com.jansora.repo.storage.payload;

import java.io.Serializable;
import java.util.StringJoiner;

/***
 * Author:jansora
 * E-mail:zhangyue1936@gmail.com
 * Date: 2022/1/18 PM07:04
 * Description:.
 ***/
public class UploadDto implements Serializable {

    /**
     * 文件名
     */
    private String filename;

    /**
     * url
     */
    private String url;

    @Override
    public String toString() {
        return new StringJoiner(", ", UploadDto.class.getSimpleName() + "[", "]")
                .add("filename='" + filename + "'")
                .add("url='" + url + "'")
                .toString();
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
