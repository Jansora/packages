import React from 'react';
import SetDescription from "@jansora/material/es/hooks/setter/SetDescription";
import MaterialSearchView from "@jansora/material/es/layout/views/market/MaterialSearchView";
import MaterialContainer from "@jansora/material/es/components/view/container/MaterialContainer";
import MaterialContainerHeader from "@jansora/material/es/components/view/container/MaterialContainerHeader";
import MaterialContainerContent from "@jansora/material/es/components/view/container/MaterialContainerContent";

/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */


const Notes = (props) => {

    // const {TitleView, ClassifiesView, RelationTagsView, TagsView, PageView, DataView, searchHook} = SearchView('notebook');;

    SetDescription(`文章列表`)

    document.title = "记录人生旅途"

    return <MaterialContainer>
            <MaterialContainerHeader
                left={<React.Fragment>

                    </React.Fragment>
                }
                center={

                }
            />

        <MaterialContainerContent>
            <MaterialSearchView baseUrl={'notebook'} name={'组件'} description={"组件列表"} title={'CodeHub'} />
        </MaterialContainerContent>

    </MaterialContainer>;
}

export default Notes;