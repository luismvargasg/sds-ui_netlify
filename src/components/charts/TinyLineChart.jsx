import React from "react";

/* Libraries */
import { Line } from "@ant-design/plots";

const TinyLineChart = ({ data }) => {
  const config = {
    height: 70,
    //width: 400,
    //autoFit: false,
    data,
    xField: "year",
    yField: "value",
    //smooth: true,
  };

  return <Line {...config} />;
};

export default TinyLineChart;
