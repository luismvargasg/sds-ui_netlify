import React from "react";

/* Libraries */
/* import { LineLayer, AMapScene } from "@antv/l7-react"; */

/* UI Library Components */
import { Card } from "antd";

/* <div style={{ width: "100%", height: "700px" }}>
      <AMapScene
        map={{
          center: [110.19382669582967, 50.258134],
          pitch: 0,
          style: "light",
          zoom: 1,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {data && (
          <LineLayer
            key={"2"}
            source={{
              data,
            }}
            size={{
              values: 1,
            }}
            color={{
              values: "#fff",
            }}
            shape={{
              values: "line",
            }}
            style={{
              opacity: 1,
            }}
          />
        )}
      </AMapScene>
    </div> */

const MapChart = ({ data, title, height = 422 }) => {
  return (
    <Card
      size="small"
      title={title}
      headStyle={{ backgroundColor: "#003e65", color: "white" }}
      bodyStyle={{ padding: "10px", height: height }}
    >
      <div style={{ height: "100%" }}>Mapa en construcción</div>
    </Card>
  );
};

export default MapChart;
