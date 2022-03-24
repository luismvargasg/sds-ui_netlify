import React from "react";

/* Libraries */
import { Pie } from "@ant-design/charts";

/* UI Library Components */
import { Card, Empty } from "antd";

const PieChart = ({ data, title }) => {
  const bgColor = {
    hybrid: "#6448ff",
    green: "#25ff76",
    gold: "#ffc03c",
    closed: "#b4b4b4",
    bronze: "#f3663f",
  };

  const labels = {
    hybrid: "Híbrido",
    green: "Verde",
    gold: "Dorado",
    closed: "Cerrado",
    bronze: "Bronce",
  };

  let config = {
    appendPadding: 20,
    data: data,
    angleField: "value",
    colorField: "type",
    color: ({ type }) => {
      return bgColor[type];
    },
    pieStyle: { lineWidth: 3 },
    radius: 1,
    innerRadius: 0.4,
    tooltip: {
      formatter: (datum) => {
        return {
          name: labels[datum.type],
          value: datum.value + (datum.value === 1 ? " Producto" : " Productos"),
        };
      },
    },
    label: {
      type: "spider",
      content: "{value} Productos, {percentage}",
    },
    interactions: [{ type: "element-active" }],
    legend: {
      itemName: {
        formatter: (item) => labels[item],
      },
    },
  };
  return (
    <Card
      size="small"
      title={title}
      headStyle={{ backgroundColor: "#003e65", color: "white" }}
      bodyStyle={{ padding: "10px", height: "420px" }}
      hoverable
    >
      <div className="chart">
        {data.length > 0 ? (
          <Pie {...config} />
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Datos insuficientes"
          />
        )}
      </div>
    </Card>
  );
};

export default PieChart;
