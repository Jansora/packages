import React from 'react';
import StyledHeader from "../../components/styled/StyledHeader";
import {Divider, Popover, Space} from 'antd';

import StyledDescription from "../../components/styled/base/StyledDescription";
import FlexPadding from "../../components/styled/base/FlexPadding";
import StyledIconFont from "../../components/styled/StyledIconFont";
import StyledA from "../../components/styled/StyledA";
// import User from "../../../view/user";
import GetTitle from "../../hooks/getter/GetTitle";
import GetDescription from "../../hooks/getter/GetDescription";
import {GithubOutlined} from "@ant-design/icons";
// import Theme from "./Theme";
import {useResponsive} from "ahooks";
import {Link} from "react-router-dom";
import GetDarkMode from "../../hooks/getter/GetDarkMode";
import User from "./user";
import {Header as HeaderA, Icon} from "semantic-ui-react";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:03:45 <br>
 * @since 1.0 <br>
 */



const Header = () => {
  const responsive = useResponsive();
  const title = GetTitle();
  const description = GetDescription();


  return <StyledHeader>


    <Link to="/" style={{margin: 0}}>
      <img style={{height: 35, marginRight: 0, marginTop: 0}} src={`https://cdn.jansora.com/logo/${GetDarkMode() ? 'black' : 'main'}.png`}  alt="logo" />
    </Link>

    <Icon style={{margin: "0 10px 5px 10px"}} name="triangle right" inverted={GetDarkMode()} />

    {/*<Divider type="vertical" style={{margin: "0 10px"}}/>*/}
    <HeaderA as="h3" inverted={GetDarkMode()}
             style={{marginTop: 15}}
    >

    <HeaderA.Subheader>
      {title ? title : 'Default'}
    </HeaderA.Subheader>
    </HeaderA>

    <Icon style={{margin: "0 10px 5px 10px"}} name="triangle right" inverted={GetDarkMode()} />

    {/*<Divider type="vertical" style={{margin: "0 10px"}}/>*/}
    <StyledDescription>{description ? description : 'Default'}</StyledDescription>



    <FlexPadding />
    <Space >
      {
        responsive.middle && <>
            <Popover
                trigger='hover'
                content={<img style={{width: 125}} src="https://cdn.jansora.com/homepage/wechat.jpg"  alt="weixin" />}
            >
              <StyledIconFont type="icon-weixin"  />
            </Popover>
            <Divider type="vertical"/>
            <StyledA href={"https://github.com/Jansora/app"}>
              <GithubOutlined style={{fontSize: 16}} />

            </StyledA>

            <Divider type="vertical"/>

            <User />
            {/*<Divider type="vertical"/>*/}
          </>
      }

      {/*<User />*/}
    </Space>

  </StyledHeader>;
}

export default Header;