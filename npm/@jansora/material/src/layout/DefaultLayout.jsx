import React from 'react';
import MaterialAside from "./aside/MaterialAside";
import MaterialHeader from "./header/MaterialHeader";
import MaterialFooter from "./footer/MaterialFooter";
import MaterialSearchView from "./views/market/MaterialSearchView";
import MaterialLayoutHeader from "./MaterialLayoutHeader";
import MaterialLayout from "./MaterialLayout";


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
    <MaterialHeader />
    <MaterialAside />
    <MaterialLayout>
      <MaterialLayoutHeader>
        1212311111111111111111111111
      </MaterialLayoutHeader>
      <section>
        <MaterialSearchView baseUrl={'codehub/component'} name={'组件'} description={"组件列表"} title={'组件商场'} />

      </section>


    </MaterialLayout>

    <MaterialFooter/>
  </React.Fragment>;
}

export default DefaultLayout;