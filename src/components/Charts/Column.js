import React from 'react';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

// const chartData = [
//     {
//         label:"HTML",
//         value:"13",
//     },
//     {
//         label:"CSS",
//         value:"23",
//     },
//     {
//         label:"JAVASCRIPT",
//         value:"80"
//     }
// ];


const Example = ({data}) => {

const chartConfigs = {
    type: 'column3D',
    width:"99%",
    height:300,
    dataFormat: 'json',
    dataSource: {
        "chart": {
          "caption": "Most Popular",
          "xAxisName": "Repos",
          "xAxisNameFontSize":"16px",
          "yAxisName": "Stars",
          "yAxisNameFontSize":"16px",
          "xAxisNameColor":"white",
          "theme": "candy",
          "bgColor":"#182037"
        },
        data:data
    }
  };
  
    return <ReactFC {...chartConfigs} />;
}

export default Example;
