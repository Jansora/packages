import React, {useState} from 'react';
import styled from "styled-components";
import {Icon} from "semantic-ui-react";


/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */

const StyledTreeNode = styled.li`
  width: 100%;

  line-height: 28px;

  
  div.styled-tree-node-wrapper {
    &:hover, .styled-tree-node-action-active {
      .styled-tree-node-action {
        display: inline-block;
      }
      background-color: var(--text-color-2);
    }
    &:active {
      background-color: var(--text-color-1);
    }
    width: 100%;
    height: 28px;
    padding-left: 14px;
    margin-bottom: 4px;
    cursor: pointer;
    border-radius: 5px;
  }
  

  
  .styled-tree-node-expand-icon {
    position: absolute;
    padding-left: 8px;
    margin-right: 0;
    width: 24px!important;
    height: 28px!important;
    line-height: 28px!important;
  }
  .styled-tree-node-content-wrapper {
    width: calc(100% - 28px);
    margin-left: 28px;
    margin-right: 50px;
  }
  
  .styled-tree-node-content-file-icon {
    width: 20px;
    height: 20px;
    padding: 0 3px;
  }
  .styled-tree-node-action {
    display: none;
    float: right;
    
  }
  
`


const renderIcon = (name) => {
    return <Icon name="caret right" />
}

const TreeNode = ({data, children}) => {

    const { name, dir, action } = data;
    const [open, setOpen] = useState(false)

    const onClick = () => {
        setOpen(!open)
    }

    return <StyledTreeNode>
        <div className="styled-tree-node-wrapper" onClick={onClick}>
            <span className="styled-tree-node-expand-icon"> {dir ? (open ? <Icon name="caret down" /> : <Icon name="caret right" /> ) : null } </span>
            <span className="styled-tree-node-content-wrapper">
                <span className="styled-tree-node-content-file-icon" >
                    {dir ? (open ? <Icon name="folder open" /> : <Icon name="folder" /> ) : <Icon name="file" /> }
                </span>
                <span className="styled-tree-node-content-file-content" >
                    {name}
                </span>

                <div className="styled-tree-node-action"
                     onMouseEnter={(event) => {event.target && event.target.classList.add("styled-tree-node-action-active")}}
                     onMouseOut={(event) => {event.target && event.target.classList.remove("styled-tree-node-action-active")}}
                >

                    {action && ((data) => action(data))(data)}
                </div>
            </span>
        </div>


        {
            children && children.length > 0 && open && <ul>
                {
                    children.map(data__ => {
                        return <TreeNode data={data__}>
                            {data__.children ? data__.children : []}
                        </TreeNode>

                    })
                }
            </ul>
        }

    </StyledTreeNode>;
}

export default TreeNode;