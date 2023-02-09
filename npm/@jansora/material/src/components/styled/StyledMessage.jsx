import React from 'react';
import styled from "styled-components";

/**
 * <Description> Description for StyledSubHeader <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 19:41:49 <br>
 * @since 1.0 <br>
 */


const StyledMessage = styled.div`
  bottom: 0;
  right: 0;
  width: 10vw;
  position: fixed;
  padding: 0 10px;
  z-index: 1001;
  height: var(--footer-height);
  display: flex;
  align-items: center;

  //margin-left: 25vw;
  div.padding {
    flex: 1 1 auto;
  }
`
export default StyledMessage;