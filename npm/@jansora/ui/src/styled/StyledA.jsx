import React from "react";

const StyledA = ({href, children}) => {
    console.log("aa", href, children)
    return <a target="_blank"  rel='noopener noreferrer'
                 href={href}>
        {children}
    </a>


}

export default StyledA;
