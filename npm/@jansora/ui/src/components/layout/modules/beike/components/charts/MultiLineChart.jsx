import React from 'react';
import {Segment} from "semantic-ui-react";
import {Line} from "@ant-design/charts";

/**
 * <Description> Description for MultiLineChart <br>
 *
 * @author jansora <br>
 * @github https://github.com/Jansora
 * @version 1.0 <br>
 * @CreateDate 2021/5/19 22:40:04 <br>
 * @since 1.0 <br>
 */

const MultiLineChart = (props) => {

  // const title = "11"
  // const yLabel = props.yLabel;
  const x = props.x ? props.x : 'x';
  const y = props.y ? props.y : 'y';
  const z = props.seriesField ? props.seriesField : 'z';
  const data = props.data.map(d => ({x: d[x], y: d[y], z: d[z]}))

  // console.log("dataMult", data)
  const config = {
    slider: {
      start: 0,
      end: 1,
    },
    // theme: 'dark', // 'dark',
    data: data,
      // .filter((item) => item.category === 'Gas fuel' || item.category === 'Cement production')
    xField: 'x',
    yField: 'y',
    seriesField: 'z',

      // X 轴相关配置
      xAxis: {
        nice: true,
        // tickCount: 8,
        // 文本标签
        label: {
          // autoRotate: false,
          rotate: Math.PI / 6,
          pageNum: 10,
          style: {
            fill: '#aaa',
            fontSize: 12,
          },
          formatter: (name) => name,
        },
        // title: {
        //   text: '年份',
        //   style: {
        //     fontSize: 16,
        //   },
        // },
        // 坐标轴线的配置项 null 表示不展示
        line: {
          style: {
            stroke: '#aaa',
          },
        },
        // tickLine: {
        //   style: {
        //     lineWidth: 2,
        //     stroke: '#aaa',
        //   },
        //   length: 5,
        // },
        // grid: {
        //   line: {
        //     style: {
        //       stroke: '#ddd',
        //       lineDash: [4, 2],
        //     },
        //   },
        //   alternateColor: 'rgba(0,0,0,0.05)',
        // },
      },
      // Y 轴相关配置
      yAxis: {
        // max: 3000,
        // 文本标签
        label: {
          autoRotate: false,
          style: {
            fill: '#aaa',
            fontSize: 12,
          },
          // 数值格式化为千分位
          // formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
        },
        // title: {
        //   // text: yLabel,
        //   style: {
        //     fontSize: 16,
        //   },
        // },
        // 坐标轴线的配置项 null 表示不展示
        // line: {
        //   style: {
        //     stroke: '#aaa',
        //   },
        // },
        // tickLine: {
        //   style: {
        //     lineWidth: 2,
        //     stroke: '#aaa',
        //   },
        //   length: 5,
        // },
        // grid: {
        //   line: {
        //     style: {
        //       stroke: '#ddd',
        //       lineDash: [4, 2],
        //     },
        //   },
        //   alternateColor: 'rgba(0,0,0,0.05)',
        // },
      },
      // label
      label: {
        // layout: [
        //   {
        //     type: 'hide-overlap',
        //   },
        // ],
        // 隐藏重叠label
        style: {
          textAlign: 'right',
        },
        formatter: (item) => item.y,
      },
      // point
      point: {
        size: 5,
        style: {
          lineWidth: 1,
          fillOpacity: 1,
        },
        shape: (item) => {

          return 'diamond';
        },
      },

      // legend: {
      //   position: 'top-right',
      //   itemName: {
      //     style: {
      //       fill: '#000',
      //     },
      //     formatter: (name) => name,
      //   },
      // },
      // 度量相关配置
      meta: {
        // year 对应 xField || yField
        // year: {
        //   range: [0, 1],
        // },
      },

    };

  return <Segment {...props}>
    <Line {...config} />
  </Segment>
    ;
}

export default MultiLineChart;