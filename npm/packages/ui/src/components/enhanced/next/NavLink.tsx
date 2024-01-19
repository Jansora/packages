"use client"

import Link from "next/link";
import {cn} from "../../../lib/utils";

import {usePathname} from "next/navigation";
import {FunctionComponentProps} from "../../../lib/declares";



interface Props extends FunctionComponentProps {
    active?: boolean,
    href: string
}

export const NavLink = ({active, className, children, href}: Props) => {

    const pathname = usePathname()
    const _active = active == undefined ? decodeURIComponent(pathname || "") === decodeURIComponent(href || "") : false;

    return <Link href={href}
                 className={cn(
                         "text-muted-foreground hover:text-foreground block rounded-md",
                         _active && "text-muted-foreground",
                         className
                 )}
    >
        {children}
    </Link>
}