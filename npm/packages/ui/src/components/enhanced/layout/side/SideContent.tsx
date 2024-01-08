import React from "react";

import {FunctionComponentProps} from "../../../../lib/declares";
import {cn} from "../../../../lib/utils";

interface Props extends FunctionComponentProps {

}

const SideContent = ({children, className}: Props) => {

    return (
        <div className={cn("w-full", className)}>
                {children}
        </div>
    )
}

export default SideContent;

