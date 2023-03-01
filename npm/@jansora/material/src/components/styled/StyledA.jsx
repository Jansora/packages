import React from "react";
import StyledText from "./base/StyledText";


// const styledAside = styled.nav`

const StyledA = ({href, children}) => {
    return <a target="_blank"  rel='noopener noreferrer'
                 href={href}>
        <StyledText>
            {children}
        </StyledText>

    </a>


}

export default StyledA;
