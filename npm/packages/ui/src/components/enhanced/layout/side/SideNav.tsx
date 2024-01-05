"use client"

import React from "react";
import {Separator} from "../../../ui/separator";
import {FunctionComponentProps} from "../../../../lib/declares";
import {cn} from "../../../../lib/utils";

interface Props extends FunctionComponentProps {

}

const SideNav = ({children, className}: Props) => {

    return (
        <nav className={cn("h-full w-[250px] overflow-y-auto flex", className)}>
            <div className="w-full h-full">
                {children}
            </div>
            <Separator orientation="vertical" className="mx-1 h-full"/>
        </nav>
    )
}

export default SideNav;

