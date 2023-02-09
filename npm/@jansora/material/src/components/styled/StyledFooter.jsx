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
  bottom: 0;
  left: var(--aside-width);
  right: 0;
  height: var(--footer-height);
  background-color: var(--background-color-1);
  display: flex;
  align-items: center;
  img {
    width: 18px;
  }
`

export default StyledFooter;