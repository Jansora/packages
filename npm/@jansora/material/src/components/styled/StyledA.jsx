import React from "react";


// const styledAside = styled.nav`

const StyledA = ({href, children}) => {
    return <a target="_blank"  rel='noopener noreferrer'
                 href={href}>
        {children}
    </a>


}

export default StyledA;
