import React from "react";

export declare interface FunctionComponentProps {
    className?:  string
    children?: React.ReactNode
}

export declare interface LayoutProps {
    children: React.ReactNode
    params: any
}

export declare interface ListItemProps {

        href?: string
        title: string
        label?: boolean
        icon?: string
        description?: string

}
export declare interface ListProps {
    items: ListItemProps[]
}





