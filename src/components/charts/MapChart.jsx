import React from "react";

/* Libraries */
import { AreaMap } from "@ant-design/charts";

/* UI Library Compoments */
import { Card } from "antd";

/* geoJSON */
import mapData from "../../utils/world_map_final.json";

const MapChart = ({ data, title = "", height = 600 }) => {
  let tempData = JSON.parse(JSON.stringify(mapData));
  let processed = { ...tempData };
  for (let i = 0; i < processed.features.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (processed.features[i].properties.iso_a2 === data[j].country_code) {
        processed.features[i].properties = { ...data[j] };
      }
    }
  }

  const config = {
    map: {
      type: "mapbox",
      style: "blank",
    },
    source: {
      data: processed,
      parser: {
        type: "geojson",
      },
    },
    autoFit: true,
    color: {
      field: "log_count",
      value: [
        "#f7fcf0",
        "#e0f3db",
        "#ccebc5",
        "#a8ddb5",
        "#7bccc4",
        "#4eb3d3",
        "#2b8cbe",
        "#0868ac",
        "#084081",
      ],
      scale: { type: "quantile" },
    },
    style: {
      opacity: 1,
      stroke: "#ccc",
      lineWidth: 0.6,
      lineOpacity: 1,
    },
    label: {
      visible: true,
      field: "country_code",
      style: {
        fill: "#000",
        opacity: 0.8,
        fontSize: 10,
        stroke: "white",
        strokeWidth: 1,
        textAllowOverlap: false,
        padding: [5, 5],
      },
    },
    state: {
      active: {
        stroke: "white",
        lineWidth: 1.5,
        lineOpacity: 0.8,
      },
    },
    tooltip: {
      items: ["country", "count"],
    },
    zoom: {
      position: "bottomright",
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
        <AreaMap {...config} />
      </div>
    </Card>
  );
};

export default MapChart;
