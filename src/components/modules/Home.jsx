import React, { useEffect } from 'react';

/* Components */
import HomeTable from '../HomeTable';
import SearchBar from '../SearchBar';
import { ReactComponent as Banner } from '../../media/banner.svg';

/* UI Library Components */
import { Card, Col, Divider, Row, Typography } from 'antd';

/* Charts */
import BogotaMapChart from '../charts/BogotaMapChart';
import MetricsTable from '../MetricsTable';

/* UI Library Sub-components*/
const { Title } = Typography;

const Home = ({ core }) => {
  useEffect(() => {
    document.title = 'SALUDATA';
    core.setFilters(null);
    core.setHome(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Banner id="home__banner" />
      <Row justify="space-around" align="middle">
        <Col flex sm={24} xl={10} xxl={8}>
          <Title id="home__head--title">
            Conozca la producción científica realizada en Bogotá sobre temas de
            interés en salud y bienestar.
          </Title>
        </Col>
        <Col
          sm={24}
          xl={12}
          xxl={10}
          style={{ marginTop: '40px', marginBottom: 0, textAlign: 'center' }}
        >
          <Card size="small" bordered style={{ borderRadius: '10px' }}>
            <Title level={2}>Central de información científica</Title>
            <Title level={4}>
              La información puede ser consultada por temas, productos,
              instituciones, grupos de investigación o autores.
            </Title>
            <div className="searchbar--container">
              <SearchBar core={core} />
            </div>
            <div id="home__table--container">
              <HomeTable />
            </div>
          </Card>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '60px' }}>
        <Col xs={20} lg={14}>
          <Divider id="home__divider--title">
            Investigación en salud sobre el territorio
          </Divider>
        </Col>
      </Row>
      <Row justify="space-around" align="middle" style={{ marginTop: '15px' }}>
        <Col xs={24} lg={15}>
          <BogotaMapChart />
        </Col>
        <Col xs={24} lg={6}>
          <Title level={3}>
            Este mapa muestra un artículo seleccionado de manera aleatoria, cuyo
            lugar de análisis se corresponde con una localidad de Bogotá. Si
            está interesado en conocer más investigaciones sobre una localidad
            específica, ingrese al buscador y utilice el nombre de la localidad
            como palabra clave en la opción “Producto”.
          </Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '60px' }}>
        <Col xs={20} lg={14}>
          <Divider id="home__divider--title">Métricas Responsables</Divider>
        </Col>
        <Col span={18}>
          <MetricsTable />
        </Col>
        <Col span={18} style={{ marginTop: '20px' }}>
          <h3>Referencias Bibliográficas</h3>
          <ul>
            <li>
              Cuartas, G. V., Uribe-Tirado, A., Restrepo-Quintero, D.,
              Ochoa-Gutierrez, J., Pallares, C., Gómez-Molina, H. F.,
              Suárez-Tamayo, M., & Calle, J. (2019). Hacia un modelo de medición
              de la ciencia desde el Sur Global: Métricas responsables. Palabra
              Clave (La Plata), 8(2), e068-e068.{' '}
              <a
                href="https://doi.org/10.24215/18539912e068"
                target="_blank"
                rel="noreferrer"
              >
                https://doi.org/10.24215/18539912e068
              </a>
            </li>
            <li>
              DORA (2012). San Francisco Declaration on Research Assessment.
              Disponible en:{' '}
              <a
                href="https://sfdora.org/read/"
                target="_blank"
                rel="noreferrer"
              >
                https://sfdora.org/read/
              </a>
            </li>
            <li>
              Hicks, D., Wouters, P., Waltman, L. et al. Bibliometrics: The
              Leiden Manifesto for research metrics. Nature 520, 429–431 (2015).{' '}
              <a
                href="https://doi.org/10.1038/520429a"
                target="_blank"
                rel="noreferrer"
              >
                https://doi.org/10.1038/520429a
              </a>
            </li>
            <li>
              Tejada, M.A., Chalela, S., & Pallares, C. (2021). ABC de las
              Métricas Responsables. Consorcio Colombia. Disponible en:{' '}
              <a
                href="https://www.youtube.com/watch?v=bVfaRX0AFJc&t=3551s"
                target="_blank"
                rel="noreferrer"
              >
                https://www.youtube.com/watch?v=bVfaRX0AFJc&t=3551s
              </a>
            </li>
            <li>
              Wilsdon, J. (2016). The metric tide: The independent review of the
              role of metrics in research assessment & management. (p. 180).{' '}
              <a
                href="https://responsiblemetrics.org/the-metric-tide/"
                target="_blank"
                rel="noreferrer"
              >
                https://responsiblemetrics.org/the-metric-tide/
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Home;
