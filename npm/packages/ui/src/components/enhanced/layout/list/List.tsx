"use client"

import * as React from "react"
// import { Icons } from "@/components/icons"
import {NavLink} from "../../next/NavLink";
import ListItem from "./ListItem";
import {IconFont} from "../../ui/iconfont/IconFont";
import {cn} from "../../../../lib/utils";
import {FunctionComponentProps, ListProps} from "../../../../lib/declares";


type Props = ListProps & FunctionComponentProps & {
    loading?: boolean
}


const List =({className, items, loading}: Props) => {

    return (
        <ul className={cn("grid gap-2", className)}>
            {
                items.map(item => {
                    const className = "h-8 rounded-sm"
                    if (item.label) {
                        return <li key={item.href} className={className}><h5 className="text-muted-foreground p-2 text-sm w-full flex items-center">
                            {
                                !!item.icon && <IconFont name={item.icon} className="mr-2 h-5 w-5 " />
                            }
                            {item.title}</h5></li>
                    }
                    return <li key={item.href} className={className}><NavLink href={item.href || "/"} >
                        <ListItem title={item.title} icon={item.icon || ""} description={item.description || ""}/>
                    </NavLink>
                    </li>
                })
            }
        </ul>
    )
}

export default List;