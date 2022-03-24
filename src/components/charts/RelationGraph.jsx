import React from "react";

/* Libraries */
import { DecompositionTreeGraph } from "@ant-design/graphs";

const RelationGraph = ({ data }) => {
  const newData = {
    id: "Temas de Salud",
    children: data.children.map((item) => {
      return { id: item.id, value: item.value.items[0].text };
    }),
  };

  const config = {
    data,
    layout: {
      direction: "TB",
    },
    nodeCfg: {
      autoWidth: true,
      items: {
        layout: "follow",
      },
    },
    height: 200,
    autofit: true,
    /* markerCfg: (cfg) => {
      const { children } = cfg;
      return {
        show: children?.length,
      };
    }, */
    behaviors: ["drag-canvas", "zoom-canvas", "drag-node"],
  };

  return <DecompositionTreeGraph {...config} />;
};

export default RelationGraph;
