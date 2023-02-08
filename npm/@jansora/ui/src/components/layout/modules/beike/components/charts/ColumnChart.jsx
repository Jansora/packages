import React from 'react';

import {Column} from '@ant-design/charts';
import {Segment} from "semantic-ui-react";

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2021/02/27 21:03:22
 */
const ColumnChart = (props) => {

  const yLabel = props.yLabel;
  const x = props.x ? props.x : 'x';
  const y = props.y ? props.y : 'y';

  const data = props.data.map(d => ({x: d[x], y: d[y]}))


  const config = {
    theme: 'dark', // 'dark',
    data: data,
    xField: 'x',
    yField: 'y',
    seriesField: '',
    label: {
      // 可手动配置 label 数据标签位置
      // position: 'middle',
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: true,
      },
    },
    meta: {
      x: {
        alias: '类别',
      },
      y: {
        alias: yLabel ? yLabel : "value",
      },
    },
    legend: false,
    slider: {
      start: 0,
      end: 1,
    },
  };

  return <Segment inverted >
    <Column {...config} />
  </Segment>


}

export default ColumnChart;
