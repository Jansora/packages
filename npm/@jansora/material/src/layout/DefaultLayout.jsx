import React from 'react';
import MaterialSearchView from "./views/market/MaterialSearchView";
import MaterialContainer from "../components/view/container/MaterialContainer";
import MaterialContainerContent from "../components/view/container/MaterialContainerContent";
import MaterialContainerHeader from "../components/view/container/MaterialContainerHeader";
import {Input} from "semantic-ui-react";


/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const DefaultLayout = () => {

  return <React.Fragment>
    {/*<MaterialHeader />*/}
    {/*<MaterialAside />*/}

    <MaterialContainer>
      <MaterialContainerHeader
          left={<div><Input /></div>}
          center={<div><Input /></div>}
          right={<div><Input /></div>}
      />
      <MaterialContainerContent>
        <MaterialContainer>
          <MaterialContainerHeader
              left={<div><Input /></div>}
              center={<div><Input /></div>}
              right={<div><Input /></div>}
          />
          <MaterialContainerContent>
            <MaterialContainer
                // style={{height: '200px'}}
            >
              <MaterialContainerHeader
                  left={<div><Input /></div>}
                  center={<div><Input /></div>}
                  right={<div><Input /></div>}
              />
              <MaterialContainerContent>
                <MaterialSearchView baseUrl={'codehub/component'} name={'组件'} description={"组件列表"} title={'组件商场'} />
              </MaterialContainerContent>

            </MaterialContainer>

          </MaterialContainerContent>

        </MaterialContainer>
      </MaterialContainerContent>

    </MaterialContainer>


    {/*<MaterialLayout>*/}
    {/*  <MaterialLayoutHeader>*/}
    {/*    1212311111111111111111111111*/}
    {/*  </MaterialLayoutHeader>*/}
    {/*  <section>*/}
    {/*  </section>*/}

    {/*</MaterialLayout>*/}

    {/*<MaterialFooter/>*/}
  </React.Fragment>;
}

export default DefaultLayout;