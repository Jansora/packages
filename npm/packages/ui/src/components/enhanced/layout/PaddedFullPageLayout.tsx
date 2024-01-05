import React from "react";

import {FunctionComponentProps} from "../../../lib/declares";
import PageLayout from "./PageLayout";
import {cn} from "../../../lib/utils";


const PaddedFullPageLayout = ({children, className}: FunctionComponentProps) => {


    return (
        <PageLayout>
            <div className={cn("mt-12 w-full", className)} style={{height: "calc(100vh - 3rem)"}}>
                {children}
            </div>
        </PageLayout>
    )
}

export default PaddedFullPageLayout;

