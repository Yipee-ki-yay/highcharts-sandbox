import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsBoxPlot from "highcharts/highcharts-more";

HighchartsBoxPlot(Highcharts);

export default function ColumnChart() {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Corn vs wheat estimated production for 2023",
      align: "left",
    },
    subtitle: {
      text:
        'Source: <a target="_blank" ' +
        'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
      align: "left",
    },
    // credits: {
    //   position: {
    //     align: "right",
    //     verticalAlign: "top",
    //     x: 10,
    //     y: -10,
    //   },
    // },
    xAxis: {
      // categories: ["2018<br/>Q1", "2018<br/>Q2", "2018<br/>Q3", "2018<br/>Q4", "2019<br/>Q1", "2019<br/>Q2"],
      categories: ["2018<br/>Q1", "2018<br/>Q2", "2018<br/>Q3", "2018<br/>Q4", "2019<br/>Q1", "2019<br/>Q2", "2019<br/>Q3", "2019<br/>Q4", "2020<br/>Q1", "2020<br/>Q2", "2020<br/>Q3", "2020<br/>Q4", "2021<br/>Q1", "2021<br/>Q2", "2021<br/>Q3", "2021<br/>Q4", "2022<br/>Q1", "2022<br/>Q2"],
      opposite: true,
      crosshair: true,
      accessibility: {
        description: "Quartals",
      },
      gridLineColor: '#197F07',
      gridLineWidth: 2
    },
    yAxis: {
      min: 0,
      title: {
        text: "1000 metric tons (MT)",
      },
    },
    tooltip: {
      valueSuffix: " (1000 MT)",
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Corn",
        // data: [387749, 280000, 129000, 64300, 54000, 34300],
        data: [387749, 280000, 129000, 64300, 54000, 34300, 387749, 280000, 129000, 64300, 54000, 34300, 387749, 280000, 129000, 64300, 54000, 34300],
      },
      {
        name: "Wheat",
        data: [45321, 140000, 10000, 140500, 19500, 113500, 45321, 140000, 10000, 140500, 19500, 113500, 45321, 140000, 10000, 140500, 19500, 113500],
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}
