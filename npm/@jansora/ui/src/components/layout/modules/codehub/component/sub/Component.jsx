import React from 'react';
import {Button, Container, Dimmer, Loader} from "semantic-ui-react";
import {Navigate, Route, Routes, useLocation, useNavigate, useParams} from 'react-router-dom';

// import {Aside, FlexPadding, Label as CustomLabel, LinkItem, Section} from "../../../components/styled/frameworks";
import Demo from "./Demo";
import Guide from "./Guide";
import GetTheme from "../../../../../components/hooks/getter/GetTheme";
import {FetchComponent} from "../../../../../components/request/component";
import GetLoginStatus from "../../../../../components/hooks/getter/GetLoginStatus";
import StyledPageLoading from "../../../../../components/styled/StyledLoading";
import SaveComponent from "../SaveComponent";
import SetDescription from "../../../../../components/hooks/setter/SetDescription";
import {useResponsive} from "ahooks";

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/05 16:26:57
 */

const Component = (props) => {

  const {id} = useParams();
  const theme = GetTheme()
  const [component, componentLoading] = FetchComponent(id)
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const responsive = useResponsive();
  const loginStatus = GetLoginStatus();

  SetDescription(`组件 - ${component.name}`)

  if(id && componentLoading) {
    return   <Dimmer active={componentLoading} inverted>
      <Loader active inline='centered' />
    </Dimmer>
  }

  return <StyledPageLoading>
    <Button.Group>
      <Button
          style={{cursor: "pointer"}}
          color={pathname === `/codehub/component/${component.id}/demo` ? theme : "black"}
          onClick={() => navigate(`/codehub/component/${component.id}/demo`)}
      >
        演示
      </Button>
      <Button
          style={{cursor: "pointer"}}
          color={pathname === `/codehub/component/${component.id}/guide` ? theme : "black"}
          onClick={() => navigate(`/codehub/component/${component.id}/guide`)}
      >
        使用说明
      </Button>


      {
        loginStatus && responsive.middle && <Button
          style={{cursor: "pointer"}}
          color={pathname === `/codehub/component/${component.id}/edit` ? theme : "black"}
          onClick={() => navigate(`/codehub/component/${component.id}/edit`)}
        >
        编辑
        </Button>
      }

    </Button.Group>


      <Container fluid>
        {pathname === `/codehub/component/${component.id}` && <Navigate replace={true} to={`/codehub/component/${component.id}/demo`} />}

        <Routes>
          <Route path="demo" element={<Demo  component={component} />} />
          <Route path="guide" element={<Guide  component={component} />} />

          <Route path="edit" element={<SaveComponent id={id} />} />
        </Routes>

      </Container>





  </StyledPageLoading>;
}

export default Component;
