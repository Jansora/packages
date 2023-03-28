import React from 'react';
import SetTitle from "@jansora/material/es/hooks/setter/SetTitle";
import StyledPageLoading from "@jansora/material/es/components/styled/StyledLoading";
import {Space} from "antd";
import StyledDescription from "@jansora/material/es/components/styled/base/StyledDescription";
import ItemCard from "@jansora/material/es/layout/views/market/ItemCard";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const MaterialKnowledge = (props) => {


    SetTitle('知识图谱')

    const data = [{
        title: "中间件",
        data: [
            {
                name: "深入浅出 ElasticSearch", description: "Wrote by Jansora",
                link: "https://elasticsearch.docs.jansora.app",
                logo: "https://cdn.jansora.com/application/Jansora/2020/04/29/es.jpg"
            },
            {
                name: "深入浅出数据库", description: "Wrote by Jansora",
                link: "https://database.docs.jansora.app",
                logo: "https://cdn.jansora.com/application/Jansora/2020/08/24/03:28:36/sql.jpeg"
            },
        ]
    }]

    return <React.Fragment>
        <StyledPageLoading>
            <div style={{width: "60vw", margin: "0 auto"}}>
                {
                    data.map((d, index) => {
                        return <React.Fragment key={index}>
                            <StyledDescription style={{fontSize: 12, display: "block", marginBottom: 15}}>{d.title}</StyledDescription>
                            <Space wrap={true} size="large">
                                {
                                    d.data.map((item, index) => {
                                        return <ItemCard key={index} data={item} />
                                    })
                                }
                            </Space>
                        </React.Fragment>
                    })
                }


            </div>
        </StyledPageLoading>

    </React.Fragment>;
}

export default MaterialKnowledge;