import React from "react";

/* UI Library */
import { Col, Divider, Row, Typography } from "antd";

/* Media */
import logo_ODS from "../../media/logo_ODS.svg";
import title_ODS from "../../media/title_ODS.svg";

/* UI Library Sub-components */
const { Title } = Typography;

const Module2 = () => {
  return (
    <>
      <Divider style={{ fontSize: "40px" }}>COVID-19</Divider>
      <Divider style={{ fontSize: "40px" }}>ODS</Divider>
      <Row
        justify="space-between"
        align="middle"
        style={{ backgroundColor: "#4c9f38", height: "150px" }}
      >
        <Col span={4} style={{ marginLeft: "30px" }}>
          <img src={title_ODS} alt="Salud y Bienestar" />
        </Col>
        <Col span={10}>
          <Title level={2} style={{ textAlign: "center", color: "white" }}>
            “Garantizar una vida sana y promover el bienestar de todos a todas
            las edades.”
          </Title>
        </Col>
        <Col span={4} style={{ marginRight: "30px", textAlign: "right" }}>
          <img src={logo_ODS} alt="Logo ODS 3" id="logo__ods" />
        </Col>
      </Row>
      <br />
      <Row gutter={[15, 15]} align="middle" justify="center">
        <Col span={3} className="ods__box">
          <div className="color">3.1</div>
        </Col>
        <Col span={3} className="ods__box">
          <div className="color">3.2</div>
        </Col>
        <Col span={3} className="ods__box">
          <div className="color">3.3</div>
        </Col>
        <Col span={3} className="ods__box">
          <div className="color">3.4</div>
        </Col>
        <Col span={3} className="ods__box">
          <div className="color">3.5</div>
        </Col>
        <Col span={3} className="ods__box">
          <div className="color">3.6</div>
        </Col>
        <Col span={3} className="ods__box">
          <div className="color">3.7</div>
        </Col>
        <Col span={3} className="ods__box">
          <div className="color">3.8</div>
        </Col>
        <Col span={3} className="ods__box">
          <div className="color">3.9</div>
        </Col>
        <Col span={3} className="ods__box">
          <div className="color">3.10</div>
        </Col>
        <Col span={3} className="ods__box">
          <div className="color">3.11</div>
        </Col>
        <Col span={3} className="ods__box">
          <div className="color">3.12</div>
        </Col>
        <Col span={3} className="ods__box">
          <div className="color">3.13</div>
        </Col>
      </Row>
      {/* <a href="/app">
        <div style={{ width: "150px", height: "305px", position: "absolute" }}>
          <img src={test} alt="test"/>
        </div>
        <div style={{ position: "absolute" }}>
          <h3 className="test__info">3.3</h3>
          <p className="test__info2">Poner fin a las epidemias</p>
        </div>
      </a> */}
    </>
  );
};

export default Module2;
