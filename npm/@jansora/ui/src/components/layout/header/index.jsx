import React from 'react';
import StyledHeader from "../../components/styled/StyledHeader";
import {Divider, Popover, Space} from 'antd';

import StyledDescription from "../../components/styled/base/StyledDescription";
import FlexPadding from "../../components/styled/base/FlexPadding";
import StyledIconFont from "../../components/styled/StyledIconFont";
import StyledA from "../../components/styled/StyledA";
import User from "../../components/view/user";
import GetTitle from "../../components/hooks/getter/GetTitle";
import GetDescription from "../../components/hooks/getter/GetDescription";
import {Link} from "react-router-dom";

import {Header as HeaderA} from "semantic-ui-react";
import {GithubOutlined} from "@ant-design/icons";
import Theme from "./Theme";
import {useResponsive} from "ahooks";


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
    <HeaderA as={Link} to="/" inverted={true} style={{margin: 0, fontSize: 15}}>{title}</HeaderA>
    {/*<Link to="/"><Typography.Title heading={6} style={{margin: 0, fontSize: 15}}>{title}</Typography.Title></Link>*/}
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

            <Theme />
            <Divider type="vertical"/>
          </>
      }

      <User />
    </Space>

  </StyledHeader>;
}

export default Header;