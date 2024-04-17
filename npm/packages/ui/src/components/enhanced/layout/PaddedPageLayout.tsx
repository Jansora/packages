import React from "react";

import {FunctionComponentProps} from "../../../lib/declares";
import PageLayout from "./PageLayout";
import {cn} from "../../../lib/utils";


const PaddedPageLayout = ({children, className}: FunctionComponentProps) => {


    return (
        <PageLayout>
            <div  className={cn("pt-12", className)} >
                {children}
            </div>
        </PageLayout>
    )
}

export default PaddedPageLayout;

