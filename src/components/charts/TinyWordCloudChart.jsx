import React from "react";

/* Libraries */
import { WordCloud } from "@ant-design/charts";

const TinyWordCloudChart = ({ data }) => {
  const newData = data.splice(0, 9);
  let config = {
    data: newData,
    wordField: "name",
    weightField: "value",
    colorField: "name",
    wordStyle: {
      fontFamily: "Verdana",
      fontSize: [5, 20],
      rotation: 0,
    },
    height: 70,
  };

  return <WordCloud {...config} />;
};

export default TinyWordCloudChart;
