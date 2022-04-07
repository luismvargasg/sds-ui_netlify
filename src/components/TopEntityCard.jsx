import React from "react";

/* UI Library Components */
import { Card, Descriptions } from "antd";
import TinyWordCloudChart from "./charts/TinyWordCloudChart";
import TinyLineChart from "./charts/TinyLineChart";

const TopEntityCard = ({ data }) => {
  console.log(data);
  return (
    <Descriptions
      layout="vertical"
      bordered
      style={{ backgroundColor: "white", height: "200px" }}
      column={6}
    >
      <Descriptions.Item label="Puesto">1</Descriptions.Item>
      <Descriptions.Item label="Institución">{data.name}</Descriptions.Item>
      <Descriptions.Item label="Productos totales">
        {data.products_count}
      </Descriptions.Item>
      <Descriptions.Item label="Citas totales">
        {data.citations_count}
      </Descriptions.Item>
      <Descriptions.Item label="Productos por año">
        <TinyLineChart data={data.products_by_year} />
      </Descriptions.Item>
    </Descriptions>
    /*     <Card title={data.name}>
      Citas totales: {data.citations_count}
      <br />
      Productos totales: {data.products_count}
      <div style={{ border: "1px solid gray" }}>
        <TinyWordCloudChart data={data.subjects} />
      </div>
    </Card> */
  );
};

export default TopEntityCard;
