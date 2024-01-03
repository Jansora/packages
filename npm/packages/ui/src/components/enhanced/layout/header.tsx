import {Separator} from "@jansora/ui/esm/components/ui/separator";
import React from "react";
import {FunctionComponentProps} from "../../../lib/declares";


export interface HeaderProps extends FunctionComponentProps {
    left: React.ReactNode,
    right: React.ReactNode,
}

export default async function Header({left, right}: HeaderProps) {

    return <header className="fixed inset-x-0 top-0 z-10 w-full h-12 sm:px-5 flex items-center" style={{backgroundColor: "hsl(var(--background))"}}>
        <nav className="flex items-center justify-between px-4 lg:px-2 h-full w-full lg:mx-auto " aria-label="Global">
            {
                left
            }

            <div className="flex-auto h-full">

            </div>

            <div className="flex items-center justify-end">

                {
                    right
                }

            </div>
        </nav>
        <Separator orientation="horizontal" className="absolute my-1 w-full mt-12"/>
    </header>
}