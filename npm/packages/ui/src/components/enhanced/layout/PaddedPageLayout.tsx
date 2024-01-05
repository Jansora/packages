import React from "react";

import {FunctionComponentProps} from "../../../lib/declares";
import PageLayout from "./PageLayout";


const PaddedPageLayout = ({children}: FunctionComponentProps) => {


    return (
        <PageLayout>
            <div className="pt-12">
                {children}
            </div>
        </PageLayout>
    )
}

export default PaddedPageLayout;

