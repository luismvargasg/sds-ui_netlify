import React, { useEffect } from 'react';

/* Components */
import CallsTableMin from '../CallsTableMin';
import CallsTableNih from '../CallsTableNih';
import CallsTablePfizer from '../CallsTablePfizer';
import CallsTableUkri from '../CallsTableUkri';

/* UI Library Components */
import { Col, Divider, Row, Typography } from 'antd';

/* UI library Sub-components */
const { Title } = Typography;

const Calls = ({ core }) => {
  useEffect(() => {
    document.title = 'Convocatorias | SALUDATA';
  }, []);

  return (
    <Row justify="center" style={{ marginTop: '50px' }}>
      <Col xxl={20} md={24}>
        <Title level={2}>Directorio de convocatorias Públicas</Title>
        <Title level={3} style={{ color: '#515152' }}>
          Consulte aquí las convocatorias locales, nacionales e internacionales
          que financian o apoyan proyectos de investigación en salud.
        </Title>
        <Divider />
        <Title level={4}>Secretaría Distrital de Salud</Title>
        <iframe
          id="SecSalud__frame"
          title="Convocatoria Secretaría Distrital de Salud"
          width="100%"
          height="500"
          src="https://covid19.saludcapital.gov.co/convocatoria"
          sandbox=""
        />
        <Divider />
        <Title level={4}>NIH Grants & Funding</Title>
        <CallsTableNih />
        <Divider />
        <Title level={4}>Pfizer</Title>
        <CallsTablePfizer />
        <Divider />
        <Title level={4}>UK Research and Innovation - UKRI</Title>
        <CallsTableUkri />
        <Divider />
        <Title level={4}>Minciencias</Title>
        <CallsTableMin />
        <Divider />
      </Col>
    </Row>
  );
};

export default Calls;
