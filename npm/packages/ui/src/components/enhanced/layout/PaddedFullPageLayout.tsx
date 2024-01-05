import React from "react";

import {FunctionComponentProps} from "../../../lib/declares";
import PageLayout from "./PageLayout";


const PaddedFullPageLayout = ({children}: FunctionComponentProps) => {


    return (
        <PageLayout>
            <div className="mt-12 w-full" style={{height: "calc(100vh - 3rem)"}}>
                {children}
            </div>
        </PageLayout>
    )
}

export default PaddedFullPageLayout;

