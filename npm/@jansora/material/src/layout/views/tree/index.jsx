import React from 'react';
import styled from "styled-components";
import TreeNode from "./TreeNode";
import {Icon} from "semantic-ui-react";
import {Dropdown} from "antd";


/**
 * <Description> Description for index <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/11/29 13:07:27 <br>
 * @since 1.0 <br>
 */

const StyledTree = styled.ul`
  width: 300px;
  display: flex;
  flex-direction: column;
  
  &, * {
    list-style: none;
    padding-inline-start: 0;
  }
  &, ul {
    padding-left: 14px;
  }
  ul {
    width: 100%;
  }


  
  > li {
    flex-direction: column;
    list-style: none;
    width: calc(100% - 28px);

  }
`


const Tree = ({data, style}) => {

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
    ]
    const action = (data) => {
        return <Dropdown menu={{ items  }} placement="top">
            <Icon name="add" />
        </Dropdown>
    }


    const data_ = [
        {
            name: "123", dir: true, children: [
                {name: "123_123", dir: true, children: [
                        {name: "123_123_1", children: []},
                        {name: "123_123_2", children: []},
                        {name: "123_123_3", children: []},
                        {name: "123_123_4", children: []},
                        {name: "123_123_5", children: [], action},

                    ]},
                {name: "123_1234", children: []},
                {name: "123_1235", children: []},
                {name: "123_1236", children: []},
                {name: "123_1237", children: []}
            ]
        },
        {name: "456", dir: true, children: [
                {name: "456_1234", children: []},
                {name: "456_1235", children: []},
                {name: "456_1236", children: []},
                {name: "456_1237", children: []}
            ]},
        {name: "789", dir: true, children: []},
    ]
    return <StyledTree style={style ? style : {}}>
        {
            data_.map(data__ => {
                return <TreeNode data={data__}>
                    {data__.children ? data__.children : []}
                </TreeNode>

            })
        }


    </StyledTree>;
}

export default Tree;