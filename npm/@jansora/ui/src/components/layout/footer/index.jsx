import React from 'react';
import StyledFooter from "../../components/styled/StyledFooter";
import StyledDescription from "../../components/styled/base/StyledDescription";
import {Divider, Space} from "antd";
import StyledIconFont from "../../components/styled/StyledIconFont";
import {Image} from "semantic-ui-react";
import {useResponsive} from "ahooks";

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
  return <StyledFooter id="footer">
    <div style={{ margin: "0 auto"}}>

      <Space>
        <StyledDescription >
          Copyright © 2016-2029
        </StyledDescription>

        {
          responsive.middle && <>
            <Divider type="vertical" style={{margin: "0 1vw"}}/>
            <StyledDescription >
              Jansora's Galaxy Space
            </StyledDescription>
              <Divider type="vertical" style={{margin: "0 1vw"}}/>
              <StyledDescription>
                Designed by
              </StyledDescription>

              <a href="https://github.com/Semantic-Org/Semantic-UI-React" target="_blank"  rel='noopener noreferrer'>
                <Image src='https://cdn.jansora.com/logo/semantic-ui.png'
                       avatar style={{width: "16px", height: '16px'}}
                />
              </a>

              <Divider type="vertical" style={{margin: "0 1vw"}}/>
              <StyledDescription>
                Implement by
              </StyledDescription>
              <a  href="https://reactjs.org/" target="_blank"  rel='noopener noreferrer' >
                <StyledIconFont type={"icon-React"} style={{marginTop: "5px"}} />
              </a>
              <StyledDescription>
                and
              </StyledDescription>

              <a  href="https://spring.io/" target="_blank"  rel='noopener noreferrer' >
                <img style={{width: "16px", marginBottom: "2px"}} src="https://cdn.jansora.com/img/spring.ico" alt={""}/>
              </a>
              <Divider type="vertical" style={{margin: "0 1vw"}}/>
              <StyledDescription>
                Deployed on
                <a  style={{marginLeft: 5}} href="https://kubernetes.io/" target="_blank"  rel='noopener noreferrer' >
                    Kubernetes
                </a>
              </StyledDescription>
            </>
        }


        {/*<StyledDescription>*/}
        {/*  源代码托管于*/}
        {/*</StyledDescription>*/}
        {/*<Link hoverable={false} href={"https://github.com/Jansora/application"}><Tag color='gray' icon={<IconGithub />}>Github</Tag></Link>*/}

      </Space>
      <Divider type="vertical" style={{margin: "0 1vw"}}/>
        <a href="https://beian.miit.gov.cn/" target="_blank"  rel='noopener noreferrer' >
          <StyledDescription>
            豫ICP备19010665号
          </StyledDescription>
        </a>

    </div>
  </StyledFooter>;
}

export default DefaultFooter;