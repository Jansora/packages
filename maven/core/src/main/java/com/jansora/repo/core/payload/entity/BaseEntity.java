package com.jansora.repo.core.payload.entity;

import com.jansora.repo.core.factory.repository.entity.EntityFactory;
import com.jansora.repo.core.payload.Base;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * <Description> Description for BaseEty <br>
 *
 * @author jansora (zhang.yangyuan) <br>
 * @version 1.0 <br>
 * @email zhangyue1936@gmail.com
 * @transId null
 * @CreateDate 2022/8/2 AM10:35 <br>
 * @since 1.0 <br>
 */

//@Data

@Getter
@Setter
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//@EqualsAndHashCode(callSuper = true)
public class BaseEntity extends Base implements EntityFactory {

    /**
     * 唯一标识
     */
    private Long id;

    /**
     * 创建时间
     */
    private Date createdAt;

    /**
     * 更新时间
     */
    private Date updatedAt;

}
