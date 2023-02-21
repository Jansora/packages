import React from 'react';
import {Pie} from '@ant-design/charts';
import {Container} from "semantic-ui-react";

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2021/02/27 21:03:22
 */
const PieChart = (props) => {

  const x = props.x ? props.x : 'x';
  const y = props.y ? props.y : 'y';

  const data = props.data.map(d => ({x: d[x], y: d[y]}))

  const config = {
    theme: 'dark', // 'dark',
    appendPadding: 10,
    data: data,
    angleField: 'y',
    colorField: 'x',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };

  return <Container>
    <Pie {...config} {...props} />
  </Container>;


}

export default PieChart;
