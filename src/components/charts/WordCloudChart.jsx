import React from "react";

import { WordCloud } from "@ant-design/charts";
import { Card } from "antd";

const WordCloudChart = ({ title }) => {
  const data = [
    { name: "Covid-19", value: 5 },
    { name: "Pulmones", value: 6 },
    { name: "Cáncer", value: 3 },
    { name: "Diagnóstico", value: 10 },
    { name: "Arterial", value: 2 },
    { name: "paciente", value: 5 },
    { name: "infección", value: 4 },
    { name: "tamización", value: 2 },
  ];
  let config = {
    data: data,
    wordField: "name",
    weightField: "value",
    colorField: "name",
    wordStyle: {
      fontFamily: "Verdana",
      fontSize: [20, 100],
      rotation: 0,
    },
    random: function random() {
      return 0.5;
    },
    renderer: "svg",
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
        <WordCloud {...config} />
      </div>
    </Card>
  );
};

export default WordCloudChart;
