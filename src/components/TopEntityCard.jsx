import React from "react";

/* UI Library Components */
import { Card } from "antd";
import TinyWordCloudChart from "./charts/TinyWordCloudChart";

const TopEntityCard = ({ data }) => {
  return (
    <Card title={data.name}>
      Citas totales: {data.citations_count}
      <br />
      Productos totales: {data.products_count}
      <div style={{ border: "1px solid gray" }}>
        <TinyWordCloudChart data={data.subjects} />
      </div>
    </Card>
  );
};

export default TopEntityCard;
