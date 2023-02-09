import styled from "styled-components";
import {useState} from "react";
import {useTimeout} from "ahooks";


const StyledModuleWrapper = styled.div`
  padding: 24px;
  
`

const LoadingLeft = styled.div`
  position: fixed;
  top: var(--header-height);
  left: var(--aside-width);
  right: 0;
  bottom: var(--footer-height);
  width: ${props => props.Loading ? 'calc(100%)' : '0'};
  margin-right: ${props => props.Loading ? '0' : 'calc(100% )'};
  height: 100%;
  background: var(--background-color-1);
  transition: 1000ms width ease-in-out, 1000ms margin ease-in-out;
  z-index: 1000;
`

const LoadingRight = styled.div`
  position: fixed;
  top: var(--header-height);
  left: var(--aside-width);
  right: 0;
  bottom: var(--footer-height);
  width: ${props => props.Loading ? 'calc(100%)' : '0'};
  margin-left: ${props => props.Loading ? '0' : 'calc(100%)'};

  background: var(--background-color-1);
  z-index: 1000;
  transition: 1000ms width ease-in-out, 1000ms margin ease-in-out;
`
const StyledPageLoading = ({children}) => {
    const [loading, setLoading ] = useState(true);
    useTimeout(() => setLoading(false), 0);

    return <StyledModuleWrapper >
        <LoadingLeft Loading={loading} />
        <LoadingRight Loading={loading} />
        {children}
    </StyledModuleWrapper>
}

export default StyledPageLoading;
