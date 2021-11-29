import React from "react";

/* Libraries */
import { AreaMap } from "@ant-design/charts";

/* Utils */
import TempModal from "../../utils/TempModal";

/* UI Library Components */
import { Modal } from "antd";

/* geoJSON */
import data from "../../utils/bogota_rotated.json";

const BogotaMapChart = ({ height = 600 }) => {
  const docInfo = (e) => {
    Modal.info({
      width: "1200px",
      title: (
        <p className="map--modal-title">
          Artículo generado en la Localidad: {e.feature.properties.LOC}
        </p>
      ),
      icon: null,
      okText: "Cerrar",
      maskClosable: true,
      content: <TempModal />,
      onOk() {},
    });
  };

  const config = {
    map: {
      type: "mapbox",
      style: "blank",
    },
    source: {
      data: data,
      parser: {
        type: "geojson",
      },
    },
    autoFit: true,
    color: "#d7d8d4",
    style: {
      opacity: 1,
      stroke: "#f0f2f5",
      lineWidth: 2,
    },
    state: {
      active: { fill: "#4abfe3", stroke: "white", lineWidth: 3 },
    },
    tooltip: false,
    label: {
      visible: true,
      field: "LOC",
      style: {
        fill: "#000",
        opacity: 0.9,
        fontSize: 10,
        stroke: "#fff",
        strokeWidth: 1.5,
        textAllowOverlap: true,
        padding: [10, 10],
      },
    },
    legend: {
      type: "category",
      position: "topright",
      title:
        "Haz click sobre una localidad para visualizar un artículo de forma aleatoria",
    },
  };

  const plotEvents = (plot) => {
    plot.on("areaLayer:click", (e) => docInfo(e));
  };

  return (
    <div className="map--chart">
      <div style={{ height: height, margin: "5px" }}>
        <AreaMap
          {...config}
          onReady={(plot) => {
            plotEvents(plot);
          }}
        />
      </div>
    </div>
  );
};

export default BogotaMapChart;
