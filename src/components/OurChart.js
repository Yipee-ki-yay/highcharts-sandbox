import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsBoxPlot from 'highcharts/highcharts-more';

HighchartsBoxPlot(Highcharts);

export default function OurChart() {
  const options = {
    // chart: {
    //   type: 'column'
    // },
    title: {
      text: "Our very first chart",
    },
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}
