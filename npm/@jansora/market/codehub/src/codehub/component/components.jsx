import React from 'react';
import MaterialSearchView from "@jansora/material/es/layout/views/market/MaterialSearchView";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */

const Components = (props) => {

    return <>
       <MaterialSearchView baseUrl={'codehub/component'} name={'组件'} description={"组件列表"} title={'CodeHub'} />
    </>;
}

export default Components;