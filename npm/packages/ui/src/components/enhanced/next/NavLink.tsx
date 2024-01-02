"use client"

import Link from "next/link";
import {cn} from "@/lib/utils";
import {FunctionComponentProps} from "@/lib/declares/declares";
import {usePathname} from "next/navigation";


interface Props extends FunctionComponentProps {
    active?: boolean,
    href: string
}

export const NavLink = ({active, className, children, href}: Props) => {

    const pathname = usePathname()
    const _active = active == undefined ? decodeURIComponent(pathname || "") === decodeURIComponent(href || "") : false;

    return <Link href={href}
                 className={cn(
                         "block rounded-md hover:bg-muted",
                         _active && "bg-muted ",
                         className
                 )}
    >
        {children}
    </Link>
}