import React from "react";
// import {Tab, Table} from "semantic-ui-react";
import {Table, Tabs} from '@arco-design/web-react';

const RenderSqlResult = (result) => {

  console.log("RenderSqlResult", result)
  if (!(result instanceof Array)) return ''
  //
  // const panes = result.map(({columns, values}, index) => {
  //   return {
  //     menuItem: `SELECT Result ${index}`,
  //     render: () => <>
  //       <Table celled striped  compact='very'>
  //         <Table.Header>
  //           <Table.Row>
  //             {
  //               columns.map(column => <Table.HeaderCell>{column}</Table.HeaderCell>)
  //             }
  //           </Table.Row>
  //         </Table.Header>
  //
  //         <Table.Body>
  //           {
  //             values.map(value => <Table.Row>
  //               {
  //                 value.map( v => <Table.Cell>{v}</Table.Cell>
  //                 )
  //               }
  //             </Table.Row>)
  //           }
  //         </Table.Body>
  //       </Table>
  //     </>,
  //   }
  // });
  // const cs = result.map(({columns}) => console.log(columns));
  const cs = result.map(({columns}) => columns.map((column, index) =>{
    return {title: column, dataIndex: index}
  }));

  const datasource = result.map(({values}) =>  values.map((value, index) =>{
    const obj = {};
    obj.key = index;
    value.forEach((value, dataIndex) =>{
    obj[dataIndex] = value;
    });
    return obj;
  }));
  console.log("columns", cs, datasource)
  return (
    <div>
      <Tabs defaultActiveTab={"0"}>
        {
          result.map((r, index) =>
            <Tabs.TabPane key={index} title={<span> 结果集 {index + 1}</span>}>
              {
                <Table columns={cs[index]} data={datasource[index]} />
              }
            </Tabs.TabPane>
          )

        }

      </Tabs>
      {/*<Tab menu={{ secondary: true, pointing: true }} panes={panes} />*/}
    </div>
  )
}

export default RenderSqlResult;
