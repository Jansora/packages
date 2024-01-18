"use client"


import React from "react";
import {FunctionComponentProps, ListProps} from "../../../lib/declares";
import List from "./list/List";
import {cn} from "../../../lib/utils";
// import {FunctionComponentProps, ListProps} from "@/lib/declares/declares";
// import {ListNavRender} from "@/components/custom/ListNavRender";

// import { buttonVariants } from "@jansora/ui/esm/components/ui/button"



export function SidebarNav({ className, items}: ListProps & FunctionComponentProps) {

    return <nav className={cn("", className)}>
        <List items={items} />
    </nav>

}