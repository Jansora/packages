import React, {useEffect} from 'react';
import {FetchRenderComponent} from "../request/component";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";
import {Viewer} from "@jansora/bytemd";
import styled from "styled-components";

/**
 * <Description> Description for ComponentRender <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/5/6 17:34:14 <br>
 * @since 1.0 <br>
 */

const StyledViewerWrapper = styled.div `
  .hljs {
    height: 500px !important;
    overflow-y: auto;
  }
  .markdown-body {
    //padding-top: 0;
    //margin-top: -13px;
  }
`

const ComponentRender = ({template, variable, style}) => {


  const dark = GetDarkMode();
  // eslint-disable-next-line
  const [raw, _, __, setLoading] = FetchRenderComponent(template, variable);

  useEffect(() => {
    setLoading(true)
    // eslint-disable-next-line
  }, [template, variable])


  return <StyledViewerWrapper style={style ? style : {}}>
    <Viewer value={'```' + (variable && variable.__language ? variable.__language : "html") + '\n' +raw + '\n```'} />
  </StyledViewerWrapper>;
}

export default ComponentRender;