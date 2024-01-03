import React from "react";

import {FunctionComponentProps} from "../../../lib/declares";


const PaddedPageLayout = ({children}: FunctionComponentProps) => {


    return (
        <div className="pt-12">
            {children}
        </div>
    )
}

export default PaddedPageLayout;

