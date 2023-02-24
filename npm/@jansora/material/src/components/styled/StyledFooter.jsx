// import React from 'react';
import styled from "styled-components";

/**
 * <Description> Description for StyledFooter <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:26:58 <br>
 * @since 1.0 <br>
 */

const StyledFooter = styled.footer`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--footer-height);
  background-color: var(--background-color-1);
  display: flex;
  align-items: center;
  img {
    width: 18px;
  }
  box-shadow: 0 0 8px 0 rgba(0,0,0,.1);
`

export default StyledFooter;