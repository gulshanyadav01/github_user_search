import React from 'react';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);





const Doughnut = ({data}) => {
    const chartConfigs = {
        type: 'doughnut2d',
        width:"100%",
        
        decimal:0,
        dataFormat: 'json',
        dataSource: {
            "chart": {
              "caption": "stars per language",
              "decimal":0,
              "theme": "candy",
              "bgColor":"#182037",
            "showPercentValues":0,
            
            },
            data:data
        }
      };
      

    return <ReactFC {...chartConfigs} />;
}

export default Doughnut;
