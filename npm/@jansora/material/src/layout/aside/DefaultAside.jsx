import React from 'react';
import FlexPadding from "../../components/styled/base/FlexPadding";
import {Link} from "react-router-dom";
import StyledIconFont from "../../components/styled/StyledIconFont";


const DefaultAside = () => {

  return <React.Fragment>

    <label>导航</label>
    <Link to="/"><div className="icon"><StyledIconFont type="icon-icon_home" /></div>前往主站</Link>
    {/*<Divider />*/}
    <label>应用</label>


    <Link to="/notebook"><div className="icon"><StyledIconFont type="icon-blogger" /></div>闲文杂记</Link>
    <Link to="/play"><div className="icon"><StyledIconFont type="icon-googleplayicon" /></div>代码在线</Link>
    <Link to="/codehub"><div className="icon"><StyledIconFont type="icon-mofang" /></div>代码魔方</Link>
    <Link to="/beike"><div className="icon"><StyledIconFont type="icon-beike7" /></div>房价浅析</Link>
    {/*<Link to="/"><div className="icon"><StyledIconFont type="icon-line_chart" /></div>房价浅析</Link>*/}

    {/*<label>专栏</label>*/}

    {/*<StyledA href="https://code.doc.jansora.com/"><div className="icon"><StyledIconFont type="icon-program" /></div>戎码一生</StyledA>*/}

    <FlexPadding />
  </React.Fragment>

}

export default DefaultAside;
