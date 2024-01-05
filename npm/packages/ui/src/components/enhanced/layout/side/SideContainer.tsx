import React from "react";
import {FunctionComponentProps} from "../../../../lib/declares";
import {cn} from "../../../../lib/utils";

interface Props extends FunctionComponentProps {

}

const SideContainer = ({children, className}: Props) => {

    return (
            <div className={cn("flex w-full h-full", className)}>
                {children}
            </div>
    )
}

export default SideContainer;

