import React from 'react';

import StyledCenterHeader from "../../components/styled/StyledCenterHeader";


/**
 * <Description> Description for CenterHeader <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:03:45 <br>
 * @since 1.0 <br>
 */

const CenterHeader = ({children, zIndex}) => {

    return <StyledCenterHeader style={{zIndex: zIndex ? zIndex : 1001}}>
        <div className="padding"/>
        <div className="content">

        </div>
        {children}
        <div className="padding"/>
    </StyledCenterHeader>;
}

export default CenterHeader;