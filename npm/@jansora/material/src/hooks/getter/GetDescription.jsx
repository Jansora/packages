import {useContext} from 'react';
import {GlobalStore} from "@jansora/global/es/store/global";

/**
 * <Description> Description for GetDescription <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:09:35 <br>
 * @since 1.0 <br>
 */

const GetDescription = () => {

  const {description} = useContext(GlobalStore);

  return description ? description : "";
}

export default GetDescription;