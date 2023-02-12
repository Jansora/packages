import React from 'react';
import Header from "./header";
import Footer from "./footer";
import {ConfigProvider, theme} from "antd";
import GetTheme from "../hooks/getter/GetTheme";
import {COLOR_LIST, THEME_DARK} from "@jansora/global/lib/constant/global";
import GetColor from "../hooks/getter/GetColor";
import DefaultLayout from "./DefaultLayout";

const { defaultAlgorithm, darkAlgorithm } = theme;

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const MaterialLayout = ({children}) => {

  const dark = GetTheme() === THEME_DARK;
  const color = GetColor();

  const colorPrimaryList = COLOR_LIST.filter(_color => _color.color === color);
  const colorPrimary = colorPrimaryList.length > 0 ? colorPrimaryList[0].color : '#6435c9';

  return <ConfigProvider
      theme={{
        algorithm: dark ? darkAlgorithm : defaultAlgorithm,
        token: { colorPrimary }
      }}
  >
    <Header />
      {
          children || <DefaultLayout />
      }

    <Footer>
    </Footer>
  </ConfigProvider>;
}

export default MaterialLayout;