import React, { useEffect } from "react";

/* Components */
import CallsTableMin from "../CallsTableMin";
import CallsTableNih from "../CallsTableNih";

/* UI Library Components */
import { Col, Divider, Row, Typography } from "antd";

/* UI library Sub-components */
const { Title } = Typography;

const Calls = ({ core }) => {
  setTimeout(() => {
    core.setHome(false);
  }, 10);

  useEffect(() => {
    document.title = "Convocatorias | SALUDATA";
  }, []);

  return (
    <Row justify="center" style={{ marginTop: "50px" }}>
      <Col xxl={18} md={22} xs={24}>
        <Title level={3}>Directorio de convocatorias Públicas</Title>
        <Divider />
        <Title level={4}>NIH Grants & Funding</Title>
        <CallsTableNih />
        <Divider />
        <Title level={4}>Minciencias</Title>
        <CallsTableMin />
        <Divider />
      </Col>
    </Row>
  );
};

export default Calls;
