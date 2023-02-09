import React from 'react';
import {Button, Container, Dimmer, Loader} from "semantic-ui-react";
import {Navigate, Route, Routes, useLocation, useNavigate, useParams} from 'react-router-dom';

import {FetchAction} from "../../../../../components/request/action";
import GetTheme from "../../../../../components/hooks/getter/GetTheme";
import Demo from "./Demo";
import SaveAction from "../SaveAction";
import StyledPageLoading from "../../../../../components/styled/StyledLoading";
import {useResponsive} from "ahooks";
import GetLoginStatus from "../../../../../components/hooks/getter/GetLoginStatus";

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/05 16:26:57
 */
// const StyledDropdown = styled(Dropdown)`
//   :hover {
//     //z-index: 1001 !important;
//   }
//   div.ui.active.visible.dropdown {
//
//   }
//
// `
const Action = () => {

  const {id} = useParams();
  const theme = GetTheme()
  const [action, actionLoading] = FetchAction(id)


  const {pathname} = useLocation();
  const navigate = useNavigate();
  const responsive = useResponsive();
  const loginStatus = GetLoginStatus();


  if(id && actionLoading) {
    return   <Dimmer active={actionLoading} inverted>
      <Loader active inline='centered' />
    </Dimmer>
  }

  return <StyledPageLoading>
    <Button.Group>
      <Button
          style={{cursor: "pointer"}}
          color={pathname === `/codehub/action/${action.id}/demo` ? theme : "black"}
          onClick={() => navigate(`/codehub/action/${action.id}/demo`)}
      >
        演示
      </Button>
      {
        loginStatus && responsive.middle && <Button
            style={{cursor: "pointer"}}
            color={pathname === `/codehub/action/${action.id}/edit` ? theme : "black"}
            onClick={() => navigate(`/codehub/action/${action.id}/edit`)}
        >
          编辑
        </Button>
      }

    </Button.Group>


    <Container fluid>
      {pathname === `/codehub/action/${action.id}` && <Navigate replace={true} to={`/codehub/action/${action.id}/demo`} />}

      <Routes>
        <Route path="demo" element={<Demo action={action} />} />
        {/*<Route path="guide" element={<Guide action={action} />} />*/}
        <Route path="edit" element={<SaveAction id={id} />} />
      </Routes>

    </Container>



  </StyledPageLoading>;
}

export default Action;
