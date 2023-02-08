import React, {useEffect, useState} from 'react';
import {Dimmer, Grid, Loader} from "semantic-ui-react";
import {FetchRenderAction} from "../../../../components/request/action";
import {Tree} from 'antd';
import ComponentRender from "../component/ComponentRender";
import {formatHighlightLanguage} from "../../../../components/utils";

const { DirectoryTree } = Tree;


/**
 * <Description> Description for ActionRender <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/5/6 17:34:14 <br>
 * @since 1.0 <br>
 */

const ActionRender = ({template, variable, style}) => {


  const [tree, , loading, setLoading] = FetchRenderAction(template, variable);

  const [componentTemplate, setComponentTemplate] = useState("")
  // const [componentVariable, setComponentVariable] = useState(variable)


  useEffect(() => {
    setLoading(true)
  }, [template, variable,  setLoading])


  if(loading) {
    return <Dimmer active={true} inverted>
      <Loader active inline='centered' />
    </Dimmer>
  }

  // console.log("tree", tree)

  const renderTreeData = (data, key) => {

    return data.map(d => {
      const currentKey = key + "-" + d.path + d.dir.toString()
      return {
          ...d,
          key: currentKey,
          title: d.path,
          isLeaf: !d.dir,
          children: d.children ? renderTreeData(d.children, currentKey) : []
        }

    })

  }
  const onSelect = (keys, info) => {

    const {node} = info

    if (node.isLeaf) {
      setComponentTemplate(node.component.raw)

      variable.language = formatHighlightLanguage(node.title)

    }


  };

  return <React.Fragment>
    <Grid inverted>
      <Grid.Column width={4}>
        <DirectoryTree
          defaultExpandAll={true}
          onSelect={onSelect}
          treeData={renderTreeData(tree.children || [], 'root')}
        />
      </Grid.Column>

      <Grid.Column width={12} style={{padding: "0 1rem 1rem 1rem"}}>
        <ComponentRender template={componentTemplate} variable={variable} style={style ? style : {}} />
      </Grid.Column>


    </Grid>


  </React.Fragment>;
}

export default ActionRender;