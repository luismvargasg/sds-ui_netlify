import React from "react";

/* UI Library Components */
import { Card } from "antd";

/* Libraries */
import { Column } from "@ant-design/charts";

const ColumnChart = ({ data, title, total, height = 422 }) => {
  let config = {
    data: data,
    padding: 35,
    xField: "year",
    yField: "value",
    label: { position: "middle" },
    scrollbar: { type: "horizontal" },

    columnBackground: { style: { fill: "rgba(0,0,0,0.1)" } },
    tooltip: {
      formatter: (datum) => {
        return {
          title: `Año: ${datum.year}`,
          name: "Citas",
          value: datum.value,
        };
      },
    },
    xAxis: {
      label: {
        autoHide: false,
        autoRotate: true,
      },
    },
  };

  return (
    <Card
      size="small"
      title={title}
      headStyle={{ backgroundColor: "#003e65", color: "white" }}
      bodyStyle={{ padding: "10px", height: height }}
    >
      <div className="chart">
        <p id="column__statistic">
          Total: <b>{total}</b>
        </p>
        <Column {...config} style={{ height: "90%", paddingBottom: "20px" }} />
      </div>
    </Card>
  );
};

export default ColumnChart;
