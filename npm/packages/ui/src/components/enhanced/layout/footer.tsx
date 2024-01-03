import React from "react";
import {FunctionComponentProps} from "../../../lib/declares";
import {cn} from "../../../lib/utils";


export default function Footer({children, className}: FunctionComponentProps) {

    return (
        <footer className={cn("flex-1 lg:px-5 bg-background absolute w-full", className)} aria-labelledby="footer-heading">
            {children}
        </footer>
    )
}

