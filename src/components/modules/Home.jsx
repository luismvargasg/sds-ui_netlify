import React, { useEffect } from "react";

/* Components */
import HomeTable from "../HomeTable";
import SearchBar from "../SearchBar";
import { ReactComponent as Banner } from "../../media/banner.svg";

/* UI Library Components */
import { Card, Col, Divider, Row, Typography } from "antd";

/* Charts */
import BogotaMapChart from "../charts/BogotaMapChart";

/* UI Library Sub-components*/
const { Title } = Typography;

const Home = ({ core }) => {
  useEffect(() => {
    document.title = "SALUDATA";
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
          style={{ marginTop: "40px", marginBottom: 0, textAlign: "center" }}
        >
          <Card size="small" bordered style={{ borderRadius: "10px" }}>
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
      <Row justify="center" style={{ marginTop: "60px" }}>
        <Col xs={20} lg={14}>
          <Divider id="home__map--title">
            Investigación en salud sobre el territorio
          </Divider>
        </Col>
      </Row>
      <Row justify="space-around" align="middle" style={{ marginTop: "15px" }}>
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
    </>
  );
};

export default Home;
