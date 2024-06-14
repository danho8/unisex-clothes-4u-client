import React from "react";
import { Chart } from "react-google-charts";
export const data = [
  ["Year", "Doanh thu", "Lợi nhuận"],
  ["2014", 1000, 400],
  ["2015", 1170, 460],
  ["2016", 660, 1120],
  ["2017", 1030, 540],
  ["2017", 1030, 540],
  ["2017", 1030, 540],
  ["2017", 1030, 540],
  ["2017", 1030, 540],
];
const options = {
  bars: "vertical", 
  vAxis: { format: "decimal" },
  height: 400,
  colors: ["#A1E3CB", "#95A4FC"],
  legend: { position: 'top', alignment: 'top' },
};

function DashboardRevenue() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="auto"
      data={data}
      options={options}
    />
  );
}

export default DashboardRevenue;
