import React from "react";

/* Libraries */
import { Pie } from "@ant-design/charts";

/* UI Library Components */
import { Card } from "antd";

const PieChart = ({ data, title }) => {
  const bgColor = {
    hybrid: "#6448ff",
    green: "#25ff76",
    gold: "#ffc03c",
    closed: "#b4b4b4",
    bronze: "#f3663f",
  };

  let config = {
    appendPadding: 10,
    data: data,
    angleField: "value",
    colorField: "type",
    color: ({ type }) => {
      return bgColor[type];
    },
    pieStyle: { lineWidth: 3 },
    radius: 1,
    innerRadius: 0.4,
    label: {
      type: "spider",
      content: "{value} Artículos\n{percentage}",
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
  };

  return (
    <Card
      size="small"
      title={title}
      headStyle={{ backgroundColor: "#003e65", color: "white" }}
      bodyStyle={{ padding: "10px", height: "420px" }}
      hoverable
    >
      <div style={{ height: "100%" }}>
        <Pie {...config} className="chart" />
      </div>
    </Card>
  );
};

export default PieChart;
