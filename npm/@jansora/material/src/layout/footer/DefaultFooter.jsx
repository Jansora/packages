import React, {useContext} from 'react';
import StyledFooter from "../../components/styled/StyledFooter";
import StyledDescription from "../../components/styled/base/StyledDescription";
import {Divider, Space, Switch, Tooltip} from "antd";
import StyledIconFont from "../../components/styled/StyledIconFont";
// import {Image} from "semantic-ui-react";
import {useResponsive} from "ahooks";
import {COLOR_LIST, THEME_DARK, THEME_LIGHT} from "@jansora/global/lib/constant/global";
import GetTheme from "../../hooks/getter/GetTheme";
import {GlobalStore} from "@jansora/global/es/store/global";
import {Label} from "semantic-ui-react";
import StyledA from "../../components/styled/StyledA";

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
  const SetColor = (color) => {
    console.log("color", color)
    const payload = color;
    dispatch({ type: 'color', payload });
  };
  return <React.Fragment>
        {
          responsive.middle && <Space>
            {/*<Divider type="vertical" style={{margin: "0 1vw"}}/>*/}
            {/*  <StyledDescription >     Jansora's Galaxy Space          </StyledDescription>*/}
            {/*  <Divider type="vertical" style={{margin: "0 1vw"}}/>*/}
              <StyledDescription>
                暗黑主题:
              </StyledDescription>
              <Switch size="small" checked={theme === THEME_DARK} onChange={(checked) => SetTheme(checked ? THEME_DARK : THEME_LIGHT)} />
              <a href="https://github.com/Semantic-Org/Semantic-UI-React" target="_blank"  rel='noopener noreferrer'>
                {/*<Image src='https://cdn.jansora.com/logo/semantic-ui.png'*/}
                {/*       avatar style={{width: "16px", height: '16px'}}*/}
                {/*/>*/}
                {/*<Tag size="small">*/}
                {/*</Tag>*/}
              </a>
              <Divider type="vertical" style={{margin: "0 1vw"}}/>
              <StyledDescription>
                色彩主题:
              </StyledDescription>
              <div style={{marginTop: 3}}>
                {COLOR_LIST.map((color) =>
                    <Tooltip title={color.description} key={color.color}>
                      <Label onClick={() => SetColor(color.color)} key={color.color}
                             title={color.color}
                             circular color={color.color} empty style={{marginRight: 5, cursor: "pointer"}}/>
                    </Tooltip>

                )}
              </div>
              {/*<Divider type="vertical" style={{margin: "0 1vw"}}/>*/}
              {/*<StyledDescription>*/}
              {/*  Implement by*/}
              {/*</StyledDescription>*/}
              {/*<a href="@jansora/material/src/layout/footer/index" target="_blank" rel='noopener noreferrer' >*/}
              {/*  <StyledIconFont type={"icon-React"} style={{marginTop: "5px"}} />*/}
              {/*</a>*/}
              {/*<StyledDescription>*/}
              {/*  and*/}
              {/*</StyledDescription>*/}
              {/**/}
              {/*<a href="@jansora/material/src/layout/footer/index" target="_blank" rel='noopener noreferrer' >*/}
              {/*  <img style={{width: "16px", marginBottom: "2px", marginTop: "8px"}} src="https://cdn.jansora.com/img/spring.ico" alt={""}/>*/}
              {/*</a>*/}
              {/*<Divider type="vertical" style={{margin: "0 1vw"}}/>*/}
              {/*<StyledDescription>*/}
              {/*  Deployed on*/}
              {/*</StyledDescription>*/}
              {/*<StyledA href="1" target="_blank" rel='noopener noreferrer' >*/}
              {/*  Kubernetes*/}
              {/*</StyledA>*/}
            </Space>
        }


        {/*<StyledDescription>*/}
        {/*  源代码托管于*/}
        {/*</StyledDescription>*/}
        {/*<Link hoverable={false} href={"https://github.com/Jansora/application"}><Tag color='gray' icon={<IconGithub />}>Github</Tag></Link>*/}

        {/*<Divider type="vertical" style={{margin: "0 1vw"}}/>*/}
        {/*<a href="@jansora/material/src/layout/footer/index" target="_blank" rel='noopener noreferrer' >*/}
        {/*  <StyledDescription>*/}
        {/*    豫ICP备19010665号*/}
        {/*  </StyledDescription>*/}
        {/*</a>*/}

  </React.Fragment>;
}

export default DefaultFooter;