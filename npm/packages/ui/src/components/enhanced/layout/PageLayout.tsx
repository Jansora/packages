import React from "react";

import {FunctionComponentProps} from "../../../lib/declares";


export default async function PageLayout({children}: FunctionComponentProps) {


    return (
        <div className="flex flex-col -z-100">
            <main className="min-h-screen vsc-initialized w-full mx-auto ">
                {children}
            </main>
        </div>
    )
}


