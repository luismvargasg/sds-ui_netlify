import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

/* UI Library Components */
import { Card } from "antd";

/* Libraries */
import G6 from "@antv/g6";

const GraphChart = ({ data, title, height = 622 }) => {
  const ref = useRef(null);

  const testdata = {
    nodes: [
      { id: "node0", size: 50, degree: 20, label: "Luis Miguel" },
      { id: "node1", size: 30, degree: 20, label: "Gerardo Gutierrez" },
    ],
    edges: [
      {
        source: "node0",
        sorceName: "Luis Miguel",
        target: "node1",
        targetName: "Gerardo Gutierrez",
        size: 5,
        coauthorships: 13,
      },
    ],
  };

  data.nodes.map((item) => (item.size = item.style.keyshape.size));
  data.nodes.map((item) => (item.label = item.style.label.value));
  data.edges.map((item) => (item.size = item.style.keyshape.lineWidth));
  console.log(data);

  /* const testData = data.map((item) => {}); */

  useEffect(() => {
    let graph = null;
    if (!graph) {
      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current),
        width: 2000,
        height: 600,
        modes: {
          default: [
            {
              type: "zoom-canvas",
              enableOptimize: true,
              optimizeZoom: 0.9,
            },
            {
              type: "drag-canvas",
              enableOptimize: true,
            },
            {
              type: "tooltip",
              formatText(model) {
                return `Grado: ${model.degree}`;
              },
            },
            {
              type: "edge-tooltip",
              formatText(model) {
                return `${model.coauthorships} ${
                  model.coauthorships > 1 ? "coautorías" : "coautoría"
                } entre ${model.source} y ${model.target}`;
              },
            },
            "drag-node",
            "activate-relations",
          ],
        },
        layout: {
          type: data.nodes.length > 50 ? "forceAtlas2" : "gForce",
          preventOverlap: true,
        },
        defaultNode: {
          style: { stroke: "#00A283", fill: "#00E4A9", fillOpacity: 0.6 },
          labelCfg: {
            style: { fontSize: 8 },
            position: "bottom",
            offset: 1,
          },
        },
        defaultEdge: {
          style: {
            stroke: "#e8e7e3",
          },
        },
      });
    }
    graph.data(data);
    graph.render();
  }, [data]);

  return (
    <Card
      size="small"
      title={title}
      headStyle={{ backgroundColor: "#003e65", color: "white" }}
      bodyStyle={{ padding: "10px", height: height }}
    >
      <div className="chart">
        <div ref={ref}></div>
      </div>
    </Card>
  );
};

export default GraphChart;
