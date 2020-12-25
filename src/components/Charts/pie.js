import React from 'react';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);





const Example = ({data}) => {
    const chartConfigs = {
        type: 'pie3D',
        width:"100%",
        height:300,
        decimal:0,
        dataFormat: 'json',
        dataSource: {
            "chart": {
              "caption": "Languages",
              "subCaption":"most used languages",
              "theme": "fusion",
              "bgColor":"#182037",
              "decimals":"0",
              "pieRadius":"45%",
              "subCaptionColor":"white"
            },
            data:data
        }
      };
      

    return <ReactFC {...chartConfigs} />;
}

export default Example;
