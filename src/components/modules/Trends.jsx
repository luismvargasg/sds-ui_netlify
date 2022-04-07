import React, { useEffect } from 'react';

/* UI Library */
import { Col, Divider, Row, Typography } from 'antd';

/* Media */
import logo_ODS from '../../media/logo_ODS.svg';
import title_ODS from '../../media/title_ODS.svg';

/* Charts */
import Infographic from '../charts/Infographic';

/* Utilities */
import { APIRequest } from '../../apis/api';

/* Components */
import ErrorWarning from '../ErrorWarning';
import LoadingCard from '../LoadingCard';
import CallToActionTrends from '../CallToActionTrends';
import ODSInfographic from '../ODSInfographic';

/* UI Library Sub-components */
const { Title } = Typography;

const Trends = ({ core }) => {
  const [state] = APIRequest('/app/trends');
  setTimeout(() => {
    core.setHome(false);
  }, 10);

  useEffect(() => {
    document.title = 'SALUDATA | Tendencias';
  }, []);

  if (state.isError) {
    return <ErrorWarning />;
  } else if (state.isLoading) {
    return <LoadingCard />;
  }
  return (
    <>
      <Divider style={{ fontSize: '40px', marginBottom: '30px' }}>
        Nuestros Datos
      </Divider>
      <Row
        justify="center"
        align="middle"
        gutter={[70, 30]}
        style={{ width: '100%', marginLeft: 0, marginRight: 0 }}
      >
        <Col xs={24} lg={7}>
          <Infographic
            title="COVID-19"
            documentsValue={state.data.covid.documents}
            authorsValue={state.data.covid.authors}
            groupsValue={state.data.covid.groups}
            institutionsValue={state.data.covid.institutions}
          />
          <CallToActionTrends
            core={core}
            id={state.data.covid.id}
            type="covid"
          />
        </Col>
        <Col xs={24} lg={7}>
          <Infographic
            title="PDD"
            documentsValue={state.data.PDD.documents}
            authorsValue={state.data.PDD.authors}
            groupsValue={state.data.PDD.groups}
            institutionsValue={state.data.PDD.institutions}
          />
          <CallToActionTrends core={core} id={state.data.PDD.id} type="pdd" />
        </Col>
        <Col xs={24} lg={7}>
          <Infographic
            title="PTS"
            documentsValue={state.data.PTS.documents}
            authorsValue={state.data.PTS.authors}
            groupsValue={state.data.PTS.groups}
            institutionsValue={state.data.PTS.institutions}
          />
          <CallToActionTrends core={core} id={state.data.PTS.id} type="pts" />
        </Col>
      </Row>
      <Divider
        style={{
          fontSize: '40px',
          textAlign: 'center',
          whiteSpace: 'break-spaces',
          marginTop: '50px',
        }}
      >
        Objetivos de Desarrollo Sostenible
      </Divider>
      <Row
        justify="space-between"
        align="middle"
        style={{ backgroundColor: '#4c9f38', minHeight: '150px' }}
      >
        <Col xs={24} md={6} lg={4} style={{ padding: '30px' }}>
          <img src={title_ODS} alt="Salud y Bienestar" />
        </Col>
        <Col xs={24} md={10} lg={10}>
          <Title level={2} style={{ textAlign: 'center', color: 'white' }}>
            “Garantizar una vida sana y promover el bienestar de todos a todas
            las edades.”
          </Title>
        </Col>
        <Col
          xs={0}
          md={6}
          lg={4}
          style={{ marginRight: '30px', textAlign: 'right' }}
        >
          <img src={logo_ODS} alt="Logo ODS 3" id="logo__ods" />
        </Col>
      </Row>
      <br />
      <Row gutter={[15, 15]} align="middle" justify="center">
        <ODSInfographic core={core} data={state.data.ODS} />
      </Row>
    </>
  );
};

export default Trends;
