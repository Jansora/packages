import React from 'react';

import {Bar} from '@ant-design/charts';
import {Segment} from "semantic-ui-react";

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2021/02/27 21:03:22
 */
const BarChart = (props) => {

  const x = props.x ? props.x : 'x';
  const y = props.y ? props.y : 'y';

  const data = props.data.map(d => ({x: d[x], y: d[y]}))

  const config = {
    theme: 'dark', // 'dark',
    data: data,
    xField: 'x',
    yField: 'y',

    seriesField: '',

    legend: false,
    slider: {
      start: 0,
      end: 1,
    },
  };

  return <Segment>
    <Bar {...config} {...props} />
  </Segment>


}

export default BarChart;
