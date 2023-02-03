import React from 'react';
import MountTheme from "./mount/MountTheme";
import MountColor from "./MountColor";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:08:10 <br>
 * @since 1.0 <br>
 */

const Mount = () => {

  return <React.Fragment>
    <MountTheme />
    <MountColor />
    {/*<MountMessage />*/}
  </React.Fragment>;
}

export default Mount;