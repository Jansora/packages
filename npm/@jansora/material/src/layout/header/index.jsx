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
import {Header as HeaderA} from "semantic-ui-react";

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
    {/*<Link to="/"><Typography.Title heading={6} style={{margin: 0, fontSize: 15}}>{title}</Typography.Title></Link>*/}
    {/*<div style={{background: "var(--light-background-color-1)"}}>*/}
    {/*</div>*/}

    <Link to="/" inverted={GetDarkMode()} style={{margin: 0}}>
      <img style={{height: 35, marginRight: 10, marginTop: 0}} src={`https://cdn.jansora.com/logo/${GetDarkMode() ? 'black' : 'main'}.png`}  alt="logo" />
    </Link>
    <HeaderA as={Link} to="/" inverted={GetDarkMode().toString()} style={{marginLeft: 50, marginTop: 15}}>{title}</HeaderA>
    {/*<Divider type="vertical" style={{margin: "0 10px"}}/>*/}
    {/*<Link to="/"><Typography.Title level={5} style={{margin: 0}}>{description}</Typography.Title></Link>*/}
    <Divider type="vertical" style={{margin: "0 10px"}}/>
    <StyledDescription>{description} </StyledDescription>



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