import React from "react";

/* Libraries */
//import { ChoroplethMap } from "@ant-design/charts";
/* import { LineLayer, AMapScene } from "@antv/l7-react"; */

/* UI Library Components */
import { Card } from "antd";

/* const MapChart = () => {
  const config = {
    map: {
      type: "mapbox",
      style: "blank",
      center: [120.19382669582967, 30.258134],
      zoom: 3,
      pitch: 0,
    },
    source: {
      data: [],
      joinBy: {
        sourceField: "code",
        geoField: "adcode",
      },
    },
    viewLevel: {
      level: "world",
      adcode: "all",
    },
    autoFit: true,
    color: {
      field: "name",
      value: ["#B8E1FF", "#7DAAFF", "#3D76DD", "#0047A5", "#001D70"],
    },
    style: {
      opacity: 1,
      stroke: "#ccc",
      lineWidth: 0.6,
      lineOpacity: 1,
    },
    label: {
      visible: true,
      field: "name",
      style: {
        fill: "#000",
        opacity: 0.8,
        fontSize: 10,
        stroke: "#fff",
        strokeWidth: 1.5,
        textAllowOverlap: false,
        padding: [5, 5],
      },
    },
    state: {
      active: true,
      select: {
        stroke: "black",
        lineWidth: 1.5,
        lineOpacity: 0.8,
      },
    },
    tooltip: {
      items: ["name", "adcode", "value"],
    },
    zoom: {
      position: "bottomright",
    },
    legend: {
      position: "bottomleft",
    },
  };
  return {
    <ChoroplethMap {...config} />
  };
}; */

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
