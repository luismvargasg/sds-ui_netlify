import React from "react";

/* UI Library Components */
import { Layout, Col, Row } from "antd";

const Footer = () => {
  return (
    <Layout.Footer id="footer">
      <Row gutter={[15, 15]} align="middle" justify="center">
        <Col xs={24} md={8} className="footer-container">
          <p>Bloque 1</p>
        </Col>
        <Col xs={24} md={8} className="footer-container">
          <p>Bloque 2</p>
        </Col>
        <Col xs={24} md={8} className="footer-container">
          <p>Bloque 3</p>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default Footer;
