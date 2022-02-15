import React from "react";

/* Libraries */
import { WordCloud } from "@ant-design/charts";

/* UI Library Componens */
import { Card } from "antd";

/* Utilities */
import { useHistory } from "react-router-dom";

const WordCloudChart = ({ title, data, core }) => {
  const history = useHistory();
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
        <WordCloud
          {...config}
          onReady={(plot) => {
            plot.on("plot:click", (evt) => {
              if (evt.data) {
                history.push(`/app/subjects?id=${evt.data.data.datum.id}`);
                core.setURL(`/app/subjects?id=${evt.data.data.datum.id}`);
              }
            });
          }}
        />
      </div>
    </Card>
  );
};

export default WordCloudChart;
