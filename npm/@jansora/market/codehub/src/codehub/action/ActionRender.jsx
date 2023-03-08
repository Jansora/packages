import React, {useState} from 'react';
import {Grid, Loader} from "semantic-ui-react";
import {FetchRenderAction} from "../request/action";
import {Tree} from 'antd';
import ComponentRender from "../component/ComponentRender";
import {formatHighlightLanguage} from "@jansora/material/es/components/utils";
import GetDarkMode from "@jansora/material/es/hooks/getter/GetDarkMode";

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

const updateVar = (value) => {

  try{
    // eslint-disable-next-line
    const Var = Function('"use strict";return (' + value + ')')();
    // console.log("Var", Var)
    if (!Var.__language) {
      Var.__language = "html"
    }
    return Var

  } catch (e) {

  }
  return {}
}

const ActionRender = ({template, variable, style}) => {


  const [tree, , loading] = FetchRenderAction(template, variable);

  const [componentVariable, setComponentVariable] = useState("")

  const [componentTemplate, setComponentTemplate] = useState("")

  const dark = GetDarkMode();



  const renderTreeData = (files) => {

    return files.map(file => {
      return {
          ...file,
          key: file.__filePath,
          title: file.__fileName,
          isLeaf: !file.dir,
          children: file.__children ? renderTreeData(file.__children) : []
        }

    })

  }
  const onSelect = (keys, info) => {

    const {node} = info

    if (node.isLeaf) {
      setComponentTemplate(node.__component.raw)

      setComponentVariable({...variable,  __language: formatHighlightLanguage(node.title), __filePath: node.__filePath, __fileName: node.__fileName})
      variable.language = formatHighlightLanguage(node.title)



    }


  };

  if(loading || !tree) {
    return <Loader active inline='centered' inverted={dark} />
  }

  return <React.Fragment>
    <Grid inverted={dark}>
      <Grid.Column width={4}>
        <DirectoryTree
            style={{overflowX: 'auto'}}
          defaultExpandAll={true}
          onSelect={onSelect}
          treeData={renderTreeData(tree.__children || [])}
        />
      </Grid.Column>

      <Grid.Column width={12} style={{padding: "1rem 1rem 1rem 1rem", overflowY: "auto"}}>
        <ComponentRender template={componentTemplate} variable={componentVariable} style={style ? style : {}} />
      </Grid.Column>


    </Grid>


  </React.Fragment>;
}

export default ActionRender;