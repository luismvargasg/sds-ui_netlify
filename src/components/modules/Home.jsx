import React from "react";

/* UI Library Components */
import { Col, Row, Typography } from "antd";

/* Charts */
import MapChart from "../charts/MapChart";

/* UI Library Sub-components*/
const { Title } = Typography;

const Home = () => {
  return (
    <>
      <Row
        style={{ padding: "40px 5px", textAlign: "center" }}
        gutter={[10, 10]}
        justify="center"
        align="middle"
      >
        <Col flex sm={24} lg={12}>
          <Title>Lorem Ipsum</Title>
          <Title level={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim
            illum maiores facere, debitis aliquid facilis, nemo sunt fugiat
            repellat aperiam doloribus doloremque! Porro, optio? Unde aliquam
            tempore voluptates eius!
          </Title>
        </Col>
        <Col
          style={{
            backgroundColor: "#dce1e6",
            margin: "40px",
            minHeight: "350px",
          }}
          span={24}
        >
          <Row
            gutter={[15, 15]}
            justify="space-around"
            style={{ textAlign: "center" }}
          >
            <Col xs={24} md={5}></Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{ padding: "40px 5px" }}
        gutter={[10, 10]}
        justify="center"
        align="middle"
      >
        <Col span={24}>
          <MapChart title="Mapa de Bogotá" />
        </Col>
      </Row>
    </>
  );
};

export default Home;
