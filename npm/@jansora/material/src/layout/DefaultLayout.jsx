import React from 'react';
import MaterialFooter from "./footer/MaterialFooter";
import MaterialLayout from "./MaterialLayout";
import MaterialHeader from "./header/MaterialHeader";
import MaterialAside from "./aside/MaterialAside";
import MaterialSearchView from "./views/market/MaterialSearchView";


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


      {/*<Tree />*/}
      <MaterialSearchView baseUrl={'notebook'} name={'组件'} description={"组件列表"} title={'组件商场'} />

    </MaterialLayout>

    <MaterialFooter/>
  </React.Fragment>;
}

export default DefaultLayout;