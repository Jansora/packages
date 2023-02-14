import React from 'react';

import MaterialLayout from "./layout/MaterialLayout";
import MountUser from "./mount/MountUser";


const DefaultApp = ({children}) => {

    return (
        <React.Fragment>
           <MountUser />
            {
                children || <MaterialLayout />
            }
            <MaterialLayout/>
        </React.Fragment>
    )

}


export default DefaultApp;
