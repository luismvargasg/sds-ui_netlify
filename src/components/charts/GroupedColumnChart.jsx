import React from "react";

/* Libraries */
import { Column } from "@ant-design/plots";
import { Card } from "antd";

const GroupedColumnChart = ({ data }) => {
  const config = {
    data,
    isGroup: true,
    xField: "year",
    yField: "value",
    seriesField: "name",
  };

  return (
    <Card>
      <Column {...config} />
    </Card>
  );
};

export default GroupedColumnChart;
