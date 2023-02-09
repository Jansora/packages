import React, {useContext} from 'react';
import StyledFooter from "../../components/styled/StyledFooter";
import StyledDescription from "../../components/styled/base/StyledDescription";
import {Divider, Space, Switch, Tag} from "@arco-design/web-react";
import StyledIconFont from "../../components/styled/StyledIconFont";
// import {Image} from "semantic-ui-react";
import {useResponsive} from "ahooks";
import {THEME_DARK, THEME_LIGHT} from "@jansora/global/lib/constant/global";
import GetTheme from "../../hooks/getter/GetTheme";
import {GlobalStore} from "@jansora/global/es/store/global";

// import Header from "../header";


/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:28:54 <br>
 * @since 1.0 <br>
 */

const DefaultFooter = () => {

  const responsive = useResponsive();
  const theme = GetTheme();

  const {dispatch} = useContext(GlobalStore);
  const SetTheme = (theme) => {
    const payload = theme;
    dispatch({ type: 'theme', payload });
  };

  // console.log("responsive", responsive)
  return <StyledFooter id="footer">
    <div style={{ margin: "0 auto"}}>

      <Space
          align="center"
          // style={{display: "flex"}}
          // direction='vertical' align="center"
      >
        <StyledDescription >
          Copyright © 2016-2029
        </StyledDescription>

        {
          responsive.middle && <Space>
            <Divider type="vertical" style={{margin: "0 1vw"}}/>
            <StyledDescription >
              Jansora's Galaxy Space
            </StyledDescription>
              <Divider type="vertical" style={{margin: "0 1vw"}}/>
              <StyledDescription>
                暗黑模式:
              </StyledDescription>
              <Switch size="small" checked={theme === THEME_DARK} onChange={checked => SetTheme(checked ? THEME_DARK : THEME_LIGHT)} />
              <a href="https://github.com/Semantic-Org/Semantic-UI-React" target="_blank"  rel='noopener noreferrer'>
                {/*<Image src='https://cdn.jansora.com/logo/semantic-ui.png'*/}
                {/*       avatar style={{width: "16px", height: '16px'}}*/}
                {/*/>*/}
                <Tag size="small">
                </Tag>
              </a>
              <StyledDescription>
                色彩主题:
              </StyledDescription>

              <Divider type="vertical" style={{margin: "0 1vw"}}/>
              <StyledDescription>
                Implement by
              </StyledDescription>
              <a href="@jansora/material/src/layout/footer/index" target="_blank" rel='noopener noreferrer' >
                <StyledIconFont type={"icon-React"} style={{marginTop: "5px"}} />
              </a>
              <StyledDescription>
                and
              </StyledDescription>

              <a href="@jansora/material/src/layout/footer/index" target="_blank" rel='noopener noreferrer' >
                <img style={{width: "16px", marginBottom: "2px", marginTop: "5px"}} src="https://cdn.jansora.com/img/spring.ico" alt={""}/>
              </a>
              <Divider type="vertical" style={{margin: "0 1vw"}}/>
              <StyledDescription>
                Deployed on
                <a style={{marginLeft: 5}} href="@jansora/material/src/layout/footer/index" target="_blank" rel='noopener noreferrer' >
                    Kubernetes
                </a>
              </StyledDescription>
            </Space>
        }


        {/*<StyledDescription>*/}
        {/*  源代码托管于*/}
        {/*</StyledDescription>*/}
        {/*<Link hoverable={false} href={"https://github.com/Jansora/application"}><Tag color='gray' icon={<IconGithub />}>Github</Tag></Link>*/}

        <Divider type="vertical" style={{margin: "0 1vw"}}/>
        <a href="@jansora/material/src/layout/footer/index" target="_blank" rel='noopener noreferrer' >
          <StyledDescription>
            豫ICP备19010665号
          </StyledDescription>
        </a>
      </Space>


    </div>
  </StyledFooter>;
}

export default DefaultFooter;